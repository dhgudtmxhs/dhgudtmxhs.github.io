import { Link } from "react-router-dom";
import SiteHeader from "./SiteHeader";
import usePageShell from "../hooks/usePageShell";

export default function ProjectDetailPage({ project }) {
  const { dark, setDark, mounted } = usePageShell();

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
