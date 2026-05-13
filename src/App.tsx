import { useState, useEffect } from "react";
import { portfolioData, courses, education, experiences } from "./data";
import { ProjectCard } from "./components/ui/ProjectCard";
import { CertificateGallery } from "./components/ui/CertificateDisplay";
import { ExperienceEducation } from "./components/ui/ExperienceEducation";
import "./index.css";

export function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState<
    "experience" | "projects" | "certificates"
  >("experience");
  const [typedCommand, setTypedCommand] = useState("");
  const [showIntroOutput, setShowIntroOutput] = useState(false);
  const [isCompactView, setIsCompactView] = useState(false);

  useEffect(() => {
    // Initial theme set
    document.documentElement.className = isDarkMode ? "dark" : "light";
    // Ensure body also gets the class for full coverage
    document.body.className = isDarkMode ? "dark" : "light";
  }, [isDarkMode]);

  useEffect(() => {
    const command = "echo $INTRODUCTION && echo $SKILLS";
    let currentIndex = 0;

    const intervalId = window.setInterval(() => {
      currentIndex += 1;
      setTypedCommand(command.slice(0, currentIndex));

      if (currentIndex >= command.length) {
        window.clearInterval(intervalId);
        window.setTimeout(() => setShowIntroOutput(true), 150);
      }
    }, 25);

    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsCompactView(window.innerWidth < 800);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const { personalInfo, projects } = portfolioData;

  const showcaseTabs = [
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "certificates", label: "Certificates" },
  ] as const;

  return (
    <div
      className={`min-h-screen transition-colors duration-500 font-sans antialiased selection:bg-primary selection:text-white ${isDarkMode ? "dark bg-dark-bg text-dark-text" : "light bg-light-bg text-primary"}`}
    >
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-primary/10 dark:border-white/5 bg-white/70 dark:bg-dark-bg/70 transition-colors">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-xl font-bold tracking-tighter text-primary dark:text-blue-500">
              {personalInfo.name}
            </span>
          </div>
          <div className="flex items-center gap-8">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-white/5 transition-colors cursor-pointer text-lg leading-none"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? "🌙" : "☀️"}
            </button>
            <a
              href={`mailto:${personalInfo.email}`}
              className="px-5 py-2 rounded-full bg-primary text-white dark:bg-blue-600 font-bold text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-sm"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      <main className="pt-32 md:pt-40 pb-24 px-6 max-w-7xl mx-auto space-y-24 md:space-y-40">
        {/* Terminal Intro */}
        <section className="space-y-6">
          <div className="rounded-3xl border border-primary/10 dark:border-white/10 bg-white dark:bg-dark-surface shadow-sm overflow-hidden h-[70vh] flex flex-col">
            <div className="flex items-center justify-between px-5 py-3 border-b border-primary/10 dark:border-white/10 bg-primary/5 dark:bg-white/5">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                <span className="ml-3 text-[10px] font-black uppercase tracking-[0.3em] text-primary/50 dark:text-neutral-400">
                  Terminal
                </span>
              </div>
              <a
                href="/resume/Omar_Dardir_Resume.pdf"
                download
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 dark:border-white/10 text-primary/70 dark:text-neutral-200 font-bold text-[10px] uppercase tracking-widest hover:scale-105 active:scale-95 transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Resume
              </a>
            </div>
            <div className="p-6 md:p-8 font-mono text-sm md:text-base text-primary/80 dark:text-neutral-200 flex-1 overflow-y-auto">
              <p className="flex items-center gap-2">
                <span className="text-blue-500">$</span>
                <span>{typedCommand}</span>
                {!showIntroOutput && (
                  <span className="inline-block h-4 w-2 bg-primary/60 dark:bg-white/70 animate-pulse" />
                )}
              </p>
              {showIntroOutput && (
                <div className="mt-4 space-y-2">
                  {isCompactView ? (
                    <ul className="space-y-2 text-primary/80 dark:text-neutral-200">
                      <li className="flex gap-2">
                        <span>-</span>
                        <span>
                          Omar El-Dardery — Full Stack DevOps Engineer
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span>-</span>
                        <span>Go (Golang)</span>
                      </li>
                      <li className="flex gap-2">
                        <span>-</span>
                        <span>Gin (Go)</span>
                      </li>
                      <li className="flex gap-2">
                        <span>-</span>
                        <span>Python</span>
                      </li>
                      <li className="flex gap-2">
                        <span>-</span>
                        <span>Django</span>
                      </li>
                      <li className="flex gap-2">
                        <span>-</span>
                        <span>FastAPI</span>
                      </li>
                      <li className="flex gap-2">
                        <span>-</span>
                        <span>JavaScript</span>
                      </li>
                      <li className="flex gap-2">
                        <span>-</span>
                        <span>React</span>
                      </li>
                      <li className="flex gap-2">
                        <span>-</span>
                        <span>Next.js</span>
                      </li>
                      <li className="flex gap-2">
                        <span>-</span>
                        <span>Docker</span>
                      </li>
                      <li className="flex gap-2">
                        <span>-</span>
                        <span>Docker Compose</span>
                      </li>
                      <li className="flex gap-2">
                        <span>-</span>
                        <span>Jenkins</span>
                      </li>
                      <li className="flex gap-2">
                        <span>-</span>
                        <span>Git &amp; GH</span>
                      </li>
                      <li className="flex gap-2">
                        <span>-</span>
                        <span>Unix CLI</span>
                      </li>
                    </ul>
                  ) : (
                    <>
                      <p className="text-primary dark:text-white font-semibold">
                        Omar El-Dardery — Full Stack DevOps Engineer
                      </p>
                      <p className="text-primary/60 dark:text-neutral-400">
                        Skills Venn (Dev | Ops):
                      </p>
                      <pre className="whitespace-pre-wrap text-primary/70 dark:text-neutral-300">
                        {String.raw`        .-""""""""""-.                 .-""""""""""-.
     .-'     DEV      '-.             .-'      OPS     '-.
   .'  React  Next.js    '.         .'  Jenkins  Git & GH  '.
  /  JavaScript  Python    \  Docker  /   Docker Compose     \
 ;   Django  FastAPI  Go    ;       ;     Unix CLI           ;
  \          Gin         .'/         \                      ./
   '.                  .'             '.                  .'
     '-.            .-'                 '-.            .-'
        '-._____.-'                         '-._____.-'`}
                      </pre>
                    </>
                  )}
                </div>
              )}
              {showIntroOutput && (
                <p className="mt-6 flex items-center gap-2">
                  <span className="text-blue-500">$</span>
                  <span className="inline-block h-4 w-2 bg-primary/60 dark:bg-white/70 animate-pulse" />
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Experience | Projects | Certificates */}
        <section id="projects" className="space-y-10 md:space-y-12">
          <div
            role="tablist"
            aria-label="Highlights"
            className="grid grid-cols-3 items-center"
          >
            {showcaseTabs.map((tab, index) => (
              <div
                key={tab.id}
                className="relative flex items-center justify-center py-2 "
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeSection === tab.id}
                  aria-controls={`panel-${tab.id}`}
                  onClick={() => setActiveSection(tab.id)}
                  className={`w-full cursor-pointer text-center text-xs md:text-sm font-black uppercase tracking-[0.25em] transition-colors ${
                    activeSection === tab.id
                      ? "text-primary dark:text-blue-400"
                      : "text-primary/40 dark:text-neutral-500 hover:text-primary dark:hover:text-blue-300"
                  }`}
                >
                  {tab.label}
                </button>
                {index < showcaseTabs.length - 1 && (
                  <span className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-white/70">
                    |
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="pt-4">
            {activeSection === "experience" && (
              <div id="panel-experience" role="tabpanel">
                <ExperienceEducation
                  education={education}
                  experiences={experiences}
                />
              </div>
            )}

            {activeSection === "projects" && (
              <div
                id="panel-projects"
                role="tabpanel"
                className="space-y-6 md:space-y-8"
              >
                <div className="flex items-end justify-between">
                  <h3 className="text-2xl md:text-3xl font-black tracking-tight text-primary dark:text-dark-text">
                    Projects
                  </h3>
                  <span className="text-[10px] font-black text-neutral-400 dark:text-neutral-500 uppercase tracking-[0.4em]">
                    [{projects.length}]
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                  {projects.map((project, idx) => (
                    <ProjectCard key={idx} project={project} />
                  ))}
                </div>
              </div>
            )}

            {activeSection === "certificates" && (
              <div id="panel-certificates" role="tabpanel">
                <CertificateGallery
                  certificates={courses}
                  title="Certificates"
                />
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-200 dark:border-white/5 py-20 px-6 bg-white dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
          <div className="flex gap-12 text-[11px] font-black uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-600">
            <a
              href={`mailto:${personalInfo.email}`}
              className="hover:text-primary dark:hover:text-blue-500 transition-colors"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/omar-el-dardery-96924b2a2"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary dark:hover:text-blue-500 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/OmarDardery"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary dark:hover:text-blue-500 transition-colors"
            >
              GitHub
            </a>
          </div>
          <p className="text-[10px] font-bold text-neutral-300 dark:text-neutral-800 tracking-widest">
            © {new Date().getFullYear()} {personalInfo.name.toUpperCase()} .
            SYSTEM VERIFIED
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
