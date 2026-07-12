import { useState, useEffect } from "react";
import { portfolioData, courses, education, experiences } from "./data";
import { ProjectCard } from "./components/ui/ProjectCard";
import { CertificateGallery } from "./components/ui/CertificateDisplay";
import { ExperienceEducation } from "./components/ui/ExperienceEducation";
import { Terminal } from "./components/ui/Terminal";
import "./index.css";

export function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState<
    "experience" | "projects" | "certificates"
  >("experience");

  useEffect(() => {
    // Initial theme set
    document.documentElement.className = isDarkMode ? "dark" : "light";
    // Ensure body also gets the class for full coverage
    document.body.className = isDarkMode ? "dark" : "light";
  }, [isDarkMode]);

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
          <div className="flex items-center gap-4 min-w-0">
            <span className="text-lg sm:text-xl font-bold tracking-tighter text-primary dark:text-blue-500 truncate">
              {personalInfo.name}
            </span>
          </div>
          <div className="flex items-center gap-3 sm:gap-8 shrink-0">
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
          <Terminal isDarkMode={isDarkMode} onToggleTheme={toggleTheme} />
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
                  className={`w-full cursor-pointer text-center text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-[0.1em] sm:tracking-[0.25em] transition-colors ${
                    activeSection === tab.id
                      ? "text-primary dark:text-blue-400"
                      : "text-primary/40 dark:text-neutral-500 hover:text-primary dark:hover:text-blue-300"
                  }`}
                >
                  {tab.label}
                </button>
                {index < showcaseTabs.length - 1 && (
                  <span className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-primary/30 dark:text-white/30">
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
          <div className="flex flex-wrap justify-center gap-6 sm:gap-12 text-[11px] font-black uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-600">
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
          <p className="text-[10px] font-bold text-neutral-300 dark:text-neutral-800 tracking-widest text-center">
            © {new Date().getFullYear()} {personalInfo.name.toUpperCase()} .
            SYSTEM VERIFIED
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
