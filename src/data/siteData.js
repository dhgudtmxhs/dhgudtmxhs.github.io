export const projects = [
  {
    slug: "about-me",
    index: "01",
    title: "About Me",
    navTitle: "About Me",
    subtitle: "Profile",
    summary: "프로필, 경력, 교육, 자격, 기술 스택을 한 장으로 정리합니다.",
    meta: "PROFILE",
    description:
      "공공기관 SI 개발 및 운영 경험과 Java/Spring Boot 기반 백엔드 개발 경험을 중심으로 소개합니다.",
    stack: ["Profile", "Career", "Skills"],
    role: "자기소개, 경력, 교육, 자격증, 기술 스택 정리",
    outcome: "포트폴리오에서 기본 정보를 빠르게 파악할 수 있는 프로필 문서 구성",
  },
  {
    slug: "career",
    index: "02",
    title: "Career",
    navTitle: "Career",
    subtitle: "Work Experience",
    summary: "현재 맡고 있는 업무와 실무에서 다루는 기술을 정리합니다.",
    meta: "WORK EXPERIENCE",
    description:
      "현재 담당 중인 서비스에서 어떤 기능을 개발하고 운영하는지, 실무에서 어떤 기술과 흐름을 다루는지 보여주는 영역입니다.",
    stack: ["Public Service", "Operation", "Backend"],
    role: "기능 개발, 운영 업무, 서비스 유지보수",
    outcome: "실무 경험과 현재 맡고 있는 업무를 명확하게 전달",
  },
  {
    slug: "side-project",
    index: "03",
    title: "BETA - Baseball Together Always",
    navTitle: "Side Project",
    subtitle: "Backend Server",
    summary: "야구 팬 커뮤니티 BETA의 사용자 앱과 관리자 웹을 위한 백엔드 서버입니다.",
    meta: "SIDE PROJECT",
    description:
      "BETA는 야구 커뮤니티 앱으로, 팀 프로젝트로 개발해 실제 출시까지 이어진 서비스입니다. 저는 검색, 알림, 관리자 기능을 중심으로 사용자 앱과 관리자 웹에 필요한 백엔드 기능을 구현했습니다.\n\n백엔드는 사용자 API, 관리자 API, 도메인 모듈을 분리한 Gradle 멀티모듈 구조로 구성하여 기능 영역별 책임과 변경 범위를 나누었습니다. 주요 기능으로는 Elasticsearch와 Logstash를 활용한 검색 데이터 동기화, 주요 비즈니스 로직과 푸시 발송 트랜잭션을 분리한 Firebase 푸시 알림, Redis 기반 반복 알림 제한 등이 있습니다.\n\n관리자 기능을 구현하는 과정에서는 TypeScript와 React 기반 관리자 웹을 직접 구현했습니다. 이러한 기능을 구현하고 실제 출시까지 이어가는 과정에서 GitHub Actions 기반 배포 자동화, OCI 배포 환경 구성, Prometheus/Grafana 기반 모니터링을 함께 다루며 배포와 운영에 필요한 흐름을 경험했습니다.",
    stack: ["Java", "Spring Boot", "Redis", "Elasticsearch", "Firebase Admin", "Docker"],
    role: "Backend · Infra",
    outcome: "관리자 기능, 검색 안정화, 푸시 알림, 운영 안정성 개선을 중심으로 백엔드 기능을 구현했습니다.",
    repository: {
      label: "View GitHub Repository",
      href: "https://github.com/BETA-BasEball-Together-Always/BETA-Backend-Server",
    },
    appStore: {
      label: "App Store",
      href: "https://apps.apple.com/kr/app/beta-%EC%95%BC%EA%B5%AC%EC%BB%A4%EB%AE%A4%EB%8B%88%ED%8B%B0/id6761046053",
    },
    facts: [
      { label: "Repository", value: "BETA Backend Server" },
      { label: "Period", value: "2025.01 - 2025.05" },
      { label: "Role", value: "Backend · Infra" },
    ],
    overview:
      "BETA는 야구 팬들이 팀과 경기를 중심으로 게시글, 댓글, 검색, 알림을 사용하는 커뮤니티 앱입니다. 백엔드는 사용자 API와 관리자 API를 분리하고, 계정·커뮤니티·검색·공통 모듈을 나눠 운영과 확장성을 고려한 구조로 설계되었습니다.",
    myRole:
      "저는 관리자 기능, 검색 안정화, 푸시 알림, Redis 기반 중복 알림 제한, 장애 알림과 DB 예외 처리처럼 실제 운영 중 문제를 줄이는 백엔드 작업을 주로 담당했습니다.",
    workSections: [
      {
        title: "관리자 API",
        body:
          "관리자 사용자 목록, 액션 로그, 게시글·댓글 목록, 게시글 상세, 댓글 페이징, 사용자 통계 API를 구현하고 관리자 응답 구조와 네이밍을 정리했습니다.",
      },
      {
        title: "검색과 데이터 동기화",
        body:
          "Elasticsearch 검색 기능 안정화와 Logstash 증분 동기화 쿼리 최적화를 진행했습니다. 해시태그 변경 시 검색 인덱스에 반영되지 않는 흐름도 함께 보완했습니다.",
      },
      {
        title: "푸시 알림",
        body:
          "Firebase Admin SDK 기반 게시글 상호작용 푸시 알림, 디바이스 푸시 설정 구조, iOS APNs payload, 푸시 설정 조회 API, 조건부 빈 등록 구조를 구현했습니다.",
      },
      {
        title: "운영 안정성",
        body:
          "DB 연결 예외 처리와 커넥션 타임아웃 설정, 서버 장애 Discord 알림, 인기 게시글 fallback, Redis 기반 알림 발송 제한, 환영 메일 재시도용 아웃박스 패턴을 추가했습니다.",
      },
    ],
    prHighlights: [
      { number: 74, title: "환영 메일 실패 재시도용 이메일 아웃박스 패턴 추가", tag: "Reliability" },
      { number: 72, title: "Redis 기반 게시글 단위 알림 발송 제한 추가", tag: "Notification" },
      { number: 71, title: "서버 장애 디스코드 알림 추가", tag: "Monitoring" },
      { number: 69, title: "데이터베이스 연결 예외 처리 및 커넥션 타임아웃 설정 추가", tag: "Infrastructure" },
      { number: 67, title: "Logstash 증분 동기화 쿼리 최적화 및 해시태그 변경 동기화 보완", tag: "Search" },
      { number: 65, title: "관리자 게시글 상세 조회 API 및 댓글 페이징 API 추가", tag: "Admin" },
      { number: 58, title: "Firebase 기반 게시글 상호작용 푸시 알림 구현 및 디바이스 푸시 설정 구조 변경", tag: "Push" },
      { number: 54, title: "검색 기능 안정화 및 증분 동기화 보완", tag: "Search" },
    ],
    techStack: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JPA",
      "QueryDSL",
      "MySQL",
      "Redis",
      "Elasticsearch",
      "Logstash",
      "Firebase Admin",
      "Docker",
      "GitHub Actions",
      "OCI",
      "Prometheus",
      "Grafana",
      "Testcontainers",
    ],
  },
];

