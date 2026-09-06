import {
  ExperienceItem,
  OpenSourceContribution,
  Project,
  StackGroup,
  StackItem,
} from "../types";

export const BIO =
  "A developer who likes to build. I work mainly with Next.js, TypeScript, and Node.js, but I’m always curious to explore new tools and techniques.";

export const HERO = {
  name: "Abhishek Sonje",
  tagline: "Full-Stack Developer & Builder",
  avatarSrc: "/avatar1.png",
  bannerSrc: "/banner1.webp",
};

export const RESUME_URL =
  "https://drive.google.com/file/d/1givCRD9PDB1sjnno85lKSPRYDkx2lCk3/view?usp=drive_link";

export const PROFILE = {
  email: "work.abhishek036@gmail.com",
  github: "https://github.com/Abhishek-Sonje",
  source: "https://github.com/Abhishek-Sonje/Portfolio-V2",
  introduction:
    "I build web products, developer tools, and the systems behind them.",
  contactHeading: "Have something in mind?",
  contactDescription:
    "For a role, a collaboration, or a conversation about something you're building — my inbox is open.",
};

export const SOCIAL_LINKS = [
  { label: "GitHub", href: PROFILE.github, icon: "github" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abhishek-sonje-83a333209",
    icon: "linkedin",
  },
  { label: "X", href: "https://x.com/Abhi_SDev", icon: "x" },
] as const;

export const NAVIGATION = [
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
] as const;

export const FOOTER_QUOTE = {
  text: "Nothing great was ever achieved without enthusiasm.",
  author: "Ralph Waldo Emerson",
  work: "Circles",
  source: "https://www.gutenberg.org/files/16643/16643-h/16643-h.htm",
};

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
    stack: [
      "Next.js",
      "React",
      "Sanity CMS",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
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
    stack: [
      "Fastify",
      "ClickHouse",
      "Redis",
      "PostgreSQL",
      "Drizzle ORM",
      "Docker",
    ],
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
    items: [
      "PostgreSQL",
      "Drizzle ORM",
      "ClickHouse",
      "Redis",
      "MongoDB",
      "Sanity CMS",
    ],
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

export const OPEN_SOURCE: OpenSourceContribution[] = [
  {
    org: "Sugar Labs",
    project: "Music Blocks",
    repo: "sugarlabs/musicblocks",
    repoUrl: "https://github.com/sugarlabs/musicblocks",
    role: "Open Source Contributor",
    author: "Abhishek-Sonje",
    mergedPRs: "5 Merged PRs",
    prUrl:
      "https://github.com/sugarlabs/musicblocks/pulls?q=is%3Apr+author%3AAbhishek-Sonje+is%3Amerged",
    stack: ["JavaScript", "HTML5 Canvas", "Web Audio API"],
    logo: "/logos/sugarLabs.svg",
  },
];
