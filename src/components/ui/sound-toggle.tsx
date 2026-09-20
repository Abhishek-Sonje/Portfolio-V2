"use client";

import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSoundPreference } from "@/hooks/use-sound-preference";
import { playInteractionClick } from "@/lib/interaction-sound";

export function SoundToggle() {
  const { enabled, setEnabled } = useSoundPreference();
  const Icon = enabled ? Volume2 : VolumeX;
  return (
    <Button
      variant="ghost"
      size="sm"
      data-sound="off"
      aria-label="Interface sounds"
      aria-pressed={enabled}
      onClick={() => {
        void playInteractionClick();
        setEnabled(!enabled);
      }}
      className="gap-1.5 px-2 text-xs"
    >
      <Icon />
      <span>Sound {enabled ? "on" : "off"}</span>
    </Button>
  );
}
