"use client";

import Image from "next/image";
import { BookOpen, Users } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { HERO, SOCIAL_LINKS } from "@/lib/data";
import { buttonVariants } from "@/components/ui/button";
import {
  Popover,
  PopoverAnchor,
  PopoverContent,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

type Social = (typeof SOCIAL_LINKS)[number];
type GitHubProfile = {
  name: string;
  login: string;
  publicRepos: number;
  followers: number;
  following: number;
};

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
  const isLinkedIn = social.icon === "linkedin";
  const isGitHub = social.icon === "github";
  const [githubProfile, setGitHubProfile] = useState<GitHubProfile | null>(
    null,
  );

  useEffect(() => {
    if (!open || !isGitHub || githubProfile) return;

    const controller = new AbortController();

    fetch("/api/github-profile", { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error("GitHub profile request failed");
        return response.json() as Promise<GitHubProfile>;
      })
      .then(setGitHubProfile)
      .catch(() => undefined);

    return () => controller.abort();
  }, [githubProfile, isGitHub, open]);

  function cancelTimer() {
    clearTimeout(timer.current);
  }

  useEffect(() => () => clearTimeout(timer.current), []);

  function openOnHover(pointerType: string) {
    if (pointerType !== "mouse") return;
    cancelTimer();
    if (open) return;
    timer.current = setTimeout(() => onOpenChange(true), HOVER_OPEN_DELAY);
  }

  function closeOnLeave() {
    cancelTimer();
    timer.current = setTimeout(() => {
      if (!contentRef.current?.contains(document.activeElement)) {
        onOpenChange(false);
      }
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
      <PopoverAnchor asChild>
        <a
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${social.label} profile`}
          className={buttonVariants({ variant: "ghost", size: "icon" })}
          onPointerEnter={(event) => openOnHover(event.pointerType)}
          onPointerLeave={closeOnLeave}
          onFocus={() => {
            cancelTimer();
            onOpenChange(true);
          }}
          onBlur={(event) => {
            if (!contentRef.current?.contains(event.relatedTarget as Node)) {
              onOpenChange(false);
            }
          }}
        >
          <Icon />
        </a>
      </PopoverAnchor>
      <PopoverContent
        ref={contentRef}
        aria-labelledby={titleId}
        side="top"
        onPointerEnter={cancelTimer}
        onPointerLeave={closeOnLeave}
        onOpenAutoFocus={(event) => event.preventDefault()}
        onCloseAutoFocus={(event) => event.preventDefault()}
      >
        {isGitHub ? (
          <div className="p-4">
            <div className="flex items-start gap-3">
              <Image
                src={social.preview.avatarSrc}
                alt=""
                width={56}
                height={56}
                className="size-14 shrink-0 rounded-full border bg-muted object-cover"
              />
              <div className="min-w-0 flex-1 pt-0.5">
                <h3
                  id={titleId}
                  className="truncate text-sm font-semibold leading-5"
                >
                  {githubProfile?.name ?? HERO.name}{" "}
                  <span className="sr-only">on GitHub</span>
                </h3>
                <p className="truncate text-sm text-muted-foreground">
                  @{githubProfile?.login ?? social.handle}
                </p>
              </div>
              <FaGithub
                className="mt-0.5 size-5 shrink-0 text-muted-foreground"
                aria-hidden="true"
              />
            </div>

            {githubProfile ? (
              <div className="mt-4 space-y-2.5 text-xs text-muted-foreground">
                <p className="flex items-center gap-2">
                  <Users className="size-4 shrink-0" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-foreground">
                      {githubProfile.followers}
                    </strong>{" "}
                    followers ·{" "}
                    <strong className="font-semibold text-foreground">
                      {githubProfile.following}
                    </strong>{" "}
                    following
                  </span>
                </p>
                <p className="flex items-center gap-2">
                  <BookOpen className="size-4 shrink-0" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-foreground">
                      {githubProfile.publicRepos}
                    </strong>{" "}
                    public repositories
                  </span>
                </p>
              </div>
            ) : (
              <div className="mt-4 space-y-2.5" aria-hidden="true">
                <div className="h-4 w-44 animate-pulse rounded bg-muted motion-reduce:animate-none" />
                <div className="h-4 w-32 animate-pulse rounded bg-muted motion-reduce:animate-none" />
              </div>
            )}
          </div>
        ) : (
          <>
            <div
              className={cn(
                "relative flex h-24 items-start justify-end overflow-hidden p-4",
                isLinkedIn
                  ? "bg-social-linkedin-cover text-social-on-brand"
                  : "bg-foreground text-background",
              )}
            >
              {social.preview.bannerSrc && (
                <Image
                  src={social.preview.bannerSrc}
                  alt={social.preview.bannerAlt}
                  fill
                  sizes="320px"
                  className="object-cover"
                  style={{ objectPosition: social.preview.bannerPosition }}
                />
              )}
              <span className="relative rounded-md bg-background/80 p-1.5 text-foreground shadow-sm backdrop-blur-sm">
                <Icon className="size-4" />
              </span>
            </div>
            <div className="p-4">
              <div className="-mt-11 flex items-start">
                <Image
                  src={social.preview.avatarSrc}
                  alt=""
                  width={64}
                  height={64}
                  className="relative size-16 rounded-full border-4 border-card bg-card object-cover"
                />
              </div>
              <h3
                id={titleId}
                className="mt-3 text-base font-semibold tracking-tight"
              >
                {HERO.name} <span className="sr-only">on {social.label}</span>
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
            </div>
          </>
        )}
      </PopoverContent>
    </Popover>
  );
}
