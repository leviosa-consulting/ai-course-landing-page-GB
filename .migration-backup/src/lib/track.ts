import type { EnquiryKind } from "@/content/types";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

/** Records a WhatsApp CTA click as a conversion in GA4 and the Meta Pixel (when they're loaded). */
export function trackWhatsAppClick(location: string, kind: EnquiryKind) {
  window.gtag?.("event", "whatsapp_click", { cta_location: location, enquiry_type: kind });
  window.fbq?.("track", "Contact", { cta_location: location, enquiry_type: kind });
}

/** Records an email CTA click as a conversion in GA4 and the Meta Pixel. */
export function trackEmailClick(location: string, subject: string) {
  window.gtag?.("event", "email_click", { cta_location: location, enquiry_type: subject });
  window.fbq?.("track", "Contact", { cta_location: location, enquiry_type: subject, method: "email" });
}

export function trackVideoPlay(location: string) {
  window.gtag?.("event", "video_play", { cta_location: location });
  window.fbq?.("trackCustom", "VideoPlay", { cta_location: location });
}