export const heroLinks = [
  { label: "Career", value: "2년 5개월차", href: null },
  { label: "Birth", value: "1997.10.30", href: null },
  { label: "Location", value: "서울", href: null },
  { label: "Email", value: "gudtjr1355@gmail.com", href: "mailto:gudtjr1355@gmail.com" },
  { label: "GitHub", value: "github.com/dhgudtmxhs", href: "https://github.com/dhgudtmxhs" },
];

export const primaryStacks = ["Java", "Spring Boot", "JUnit", "JPA", "QueryDSL", "MySQL", "Redis"];
export const secondaryStacks = ["Docker", "GitHub Actions", "OCI", "ELK Stack", "Gradle Multi Module"];

export const profileFacts = [
  { label: "Career", value: "2년 5개월차" },
  { label: "Birth", value: "1997.10.30" },
  { label: "Location", value: "서울" },
  { label: "Email", value: "gudtjr1355@gmail.com", href: "mailto:gudtjr1355@gmail.com" },
  { label: "GitHub", value: "github.com/dhgudtmxhs", href: "https://github.com/dhgudtmxhs" },
];

export const careerItems = [
  {
    company: "부팅주식회사",
    role: "풀스택 개발 · 운영 인프라 관리",
    period: "2024.01 - 재직 중",
    meta: "정규직 | 대리",
    description:
      "공공기관 대상 SI 프로젝트에서 업무 시스템 개발과 운영 유지보수를 수행하고 있습니다.\n사용자 업무 흐름과 기관 운영 환경을 고려해 안정적으로 사용할 수 있는 업무 시스템을 만드는 데 집중하고 있습니다.",
  },
];

