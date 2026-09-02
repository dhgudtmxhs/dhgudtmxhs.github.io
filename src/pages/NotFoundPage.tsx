import { Link } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import usePageShell from "../hooks/usePageShell";

export default function NotFoundPage() {
  const { dark, setDark, mounted } = usePageShell();

  return (
    <div className={`detail-shell ${mounted ? "page-ready" : ""}`}>
      <SiteHeader dark={dark} onToggleDark={() => setDark((value) => !value)} />

      <main className="detail-main">
        <section className="detail-card">
          <p className="eyebrow">Not Found</p>
          <h1>페이지를 찾을 수 없습니다</h1>
          <Link className="detail-back" to="/">
            메인으로 돌아가기
          </Link>
        </section>
      </main>

    </div>
  );
}
