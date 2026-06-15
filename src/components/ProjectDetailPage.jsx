import { Link } from "react-router-dom";
import SiteHeader from "./SiteHeader";
import usePageShell from "../hooks/usePageShell";

export default function ProjectDetailPage({ project }) {
  const { dark, setDark, mounted } = usePageShell();
  const repositoryHref = project.repository?.href;

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

          {repositoryHref ? (
            <a className="detail-repository-link" href={repositoryHref} target="_blank" rel="noreferrer">
              {project.repository.label}
            </a>
          ) : null}

          {project.facts ? (
            <dl className="detail-facts">
              {project.facts.map((item) => (
                <div key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
          ) : null}

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

          {!project.techStack ? (
            <div className="detail-stack">
              {project.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          ) : null}

          {project.overview || project.myRole ? (
            <div className="detail-section-grid">
              {project.overview ? (
                <section className="detail-section">
                  <h2>Overview</h2>
                  <p>{project.overview}</p>
                </section>
              ) : null}
              {project.myRole ? (
                <section className="detail-section">
                  <h2>My Role</h2>
                  <p>{project.myRole}</p>
                </section>
              ) : null}
            </div>
          ) : null}

          {project.workSections ? (
            <section className="detail-section">
              <h2>My Work</h2>
              <div className="detail-work-list">
                {project.workSections.map((item) => (
                  <article className="detail-work-item" key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </article>
                ))}
              </div>
            </section>
          ) : null}

          {project.prHighlights ? (
            <section className="detail-section">
              <h2>Pull Request Highlights</h2>
              <div className="detail-pr-list">
                {project.prHighlights.map((item) => {
                  const href = repositoryHref ? `${repositoryHref}/pull/${item.number}` : null;
                  const content = (
                    <>
                      <span className="detail-pr-number">#{item.number}</span>
                      <span className="detail-pr-title">{item.title}</span>
                      <span className="detail-pr-tag">{item.tag}</span>
                    </>
                  );

                  return href ? (
                    <a className="detail-pr-item" href={href} target="_blank" rel="noreferrer" key={item.number}>
                      {content}
                    </a>
                  ) : (
                    <div className="detail-pr-item" key={item.number}>
                      {content}
                    </div>
                  );
                })}
              </div>
            </section>
          ) : null}

          {project.techStack ? (
            <section className="detail-section">
              <h2>Tech Stack</h2>
              <div className="detail-stack detail-stack-expanded">
                {project.techStack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </section>
          ) : null}

          <Link className="detail-back" to="/">
            메인으로 돌아가기
          </Link>
        </section>
      </main>
    </div>
  );
}
