import { ArrowUp } from "lucide-react";
import { FOOTER_QUOTE, HERO, PROFILE } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-3xl px-5 pb-8 sm:px-8">
      <figure className="border-y py-12 text-center sm:py-16">
        <blockquote
          cite={FOOTER_QUOTE.source}
          className="mx-auto max-w-lg font-serif text-xl leading-9 tracking-tight sm:text-2xl sm:leading-10"
        >
          “{FOOTER_QUOTE.text}”
        </blockquote>
        <figcaption className="mt-5 text-xs text-muted-foreground">
          <a
            href={FOOTER_QUOTE.source}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            {FOOTER_QUOTE.author}
            <span className="mx-2" aria-hidden="true">
              ·
            </span>
            <cite>{FOOTER_QUOTE.work}</cite>
          </a>
        </figcaption>
      </figure>
      <div className="flex flex-wrap items-center justify-between gap-4 pt-6 text-xs text-muted-foreground">
        <p>
          © {new Date().getFullYear()} {HERO.name}
        </p>
        <div className="flex items-center gap-5">
          <a
            href={PROFILE.source}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 hover:text-foreground"
          >
            View source
          </a>
          <a
            href="#intro"
            className="inline-flex items-center gap-1.5 py-2 hover:text-foreground"
          >
            Back to top
            <ArrowUp className="size-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
