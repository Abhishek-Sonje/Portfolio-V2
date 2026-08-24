"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { EXPERIENCE } from "@/lib/data";
import { FaBuilding } from "react-icons/fa6";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { ExperienceItem } from "@/types";
import Image from "next/image";

function ExperienceCard({ exp, idx }: { exp: ExperienceItem; idx: number }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasMore = exp.points.length > 3;

  return (
    <div className="flex flex-col gap-4">
      {idx > 0 && <hr className="border-t border-border-subtle pt-2" />}

      <div className="flex items-start gap-4">
        {/* Logo Frame */}
        <div className="w-12 h-12 rounded-lg border border-border-subtle bg-white flex-shrink-0 flex items-center justify-center overflow-hidden p-1 shadow-sm">
          {exp.logo ? (
            <Image
              src={exp.logo}
              alt={`${exp.company} logo`}
              width={48}
              height={48}
              className="w-full h-full object-contain"
            />
          ) : (
            <FaBuilding className="w-5 h-5 text-foreground-secondary" />
          )}
        </div>

        {/* Role & Company Details */}
        <div className="flex-grow flex flex-col gap-1.5 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
            <h3 className="type-bold-body text-foreground-heading truncate">
              {exp.role}
            </h3>
            <span className="type-meta-byline text-foreground-secondary shrink-0">
              {exp.company} &middot; {exp.period}
            </span>
          </div>

          <div className="relative mt-2">
            <ul className="list-disc pl-5 flex flex-col gap-2">
              {(hasMore ? exp.points.slice(0, 3) : exp.points).map((point, pointIdx) => (
                <li
                  key={pointIdx}
                  className="font-serif text-[16px] leading-[26px] text-foreground"
                >
                  {point}
                </li>
              ))}
            </ul>
            {/* Smooth blur fade-out overlay */}
            {hasMore && (
              <div
                className={`absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[var(--background)] to-transparent pointer-events-none transition-opacity duration-300 ${
                  isExpanded ? "opacity-0" : "opacity-100"
                }`}
              />
            )}
          </div>

          {hasMore && (
            <motion.div
              initial={false}
              animate={{
                height: isExpanded ? "auto" : 0,
                opacity: isExpanded ? 1 : 0,
              }}
              transition={{ duration: 0.22, ease: [0.77, 0, 0.175, 1] }}
              className="overflow-hidden"
            >
              <ul className="list-disc pl-5 flex flex-col gap-2 mt-2 pb-1">
                {exp.points.slice(3).map((point, pointIdx) => (
                  <li
                    key={pointIdx + 3}
                    className="font-serif text-[16px] leading-[26px] text-foreground"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {hasMore && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="pressable mt-3 inline-flex items-center gap-1.5 text-accent hover:text-accent/80 font-ui font-semibold text-[14px] leading-none transition-colors duration-150 cursor-pointer self-start"
              aria-expanded={isExpanded}
            >
              <span>{isExpanded ? "Show less" : "Show more"}</span>
              {isExpanded ? (
                <FiChevronUp className="w-4 h-4" />
              ) : (
                <FiChevronDown className="w-4 h-4" />
              )}
            </button>
          )}

          <div className="flex flex-wrap gap-1.5 pt-2">
            {exp.stack.map((tech) => (
              <span key={tech} className="tech-pill">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section
      id="work"
      className="flex flex-col w-full bg-background relative scroll-mt-[calc(var(--nav-height)+var(--space-5))]"
    >
      <div className="section-title-container">
        <h2 className="type-section-heading">Work Experience</h2>
      </div>

      <div className="flex flex-col gap-7">
        {EXPERIENCE.map((exp, idx) => (
          <ExperienceCard key={idx} exp={exp} idx={idx} />
        ))}
      </div>
    </section>
  );
}
