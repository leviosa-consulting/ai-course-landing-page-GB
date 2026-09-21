"use client";

import Image from "next/image";
import { useState } from "react";
import { trackVideoPlay } from "@/lib/track";
import { getYouTubeId } from "@/lib/youtube";
import { Icon } from "./Icon";

/**
 * Shows a thumbnail with a play button and only loads the YouTube player after a click.
 * This keeps YouTube's heavy player script off the initial page load.
 * The parent must be positioned and sized (e.g. `relative aspect-video`).
 */
export function YouTubeFacade({
  url,
  title,
  location,
  poster = "",
  sizes = "(min-width: 1024px) 896px, 100vw",
  eager = false,
}: {
  url: string;
  title: string;
  location: string;
  poster?: string;
  sizes?: string;
  /** Load the thumbnail immediately (for a video in the first screen). */
  eager?: boolean;
}) {
  const id = getYouTubeId(url);
  const [playing, setPlaying] = useState(false);
  const [thumb, setThumb] = useState<"maxresdefault" | "hqdefault">("maxresdefault");

  if (!id) {
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center text-gb-lilac">
        <span className="grid size-16 place-items-center rounded-full bg-white/10 text-white">
          <Icon name="play" className="ml-1 size-7" />
        </span>
        <p className="text-sm font-bold">Video placeholder: add your YouTube link in course.ts</p>
      </div>
    );
  }

  if (playing) {
    return (
      <iframe
        className="absolute inset-0 size-full"
        src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => {
        setPlaying(true);
        trackVideoPlay(location);
      }}
      className="group absolute inset-0 size-full cursor-pointer"
      aria-label={`Play video: ${title}`}
    >
      <Image
        src={poster || `https://i.ytimg.com/vi/${id}/${thumb}.jpg`}
        alt=""
        fill
        sizes={sizes}
        unoptimized={!poster}
        loading={eager ? "eager" : undefined}
        fetchPriority={eager ? "high" : undefined}
        onError={() => setThumb("hqdefault")}
        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
      <span className="absolute inset-0 bg-gb-plum/25 transition-colors group-hover:bg-gb-plum/10" />
      <span className="absolute top-1/2 left-1/2 grid size-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-gb-yellow text-gb-plum shadow-2xl transition-transform group-hover:scale-110 sm:size-24">
        <Icon name="play" className="ml-1 size-9" />
      </span>
    </button>
  );
}
