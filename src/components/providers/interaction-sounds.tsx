"use client";

import { useEffect } from "react";
import { useSoundPreference } from "@/hooks/use-sound-preference";
import { playInteractionClick } from "@/lib/interaction-sound";

const INTERACTIVE_SELECTOR = [
  "a[href]",
  "button",
  "summary",
  '[role="button"]',
].join(",");

export function InteractionSounds() {
  const { enabled } = useSoundPreference();

  useEffect(() => {
    if (!enabled) return;

    function playForAction(event: MouseEvent) {
      if (event.defaultPrevented || event.button !== 0) return;
      if (!(event.target instanceof Element)) return;

      const control = event.target.closest<HTMLElement>(INTERACTIVE_SELECTOR);
      if (!control || control.dataset.sound === "off") return;
      if (control.matches(":disabled, [aria-disabled='true']")) return;

      void playInteractionClick();
    }

    document.addEventListener("click", playForAction);
    return () => document.removeEventListener("click", playForAction);
  }, [enabled]);

  return null;
}
