import React from "react";
import { Linkedin, Twitter } from "@/components/icons";
import { FiGithub } from "react-icons/fi";
import { QuickDetail, Social, ExperienceItem, Project, StackGroup } from "../types";

export const QUICK_DETAILS: QuickDetail[] = [
  {
    icon: "📍",
    label: "Location",
    value: "Nashik, Maharashtra, India",
  },
  {
    icon: "🎓",
    label: "Education",
    value: "B.Tech CS + Design · Expected 2027",
  },
  {
    icon: "💼",
    label: "Status",
    value: "Open to internships",
  },
  {
    icon: "🌐",
    label: "Website",
    value: "abhishekdev.tech",
    href: "https://abhishekdev.tech",
  },
  {
    icon: "✉️",
    label: "Email",
    value: "work.abhishek036@gmail.com",
    href: "mailto:work.abhishek036@gmail.com",
  },
];

export const SOCIALS: Social[] = [
  {
    label: "GitHub",
    href: "https://github.com/abhishek036", // Placeholders for actual links if not provided
    icon: React.createElement(FiGithub, { className: "w-4 h-4" }),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/abhisheksonje",
    icon: React.createElement(Linkedin, { className: "w-4 h-4" }),
  },
  {
    label: "X (Twitter)",
    href: "https://twitter.com/abhishek036",
    icon: React.createElement(Twitter, { className: "w-4 h-4" }),
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "DODOX Studio",
    role: "Full-Stack Developer Intern",
    period: "Feb 2026–Present",
    type: "Remote",
    points: [
      "Sanity CMS integration",
      "Next.js/React component development",
      "Auth + protected routes",
    ],
    stack: ["Next.js", "React", "Sanity CMS", "TypeScript"],
  },
  {
    company: "ACURON Technologies",
    role: "Full-Stack Engineering Intern",
    period: "Dec 2025–Jan 2026",
    type: "Remote",
    points: [
      "3+ client projects",
      "Performance optimization (lazy load/code split)",
      "Client collaboration",
    ],
    stack: ["React.js", "Next.js", "Node.js", "Vercel"],
  },
];

export const PROJECTS: Project[] = [
  {
    title: "ChalkAI",
    subtitle: "AI-Powered Whiteboard",
    description: "An interactive whiteboard with AI-powered features for real-time collaboration.",
    stack: ["Next.js", "TypeScript", "Google Gemini AI", "tldraw"],
    github: "https://github.com/abhishek036/chalkai",
    live: null,
    highlight: "Gemini 2.5 Flash · Real-time AI",
  },
  {
    title: "Droply",
    subtitle: "Cloud File Management",
    description: "Robust cloud storage solution for secure file sharing and management.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle ORM"],
    github: "https://github.com/abhishek036/droply",
    live: "https://droply.abhishekdev.tech",
    highlight: "Production · Live",
  },
];

export const STACK_GROUPS: StackGroup[] = [
  {
    label: "Frontend",
    items: ["React.js", "Next.js 15+", "TypeScript", "Tailwind CSS", "Framer Motion"],
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
    items: ["Google Gemini API", "Vercel AI SDK", "Vercel", "Clerk Auth", "ImageKit CDN"],
  },
  {
    label: "Tools",
    items: ["Git/GitHub", "Postman", "Python", "Java", "C"],
  },
];
