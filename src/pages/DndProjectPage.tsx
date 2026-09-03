import SectionTitle from "../components/SectionTitle";
import SiteHeader from "../components/SiteHeader";
import { sideProjectItems } from "../data/siteData";
import usePageShell from "../hooks/usePageShell";

interface ProjectLink {
  label: string;
  href: string;
}

interface ProjectDetailSection {
  title: string;
  body: string;
  links: ProjectLink[];
}

const repositoryUrl = "https://github.com/dnd-side-project/dnd-15th-5-backend";
const serviceUrl = "https://chapchap.kr";
const sideProject = sideProjectItems.find((item) => item.slug === "dnd-15th-5")!;
const projectSummaryItems = [
  "Gradle 멀티모듈과 Convention Plugin 구성",
  "ArchUnit·Testcontainers 기반 아키텍처·통합 테스트",
  "Kakao·Google 기반 Web/App 공통 소셜 로그인",
  "PKCE로 보호한 일회용 loginCode 교환과 Refresh Token 회전",
  "CLOVA OCR 후처리와 결제금액 판정 개선",
  "S3 영수증 이미지 24시간 임시 관리·정리",
  "Google Places·SGIS 연동과 Redis Lua 호출량 제어",
  "단일 EC2·RDS 내 Dev 분리와 배포 흐름 보완",
];
const projectTechStack = [
  "Java",
  "Spring Boot",
  "Spring Security",
  "JPA",
  "Gradle Multi Module",
  "ArchUnit",
  "Testcontainers",
  "PostgreSQL",
  "PostGIS",
  "Redis",
  "JWT",
  "Kakao OAuth",
  "Google OAuth",
  "CLOVA OCR",
  "Google Places API",
  "SGIS OpenAPI",
  "Docker",
  "GitHub Actions",
  "AWS",
  "Terraform",
  "Caddy",
];
const projectDetailSections: ProjectDetailSection[] = [
  {
    title: "Gradle 멀티모듈과 테스트 환경 구성",
    body:
      "도메인 기능이 추가될 때 빌드 설정과 모듈 책임이 섞이지 않도록 프로젝트 시작 단계에서 Gradle 멀티모듈 구조를 구성했습니다. app-server는 실행과 도메인 모듈 조립을 담당하고, 각 도메인 모듈이 자신의 코드와 영속 데이터를 소유하는 구조를 기준으로 삼았습니다. 같은 기준으로 module-report 골격을 추가할 때 settings.gradle, app-server 조립, Dockerfile과 공통 test fixture 연결을 함께 반영했습니다.\n\n초기에는 JPA, Redis, Security, OAuth, Cache 같은 의존성이 하나의 Spring Convention Plugin을 통해 모든 도메인 모듈에 함께 적용됐습니다. 실제 사용 범위를 기준으로 Java, Spring 공통, 라이브러리, 실행 모듈용 Convention Plugin을 나누고, Redis·OAuth·JWT 같은 의존성은 필요한 모듈에만 선언했습니다. 라이브러리 버전은 Version Catalog에서 관리했습니다.\n\n정한 경계가 코드 변경 과정에서 무너지지 않도록 ArchUnit 테스트를 추가했습니다. 계층 배치와 의존 방향, 다른 도메인의 Application 계층만 참조하는 규칙, 순환 의존 여부를 자동으로 검사했습니다.\n\nPostgreSQL과 Redis가 필요한 통합 테스트는 module-core의 Testcontainers 설정을 공통으로 재사용하도록 구성했습니다. 실제 JDBC 연결과 Redis PING 응답까지 확인해 컨테이너 실행 여부뿐 아니라 애플리케이션 연결도 함께 검증했습니다.",
    links: [
      { label: "PR #6", href: `${repositoryUrl}/pull/6` },
      { label: "PR #17", href: `${repositoryUrl}/pull/17` },
      { label: "PR #18", href: `${repositoryUrl}/pull/18` },
      { label: "PR #24", href: `${repositoryUrl}/pull/24` },
    ],
  },
  {
    title: "Web/App 공통 소셜 로그인과 토큰 관리",
    body:
      "웹과 WebView 앱이 같은 프론트엔드를 사용하지만 OAuth 인증을 마친 뒤 돌아오는 경로와 Refresh Token 전달 방식은 달라야 했습니다. JWT를 인증 완료 리디렉션 URL에 직접 노출하지 않도록 Kakao·Google OAuth 콜백은 백엔드가 처리하고, 웹 콜백 URL과 앱 커스텀 스킴 딥링크에는 2분간 한 번만 사용할 수 있는 loginCode만 전달했습니다.\n\n로그인 시작 시 클라이언트가 생성한 codeChallenge를 OAuth 제공자·클라이언트 유형과 함께 Redis에서 state에 연결해 저장하고, loginCode와 codeVerifier를 다시 교환할 때 S256으로 검증했습니다. 유효한 state와 loginCode는 조회와 동시에 소비해 재사용을 막고, 저장된 OAuth 제공자와 실제 콜백 제공자가 다르거나 codeVerifier가 일치하지 않으면 인증을 거부하도록 처리했습니다.\n\nGoogle을 추가할 때 로그인 코드 교환과 계정 조회, JWT 발급 흐름을 복제하지 않고 OAuth 제공자별 인증 부분만 Port와 Client로 분리했습니다. Google ID Token은 Google JWK와 RS256으로 서명과 만료를 검증하고, iss·aud·nonce·sub를 추가로 확인했습니다.\n\n웹에서는 Access Token을 응답 본문으로 전달하고, 운영 환경의 Refresh Token은 HttpOnly·Secure·SameSite=Lax 쿠키로 전달했습니다. 앱에서는 두 토큰을 모두 응답 본문으로 전달했습니다. 재발급 시 Redis에 저장한 기존 Refresh Token의 jti를 먼저 소비한 뒤 새 토큰 쌍을 발급하고, 새 Refresh Token의 jti를 다시 저장해 같은 토큰의 재사용을 거부했습니다. JWT의 클라이언트 유형과 재발급 경로가 일치하는지도 함께 확인했습니다.",
    links: [
      { label: "PR #33", href: `${repositoryUrl}/pull/33` },
      { label: "PR #44", href: `${repositoryUrl}/pull/44` },
    ],
  },
  {
    title: "영수증 OCR 기반 소비 기록 등록",
    body:
      "수기 입력 부담을 줄이기 위해 영수증 이미지를 CLOVA OCR General로 인식하고, 상호명·주소·거래 일시·결제금액을 소비 기록 초안으로 반환하도록 구현했습니다. 요청 헤더와 파일명만 신뢰하지 않고 실제 바이트를 ImageIO로 디코딩해 JPEG·PNG 여부, 5MB 용량과 가로·세로 4096px 제한을 확인한 뒤 외부 API를 호출했습니다.\n\nCLOVA 응답을 문자열 목록으로 평탄화하면 같은 행의 라벨과 값, 여러 행으로 나뉜 주소의 관계를 잃게 됩니다. lineBreak·boundingPoly·inferConfidence를 보존해 행과 위치 관계를 재구성하고, 상호명·주소·거래 일시·결제금액 추출기를 분리해 하나를 찾지 못해도 나머지 결과는 유지하도록 했습니다.\n\n결제금액은 가장 큰 숫자를 고르는 대신 결제금액·총합계 같은 라벨과 값의 위치를 우선하고, 승인번호·공급가액·세액·할인·쿠폰·포인트를 후보에서 제외했습니다. 리팩터링 전후에 같은 영수증 이미지 20장을 원본과 육안 대조한 내부 검증에서, 해당 샘플의 최종 결제금액 추출 결과가 13/20에서 20/20으로 개선됐습니다.\n\n같은 Redis를 사용하는 서버 인스턴스들이 CLOVA OCR 요청 간격을 공유하도록, Redis TIME을 기준으로 다음 호출 시각을 예약하는 Lua 스크립트를 추가했습니다. 예약을 원자적으로 처리해 현재 1.1초의 호출 간격을 지키고, 예상 대기 시간이 5초를 넘으면 외부 API를 호출하지 않고 429 응답을 반환하도록 했습니다.\n\nOCR과 최종 소비 등록은 별도 요청이고 S3는 DB 트랜잭션에 참여하지 않기 때문에, 사용자가 등록을 마치지 않거나 DB 저장이 실패하면 이미지가 남을 수 있습니다. S3 객체와 연결된 이미지 메타데이터를 24시간 TEMPORARY 상태로 관리하고, 최종 등록 시 사용자·상태·만료 여부를 비관적 락으로 확인한 뒤 ATTACHED로 전환했습니다. DB 저장이 롤백되면 S3 보상 삭제를 시도하고, 등록 없이 만료된 이미지는 정기 작업에서 DELETING으로 전환한 뒤 삭제했습니다. 이 정리 과정에서 S3 삭제가 실패하면 다음 실행에서 재시도하도록 구성했습니다.",
    links: [
      { label: "PR #48", href: `${repositoryUrl}/pull/48` },
      { label: "PR #62", href: `${repositoryUrl}/pull/62` },
    ],
  },
  {
    title: "장소 데이터 연동과 외부 API 호출 제어",
    body:
      "영수증 OCR에서 인식한 상호명과 주소만으로는 같은 장소를 계속 식별하기 어려웠습니다. 상호명과 주소를 Google Places Text Search에 함께 전달하고, 검색 결과의 첫 번째 후보에서 Place ID, 장소명, Google 응답 주소, 좌표와 사진 식별값을 가져오도록 구성했습니다. 주소가 없으면 상호명만 사용하고, 검색이 실패해도 OCR 결과는 반환하며 사진 조회 실패는 썸네일만 제외하도록 처리했습니다.\n\n장소를 저장할 때 필요한 행정동 코드와 이름은 SGIS로 조회했습니다. 먼저 도로명주소로 조회하고, SGIS 주소 조회 결과가 없거나 호출이 실패하면 장소 좌표로 역지오코딩하는 fallback을 추가했습니다. SGIS access token은 만료 시각을 기준으로 메모리에 캐시해 인증 API를 매번 호출하지 않도록 했습니다.\n\n같은 장소가 반복되거나 동시에 등록돼도 places row가 늘어나지 않도록 Google Place ID를 식별 기준으로 사용했습니다. 기존 DB의 Google Place ID UNIQUE 제약을 활용해 PostgreSQL의 INSERT ... ON CONFLICT DO NOTHING RETURNING id로 저장하고, 충돌하면 기존 ID를 다시 조회해 장소 정보를 덮어쓰지 않고 같은 ID를 재사용하도록 처리했습니다.\n\nText Search와 Photo Media의 월간 호출량은 Redis에서 관리했습니다. 한도 확인, INCR, Asia/Seoul 기준 다음 달 1일 만료 설정을 Lua 스크립트 하나로 실행해 카운터 조회와 증가 사이의 경쟁 조건을 막았습니다. 현재 운영 한도는 Text Search 4,500건, Photo Media 20,000건이며, 한도를 넘거나 Redis 처리에 실패하면 해당 Google API를 호출하지 않도록 구성했습니다.",
    links: [
      { label: "PR #48", href: `${repositoryUrl}/pull/48` },
      { label: "PR #52", href: `${repositoryUrl}/pull/52` },
      { label: "PR #60", href: `${repositoryUrl}/pull/60` },
      { label: "PR #63", href: `${repositoryUrl}/pull/63` },
    ],
  },
  {
    title: "Dev 환경 분리와 배포 흐름 개선",
    body:
      "초기 AWS 인프라가 구성된 뒤에는 Dev 환경 분리와 배포 흐름 보완을 맡았습니다. Production 배포 중단 시간을 줄이기 위해 Blue/Green 전환 방식을 제안했고, 한 대의 EC2에서 Production과 Dev 환경을 함께 운영할 수 있도록 Dev 배포 workflow, 애플리케이션·Redis 컨테이너, 데이터베이스와 S3 버킷, Caddy 라우팅을 추가했습니다.\n\nProduction Blue/Green 컨테이너와 Dev 컨테이너를 동시에 실행하면 메모리가 부족할 수 있어, 운영 배포 중에는 Dev 컨테이너를 잠시 중지하고 배포가 끝난 뒤 헬스체크를 거쳐 복구하도록 배포 스크립트를 보완했습니다. Dev 애플리케이션과 Redis는 운영 네트워크에서 분리하고, Caddy만 공유 네트워크를 통해 /dev/api 요청을 전달하도록 구성했습니다.\n\n배포 환경 변수는 GitHub Actions에서 EC2로 직접 전달하지 않고, KMS로 암호화한 Parameter Store SecureString에 저장한 뒤 SSM 명령에서 읽도록 변경했습니다. SSM polling이 시간 초과되면 원격 명령도 취소해 workflow 실패 뒤에 배포 명령이 계속 실행되지 않도록 처리했습니다.\n\n현재는 AWS 크레딧으로 서비스를 운영하고 있습니다. 크레딧을 모두 사용한 뒤에도 서비스를 계속 운영한다면, Docker Compose 기반 구성을 OCI PAYG 환경으로 이전할 계획입니다.",
    links: [{ label: "PR #54", href: `${repositoryUrl}/pull/54` }],
  },
];

