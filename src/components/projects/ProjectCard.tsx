import { ArrowUpRight } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import { Project } from "@/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group bg-background hover:bg-surface-raised h-full p-5 flex flex-col transition-all duration-200">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-base font-semibold text-foreground mb-1">
            {project.title}
          </h3>
          <p className="text-sm text-foreground-tertiary">{project.subtitle}</p>
        </div>
        <div className="flex items-center gap-2 text-foreground-tertiary opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
              <FiGithub className="w-5 h-5" />
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
              <ArrowUpRight className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>

      <p className="text-sm text-foreground-secondary mb-6 flex-grow leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-col gap-4 mt-auto">
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[11px] px-2 py-0.5 rounded-sm bg-surface border border-border-subtle text-foreground-tertiary"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="pt-4 border-t border-border-subtle/50">
          <span className="text-[11px] font-mono font-medium text-emerald-500 dark:text-emerald-400">
            {project.highlight}
          </span>
        </div>
      </div>
    </div>
  );
}