export const educationItems = [
  { title: "삼육대학교 중국어학과", period: "2016.02 - 2023.02", meta: "학사 졸업" },
];

export const learningItems = [
  {
    title: "KH정보교육원 Java/Spring 웹 개발 과정",
    period: "2023.04 - 2023.10",
    description:
      "Java/Spring 기반 풀스택 웹 개발을 학습하고, 팀 프로젝트를 통해 웹 애플리케이션을 구현했습니다.",
  },
  {
    title: "항해 플러스 백엔드 과정",
    period: "2024.12 - 2025.03",
    href: "https://github.com/dhgudtmxhs/hhplus-ecommerce",
    description:
      "백엔드 아키텍처, 트랜잭션·동시성 제어, 테스트와 성능 개선을 중심으로 요구사항 분석부터 설계, 구현, 리팩토링까지 서버 개발 과정을 다루며 실무적인 백엔드 개발 역량을 쌓았습니다.",
  },
];

export const sideProjectItems = [
  {
    title: "BETA Backend Server",
    period: "2025.01 - 2025.05",
    meta: "Backend · Infra",
    description:
      "야구 팬 커뮤니티 BETA의 사용자 앱과 관리자 웹을 위한 백엔드 서버에서 관리자 기능, 검색 안정화, 푸시 알림, Redis 기반 알림 제한, 장애 알림과 DB 예외 처리를 담당했습니다.",
  },
];

export const certificateItems = [
  { title: "SQLD", period: "2023.07", meta: "한국데이터산업진흥원" },
  { title: "정보처리기사", period: "2024.09", meta: "한국산업인력공단" },
];

export const skillGroups = [
  {
    label: "Language",
    items: ["Java", "JavaScript", "TypeScript"],
  },
  {
    label: "Backend",
    items: [
      "Spring Boot",
      "Spring Security",
      "Spring Data JPA",
      "QueryDSL",
      "Gradle Multi Module",
      "REST API",
    ],
  },
  {
    label: "Infra / Data",
    items: ["MySQL", "MariaDB", "Redis", "Elasticsearch", "Logstash", "Docker", "GitHub Actions", "OCI"],
  },
  {
    label: "Test / Methodology",
    items: ["JUnit 5", "Mockito", "Testcontainers", "TDD", "DDD", "Clean Architecture"],
  },
];

export const careerOverview = {
  company: "부팅주식회사",
  role: "Full Stack Developer",
  period: "2024.01 - 재직 중",
  meta: "정규직 | 대리",
  summary:
    "공공기관 대상 SI 프로젝트에서 업무 시스템 개발과 운영 유지보수를 수행하고 있습니다.\n\n현재는 재생의료진흥재단의 지정관리, 임상연구 과제관리, 임상연구 정보제공, 교육포털 등 연관된 업무 시스템을 지속적으로 개발·운영 중입니다.\n\n사용자 업무 흐름과 기관 운영 환경을 고려해 안정적으로 사용할 수 있는 업무 시스템을 만드는 데 집중하고 있습니다.",
  highlights: [
    { label: "Experience", value: "2년 5개월" },
    { label: "Domain", value: "Public SI" },
    { label: "Role", value: "Full Stack" },
  ],
};

