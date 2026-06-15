import SectionTitle from "../components/SectionTitle";
import SiteHeader from "../components/SiteHeader";
import usePageShell from "../hooks/usePageShell";
import { projects } from "../data/siteData";

const sideProject = projects.find((item) => item.slug === "side-project");
const prBaseUrl = sideProject.repository.href;
const projectSummaryItems = [
  "DB-검색엔진 동기화 파이프라인 구축",
  "이벤트 기반 푸시 알림과 트랜잭션 분리",
  "관리자 서버 분리와 인증·인가 구현",
  "장애 상황 대응과 재시도 구조 개선",
  "Elasticsearch 기반 통합 검색과 검색 로그 기능 구현",
  "Port/Adapter 기반 멀티모듈 의존성 분리",
  "MySQL·Redis·Elasticsearch·Logstash 통합 테스트 환경 구축",
  "GitHub Actions·Docker·OCI 기반 서버 배포 구조 구성",
];
const projectDetailSections = [
  {
    title: "DB-검색엔진 동기화 파이프라인 구축",
    body:
      "게시글, 사용자, 해시태그 데이터를 Elasticsearch 검색 문서로 반영하기 위해 Logstash 기반 DB 동기화 파이프라인을 구축했습니다. 애플리케이션 이벤트 방식과 CDC 방식도 검토했지만, 이벤트 유실 가능성, Kafka 운영 부담, 프로젝트 규모를 고려해 MySQL의 변경 이력을 Logstash가 주기적으로 조회해서 Elasticsearch에 반영하는 구조를 선택했습니다.\n\n초기에는 posts/users/hashtags 파이프라인을 분리해 구성하고, MySQL·Elasticsearch·Logstash를 함께 띄우는 Testcontainers 통합 테스트로 DB 변경 사항이 검색 인덱스에 반영되는지 검증했습니다. 삭제된 row를 Logstash가 직접 감지하기 어렵기 때문에, 게시글 상태와 deleted_at을 기준으로 Elasticsearch 문서를 index/delete하도록 처리해 soft delete 흐름까지 동기화 대상에 포함했습니다.\n\n운영 과정에서는 증분 동기화 누락 가능성이 있는 케이스를 보완했습니다. 댓글 수, 감정 수, 해시태그 변경도 검색 정렬 점수와 노출 정보에 영향을 주기 때문에, JPQL bulk update 시 updated_at이 자동 갱신되지 않는 문제를 직접 갱신하도록 수정했습니다. post_hashtag 관계 변경처럼 게시글 row 자체가 변경되지 않는 경우에도 posts.updated_at을 touch해 Logstash가 해당 게시글을 다시 읽을 수 있도록 했습니다.\n\n마지막으로 posts 파이프라인의 증분 추적 기준을 posts.updated_at으로 일원화하고, updated_at 기준 조회에 맞는 복합 인덱스를 추가해 polling 주기를 줄여도 DB 조회 비용이 커지지 않도록 정리했습니다. 이를 통해 애플리케이션 코드에 검색엔진 동기화 로직을 직접 넣지 않으면서도 DB 변경 사항이 검색 문서에 안정적으로 반영되는 구조를 만들었습니다.",
    links: [
      { label: "PR #39", href: `${prBaseUrl}/pull/39` },
      { label: "PR #54", href: `${prBaseUrl}/pull/54` },
      { label: "PR #67", href: `${prBaseUrl}/pull/67` },
    ],
  },
  {
    title: "이벤트 기반 푸시 알림과 트랜잭션 분리",
    body:
      "댓글 작성이나 감정 표현 같은 게시글 상호작용에서 Firebase를 직접 호출하지 않고, DB 트랜잭션이 정상 커밋된 뒤에만 푸시 알림이 발송되도록 이벤트 기반 구조로 분리했습니다. 푸시 발송은 외부 네트워크 호출이기 때문에 게시글이나 댓글 저장 트랜잭션 안에서 함께 처리하면, Firebase 지연이나 실패가 핵심 비즈니스 로직에 영향을 줄 수 있다고 판단했습니다.\n\n이를 해결하기 위해 커뮤니티 모듈에서는 댓글 작성, 감정 표현 등 알림이 필요한 시점에 도메인 이벤트만 발행하고, TransactionalEventListener AFTER_COMMIT을 통해 커밋 이후 푸시 발송을 수행하도록 구성했습니다. 실제 Firebase 연동은 module-core의 PushPort 인터페이스와 module-account의 어댑터로 분리해, 커뮤니티 모듈이 Firebase 구현체에 직접 의존하지 않도록 했습니다.\n\n또한 푸시 발송 대상을 정확히 제어하기 위해 디바이스 토큰 관리와 앱 내부 푸시 설정을 정리했습니다. 댓글 알림과 공감 알림 설정을 분리하고, 사용자가 앱에서 허용한 알림 유형에 따라 발송 대상 디바이스를 조회하도록 변경했습니다. 이를 통해 OS 알림 권한, FCM 토큰, 서비스 내부 알림 설정이 섞이지 않도록 책임을 나누었습니다.\n\n이후 같은 게시글에서 짧은 시간 안에 반복적으로 발생하는 댓글과 공감 알림이 사용자 경험을 해치지 않도록 Redis 기반 발송 제한을 추가했습니다. actor, target, post, notification type을 조합한 key에 TTL을 설정하고, setIfAbsent 방식으로 일정 시간 내 중복 발송을 차단했습니다. 이를 통해 푸시 알림은 커밋 이후 안정적으로 발송하면서도, 과도한 반복 알림은 제한하는 구조로 개선했습니다.",
    links: [
      { label: "PR #58", href: `${prBaseUrl}/pull/58` },
      { label: "PR #72", href: `${prBaseUrl}/pull/72` },
    ],
  },
  {
    title: "관리자 서버 분리와 인증·인가 구현",
    body:
      "사용자 앱 API와 관리자 웹 API의 책임을 분리하기 위해 admin-server 모듈을 추가하고, 관리자 전용 인증·인가 흐름을 구현했습니다. 사용자와 관리자가 같은 users 테이블을 공유하되, 관리자 API는 별도 서버 모듈에서 처리하도록 구성해 운영 진입점과 보안 정책을 분리했습니다.\n\n기존 JWT 발급 구조는 재사용하되, 관리자 토큰에는 client=ADMIN 클레임을 추가하고 ADMIN 권한, 사용자 상태, DB에서 ADMIN 권한으로 지정된 계정인지 함께 검증하도록 했습니다. 이를 통해 일반 사용자 access token이 /api/v1/admin/** 경로에서 재사용되지 않도록 막고, 관리자 권한을 가진 계정만 관리자 로그인에 성공하도록 제한했습니다.\n\n또한 관리자 refresh token은 일반 사용자 refresh token과 Redis key namespace를 분리해, 관리자 로그인 과정이 사용자 앱의 로그인 세션을 덮어쓰지 않도록 했습니다. 로그인, 토큰 재발급, 로그아웃, 내 정보 조회 API는 통합 테스트로 검증했고, 인증 성공, 일반 사용자 차단, 토큰 없음, 권한 없음 같은 주요 보안 케이스를 함께 확인했습니다.\n\n이후 관리자 웹에서 필요한 게시글 상세 조회와 댓글 페이징 API를 추가했습니다. 게시글과 댓글의 핵심 도메인 로직은 기존 커뮤니티 도메인 규칙을 그대로 사용하고, 관리자 화면에 필요한 조회 조합과 응답 구성만 application/admin 계층으로 분리했습니다. 이를 통해 사용자 앱의 조회 흐름과 관리자 웹의 운영용 조회 흐름이 섞이지 않도록 했고, 도메인 규칙은 공유하면서도 관리자 기능의 변경 범위는 관리자 유스케이스 내부에 닫히도록 구성했습니다.\n\n관리자 웹은 원래 프론트엔드 개발 범위였지만, 팀 일정상 구현 여유가 부족해 백엔드 담당이었던 제가 AI 에이전트를 활용해 TypeScript와 React 기반의 관리자 웹을 구현했습니다. 덕분에 관리자 API를 실제 화면 흐름에 맞춰 바로 검증하고, 백엔드와 관리자 웹 사이의 연동 이슈를 빠르게 조정할 수 있었습니다.",
    links: [
      {
        label: "GitHub Repository",
        href: "https://github.com/BETA-BasEball-Together-Always/BETA-Admin-Web",
        type: "repository",
      },
      { label: "PR #44", href: `${prBaseUrl}/pull/44` },
      { label: "PR #65", href: `${prBaseUrl}/pull/65` },
    ],
  },
  {
    title: "장애 상황 대응과 재시도 구조 개선",
    body:
      "운영 중 데이터베이스 점검이나 재시작이 발생했을 때 요청이 오래 대기하거나 모호한 500 응답으로 끝나지 않도록, 데이터베이스 연결 예외와 타임아웃을 별도 장애 응답으로 분리했습니다. HikariCP와 JDBC connectTimeout을 설정해 커넥션 확보 실패를 빠르게 감지하고, DB 연결 실패는 503 Service Unavailable과 DATABASE001 에러 코드로 일관되게 응답하도록 정리했습니다.\n\n또한 서버 장애를 운영자가 빠르게 인지할 수 있도록 Discord Webhook 기반 비동기 알림을 추가했습니다. 모든 예외를 알림으로 보내기보다 비즈니스 예외는 제외하고, DB 장애와 예상치 못한 500 오류처럼 운영 개입이 필요한 케이스만 알림 대상으로 제한했습니다. 알림 전송은 API 응답 흐름과 분리해 Discord 장애가 사용자 요청에 영향을 주지 않도록 했고, 같은 장애가 반복될 때는 일정 시간 동안 중복 전송을 제한해 알림 피로도를 줄였습니다.\n\n외부 SMTP 실패로 회원가입 성공 흐름이 깨지지 않도록 환영 메일 발송에는 outbox 기반 재시도 구조를 적용했습니다. 메일 발송 실패 시 email_outbox에 실패 건을 저장하고, 스케줄러가 PENDING/RETRYING 상태의 작업을 주기적으로 재시도하도록 구성했습니다. 재시도 횟수와 다음 실행 시간을 관리해 일시적인 외부 서비스 장애는 복구 가능하게 처리하고, 최대 재시도 횟수를 넘은 작업은 DEAD 상태로 마무리해 운영자가 후속 확인할 수 있도록 했습니다.\n\n이를 통해 DB 장애, 서버 예외, 외부 메일 발송 실패처럼 운영 중 발생할 수 있는 실패를 각각 응답, 알림, 재시도 관점에서 분리해 다루도록 개선했습니다.",
    separator: "|",
    links: [
      { label: "PR #69", href: `${prBaseUrl}/pull/69` },
      { label: "PR #71", href: `${prBaseUrl}/pull/71` },
      { label: "PR #74", href: `${prBaseUrl}/pull/74` },
    ],
  },
];

