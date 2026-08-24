import {
  ExperienceItem,
  OpenSourceContribution,
  Project,
  StackGroup,
} from "../types";

export const BIO =
  "A developer who likes to build. I work mainly with Next.js, TypeScript, and Node.js, but I’m always curious to explore new tools and techniques.";

export const HERO = {
  name: "Abhishek Sonje",
  tagline: "Full-Stack Developer & Builder",
  avatarSrc: "/avatar.png",
  bannerSrc: "/banner1.webp",
};

export const RESUME_URL = "https://drive.google.com/file/d/1givCRD9PDB1sjnno85lKSPRYDkx2lCk3/view?usp=drive_link";

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "DODOX Studio",
    role: "Full-Stack Developer Intern",
    period: "Feb 2026 – Apr 2026",
    type: "Remote",
    points: [
      "Built pixel-perfect Figma-to-code for Studio Mirae, an interior design client",
      "Built horizontal scroll sections and scroll-jacked transitions",
      "Built a stepper UI and a watermark SVG component",
      "Set up custom Tailwind breakpoints for ipad-pro and desktop",
      "Added Framer Motion animations across the site",
      "Built auth flows with role-based protected routing",
      "Handled Sanity CMS schema changes",
    ],
    stack: ["Next.js", "React", "Sanity CMS", "TypeScript", "Tailwind CSS", "Framer Motion"],
    active: false,
    logo: "/logos/DodoxLogo.webp",
  },
  {
    company: "ACURON Technologies",
    role: "Full-Stack Engineering Intern",
    period: "Dec 2025 – Jan 2026",
    type: "Remote",
    points: [
      "Shipped features across 3+ client projects end-to-end",
      "Cut load times noticeably through lazy loading and code splitting",
      "Worked directly with clients to translate requirements into working product",
    ],
    stack: ["React.js", "Next.js", "Node.js", "Vercel"],
    active: false,
  },
];

export const PROJECTS: Project[] = [
  {
    title: "Archie CLI",
    subtitle: "AI-Powered Architecture Docs",
    description:
      "A CLI that keeps a codebase's ARCHITECTURE.md up to date on its own. Uses a two-prompt Gemini 1.5 Pro setup along with a static import dependency graph, so it only touches what actually changed. Published to npm, past 250 downloads.",
    stack: ["TypeScript", "Node.js", "Gemini 1.5 Pro", "npm"],
    github: "https://github.com/Abhishek-Sonje/archie",
    live: "https://archie.abhishekdev.tech",
    highlight: "250+ npm downloads · Flagship project",
    image: "/projects/archie.webp",
    category: "Developer Tool",
  },
  {
    title: "ObserveKit",
    subtitle: "Backend Observability Platform",
    description:
      "Self-hosted observability for backend services. Built on Fastify, with ClickHouse handling the event pipeline, Redis for the hot path, and Postgres (via Drizzle) for everything else. Runs in Docker Compose.",
    stack: ["Fastify", "ClickHouse", "Redis", "PostgreSQL", "Drizzle ORM", "Docker"],
    github: "https://github.com/Abhishek-Sonje/observe-kit",
    highlight: "Full observability stack, self-hosted",
    live: null,
    image: "/projects/observeKit.webp",
    category: "Infrastructure",
  },
  {
    title: "Octo",
    subtitle: "Browser-Based Terminal Sharing",
    description:
      "A Go tool that lets you share a live terminal session through the browser. Runs on PTY under the hood, WebSocket for the connection, and a tunnel relay so it still works outside your local network. Started out as a project called Shelve before I renamed it.",
    stack: ["Go", "WebSocket", "PTY"],
    github: "https://github.com/Abhishek-Sonje/octo",
    live: null,
    highlight: "Built from scratch in WSL2",
    image: "/projects/octoImg.webp",
    category: "CLI Tool",
  },
  {
    title: "ChalkAI",
    subtitle: "AI-Powered Whiteboard",
    description:
      "An interactive whiteboard where Gemini 2.5 Flash looks at what you draw and responds in real time.",
    stack: ["Next.js", "TypeScript", "Google Gemini AI", "tldraw"],
    github: "https://github.com/Abhishek-Sonje/ChalkAI",
    live: null,
    highlight: "Gemini 2.5 Flash · Real-time AI",
    image: "/projects/ChalkAi.webp",
    category: "AI-powered EdTech Tool",
    logo: "/projects/ChalkAiLogo.webp",
  },
];

