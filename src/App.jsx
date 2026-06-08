import { useEffect, useState } from "react";
import { Link, NavLink, Route, Routes, useParams } from "react-router-dom";

const projects = [
  {
    slug: "about-me",
    index: "01",
    title: "About Me",
    navTitle: "About Me",
    subtitle: "Introduction",
    summary: "프로필, 경력, 교육, 기술 스택을 한 장으로 정리합니다.",
    meta: "Profile and background",
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
    meta: "Work and experience",
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
    subtitle: "App Launch",
    summary: "개인 프로젝트와 출시 경험, 직접 만든 결과물을 담았습니다.",
    meta: "Build and launch",
    description:
      "사이드 프로젝트에서 맡았던 역할, 실제 출시까지 이어진 경험, 그리고 사용자를 만나는 과정에서 배운 점을 정리하는 영역입니다.",
    stack: ["Side Project", "Launch", "User"],
    role: "백엔드 개발, 출시 참여, 서비스 운영 흐름 경험",
    outcome: "직접 사용자에게 전달되는 서비스를 만든 경험 정리",
  },
];

const heroLinks = [
  { label: "Career", value: "2년 5개월차", href: null },
  { label: "Birth", value: "1997.10.30", href: null },
  { label: "Location", value: "서울", href: null },
  { label: "Email", value: "gudtjr1355@gmail.com", href: "mailto:gudtjr1355@gmail.com" },
  { label: "GitHub", value: "github.com/dhgudtmxhs", href: "https://github.com/dhgudtmxhs" },
];

const primaryStacks = ["Java", "Spring Boot", "JUnit", "JPA", "QueryDSL", "MySQL", "Redis"];
const secondaryStacks = ["Docker", "GitHub Actions", "OCI", "ELK Stack", "Gradle Multi Module"];

const profileFacts = [
  { label: "Career", value: "2년 5개월차" },
  { label: "Birth", value: "1997.10.30" },
  { label: "Location", value: "서울" },
  { label: "Email", value: "gudtjr1355@gmail.com", href: "mailto:gudtjr1355@gmail.com" },
  { label: "GitHub", value: "github.com/dhgudtmxhs", href: "https://github.com/dhgudtmxhs" },
];

const careerItems = [
  {
    company: "부팅주식회사",
    role: "풀스택 개발 · 운영 인프라 관리",
    period: "2024.01 - 재직 중",
    meta: "정규직 | 대리",
    description:
      "공공기관 대상 SI 프로젝트에서 업무 시스템 개발과 운영 유지보수를 수행하고 있습니다.\n사용자 업무 흐름과 기관 운영 환경을 고려해 안정적으로 사용할 수 있는 업무 시스템을 만드는 데 집중하고 있습니다.",
  },
];

const educationItems = [
  { title: "삼육대학교 중국어학과", period: "2016.02 - 2023.02", meta: "학사 졸업" },
];

const learningItems = [
  {
    title: "KH정보교육원 Java/Spring 웹 개발 과정",
    period: "2023.04 - 2023.10",
    description: "Java/Spring 기반 풀스택 웹 개발을 학습하고, 팀 프로젝트를 통해 웹 애플리케이션을 구현했습니다.",
  },
  {
    title: "항해 플러스 백엔드 과정",
    period: "2024.12 - 2025.03",
    href: "https://github.com/dhgudtmxhs/hhplus-ecommerce",
    description:
      "백엔드 아키텍처, 트랜잭션·동시성 제어, 테스트와 성능 개선을 중심으로 요구사항 분석부터 설계, 구현, 리팩토링까지 서버 개발 과정을 다루며 실무적인 백엔드 개발 역량을 쌓았습니다.",
  },
];

const sideProjectItems = [
  {
    title: "BETA - BasEball Together Always",
    period: "2025.01 - 2025.05",
    status: "1차 개발 완료 · 운영 중",
    meta: "백엔드 개발 · 운영 인프라 관리",
    description: "야구 커뮤니티 앱 프로젝트에 백엔드 개발자로 참여해 Elasticsearch 기반 검색, 푸시 알림, 관리자 기능 및 관리자 웹 구현과 관련 운영 인프라 구성에 참여했습니다.",
  },
];

const certificateItems = [
  { title: "SQLD", period: "2023.07", meta: "한국데이터산업진흥원" },
  { title: "정보처리기사", period: "2024.09", meta: "한국산업인력공단" },
];