export const careerProjects = [
  {
    title: "한국의료분쟁조정중재원 업무 시스템 고도화",
    period: "2024.01 - 2024.06",
    description: "의료분쟁 조정업무 시스템 고도화 프로젝트에 참여해 프레임워크 버전 변경에 따른 코드 수정과 기존 업무 기능 개선을 수행했습니다.",
    featured: false,
  },
  {
    title: "재생의료진흥재단 지정관리 프로그램 개발 및 운영",
    period: "2024.07 - 진행 중",
    description:
      "첨단재생의료기관 지정 신청, 심사·지정 관리, 지정 후 변경으로 이어지는 업무 기능 개발과 운영 유지보수를 수행하고 있습니다.",
    featured: true,
    overview:
      "기관 지정·심사 프로세스를 지원하는 공공기관 업무 시스템에서 백엔드 기능 개발과 운영 유지보수를 담당했습니다. 권한별 메뉴 및 데이터 접근 제어, 신청서·심사 회차 상태 전이, 대용량 첨부파일 처리, Excel 다운로드, 스케줄러, 외부 화상회의·웹채팅 연동 기능을 유지보수하며 운영 환경에서 발생하는 이슈를 분석하고 개선했습니다.",
    role:
      "백엔드 기능 개발 및 유지보수, 레거시 프레임워크 업그레이드와 코드 마이그레이션, 운영 이슈 분석 및 서비스 안정화",
    detailSections: [
      {
        title: "기관 지정 업무 흐름 구현",
        body:
          "재생의료진흥재단의 기관 지정 업무에 맞춰 신청, 접수, 심사, 지정, 지정 후 변경으로 이어지는 5단계 지정관리 흐름을 구현했습니다.\n\n기관 지정 업무는 단계, 상태, 기간, 권한 조건에 따라 처리 가능한 범위가 달라지는 구조였습니다. 개발 과정에서도 업무 기준과 운영 방식이 계속 변경되면서 조건 분기가 빠르게 늘어났고, 단순 상태값만으로는 흐름을 안정적으로 제어하기 어려웠습니다.\n\n이를 해결하기 위해 5단계 지정관리 흐름과 각 단계 안의 세부 업무를 DDD 관점에서 도메인으로 나누고, 조건 검증과 상태 전환을 도메인 비즈니스 규칙으로 정리했습니다. 도메인별 상태, 허용 액션, 사용자 역할, 처리 가능 기간, 선행 데이터 조건을 도메인 내부에서 검증하고, 상태 전환 시 필요한 데이터 생성과 권한 변경을 하나의 트랜잭션 안에서 처리하도록 구현하여 업무 기준이 변경될 때 수정 범위를 빠르게 파악하고 반영하는 데 드는 시간을 줄일 수 있었습니다.",
      },
      {
        title: "Revision 기반 변경 이력 관리",
        body:
          "심사 및 지정 후 변경 업무에서 원본 신청 데이터를 직접 수정하지 않고, 변경 요청 단위의 Revision 기반 이력 모델을 설계·구현했습니다. 시설, 장비, 인력, 의료 체크리스트와 증빙자료 변경을 ADD/UPDATE/DELETE 리비전으로 분리 저장하고, DRAFT/APPROVED/REJECTED 상태로 작성 중 데이터와 확정 데이터를 구분했습니다.\n\n조회 시에는 원본 데이터를 기준으로 승인된 리비전을 순차적으로 병합해 현재 유효 데이터를 구성하고, 작성 중인 변경 요청 화면에서는 해당 요청의 DRAFT 리비전까지 포함해 작성 기준 snapshot을 제공했습니다. 체크리스트와 연계된 증빙자료 파일 변경도 파일 리비전으로 관리하여, 파일 추가·삭제·제목 변경이 승인 상태에 따라 일관되게 조회·반영되도록 처리하고, 원본 데이터의 무결성을 유지하면서 변경 요청별 검토, 승인, 취소, 이력 추적이 가능한 구조를 구현했습니다.",
      },
      {
        title: "배포 환경 분리 및 자동화",
        body:
          "테스트 서버와 운영 서버를 분리하고, 브랜치 전략에 따라 develop 브랜치는 테스트 서버, main 브랜치는 운영 서버로 배포되도록 GitHub Actions workflow를 구성했습니다. 각 workflow에서 환경별 application-*.yml을 동적으로 생성하고, profile에 맞춰 WAR를 빌드한 뒤 서버별 deploy script를 실행하도록 자동화했습니다. 배포 환경별 설정과 실행 절차를 workflow 안에서 일관되게 관리해, 수동 배포 과정에서 발생할 수 있는 설정 누락과 배포 대상 혼선을 줄였습니다.",
      },
      {
        title: "운영 데이터 백업 자동화",
        body:
          "운영 환경의 업로드 파일과 DB 데이터를 안정적으로 보관하기 위해 백업 흐름을 구성했습니다. 업로드 파일은 restic 기반 증분 백업으로 DB VM에 주기적으로 보관하고, DB는 배치로 dump 파일을 생성한 뒤 pull 방식으로 수집하도록 처리했습니다. 백업 흐름은 cron 기반 배치로 자동 실행되도록 구성해 파일 백업과 DB dump 수집이 독립적으로 동작하게 만들고, 장애 발생 시 복구에 필요한 데이터를 확보할 수 있도록 했습니다.",
      },
    ],
    techStack: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "Spring Data JPA",
      "QueryDSL",
      "MariaDB",
      "Thymeleaf",
      "Vue",
    ],
  },
  {
    title: "재생의료진흥재단 임상연구 과제관리·정보제공 프로그램 개발 및 운영",
    period: "2024.11 - 진행 중",
    description:
      "지정된 첨단재생의료기관의 임상연구 과제 신청·관리 절차를 지원하는 기능 개발과 운영 유지보수를 수행하고 있습니다.",
    featured: true,
    overview:
      "연구과제, 연구자, 기관, 예산, 이력 관리가 얽힌 공공 연구행정 시스템에서 백엔드 운영과 기능 확장을 담당했습니다. 과제 등록·수정, 예산·집행 Excel 처리, 인증·감사 기능, 레거시 운영 환경 대응까지 이어지는 업무를 유지보수하며 도메인 흐름에 맞는 기능 보완을 수행했습니다.",
    role:
      "연구과제 관리 기능 유지보수, 예산·집행 데이터 처리, 인증·감사 기능 대응, 레거시 운영 환경 기반 기능 확장",
    detailSections: [
      {
        title: "임상연구 예산·집행 관리 도메인 구현",
        body:
          "임상연구 과제별 예산과 집행 내역을 연차와 예산 항목 단위로 등록·조회·관리할 수 있도록 구현했습니다. 예산과 집행 데이터는 항목별 상세 내역과 상위 항목 합계가 함께 관리되는 구조였고, 같은 항목 체계 안에서 예산 금액과 실제 집행 금액이 비교되어야 했기 때문에 저장·수정 시 합계 정합성과 변경 이력 관리가 중요했습니다.\n\n이를 위해 예산 항목 체계를 공통코드 기반의 계층 구조로 구성하고, 예산과 집행 내역이 동일한 항목 코드를 기준으로 저장·조회되도록 구현했습니다. 집행 내역 등록·수정·삭제 시에는 항목 코드에 따라 상세 저장 로직, 상위 항목 합계 갱신, 첨부파일 처리, 변경 이력 저장이 함께 수행되도록 구성해 예산과 집행 내역의 비교·추적이 가능하도록 했습니다.",
      },
      {
        title: "마일스톤 기반 연구 진행 관리 구현",
        body:
          "임상연구 과제의 진행 상황을 마일스톤 단위로 관리하는 기능을 구현했습니다. 마일스톤은 상위·하위 단계로 이어지는 tree 구조로 구성하고, 단계별 정렬 순서와 진행률을 별도로 관리해 연구 단계별 진행 흐름을 표현할 수 있도록 했습니다.\n\n단계별 성과지표는 code/value 형태의 metric 데이터로 분리 저장해, 지표 항목이 추가되더라도 기본 마일스톤 테이블 구조를 크게 변경하지 않고 확장할 수 있도록 구성했습니다.\n\n진행률이나 수행 기간 변경 시에는 변경 전 tree와 metric 데이터를 이력으로 저장하고, 특정 시점 기준의 마일스톤 상태를 다시 조회할 수 있도록 처리했습니다. 이를 통해 과제의 현재 진행률뿐 아니라 변경 흐름과 과거 상태까지 추적할 수 있도록 구현했습니다.",
      },
      {
        title: "Kakao Map API 기반 임상연구 지역 현황 시각화 구현",
        body:
          "Kakao Map API를 활용해 임상연구 지역 현황을 지도 형태로 조회하는 기능을 구현했습니다. SHP 형식의 행정구역 경계 데이터를 변환한 JSON 좌표 데이터를 Kakao Map polygon overlay로 렌더링할 수 있도록 재가공하고, 각 polygon에 지역 코드를 연결해 지도 선택 시 해당 지역의 임상연구 상세 정보가 갱신되도록 처리했습니다.",
      },
    ],
    techStack: [
      "Java",
      "Spring MVC",
      "Spring Security",
      "MyBatis",
      "MariaDB",
      "JSP",
    ],
  },
  {
    title: "재생의료진흥재단 임상연구 정보제공 서비스 프로그램 개발",
    period: "2025.11 - 2026.03",
    description: "과제관리 프로그램에서 관리되는 임상연구 정보를 바탕으로, 임상연구 참여자 모집과 신청 절차를 지원하는 서비스를 개발했습니다.",
    featured: false,
  },
  {
    title: "재생의료진흥재단 교육포털 유지보수",
    period: "2026.05 - 진행 중",
    description: "첨단재생의료기관 지정 관련 교육과 재단 교육 프로그램을 운영하는 LMS 기반 교육포털의 유지보수와 기능 개선을 담당하고 있습니다.",
    featured: true,
    overview:
      "재생의료진흥재단 교육포털 운영 유지보수를 수행하며, 사용자 교육 콘텐츠와 영상 자료가 안정적으로 제공될 수 있도록 운영 이슈를 분석하고 개선하고 있습니다.",
    role:
      "교육포털 운영 유지보수, 영상 저장소 사용량 분석, 업로드 영상 압축 로직 개선",
    detailSections: [
      {
        title: "영상 저장소 용량 개선",
        body:
          "클라우드 VM 200GB 저장 공간 중 영상 데이터가 157GB까지 누적되면서 디스크 사용률이 높아지는 문제가 발생했습니다. 저장 공간을 효율적으로 관리하기 위해 ffprobe 기반으로 전체 영상 파일의 bitrate, 해상도, fps, 파일 크기 분포를 수집하고 압축 가능성을 분석했습니다.\n\n분석 결과를 바탕으로 비트레이트 구간별 조정, 전체 비트레이트 하향, 일부 해상도 축소를 포함한 3가지 압축 방식을 정리했습니다. 각 방식으로 샘플 영상을 인코딩해 용량 절감 효과와 화질 저하 여부를 비교 검증하고, 실제 적용할 압축 기준을 확정했습니다.\n\n확정한 기준에 따라 해상도와 fps는 유지하되 bitrate 조정 기준을 강화하는 방식으로 압축을 적용한 결과, 37.11GB(23.67%)의 저장 용량을 절감했습니다.",
      },
      {
        title: "업로드 영상 압축 로직 개선",
        body:
          "기존에는 업로드된 영상 원본이 그대로 서버에 저장되어, 영상 데이터가 증가할수록 저장소 사용량이 빠르게 누적되는 문제가 있었습니다. 이를 개선하기 위해 업로드 이후 FFmpeg 기반 비동기 트랜스코딩을 수행하도록 백엔드 로직을 개선했습니다.\n\n업로드된 원본 영상은 서버에 먼저 저장한 뒤 ffprobe로 bitrate를 확인하고, 구간별 압축 기준에 따라 목표 bitrate를 산정했습니다. 이후 해상도와 fps는 유지한 채 FFmpeg로 bitrate만 조정한 압축본을 생성하고, 변환이 완료되면 원본 파일을 압축본으로 교체했습니다.\n\n이를 통해 원본 영상이 그대로 누적되는 구조를 개선하고, 이후 업로드되는 영상 파일은 압축된 상태로 저장되도록 처리했습니다.",
      },
    ],
    techStack: ["Java", "Spring MVC", "Spring Security", "MyBatis", "MariaDB", "JSP"],
  },
];

