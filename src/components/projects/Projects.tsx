import { ArrowUpRight, ChevronDown } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { PROJECTS, PROFILE } from "@/lib/data";
import Section from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import type { Project } from "@/types";
import { TechnologyList } from "@/components/stack/technology-list";
import { ProjectMedia } from "@/components/projects/project-media";

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group/card flex min-w-0 flex-col overflow-hidden rounded-xl border bg-card">
      <ProjectMedia project={project} />
      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-semibold tracking-tight">{project.title}</h3>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          {project.summary}
        </p>
        <details className="group/details mt-1">
          <summary className="flex w-fit cursor-pointer list-none items-center gap-1 rounded-sm py-2 text-xs text-muted-foreground hover:text-foreground [&::-webkit-details-marker]:hidden">
            Details
            <ChevronDown className="size-3 transition-transform group-open/details:rotate-180" />
          </summary>
          <p className="pb-3 text-sm leading-6 text-muted-foreground">
            {project.description}
          </p>
        </details>
        <div className="mb-3 mt-2">
          <TechnologyList
            items={project.stack}
            label={`${project.title} technologies`}
            compact
          />
        </div>
        <div className="mt-auto border-t pt-3">
          <p className="mb-2 text-xs leading-5 text-link">
            {project.highlight}
          </p>
          <div className="flex gap-2">
            <Button asChild variant="outline" size="sm">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} source code`}
              >
                <FaGithub />
                Source
              </a>
            </Button>
            {project.live && (
              <Button asChild variant="ghost" size="sm">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${project.title}`}
                >
                  Visit
                  <ArrowUpRight />
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <Section
      id="projects"
      title="Selected projects"
      description="Tools and products I've built, from interface to infrastructure."
      action={
        <a
          href={`${PROFILE.github}?tab=repositories`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 py-1 text-xs text-muted-foreground hover:text-foreground"
        >
          All repositories
          <ArrowUpRight className="size-3.5" />
        </a>
      }
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  );
}
