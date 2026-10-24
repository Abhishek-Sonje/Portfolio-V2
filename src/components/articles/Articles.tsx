import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Section from "@/components/layout/Section";
import { ARTICLES } from "@/lib/data";
import type { Article } from "@/types";

function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="min-w-0">
      <a
        href={article.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Read ${article.title} on ${article.publication} (opens in a new tab)`}
        className="group/article block overflow-hidden rounded-xl border bg-card"
      >
        <Image
          src={article.image}
          alt={article.imageAlt}
          width={1280}
          height={720}
          sizes="(min-width: 768px) 340px, (min-width: 640px) 45vw, 90vw"
          className="aspect-video w-full object-contain"
        />
        <div className="p-4">
          <h3 className="font-semibold tracking-tight">{article.title}</h3>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            {article.summary}
          </p>
          <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-link">
            Read on {article.publication}
            <ArrowUpRight
              aria-hidden="true"
              className="size-3.5 transition-transform group-hover/article:-translate-y-0.5 group-hover/article:translate-x-0.5 group-focus-visible/article:-translate-y-0.5 group-focus-visible/article:translate-x-0.5 motion-reduce:transition-none"
            />
          </span>
        </div>
      </a>
    </article>
  );
}

export default function Articles() {
  return (
    <Section
      id="articles"
      title="Articles"
      description="Notes on software and AI."
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {ARTICLES.map((article) => (
          <ArticleCard key={article.href} article={article} />
        ))}
      </div>
    </Section>
  );
}
