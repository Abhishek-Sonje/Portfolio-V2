import Banner from "@/components/hero/Banner";
import Avatar from "@/components/hero/Avatar";
import QuickDetails from "@/components/hero/QuickDetails";
import Socials from "@/components/hero/Socials";
import Experience from "@/components/experience/Experience";
import Projects from "@/components/projects/Projects";
import Stack from "@/components/stack/Stack";
import GitHubGraph from "@/components/github/GitHubGraph";
import Divider from "@/components/divider";

export default function Home() {
  return (
    <>
      <div className="w-full max-w-3xl mx-auto  border border-border-subtle ">
        <Banner />

        <Avatar />
        <Divider />
        <QuickDetails />
        <Divider />
        <Socials />
        <Divider />

        <Experience />
        <Divider />
        <Projects />
        <Divider />
        <Stack />
        <Divider />
        <GitHubGraph />
      </div>
    </>
  );
}
