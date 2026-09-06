import Hero from "@/components/hero/Hero";
import Stack from "@/components/stack/Stack";
import Projects from "@/components/projects/Projects";
import Experience from "@/components/experience/Experience";
import OpenSource from "@/components/opensource/OpenSource";
import ContentColumn from "@/components/layout/ContentColumn";
import { Contact } from "@/components/footer/contact";

export default function Home() {
  return (
    <ContentColumn as="article">
      <Hero />
      <Experience />
      <Projects />
      <OpenSource />
      <Stack />
      <Contact />
    </ContentColumn>
  );
}
