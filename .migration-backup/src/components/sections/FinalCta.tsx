import { course } from "@/content/course";
import { emphasis } from "@/lib/emphasis";
import { MailButton } from "../MailButton";
import { Container } from "../ui";
import { WhatsAppButton } from "../WhatsAppButton";

export function FinalCta() {
  const { finalCta, whatsapp } = course;

  return (
    <section id="lets-talk" aria-labelledby="final-heading" className="bg-gb-yellow py-16 text-center sm:py-24">
      <Container>
        <h2 id="final-heading" className="mx-auto max-w-3xl font-heading text-4xl leading-[1.1] text-balance text-gb-plum sm:text-5xl lg:text-[52px]">
          {emphasis(finalCta.heading)}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-pretty text-gb-plum/85">{finalCta.text}</p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <WhatsAppButton location="final" size="lg">
            {finalCta.cta}
          </WhatsAppButton>
          <MailButton subject="pilot" location="final_email" variant="plum" size="lg">
            {finalCta.secondaryCta}
          </MailButton>
        </div>

        <p className="mt-4">
          <WhatsAppButton kind="callback" location="final_callback" variant="link" size="bare" className="text-sm">
            {whatsapp.callbackCta}
          </WhatsAppButton>
        </p>

        {finalCta.note && <p className="mt-6 font-heading text-lg text-gb-plum">{finalCta.note}</p>}
      </Container>
    </section>
  );
}
