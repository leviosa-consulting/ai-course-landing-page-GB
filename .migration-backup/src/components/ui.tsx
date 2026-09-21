import Image from "next/image";
import type { ReactNode } from "react";
import type { Image as ImageContent, Stat } from "@/content/types";
import { emphasis } from "@/lib/emphasis";
import { Icon } from "./Icon";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function SectionHeading({
  title,
  subtitle,
  eyebrow,
  id,
  align = "center",
  tone = "dark",
}: {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  id?: string;
  align?: "center" | "left";
  tone?: "dark" | "light";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-xl"}>
      {eyebrow && (
        <p className={`mb-3 text-sm font-bold tracking-wider uppercase ${tone === "dark" ? "text-gb-green-deep" : "text-gb-yellow"}`}>
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className={`font-heading text-[32px] leading-[1.15] text-balance sm:text-4xl lg:text-[44px] ${tone === "dark" ? "text-gb-plum" : "text-white"}`}
      >
        {emphasis(title)}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg leading-relaxed text-pretty ${tone === "dark" ? "text-gb-ink" : "text-gb-lilac"}`}>{subtitle}</p>
      )}
    </div>
  );
}

/**
 * Fills its (relatively positioned) parent with a photo, or with a labelled
 * placeholder while `image.src` is still empty.
 */
export function Photo({
  image,
  sizes,
  preload = false,
  className = "",
}: {
  image: ImageContent;
  sizes: string;
  preload?: boolean;
  className?: string;
}) {
  if (image.src) {
    return <Image src={image.src} alt={image.alt} fill sizes={sizes} preload={preload} className={`object-cover ${className}`} />;
  }

  return (
    <div
      role="img"
      aria-label={image.alt}
      className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-linear-135 from-gb-lilac-50 to-gb-yellow-50 p-3 text-center text-gb-mauve"
    >
      <Icon name="camera" className="size-8 shrink-0" />
      <span className="line-clamp-3 max-w-[16rem] text-xs font-bold">Photo: {image.alt}</span>
    </div>
  );
}

/** A row of headline numbers, e.g. "[X,XXX]+ leaders trained". */
export function StatRow({ stats, className = "" }: { stats: Stat[]; className?: string }) {
  return (
    <dl className={`mx-auto grid max-w-3xl grid-cols-3 divide-x divide-gb-plum/10 text-center ${className}`}>
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col-reverse px-2">
          <dt className="mt-1 text-sm text-gb-ink sm:text-base">{stat.label}</dt>
          <dd className="font-heading text-2xl font-bold text-gb-plum sm:text-4xl">{stat.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function CheckItem({ children, tone = "green" }: { children: ReactNode; tone?: "green" | "yellow" }) {
  return (
    <li className="flex gap-3">
      <span
        className={`mt-0.5 grid size-6 shrink-0 place-items-center rounded-full ${tone === "green" ? "bg-gb-green/15 text-gb-green-deep" : "bg-gb-yellow/15 text-gb-yellow"}`}
      >
        <Icon name="check" className="size-3.5" />
      </span>
      <span>{children}</span>
    </li>
  );
}
