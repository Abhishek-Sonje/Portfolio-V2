"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  delay?: number;
  distance?: number;
};

/** A single, restrained entrance reserved for the first viewport. */
export default function ScrollReveal({
  children,
  delay = 0,
  distance = 8,
}: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{
        opacity: 0,
        transform: shouldReduceMotion ? "none" : `translateY(${distance}px)`,
      }}
      animate={{ opacity: 1, transform: "translateY(0)" }}
      transition={{
        duration: shouldReduceMotion ? 0.15 : 0.26,
        ease: [0.23, 1, 0.32, 1],
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
