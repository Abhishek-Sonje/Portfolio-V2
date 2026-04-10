"use client";

import { useState } from "react";
import { PROJECTS } from "@/lib/data";
import { ChevronDown, Globe, Layers, ArrowUpRight, Cpu } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section
      id="projects"
      className="flex flex-col w-full bg-background relative border-y border-border-subtle scroll-mt-20"
    >
      {/* Header Section */}
      <div className="flex border-b border-border-subtle ">
        <div className="w-full pl-4 py-2 flex ">
          <h2 className="text-3xl font-semibold text-foreground tracking-tight leading-tight">
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
              className={`group flex flex-col w-full border-b border-border-subtle last:border-b-0 transition-colors duration-500 ${
                isExpanded ? "bg-surface-raised/5" : "hover:bg-surface/30"
              }`}
            >
              {/* Row Trigger */}
              <div
                className="flex items-center justify-between px-4 md:px-6 py-6 md:py-8 cursor-pointer gap-4"
                onClick={() => setExpandedIndex(isExpanded ? null : idx)}
              >
                <div className="flex items-center gap-4 md:gap-6">
                  {/* Index - Smaller and always visible */}
                  <span className="font-mono text-[9px] md:text-[10px] text-foreground-tertiary/50">
                    {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                  </span>

                  <div className="flex items-center gap-4">
                    <div className="relative flex shrink-0 items-center justify-center size-9 md:size-10 overflow-hidden">
                      {project.logo ? (
                        <Image
                          width={40}
                          height={40}
                          src={project.logo}
                          alt={project.title}
                          className={`size-full object-contain transition-all duration-500 ${isExpanded ? "grayscale-0" : "grayscale opacity-50"}`}
                        />
                      ) : (
                        <div className="flex size-9 md:size-10 items-center justify-center bg-surface-overlay border border-border-subtle">
                          <Cpu
                            size={14}
                            strokeWidth={1.5}
                            className="text-foreground-tertiary"
                          />
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col">
                      <h3 className="text-base md:text-lg font-bold text-foreground leading-none tracking-tight">
                        {project.title}
                      </h3>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-foreground-tertiary mt-1">
                        {project.category || "Full Stack"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Chevron - Simplified for mobile */}
                <div
                  className={`transition-transform duration-500 ${isExpanded ? "rotate-180 text-foreground" : "text-foreground-tertiary"}`}
                >
                  <ChevronDown size={16} strokeWidth={1.5} />
                </div>
              </div>

              {/* Expanded Content */}
              <div
                className={`transition-all duration-700 ease-[cubic-bezier(0.2,0,0,1)] overflow-hidden ${
                  isExpanded
                    ? "max-h-[1500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-4 md:pl-[104px] md:pr-12 pb-10">
                  <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-12 border-t border-border-subtle/50 pt-8">
                    {/* Visual Media - Placed first on mobile for engagement */}
                    <div className="order-1 lg:order-2">
                      <div className="relative aspect-[16/10] md:aspect-[16/9] w-full bg-surface-overlay border border-border-subtle group/image overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover opacity-90 lg:opacity-80 lg:group-hover/image:opacity-100 lg:group-hover/image:scale-[1.02] transition-all duration-700 ease-out"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    </div>

                    {/* Details - Second on mobile */}
                    <div className="order-2 lg:order-1 flex flex-col justify-between space-y-6">
                      <div className="space-y-4">
                        <p className="text-sm md:text-base text-foreground-secondary leading-relaxed font-normal">
                          {project.description}
                        </p>

                        {/* Tags - Scrollable on very small screens if they overflow */}
                        <div className="flex flex-wrap gap-1.5">
                          {project.stack.map((tech) => (
                            <span
                              key={tech}
                              className="text-[8px] md:text-[9px] font-mono px-2 py-0.5 border border-border-subtle text-foreground-tertiary uppercase"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Links - Larger touch targets for mobile */}
                      <div className="flex items-center gap-6 pt-2">
                        {project.github && (
                          <Link
                            href={project.github}
                            target="_blank"
                            className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-foreground py-2"
                          >
                            <FiGithub size={14} />
                            <span className="border-b border-border-subtle">
                              Source
                            </span>
                          </Link>
                        )}
                        {project.live && (
                          <Link
                            href={project.live}
                            target="_blank"
                            className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-foreground py-2"
                          >
                            <Globe size={14} />
                            <span className="border-b border-border-subtle">
                              Live
                            </span>
                          </Link>
                        )}
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
