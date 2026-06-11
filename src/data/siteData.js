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
    title: "Side Project",
    navTitle: "Side Project",
    subtitle: "Baseball Community App",
    summary: "팀 프로젝트로 진행한 야구 커뮤니티 앱 백엔드 개발 경험입니다.",
    meta: "야구 커뮤니티 앱",
    description:
      "사이드 프로젝트에서 맡았던 역할, 실제 출시까지 이어진 경험, 그리고 사용자를 만나는 과정에서 배운 점을 정리하는 영역입니다.",
    stack: ["Side Project", "Launch", "User"],
    role: "백엔드 개발, 출시 참여, 서비스 운영 흐름 경험",
    outcome: "직접 사용자에게 전달되는 서비스를 만든 경험 정리",
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
    title: "BETA - BasEball Together Always",
    period: "2025.01 - 2025.05",
    status: "1차 개발 완료 · 운영 중",
    meta: "백엔드 개발 · 운영 인프라 관리",
    description:
      "야구 커뮤니티 앱 프로젝트에 백엔드 개발자로 참여해 Elasticsearch 기반 검색, 푸시 알림, 관리자 기능 및 관리자 웹 구현과 관련 운영 인프라 구성에 참여했습니다.",
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
    "공공기관 대상 SI 프로젝트에서 업무 시스템 개발과 운영 유지보수를 수행하고 있습니다.\n\n주요 경험은 재생의료진흥재단 지정관리 프로그램과 임상연구 과제관리 프로그램에 집중되어 있으며, 특히 지정관리 영역에서 레거시 프레임워크 버전 업그레이드, 코드 마이그레이션, 운영 오류 대응과 서비스 안정화까지 폭넓게 담당했습니다.",
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
    description: "기존 업무 시스템의 기능 개선과 고도화 작업에 참여했습니다.",
    featured: false,
  },
  {
    title: "재생의료진흥재단 지정관리 프로그램 개발 및 운영",
    period: "2024.07 - 진행 중",
    description:
      "기관 지정·심사 프로세스에 필요한 백엔드 기능 개발과 운영 유지보수를 수행했습니다.",
    featured: true,
    overview:
      "기관 지정·심사 프로세스를 지원하는 공공기관 업무 시스템에서 백엔드 기능 개발과 운영 유지보수를 담당했습니다. 권한별 메뉴 및 데이터 접근 제어, 신청서·심사 회차 상태 전이, 대용량 첨부파일 처리, Excel 다운로드, 스케줄러, 외부 화상회의·웹채팅 연동 기능을 유지보수하며 운영 환경에서 발생하는 이슈를 분석하고 개선했습니다.",
    role:
      "백엔드 기능 개발 및 유지보수, 레거시 프레임워크 업그레이드와 코드 마이그레이션, 운영 이슈 분석 및 서비스 안정화",
    detailSections: [
      {
        title: "권한 관리",
        body:
          "Spring Security 기반으로 사용자 권한에 따라 관리자 메뉴와 심사 단계별 기능 접근을 제어했습니다. 의료기관, 관리자, 일반 사용자 권한에 따라 조회 가능한 데이터 범위가 달라지는 구조였기 때문에, 메뉴 노출뿐 아니라 서버 API 단에서도 권한 검증이 누락되지 않도록 보완했습니다.",
      },
      {
        title: "상태 전이와 업무 흐름",
        body:
          "신청서와 심사 회차의 상태값에 따라 현장심사, 보완, 최종자료 제출 등의 업무 흐름이 제어되는 구조를 유지보수했습니다. 단순히 상태값을 변경하는 수준이 아니라, 심사 회차의 진행 상태와 설정 기간에 따라 의료기관의 조회 및 수정 가능 여부가 달라지도록 조건을 분기했습니다.",
      },
      {
        title: "파일 처리와 제출 기능",
        body:
          "대용량 첨부파일 업로드 및 다운로드 기능을 유지보수하며, 증빙자료 제출 과정에서 발생하는 파일 처리 이슈에 대응했습니다. 신청 회차와 제출 단계에 따라 첨부 가능한 자료가 달라지는 구조를 관리했고, 운영 중 파일 조회 및 제출 오류가 발생했을 때 원인을 추적해 수정했습니다.",
      },
      {
        title: "조회·Excel 기능 정합성",
        body:
          "관리자가 심사 현황과 제출 자료를 효율적으로 확인할 수 있도록 QueryDSL 기반 검색 조건과 Excel 다운로드 기능을 함께 유지보수했습니다. 화면 조회 결과와 Excel 데이터가 일치하도록 조회 조건과 출력 데이터를 보완하며 운영 데이터 정합성을 맞췄습니다.",
      },
      {
        title: "운영 이슈 대응",
        body:
          "레거시 프레임워크 버전 업그레이드와 코드 마이그레이션 과정에서 기능 오류와 호환성 이슈를 분석하고 수정했습니다. 또한 스케줄러 자동 처리, 외부 화상회의·웹채팅 연동, 로그·감사 기능과 관련된 운영 이슈에도 대응하며 서비스가 안정적으로 동작하도록 유지보수했습니다.",
      },
    ],
    techStack: [
      "Spring Boot",
      "Spring Security",
      "QueryDSL",
      "JPA",
      "MySQL",
      "Apache POI",
      "JXLS",
      "FFmpeg",
      "GitHub Actions",
    ],
  },
  {
    title: "재생의료진흥재단 임상연구 과제관리 프로그램 개발 및 운영",
    period: "2024.11 - 진행 중",
    description:
      "임상연구 과제 관리에 필요한 화면과 서버 로직을 구현하고 운영했으며, 업무 흐름에 맞춘 기능 보완과 유지보수를 수행했습니다.",
    featured: true,
    overview:
      "연구과제, 연구자, 기관, 예산, 이력 관리가 얽힌 공공 연구행정 시스템에서 백엔드 운영과 기능 확장을 담당했습니다. 과제 등록·수정, 예산·집행 Excel 처리, 인증·감사 기능, 레거시 운영 환경 대응까지 이어지는 업무를 유지보수하며 도메인 흐름에 맞는 기능 보완을 수행했습니다.",
    role:
      "연구과제 관리 기능 유지보수, 예산·집행 데이터 처리, 인증·감사 기능 대응, 레거시 운영 환경 기반 기능 확장",
    detailSections: [
      {
        title: "과제·연구자 관리",
        body:
          "eGovFrame/Spring MVC 기반 구조에서 연구계획 등록·수정, 참여연구자 역할 변경, 기관 정보 관리, 첨부파일 연동을 포함한 업무 로직을 서비스 계층에서 운영했습니다. 단순 CRUD보다 프로젝트-연구자-기관 관계 데이터가 함께 움직이는 구조였기 때문에, 변경 이력이 누락되지 않도록 흐름을 맞추는 작업 비중이 컸습니다.",
      },
      {
        title: "예산·집행 Excel 처리",
        body:
          "예산·집행 데이터를 Excel 업로드 중심으로 처리하고, 항목 코드 체계와 상세 집행내역을 연동해 합계 계산과 이력 관리를 지원하는 기능을 유지보수했습니다. 업로드 데이터와 실제 화면 데이터가 어긋나지 않도록 파싱·반영 흐름과 저장 구조를 점검하며 보완했습니다.",
      },
      {
        title: "인증과 감사 이력",
        body:
          "로그인 실패 횟수 제한, IP 차단, 개인정보 조회 이력, 연구기관 변경 이력, 마일스톤 변경 히스토리 등 운영형 서비스의 인증·감사 성격 기능을 다뤘습니다. 민감한 연구행정 정보가 포함된 서비스 특성상, 누가 어떤 데이터를 조회하고 변경했는지 추적 가능한 구조를 유지하는 것이 중요했습니다.",
      },
      {
        title: "레거시 운영 환경 대응",
        body:
          "Tomcat WAR 배포, HTTPS/SSL 인증서 적용, Onepass·GPKI 연동 흔적이 있는 레거시 운영 환경에서 기능 확장과 유지보수를 수행했습니다. 다중 DB profile과 공공 SI 구조 안에서 기능을 보완해야 했기 때문에, 환경별 설정과 기존 운영 방식을 해치지 않는 범위에서 변경을 적용하는 경험을 쌓았습니다.",
      },
    ],
    techStack: [
      "eGovFrame",
      "Spring MVC",
      "Spring Security",
      "MyBatis",
      "JSP",
      "Tomcat",
      "Excel Upload",
      "SSL/TLS",
      "Onepass",
      "GPKI",
    ],
  },
  {
    title: "재생의료진흥재단 임상연구 정보제공 서비스 프로그램 개발",
    period: "2025.11 - 2026.04",
    description: "사용자에게 임상연구 정보를 제공하는 서비스 개발에 참여했습니다.",
    featured: false,
  },
  {
    title: "재생의료진흥재단 교육포털 유지보수",
    period: "2026.06 - 진행 중",
    description: "재생의료진흥재단 교육포털 운영 유지보수를 수행하고 있습니다.",
    featured: true,
    overview:
      "재생의료진흥재단 교육포털 운영 유지보수를 수행하며, 사용자 교육 콘텐츠와 영상 자료가 안정적으로 제공될 수 있도록 운영 이슈를 분석하고 개선하고 있습니다.",
    role:
      "교육포털 운영 유지보수, 영상 저장소 사용량 분석, 업로드 영상 압축 로직 개선",
    detailSections: [
      {
        title: "영상 저장소 용량 개선",
        body:
          "Tomcat 서버의 영상 저장 경로 사용량이 약 157GB까지 증가한 상태에서, 저장 용량 절감 가능성을 확인하기 위해 전체 영상 파일의 bitrate, 해상도, fps, 파일 크기 분포를 분석했습니다. ffprobe 기반으로 파일별 인코딩 속성을 수집하고, 비트레이트 조정 및 일부 해상도 축소 시나리오별 예상 절감량을 산정했습니다. 대표 샘플 파일 재인코딩 테스트에서는 3.93GB 파일을 2.11GB로 줄여 약 46% 절감 효과를 확인했고, 전체 기준으로는 약 18~25% 수준의 절감 가능성을 도출했습니다.",
      },
      {
        title: "업로드 영상 압축 로직 개선",
        body:
          "분석 결과를 바탕으로 영상 업로드 후 FFmpeg 기반 비동기 트랜스코딩을 수행하도록 백엔드 로직을 개선했습니다. 업로드된 원본 영상을 서버에 저장한 뒤 720p, 2Mbps 수준으로 변환하고, 변환 완료 후 원본 파일을 압축본으로 교체하는 방식으로 저장 용량 증가를 억제했습니다.",
      },
    ],
    techStack: ["Tomcat", "FFmpeg", "ffprobe", "Java", "Spring", "Video Transcoding"],
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
      meta: "BASEBALL COMMUNITY APP",
      summary: "야구 커뮤니티 앱을 만들며 경험한 백엔드 개발 과정을 정리했습니다.",
    };
  }

  return {
    meta: fallbackMeta,
    summary: fallbackSummary,
  };
}

