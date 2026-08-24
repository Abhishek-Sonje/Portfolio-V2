"use client";

import { useEffect, useState } from "react";
import { OPEN_SOURCE } from "@/lib/data";
import { OpenSourceContribution } from "@/types";
import { FiGithub, FiGitPullRequest } from "react-icons/fi";
import { FaCodeBranch } from "react-icons/fa6";
import Image from "next/image";

function OpenSourceCard({
  item,
  idx,
}: {
  item: OpenSourceContribution;
  idx: number;
}) {
  const [prCount, setPrCount] = useState<number | null>(null);

  useEffect(() => {
    const author = item.author || "Abhishek-Sonje";
    if (!item.repo) return;

    // Fetch live merged PR count from GitHub API
    fetch(
      `https://api.github.com/search/issues?q=repo:${item.repo}+is:pr+is:merged+author:${author}`
    )
      .then((res) => {
        if (!res.ok) throw new Error("GitHub rate limit or error");
        return res.json();
      })
      .then((data) => {
        if (typeof data.total_count === "number") {
          setPrCount(data.total_count);
        }
      })
      .catch(() => {
        // Silently fall back to initial configured value in data.ts
      });
  }, [item.repo, item.author]);

  // Display live fetched count if available, otherwise use initial fallback
  const displayMergedPRs =
    prCount !== null
      ? `${prCount} Merged PR${prCount === 1 ? "" : "s"}`
      : item.mergedPRs;

  return (
    <div className="flex flex-col gap-3">
      {idx > 0 && <hr className="border-t border-border-subtle pt-2" />}

      <div className="flex items-center gap-4">
        {/* Logo Frame */}
        <div className="w-12 h-12 rounded-lg border border-border-subtle bg-white flex-shrink-0 flex items-center justify-center overflow-hidden p-1.5 shadow-sm">
          {item.logo ? (
            <Image
              src={item.logo}
              alt={`${item.org} logo`}
              width={48}
              height={48}
              className="w-full h-full object-contain"
            />
          ) : (
            <FaCodeBranch className="w-5 h-5 text-foreground-secondary" />
          )}
        </div>

        {/* Details */}
        <div className="flex-grow flex flex-col gap-1.5 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5">
            <div className="flex items-baseline gap-2 flex-wrap">
              <h3 className="type-bold-body text-foreground-heading">
                {item.project}
              </h3>
              <span className="type-meta-byline text-foreground-secondary">
                &middot; {item.org}
              </span>
            </div>

            {/* Merged PRs Badge & Repo link */}
            <div className="flex items-center gap-2 flex-wrap shrink-0">
              {displayMergedPRs && (
                <a
                  href={item.prUrl || item.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pressable inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[12px] font-ui font-medium bg-surface-raised border border-border-subtle text-foreground hover:border-accent/40 hover:text-accent transition-[color,border-color,transform] duration-150"
                  title="View Merged Pull Requests on GitHub"
                >
                  <FiGitPullRequest className="w-3.5 h-3.5 text-accent" />
                  <span>{displayMergedPRs}</span>
                </a>
              )}

              {item.repoUrl && (
                <a
                  href={item.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-2 py-2 rounded-md text-[12px] font-ui text-foreground-secondary hover:text-accent hover:bg-surface-raised transition-colors duration-150"
                  aria-label={`View ${item.repo} repository`}
                >
                  <FiGithub className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Stack pills */}
          {item.stack && item.stack.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {item.stack.map((tech) => (
                <span key={tech} className="tech-pill">
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function OpenSource() {
  return (
    <section
      id="opensource"
      className="flex flex-col w-full bg-background relative scroll-mt-[calc(var(--nav-height)+var(--space-5))]"
    >
      <div className="section-title-container">
        <h2 className="type-section-heading">Open Source</h2>
      </div>

      <div className="flex flex-col gap-6">
        {OPEN_SOURCE.map((item, idx) => (
          <OpenSourceCard key={idx} item={item} idx={idx} />
        ))}
      </div>
    </section>
  );
}
