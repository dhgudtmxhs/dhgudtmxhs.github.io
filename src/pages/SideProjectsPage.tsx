import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import { sideProjectItems } from "../data/siteData";
import usePageShell from "../hooks/usePageShell";

export default function SideProjectsPage() {
  const { dark, setDark, mounted } = usePageShell();

  return (
    <div className={`detail-shell career-shell ${mounted ? "page-ready" : ""}`}>
      <div className="ambient ambient-left" aria-hidden="true" />
      <div className="ambient ambient-right" aria-hidden="true" />
      <SiteHeader dark={dark} onToggleDark={() => setDark((value) => !value)} />

      <main className="doc-main">
        <article className="doc-sheet doc-sheet-single" aria-labelledby="side-projects-title">
          <div className="doc-content">
            <header className="doc-header">
              <h1 id="side-projects-title" className="doc-section-title" data-page-heading tabIndex={-1}>
                Side Projects
              </h1>
              <p className="doc-intro">
                서비스 개발 과정에서 맡은 백엔드 프로젝트를 정리했습니다.
              </p>
            </header>

            <section className="doc-section" aria-label="Side Projects 목록">
              <div className="side-project-overview-grid">
                {sideProjectItems.map((project, index) => (
                  <Link
                    className="project-card side-project-overview-card"
                    to={`/side-projects/${project.slug}`}
                    key={project.slug}
                    style={{ "--enter-delay": `${180 + index * 90}ms` } as CSSProperties}
                  >
                    <div className="project-card-top">
                      <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
                      <span className="project-arrow" aria-hidden="true">↗</span>
                    </div>
                    <div className="project-card-body">
                      <h3>{project.title}</h3>
                      <p className="project-meta">
                        {[project.meta, project.period, project.status].filter(Boolean).join(" · ")}
                      </p>
                      {project.description ? <p className="project-summary">{project.description}</p> : null}
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </article>
      </main>
    </div>
  );
}
