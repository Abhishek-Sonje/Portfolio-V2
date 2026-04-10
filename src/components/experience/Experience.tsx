"use client";

import { useState } from "react";
import { EXPERIENCE } from "@/lib/data";
import { ChevronDown, Terminal, Cpu } from "lucide-react";
import Image from "next/image";

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section
      id="work"
      className="flex flex-col w-full bg-background relative border-y border-border-subtle scroll-mt-20"
    >
      {/* Header Section */}
      <div className="flex border-b border-border-subtle ">
        <div className="w-full pl-4 py-2 flex ">
          <h2 className="text-3xl font-semibold text-foreground tracking-tight leading-tight">
            Experience
          </h2>
        </div>
      </div>

      <div className="flex flex-col w-full">
        {EXPERIENCE.map((exp, idx) => {
          const isExpanded = expandedIndex === idx;
          const isActive = exp.active;

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
                  {/* Clean Logo/Icon Area - No Borders */}
                  <div className="flex shrink-0 items-center justify-center size-10">
                    {exp.logo ? (
                      <Image
                        width={40}
                        height={40}
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        className="size-full object-contain filter grayscale group-hover:grayscale-0 transition-all"
                      />
                    ) : (
                      <div className="flex size-10 items-center justify-center bg-surface-overlay text-foreground-tertiary border border-border-subtle">
                        <Terminal size={18} strokeWidth={1.5} />
                      </div>
                    )}
                  </div>

                  {/* Identity Block */}
                  <div className="flex flex-col">
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg font-bold text-foreground leading-none">
                        {exp.company}
                      </h3>
                      {isActive && (
                        <span className="flex items-center gap-1.5">
                          <span className="size-1.5 bg-accent animate-pulse" />
                          <span className="text-[10px] font-mono uppercase tracking-widest text-accent">
                            Present
                          </span>
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1.5">
                      <span className="text-sm text-foreground-secondary font-medium">
                        {exp.role}
                      </span>
                      <span className="hidden md:block size-1 bg-border-strong" />
                      <span className="text-[11px] font-mono text-foreground-tertiary uppercase tracking-tight">
                        {exp.period}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Status & Toggle Area */}
                <div className="flex items-center justify-between md:justify-end gap-6 pl-0 md:pl-0 mt-4 md:mt-0 w-full md:w-auto">
                  <div className="flex flex-wrap gap-2">
                    {!isExpanded &&
                      exp.stack.slice(0, 3).map((tech) => (
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
                    {/* Points Section */}
                    <div className="grid grid-cols-1 gap-4">
                      {exp.points.map((point, i) => (
                        <div key={i} className="group/item flex gap-4">
                          <span className="text-foreground-tertiary font-mono text-[10px] mt-1 shrink-0 opacity-50 group-hover/item:opacity-100 transition-opacity">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <p className="text-sm text-foreground-secondary leading-relaxed max-w-3xl">
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Detailed Tech Stack */}
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-2">
                        <Cpu size={12} className="text-foreground-tertiary" />
                        <span className="text-[10px] font-mono uppercase tracking-widest text-foreground-tertiary">
                          Stack Architecture
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {exp.stack.map((tech) => (
                          <span
                            key={tech}
                            className="font-mono text-[11px] px-2.5 py-1 bg-surface-overlay border border-border text-foreground-secondary hover:border-accent hover:text-foreground transition-all cursor-default"
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
