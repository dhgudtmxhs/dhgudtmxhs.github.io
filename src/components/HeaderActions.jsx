import { NavLink } from "react-router-dom";
import { projects } from "../data/siteData";
import HeaderNavIcon from "./HeaderNavIcon";

export default function HeaderActions({ dark, onToggleDark }) {
  return (
    <div className="header-actions">
      {projects.map((project) => (
        <NavLink
          className={({ isActive }) => `header-link${isActive ? " active" : ""}`}
          to={`/${project.slug}`}
          key={project.slug}
          aria-label={project.navTitle}
        >
          <HeaderNavIcon type={project.slug} />
          <span className="header-link-text">{project.navTitle}</span>
        </NavLink>
      ))}
      <button
        className="header-link header-button"
        type="button"
        onClick={onToggleDark}
        aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
        title={dark ? "Switch to light mode" : "Switch to dark mode"}
      >
        <HeaderNavIcon type="theme" dark={dark} />
        <span className="header-link-text">{dark ? "Light" : "Dark"}</span>
      </button>
    </div>
  );
}
