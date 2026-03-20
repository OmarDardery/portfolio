import { useState, useEffect } from 'react';
import type { Project } from '../../data';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden'; // Prevent scrolling
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % project.imagePaths.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + project.imagePaths.length) % project.imagePaths.length);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 md:p-8 bg-dark-bg/95 backdrop-blur-md animate-in fade-in duration-300 pointer-events-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-6xl max-h-[95vh] bg-white dark:bg-dark-surface rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-white/10 transition-colors duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>

        <div className="overflow-y-auto max-h-[95vh]">
          <div className="relative bg-neutral-900 min-h-[300px] md:min-h-[500px] flex items-center justify-center p-4 md:p-12">
            <img
              src={project.imagePaths[currentImageIndex]}
              alt={`${project.title} - View ${currentImageIndex + 1}`}
              className="w-full h-full object-contain max-h-[70vh]"
              loading="eager"
            />

            {project.imagePaths.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 md:left-6 p-3 md:p-4 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md transition-all cursor-pointer flex items-center justify-center border border-white/10 z-10"
                  aria-label="Previous image"
                >
                  <span className="text-lg md:text-xl">←</span>
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 md:right-6 p-3 md:p-4 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md transition-all cursor-pointer flex items-center justify-center border border-white/10 z-10"
                  aria-label="Next image"
                >
                  <span className="text-lg md:text-xl">→</span>
                </button>
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2.5 z-10">
                  {project.imagePaths.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      aria-label={`Go to image ${idx + 1}`}
                      className={`h-1.5 rounded-full transition-all cursor-pointer ${idx === currentImageIndex ? 'w-8 bg-white' : 'w-2 bg-white/35 hover:bg-white/50'}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="p-6 md:p-10 space-y-8 text-left bg-gradient-to-b from-transparent to-neutral-50/50 dark:to-white/[0.02]">
            <div className="space-y-3">
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-primary dark:text-white">
                {project.title}
              </h2>
              <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-4xl font-medium">
                {project.description}
              </p>
            </div>

            <div className="space-y-3 border-t border-b border-neutral-200 dark:border-white/10 py-5">
              <h3 className="text-[10px] font-black uppercase tracking-[0.35em] text-primary dark:text-blue-400">Skills Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.skills?.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-primary/5 dark:bg-blue-500/10 border border-primary/15 dark:border-blue-500/25 text-[10px] font-black text-primary dark:text-blue-300 uppercase tracking-[0.06em]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="rounded-2xl border border-primary/15 dark:border-blue-500/25 bg-primary/[0.03] dark:bg-blue-500/[0.05] p-5 md:p-6">
                <h3 className="text-[10px] font-black uppercase tracking-[0.35em] text-primary dark:text-blue-400 mb-3">Why This Stack</h3>
                <p className="text-sm md:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed font-medium">
                  {project.why}
                </p>
              </div>
              <div className="rounded-2xl border border-neutral-300 dark:border-white/20 bg-neutral-100/60 dark:bg-white/[0.04] p-5 md:p-6">
                <h3 className="text-[10px] font-black uppercase tracking-[0.35em] text-primary dark:text-blue-400 mb-3">Usefulness</h3>
                <p className="text-sm md:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed font-medium">
                  {project.usefulness}
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-white/[0.02] p-5 md:p-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-1 w-8 bg-primary dark:bg-blue-500 rounded-full" />
                <h3 className="text-[10px] font-black uppercase tracking-[0.35em] text-primary dark:text-blue-400">The Breakdown</h3>
              </div>
              <ul className="space-y-3">
                {project.detailedAnalysis?.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-neutral-700 dark:text-neutral-300 leading-relaxed font-medium">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary dark:bg-blue-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row sm:flex-wrap gap-3">
              {project.links?.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-between gap-4 px-5 py-3 rounded-2xl bg-primary dark:bg-blue-600 text-white font-black hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <span className="uppercase tracking-[0.18em] text-[10px]">{link.label}</span>
                  <span className="opacity-70">↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
