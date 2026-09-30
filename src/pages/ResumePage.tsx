import { Fragment, type ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  careerOverview, careerProjects, certificateItems, educationItems, learningItems,
  primaryStacks, projects, secondaryStacks, sideProjectItems,
} from "../data/siteData";
import "./ResumePage.css";

const beta = projects.find((project) => project.slug === "side-project")!;
const betaInfo = sideProjectItems.find((project) => project.slug === "beta")!;
const chapchap = sideProjectItems.find((project) => project.slug === "dnd-15th-5")!;
const chapchapRepository = "https://github.com/dnd-side-project/dnd-15th-5-backend";

// Submission summaries of CareerPage, SideProjectPage and DndProjectPage; metrics retain their source scope.
const workPages = [
  {
    id: "resume-company", label: "회사 · 업무 시스템 개발", title: careerOverview.company,
    description: "공공기관 SI 프로젝트에서 업무 시스템의 기능 개발과 운영 유지보수를 담당하고 있습니다. 사용자 업무 흐름과 기관 운영 환경을 고려해 시스템을 개발합니다.",
    period: careerOverview.period, role: `${careerOverview.role} · ${careerOverview.meta}`,
    stack: "Java · Spring Boot · Spring Security · JPA · QueryDSL · MariaDB · Thymeleaf · Vue",
    cases: [
      {
        title: "기관 지정 프로세스를 도메인 규칙으로 구성",
        paragraphs: ["신청·접수·심사·지정·지정 후 변경의 5단계 흐름을 구현했습니다. 상태뿐 아니라 역할, 처리 기간, 선행 데이터에 따라 가능한 업무가 달라져 조건 분기가 늘어나는 상황이었습니다.", "DDD 관점에서 단계별 업무를 나누고, 조건 검증과 상태 전환을 도메인 내부 규칙으로 정리했습니다. 전환에 필요한 데이터 생성과 권한 변경을 하나의 트랜잭션에서 처리해 업무 기준 변경 시 수정 범위를 파악하고 반영하기 쉽게 구성했습니다."],
        references: [],
      },
      {
        title: "원본을 보존하는 Revision 기반 변경 이력",
        paragraphs: ["시설·장비·인력·체크리스트와 증빙자료 변경을 ADD/UPDATE/DELETE 리비전으로 분리하고, DRAFT/APPROVED/REJECTED 상태로 작성 중 데이터와 확정 데이터를 구분했습니다.", "조회 시 원본에 승인된 리비전을 병합하고, 작성 화면에는 해당 요청의 DRAFT까지 포함한 snapshot을 제공했습니다. 파일 변경도 같은 승인 흐름에 연결해 원본을 유지하면서 검토·승인·취소·이력 추적이 가능하도록 구현했습니다."],
        references: [],
      },
    ],
    link: { label: "회사 경험 상세", href: "https://dev.ohstone.me/career" },
  },
  {
    id: "resume-company-operations", label: "회사 · 데이터 관리와 운영 개선", title: "임상연구 관리와 운영 개선",
    description: "재생의료진흥재단의 임상연구 과제관리·정보제공 시스템과 교육포털에서 데이터 정합성, 변경 이력, 운영 환경을 개선했습니다.",
    period: "과제관리 2024.11 – 진행 중 · 교육포털 2026.05 – 진행 중", role: "백엔드 개발 · 운영 유지보수",
    stack: "Java · Spring MVC · MyBatis · MariaDB · JSP · FFmpeg · GitHub Actions · restic",
    cases: [
      {
        title: "같은 항목 체계로 비교하는 예산·집행 관리",
        paragraphs: ["과제별 예산과 집행 내역을 연차·항목 단위로 관리했습니다. 항목별 상세 내역과 상위 합계가 함께 유지돼야 하므로 저장·수정 시 합계 정합성과 변경 이력이 중요했습니다.", "공통코드 기반 계층 구조를 만들고 예산·집행에 동일한 항목 코드를 적용했습니다. 집행 내역의 등록·수정·삭제에 상세 저장, 상위 합계 갱신, 첨부파일 처리, 변경 이력 저장을 연결해 비교와 추적이 가능하도록 구현했습니다."],
        references: [],
      },
      {
        title: "연구 진행률과 지역 현황의 조회·추적",
        paragraphs: ["연구 마일스톤을 상위·하위 tree로 구성하고 단계별 정렬 순서와 진행률을 관리했습니다. 성과지표는 code/value 데이터로 분리하고, 기간·진행률 변경 전 tree와 metric을 이력으로 저장해 과거 시점의 상태도 조회할 수 있도록 했습니다.", "행정구역 SHP에서 변환한 JSON 좌표를 Kakao Map polygon overlay에 맞게 재가공했습니다. polygon에 지역 코드를 연결해 선택한 지역의 임상연구 상세 정보가 갱신되도록 구현했습니다."],
        references: [],
      },
      {
        title: "영상 저장소 37.11GB 절감과 업로드 압축 개선",
        paragraphs: ["200GB VM에서 영상이 157GB까지 누적돼 ffprobe로 bitrate·해상도·fps·파일 크기 분포를 분석했습니다. 세 가지 압축 방식을 샘플로 비교한 뒤, 해상도와 fps를 유지하고 bitrate를 조정해 37.11GB(23.67%)를 절감했습니다.", "신규 업로드에도 FFmpeg 비동기 트랜스코딩을 적용했습니다. 원본 저장 후 bitrate 구간별 목표값으로 압축하고, 변환 완료 후 원본을 교체해 이후 영상이 원본 그대로 누적되는 흐름을 개선했습니다."],
        references: [],
      },
      {
        title: "배포 환경 분리와 운영 데이터 백업 자동화",
        paragraphs: ["지정관리 시스템의 develop은 테스트 서버, main은 운영 서버로 배포되도록 GitHub Actions를 구성했습니다. 환경별 설정 생성, WAR 빌드, 서버별 배포 스크립트 실행을 자동화했습니다.", "업로드 파일은 restic 증분 백업으로 보관하고 DB dump는 pull 방식으로 수집했습니다. 두 작업을 cron 배치로 독립 실행해 장애 복구에 필요한 데이터를 확보하도록 구성했습니다."],
        references: [],
      },
    ],
    link: { label: "회사 경험 상세", href: "https://dev.ohstone.me/career" },
  },
  {
    id: "resume-beta", label: "사이드 프로젝트 · BETA", title: "BETA",
    description: "야구 팬 커뮤니티 앱으로, 팀 프로젝트로 개발해 실제 출시까지 이어진 서비스입니다. 검색·알림·관리자 기능을 중심으로 사용자 앱과 관리자 웹의 백엔드를 구현했습니다.",
    period: betaInfo.period, role: beta.role,
    stack: "Java · Spring Boot · MySQL · Redis · Elasticsearch · Logstash · Firebase · Docker · OCI · Testcontainers",
    cases: [
      {
        title: "검색 데이터 동기화와 누락 원인 개선",
        paragraphs: ["이벤트 유실 가능성과 Kafka 운영 부담을 고려해 MySQL 변경 이력을 Logstash로 조회하는 동기화를 선택했습니다. soft delete를 검색 문서 삭제에 반영하고 Testcontainers로 DB–Elasticsearch 동기화를 검증했습니다.", "bulk update와 해시태그 관계 변경 시 posts.updated_at이 갱신되지 않아 증분 조회에서 빠지는 문제를 수정했습니다. 추적 기준을 posts.updated_at으로 통일하고 조회 조건에 맞는 복합 인덱스를 추가했습니다."],
        references: [39, 54, 67].map((number) => ({ label: `PR #${number}`, href: `${beta.repository!.href}/pull/${number}` })),
      },
      {
        title: "커밋 이후 푸시 발송과 반복 알림 제한",
        paragraphs: ["Firebase 지연·실패가 저장 트랜잭션에 영향을 주지 않도록 도메인 이벤트와 AFTER_COMMIT으로 발송을 분리했습니다. PushPort와 어댑터로 커뮤니티 모듈의 Firebase 직접 의존을 제거했습니다.", "댓글·공감 알림 설정과 디바이스 토큰 관리를 구분하고, actor·target·post·유형을 조합한 Redis key에 TTL과 setIfAbsent를 적용해 일정 시간 내 반복 발송을 제한했습니다."],
        references: [58, 72].map((number) => ({ label: `PR #${number}`, href: `${beta.repository!.href}/pull/${number}` })),
      },
      {
        title: "관리자 서버·세션 분리와 운영 화면 구현",
        paragraphs: ["관리자 API를 admin-server로 분리했습니다. JWT의 client=ADMIN·권한·사용자 상태를 검증하고 Refresh Token의 Redis namespace도 분리해 일반 사용자와 세션이 섞이지 않도록 했습니다. 인증·인가 경로는 통합 테스트로 검증했습니다.", "핵심 도메인 규칙은 공유하며 관리자 조회 유스케이스를 분리했습니다. 팀 일정에 맞춰 AI 에이전트를 활용한 TypeScript·React 관리자 웹도 구현해 API 연동을 검증했습니다."],
        references: [44, 65].map((number) => ({ label: `PR #${number}`, href: `${beta.repository!.href}/pull/${number}` })),
      },
      {
        title: "장애 응답·알림·재시도를 분리한 운영 대응",
        paragraphs: ["DB 연결 실패·타임아웃은 503·DATABASE001로 응답하고 운영 개입이 필요한 예외만 Discord로 비동기 전송했습니다. 메일 실패는 email_outbox에 저장해 상태·횟수·다음 실행 시각에 따라 재시도하도록 구성했습니다."],
        references: [69, 71, 74].map((number) => ({ label: `PR #${number}`, href: `${beta.repository!.href}/pull/${number}` })),
      },
    ],
    link: { label: "GitHub · BETA Backend", href: beta.repository!.href },
  },
  {
    id: "resume-dnd-15th-5", label: "사이드 프로젝트 · ChapChap", title: "ChapChap",
    description: "일상의 소비를 기록하고 방문한 동네와 장소를 돌아보는 서비스입니다. Web/App 공통 로그인, 영수증 OCR, 장소 API 연동과 개발·테스트·배포 환경 개선을 담당했습니다.",
    period: chapchap.period, role: chapchap.meta,
    stack: "Java · Spring Boot · PostgreSQL · PostGIS · Redis · CLOVA OCR · AWS · Docker · ArchUnit · Testcontainers",
    cases: [
      {
        title: "Web/App 공통 소셜 로그인과 토큰 재사용 방지",
        paragraphs: ["Kakao·Google 인증 후 JWT 대신 2분간 일회용인 loginCode를 전달하고 PKCE S256으로 검증했습니다. state·loginCode는 조회와 동시에 소비하고, Refresh Token도 기존 jti를 소비한 후 회전시켜 재사용을 거부했습니다.", "웹은 보안 속성을 적용한 쿠키, 앱은 응답 본문으로 Refresh Token을 전달했습니다. 제공자별 인증 외의 코드 교환·JWT 발급 흐름은 공유했습니다."],
        references: [33, 44].map((number) => ({ label: `PR #${number}`, href: `${chapchapRepository}/pull/${number}` })),
      },
      {
        title: "OCR 결제금액 추출 개선과 영수증 이미지 수명 관리",
        paragraphs: ["CLOVA 응답의 행·좌표·신뢰도를 보존하고 라벨과 값의 위치로 결제금액을 판정했습니다. 동일 영수증 20장을 원본과 육안 대조한 내부 검증에서 최종 결제금액 추출이 13/20에서 20/20으로 개선됐습니다.", "실제 이미지 바이트·용량·해상도를 검사하고 S3 이미지를 24시간 임시 관리했습니다. 등록 시 비관적 락으로 소유자·상태·만료를 확인하고 롤백 보상 삭제와 만료 파일 정리·재시도를 구현했습니다."],
        references: [48, 62].map((number) => ({ label: `PR #${number}`, href: `${chapchapRepository}/pull/${number}` })),
      },
      {
        title: "장소 식별과 외부 API 호출량 제어",
        paragraphs: ["Place ID의 UNIQUE 제약과 ON CONFLICT로 동시 등록에서도 기존 장소 ID를 재사용했습니다. SGIS 주소 조회 실패는 좌표 역지오코딩으로 보완하고, 장소 검색이 실패해도 OCR 결과는 반환했습니다.", "Redis Lua로 OCR 호출 간격 예약과 Google API 월간 한도 확인·증가·만료를 원자적으로 처리했습니다. 대기 시간이나 호출량이 한도를 넘으면 외부 호출을 차단했습니다."],
        references: [52, 60, 63].map((number) => ({ label: `PR #${number}`, href: `${chapchapRepository}/pull/${number}` })),
      },
      {
        title: "모듈 경계 검증과 제한된 자원의 Dev 배포",
        paragraphs: ["Convention Plugin으로 빌드를 정리하고 ArchUnit으로 모듈·계층 의존과 순환 참조를 검사했습니다. PostgreSQL·Redis는 Testcontainers로 통합 테스트했습니다. 단일 EC2의 운영·Dev를 분리하고, 배포 중 Dev 중지·복구와 SSM 시간 초과 시 원격 명령 취소를 구성했습니다."],
        references: [6, 24, 54].map((number) => ({ label: `PR #${number}`, href: `${chapchapRepository}/pull/${number}` })),
      },
    ],
    link: { label: "GitHub · ChapChap Backend", href: chapchapRepository },
  },
];
const totalPages = workPages.length + 1;

