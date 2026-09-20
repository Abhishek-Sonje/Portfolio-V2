"use client";

import { useEffect, useState } from "react";

export function MergedCount({
  repo,
  author,
  fallback,
}: {
  repo: string;
  author?: string;
  fallback?: string | number;
}) {
  const [count, setCount] = useState<number | null>(null);
  useEffect(() => {
    if (!author) return;
    const controller = new AbortController();
    const query = new URLSearchParams({
      q: `repo:${repo} is:pr is:merged author:${author}`,
      per_page: "1",
    });
    fetch(`https://api.github.com/search/issues?${query}`, {
      signal: controller.signal,
    })
      .then((response) => {
        if (!response.ok) throw new Error("GitHub unavailable");
        return response.json();
      })
      .then((data: { total_count?: number }) => {
        if (typeof data.total_count === "number") setCount(data.total_count);
      })
      .catch(() => {
        /* Retain the supplied contribution record when GitHub is unavailable. */
      });
    return () => controller.abort();
  }, [repo, author]);
  return (
    <span>
      {count === null
        ? (fallback ?? "View contributions")
        : `${count} merged PR${count === 1 ? "" : "s"}`}
    </span>
  );
}
