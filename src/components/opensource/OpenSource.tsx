import Image from "next/image";
import { ArrowUpRight, GitPullRequest } from "lucide-react";
import { OPEN_SOURCE } from "@/lib/data";
import Section from "@/components/layout/Section";
import { MergedCount } from "@/components/opensource/merged-count";

export default function OpenSource() {
  return (
    <Section
      id="open-source"
      title="Open source"
      description="Contributing to software beyond my own projects."
    >
      {OPEN_SOURCE.map((item) => (
        <article key={item.repo} className="flex items-start gap-4">
          {item.logo && (
            <span className="flex size-12 shrink-0 items-center justify-center rounded-lg border bg-card p-2">
              <Image src={item.logo} alt="" width={36} height={36} />
            </span>
          )}
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-semibold">
                {item.project}
                <span className="ml-2 text-sm font-normal text-muted-foreground">
                  / {item.org}
                </span>
              </h3>
              <a
                href={item.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 py-1 text-xs text-muted-foreground hover:text-foreground"
              >
                Repository
                <ArrowUpRight className="size-3.5" />
              </a>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{item.role}</p>
            <p className="mt-3 text-xs leading-6 text-muted-foreground">
              {item.stack?.join(" · ")}
            </p>
            <a
              href={item.prUrl ?? item.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 rounded-md py-2 text-sm font-medium text-link hover:underline"
            >
              <GitPullRequest className="size-4" />
              <MergedCount
                repo={item.repo}
                author={item.author}
                fallback={item.mergedPRs}
              />
              <ArrowUpRight className="size-3.5" />
            </a>
          </div>
        </article>
      ))}
    </Section>
  );
}
