interface SkillBadgeProps {
  name: string;
  imagePath?: string;
  isTechnical: boolean;
}

export function SkillBadge({ name, imagePath, isTechnical }: SkillBadgeProps) {
  return (
    <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-all
      ${isTechnical 
        ? "bg-primary/10 border-primary/30 text-primary dark:bg-primary/5 dark:border-primary/20 dark:text-blue-200" 
        : "bg-primary/5 border-primary/10 text-primary/60 dark:bg-white/5 dark:border-white/10 dark:text-slate-400"}
      hover:scale-105 hover:border-primary/50 cursor-default`}>
      {imagePath ? (
        <img src={imagePath} alt={name} className="w-5 h-5 object-contain" />
      ) : (
        <div className="w-5 h-5 flex items-center justify-center text-[10px] font-bold opacity-60">
          {name.substring(0, 2).toUpperCase()}
        </div>
      )}
      <span className="text-sm font-medium">{name}</span>
    </div>
  );
}
