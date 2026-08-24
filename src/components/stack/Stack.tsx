import { STACK_GROUPS } from "@/lib/data";
import type { TechIconKey } from "@/types";
import type { IconType } from "react-icons";
import { FaJava } from "react-icons/fa6";
import {
  SiAnthropic,
  SiBun,
  SiC,
  SiClickhouse,
  SiDocker,
  SiDrizzle,
  SiExpress,
  SiFastify,
  SiFramer,
  SiGithub,
  SiGo,
  SiGooglegemini,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiRedis,
  SiSanity,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

type IconDefinition = {
  Icon: IconType;
  color: string;
};

const TECH_ICONS: Record<TechIconKey, IconDefinition> = {
  react: { Icon: SiReact, color: "#149ECA" },
  nextjs: { Icon: SiNextdotjs, color: "#111111" },
  typescript: { Icon: SiTypescript, color: "#3178C6" },
  tailwind: { Icon: SiTailwindcss, color: "#06B6D4" },
  framer: { Icon: SiFramer, color: "#6952E8" },
  nodejs: { Icon: SiNodedotjs, color: "#339933" },
  bun: { Icon: SiBun, color: "#8B6F54" },
  express: { Icon: SiExpress, color: "#363737" },
  fastify: { Icon: SiFastify, color: "#363737" },
  postgresql: { Icon: SiPostgresql, color: "#4169E1" },
  drizzle: { Icon: SiDrizzle, color: "#89A938" },
  clickhouse: { Icon: SiClickhouse, color: "#D3A900" },
  redis: { Icon: SiRedis, color: "#DC382D" },
  mongodb: { Icon: SiMongodb, color: "#47A248" },
  sanity: { Icon: SiSanity, color: "#F03E2F" },
  gemini: { Icon: SiGooglegemini, color: "#6B72D6" },
  anthropic: { Icon: SiAnthropic, color: "#8B5E3C" },
  vercel: { Icon: SiVercel, color: "#111111" },
  docker: { Icon: SiDocker, color: "#2496ED" },
  github: { Icon: SiGithub, color: "#181717" },
  postman: { Icon: SiPostman, color: "#FF6C37" },
  go: { Icon: SiGo, color: "#00ADD8" },
  python: { Icon: SiPython, color: "#3776AB" },
  java: { Icon: FaJava, color: "#D34F35" },
  c: { Icon: SiC, color: "#5C6BC0" },
};

export default function Stack() {
  return (
    <section
      id="stack"
      className="flex w-full flex-col bg-background relative scroll-mt-[calc(var(--nav-height)+var(--space-5))]"
    >
      <div className="section-title-container">
        <h2 className="type-section-heading">Tech Stack</h2>
      </div>

      <div className="stack-groups">
        {STACK_GROUPS.map((group) => (
          <div key={group.label} className="stack-group">
            <h3 className="stack-group-label">{group.label}</h3>
            <ul className="stack-logo-list" aria-label={`${group.label} technologies`}>
              {group.items.map((technology) => {
                const definition = technology.iconKey
                  ? TECH_ICONS[technology.iconKey]
                  : null;
                const tooltipId = `stack-${group.label}-${technology.name}`
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, "-");

                return (
                  <li key={technology.name} className="stack-logo-item">
                    <a
                      href={technology.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="stack-logo-tile"
                      aria-label={technology.name}
                      aria-describedby={tooltipId}
                    >
                      {definition ? (
                        <definition.Icon
                          aria-hidden="true"
                          className="stack-logo-icon"
                          style={{ color: definition.color }}
                        />
                      ) : (
                        <span className="stack-logo-placeholder" aria-hidden="true" />
                      )}
                    </a>
                    <span id={tooltipId} role="tooltip" className="stack-logo-tooltip">
                      {technology.name}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
