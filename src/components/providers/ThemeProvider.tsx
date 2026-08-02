"use client";

/**
 * Single-theme wrapper. The Warm Serif design uses one parchment palette —
 * no dark/light switching. Kept as a client boundary for future use.
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
