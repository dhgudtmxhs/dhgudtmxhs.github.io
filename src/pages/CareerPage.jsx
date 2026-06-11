import SectionTitle from "../components/SectionTitle";
import SiteHeader from "../components/SiteHeader";
import usePageShell from "../hooks/usePageShell";
import {
  careerOverview,
  careerProjects,
} from "../data/siteData";

export default function CareerPage() {
  const { dark, setDark, mounted } = usePageShell();
  const careerSummary = careerOverview.summary.replace(/\n{2,}/g, "\n");
  const projectSummaryItems = careerProjects.map((project) => ({
    title: project.title,
    period: project.period,
    summary: project.description,
  }));
  const featuredProjects = careerProjects.filter((project) => project.featured);

  return (
    <div className={`detail-shell career-shell ${mounted ? "page-ready" : ""}`}>
      <div className="ambient ambient-left" aria-hidden="true" />
      <div className="ambient ambient-right" aria-hidden="true" />

      <SiteHeader dark={dark} onToggleDark={() => setDark((value) => !value)} />

      <main className="doc-main">
        <article className="doc-sheet doc-sheet-single" aria-labelledby="career-title">
          <div className="doc-content">
            <header className="doc-header">
              <p className="doc-section-title">Career</p>
              <article className="doc-info-row" aria-label="Career overview">
                <div>
                  <h3 id="career-title" className="doc-info-title">
                    {careerOverview.company}
                  </h3>
                  <p className="doc-info-subtext">{careerOverview.role}</p>
                </div>
                <div className="doc-info-meta">
                  <span>{careerOverview.period}</span>
                  <span>{careerOverview.meta}</span>
                </div>
                <p className="doc-info-description">{careerSummary}</p>
              </article>
            </header>

            <section className="doc-section" aria-labelledby="career-projects-title">
              <SectionTitle id="career-projects-title">Project Summary</SectionTitle>
              <ul className="doc-info-list career-project-list">
                {projectSummaryItems.map((project) => (
                  <li className="doc-info-row" key={project.title}>
                    <div>
                      <h3 className="doc-info-title">{project.title}</h3>
                    </div>
                    <div className="doc-info-meta">
                      <span>{project.period}</span>
                    </div>
                    {project.summary ? <p className="doc-info-description">{project.summary}</p> : null}
                  </li>
                ))}
              </ul>
            </section>

            <section className="doc-section" aria-labelledby="career-featured-title">
              <SectionTitle id="career-featured-title">Project Details</SectionTitle>
              <div className="career-featured-list">
                {featuredProjects.map((project) => (
                  <article className="career-featured-item" key={project.title}>
                    <div className="career-featured-header">
                      <div>
                        <p className="career-featured-kicker">Detailed Project</p>
                        <h3 className="doc-info-title career-featured-title">{project.title}</h3>
                      </div>
                      <div className="doc-info-meta">
                        <span>{project.period}</span>
                      </div>
                    </div>
                    <div className="career-detail-blocks">
                      {project.overview ? (
                        <section className="career-detail-block">
                          <h4>Project Overview</h4>
                          <p>{project.overview}</p>
                        </section>
                      ) : null}
                      {project.role ? (
                        <section className="career-detail-block">
                          <h4>Role</h4>
                          <p>{project.role}</p>
                        </section>
                      ) : null}
                      {project.detailSections?.length ? (
                        <section className="career-detail-block">
                          <h4>Key Work</h4>
                          <div className="career-detail-section-list">
                            {project.detailSections.map((section) => (
                              <article className="career-detail-section-item" key={section.title}>
                                <h5>{section.title}</h5>
                                <p>{section.body}</p>
                              </article>
                            ))}
                          </div>
                        </section>
                      ) : null}
                      {project.techStack?.length ? (
                        <section className="career-detail-block">
                          <h4>Tech Stack</h4>
                          <div className="career-detail-stack">
                            {project.techStack.map((item) => (
                              <span key={item}>{item}</span>
                            ))}
                          </div>
                        </section>
                      ) : null}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </article>
      </main>
    </div>
  );
}
