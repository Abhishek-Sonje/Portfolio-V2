import Hero from "@/components/hero/Hero";
import Stack from "@/components/stack/Stack";
import Projects from "@/components/projects/Projects";
import Experience from "@/components/experience/Experience";
import OpenSource from "@/components/opensource/OpenSource";
import ContentColumn from "@/components/layout/ContentColumn";
import { Contact } from "@/components/footer/contact";
import { JsonLd } from "@/components/seo/json-ld";
import { getPortfolioJsonLd } from "@/lib/seo";

export default function Home() {
  return (
    <>
      <JsonLd data={getPortfolioJsonLd()} />
      <ContentColumn as="article">
        <Hero />
        <Experience />
        <Projects />
        <OpenSource />
        <Stack />
        <Contact />
      </ContentColumn>
    </>
  );
}
