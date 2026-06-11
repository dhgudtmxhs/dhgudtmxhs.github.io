export default function HeaderNavIcon({ type, dark }) {
  if (type === "about-me") {
    return (
      <svg className="header-link-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 12.2a3.7 3.7 0 1 0 0-7.4 3.7 3.7 0 0 0 0 7.4Zm-6.4 7c.7-3.4 3-5.2 6.4-5.2s5.7 1.8 6.4 5.2"
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
          d="M8.4 7.2V5.8c0-.9.6-1.5 1.5-1.5h4.2c.9 0 1.5.6 1.5 1.5v1.4M5.5 8h13c.9 0 1.5.6 1.5 1.5v8.3c0 .9-.6 1.5-1.5 1.5h-13c-.9 0-1.5-.6-1.5-1.5V9.5C4 8.6 4.6 8 5.5 8Zm6.5 4.5v1.1"
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
          d="M4.5 7.4c0-.9.6-1.5 1.5-1.5h4.2l1.7 1.8H18c.9 0 1.5.6 1.5 1.5v7.4c0 .9-.6 1.5-1.5 1.5H6c-.9 0-1.5-.6-1.5-1.5V7.4Z"
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
