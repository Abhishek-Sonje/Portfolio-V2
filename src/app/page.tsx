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
          <ScrollReveal delay={0}>
            <Bio />
          </ScrollReveal>
        </Section>

        <Section anchored>
          <ScrollReveal delay={0}>
            <Experience />
          </ScrollReveal>
        </Section>

        <Section anchored>
          <ScrollReveal delay={0}>
            <Projects />
          </ScrollReveal>
        </Section>

        <Section anchored>
          <ScrollReveal delay={0}>
            <OpenSource />
          </ScrollReveal>
        </Section>

        <Section anchored>
          <ScrollReveal delay={0}>
            <Stack />
          </ScrollReveal>
        </Section>
      </div>
    </ContentColumn>
  );
}
