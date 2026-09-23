/**
 * Shapes for src/content/course.ts.
 *
 * Headings accept **double asterisks** to bold part of the line,
 * matching the main site's style: "Leadership isn't trained. **It's rehearsed.**"
 */

import type { IconName } from "@/components/Icon";

export type EnquiryKind = "individual" | "team" | "syllabus" | "callback";

export type Image = {
  /** Path inside /public, e.g. "/images/gallery-1.jpg". Leave empty to show a placeholder. */
  src: string;
  alt: string;
};

export type TextItem = {
  title: string;
  description: string;
};

export type Stat = {
  value: string;
  label: string;
};

/** Sections you can switch off in one line (see `sections` in course.ts). */
export type SectionKey =
  | "audienceStrip"
  | "problem"
  | "experiences"
  | "video"
  | "logos"
  | "audience"
  | "outcomes"
  | "curriculum"
  | "howItWorks"
  | "gallery"
  | "facilitators"
  | "testimonials"
  | "certificate"
  | "bonuses"
  | "pricing"
  | "pilot"
  | "team"
  | "faq"
  | "about"
  | "finalCta";

/** The mixed content blocks inside an expanded experience. */
export type ExperienceBlock =
  | { type: "text"; label?: string; body: string }
  | { type: "list"; label?: string; items: string[] }
  | { type: "chips"; label?: string; items: string[] }
  | { type: "flow"; label?: string; steps: string[] }
  | { type: "quote"; label?: string; body: string }
  | { type: "case"; label?: string; title: string; rows: { label: string; value: string }[]; note?: string };

export type Course = {
  meta: {
    siteUrl: string;
    title: string;
    description: string;
  };
  /** Set any of these to false to drop that section (and its navbar link) from the page. */
  sections: Record<SectionKey, boolean>;
  review: {
    /** Shows "pending" labels on unfinished sections. Set to false before launch. */
    mode: boolean;
    /**
     * Sections whose copy is draft rather than placeholder — it looks finished but
     * nobody has confirmed it. Delete an entry once you've approved that section.
     */
    draftNotes: Partial<Record<SectionKey, string>>;
  };
  email: {
    address: string;
    /** Subject lines for the email buttons. */
    subjects: { pilot: string; general: string };
    cta: string;
    navCta: string;
  };
  whatsapp: {
    /** Country code + number, digits only. India example: "919876543210". */
    number: string;
    messages: Record<EnquiryKind, string>;
    /** Label for the "request a callback" link (it sends the `callback` message). */
    callbackCta: string;
    /** Adds "(ref: pricing · utm_source=meta)" so you can see which button/ad produced the chat. */
    includeRef: boolean;
  };
  cohort: {
    /** First session date, YYYY-MM-DD (India time). After this date the page shows `closedMessage`. */
    startDate: string;
    seatsTotal: number;
    seatsLeft: number;
    showSeats: boolean;
    closedMessage: string;
  };
  hero: {
    /** Small label above the headline. Leave empty to hide. */
    eyebrow: string;
    headline: string;
    lead: string;
    primaryCta: string;
    /** Scrolls to the experiences. Leave empty to hide. */
    secondaryCta: string;
    ctaNote: string;
    image: Image;
    imageCaption: string;
    /** Optional chips under the buttons. Leave empty to hide. */
    facts: { icon: IconName; label: string }[];
    /** Optional line of proof under the buttons. Leave empty to hide. */
    trustLine: string;
  };
  /** Heading and function names shown in the strip under the first screen. */
  audienceStrip: {
    heading: string;
    items: string[];
  };
  /** The organisational gap: why AI access alone doesn't change how work gets done. */
  problem: {
    heading: string;
    text: string;
    listIntro: string;
    points: string[];
    closing: string;
  };
  experiences: {
    heading: string;
    subheading: string;
    /** The pathway shown above the cards, e.g. Understand → Redesign → Rehearse → Prioritise. */
    pathway: string[];
    /** Label above each experience's headline outcome, e.g. "Outcome". */
    outcomeLabel: string;
    expandLabel: string;
    items: {
      number: string;
      duration: string;
      title: string;
      summary: string;
      outcome: string;
      blocks: ExperienceBlock[];
    }[];
  };
  video: {
    heading: string;
    subheading: string;
    /** Any YouTube link (watch, youtu.be, shorts or embed). Leave empty to show a placeholder. */
    youtubeUrl: string;
    /** Optional custom thumbnail in /public. Falls back to YouTube's thumbnail. */
    poster: string;
    title: string;
  };
  logos: {
    heading: string;
    items: { name: string; src: string }[];
  };
  /** Organisational conditions rather than job-title personas. */
  audience: {
    heading: string;
    intro: string;
    conditions: string[];
  };
  outcomes: {
    heading: string;
    subheading: string;
    items: TextItem[];
  };
  curriculum: {
    heading: string;
    subheading: string;
    stats: Stat[];
    modules: { label: string; title: string; topics: string[]; simulation?: string }[];
    syllabusTitle: string;
    syllabusText: string;
    syllabusCta: string;
  };
  howItWorks: {
    heading: string;
    subheading: string;
    steps: TextItem[];
    closing: string;
  };
  gallery: {
    heading: string;
    subheading: string;
    images: Image[];
  };
  facilitators: {
    heading: string;
    subheading: string;
    stats: Stat[];
    people: {
      name: string;
      role: string;
      bio: string;
      credentials: string[];
      linkedin: string;
      photo: Image;
    }[];
  };
  testimonials: {
    heading: string;
    subheading: string;
    stats: Stat[];
    /** `linkedinUrl` links to the participant's original LinkedIn post. */
    featured: { quote: string; name: string; role: string; linkedinUrl?: string };
    items: { quote: string; name: string; role: string; linkedinUrl?: string; youtubeUrl?: string }[];
  };
  certificate: {
    eyebrow: string;
    heading: string;
    text: string;
    points: string[];
    /** Your real certificate design. While empty, a branded sample is shown. */
    image: Image;
  };
  bonuses: {
    heading: string;
    subheading: string;
    items: { icon: IconName; title: string; description: string; value: string }[];
    totalValue: string;
  };
  pricing: {
    heading: string;
    subheading: string;
    badge: string;
    planName: string;
    price: string;
    originalPrice: string;
    /** e.g. "40% OFF". Leave empty to hide. */
    discountLabel: string;
    priceNote: string;
    /** Numeric price for search engines (Course schema). Leave null until the price is final. */
    priceValue: number | null;
    currency: string;
    includes: string[];
    cta: string;
    ctaNote: string;
    guarantee: string;
    /** Two short lines for the round guarantee stamp, e.g. ["7-day", "refund"]. Leave empty to hide. */
    guaranteeStamp: string[];
    nextStepsTitle: string;
    nextSteps: TextItem[];
  };
  /** The "start a conversation" section and what happens after you get in touch. */
  pilot: {
    eyebrow: string;
    heading: string;
    text: string;
    steps: TextItem[];
    note: string;
  };
  about: {
    eyebrow: string;
    heading: string;
    text: string;
    closing: string;
  };
  team: {
    eyebrow: string;
    heading: string;
    text: string;
    points: string[];
    cta: string;
  };
  faq: {
    heading: string;
    items: { question: string; answer: string }[];
    stillQuestions: string;
    stillQuestionsCta: string;
  };
  finalCta: {
    heading: string;
    text: string;
    cta: string;
    secondaryCta: string;
    note: string;
  };
  footer: {
    /** e.g. "Gentle Bamboo Solutions | AI at Work for Retail" */
    name: string;
    linkedin: string;
    solutionsUrl: string;
  };
};
