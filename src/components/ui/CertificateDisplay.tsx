import { useEffect, useMemo, useState } from "react";
import type { KeyboardEvent as ReactKeyboardEvent } from "react";
import type { Course } from "../../data";

interface CertificateDisplayProps {
  certificate: Course;
  className?: string;
}

function CertificateDisplay({
  certificate,
  className,
}: CertificateDisplayProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setIsOpen(true);
    }
  };

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        className={`group w-full flex flex-col md:flex-row lg:flex-col gap-5 md:gap-8 rounded-2xl border border-primary/10 dark:border-white/5 bg-white dark:bg-dark-surface p-5 md:p-6 shadow-sm hover:shadow-lg transition-shadow cursor-pointer ${className ?? ""}`}
        aria-label={`Open ${certificate.title} certificate`}
      >
        <div className="w-full md:w-64 lg:w-full shrink-0">
          <div className="relative aspect-video md:aspect-[4/3] lg:aspect-video overflow-hidden rounded-xl bg-primary/5 dark:bg-dark-bg/40 border border-primary/10 dark:border-white/5 p-2">
            <img
              src={certificate.image}
              alt={`${certificate.title} certificate`}
              className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.02]"
              loading="lazy"
            />
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4 text-left">
          <div className="space-y-3">
            <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-primary/5 dark:bg-white/5 border border-primary/10 dark:border-white/10 text-[10px] font-black uppercase tracking-[0.2em] text-primary dark:text-blue-400">
              {certificate.type}
            </span>
            <h3 className="text-2xl md:text-3xl font-black tracking-tight text-primary dark:text-dark-text">
              {certificate.title}
            </h3>
            <p className="text-sm md:text-base leading-relaxed text-primary/60 dark:text-neutral-400 font-medium">
              {certificate.description}
            </p>
            <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-primary/40 dark:text-neutral-500">
              {certificate.provider}
            </p>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center p-4 md:p-10 bg-dark-bg/95 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl max-h-[90vh] bg-white dark:bg-dark-surface rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-white/10"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-colors cursor-pointer"
              aria-label="Close certificate"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>

            <div className="bg-neutral-900 flex items-center justify-center p-4 md:p-10">
              <img
                src={certificate.image}
                alt={`${certificate.title} certificate`}
                className="w-full h-full object-contain max-h-[80vh]"
                loading="eager"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

interface CertificateGalleryProps {
  certificates: Course[];
  title?: string;
  className?: string;
}

export function CertificateGallery({
  certificates,
  title = "Certificates",
  className,
}: CertificateGalleryProps) {
  const [selectedSkill, setSelectedSkill] = useState("All");

  const skillOptions = useMemo(() => {
    const skillSet = new Set<string>();
    certificates.forEach((certificate) => {
      certificate.skills.forEach((skill) => skillSet.add(skill));
    });

    return Array.from(skillSet).sort((a, b) => a.localeCompare(b));
  }, [certificates]);

  const filteredCertificates = useMemo(() => {
    if (selectedSkill === "All") return certificates;
    return certificates.filter((certificate) =>
      certificate.skills.includes(selectedSkill),
    );
  }, [certificates, selectedSkill]);

  return (
    <section className={`space-y-6 md:space-y-8 ${className ?? ""}`}>
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
        <div className="space-y-2">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-primary dark:text-dark-text">
            {title}
          </h2>
          <p className="text-[11px] font-black uppercase tracking-[0.35em] text-primary/50 dark:text-neutral-500">
            {filteredCertificates.length} of {certificates.length} shown
          </p>
        </div>

        <div className="flex flex-wrap gap-2 md:gap-3">
          <button
            type="button"
            onClick={() => setSelectedSkill("All")}
            className={`px-3 py-1.5 rounded-full border text-[10px] font-black uppercase tracking-[0.2em] transition-all ${
              selectedSkill === "All"
                ? "bg-primary text-white border-primary dark:bg-blue-600 dark:border-blue-500"
                : "bg-white dark:bg-dark-surface border-primary/20 dark:border-white/10 text-primary/60 dark:text-neutral-400 hover:border-primary/40"
            }`}
            aria-pressed={selectedSkill === "All"}
          >
            All
          </button>
          {skillOptions.map((skill) => (
            <button
              key={skill}
              type="button"
              onClick={() => setSelectedSkill(skill)}
              className={`px-3 py-1.5 rounded-full border text-[10px] font-black uppercase tracking-[0.15em] transition-all ${
                selectedSkill === skill
                  ? "bg-primary text-white border-primary dark:bg-blue-600 dark:border-blue-500"
                  : "bg-white dark:bg-dark-surface border-primary/20 dark:border-white/10 text-primary/60 dark:text-neutral-400 hover:border-primary/40"
              }`}
              aria-pressed={selectedSkill === skill}
            >
              {skill}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        {filteredCertificates.map((certificate, index) => (
          <CertificateDisplay
            key={`${certificate.title}-${index}`}
            certificate={certificate}
            className="h-full"
          />
        ))}
      </div>

      {filteredCertificates.length === 0 && (
        <div className="rounded-2xl border border-dashed border-primary/20 dark:border-white/10 p-6 text-sm text-primary/60 dark:text-neutral-400">
          No certificates match this skill yet.
        </div>
      )}
    </section>
  );
}
