import Image from "next/image";
import { ArrowDown, ArrowUpRight, Mail } from "lucide-react";
import { BIO, HERO, PROFILE, RESUME_URL } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/hero/social-links";

export default function Hero() {
  return (
    <header id="intro" className="scroll-mt-24 pb-10 pt-12 sm:pt-14">
      <div className="flex items-center gap-5">
        <Image
          src={HERO.avatarSrc}
          alt={HERO.name}
          width={80}
          height={80}
          preload
          className="size-20 shrink-0 rounded-2xl bg-muted object-cover"
        />
        <div className="min-w-0">
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {HERO.name}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">
            {HERO.tagline}
          </p>
        </div>
      </div>
      <p className="mt-7 max-w-xl text-lg font-medium leading-7 tracking-tight sm:text-xl sm:leading-8">
        {PROFILE.introduction}
      </p>
      <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
        {BIO}
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <Button asChild>
          <a href={`mailto:${PROFILE.email}`}>
            <Mail />
            Get in touch
          </a>
        </Button>
        <Button asChild variant="outline">
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            Resume
            <ArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none" />
          </a>
        </Button>
        <SocialLinks />
      </div>
      <a
        href="#projects"
        className="mt-8 inline-flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowDown className="size-3.5" />
        Explore my work
      </a>
    </header>
  );
}
