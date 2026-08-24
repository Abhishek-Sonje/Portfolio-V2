import Hero from "@/components/hero/Hero";
import Bio from "@/components/hero/Bio";
import Stack from "@/components/stack/Stack";
import Projects from "@/components/projects/Projects";
import Experience from "@/components/experience/Experience";
import OpenSource from "@/components/opensource/OpenSource";
import ContentColumn from "@/components/layout/ContentColumn";
import Section from "@/components/layout/Section";
import ScrollReveal from "@/components/layout/ScrollReveal";

export default function Home() {
  return (
    <ContentColumn as="article">
      <ScrollReveal delay={0}>
        <Hero />
      </ScrollReveal>

      <div className="page-sections">
        <Section>
          <Bio />
        </Section>

        <Section anchored>
          <Experience />
        </Section>

        <Section anchored>
          <Projects />
        </Section>

        <Section anchored>
          <OpenSource />
        </Section>

        <Section anchored>
          <Stack />
        </Section>
      </div>
    </ContentColumn>
  );
}
