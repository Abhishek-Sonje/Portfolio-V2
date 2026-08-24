"use client";

import { useEffect, useRef, useState } from "react";

type VisitorResponse = {
  count: number;
  counted: boolean;
};

export default function VisitorCounter() {
  const requested = useRef(false);
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    if (requested.current) return;
    requested.current = true;

    const controller = new AbortController();

    async function loadCount() {
      try {
        const response = await fetch("/api/visitors", {
          method: "POST",
          cache: "no-store",
          credentials: "same-origin",
          signal: controller.signal,
        });

        if (!response.ok) return;

        const data = (await response.json()) as VisitorResponse;
        if (Number.isSafeInteger(data.count) && data.count >= 0) {
          setCount(data.count);
        }
      } catch {
        // The metric is optional; keep the footer quiet when unavailable.
      }
    }

    void loadCount();
    return () => controller.abort();
  }, []);

  if (count === null) return null;

  return (
    <p className="visitor-counter type-meta-byline" aria-live="polite">
      {new Intl.NumberFormat("en-IN").format(count)} visitors
    </p>
  );
}