export default function SideProjectPage() {
  const { dark, setDark, mounted } = usePageShell();

  return (
    <div className={`detail-shell career-shell ${mounted ? "page-ready" : ""}`}>
      <div className="ambient ambient-left" aria-hidden="true" />
      <div className="ambient ambient-right" aria-hidden="true" />

      <SiteHeader dark={dark} onToggleDark={() => setDark((value) => !value)} />

      <main className="doc-main">
        <article className="doc-sheet doc-sheet-single" aria-labelledby="side-project-title">
          <div className="doc-content">
            <header className="doc-header">
              <p className="doc-section-title">Side Project</p>
              <article className="doc-info-row" aria-label="Side project overview">
                <div>
                  <h3 id="side-project-title" className="doc-info-title">
                    {sideProject.title}
                  </h3>
                  <p className="doc-info-subtext">{sideProject.role}</p>
                </div>
                <div className="doc-info-meta">
                  <span>{sideProject.facts?.find((item) => item.label === "Period")?.value}</span>
                  <span className="side-project-links">
                    {sideProject.repository ? (
                      <a
                        className="side-project-repository-link"
                        href={sideProject.repository.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub Repository
                      </a>
                    ) : null}
                    {sideProject.repository && sideProject.appStore ? <span aria-hidden="true">·</span> : null}
                    {sideProject.appStore ? (
                      <a
                        className="side-project-repository-link"
                        href={sideProject.appStore.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {sideProject.appStore.label}
                      </a>
                    ) : null}
                  </span>
                </div>
                <div className="doc-info-description side-project-description">
                  {sideProject.description.split(/\n+/).map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            </header>

            <section className="doc-section" aria-labelledby="side-project-summary-title">
              <SectionTitle id="side-project-summary-title">Project Summary</SectionTitle>
              <div className="side-project-summary-grid">
                {projectSummaryItems.map((item) => (
                  <article className="side-project-summary-item" key={item}>
                    <span aria-hidden="true" />
                    <p>{item}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="doc-section" aria-labelledby="side-project-detail-title">
              <SectionTitle id="side-project-detail-title">Project Details</SectionTitle>
              <div className="career-featured-list">
                <article className="career-featured-item side-project-detail-card">
                  <div className="career-detail-blocks">
                    <div className="career-detail-section-list">
                      {projectDetailSections.map((section, index) => (
                        <article className="career-detail-section-item" key={section.title}>
                          <header className="career-detail-section-header side-project-detail-section-header">
                            <div className="side-project-detail-title-group">
                              <span className="career-detail-section-number">
                                {String(index + 1).padStart(2, "0")}
                              </span>
                              <h5>{section.title}</h5>
                            </div>
                            <div className="side-project-pr-links" aria-label={`${section.title} related PRs`}>
                              {section.links.map((link, linkIndex) => (
                                <span
                                  className={`side-project-pr-link-group${
                                    link.type === "repository" ? " side-project-repository-link-group" : ""
                                  }`}
                                  key={link.href}
                                >
                                  {link.type !== "repository" &&
                                  linkIndex > 0 &&
                                  section.links[linkIndex - 1]?.type !== "repository" ? (
                                    <span className="side-project-pr-separator">
                                      {section.separator ?? "->"}
                                    </span>
                                  ) : null}
                                  <a
                                    className={link.type === "repository" ? "side-project-detail-repository-link" : ""}
                                    href={link.href}
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    {link.label}
                                  </a>
                                </span>
                              ))}
                            </div>
                          </header>
                          <div className="career-detail-section-copy">
                            {section.body.split(/\n+/).map((paragraph) => (
                              <p key={paragraph}>{paragraph}</p>
                            ))}
                          </div>
                        </article>
                      ))}
                    </div>
                    <section className="career-detail-block">
                      <h4>Tech Stack</h4>
                      <div className="career-detail-stack">
                        {sideProject.techStack.map((item) => (
                          <span key={item}>{item}</span>
                        ))}
                      </div>
                    </section>
                  </div>
                </article>
              </div>
            </section>
          </div>
        </article>
      </main>
    </div>
  );
}
