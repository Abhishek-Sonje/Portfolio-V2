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
  SiGit,
  SiGo,
  SiGooglegemini,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiNpm,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiRedis,
  SiSanity,
  SiTailwindcss,
  SiTldraw,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { STACK_ITEMS } from "@/lib/data";

type Technology = {
  icon?: IconType;
  logoSrc?: string;
  invertOnDark?: boolean;
};

function stackLogo(name: string) {
  return STACK_ITEMS.find((item) => item.name === name)?.icon;
}

/** Local logoSrc overrides the bundled icon. Paths are relative to public/. */
export const TECHNOLOGIES: Record<string, Technology> = {
  React: { icon: SiReact },
  "React.js": { icon: SiReact },
  "Next.js": { icon: SiNextdotjs },
  "Next.js 15+": { icon: SiNextdotjs },
  TypeScript: { icon: SiTypescript },
  "Tailwind CSS": { icon: SiTailwindcss },
  "Node.js": { icon: SiNodedotjs },
  Bun: { icon: SiBun },
  "Express.js": { icon: SiExpress },
  Fastify: { icon: SiFastify },
  PostgreSQL: { icon: SiPostgresql },
  "Drizzle ORM": { icon: SiDrizzle },
  ClickHouse: { icon: SiClickhouse },
  Redis: { icon: SiRedis },
  MongoDB: { icon: SiMongodb },
  "Sanity CMS": { icon: SiSanity },
  "Google Gemini API": { icon: SiGooglegemini },
  "Google Gemini AI": { icon: SiGooglegemini },
  "Gemini 1.5 Pro": { icon: SiGooglegemini },
  "Anthropic Claude API": { icon: SiAnthropic },
  Vercel: { icon: SiVercel },
  Docker: { icon: SiDocker },
  "Git / GitHub": { icon: SiGit },
  Postman: { icon: SiPostman },
  Go: { icon: SiGo },
  Python: { icon: SiPython },
  Java: { icon: FaJava },
  C: { icon: SiC },
  npm: { icon: SiNpm },
  tldraw: { icon: SiTldraw },
  Zustand: { logoSrc: stackLogo("Zustand") },
  "Framer Motion": {
    logoSrc: "/technologies/framer.svg",
    invertOnDark: true,
  },
  WebSocket: {
    logoSrc: "/technologies/websocket.svg",
    invertOnDark: true,
  },
  PTY: {
    logoSrc: "/technologies/terminal.svg",
    invertOnDark: true,
  },
  // Concepts without a distinct product mark retain an accessible text label.
  "Vercel AI SDK": {},
  "RESTful APIs": {},
};
