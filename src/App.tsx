import { useEffect, useState } from "react";
import { portfolioData, courses, education, experiences } from "./data";
import { CertificateGallery } from "./components/ui/CertificateDisplay";
import { ExperienceEducation } from "./components/ui/ExperienceEducation";
import resumePdf from "./public/resume/Omar_Dardir_Resume.pdf";
import "./index.css";

const services = [
  {
    number: "01",
    title: "Turn an idea into a working product",
    description:
      "Websites, platforms, and internal tools that make a clear task easier—from finding opportunities to managing bookings.",
    examples: "Product development · Websites · Internal tools",
  },
  {
    number: "02",
    title: "Make the work easier to run",
    description:
      "Connect services, automate repetitive setup, and build systems that are easier to maintain and hand over.",
    examples: "Automation · Deployment · Self-hosted systems",
  },
  {
    number: "03",
    title: "Move faster with well-directed AI",
    description:
      "Translate a goal into clear instructions for LLMs and coding agents, guide the implementation, and check the result against what people actually need.",
    examples: "Agent workflows · Rapid prototyping · Code review",
  },
];
const process = [
  [
    "Understand the goal",
    "Start with the user, the problem, and what a useful result should look like.",
  ],
  [
    "Give agents a clear brief",
    "Provide context, constraints, and focused tasks so the work moves in the right direction.",
  ],
  [
    "Review and steer",
    "Inspect the output, challenge assumptions, and adjust the approach as the product takes shape.",
  ],
  [
    "Test and deliver",
    "Check behavior, resolve gaps, and leave a result that can be understood and maintained.",
  ],
];

export function App() {
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

  const { personalInfo, projects } = portfolioData;
  const featured = ["Solvex", "Nixlab", "IEEE EUI Website", "EngDen"];
  const selected = featured
    .map((title) => projects.find((project) => project.title === title))
    .filter((project) => project !== undefined);
  const more = projects.filter((project) => !featured.includes(project.title));

  const renderProject = (project: (typeof projects)[number], index: number) => (
    <article className="work-card" key={project.title}>
      {project.imagePaths.length > 0 ? (
        <div className="work-image">
          <img
            src={project.imagePaths[0]}
            alt={`${project.title} interface`}
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
        <div className="work-title">
          <span className="project-number">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3>{project.title}</h3>
        </div>
        <p>{project.description}</p>
        <p className="project-value">{project.usefulness}</p>
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
          {project.imagePaths.length > 1 && (
            <div className="project-gallery">
              {project.imagePaths.slice(1).map((image, i) => (
                <a
                  href={image}
                  key={image}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${project.title} screenshot ${i + 2}`}
                >
                  <img
                    src={image}
                    alt={`${project.title}, additional view ${i + 2}`}
                    loading="lazy"
                  />
                </a>
              ))}
            </div>
          )}
        </details>
      </div>
    </article>
  );

  return (
    <div className="portfolio">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <nav className="shell nav" aria-label="Main navigation">
          <a className="wordmark" href="#">
            Omar El-Dardery<span aria-hidden="true">.</span>
          </a>
          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#approach">Approach</a>
            <a href="#about">About</a>
          </div>
          <div className="nav-actions">
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
            <p className="eyebrow">Software developer · Cairo, Egypt</p>
            <h1 id="hero-title">
              Good ideas deserve
              <br />
              to <em>work in real life.</em>
            </h1>
            <p className="hero-description">
              I build useful software, simplify the systems behind it, and guide
              AI agents to turn ideas into working results.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Explore my work <span aria-hidden="true">↓</span>
              </a>
              <a
                className="button button-secondary"
                href={`mailto:${personalInfo.email}`}
              >
                Tell me what you’re building <span aria-hidden="true">↗</span>
              </a>
            </div>
            <p className="hero-note">
              From the first brief to the details that make it usable.
            </p>
          </div>
          <aside className="hero-aside" aria-label="What I bring">
            <span className="aside-label">A practical builder’s mindset</span>
            <p>
              Understand the problem.
              <br />
              Build the useful version.
              <br />
              <span>Make it easier to use.</span>
            </p>
            <div className="aside-footer">
              <span>
                Web products
                <br />
                Automation & infrastructure
                <br />
                AI-assisted delivery
              </span>
              <span className="aside-arrow" aria-hidden="true">
                ↘
              </span>
            </div>
          </aside>
        </section>
        <section className="services-section">
          <div className="shell">
            <div className="section-heading">
              <p className="eyebrow">How I can help</p>
              <h2>Start with what you need to achieve.</h2>
            </div>
            <div className="services-grid">
              {services.map((service) => (
                <article className="service" key={service.number}>
                  <span className="item-number">{service.number} /</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <span className="service-examples">{service.examples}</span>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="shell section" id="work">
          <div className="section-heading heading-row">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2>Different projects. A useful purpose.</h2>
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
              More projects & teaching <span>({more.length})</span>
            </summary>
            <div className="work-grid">{more.map(renderProject)}</div>
          </details>
        </section>
        <section className="approach-section" id="approach">
          <div className="shell approach-layout">
            <div className="approach-intro">
              <p className="eyebrow">Working with AI</p>
              <h2>
                Faster progress starts
                <br />
                with better direction.
              </h2>
              <p>
                I use LLMs and coding agents as part of my development workflow:
                to explore options, prototype, and carry out focused
                implementation tasks. I stay responsible for the decisions, the
                review, and whether the result solves the original problem.
              </p>
              <p className="approach-note">
                Clear context. Small feedback loops. Results checked against the
                brief.
              </p>
            </div>
            <ol className="process-list">
              {process.map(([title, description], index) => (
                <li key={title}>
                  <span className="process-number">0{index + 1}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
        <section className="shell section" id="about">
          <div className="about-intro">
            <div>
              <p className="eyebrow">A little about me</p>
              <h2>
                Curious about how things work.
                <br />
                Focused on making them useful.
              </h2>
            </div>
            <div>
              <p>
                I’m Omar, a computer engineering student at Egypt University of
                Informatics. My work spans web products, backend systems, and
                the infrastructure that keeps them running.
              </p>
              <p>
                I’ve worked on equipment management and telemetry tools, built
                platforms for university communities, and taught Go through a
                GDG workshop. I enjoy turning a complicated problem into
                something people can understand and use.
              </p>
              <a
                className="text-link"
                href="https://www.linkedin.com/in/omar-el-dardery-96924b2a2"
                target="_blank"
                rel="noreferrer"
              >
                Connect on LinkedIn ↗
              </a>
            </div>
          </div>
          <div className="experience-content">
            <ExperienceEducation
              education={education}
              experiences={experiences}
            />
          </div>
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
              <p className="eyebrow">Let’s build something useful</p>
              <h2>Have a problem worth solving?</h2>
              <p>
                Tell me who it’s for, what’s getting in the way, and what you’d
                like to make possible.
              </p>
            </div>
            <a
              className="button button-primary"
              href={`mailto:${personalInfo.email}`}
            >
              Start a conversation <span aria-hidden="true">↗</span>
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
