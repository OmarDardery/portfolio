import { useState } from 'react';
import type { Project } from '../../data';
import { ProjectModal } from './ProjectModal';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div 
        onClick={() => setIsModalOpen(true)}
        className="group bg-white dark:bg-dark-surface border border-primary/10 dark:border-white/5 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full cursor-pointer pointer-events-auto"
      >
        <div className="relative aspect-video overflow-hidden bg-primary/5 dark:bg-dark-bg/50">
          <img 
            src={project.imagePaths[0]} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors" />
          
          <div className="absolute top-4 right-4 bg-white/90 dark:bg-dark-surface/90 text-primary dark:text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
            View Details
          </div>
        </div>

        <div className="p-6 flex flex-col flex-grow text-left">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold tracking-tight text-primary dark:text-dark-text group-hover:text-blue-500 transition-colors">
              {project.title}
            </h3>
          </div>

          <p className="text-sm leading-relaxed text-primary/60 dark:text-neutral-400 mb-6 line-clamp-3 font-medium">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-auto">
            {project.skills.slice(0, 3).map((skill, idx) => (
              <span 
                key={idx} 
                className="px-2 py-0.5 rounded bg-primary/5 dark:bg-white/5 border border-primary/10 dark:border-white/10 text-[10px] font-black text-primary dark:text-blue-400 uppercase tracking-tighter"
              >
                {skill}
              </span>
            ))}
            {project.skills.length > 3 && (
              <span className="text-[10px] font-bold text-neutral-400 dark:text-neutral-500 pt-0.5 tracking-tighter">+{project.skills.length - 3} MORE</span>
            )}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <ProjectModal 
          project={project} 
          onClose={() => setIsModalOpen(false)} 
        />
      )}
    </>
  );
}

