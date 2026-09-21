import { course } from "@/content/course";

const IST_OFFSET = "+05:30";
const DAY_MS = 24 * 60 * 60 * 1000;

export const cohortStart = Date.parse(`${course.cohort.startDate}T00:00:00${IST_OFFSET}`);

/** "12 Oct 2026" — formatted in India time so server and browser always agree. */
export const cohortStartLabel = new Intl.DateTimeFormat("en-IN", {
  day: "numeric",
  month: "short",
  year: "numeric",
  timeZone: "Asia/Kolkata",
}).format(cohortStart);

export function daysUntilStart(now: number): number {
  return Math.ceil((cohortStart - now) / DAY_MS);
}
