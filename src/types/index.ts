import { ReactNode } from "react";

export type QuickDetail = {
  icon: string;
  label: string;
  value: string;
  href?: string;
};

export type Social = {
  label: string;
  href: string;
  icon: ReactNode;
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  type: string;
  points: string[];
  stack: string[];
};

export type Project = {
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  github: string;
  live: string | null;
  highlight: string;
};

export type StackGroup = {
  label: string;
  items: string[];
};
