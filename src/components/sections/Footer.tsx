import Image from "next/image";
import { course } from "@/content/course";
import { Icon } from "../Icon";
import { MailButton } from "../MailButton";
import { Container } from "../ui";
import { WhatsAppButton } from "../WhatsAppButton";

/** Mirrors the gentlebamboo.com footer ("Let's connect!" with Bam), plus WhatsApp and email. */
export function Footer() {
  const { footer, email } = course;

  return (
    <footer className="bg-gb-purple">
      <Container className="grid items-center gap-10 py-16 md:grid-cols-[auto_1fr] md:gap-20 md:py-20">
        <Image src="/brand/Bam-for_footer.png" alt="" width={284} height={264} className="mx-auto w-40 animate-bubble md:w-56" />

        <div className="text-center md:text-left">
          <h2 className="font-heading text-[45px] leading-none font-bold text-gb-yellow md:text-6xl">Let&apos;s connect!</h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div>
              <p className="text-lg text-gb-lilac">Reach us at</p>
              <MailButton
                subject="general"
                location="footer_email"
                variant="text"
                size="bare"
                className="mt-1 font-heading text-xl font-normal"
              >
                {email.address}
              </MailButton>
            </div>
            <div>
              <p className="text-lg text-gb-lilac">Chat with us</p>
              <WhatsAppButton location="footer" variant="text" size="bare" className="mt-1 font-heading text-xl font-normal">
                WhatsApp
              </WhatsAppButton>
            </div>
          </div>

          <div className="mt-10 mb-5 h-px bg-white/20" />

          <p className="mb-5 font-heading text-lg text-white">{footer.name}</p>

          <nav aria-label="Gentle Bamboo" className="flex flex-wrap justify-center gap-x-10 gap-y-3 text-lg text-gb-lilac md:justify-start">
            <a href={footer.solutionsUrl} className="hover:text-white">
              View All Solutions
            </a>
            <a href={footer.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-white">
              <Icon name="linkedin" className="size-4" />
              LinkedIn
            </a>
            <a href="https://gentlebamboo.com" className="hover:text-white">
              gentlebamboo.com
            </a>
          </nav>
        </div>
      </Container>

      {/* extra bottom padding on mobile so the sticky WhatsApp bar never covers this */}
      <div className="bg-gb-plum pt-4 pb-24 text-center text-sm text-gb-lilac md:pb-4">
        © 2019 – {new Date().getFullYear()} Gentle Bamboo Solutions ⦁ All rights reserved
      </div>
    </footer>
  );
}
