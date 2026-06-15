import { Link } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import usePageShell from "../hooks/usePageShell";
import {
  getProjectPanelCopy,
  heroLinks,
  primaryStacks,
  projects,
  secondaryStacks,
} from "../data/siteData";

export default function HomePage() {
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
                    많은 사용자가 이용하는 서비스를 만들고 싶은 백엔드 개발자 오형석입니다.
                  </p>
                  <p className="hero-text hero-text-support">
                    공공기관 대상 서비스의 기능 개발과 운영을 맡고 있으며
                    <br />
                    최근에는 커뮤니티 앱 프로젝트에 참여해 기능 구현부터 배포 환경 구성과 실제 출시까지의 과정을 경험했습니다.
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
              {projects.map((project, index) => {
                const panelCopy = getProjectPanelCopy(project.slug, project.meta, project.summary);

                return (
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
                      <p className="project-meta">{panelCopy.meta}</p>
                      <p className="project-summary">{panelCopy.summary}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        </section>
      </main>

    </div>
  );
}
