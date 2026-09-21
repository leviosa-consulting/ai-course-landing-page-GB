import type { ReviewStatus } from "@/lib/reviewStatus";

/**
 * A label marking a section as unfinished, shown only while `review.mode` is on.
 * Black with amber text so it reads on every section colour. Hidden from screen
 * readers so it never interrupts the real content.
 */
export function ReviewBadge({ status, switchName }: { status: ReviewStatus; switchName?: string }) {
  const label = status.level === "needs-content" ? "Needs content" : "Check draft";

  return (
    <p
      aria-hidden="true"
      // On phones it sits above the section as a bar, so it can never cover a heading.
      // From tablet up there is room to float it in the section's top-right corner.
      className="z-20 block bg-black/85 px-4 py-2 text-center text-[11px] leading-tight font-bold text-amber-300 sm:absolute sm:top-4 sm:right-4 sm:max-w-[85%] sm:rounded-full sm:px-3 sm:py-1.5 sm:text-left sm:text-xs sm:ring-1 sm:ring-amber-300/60"
    >
      <span className="tracking-wider uppercase">⚠ {label}</span>
      <span className="text-amber-200/90">
        {status.details.map((detail) => ` · ${detail}`)}
        {switchName && <span className="text-white/70"> · off: sections.{switchName}</span>}
      </span>
    </p>
  );
}
