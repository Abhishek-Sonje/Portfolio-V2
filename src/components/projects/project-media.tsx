"use client";

import Image from "next/image";
import { Play, X } from "lucide-react";
import { useId, useState } from "react";
import type { Project } from "@/types";
import {
  Popover,
  PopoverAnchor,
  PopoverContent,
} from "@/components/ui/popover";

type ProjectMediaData = Pick<
  Project,
  "title" | "image" | "live" | "github" | "video"
>;

const imageSizes = "(min-width: 768px) 340px, (min-width: 640px) 45vw, 90vw";
const youtubeHosts = new Set([
  "youtube.com",
  "m.youtube.com",
  "music.youtube.com",
  "youtube-nocookie.com",
]);
const youtubeVideoIdPattern = /^[a-zA-Z0-9_-]{6,15}$/;

function getStartTime(value: string | null) {
  if (!value) return null;
  if (/^\d+$/.test(value)) return value;

  const match = value.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);
  if (!match) return null;

  const seconds =
    Number(match[1] ?? 0) * 3600 +
    Number(match[2] ?? 0) * 60 +
    Number(match[3] ?? 0);

  return seconds > 0 ? String(seconds) : null;
}

export function getYouTubeEmbedUrl(value?: string) {
  if (!value) return null;

  try {
    const url = new URL(value);
    const hostname = url.hostname.replace(/^www\./, "");
    const path = url.pathname.split("/").filter(Boolean);
    let videoId: string | null = null;

    if (hostname === "youtu.be") {
      videoId = path[0] ?? null;
    } else if (youtubeHosts.has(hostname)) {
      if (path[0] === "watch") {
        videoId = url.searchParams.get("v");
      } else if (["embed", "shorts", "live"].includes(path[0])) {
        videoId = path[1] ?? null;
      }
    }

    if (!videoId || !youtubeVideoIdPattern.test(videoId)) return null;

    const params = new URLSearchParams({
      autoplay: "1",
      playsinline: "1",
      rel: "0",
    });
    const start = getStartTime(
      url.searchParams.get("start") ?? url.searchParams.get("t"),
    );
    if (start) params.set("start", start);

    return `https://www.youtube-nocookie.com/embed/${videoId}?${params}`;
  } catch {
    return null;
  }
}

function Artwork({
  project,
  hasVideo,
}: {
  project: ProjectMediaData;
  hasVideo: boolean;
}) {
  return (
    <>
      <Image
        src={project.image}
        alt=""
        fill
        sizes={imageSizes}
        aria-hidden="true"
        className="scale-105 object-cover opacity-0 contrast-125 grayscale-[30%] transition-[opacity,transform] duration-500 ease-out motion-reduce:transition-none group-hover/media:scale-100 group-hover/media:opacity-55 group-focus-visible/media:scale-100 group-focus-visible/media:opacity-55 group-hover/card:scale-100 group-hover/card:opacity-55 group-focus-within/card:scale-100 group-focus-within/card:opacity-55"
      />
      <span className="absolute inset-0 bg-black/80 transition-colors duration-500 ease-out motion-reduce:transition-none group-hover/media:bg-black/45 group-focus-visible/media:bg-black/45 group-hover/card:bg-black/45 group-focus-within/card:bg-black/45" />
      <span className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.28)_0.6px,transparent_0.8px)] bg-[length:5px_5px] opacity-0 mix-blend-soft-light transition-opacity duration-500 motion-reduce:transition-none group-hover/media:opacity-50 group-focus-visible/media:opacity-50 group-hover/card:opacity-50 group-focus-within/card:opacity-50" />
      <span className="absolute bottom-[-1px] left-1/2 h-[84%] w-[88%] origin-bottom -translate-x-1/2 translate-y-1 scale-[0.86] overflow-hidden rounded-t-lg border-x border-t border-white/15 bg-black shadow-2xl transition-transform duration-500 ease-out motion-reduce:transition-none group-hover/media:translate-y-0 group-hover/media:scale-100 group-focus-visible/media:translate-y-0 group-focus-visible/media:scale-100 group-hover/card:translate-y-0 group-hover/card:scale-100 group-focus-within/card:translate-y-0 group-focus-within/card:scale-100">
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          sizes={imageSizes}
          className="object-cover"
        />
      </span>
      {hasVideo && (
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="flex size-11 translate-y-2 scale-90 items-center justify-center rounded-full border border-white/30 bg-white/90 text-black opacity-0 shadow-lg transition-[opacity,transform] duration-300 motion-reduce:transition-none group-hover/media:translate-y-0 group-hover/media:scale-100 group-hover/media:opacity-100 group-focus-visible/media:translate-y-0 group-focus-visible/media:scale-100 group-focus-visible/media:opacity-100 group-hover/card:translate-y-0 group-hover/card:scale-100 group-hover/card:opacity-100 group-focus-within/card:translate-y-0 group-focus-within/card:scale-100 group-focus-within/card:opacity-100">
            <Play className="ml-0.5 size-4 fill-current" />
          </span>
        </span>
      )}
    </>
  );
}

const mediaClassName =
  "group/media relative block aspect-video w-full cursor-pointer overflow-hidden border-b bg-neutral-950 text-left outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring";

export function ProjectMedia({ project }: { project: ProjectMediaData }) {
  const videoTitleId = useId();
  const [videoVisible, setVideoVisible] = useState(false);
  const youtubeEmbedUrl = getYouTubeEmbedUrl(project.video);

  if (!youtubeEmbedUrl) {
    return (
      <a
        href={project.live ?? project.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Explore ${project.title}`}
        className={mediaClassName}
      >
        <Artwork project={project} hasVideo={false} />
      </a>
    );
  }

  return (
    <Popover open={videoVisible} onOpenChange={setVideoVisible}>
      <PopoverAnchor asChild>
        <button
          type="button"
          aria-label={`Play ${project.title} demo`}
          className={mediaClassName}
          onClick={() => setVideoVisible(true)}
        >
          <Artwork project={project} hasVideo />
        </button>
      </PopoverAnchor>
      <PopoverContent
        side="top"
        sideOffset={12}
        aria-labelledby={videoTitleId}
        className="w-[min(30rem,calc(100vw-2rem))] max-w-none overflow-hidden rounded-xl border-white/15 bg-black p-0 text-white shadow-2xl"
      >
        <h2 id={videoTitleId} className="sr-only">
          {project.title} demo
        </h2>
        <button
          type="button"
          aria-label="Close video"
          onClick={() => setVideoVisible(false)}
          className="absolute right-2 top-2 z-10 flex size-8 items-center justify-center rounded-full border border-white/15 bg-black/75 text-white transition-colors hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <X className="size-4" />
        </button>
        <iframe
          src={youtubeEmbedUrl}
          title={`${project.title} demo`}
          className="aspect-video w-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </PopoverContent>
    </Popover>
  );
}
