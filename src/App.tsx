import { useEffect, useState } from "react";
import { portfolioData, courses, education, experiences } from "./data";
import { CertificateGallery } from "./components/ui/CertificateDisplay";
import { ExperienceEducation } from "./components/ui/ExperienceEducation";
import resumePdf from "./public/resume/Omar_Dardir_Resume.pdf";
import portrait from "./public/profile/omar.webp";
import {
  ScrollGears,
  MatrixRain,
  TinyTerminal,
} from "./components/personality/PlayfulDetails";
import { PhotoGallery } from "./components/personality/PhotoGallery";
import "./index.css";

const services = [
  {
    number: "01",
    title: "Websites",
    short: "Website development",
    description: "Business sites, portfolios, and landing pages.",
    deliverables: [
      "Mobile-ready",
      "Contact forms",
      "SEO basics",
      "Easy updates",
    ],
  },
  {
    number: "02",
    title: "Custom software",
    short: "Custom software",
    description: "Web apps, dashboards, and tools for your workflow.",
    deliverables: ["Accounts", "Databases", "APIs", "Internal tools"],
  },
  {
    number: "03",
    title: "Deployment & domains",
    short: "Deployment and domains",
    description: "Get your project online, on your own domain.",
    deliverables: ["Hosting", "DNS & domains", "HTTPS", "Launch checks"],
  },
  {
    number: "04",
    title: "Automation",
    short: "Automation and integrations",
    description: "Connect your tools. Cut repetitive work.",
    deliverables: [
      "Scripts",
      "Integrations",
      "Repeatable setups",
      "AI workflows",
    ],
  },
];
const projectServices: Record<string, string> = {
  "IEEE EUI Website": "Website development",
  Solvex: "Custom web application",
  Nixlab: "Deployment & infrastructure",
  Lukat: "Software & connected devices",
};

