import type { ProjectSlug } from "../data/siteData";

interface HeaderNavIconProps {
  type: ProjectSlug | "theme";
  dark?: boolean;
}

export default function HeaderNavIcon({ type, dark }: HeaderNavIconProps) {
  if (type === "about-me") {
    return (
      <svg className="header-link-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M5 4h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2ZM11 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM6 16c0-2 1-3 3-3s3 1 3 3m3-6h3m-3 4h3"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "career") {
    return (
      <svg className="header-link-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M5 7h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2ZM3 12a20 20 0 0 0 18 0M12 12v3"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "side-project") {
    return (
      <svg className="header-link-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M9 15v-5l2-3 3-2.5L17 3h4v4l-1.5 3-2.5 3-3 2H9ZM18 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM9 9H5l-3 5h7m6 0v5l-5 3v-7m-4 2-3 3m4 0-1 1"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg className="header-link-icon" viewBox="0 0 24 24" aria-hidden="true">
      {dark ? (
        <path
          d="M12 4.3v1.3m0 12.8v1.3M6.6 6.6l.9.9m9 9 .9.9M4.3 12h1.3m12.8 0h1.3M6.6 17.4l.9-.9m9-9 .9-.9M12 8.1a3.9 3.9 0 1 0 0 7.8 3.9 3.9 0 0 0 0-7.8Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ) : (
        <path
          d="M19.5 14.4A7.2 7.2 0 0 1 9.6 4.5a7.8 7.8 0 1 0 9.9 9.9Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
}
