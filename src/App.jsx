import { useEffect, useState } from "react";
import { Link, NavLink, Route, Routes, useParams } from "react-router-dom";

const projects = [
  {
    slug: "about-me",
    index: "01",
    title: "About Me",
    navTitle: "About Me",
    subtitle: "Introduction",
    summary: "개발자로서의 방향과 강점, 관심 기술을 소개합니다.",
    meta: "Profile and background",
    description:
      "백엔드 개발자로서 어떤 기술을 중요하게 보는지, 서비스를 어떤 관점으로 이해하고 설계하는지 정리한 소개 영역입니다.",
    stack: ["Profile", "Stack", "Interest"],
    role: "자기소개, 기술 스택, 관심 분야 정리",
    outcome: "포트폴리오에서 나를 빠르게 설명할 수 있는 기본 소개 구조 구성",
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
    summary: "개인 프로젝트와 출시 경험, 직접 만든 결과물을 담습니다.",
    meta: "Build and launch",
    description:
      "사이드 프로젝트에서 맡았던 역할, 실제 출시까지 이어진 경험, 그리고 내가 만든 기능이 사용자에게 닿는 과정을 정리하는 영역입니다.",
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

const primaryStacks = ["Java", "Spring Boot", "JUnit", "JPA", "Querydsl", "MySQL", "Redis"];
const secondaryStacks = ["Docker", "GitHub Actions", "OCI", "ELK Stack", "Gradle Multi Module"];

function HeaderActions({ dark, onToggleDark }) {
  return (
    <div className="header-actions">
      {projects.map((project) => (
        <NavLink
          className={({ isActive }) => `header-link${isActive ? " active" : ""}`}
          to={`/${project.slug}`}
          key={project.slug}
        >
          {project.navTitle}
        </NavLink>
      ))}
      <button className="header-link header-button" type="button" onClick={onToggleDark}>
        {dark ? "Light" : "Dark"}
      </button>
    </div>
  );
}

function LandingPage() {
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

  return (
    <div className={`page-shell ${mounted ? "page-ready" : ""}`}>
      <div className="ambient ambient-left" aria-hidden="true" />
      <div className="ambient ambient-right" aria-hidden="true" />

      <header className="site-header">
        <div className="nav-wrap">
          <Link className="brand" to="/">
            <img src="/rocks.png" alt="ohstone profile mascot" className="brand-mark-image" />
            <span className="brand-text">ohstone</span>
          </Link>

          <HeaderActions dark={dark} onToggleDark={() => setDark((value) => !value)} />
        </div>
      </header>

      <main className="landing-main">
        <section className="landing-hero">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow">Profile</p>

            <div className="hero-intro">
              <img src="/rocks.png" alt="placeholder profile" className="hero-portrait" />

              <div className="hero-intro-copy">
                <p className="hero-name">오형석</p>
                <h1>Backend Developer</h1>
                <div className="hero-text-block">
                  <p className="hero-text hero-text-lead">
                    사용자가 자연스럽게 찾고 오래 머무를 수 있는 서비스를 만들고 싶은 백엔드 개발자 오형석입니다.
                  </p>
                  <p className="hero-text hero-text-support">
                    공공기관 웹 서비스의 기능 개발과 운영을 맡고 있으며,
                    <br />
                    최근에는 커뮤니티 앱 프로젝트에서 백엔드로 참여해 기능 구현부터 배포 환경 구성과 실제
                    출시까지의 과정을 경험했습니다.
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
                      ↗
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

function ProjectDetailPage({ project }) {
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

  if (!project) {
    return (
      <div className={`detail-shell ${mounted ? "page-ready" : ""}`}>
        <header className="site-header">
          <div className="nav-wrap">
            <Link className="brand" to="/">
              <img src="/rocks.png" alt="ohstone profile mascot" className="brand-mark-image" />
              <span className="brand-text">ohstone</span>
            </Link>

            <HeaderActions dark={dark} onToggleDark={() => setDark((value) => !value)} />
          </div>
        </header>

        <main className="detail-main">
          <section className="detail-card">
            <p className="eyebrow">Not Found</p>
            <h1>프로젝트를 찾지 못했습니다.</h1>
            <Link className="detail-back" to="/">
              메인으로 돌아가기
            </Link>
          </section>
        </main>
      </div>
    );
  }

  return (
    <div className={`detail-shell ${mounted ? "page-ready" : ""}`}>
      <div className="ambient ambient-left" aria-hidden="true" />
      <div className="ambient ambient-right" aria-hidden="true" />

      <header className="site-header">
        <div className="nav-wrap">
          <Link className="brand" to="/">
            <img src="/rocks.png" alt="ohstone profile mascot" className="brand-mark-image" />
            <span className="brand-text">ohstone</span>
          </Link>

          <HeaderActions dark={dark} onToggleDark={() => setDark((value) => !value)} />
        </div>
      </header>

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