export default function DndProjectPage() {
  const { dark, setDark, mounted } = usePageShell();

  return (
    <div className={`detail-shell career-shell ${mounted ? "page-ready" : ""}`}>
      <div className="ambient ambient-left" aria-hidden="true" />
      <div className="ambient ambient-right" aria-hidden="true" />

      <SiteHeader dark={dark} onToggleDark={() => setDark((value) => !value)} />

      <main className="doc-main">
        <article className="doc-sheet doc-sheet-single" aria-labelledby="dnd-project-title">
          <div className="doc-content">
            <header className="doc-header">
              <p className="doc-section-title">Side Projects</p>
              <article className="doc-info-row" aria-label="ChapChap project overview">
                <div>
                  <h1 id="dnd-project-title" className="doc-info-title" data-page-heading tabIndex={-1}>
                    ChapChap
                  </h1>
                  <p className="doc-info-subtext">{sideProject.meta}</p>
                </div>
                <div className="doc-info-meta">
                  <span>{sideProject.period}</span>
                  <span className="side-project-links">
                    <a className="side-project-repository-link" href={repositoryUrl} target="_blank" rel="noreferrer">
                      GitHub Repository
                    </a>
                    <span aria-hidden="true">·</span>
                    <a className="side-project-repository-link" href={serviceUrl} target="_blank" rel="noreferrer">
                      Web
                    </a>
                  </span>
                </div>
                <div className="doc-info-description side-project-description">
                  {sideProject.description?.split(/\n+/).map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            </header>

            <section className="doc-section" aria-labelledby="dnd-project-summary-title">
              <SectionTitle id="dnd-project-summary-title">Project Summary</SectionTitle>
              <div className="side-project-summary-grid">
                {projectSummaryItems.map((item) => (
                  <article className="side-project-summary-item" key={item}>
                    <span aria-hidden="true" />
                    <p>{item}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="doc-section" aria-labelledby="dnd-project-detail-title">
              <SectionTitle id="dnd-project-detail-title">Project Details</SectionTitle>
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
                                <span className="side-project-pr-link-group" key={link.href}>
                                  {linkIndex > 0 ? <span className="side-project-pr-separator">-&gt;</span> : null}
                                  <a href={link.href} target="_blank" rel="noreferrer">
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
                        {projectTechStack.map((item) => (
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
