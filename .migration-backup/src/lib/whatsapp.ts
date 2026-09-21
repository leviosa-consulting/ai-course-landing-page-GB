import { course } from "@/content/course";
import type { EnquiryKind } from "@/content/types";

const TRACKED_PARAMS = ["utm_source", "utm_medium", "utm_campaign"] as const;

/**
 * Builds a wa.me link with a pre-filled message.
 *
 * `location` names the button that was clicked (e.g. "hero", "pricing"). When `search`
 * (the page's query string) is passed, UTM values are added to the reference so the
 * team can see which section and which ad each chat came from.
 */
export function buildWhatsAppUrl(kind: EnquiryKind, location: string, search = ""): string {
  const { number, messages, includeRef } = course.whatsapp;
  let text = messages[kind];

  if (includeRef) {
    const params = new URLSearchParams(search);
    const ref = [
      location,
      ...TRACKED_PARAMS.flatMap((key) => {
        const value = params.get(key);
        return value ? [`${key}=${value.slice(0, 60)}`] : [];
      }),
    ];
    text += `\n\n(ref: ${ref.join(" · ")})`;
  }

  return `https://wa.me/${number.replace(/\D/g, "")}?text=${encodeURIComponent(text)}`;
}
