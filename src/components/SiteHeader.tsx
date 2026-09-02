import { Link } from "react-router-dom";
import HeaderActions from "./HeaderActions";

interface SiteHeaderProps {
  dark: boolean;
  onToggleDark: () => void;
  className?: string;
}

export default function SiteHeader({ dark, onToggleDark, className = "" }: SiteHeaderProps) {
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
