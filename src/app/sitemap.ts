import type { MetadataRoute } from "next";
import { HERO, PROJECTS } from "@/lib/data";
import { absoluteUrl, SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      changeFrequency: "monthly",
      priority: 1,
      images: [
        absoluteUrl(HERO.avatarSrc),
        ...PROJECTS.map((project) => absoluteUrl(project.image)),
      ],
    },
    {
      url: `${SITE_URL}/portfolio.md`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
