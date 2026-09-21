"use client";

import type { ComponentProps, ReactNode } from "react";
import { course } from "@/content/course";
import { trackEmailClick } from "@/lib/track";
import { buttonClass, buttonSizes, buttonVariants, iconClass } from "./buttonStyles";
import { Icon } from "./Icon";

type Props = {
  /** Which subject line to use (see course.email.subjects). */
  subject?: keyof typeof course.email.subjects;
  /** Name of this button in analytics, e.g. "pilot". */
  location: string;
  variant?: keyof typeof buttonVariants;
  size?: keyof typeof buttonSizes;
  children: ReactNode;
} & Omit<ComponentProps<"a">, "href" | "children">;

export function MailButton({ subject = "general", location, variant = "outline", size = "md", className = "", children, ...rest }: Props) {
  const { address, subjects } = course.email;

  return (
    <a
      {...rest}
      href={`mailto:${address}?subject=${encodeURIComponent(subjects[subject])}`}
      onClick={() => trackEmailClick(location, subject)}
      className={buttonClass(variant, size, className)}
    >
      <Icon name="mail" className={iconClass(size)} />
      {size === "icon" ? <span className="sr-only">{children}</span> : children}
    </a>
  );
}