export const STACK_GROUPS: StackGroup[] = [
  {
    label: "Frontend",
    items: [
      { name: "React", url: "https://react.dev/", iconKey: "react" },
      { name: "Next.js", url: "https://nextjs.org/", iconKey: "nextjs" },
      { name: "TypeScript", url: "https://www.typescriptlang.org/", iconKey: "typescript" },
      { name: "Tailwind CSS", url: "https://tailwindcss.com/", iconKey: "tailwind" },
      { name: "Motion", url: "https://motion.dev/", iconKey: "framer" },
      { name: "Zustand", url: "https://zustand.docs.pmnd.rs/" },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Node.js", url: "https://nodejs.org/", iconKey: "nodejs" },
      { name: "Bun", url: "https://bun.sh/", iconKey: "bun" },
      { name: "Express", url: "https://expressjs.com/", iconKey: "express" },
      { name: "Fastify", url: "https://fastify.dev/", iconKey: "fastify" },
      { name: "RESTful APIs", url: "https://developer.mozilla.org/en-US/docs/Glossary/REST" },
    ],
  },
  {
    label: "Databases & CMS",
    items: [
      { name: "PostgreSQL", url: "https://www.postgresql.org/", iconKey: "postgresql" },
      { name: "Drizzle ORM", url: "https://orm.drizzle.team/", iconKey: "drizzle" },
      { name: "ClickHouse", url: "https://clickhouse.com/", iconKey: "clickhouse" },
      { name: "Redis", url: "https://redis.io/", iconKey: "redis" },
      { name: "MongoDB", url: "https://www.mongodb.com/", iconKey: "mongodb" },
      { name: "Sanity", url: "https://www.sanity.io/", iconKey: "sanity" },
    ],
  },
  {
    label: "AI & Cloud",
    items: [
      { name: "Google Gemini", url: "https://ai.google.dev/", iconKey: "gemini" },
      { name: "Anthropic Claude", url: "https://www.anthropic.com/claude", iconKey: "anthropic" },
      { name: "Vercel AI SDK", url: "https://ai-sdk.dev/", iconKey: "vercel" },
      { name: "Vercel", url: "https://vercel.com/", iconKey: "vercel" },
      { name: "Docker", url: "https://www.docker.com/", iconKey: "docker" },
    ],
  },
  {
    label: "Tools",
    items: [
      { name: "GitHub", url: "https://github.com/", iconKey: "github" },
      { name: "Postman", url: "https://www.postman.com/", iconKey: "postman" },
      { name: "Go", url: "https://go.dev/", iconKey: "go" },
      { name: "Python", url: "https://www.python.org/", iconKey: "python" },
      { name: "Java", url: "https://www.java.com/", iconKey: "java" },
      { name: "C", url: "https://www.iso.org/standard/82075.html", iconKey: "c" },
    ],
  },
];

export const OPEN_SOURCE: OpenSourceContribution[] = [
  {
    org: "Sugar Labs",
    project: "Music Blocks",
    repo: "sugarlabs/musicblocks",
    repoUrl: "https://github.com/sugarlabs/musicblocks",
    role: "Open Source Contributor",
    author: "Abhishek-Sonje",
    mergedPRs: "5 Merged PRs",
    prUrl: "https://github.com/sugarlabs/musicblocks/pulls?q=is%3Apr+author%3AAbhishek-Sonje+is%3Amerged",
    stack: ["JavaScript", "HTML5 Canvas", "Web Audio API"],
    logo: "/logos/sugarLabs.svg",
  },
];
