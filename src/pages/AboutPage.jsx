import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import SiteHeader from "../components/SiteHeader";
import usePageShell from "../hooks/usePageShell";
import {
  careerItems,
  certificateItems,
  educationItems,
  learningItems,
  profileFacts,
  sideProjectItems,
  skillGroups,
} from "../data/siteData";

export default function AboutPage() {
  const { dark, setDark, mounted } = usePageShell();
  const educationSection = (
    <section className="doc-section" aria-labelledby="education-title">
      <SectionTitle id="education-title">Education</SectionTitle>
      <ul className="doc-info-list">
        {educationItems.map((item) => (
          <li className="doc-info-row" key={item.title}>
            <div>
              <h3 className="doc-info-title">{item.title}</h3>
              {item.meta ? <p className="doc-info-subtext">{item.meta}</p> : null}
            </div>
            <div className="doc-info-meta">
              <span>{item.period}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
  const certificateSection = (
    <section className="doc-section" aria-labelledby="certificate-title">
      <SectionTitle id="certificate-title">Certificate</SectionTitle>
      <ul className="doc-info-list">
        {certificateItems.map((item) => (
          <li className="doc-info-row" key={item.title}>
            <div>
              <h3 className="doc-info-title">{item.title}</h3>
              <p className="doc-info-subtext">{item.meta}</p>
            </div>
            <div className="doc-info-meta">
              <span>{item.period}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
  const skillsSection = (
    <section className="doc-section" aria-labelledby="skills-title">
      <SectionTitle id="skills-title">Skills</SectionTitle>
      <div className="doc-skill-groups">
        {skillGroups.map((group) => (
          <div className="doc-skill-group" key={group.label}>
            <h3>{group.label}</h3>
            <div>
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <div className={`detail-shell about-shell ${mounted ? "page-ready" : ""}`}>
      <div className="ambient ambient-left" aria-hidden="true" />
      <div className="ambient ambient-right" aria-hidden="true" />

      <SiteHeader dark={dark} onToggleDark={() => setDark((value) => !value)} />

      <main className="doc-main">
        <article className="doc-sheet" aria-labelledby="about-title">
          <aside className="about-doc-sidebar">
            <img src="/rocks.png" alt="ohstone profile" className="about-doc-photo" />
            <div>
              <p className="about-doc-name">오형석</p>
              <p className="about-doc-role">Backend Developer</p>
            </div>

            <dl className="about-doc-facts">
              {profileFacts.map((item) => (
                <div key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>

          <div className="doc-content">
            <header className="doc-header">
              <p className="doc-section-title">About Me</p>
              <p id="about-title" className="doc-intro">
                <span>
                  Java와 Spring Boot를 기반으로 공공기관 SI 프로젝트의 기능 개발과 운영을 맡으며 실제 업무 흐름에 맞게 안정적으로 동작하는 업무 시스템을 개발하고 있습니다.
                </span>
                <span>
                  최근에는 야구 커뮤니티 앱 프로젝트에 참여해 API 설계, 검색, 알림, 관리자 기능 구현과 배포 환경 구성, 출시 과정까지 다루며 운영 환경을 고려한 백엔드 개발 역량을 넓혔습니다.
                </span>
                <span>
                  이러한 경험을 바탕으로 기능 구현에 그치지 않고, 실제 운영 환경에서 안정적으로 동작하도록 확장성과 유지보수성을 고려한 서버 구조를 고민하며 개발하고 있습니다.
                </span>
              </p>
            </header>

            {skillsSection}

            <section className="doc-section" aria-labelledby="career-title">
              <div className="doc-section-heading">
                <SectionTitle id="career-title">Career</SectionTitle>
                <Link className="about-detail-link" to="/career" aria-label="Career 상세 보기">
                  <svg viewBox="0 0 16 16" aria-hidden="true">
                    <path d="M5 4.5h6.5V11M11.2 4.8 4.5 11.5" />
                  </svg>
                </Link>
              </div>
              <div className="about-timeline">
                {careerItems.map((item) => (
                  <article className="doc-info-row" key={item.company}>
                    <div>
                      <h3 className="doc-info-title">{item.company}</h3>
                      {item.role ? <p className="doc-info-subtext">{item.role}</p> : null}
                    </div>
                    <div className="doc-info-meta">
                      <span>{item.period}</span>
                      <span>{item.meta}</span>
                    </div>
                    <p className="doc-info-description">{item.description}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="doc-section" aria-labelledby="learning-title">
              <SectionTitle id="learning-title">Learning</SectionTitle>
              <ul className="doc-info-list learning-info-list">
                {learningItems.map((item) => (
                  <li className="doc-info-row" key={item.title}>
                    <div>
                      <h3 className="doc-info-title">{item.title}</h3>
                    </div>
                    <div className="doc-info-meta">
                      <span>{item.period}</span>
                    </div>
                    {item.description ? (
                      <p className="doc-info-description">
                        {item.description}
                        {item.href ? (
                          <>
                            {" "}
                            <a
                              className="about-inline-icon-link"
                              href={item.href}
                              target="_blank"
                              rel="noreferrer"
                              aria-label={`${item.title} GitHub repository`}
                            >
                              <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M12 2.5c-5.3 0-9.6 4.3-9.6 9.6 0 4.2 2.7 7.8 6.5 9.1.5.1.7-.2.7-.5v-1.8c-2.6.6-3.2-1.1-3.2-1.1-.4-1.1-1-1.4-1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .8 1.5 2.2 1.1 2.7.8.1-.6.3-1.1.6-1.3-2.1-.2-4.3-1-4.3-4.6 0-1 .4-1.9 1-2.5-.1-.2-.4-1.2.1-2.5 0 0 .8-.3 2.6 1a9 9 0 0 1 4.8 0c1.8-1.2 2.6-1 2.6-1 .5 1.3.2 2.3.1 2.5.6.7 1 1.5 1 2.5 0 3.6-2.2 4.4-4.3 4.6.3.3.7.9.7 1.8v2.6c0 .3.2.6.7.5a9.6 9.6 0 0 0 6.5-9.1c0-5.3-4.3-9.6-9.6-9.6Z" />
                              </svg>
                            </a>
                          </>
                        ) : null}
                      </p>
                    ) : null}
                  </li>
                ))}
              </ul>
            </section>

            <section className="doc-section" aria-labelledby="side-project-title">
              <div className="doc-section-heading">
                <SectionTitle id="side-project-title">Side Project</SectionTitle>
                <Link className="about-detail-link" to="/side-project" aria-label="Side Project 상세 보기">
                  <svg viewBox="0 0 16 16" aria-hidden="true">
                    <path d="M5 4.5h6.5V11M11.2 4.8 4.5 11.5" />
                  </svg>
                </Link>
              </div>
              <ul className="doc-info-list">
                {sideProjectItems.map((item) => (
                  <li className="doc-info-row" key={item.title}>
                    <div>
                      <h3 className="doc-info-title">{item.title}</h3>
                      <p className="doc-info-subtext">{item.meta}</p>
                    </div>
                    <div className="doc-info-meta">
                      <span>{item.period}</span>
                      {item.status ? <span>{item.status}</span> : null}
                    </div>
                    {item.description ? <p className="doc-info-description">{item.description}</p> : null}
                  </li>
                ))}
              </ul>
            </section>

            {educationSection}
            {certificateSection}
          </div>
        </article>
      </main>

    </div>
  );
}
