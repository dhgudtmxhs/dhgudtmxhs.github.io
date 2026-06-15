import SectionTitle from "../components/SectionTitle";
import SiteHeader from "../components/SiteHeader";
import usePageShell from "../hooks/usePageShell";
import { projects } from "../data/siteData";

const sideProject = projects.find((item) => item.slug === "side-project");

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
              <p className="doc-section-title">{sideProject.subtitle}</p>
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

            <section className="doc-section" aria-labelledby="side-project-work-title">
              <SectionTitle id="side-project-work-title">My Work</SectionTitle>
              <div className="detail-work-list">
                {sideProject.workSections.map((item) => (
                  <article className="detail-work-item" key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="doc-section" aria-labelledby="side-project-pr-title">
              <SectionTitle id="side-project-pr-title">Pull Request Highlights</SectionTitle>
              <div className="detail-pr-list">
                {sideProject.prHighlights.map((item) => (
                  <a
                    className="detail-pr-item"
                    href={`${sideProject.repository.href}/pull/${item.number}`}
                    target="_blank"
                    rel="noreferrer"
                    key={item.number}
                  >
                    <span className="detail-pr-number">#{item.number}</span>
                    <span className="detail-pr-title">{item.title}</span>
                    <span className="detail-pr-tag">{item.tag}</span>
                  </a>
                ))}
              </div>
            </section>

            <section className="doc-section" aria-labelledby="side-project-stack-title">
              <SectionTitle id="side-project-stack-title">Tech Stack</SectionTitle>
              <div className="detail-stack detail-stack-expanded">
                {sideProject.techStack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </section>
          </div>
        </article>
      </main>
    </div>
  );
}
