import { ReactNode } from "react";

export type QuickDetail = {
  icon: ReactNode;
  label: string;
  value: string;
  href?: string;
  isCopyable: boolean;
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
  active: boolean;
  logo?: string;
};

export type ProjectVideo =
  | {
      kind: "file";
      src: string;
      poster?: string;
    }
  | {
      kind: "embed";
      src: string;
    };

export type Project = {
  title: string;
  summary: string;
  subtitle: string;
  description: string;
  stack: string[];
  github: string;
  live: string | null;
  highlight: string;
  image: string;
  video?: ProjectVideo;
  category?: string;
  logo?: string;
};

export type StackItem = {
  name: string;
  icon: string;
  url: string;
};

export type StackGroup = {
  label: string;
  items: string[];
};

export type OpenSourceContribution = {
  org: string;
  project: string;
  repo: string;
  repoUrl: string;
  role?: string;
  period?: string;
  author?: string;
  mergedPRs?: number | string;
  prUrl?: string;
  stack?: string[];
  logo?: string;
  active?: boolean;
};
