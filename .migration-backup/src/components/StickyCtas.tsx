"use client";

import { course } from "@/content/course";
import { HERO_CTA_ID } from "@/lib/ids";
import { CohortStatus } from "./CohortStatus";
import { useInView } from "./useInView";
import { WhatsAppButton } from "./WhatsAppButton";

/**
 * An always-available WhatsApp CTA (floating button on desktop, bottom bar on mobile).
 * It hides while the hero's own WhatsApp button is on screen, so on phones, where that
 * button sits below the first screen, the bar is there from the start.
 */
export function StickyCtas() {
  const visible = useInView(HERO_CTA_ID) === false;

  return (
    <>
      <div
        inert={!visible}
        className={`fixed right-6 bottom-6 z-40 hidden transition duration-300 md:block ${visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`}
      >
        <WhatsAppButton location="floating" size="icon" className="shadow-2xl">
          Chat with us on WhatsApp
        </WhatsAppButton>
      </div>

      <div
        inert={!visible}
        className={`fixed inset-x-0 bottom-0 z-40 border-t border-gb-plum/10 bg-white/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-8px_30px_rgba(58,17,61,0.12)] backdrop-blur transition-transform duration-300 md:hidden ${visible ? "translate-y-0" : "translate-y-full"}`}
      >
        <div className="flex items-center gap-3">
          <div className="min-w-0 flex-1 text-xs leading-snug text-gb-plum">
            {/* The batch line only makes sense while a public cohort is on sale */}
            {course.sections.pricing ? <CohortStatus variant="inline" /> : <p className="font-bold">{course.hero.eyebrow}</p>}
          </div>
          <WhatsAppButton location="mobile_bar" size="sm" className="shrink-0">
            WhatsApp us
          </WhatsAppButton>
        </div>
      </div>
    </>
  );
}
