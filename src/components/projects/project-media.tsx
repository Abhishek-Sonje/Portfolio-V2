"use client";

import Image from "next/image";
import { Play, X } from "lucide-react";
import { useId, useRef, useState } from "react";
import type { Project } from "@/types";

type ProjectMediaData = Pick<
  Project,
  "title" | "image" | "live" | "github" | "video"
>;

const imageSizes = "(min-width: 768px) 340px, (min-width: 640px) 45vw, 90vw";

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
        className="scale-110 object-cover opacity-0 blur-2xl saturate-150 transition-[opacity,transform] duration-500 ease-out motion-reduce:transition-none group-hover/media:scale-100 group-hover/media:opacity-70 group-focus-visible/media:scale-100 group-focus-visible/media:opacity-70 group-hover/card:scale-100 group-hover/card:opacity-70 group-focus-within/card:scale-100 group-focus-within/card:opacity-70"
      />
      <span className="absolute inset-0 bg-black/75 transition-colors duration-500 ease-out motion-reduce:transition-none group-hover/media:bg-black/30 group-focus-visible/media:bg-black/30 group-hover/card:bg-black/30 group-focus-within/card:bg-black/30" />
      <span className="absolute bottom-[-1px] left-1/2 h-[84%] w-[88%] origin-bottom -translate-x-1/2 translate-y-1 scale-[0.86] overflow-hidden rounded-t-lg border-x border-t border-white/15 bg-black shadow-2xl transition-transform duration-500 ease-out motion-reduce:transition-none group-hover/media:translate-y-0 group-hover/media:scale-100 group-focus-visible/media:translate-y-0 group-focus-visible/media:scale-100 group-hover/card:translate-y-0 group-hover/card:scale-100 group-focus-within/card:translate-y-0 group-focus-within/card:scale-100">
        <Image
          src={project.image}
          alt={project.title + " preview"}
          fill
          sizes={imageSizes}
          className="object-cover"
        />
      </span>
      {hasVideo && (
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="flex size-11 translate-y-2 scale-90 items-center justify-center rounded-full border border-white/30 bg-white/90 text-black opacity-0 shadow-lg backdrop-blur-sm transition-[opacity,transform] duration-300 motion-reduce:transition-none group-hover/media:translate-y-0 group-hover/media:scale-100 group-hover/media:opacity-100 group-focus-visible/media:translate-y-0 group-focus-visible/media:scale-100 group-focus-visible/media:opacity-100 group-hover/card:translate-y-0 group-hover/card:scale-100 group-hover/card:opacity-100 group-focus-within/card:translate-y-0 group-focus-within/card:scale-100 group-focus-within/card:opacity-100">
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
  const dialogRef = useRef<HTMLDialogElement>(null);
  const videoTitleId = useId();
  const [videoVisible, setVideoVisible] = useState(false);

  function openVideo() {
    setVideoVisible(true);
    dialogRef.current?.showModal?.();
  }

  function closeVideo() {
    dialogRef.current?.close?.();
    setVideoVisible(false);
  }

  const trigger = project.video ? (
    <button
      type="button"
      aria-label={"Play " + project.title + " demo"}
      className={mediaClassName}
      onClick={openVideo}
    >
      <Artwork project={project} hasVideo />
    </button>
  ) : (
    <a
      href={project.live ?? project.github}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={"Explore " + project.title}
      className={mediaClassName}
    >
      <Artwork project={project} hasVideo={false} />
    </a>
  );

  return (
    <>
      {trigger}
      {project.video && (
        <dialog
          ref={dialogRef}
          aria-labelledby={videoTitleId}
          className="m-auto w-[min(56rem,calc(100%-2rem))] max-w-none overflow-visible rounded-xl bg-transparent p-0 text-white backdrop:bg-black/75 backdrop:backdrop-blur-sm"
          onClose={() => setVideoVisible(false)}
          onClick={(event) => {
            if (event.target === event.currentTarget) closeVideo();
          }}
        >
          <div className="relative overflow-hidden rounded-xl border border-white/15 bg-black shadow-2xl">
            <h2 id={videoTitleId} className="sr-only">
              {project.title} demo
            </h2>
            <button
              type="button"
              aria-label="Close video"
              onClick={closeVideo}
              className="absolute right-3 top-3 z-10 flex size-9 items-center justify-center rounded-full border border-white/15 bg-black/70 text-white transition-colors hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <X className="size-4" />
            </button>
            {videoVisible &&
              (project.video.kind === "embed" ? (
                <iframe
                  src={project.video.src}
                  title={project.title + " demo"}
                  className="aspect-video w-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              ) : (
                <video
                  src={project.video.src}
                  poster={project.video.poster ?? project.image}
                  aria-label={project.title + " demo"}
                  className="aspect-video w-full bg-black object-contain"
                  controls
                  autoPlay
                  playsInline
                  preload="metadata"
                />
              ))}
          </div>
        </dialog>
      )}
    </>
  );
}
