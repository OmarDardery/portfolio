import type { EducationEntry, ExperienceEntry } from "../../data/resume";

interface ExperienceEducationProps {
  education: EducationEntry[];
  experiences: ExperienceEntry[];
  className?: string;
}

export function ExperienceEducation({
  education,
  experiences,
  className,
}: ExperienceEducationProps) {
  return (
    <div className={`space-y-10 ${className ?? ""}`}>
      <section className="space-y-6">
        <div className="flex items-end justify-between border-b border-neutral-200 dark:border-white/5 pb-4">
          <h3 className="text-2xl md:text-3xl font-black tracking-tight text-primary dark:text-dark-text">
            Experience
          </h3>
          <span className="text-[10px] font-black text-neutral-400 dark:text-neutral-500 uppercase tracking-[0.4em]">
            [{experiences.length}]
          </span>
        </div>
        <div className="space-y-5">
          {experiences.map((experience, index) => (
            <article
              key={`${experience.company}-${index}`}
              className="rounded-2xl border border-primary/10 dark:border-white/5 bg-white dark:bg-dark-surface p-5 md:p-6 shadow-sm"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                <div>
                  <h4 className="text-xl md:text-2xl font-black tracking-tight text-primary dark:text-dark-text">
                    {experience.role}
                  </h4>
                  <p className="text-sm md:text-base font-semibold text-primary/60 dark:text-neutral-400">
                    {experience.company}
                  </p>
                </div>
                <div className="text-xs md:text-sm font-black uppercase tracking-[0.25em] text-primary/40 dark:text-neutral-500">
                  {experience.dates}
                </div>
              </div>

              <p className="mt-2 text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-primary/40 dark:text-neutral-500">
                {experience.location}
              </p>

              <ul className="mt-4 space-y-2 text-sm md:text-base text-primary/60 dark:text-neutral-300 font-medium">
                {experience.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/60 dark:bg-blue-400 shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-end justify-between border-b border-neutral-200 dark:border-white/5 pb-4">
          <h3 className="text-2xl md:text-3xl font-black tracking-tight text-primary dark:text-dark-text">
            Education
          </h3>
          <span className="text-[10px] font-black text-neutral-400 dark:text-neutral-500 uppercase tracking-[0.4em]">
            [{education.length}]
          </span>
        </div>
        <div className="space-y-5">
          {education.map((entry, index) => (
            <article
              key={`${entry.institution}-${index}`}
              className="rounded-2xl border border-primary/10 dark:border-white/5 bg-white dark:bg-dark-surface p-5 md:p-6 shadow-sm"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                <div>
                  <h4 className="text-xl md:text-2xl font-black tracking-tight text-primary dark:text-dark-text">
                    {entry.institution}
                  </h4>
                  <p className="text-sm md:text-base font-semibold text-primary/60 dark:text-neutral-400">
                    {entry.program}
                  </p>
                </div>
                <div className="text-xs md:text-sm font-black uppercase tracking-[0.25em] text-primary/40 dark:text-neutral-500">
                  {entry.dates}
                </div>
              </div>

              <p className="mt-2 text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-primary/40 dark:text-neutral-500">
                {entry.location}
              </p>

              {entry.highlights && entry.highlights.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {entry.highlights.map((highlight, highlightIndex) => (
                    <span
                      key={highlightIndex}
                      className="px-3 py-1 rounded-full bg-primary/5 dark:bg-white/5 border border-primary/10 dark:border-white/10 text-[10px] font-black uppercase tracking-[0.2em] text-primary dark:text-blue-300"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
