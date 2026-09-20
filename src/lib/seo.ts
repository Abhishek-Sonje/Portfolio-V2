import {
  BIO,
  EXPERIENCE,
  HERO,
  OPEN_SOURCE,
  PROFILE,
  PROJECTS,
  SOCIAL_LINKS,
  STACK_ITEMS,
} from "@/lib/data";

export const SITE_URL = "https://abhishekdev.tech";
export const SITE_NAME = "Abhishek Sonje";
export const SITE_TITLE = "Abhishek Sonje — Full-Stack Developer";
export const SITE_DESCRIPTION =
  "Abhishek Sonje is a full-stack developer building web products, developer tools, and backend systems with Next.js, TypeScript, Node.js, and Go.";

export const SEO_IDS = {
  website: `${SITE_URL}/#website`,
  person: `${SITE_URL}/#person`,
  profilePage: `${SITE_URL}/#profile-page`,
  projects: `${SITE_URL}/#selected-projects`,
} as const;

export function absoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString();
}

export function getPortfolioJsonLd() {
  const sameAs = SOCIAL_LINKS.map((social) => social.href);
  const knowsAbout = STACK_ITEMS.map((item) => item.name);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": SEO_IDS.website,
        url: SITE_URL,
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        inLanguage: "en",
        author: { "@id": SEO_IDS.person },
      },
      {
        "@type": "Person",
        "@id": SEO_IDS.person,
        name: HERO.name,
        alternateName: "Abhishek-Sonje",
        url: SITE_URL,
        image: absoluteUrl(HERO.avatarSrc),
        description: BIO,
        jobTitle: HERO.tagline,
        email: `mailto:${PROFILE.email}`,
        sameAs,
        knowsAbout,
        hasOccupation: {
          "@type": "Occupation",
          name: "Full-Stack Developer",
          skills: knowsAbout.join(", "),
        },
      },
      {
        "@type": "ProfilePage",
        "@id": SEO_IDS.profilePage,
        url: SITE_URL,
        name: SITE_TITLE,
        description: SITE_DESCRIPTION,
        inLanguage: "en",
        isPartOf: { "@id": SEO_IDS.website },
        mainEntity: { "@id": SEO_IDS.person },
      },
      {
        "@type": "ItemList",
        "@id": SEO_IDS.projects,
        name: "Selected projects by Abhishek Sonje",
        numberOfItems: PROJECTS.length,
        itemListElement: PROJECTS.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "SoftwareSourceCode",
            name: project.title,
            description: project.summary,
            codeRepository: project.github,
            url: project.live ?? project.github,
            image: absoluteUrl(project.image),
            programmingLanguage: project.stack,
            author: { "@id": SEO_IDS.person },
          },
        })),
      },
    ],
  };
}

function markdownLink(label: string, href: string) {
  return `[${label}](${href})`;
}

export function getLlmsText() {
  return `# ${SITE_NAME}

> ${SITE_DESCRIPTION}

This is the official portfolio of ${HERO.name}. The canonical website is ${SITE_URL}.

## Primary resources

- ${markdownLink("Complete portfolio profile", `${SITE_URL}/portfolio.md`)}: Work experience, selected projects, open-source work, skills, and contact details in Markdown.
- ${markdownLink("Portfolio website", SITE_URL)}: Human-readable portfolio with the same source data.
- ${markdownLink("Résumé", absoluteUrl("/Abhishek_Sonje_Resume.pdf"))}: Current résumé in PDF format.
- ${markdownLink("Source code", PROFILE.source)}: Source repository for this portfolio.

## Selected projects

${PROJECTS.map((project) => `- ${markdownLink(project.title, project.live ?? project.github)}: ${project.summary}`).join("\n")}

## Contact

- Email: ${PROFILE.email}
${SOCIAL_LINKS.map((social) => `- ${social.label}: ${social.href}`).join("\n")}
`;
}

export function getPortfolioMarkdown() {
  return `# ${HERO.name}

${HERO.tagline}

${BIO}

${PROFILE.introduction}

Canonical website: ${SITE_URL}

## Work experience

${EXPERIENCE.map(
  (item) => `### ${item.role} — ${item.company}

- Period: ${item.period}
- Work arrangement: ${item.type}
- Technologies: ${item.stack?.join(", ") ?? "Not specified"}

${item.points.map((point) => `- ${point}`).join("\n")}`,
).join("\n\n")}

## Selected projects

${PROJECTS.map(
  (project) => `### ${project.title}

${project.summary}

${project.description}

- Category: ${project.category ?? "Software project"}
- Technologies: ${project.stack.join(", ")}
- Source: ${project.github}
${project.live ? `- Live site: ${project.live}` : ""}`,
).join("\n\n")}

## Open source

${OPEN_SOURCE.map(
  (item) => `### ${item.project} — ${item.org}

- Role: ${item.role}
- Repository: ${item.repoUrl}
- Contributions: ${item.mergedPRs}
- Merged pull requests: ${item.prUrl}
- Technologies: ${item.stack?.join(", ") ?? "Not specified"}`,
).join("\n\n")}

## Skills

${STACK_ITEMS.map((item) => `- ${markdownLink(item.name, item.url)}`).join("\n")}

## Contact and profiles

- Email: ${PROFILE.email}
${SOCIAL_LINKS.map((social) => `- ${social.label}: ${social.href}`).join("\n")}
- Résumé: ${absoluteUrl("/Abhishek_Sonje_Resume.pdf")}
- Portfolio source: ${PROFILE.source}
`;
}