function ResumePaper({ id, label, page, children }: { id: string; label: string; page: number; children: ReactNode }) {
  return (
    <article className="resume-paper" id={id} aria-labelledby={`${id}-title`}>
      <div className="resume-running-head"><span>{label}</span><span className="resume-wordmark">ohstone</span></div>
      {children}
      <footer className="resume-page-footer"><span>{label} <b>{String(page).padStart(2, "0")} / {String(totalPages).padStart(2, "0")}</b></span></footer>
    </article>
  );
}

export default function ResumePage() {
  return (
    <div className="resume-preview">
      <header className="resume-toolbar">
        <Link to="/" className="resume-back"><svg viewBox="0 0 20 20" aria-hidden="true"><path d="m11 5-5 5 5 5M6 10h10" /></svg>사이트로</Link>
        <span className="resume-preview-label">이력서 · 포트폴리오</span>
        <button type="button" onClick={() => window.print()}><svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 3v10m-4-4 4 4 4-4M4 14v3h12v-3" /></svg>PDF 저장</button>
      </header>
      <nav className="resume-index" aria-label="문서 목차">
        <a href="#resume-profile">소개</a><a href="#resume-company">회사</a><a href="#resume-beta">BETA</a><a href="#resume-dnd-15th-5">ChapChap</a>
      </nav>
      <main className="resume-document">
        <ResumePaper id="resume-profile" label="이력서 · 소개" page={1}>
          <header className="resume-identity">
            <div className="resume-identity-copy">
              <h1 id="resume-profile-title" data-page-heading tabIndex={-1}>오형석</h1>
              <p className="resume-role">Backend Developer</p>
              <address className="resume-contact">
                <a href="mailto:hello@ohstone.me">hello@ohstone.me</a>
                <a href="https://github.com/dhgudtmxhs">github.com/dhgudtmxhs</a>
                <a href="https://dev.ohstone.me">dev.ohstone.me</a>
              </address>
            </div>
            <img className="resume-photo" src="/rocks.png" alt="증명사진 자리에 넣은 돌멩이 임시 이미지" />
          </header>
          <section className="resume-intro" aria-labelledby="resume-intro-title">
            <h2 id="resume-intro-title">업무 흐름을 이해하고<br /><span>운영까지 고려하는 백엔드 개발자</span></h2>
            <p>Java와 Spring Boot를 기반으로 공공기관 SI 프로젝트의 기능 개발과 운영을 맡으며, 실제 업무 흐름에 맞게 안정적으로 동작하는 업무 시스템을 개발하고 있습니다.</p>
            <p>야구 커뮤니티 BETA에서는 검색·알림·관리자 기능과 배포 환경을 구현하며 출시를 경험했습니다. ChapChap에서는 소셜 로그인, 영수증 OCR, 장소 API 연동을 구현하며 외부 서비스와 데이터의 실패 상황을 다루고 있습니다.</p>
            <p>기능 구현에 그치지 않고 실제 운영 환경에서 안정적으로 동작하도록, 확장성과 유지보수성을 고려한 서버 구조를 고민합니다.</p>
          </section>
          <section className="resume-section" aria-labelledby="resume-skills-title">
            <h2 id="resume-skills-title">기술 <span>Skills</span></h2>
            <div className="resume-entry"><p className="resume-date">Backend</p><p className="resume-skills">{primaryStacks.join(" · ")}</p></div>
            <div className="resume-entry resume-entry-compact"><p className="resume-date">Infra / Architecture</p><p>{secondaryStacks.join(" · ")}</p></div>
          </section>
          <section className="resume-section" aria-labelledby="resume-education-title">
            <h2 id="resume-education-title">교육 · 자격 <span>Education & Certificates</span></h2>
            {[...educationItems, ...learningItems].map((item) => (
              <div className="resume-entry resume-entry-compact" key={item.title}><p className="resume-date">{item.period}</p><p><strong>{item.title}</strong></p></div>
            ))}
            <div className="resume-entry resume-entry-compact"><p className="resume-date">자격</p><p>{certificateItems.map((item) => `${item.title} (${item.period})`).join(" · ")}</p></div>
          </section>
        </ResumePaper>
        {workPages.map((page, index) => (
          <Fragment key={page.id}>
            <div className="resume-page-divider" aria-hidden="true"><span>{page.label}</span></div>
            <ResumePaper id={page.id} label={page.label} page={index + 2}>
              <header className="resume-project-header">
                <h2 id={`${page.id}-title`}>{page.title}</h2><p>{page.description}</p>
              </header>
              <dl className="resume-work-facts">
                <div><dt>기간</dt><dd>{page.period}</dd></div>
                <div><dt>역할</dt><dd>{page.role}</dd></div>
                <div><dt>기술</dt><dd>{page.stack}</dd></div>
              </dl>
              {page.id === "resume-company" && (
                <section className="resume-work-history" aria-labelledby="resume-work-history-title">
                  <h3 id="resume-work-history-title">참여 프로젝트</h3>
                  {careerProjects.map((project) => <div key={project.title}><span>{project.period}</span><p>{project.title}</p></div>)}
                </section>
              )}
              <div className="resume-stories">
                {page.cases.map((item) => (
                  <section className="resume-story" key={item.title} aria-label={item.title}>
                    <h3>{item.title}</h3>
                    {item.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    {item.references.length > 0 && <div className="resume-references" aria-label={`${item.title} 구현 기록`}>{item.references.map((reference) => <a key={reference.href} href={reference.href}>{reference.label}</a>)}</div>}
                  </section>
                ))}
              </div>
              <p className="resume-source-link"><a href={page.link.href}>{page.link.label}</a><span>{page.link.href.replace("https://", "")}</span></p>
            </ResumePaper>
          </Fragment>
        ))}
      </main>
    </div>
  );
}
