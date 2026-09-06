"use client";

import { motion, type Variants } from "framer-motion";
import { ReactNode, useEffect, useLayoutEffect, useState } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  /** Stagger delay in seconds. Increment this for elements stacked on the
   *  same first screen so they sweep top-to-bottom in sequence
   *  (e.g. 0, 0.12, 0.24 for hero name, tagline, CTA). */
  delay?: number;
  /** How far the element drifts upward as it settles, in px. */
  distance?: number;
  /** Peak blur amount in px — higher reads as more of a soft "mist". */
  blur?: number;
};

const STORAGE_KEY = "warm_serif_portfolio_visited";

if (typeof window !== "undefined") {
  window.addEventListener("beforeunload", () => {
    try {
      sessionStorage.removeItem(STORAGE_KEY);
    } catch {}
  });
}

// useLayoutEffect fires before the browser paints, so deciding
// animate-vs-skip here (instead of in useEffect) keeps the invisible
// flash for repeat visitors as short as physically possible.
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

// Module-level cache: the "have we seen this visitor before" check must
// only happen ONCE per page load, no matter how many ScrollReveal
// instances are on the page. If every instance read + wrote
// sessionStorage independently, the first one to mount would set the
// flag and every instance mounted after it would immediately read that
// flag back as "already visited" and skip its own animation — which is
// exactly the "only the first section animates" bug. Caching the result
// here means every instance asks once and gets the same answer.
let cachedHasVisited: boolean | null = null;

function resolveHasVisited(): boolean {
  if (cachedHasVisited !== null) return cachedHasVisited;
  try {
    const hasVisited = sessionStorage.getItem(STORAGE_KEY);
    if (hasVisited) {
      cachedHasVisited = true;
    } else {
      sessionStorage.setItem(STORAGE_KEY, "true");
      cachedHasVisited = false;
    }
  } catch {
    // sessionStorage unavailable (private browsing, etc.) — skip animation
    cachedHasVisited = true;
  }
  return cachedHasVisited;
}

export default function ScrollReveal({
  children,
  delay = 0,
  distance = 20,
  blur = 16,
}: ScrollRevealProps) {
  // null  = still deciding (server render + first client frame)
  // true  = first visit this session -> play the reveal
  // false = already visited this session -> skip straight to final state
  const [shouldAnimate, setShouldAnimate] = useState<boolean | null>(null);

  useIsomorphicLayoutEffect(() => {
    setShouldAnimate(!resolveHasVisited());
  }, []);

  // Still deciding: render invisibly, same layout, no flash of unblurred
  // content and no layout shift while we figure out which mode to use.
  if (shouldAnimate === null) {
    return <div style={{ opacity: 0 }}>{children}</div>;
  }

  // Repeat visit: render immediately, fully sharp, zero animation.
  if (!shouldAnimate) {
    return <>{children}</>;
  }

  // First visit: blur-to-clear reveal, once, as this element enters view.
  const variants: Variants = {
    hidden: { filter: `blur(${blur}px)`, opacity: 0, y: distance },
    visible: { filter: "blur(0px)", opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0 }}
      variants={variants}
      transition={{
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1], // easeOutExpo — smooth, cinematic settle
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}