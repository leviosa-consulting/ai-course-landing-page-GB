"use client";

import Image from "@/components/Image";
import { useState } from "react";
import { course } from "@/content/course";
import { Icon } from "../Icon";
import { MailButton } from "../MailButton";
import { WhatsAppButton } from "../WhatsAppButton";

const { sections, email } = course;

// Only links whose section is switched on
const links = [
  { href: "#experiences", label: "Experiences", show: sections.experiences },
  { href: "#get-started", label: "Get started", show: sections.pilot },
  { href: "#reviews", label: "Reviews", show: sections.testimonials },
  { href: "#faq", label: "FAQ", show: sections.faq },
].filter((link) => link.show);

/** Same look as the gentlebamboo.com navbar; links jump to sections on this page. */
export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header id="top" className="z-40 bg-gb-purple text-white md:sticky md:top-0">
      <nav aria-label="Main" className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8 md:py-4">
        <a href="#top" className="shrink-0 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gb-yellow">
          <Image src="/brand/GB-logo-purple-bg.png" alt="GentleBamboo" width={518} height={209} preload className="w-[120px] md:w-[140px]" />
        </a>

        <div className="hidden items-center gap-6 md:flex lg:gap-9">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-[17px] text-white/80 transition-colors hover:text-white">
              {link.label}
            </a>
          ))}
          <MailButton subject="general" location="navbar_email" variant="text" size="bare" className="text-[17px] font-normal">
            {email.navCta}
          </MailButton>
          <WhatsAppButton location="navbar" size="sm">
            Chat on WhatsApp
          </WhatsAppButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid size-11 place-items-center rounded-xl transition-colors hover:bg-white/10 md:hidden"
        >
          <Icon name={open ? "x" : "menu"} className="size-6" />
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="animate-rise border-t border-white/10 px-5 pt-2 pb-6 md:hidden">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="block border-b border-white/10 py-3.5 text-lg text-white/90">
              {link.label}
            </a>
          ))}
          <MailButton subject="general" location="navbar_email_mobile" variant="text" size="bare" className="mt-4 block text-lg font-normal">
            {email.navCta}
          </MailButton>
          <WhatsAppButton location="navbar_mobile" className="mt-4 w-full">
            Chat on WhatsApp
          </WhatsAppButton>
        </div>
      )}
    </header>
  );
}
