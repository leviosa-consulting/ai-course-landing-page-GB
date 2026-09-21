"use client";

import type { ComponentProps, ReactNode } from "react";
import type { EnquiryKind } from "@/content/types";
import { trackWhatsAppClick } from "@/lib/track";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { buttonClass, buttonSizes, buttonVariants, iconClass } from "./buttonStyles";
import { Icon } from "./Icon";

type Props = {
  /** Which pre-filled message to use (see course.whatsapp.messages). */
  kind?: EnquiryKind;
  /** Name of this button in analytics and in the chat reference, e.g. "hero". */
  location: string;
  variant?: keyof typeof buttonVariants;
  size?: keyof typeof buttonSizes;
  children: ReactNode;
} & Omit<ComponentProps<"a">, "href" | "children">;

export function WhatsAppButton({
  kind = "individual",
  location,
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}: Props) {
  return (
    <a
      {...rest}
      href={buildWhatsAppUrl(kind, location)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(event) => {
        // Add the visitor's UTM parameters at click time so the chat shows which ad they came from.
        event.currentTarget.href = buildWhatsAppUrl(kind, location, window.location.search);
        trackWhatsAppClick(location, kind);
      }}
      className={buttonClass(variant, size, className)}
    >
      <Icon name="whatsapp" className={iconClass(size)} />
      {size === "icon" ? <span className="sr-only">{children}</span> : children}
    </a>
  );
}
