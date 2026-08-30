"use client";

import { PROJECTS } from "@/lib/data";
import { Project } from "@/types";
import { useState, useEffect, useRef, type KeyboardEvent } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
      window.requestAnimationFrame(() => closeButtonRef.current?.focus());
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  const openProject = (
    project: Project,
    trigger: HTMLButtonElement,
  ) => {
    lastTriggerRef.current = trigger;
    setSelectedProject(project);
  };

  const closeProject = () => {
    setSelectedProject(null);
    window.requestAnimationFrame(() => lastTriggerRef.current?.focus());
  };

  const handleDialogKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      event.preventDefault();
      closeProject();
      return;
    }

    if (event.key !== "Tab") return;

    const focusable = Array.from(
      event.currentTarget.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      ),
    );
    const first = focusable[0];
    const last = focusable.at(-1);

    if (!first || !last) return;

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  return (
    <section
      id="projects"
      className="flex flex-col w-full bg-background relative scroll-mt-[calc(var(--nav-height)+var(--space-5))]"
    >
      <div className="section-title-container">
        <h2 className="type-section-heading">Projects</h2>
      </div>

      <div className="projects-list">
        {PROJECTS.map((project, idx) => (
          <article
            key={idx}
            className="project-card"
          >
            {project.image ? (
              <div className="relative aspect-[16/10] md:aspect-[16/9] w-full bg-surface-overlay overflow-hidden rounded-md border border-border-subtle">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 340px"
                />
              </div>
            ) : null}

            <div className="flex flex-col gap-1">
              {project.category && (
                <p className="type-caption-tag font-semibold uppercase tracking-[0.08em] text-accent">
                  {project.category}
                </p>
              )}
              <h3 className="type-bold-body text-foreground-heading">
                {project.title}
              </h3>
              {project.subtitle && (
                <p className="type-meta-byline text-foreground-secondary">
                  {project.subtitle}
                </p>
              )}
            </div>

            <p className="project-description-truncated mt-1">
              {project.description}
            </p>

            <p className="type-meta-byline font-semibold text-foreground">
              {project.highlight}
            </p>

            <div className="flex flex-wrap gap-1.5 mt-2">
              {project.stack.slice(0, 2).map((tech) => (
                <span key={tech} className="tech-pill">
                  {tech}
                </span>
              ))}
              {project.stack.length > 2 && (
                <span className="tech-pill opacity-70">
                  +{project.stack.length - 2}
                </span>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-2 mt-auto">
              <button
                type="button"
                aria-haspopup="dialog"
                onClick={(event) => openProject(project, event.currentTarget)}
                className="type-ui-label inline-flex min-h-11 items-center text-accent underline decoration-dotted underline-offset-4 hover:text-foreground cursor-pointer"
              >
                View details
              </button>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="type-ui-label text-foreground-secondary hover:text-accent hover:underline hover:underline-offset-4"
                >
                  GitHub
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="type-ui-label text-foreground-secondary hover:text-accent hover:underline hover:underline-offset-4"
                >
                  Live Site
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* Modal Dialog using Portal */}
      {typeof document !== "undefined" && createPortal(
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
              onClick={closeProject}
            >
              <motion.div
                role="dialog"
                aria-modal="true"
                aria-labelledby="project-dialog-title"
                onKeyDown={handleDialogKeyDown}
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ type: "spring", damping: 28, stiffness: 350 }}
                className="relative w-full max-w-2xl bg-surface-raised rounded-[24px] border border-border-strong shadow-2xl overflow-hidden max-h-[85vh] flex flex-col cursor-default"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  ref={closeButtonRef}
                  onClick={closeProject}
                  className="absolute top-3 right-3 z-10 w-11 h-11 rounded-full bg-surface-overlay border border-border-subtle flex items-center justify-center text-foreground hover:bg-border transition-colors cursor-pointer text-xl font-bold"
                  aria-label="Close dialog"
                >
                  &times;
                </button>

                <div className="overflow-y-auto p-6 md:p-8 flex flex-col gap-5">
                  {/* Visual Image */}
                  {selectedProject.image && (
                    <div className="relative aspect-[16/10] md:aspect-[16/9] w-full bg-surface-overlay overflow-hidden rounded-lg border border-border-subtle shrink-0">
                      <Image
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 600px"
                      />
                    </div>
                  )}

                  {/* Header Info */}
                  <div className="flex flex-col gap-1">
                    <h3 id="project-dialog-title" className="type-post-title text-foreground-heading leading-tight">
                      {selectedProject.title}
                    </h3>
                    {selectedProject.subtitle && (
                      <p className="type-subtitle-deck text-foreground-secondary">
                        {selectedProject.subtitle}
                      </p>
                    )}
                  </div>

                  {/* Full Description */}
                  <p className="type-article-body text-foreground">
                    {selectedProject.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.stack.map((tech) => (
                      <span key={tech} className="tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-6 pt-2 border-t border-border-subtle">
                    {selectedProject.github && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="type-ui-label text-foreground-secondary hover:text-accent hover:underline flex items-center gap-1"
                      >
                        GitHub Source
                      </a>
                    )}
                    {selectedProject.live && (
                      <a
                        href={selectedProject.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="type-ui-label text-foreground-secondary hover:text-accent hover:underline flex items-center gap-1"
                      >
                        Live Website
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}
