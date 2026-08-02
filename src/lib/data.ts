import {
  ExperienceItem,
  Project,
  StackGroup,
  StackItem,
} from "../types";

export const BIO =
  "Full-stack developer working mainly in Next.js, TypeScript, and Node.js. I like taking things from a rough idea to something people can actually use — AI tooling, e-commerce flows, backend observability, whatever the problem calls for.";

export const HERO = {
  name: "Abhishek Sonje",
  tagline: "Full-Stack Developer & Builder",
  avatarSrc: "/avatar.png",
  bannerSrc: "/banner1.webp",
};

export const RESUME_URL = "/resume.pdf";

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "DODOX Studio",
    role: "Full-Stack Developer Intern",
    period: "Feb 2026 – Apr 2026",
    type: "Remote",
    points: [
      "Built pixel-perfect Figma-to-code for Studio Mirae, an interior design client — horizontal scroll sections, scroll-jacked transitions, a stepper UI, and a watermark SVG component",
      "Set up custom Tailwind breakpoints (ipad-pro, desktop) and Framer Motion animations across the site",
      "Implemented auth flows with role-based protected routing",
      "Handled Sanity CMS schema changes and wrote the PR docs for handoff",
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
      "A CLI that keeps a codebase's ARCHITECTURE.md in sync automatically — a two-prompt Gemini 1.5 Pro strategy paired with a static import dependency graph so it only touches what actually changed. Published to npm, past 250 downloads.",
    stack: ["TypeScript", "Node.js", "Gemini 1.5 Pro", "npm"],
    github: "https://github.com/Abhishek-Sonje/archie",
    live: "https://archie.abhishekdev.tech",
    highlight: "250+ npm downloads · Flagship project",
    image: "/projects/Archie.webp",
    category: "Developer Tool",
  },
  {
    title: "ObserveKit",
    subtitle: "Backend Observability Platform",
    description:
      "Self-hosted observability for backend services, built on Fastify with ClickHouse handling the event pipeline, Redis for the hot path, and Postgres via Drizzle for everything else. Containerized with Docker Compose.",
    stack: ["Fastify", "ClickHouse", "Redis", "PostgreSQL", "Drizzle ORM", "Docker"],
    github: "https://github.com/Abhishek-Sonje/observe-kit",
    highlight: "Full observability stack, self-hosted",
    live: null,
    image: "/projects/ObserveKit.webp",
    category: "Infrastructure",
  },
  {
    title: "Octo",
    subtitle: "Browser-Based Terminal Sharing",
    description:
      "A Go tool for sharing a live terminal session through the browser — PTY under the hood, WebSocket for the connection, a tunnel relay so it works outside your local network. Started life as a project called Shelve before the rename.",
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

export const STACK_ITEMS: StackItem[] = [
  {
    name: "TypeScript",
    icon: "https://skillicons.dev/icons?i=ts",
    url: "https://www.typescriptlang.org/",
  },
  {
    name: "JavaScript",
    icon: "https://skillicons.dev/icons?i=js",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "Python",
    icon: "https://skillicons.dev/icons?i=python",
    url: "https://www.python.org/",
  },
  {
    name: "Java",
    icon: "https://skillicons.dev/icons?i=java",
    url: "https://www.java.com/",
  },
  {
    name: "Go",
    icon: "https://skillicons.dev/icons?i=go",
    url: "https://go.dev/",
  },
  {
    name: "Node.js",
    icon: "https://skillicons.dev/icons?i=nodejs",
    url: "https://nodejs.org/",
  },
  {
    name: "Bun",
    icon: "https://skillicons.dev/icons?i=bun",
    url: "https://bun.sh/",
  },
  {
    name: "React.js",
    icon: "https://skillicons.dev/icons?i=react",
    url: "https://react.dev/",
  },
  {
    name: "Next.js",
    icon: "https://skillicons.dev/icons?i=nextjs",
    url: "https://nextjs.org/",
  },
  {
    name: "Tailwind CSS",
    icon: "https://skillicons.dev/icons?i=tailwind",
    url: "https://tailwindcss.com/",
  },
  {
    name: "Express.js",
    icon: "https://skillicons.dev/icons?i=express",
    url: "https://expressjs.com/",
  },
  {
    name: "PostgreSQL",
    icon: "https://skillicons.dev/icons?i=postgres",
    url: "https://www.postgresql.org/",
  },
  {
    name: "Redis",
    icon: "https://skillicons.dev/icons?i=redis",
    url: "https://redis.io/",
  },
  {
    name: "MongoDB",
    icon: "https://skillicons.dev/icons?i=mongodb",
    url: "https://www.mongodb.com/",
  },
  {
    name: "Git",
    icon: "https://skillicons.dev/icons?i=git",
    url: "https://git-scm.com/",
  },
  {
    name: "Docker",
    icon: "https://skillicons.dev/icons?i=docker",
    url: "https://www.docker.com/",
  },
  {
    name: "Postman",
    icon: "https://skillicons.dev/icons?i=postman",
    url: "https://www.postman.com/",
  },
  {
    name: "Vercel",
    icon: "https://skillicons.dev/icons?i=vercel",
    url: "https://vercel.com/",
  },
];

export const STACK_GROUPS: StackGroup[] = [
  {
    label: "Frontend",
    items: [
      "React.js",
      "Next.js 15+",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Zustand",
    ],
  },
  {
    label: "Backend",
    items: ["Node.js", "Bun", "Express.js", "Fastify", "RESTful APIs"],
  },
  {
    label: "Databases & CMS",
    items: ["PostgreSQL", "Drizzle ORM", "ClickHouse", "Redis", "MongoDB", "Sanity CMS"],
  },
  {
    label: "AI & Cloud",
    items: [
      "Google Gemini API",
      "Anthropic Claude API",
      "Vercel AI SDK",
      "Vercel",
      "Docker",
    ],
  },
  {
    label: "Tools",
    items: ["Git / GitHub", "Postman", "Go", "Python", "Java", "C"],
  },
];