export function App() {
  const [playing, setPlaying] = useState(() => {
    try {
      const saved = localStorage.getItem("portfolio-playful");
      if (saved) return saved === "on";
    } catch {}
    return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });
  useEffect(() => {
    try {
      localStorage.setItem("portfolio-playful", playing ? "on" : "off");
    } catch {}
  }, [playing]);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window === "undefined") return true;
    try {
      const saved = localStorage.getItem("portfolio-theme");
      if (saved) return saved === "dark";
    } catch {}
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    document.documentElement.classList.toggle("light", !isDarkMode);
    document.documentElement.style.colorScheme = isDarkMode ? "dark" : "light";
    try {
      localStorage.setItem("portfolio-theme", isDarkMode ? "dark" : "light");
    } catch {}
  }, [isDarkMode]);

  const { personalInfo } = portfolioData;
  const projects = portfolioData.projects.filter((project) => !project.hidden);
  const featured = ["IEEE EUI Website", "Solvex", "Nixlab", "Lukat"];
  const selected = featured
    .map((title) => projects.find((project) => project.title === title))
    .filter((project) => project !== undefined);
  const more = projects.filter((project) => !featured.includes(project.title));

  const renderProject = (project: (typeof projects)[number], index: number) => (
    <article className="work-card" key={project.title}>
      {project.title === "Lukat" ? (
        <div
          className="lukat-proof-cover"
          aria-label="Lukat prototype cutout and actual mobile app"
        >
          <div className="lukat-device">
            <img
              src={project.imagePaths[0]}
              alt="Lukat round display, isolated from the original prototype photo"
              loading="lazy"
            />
          </div>
          <div className="lukat-app">
            <img
              src={project.imagePaths[2]}
              alt="Actual Lukat app with the dog at a terminal GIF"
              loading="lazy"
            />
          </div>
          <span className="lukat-cover-label">lukat / prototype + app</span>
        </div>
      ) : project.imagePaths.length > 0 ? (
        <div className="work-image">
          <img
            src={project.imagePaths[0]}
            alt={project.imageCaptions?.[0] ?? `${project.title} interface`}
            loading="lazy"
            width="1200"
            height="675"
          />
        </div>
      ) : (
        <div className="work-cover" aria-hidden="true">
          <span>
            {project.title === "Nixlab"
              ? "Infrastructure, made repeatable."
              : "A home for the community."}
          </span>
          <span className="cover-name">
            {project.title === "Nixlab" ? "nixlab /" : "IEEE EUI ↗"}
          </span>
        </div>
      )}
      <div className="work-body">
        {(projectServices[project.title] || project.status) && (
          <span className="project-status">
            {projectServices[project.title] ?? project.status}
          </span>
        )}
        <div className="work-title">
          <span className="project-number">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3>{project.title}</h3>
        </div>
        <p>{project.description}</p>

        <div className="project-links">
          {project.links
            .filter((link) => link.type !== "linkedin")
            .map((link) => (
              <a
                href={link.url}
                key={link.url}
                target="_blank"
                rel="noreferrer"
              >
                {link.label} <span aria-hidden="true">↗</span>
              </a>
            ))}
        </div>
        <details className="project-detail">
          <summary>Behind the project</summary>
          <p>{project.why}</p>
          <ul>
            {project.detailedAnalysis.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="technology-list" aria-label="Technologies">
            {project.skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </details>
        {project.imagePaths.length > 0 && (
          <details className="photos-details">
            <summary>
              Photos & screenshots <span>({project.imagePaths.length})</span>
            </summary>
            <PhotoGallery project={project} />
          </details>
        )}
      </div>
    </article>
  );

  return (
    <div className={`portfolio ${playing ? "playful-on" : "playful-off"}`}>
      <ScrollGears playing={playing} />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <nav className="shell nav" aria-label="Main navigation">
          <a className="wordmark" href="#">
            Omar El-Dardery<span aria-hidden="true">.</span>
          </a>
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#work">Work</a>
            <a href="#delivery">How I work</a>
            <a href="#about">About</a>
          </div>
          <div className="nav-actions">
            <button
              className="play-toggle"
              type="button"
              onClick={() => setPlaying(!playing)}
              aria-pressed={playing}
              aria-label={
                playing ? "Pause decorative motion" : "Enable decorative motion"
              }
              title={
                playing
                  ? "Pause the tiny machinery"
                  : "Start the tiny machinery"
              }
            >
              {playing ? "⚙ Motion on" : "⚙ Motion off"}
            </button>
            <button
              className="theme-toggle"
              onClick={() => setIsDarkMode(!isDarkMode)}
              aria-label={`Switch to ${isDarkMode ? "light" : "dark"} theme`}
            >
              {isDarkMode ? "☀" : "☾"}
            </button>
            <a className="nav-contact" href={`mailto:${personalInfo.email}`}>
              Let’s talk <span aria-hidden="true">↗</span>
            </a>
          </div>
        </nav>
      </header>
      <main id="main">
        <section className="shell hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Omar El-Dardery · Cairo, Egypt</p>
            <h1 id="hero-title">
              Full-Stack
              <br />
              <em>Developer.</em>
            </h1>
            <p className="hero-description">
              I build websites and software, then get them live on your domain.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#services">
                View services <span aria-hidden="true">↓</span>
              </a>
              <a
                className="button button-secondary"
                href={`mailto:${personalInfo.email}`}
              >
                Start a project <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="hero-tags">
              <span>Websites</span>
              <span>Software</span>
              <span>Deployment</span>
            </div>
          </div>
          <aside className="portrait-block" aria-label="Meet Omar">
            <div className="photo-note">
              <span>Me 🙂</span>
              <svg viewBox="0 0 160 100" fill="none" aria-hidden="true">
                <path
                  className="doodle-path"
                  d="M10 18 C96 -2 152 20 105 45 C48 76 22 20 65 25 C99 30 88 73 126 85"
                />
                <path d="M113 84 L129 87 L124 71" />
              </svg>
            </div>
            <div className="portrait-frame">
              <img
                src={portrait}
                alt="Omar El-Dardery in a suit, giving two thumbs up"
                width="720"
                height="780"
                fetchPriority="high"
              />
              <span className="photo-sticker">
                build things.
                <br />
                make them work.
              </span>
            </div>
            <p className="portrait-caption">
              Occasionally leaves the terminal.
            </p>
          </aside>
        </section>
        <section className="services-section" id="services">
          <div className="shell services-layout">
            <div className="services-intro">
              <h2>Services</h2>
              <p>One task or the full project.</p>
              <a
                className="text-link"
                href={`mailto:${personalInfo.email}?subject=Let%E2%80%99s%20discuss%20a%20project`}
              >
                Let’s talk ↗
              </a>
            </div>
            <div className="service-catalog">
              {services.map((service) => (
                <article className="service-offering" key={service.number}>
                  <span className="item-number">{service.number} /</span>
                  <div className="service-main">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>

                    <a
                      className="service-cta"
                      aria-label={`Enquire about ${service.short.toLowerCase()}`}
                      href={`mailto:${personalInfo.email}?subject=${encodeURIComponent(service.short + " enquiry")}`}
                    >
                      Enquire <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                  <div className="service-includes">
                    <ul>
                      {service.deliverables.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="delivery-section" id="delivery">
          <MatrixRain playing={playing} />
          <div className="shell delivery-content">
            <div className="section-heading">
              <h2>From brief to launch</h2>
            </div>
            <ol className="delivery-steps">
              {[
                ["01", "Scope", "Agree on features."],
                ["02", "Build", "Develop the product."],
                ["03", "Check", "Test key flows."],
                ["04", "Launch", "Deploy. Connect the domain."],
              ].map(([n, title, body]) => (
                <li key={n}>
                  <span className="flow-number">{n}</span>
                  <span className="flow-arrow" aria-hidden="true">
                    →
                  </span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </li>
              ))}
            </ol>
            <div className="standards-strip">
              <span>Built with</span>
              <div>Docker / Compose</div>
              <div>Git / GitHub</div>
              <div>Linux</div>
              <div>CI checks</div>
              <div>Setup notes</div>
            </div>
            <div className="ai-delivery-note" id="approach">
              <span>AI-assisted. Human-reviewed.</span>
              <p>I direct coding agents, review changes, and test results.</p>
            </div>
            <TinyTerminal />
          </div>
        </section>
        <section className="shell section" id="work">
          <div className="section-heading heading-row">
            <div>
              <h2>Selected work</h2>
            </div>
            <a
              className="text-link"
              href="https://github.com/OmarDardery"
              target="_blank"
              rel="noreferrer"
            >
              Explore GitHub ↗
            </a>
          </div>
          <div className="work-grid">{selected.map(renderProject)}</div>
          <details className="more-work">
            <summary>
              More work <span>({more.length})</span>
            </summary>
            <div className="work-grid">{more.map(renderProject)}</div>
          </details>
        </section>
        <section className="shell section" id="about">
          <div className="about-intro">
            <div>
              <p className="eyebrow">About</p>
              <h2>Omar El-Dardery</h2>
            </div>
            <div>
              <p>Computer engineering student at EUI, Cairo.</p>
              <p>Web platforms. Infrastructure. A Go workshop with GDG.</p>{" "}
              <a
                className="text-link"
                href="https://www.linkedin.com/in/omar-el-dardery-96924b2a2"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
          <details className="background-details">
            <summary>Experience & education</summary>
            <div className="experience-content">
              <ExperienceEducation
                education={education}
                experiences={experiences}
              />
            </div>
          </details>
          <details className="learning-details">
            <summary>Courses & certificates</summary>
            <CertificateGallery
              certificates={courses}
              title="Learning & certificates"
            />
          </details>
        </section>
        <section className="contact-section" id="contact">
          <div className="shell contact-layout">
            <div>
              <h2>Have a project?</h2>
              <p>Send the idea, timeline, and what you already have.</p>
            </div>
            <a
              className="button button-primary"
              href={`mailto:${personalInfo.email}`}
            >
              Email me <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>
      <footer className="shell site-footer">
        <span>
          © {new Date().getFullYear()} {personalInfo.name}
        </span>
        <div>
          <a href={`mailto:${personalInfo.email}`}>Email</a>
          <a
            href="https://www.linkedin.com/in/omar-el-dardery-96924b2a2"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
          <a
            href="https://github.com/OmarDardery"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
        </div>
        <a href={resumePdf} target="_blank" rel="noreferrer">
          View résumé ↗
        </a>
      </footer>
    </div>
  );
}
export default App;
