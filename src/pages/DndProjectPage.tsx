import SiteHeader from "../components/SiteHeader";
import usePageShell from "../hooks/usePageShell";

const repositoryUrl = "https://github.com/dnd-side-project/dnd-15th-5-backend";

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
              <article className="doc-info-row" aria-label="DND project overview">
                <div>
                  <h1 id="dnd-project-title" className="doc-info-title" data-page-heading tabIndex={-1}>
                    DND 15기 5조 Backend
                  </h1>
                  <p className="doc-info-subtext">Backend</p>
                </div>
                <div className="doc-info-meta">
                  <a className="side-project-repository-link" href={repositoryUrl} target="_blank" rel="noreferrer">
                    GitHub Repository
                  </a>
                </div>
              </article>
            </header>
          </div>
        </article>
      </main>
    </div>
  );
}
