"use client";

/**
 * Scroll tracking adapted from Rare UI's scroll-progress (MIT).
 * https://github.com/swamimalode07/rare-ui/blob/main/components/ui/scroll-progress.tsx
 * See THIRD_PARTY_NOTICES.md. The floating menu is omitted because the page
 * already has persistent navigation. Reuse the existing Motion runtime.
 */
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });
  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 origin-left bg-link"
      style={{ scaleX: reduceMotion ? scrollYProgress : progress }}
    />
  );
}
