"use client";

import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSoundPreference } from "@/hooks/use-sound-preference";

export function SoundToggle() {
  const { enabled, setEnabled } = useSoundPreference();
  const Icon = enabled ? Volume2 : VolumeX;
  return (
    <Button
      variant="ghost"
      size="sm"
      aria-label="Theme sounds"
      aria-pressed={enabled}
      onClick={() => setEnabled(!enabled)}
      className="gap-1.5 px-2 text-xs"
    >
      <Icon />
      <span>Sound {enabled ? "on" : "off"}</span>
    </Button>
  );
}
