"use client";

import Image from "next/image";
import { useEffect, useId, useRef } from "react";
import { ArrowUpRight, BookMarked } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { HERO, PROJECTS, SOCIAL_LINKS } from "@/lib/data";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

type Social = (typeof SOCIAL_LINKS)[number];
const icons = { github: FaGithub, linkedin: FaLinkedinIn, x: FaXTwitter };
const HOVER_OPEN_DELAY = 160;
const HOVER_CLOSE_DELAY = 180;

export function SocialProfilePreview({
  social,
  open,
  onOpenChange,
}: {
  social: Social;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const Icon = icons[social.icon];
  const titleId = useId();
  const contentRef = useRef<HTMLDivElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const interaction = useRef<"hover" | "press">("hover");
  const isLinkedIn = social.icon === "linkedin";
  const isGithub = social.icon === "github";

  function cancelTimer() {
    clearTimeout(timer.current);
  }
  useEffect(() => () => clearTimeout(timer.current), []);

  function openOnHover(pointerType: string) {
    if (pointerType !== "mouse") return;
    cancelTimer();
    if (open) return;
    timer.current = setTimeout(() => {
      interaction.current = "hover";
      onOpenChange(true);
    }, HOVER_OPEN_DELAY);
  }

  function closeOnLeave() {
    cancelTimer();
    if (interaction.current === "press") return;
    timer.current = setTimeout(() => {
      if (!contentRef.current?.contains(document.activeElement))
        onOpenChange(false);
    }, HOVER_CLOSE_DELAY);
  }

  return (
    <Popover
      open={open}
      onOpenChange={(next) => {
        cancelTimer();
        onOpenChange(next);
      }}
    >
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          aria-label={`${social.label} profile preview`}
          onPointerEnter={(event) => openOnHover(event.pointerType)}
          onPointerLeave={closeOnLeave}
          onPointerDown={() => {
            cancelTimer();
            interaction.current = "press";
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              cancelTimer();
              interaction.current = "press";
            }
          }}
        >
          <Icon />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        ref={contentRef}
        aria-labelledby={titleId}
        side="top"
        onPointerEnter={cancelTimer}
        onPointerLeave={closeOnLeave}
        onPointerDown={() => {
          interaction.current = "press";
        }}
        onOpenAutoFocus={(event) => {
          if (interaction.current === "hover") event.preventDefault();
        }}
        onCloseAutoFocus={(event) => {
          if (interaction.current === "hover") event.preventDefault();
        }}
      >
        {isGithub ? (
          <div className="flex items-center gap-2 border-b bg-muted/60 px-4 py-3 text-xs font-medium">
            <Icon className="size-4" />
            GitHub
          </div>
        ) : (
          <div
            className={cn(
              "flex h-20 items-start justify-end p-4",
              isLinkedIn
                ? "bg-social-linkedin-cover text-social-on-brand"
                : "bg-foreground text-background",
            )}
          >
            <Icon className="size-5" />
          </div>
        )}
        <div className="p-4">
          <div
            className={cn(
              "flex items-start justify-between gap-4",
              !isGithub && "-mt-11",
            )}
          >
            <Image
              src={HERO.avatarSrc}
              alt=""
              width={64}
              height={64}
              className={cn(
                "size-16 rounded-full bg-card object-cover",
                !isGithub && "relative border-4 border-card",
              )}
            />
            {!isGithub && (
              <Button
                asChild
                size="sm"
                variant="outline"
                className={cn(
                  "mt-9 rounded-full",
                  isLinkedIn &&
                    "border-social-linkedin text-social-linkedin hover:bg-social-linkedin-soft hover:text-social-linkedin",
                )}
              >
                <a href={social.href} target="_blank" rel="noopener noreferrer">
                  View profile
                  <ArrowUpRight />
                </a>
              </Button>
            )}
          </div>
          <h3
            id={titleId}
            className="mt-3 text-base font-semibold tracking-tight"
          >
            {HERO.name}{" "}
            <span className="sr-only">on {social.label}</span>
          </h3>
          <p
            className={cn(
              "mt-0.5 text-sm",
              isLinkedIn ? "text-foreground" : "text-muted-foreground",
            )}
          >
            {social.handle}
          </p>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            {social.description}
          </p>
          {isGithub && (
            <>
              <div className="mt-4 space-y-2 border-t pt-3">
                {PROJECTS.slice(0, 2).map((project) => (
                  <a
                    key={project.github}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-sm text-xs text-link hover:underline"
                  >
                    <BookMarked className="size-3.5" />
                    {project.title}
                    <ArrowUpRight className="ml-auto size-3" />
                  </a>
                ))}
              </div>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="mt-4 w-full"
              >
                <a href={social.href} target="_blank" rel="noopener noreferrer">
                  View GitHub profile
                  <ArrowUpRight />
                </a>
              </Button>
            </>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
}
