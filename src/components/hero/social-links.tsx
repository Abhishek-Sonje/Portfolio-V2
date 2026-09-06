"use client";

import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { SOCIAL_LINKS } from "@/lib/data";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const icons = { github: FaGithub, linkedin: FaLinkedinIn, x: FaXTwitter };

export function SocialLinks() {
  return (
    <div className="flex items-center gap-0.5">
      {SOCIAL_LINKS.map((social) => {
        const Icon = icons[social.icon];
        return (
          <Tooltip key={social.label}>
            <TooltipTrigger asChild>
              <Button asChild variant="ghost" size="icon">
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <Icon />
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent>{social.label}</TooltipContent>
          </Tooltip>
        );
      })}
    </div>
  );
}
