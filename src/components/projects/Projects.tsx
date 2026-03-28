import { PROJECTS } from "@/lib/data";
import { ProjectCard } from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="flex flex-col w-full bg-background relative border-y border-border-subtle scroll-mt-20">
      <div className="flex border-b border-border-subtle bg-surface-raised/30">
        <div className="w-full p-3 pl-4 flex items-center">
           <h2 className="text-[10px] font-semibold tracking-widest uppercase text-foreground-tertiary">Projects</h2>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row border-b border-border-subtle last:border-b-0">
        <div className="w-full sm:w-40 shrink-0 sm:border-r border-border-subtle p-4 pl-4 flex flex-col justify-start border-b sm:border-b-0">
           <span className="text-sm font-mono text-foreground-secondary">Featured</span>
           <span className="text-xs font-mono text-foreground-tertiary mt-1">Live Applications</span>
        </div>
        
        <div className="w-full p-0 flex flex-col md:flex-row">
          {PROJECTS.map((project, idx) => (
            <div key={idx} className="flex-1 border-b md:border-b-0 md:border-r border-border-subtle last:border-b-0 last:border-r-0">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
