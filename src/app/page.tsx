import Hero from "@/components/hero/Hero";
import Bio from "@/components/hero/Bio";
import Stack from "@/components/stack/Stack";
import Projects from "@/components/projects/Projects";
import Experience from "@/components/experience/Experience";
import ContentColumn from "@/components/layout/ContentColumn";
import Section from "@/components/layout/Section";
import SectionDivider from "@/components/layout/SectionDivider";

export default function Home() {
  return (
    <ContentColumn as="article">
      <Hero />

      <div className="page-sections">
        <Section>
          <Bio />
        </Section>

        <SectionDivider />

        <Section anchored>
          <Stack />
        </Section>

        <SectionDivider />

        <Section anchored>
          <Projects />
        </Section>

        <SectionDivider />

        <Section anchored>
          <Experience />
        </Section>
      </div>
    </ContentColumn>
  );
}
