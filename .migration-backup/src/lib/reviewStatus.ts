import { course } from "@/content/course";
import type { SectionKey } from "@/content/types";

export type ReviewStatus = {
  level: "needs-content" | "check-draft";
  /** Short phrases describing what is outstanding, e.g. ["5 photos", "14 placeholders"]. */
  details: string[];
};

/** Which content each section shows. The pricing card also displays the cohort dates and seats. */
const sectionContent: Record<SectionKey, unknown> = {
  audienceStrip: course.audienceStrip,
  experiences: course.experiences,
  video: course.video,
  logos: course.logos,
  audience: course.audience,
  outcomes: course.outcomes,
  curriculum: course.curriculum,
  howItWorks: course.howItWorks,
  gallery: course.gallery,
  facilitators: course.facilitators,
  testimonials: course.testimonials,
  certificate: course.certificate,
  bonuses: course.bonuses,
  pricing: [course.pricing, course.cohort],
  pilot: course.pilot,
  team: course.team,
  faq: course.faq,
  about: course.about,
  finalCta: course.finalCta,
};

const PLACEHOLDER = /\[[^\]\n]+\]/;

type Counts = { placeholders: number; photos: number; videos: number };

/** Walks a content subtree counting [bracketed] text, empty photos and empty video links. */
function scan(value: unknown, counts: Counts, key = ""): Counts {
  if (typeof value === "string") {
    if (PLACEHOLDER.test(value)) counts.placeholders += 1;
    // `poster` is an optional custom thumbnail, so an empty one isn't missing content
    else if (value === "" && key === "src") counts.photos += 1;
    else if (value === "" && key === "youtubeUrl") counts.videos += 1;
    return counts;
  }
  if (Array.isArray(value)) {
    for (const entry of value) scan(entry, counts, key);
    return counts;
  }
  if (value && typeof value === "object") {
    for (const [childKey, child] of Object.entries(value)) scan(child, counts, childKey);
  }
  return counts;
}

function plural(count: number, word: string) {
  return `${count} ${word}${count === 1 ? "" : "s"}`;
}

/** What a section still needs, or null when it is ready. */
export function getSectionStatus(section: SectionKey): ReviewStatus | null {
  const counts = scan(sectionContent[section], { placeholders: 0, photos: 0, videos: 0 });
  const note = course.review.draftNotes[section];

  const imageWord = section === "logos" ? "logo" : "photo";
  const details: string[] = [];
  if (counts.placeholders) details.push(plural(counts.placeholders, "placeholder"));
  if (counts.photos) details.push(`${plural(counts.photos, imageWord)} missing`);
  if (counts.videos) details.push("video link missing");

  const needsContent = details.length > 0;
  if (note) details.push(note);
  if (details.length === 0) return null;

  return { level: needsContent ? "needs-content" : "check-draft", details };
}

/** The hero isn't switchable, but its photo can still be missing. */
export function getHeroStatus(): ReviewStatus | null {
  const counts = scan(course.hero, { placeholders: 0, photos: 0, videos: 0 });
  const details: string[] = [];
  if (counts.placeholders) details.push(plural(counts.placeholders, "placeholder"));
  if (counts.photos) details.push(`${plural(counts.photos, "photo")} missing`);
  return details.length ? { level: "needs-content", details } : null;
}
