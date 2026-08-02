import Hero from "@/components/hero/Hero";
import Bio from "@/components/hero/Bio";
import Stack from "@/components/stack/Stack";
import Projects from "@/components/projects/Projects";
import Experience from "@/components/experience/Experience";
import ContentColumn from "@/components/layout/ContentColumn";
import Section from "@/components/layout/Section";
import SectionDivider from "@/components/layout/SectionDivider";
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

        <ScrollReveal delay={0}>
          <SectionDivider />
        </ScrollReveal>

        <Section anchored>
          <ScrollReveal delay={0}>
            <Stack />
          </ScrollReveal>
        </Section>

        <ScrollReveal delay={0}>
          <SectionDivider />
        </ScrollReveal>

        <Section anchored>
          <ScrollReveal delay={0}>
            <Projects />
          </ScrollReveal>
        </Section>

        <ScrollReveal delay={0}>
          <SectionDivider />
        </ScrollReveal>

        <Section anchored>
          <ScrollReveal delay={0}>
            <Experience />
          </ScrollReveal>
        </Section>

        <ScrollReveal delay={0}>
          <SectionDivider />
        </ScrollReveal>
      </div>
    </ContentColumn>
  );
}
