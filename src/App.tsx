import { useState, useEffect } from 'react';
import { portfolioData } from './data';
import { ProjectCard } from './components/ui/ProjectCard';
import { SkillBadge } from './components/ui/SkillBadge';
import './index.css';

export function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Initial theme set
    document.documentElement.className = isDarkMode ? 'dark' : 'light';
    // Ensure body also gets the class for full coverage
    document.body.className = isDarkMode ? 'dark' : 'light';
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const { personalInfo, technicalSkills, conceptualSkills, projects } = portfolioData;

  const handleScrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <div className={`min-h-screen transition-colors duration-500 font-sans antialiased selection:bg-primary selection:text-white ${isDarkMode ? 'dark bg-dark-bg text-dark-text' : 'light bg-light-bg text-primary'}`}>
      
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
              {isDarkMode ? '🌙' : '☀️'}
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
        
        {/* Hero Section */}
        <section className="text-center space-y-12 py-8 md:py-12 relative overflow-hidden group">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-primary/5 dark:bg-blue-500/5 rounded-full blur-[120px] pointer-events-none group-hover:scale-110 transition-transform duration-1000" />
          
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/5 dark:bg-blue-500/10 border border-primary/10 dark:border-blue-500/10 text-[10px] font-black text-primary dark:text-blue-400 uppercase tracking-[0.3em]">
              {personalInfo.role}
            </div>
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter text-primary dark:text-dark-text leading-[0.95] md:-ml-2">
              Building Scalable <br />
              <span className="text-primary/30 dark:text-white/20 text-4xl md:text-7xl lg:text-9xl">Infrastructure.</span>
            </h1>
          </div>

          <div className="max-w-xl mx-auto space-y-12">
            <p className="text-base md:text-xl leading-relaxed text-primary/60 dark:text-neutral-400 font-medium italic">
              "{personalInfo.tagline}"
            </p>
          </div>
        </section>


        {/* Projects Grid */}
        <section id="projects" className="space-y-12 md:space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-neutral-200 dark:border-white/5 pb-10">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-primary dark:text-dark-text">Selected Projects</h2>
            <span className="text-[10px] font-black text-neutral-400 dark:text-neutral-500 uppercase tracking-[0.4em] mb-2">
              [{projects.length}]
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {projects.map((project, idx) => (
              <ProjectCard key={idx} project={project} />
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="space-y-12 md:space-y-16">
          <div className="flex items-end justify-between border-b border-neutral-200 dark:border-white/5 pb-10">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-primary dark:text-dark-text">The Stack</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div className="space-y-8 md:space-y-10">
              <h3 className="text-[11px] font-black uppercase tracking-[0.5em] text-primary/40 dark:text-neutral-500 border-l-2 border-primary/20 pl-4">Technologies</h3>
              <div className="flex flex-wrap gap-3 md:gap-4">
                {technicalSkills.map((skill, idx) => (
                  <SkillBadge key={idx} {...skill} />
                ))}
              </div>
            </div>
            <div className="space-y-8 md:space-y-10">
              <h3 className="text-[11px] font-black uppercase tracking-[0.5em] text-primary/40 dark:text-neutral-500 border-l-2 border-primary/20 pl-4">Concepts</h3>
              <div className="flex flex-wrap gap-3 md:gap-4">
                {conceptualSkills.map((skill, idx) => (
                  <SkillBadge key={idx} {...skill} />
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-200 dark:border-white/5 py-20 px-6 bg-white dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
          <div className="flex gap-12 text-[11px] font-black uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-600">
            <a href={`mailto:${personalInfo.email}`} className="hover:text-primary dark:hover:text-blue-500 transition-colors">Email</a>
            <a href="https://www.linkedin.com/in/omar-el-dardery-96924b2a2" target="_blank" rel="noreferrer" className="hover:text-primary dark:hover:text-blue-500 transition-colors">LinkedIn</a>
            <a href="https://github.com/OmarDardery" target="_blank" rel="noreferrer" className="hover:text-primary dark:hover:text-blue-500 transition-colors">GitHub</a>
          </div>
          <p className="text-[10px] font-bold text-neutral-300 dark:text-neutral-800 tracking-widest">
            © {new Date().getFullYear()} {personalInfo.name.toUpperCase()} . SYSTEM VERIFIED
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

