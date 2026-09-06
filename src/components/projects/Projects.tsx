import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { PROJECTS, PROFILE } from "@/lib/data";
import Section from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import type { Project } from "@/types";

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex min-w-0 flex-col overflow-hidden rounded-xl border bg-card">
      <a
        href={project.live ?? project.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Explore ${project.title}`}
        className="relative block aspect-video overflow-hidden border-b bg-muted"
      >
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          sizes="(min-width: 768px) 340px, (min-width: 640px) 45vw, 90vw"
          className="object-cover transition-transform duration-300 motion-safe:group-hover:scale-105"
        />
      </a>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-semibold tracking-tight">{project.title}</h3>
          <span className="text-xs leading-6 text-muted-foreground">
            {project.category}
          </span>
        </div>
        <p className="mt-1 text-sm text-muted-foreground">{project.subtitle}</p>
        <p className="mt-4 text-sm leading-6 text-muted-foreground">
          {project.description}
        </p>
        <ul
          aria-label={`${project.title} technologies`}
          className="mb-5 mt-4 flex flex-wrap gap-1.5"
        >
          {project.stack.map((item) => (
            <li
              key={item}
              className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground"
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-auto border-t pt-4">
          <p className="mb-3 text-xs leading-5 text-link">
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
