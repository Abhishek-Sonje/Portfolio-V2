import React from "react";
import { FiMapPin, FiBriefcase, FiMail, FiPhone, FiLink } from "react-icons/fi";
import {
  QuickDetail,
  Social,
  ExperienceItem,
  Project,
  StackGroup,
  StackItem,
} from "../types";

export const QUICK_DETAILS: QuickDetail[] = [
  {
    icon: React.createElement(FiMapPin, { className: "w-4 h-4" }),
    label: "Location",
    value: "Nashik, Maharashtra, India",
    isCopyable: false,
  },
  {
    icon: React.createElement(FiBriefcase, { className: "w-4 h-4" }),
    label: "Status",
    value: "Available for internships",
    isCopyable: false,
  },
  {
    icon: React.createElement(FiLink, { className: "w-4 h-4" }),
    label: "Website",
    value: "abhishekdev.tech",
    href: "https://abhishekdev.tech",
    isCopyable: true,
  },
  {
    icon: React.createElement(FiMail, { className: "w-4 h-4" }),
    label: "Email",
    value: "work.abhishek036@gmail.com",
    href: "mailto:work.abhishek036@gmail.com",
    isCopyable: true,
  },
  {
    icon: React.createElement(FiPhone, { className: "w-4 h-4" }),
    label: "Phone",
    value: "+91 96656 43242",
    href: "tel:+919665643242",
    isCopyable: true,
  },
];

export const SOCIALS: Social[] = [
  {
    label: "X",
    href: "https://x.com/Abhi_SDev",
    icon: React.createElement("img", {
      src: "/logos/x.webp",
      alt: "X",
      className: "w-8 h-8 object-contain",
    }),
  },
  {
    label: "GitHub",
    href: "https://github.com/Abhishek-Sonje",
    icon: React.createElement("img", {
      src: "/logos/github.webp",
      alt: "GitHub",
      className: "w-8 h-8 object-contain",
    }),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abhishek-sonje-83a333209",
    icon: React.createElement("img", {
      src: "/logos/linkedin.webp",
      alt: "LinkedIn",
      className: "w-8 h-8 object-contain",
    }),
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "DODOX Studio",
    role: "Full-Stack Developer Intern",
    period: "Feb 2026 – Apr 2026",
    type: "Remote",
    points: [
      "Integrated Sanity CMS to power dynamic content across client-facing pages",
      "Built reusable Next.js/React components consumed across multiple product surfaces",
      "Implemented auth flows with role-based protected routing",
    ],
    stack: ["Next.js", "React", "Sanity CMS", "TypeScript"],
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
    title: "ChalkAI",
    subtitle: "AI-Powered Whiteboard",
    description:
      "An interactive whiteboard where Gemini 2.5 Flash understands what you draw and responds in real time — think smarter, faster, collaborative thinking.",
    stack: ["Next.js", "TypeScript", "Google Gemini AI", "tldraw"],
    github: "https://github.com/abhishek036/chalkai",
    live: null,
    highlight: "Gemini 2.5 Flash · Real-time AI",
    image: "/projects/ChalkAi.webp",
    category: "AI-powered EdTech Tool",
    logo: "/projects/ChalkAiLogo.webp",
  },
  {
    title: "Droply",
    subtitle: "Cloud File Management",
    description:
      "A production-ready cloud storage app for secure file uploads, sharing, and management — clean UX backed by a solid full-stack architecture.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle ORM"],
    github: "https://github.com/abhishek036/droply",
    live: "https://droply.abhishekdev.tech",
    highlight: "Production · Live",
    image: "/projects/Droply.webp",
    category: "Web Application",
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
    name: "Prisma",
    icon: "https://skillicons.dev/icons?i=prisma",
    url: "https://www.prisma.io/",
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
    name: "MongoDB",
    icon: "https://skillicons.dev/icons?i=mongodb",
    url: "https://www.mongodb.com/",
  },
  {
    name: "Redux",
    icon: "https://skillicons.dev/icons?i=redux",
    url: "https://redux.js.org/",
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
  {
    name: "Supabase",
    icon: "https://skillicons.dev/icons?i=supabase",
    url: "https://supabase.com/",
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
    ],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express.js", "Socket.IO", "RESTful APIs"],
  },
  {
    label: "Databases & CMS",
    items: ["MongoDB", "PostgreSQL", "Drizzle ORM", "Sanity CMS"],
  },
  {
    label: "AI & Cloud",
    items: [
      "Google Gemini API",
      "Vercel AI SDK",
      "Vercel",
      "Clerk Auth",
      "ImageKit CDN",
    ],
  },
  {
    label: "Tools",
    items: ["Git / GitHub", "Postman", "Python", "Java", "C"],
  },
];
