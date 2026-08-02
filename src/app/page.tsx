import Banner from "@/components/hero/Banner";
import Avatar from "@/components/hero/Avatar";
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
      {/* Hero — Phase 3 will refine banner/avatar anatomy */}
      <header className="hero-block">
        <Banner />
        <Avatar />
      </header>

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
