"use client";

import { useState } from "react";
import { PROJECTS } from "@/lib/data";
import { ChevronDown, Globe, Layers, ArrowUpRight, Cpu } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  // First project expanded by default to match Experience section
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section
      id="projects"
      className="flex flex-col w-full bg-background relative border-y border-border-subtle scroll-mt-20"
    >
      {/* Header Section - Matches Experience exactly */}
      <div className="flex border-b border-border-subtle ">
        <div className="w-full pl-4 py-2 flex items-center">
          <h2 className="text-3xl font-medium text-foreground tracking-tighter leading-tight">
            Projects
          </h2>
        </div>
      </div>

      <div className="flex flex-col w-full">
        {PROJECTS.map((project, idx) => {
          const isExpanded = expandedIndex === idx;

          return (
            <div
              key={idx}
              className={`group flex flex-col w-full border-b border-border-subtle last:border-b-0 transition-colors duration-300 ${
                isExpanded ? "bg-surface-raised/10" : "hover:bg-surface/30"
              }`}
            >
              {/* Row Trigger */}
              <div
                className="flex flex-col md:flex-row md:items-center justify-between p-6 cursor-pointer gap-4"
                onClick={() => setExpandedIndex(isExpanded ? null : idx)}
              >
                <div className="flex items-start md:items-center gap-5">
                  {/* Clean Icon/Logo Area */}
                  <div className="flex shrink-0 items-center justify-center size-10">
                    {project.logo ? (
                      <Image
                        width={40}
                        height={40}
                        src={project.logo}
                        alt={`${project.title} logo`}
                        className="size-full object-contain filter grayscale group-hover:grayscale-0 transition-all"
                      />
                    ) : (
                      <div className="flex size-10 items-center justify-center bg-surface-overlay text-foreground-tertiary border border-border-subtle">
                        <Cpu size={18} strokeWidth={1.5} />
                      </div>
                    )}
                  </div>

                  {/* Project Identity */}
                  <div className="flex flex-col">
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg font-bold text-foreground leading-none">
                        {project.title}
                      </h3>
                      <ArrowUpRight
                        size={14}
                        className="text-foreground-tertiary opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1.5">
                      <span className="text-sm text-foreground-secondary font-medium">
                        {project.category || "Full Stack Application"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Stack Preview & Toggle */}
                <div className="flex items-center justify-between md:justify-end gap-6 pl-0 md:pl-0 w-full md:w-auto mt-4 md:mt-0">
                  <div className="flex flex-wrap gap-2">
                    {!isExpanded &&
                      project.stack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-mono text-foreground-tertiary border border-border-subtle px-1.5 py-0.5 uppercase"
                        >
                          {tech}
                        </span>
                      ))}
                  </div>
                  <ChevronDown
                    size={18}
                    className={`text-foreground-tertiary transition-transform duration-500 ${isExpanded ? "rotate-180" : ""}`}
                  />
                </div>
              </div>

              {/* Expanded Content Section */}
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  isExpanded
                    ? "max-h-[2000px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 md:pl-[84px] pb-10">
                  <div className="flex flex-col gap-8 border-t border-border-subtle pt-8">
                    {/* Project Details Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                      <div className="flex flex-col gap-6">
                        <p className="text-sm text-foreground-secondary leading-relaxed max-w-xl">
                          {project.description}
                        </p>

                        {/* Action Links */}
                        <div className="flex items-center gap-6">
                          {project.github && (
                            <Link
                              href={project.github}
                              target="_blank"
                              className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-foreground hover:text-accent transition-colors"
                            >
                              <FiGithub size={14} /> Source
                            </Link>
                          )}
                          {project.live && (
                            <Link
                              href={project.live}
                              target="_blank"
                              className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-foreground hover:text-accent transition-colors"
                            >
                              <Globe size={14} /> Live Demo
                            </Link>
                          )}
                        </div>
                      </div>

                      {/* Professional Image Preview */}
                      <div className="relative aspect-video w-full bg-surface-overlay border border-border-subtle overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover opacity-70 hover:opacity-100 transition-opacity duration-500"
                        />
                      </div>
                    </div>

                    {/* Detailed Stack Badges */}
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-2">
                        <Layers
                          size={12}
                          className="text-foreground-tertiary"
                        />
                        <span className="text-[10px] font-mono uppercase tracking-widest text-foreground-tertiary">
                          Technologies Utilized
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="font-mono text-[11px] px-2.5 py-1 border border-border text-foreground-secondary hover:border-accent hover:text-foreground transition-all cursor-default"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
