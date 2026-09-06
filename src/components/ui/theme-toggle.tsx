"use client";

import { useRef, type MouseEvent } from "react";
import { flushSync } from "react-dom";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useSoundPreference } from "@/hooks/use-sound-preference";
import { playThemeDrop } from "@/lib/theme-sound";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const THEME_REVEAL_DURATION = 420;

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const { enabled: soundEnabled } = useSoundPreference();
  const transitioning = useRef(false);

  async function toggleTheme(event: MouseEvent<HTMLButtonElement>) {
    if (transitioning.current) return;
    if (soundEnabled) void playThemeDrop();
    const nextTheme = resolvedTheme === "dark" ? "light" : "dark";
    const change = () => setTheme(nextTheme);
    if (
      !document.startViewTransition ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      change();
      return;
    }
    const { x, y, width, height } = event.currentTarget.getBoundingClientRect();
    const centerX = x + width / 2;
    const centerY = y + height / 2;
    const radius = Math.hypot(
      Math.max(centerX, innerWidth - centerX),
      Math.max(centerY, innerHeight - centerY),
    );
    transitioning.current = true;
    try {
      const transition = document.startViewTransition(() => flushSync(change));
      await transition.ready;
      await document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${centerX}px ${centerY}px)`,
            `circle(${radius}px at ${centerX}px ${centerY}px)`,
          ],
        },
        {
          duration: THEME_REVEAL_DURATION,
          easing: "cubic-bezier(0.16, 1, 0.3, 1)",
          pseudoElement: "::view-transition-new(root)",
        },
      ).finished;
    } catch {
      change();
    } finally {
      transitioning.current = false;
    }
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          aria-label="Toggle light and dark theme"
          className="relative"
        >
          <Sun className="rotate-0 scale-100 transition-transform duration-200 dark:-rotate-90 dark:scale-0 motion-reduce:transition-none" />
          <Moon className="absolute rotate-90 scale-0 transition-transform duration-200 dark:rotate-0 dark:scale-100 motion-reduce:transition-none" />
        </Button>
      </TooltipTrigger>
      <TooltipContent>Switch theme</TooltipContent>
    </Tooltip>
  );
}