export const careerDuties = [
  "공공기관 업무 프로세스에 맞춘 신규 기능 개발 및 기존 기능 개선",
  "레거시 프레임워크 버전 업그레이드 및 코드 마이그레이션",
  "기능 오류와 호환성 이슈 분석, 수정, 운영 안정화",
  "기관별 업무 흐름을 반영한 화면 및 서버 로직 구현",
  "운영 중 오류 및 개선 요청 반영, 배포 이후 신규 요구사항 대응",
  "GitHub Actions 기반 CI/CD 자동화 적용",
  "가비아 도메인 관리, SSL 인증서 적용, 서버 설정 등 운영 인프라 구성 및 관리",
];

export function getProjectPanelCopy(slug, fallbackMeta, fallbackSummary) {
  if (slug === "about-me") {
    return {
      meta: "PROFILE",
      summary: "프로필과 주요 이력 및 기술 스택을 정리했습니다.",
    };
  }

  if (slug === "career") {
    return {
      meta: "WORK EXPERIENCE",
      summary: "실무에서 맡았던 업무와 프로젝트 경험을 정리했습니다.",
    };
  }

  if (slug === "side-project") {
    return {
      meta: "BETA BACKEND SERVER",
      summary: "야구 커뮤니티 앱을 만들며 경험한 백엔드 개발 과정을 정리했습니다.",
    };
  }

  return {
    meta: fallbackMeta,
    summary: fallbackSummary,
  };
}