const skillGroups = [
  {
    label: "Language",
    items: ["Java", "JavaScript", "TypeScript"],
  },
  {
    label: "Backend",
    items: ["Spring Boot", "Spring Security", "Spring Data JPA", "QueryDSL", "Gradle Multi Module", "REST API"],
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

const careerOverview = {
  company: "부팅주식회사",
  role: "Full Stack Developer",
  period: "2024.01 - 재직 중",
  meta: "정규직 | 대리",
  summary:
    "공공기관 대상 SI 프로젝트에서 업무 시스템 개발과 운영 유지보수를 수행하고 있습니다.\n사용자 업무 흐름과 기관 운영 환경을 고려해 안정적으로 사용할 수 있는 업무 시스템을 만드는 데 집중하고 있습니다.",
  highlights: [
    { label: "Experience", value: "2년 5개월" },
    { label: "Domain", value: "Public SI" },
    { label: "Role", value: "Full Stack" },
  ],
};

const careerProjects = [
  {
    title: "한국의료분쟁조정중재원 업무 시스템 고도화",
    period: "2024.01 - 2024.06",
    description: "기존 업무 시스템의 기능 개선과 고도화 작업에 참여했습니다.",
  },
  {
    title: "재생의료진흥재단 지정관리 프로그램 개발 및 운영",
    period: "2024.07 - 2026.05",
    description: "기관 업무 흐름에 맞춘 기능 개발, 운영 요청 대응, 유지보수를 수행했습니다.",
  },
  {
    title: "재생의료진흥재단 임상연구 과제관리 프로그램 개발 및 운영",
    period: "2024.11 - 2026.05",
    description: "임상연구 과제 관리에 필요한 화면과 서버 로직을 구현하고 운영했습니다.",
  },
  {
    title: "재생의료진흥재단 임상연구 정보제공 서비스 프로그램 개발",
    period: "2025.11 - 2026.04",
    description: "사용자에게 임상연구 정보를 제공하는 서비스 개발에 참여했습니다.",
  },
];

const careerDuties = [
  "공공기관 업무 프로세스에 맞춘 신규 기능 개발 및 기존 기능 개선",
  "레거시 프레임워크 버전 업그레이드 및 코드 마이그레이션",
  "기능 오류와 호환성 이슈 분석, 수정, 운영 안정화",
  "기관별 업무 흐름을 반영한 화면 및 서버 로직 구현",
  "운영 중 오류 및 개선 요청 반영, 배포 이후 신규 요구사항 대응",
  "GitHub Actions 기반 CI/CD 자동화 적용",
  "가비아 도메인 관리, SSL 인증서 적용, 서버 설정 등 운영 인프라 구성 및 관리",
];

const careerSkillTags = [
  "Java",
  "Spring",
  "JavaScript",
  "MariaDB",
  "GitHub Actions",
  "SSL",
  "Domain",
  "Operation",
];

function HeaderNavIcon({ type, dark }) {
  if (type === "about-me") {
    return (
      <svg className="header-link-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 12.2a3.7 3.7 0 1 0 0-7.4 3.7 3.7 0 0 0 0 7.4Zm-6.4 7c.7-3.4 3-5.2 6.4-5.2s5.7 1.8 6.4 5.2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "career") {
    return (
      <svg className="header-link-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M8.4 7.2V5.8c0-.9.6-1.5 1.5-1.5h4.2c.9 0 1.5.6 1.5 1.5v1.4M5.5 8h13c.9 0 1.5.6 1.5 1.5v8.3c0 .9-.6 1.5-1.5 1.5h-13c-.9 0-1.5-.6-1.5-1.5V9.5C4 8.6 4.6 8 5.5 8Zm6.5 4.5v1.1"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "side-project") {
    return (
      <svg className="header-link-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M4.5 7.4c0-.9.6-1.5 1.5-1.5h4.2l1.7 1.8H18c.9 0 1.5.6 1.5 1.5v7.4c0 .9-.6 1.5-1.5 1.5H6c-.9 0-1.5-.6-1.5-1.5V7.4Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg className="header-link-icon" viewBox="0 0 24 24" aria-hidden="true">
      {dark ? (
        <path
          d="M12 4.3v1.3m0 12.8v1.3M6.6 6.6l.9.9m9 9 .9.9M4.3 12h1.3m12.8 0h1.3M6.6 17.4l.9-.9m9-9 .9-.9M12 8.1a3.9 3.9 0 1 0 0 7.8 3.9 3.9 0 0 0 0-7.8Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ) : (
        <path
          d="M19.5 14.4A7.2 7.2 0 0 1 9.6 4.5a7.8 7.8 0 1 0 9.9 9.9Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
}

function HeaderActions({ dark, onToggleDark }) {
  return (
    <div className="header-actions">
      {projects.map((project) => (
        <NavLink
          className={({ isActive }) => `header-link${isActive ? " active" : ""}`}
          to={`/${project.slug}`}
          key={project.slug}
          aria-label={project.navTitle}
        >
          <HeaderNavIcon type={project.slug} />
          <span className="header-link-text">{project.navTitle}</span>
        </NavLink>
      ))}
      <button
        className="header-link header-button"
        type="button"
        onClick={onToggleDark}
        aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
        title={dark ? "Switch to light mode" : "Switch to dark mode"}
      >
        <HeaderNavIcon type="theme" dark={dark} />
        <span className="header-link-text">{dark ? "Light" : "Dark"}</span>
      </button>
    </div>
  );
}

function usePageShell() {
  const [dark, setDark] = useState(() =>
    typeof document !== "undefined"
      ? document.documentElement.classList.contains("dark")
      : false
  );
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [dark]);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return { dark, setDark, mounted };
}

function SiteHeader({ dark, onToggleDark }) {
  return (
    <header className="site-header">
      <div className="nav-wrap">
        <Link className="brand" to="/">
          <img src="/rocks.png" alt="ohstone profile mascot" className="brand-mark-image" />
          <span className="brand-text">ohstone</span>
        </Link>

        <HeaderActions dark={dark} onToggleDark={onToggleDark} />
      </div>
    </header>
  );
}

function LandingPage() {
  const { dark, setDark, mounted } = usePageShell();

  return (
    <div className={`page-shell ${mounted ? "page-ready" : ""}`}>
      <div className="ambient ambient-left" aria-hidden="true" />
      <div className="ambient ambient-right" aria-hidden="true" />

      <SiteHeader dark={dark} onToggleDark={() => setDark((value) => !value)} />

      <main className="landing-main">
        <section className="landing-hero">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow">Profile</p>

            <div className="hero-intro">
              <img src="/rocks.png" alt="ohstone profile" className="hero-portrait" />

              <div className="hero-intro-copy">
                <p className="hero-name">오형석</p>
                <h1>Backend Developer</h1>
                <div className="hero-text-block">
                  <p className="hero-text hero-text-lead">
                    많은 사용자가 이용하는 서비스를 만들고 싶은 백엔드 개발자입니다.
                  </p>
                  <p className="hero-text hero-text-support">
                    공공기관 SI 개발 및 운영 경험을 바탕으로 Java와 Spring Boot 기반 서버 개발을 이어가고 있습니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="hero-section-divider" aria-hidden="true" />

            <div className="hero-meta-block">
              <div className="hero-meta">
                <div className="hero-meta-row">
                  {primaryStacks.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <div className="hero-meta-row">
                  {secondaryStacks.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="hero-section-divider" aria-hidden="true" />

            <div className="hero-note">
              <div className="hero-contact">
                {heroLinks.map((item) => (
                  <div className="hero-contact-row" key={item.label}>
                    <span className="hero-contact-label">{item.label}</span>
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                        {item.value}
                      </a>
                    ) : (
                      <span>{item.value}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <section className="project-panel" aria-labelledby="project-panel-title">
            <div className="panel-header">
              <p className="eyebrow panel-eyebrow">Overview</p>
            </div>

            <div className="project-list">
              {projects.map((project, index) => (
                <Link
                  className="project-card"
                  to={`/${project.slug}`}
                  key={project.slug}
                  style={{ "--enter-delay": `${180 + index * 90}ms` }}
                >
                  <div className="project-card-top">
                    <span className="project-index">{project.index}</span>
                    <span className="project-arrow" aria-hidden="true">
                      →
                    </span>
                  </div>
                  <div className="project-card-body">
                    <h3>{project.title}</h3>
                    <p className="project-meta">{project.meta}</p>
                    <p className="project-summary">{project.summary}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}

function SectionTitle({ children, id }) {
  return (
    <h2 className="about-doc-section-title" id={id}>
      {children}
    </h2>
  );
}

function AboutMeDetailPage() {
  const { dark, setDark, mounted } = usePageShell();
  const educationSection = (
    <section className="about-doc-section" aria-labelledby="education-title">
      <SectionTitle id="education-title">Education</SectionTitle>
      <ul className="about-info-list">
        {educationItems.map((item) => (
          <li className="about-info-row" key={item.title}>
            <div>
              <h3 className="about-info-title">{item.title}</h3>
              {item.meta ? <p className="about-info-subtext">{item.meta}</p> : null}
            </div>
            <div className="about-info-meta">
              <span>{item.period}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
  const certificateSection = (
    <section className="about-doc-section" aria-labelledby="certificate-title">
      <SectionTitle id="certificate-title">Certificate</SectionTitle>
      <ul className="about-info-list">
        {certificateItems.map((item) => (
          <li className="about-info-row" key={item.title}>
            <div>
              <h3 className="about-info-title">{item.title}</h3>
              <p className="about-info-subtext">{item.meta}</p>
            </div>
            <div className="about-info-meta">
              <span>{item.period}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
  const skillsSection = (
    <section className="about-doc-section" aria-labelledby="skills-title">
      <SectionTitle id="skills-title">Skills</SectionTitle>
      <div className="about-skill-groups">
        {skillGroups.map((group) => (
          <div className="about-skill-group" key={group.label}>
            <h3>{group.label}</h3>
            <div>
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <div className={`detail-shell about-shell ${mounted ? "page-ready" : ""}`}>
      <div className="ambient ambient-left" aria-hidden="true" />
      <div className="ambient ambient-right" aria-hidden="true" />

      <SiteHeader dark={dark} onToggleDark={() => setDark((value) => !value)} />

      <main className="about-doc-main">
        <article className="about-document" aria-labelledby="about-title">
          <aside className="about-doc-sidebar">
            <img src="/rocks.png" alt="ohstone profile" className="about-doc-photo" />
            <div>
              <p className="about-doc-name">오형석</p>
              <p className="about-doc-role">Backend Developer</p>
            </div>

            <dl className="about-doc-facts">
              {profileFacts.map((item) => (
                <div key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>

          <div className="about-doc-content">
            <header className="about-doc-header">
              <p className="about-doc-section-title">About Me</p>
              <p id="about-title" className="about-doc-intro">
                공공기관 SI 개발과 운영을 경험하며, 기능을 만드는 것만큼 실제 업무 흐름에 맞게
                안정적으로 동작시키는 일이 중요하다는 것을 배웠습니다. Java와 Spring Boot를 중심으로
                서버 개발을 이어가고 있으며, 최근에는 야구 커뮤니티 앱 BETA 백엔드 개발에 참여해
                API 설계, 검색, 알림, 관리자 기능, 운영 안정성 개선을 다뤘습니다.
              </p>
            </header>

            {skillsSection}

            <section className="about-doc-section" aria-labelledby="career-title">
              <div className="about-doc-section-heading">
                <SectionTitle id="career-title">Career</SectionTitle>
                <Link className="about-detail-link" to="/career" aria-label="Career 상세 보기">
                  <svg viewBox="0 0 16 16" aria-hidden="true">
                    <path d="M5 4.5h6.5V11M11.2 4.8 4.5 11.5" />
                  </svg>
                </Link>
              </div>
              <div className="about-timeline">
                {careerItems.map((item) => (
                  <article className="about-info-row" key={item.company}>
                    <div>
                      <h3 className="about-info-title">{item.company}</h3>
                      {item.role ? <p className="about-info-subtext">{item.role}</p> : null}
                    </div>
                    <div className="about-info-meta">
                      <span>{item.period}</span>
                      <span>{item.meta}</span>
                    </div>
                    <p className="about-info-description">{item.description}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="about-doc-section" aria-labelledby="learning-title">
              <SectionTitle id="learning-title">Learning</SectionTitle>
              <ul className="about-info-list learning-info-list">
                {learningItems.map((item) => (
                  <li className="about-info-row" key={item.title}>
                    <div>
                      <h3 className="about-info-title">{item.title}</h3>
                    </div>
                    <div className="about-info-meta">
                      <span>{item.period}</span>
                    </div>
                    {item.description ? (
                      <p className="about-info-description">
                        {item.description}
                        {item.href ? (
                          <>
                            {" "}
                            <a className="about-inline-link" href={item.href} target="_blank" rel="noreferrer">
                              GitHub Repository
                            </a>
                          </>
                        ) : null}
                      </p>
                    ) : null}
                  </li>
                ))}
              </ul>
            </section>

            <section className="about-doc-section" aria-labelledby="side-project-title">
              <div className="about-doc-section-heading">
                <SectionTitle id="side-project-title">Side Project</SectionTitle>
                <Link className="about-detail-link" to="/side-project" aria-label="Side Project 상세 보기">
                  <svg viewBox="0 0 16 16" aria-hidden="true">
                    <path d="M5 4.5h6.5V11M11.2 4.8 4.5 11.5" />
                  </svg>
                </Link>
              </div>
              <ul className="about-info-list">
                {sideProjectItems.map((item) => (
                  <li className="about-info-row" key={item.title}>
                    <div>
                      <h3 className="about-info-title">{item.title}</h3>
                      <p className="about-info-subtext">{item.meta}</p>
                    </div>
                    <div className="about-info-meta">
                      <span>{item.period}</span>
                      {item.status ? <span>{item.status}</span> : null}
                    </div>
                    {item.description ? <p className="about-info-description">{item.description}</p> : null}
                  </li>
                ))}
              </ul>
            </section>

            {educationSection}
            {certificateSection}

          </div>
        </article>
      </main>
    </div>
  );
}

function CareerDetailPage() {
  const { dark, setDark, mounted } = usePageShell();

  return (
    <div className={`detail-shell career-shell ${mounted ? "page-ready" : ""}`}>
      <div className="ambient ambient-left" aria-hidden="true" />
      <div className="ambient ambient-right" aria-hidden="true" />

      <SiteHeader dark={dark} onToggleDark={() => setDark((value) => !value)} />

      <main className="career-main">
        <section className="career-document" aria-labelledby="career-page-title">
          <header className="career-hero">
            <div>
              <p className="eyebrow">Career</p>
              <h1 id="career-page-title">{careerOverview.company}</h1>
              <p className="career-role">{careerOverview.role}</p>
              <p className="career-summary">{careerOverview.summary}</p>
            </div>

            <div className="career-side">
              <span>{careerOverview.period}</span>
              <strong>{careerOverview.meta}</strong>
            </div>
          </header>

          <div className="career-highlight-grid">
            {careerOverview.highlights.map((item) => (
              <div className="career-highlight" key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>

          <section className="career-section" aria-labelledby="career-projects-title">
            <div className="career-section-head">
              <p className="eyebrow">Projects</p>
              <h2 id="career-projects-title">참여 프로젝트</h2>
            </div>

            <div className="career-project-list">
              {careerProjects.map((project, index) => (
                <article className="career-project" key={project.title}>
                  <span className="career-project-index">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                  <time>{project.period}</time>
                </article>
              ))}
            </div>
          </section>

          <section className="career-section career-work-section" aria-labelledby="career-work-title">
            <div className="career-section-head">
              <p className="eyebrow">Work</p>
              <h2 id="career-work-title">주요 업무</h2>
            </div>

            <ul className="career-duty-list">
              {careerDuties.map((duty) => (
                <li key={duty}>{duty}</li>
              ))}
            </ul>
          </section>

          <section className="career-section career-stack-section" aria-labelledby="career-stack-title">
            <div className="career-section-head">
              <p className="eyebrow">Stack</p>
              <h2 id="career-stack-title">실무에서 다룬 것</h2>
            </div>

            <div className="career-tags">
              {careerSkillTags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </section>

        </section>
      </main>
    </div>
  );
}

function ProjectDetailPage({ project }) {
  const { dark, setDark, mounted } = usePageShell();

  if (!project) {
    return (
      <div className={`detail-shell ${mounted ? "page-ready" : ""}`}>
        <SiteHeader dark={dark} onToggleDark={() => setDark((value) => !value)} />

        <main className="detail-main">
          <section className="detail-card">
            <p className="eyebrow">Not Found</p>
            <h1>프로젝트를 찾을 수 없습니다</h1>
            <Link className="detail-back" to="/">
              메인으로 돌아가기
            </Link>
          </section>
        </main>
      </div>
    );
  }

  if (project.slug === "about-me") {
    return <AboutMeDetailPage />;
  }

  if (project.slug === "career") {
    return <CareerDetailPage />;
  }

  return (
    <div className={`detail-shell ${mounted ? "page-ready" : ""}`}>
      <div className="ambient ambient-left" aria-hidden="true" />
      <div className="ambient ambient-right" aria-hidden="true" />

      <SiteHeader dark={dark} onToggleDark={() => setDark((value) => !value)} />

      <main className="detail-main">
        <section className="detail-card">
          <p className="eyebrow">{project.subtitle}</p>
          <h1>{project.title}</h1>
          <p className="detail-description">{project.description}</p>

          <div className="detail-grid">
            <article className="detail-block">
              <h2>Role</h2>
              <p>{project.role}</p>
            </article>
            <article className="detail-block">
              <h2>Outcome</h2>
              <p>{project.outcome}</p>
            </article>
          </div>

          <div className="detail-stack">
            {project.stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          <Link className="detail-back" to="/">
            메인으로 돌아가기
          </Link>
        </section>
      </main>
    </div>
  );
}

function ProjectRouteWrapper() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);
  return <ProjectDetailPage project={project} />;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/:slug" element={<ProjectRouteWrapper />} />
    </Routes>
  );
}

export default App;
