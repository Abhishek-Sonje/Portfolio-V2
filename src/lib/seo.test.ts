import { describe, expect, it } from "vitest";
import { PROJECTS } from "@/lib/data";
import {
  getLlmsText,
  getPortfolioJsonLd,
  getPortfolioMarkdown,
  SEO_IDS,
  SITE_URL,
} from "@/lib/seo";

describe("portfolio discovery data", () => {
  it("connects the website, person, profile page, and projects in one graph", () => {
    const data = getPortfolioJsonLd();
    const serialized = JSON.stringify(data);

    expect(data["@context"]).toBe("https://schema.org");
    expect(serialized).toContain(SEO_IDS.website);
    expect(serialized).toContain(SEO_IDS.person);
    expect(serialized).toContain(SEO_IDS.profilePage);
    expect(serialized).toContain(SEO_IDS.projects);
    expect(serialized).toContain("https://github.com/Abhishek-Sonje");
  });

  it("generates AI-readable files from every selected project", () => {
    const index = getLlmsText();
    const profile = getPortfolioMarkdown();

    expect(index).toContain(`${SITE_URL}/portfolio.md`);
    expect(profile).toContain("## Work experience");
    expect(profile).toContain("## Open source");

    for (const project of PROJECTS) {
      expect(index).toContain(project.title);
      expect(profile).toContain(project.title);
    }
  });
});
