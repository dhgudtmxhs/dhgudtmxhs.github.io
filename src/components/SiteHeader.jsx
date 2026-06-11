import { Link } from "react-router-dom";
import HeaderActions from "./HeaderActions";

export default function SiteHeader({ dark, onToggleDark, className = "" }) {
  return (
    <header className={`site-header ${className}`.trim()}>
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
