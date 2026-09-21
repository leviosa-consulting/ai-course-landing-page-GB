import { course } from "@/content/course";
import { emphasis } from "@/lib/emphasis";
import { CohortStatus } from "../CohortStatus";
import { Container } from "../ui";
import { WhatsAppButton } from "../WhatsAppButton";

export function FinalCta() {
  const { finalCta, whatsapp } = course;

  return (
    <section aria-labelledby="final-heading" className="bg-gb-yellow py-16 text-center sm:py-24">
      <Container>
        <h2 id="final-heading" className="mx-auto max-w-3xl font-heading text-4xl leading-[1.1] text-balance text-gb-plum sm:text-5xl lg:text-[56px]">
          {emphasis(finalCta.heading)}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-gb-plum/85">{finalCta.text}</p>
        <WhatsAppButton location="final" size="lg" className="mt-9">
          {finalCta.cta}
        </WhatsAppButton>
        <div className="mt-4 text-sm text-gb-plum">
          <CohortStatus variant="inline" />
        </div>
        <p className="mt-4">
          <WhatsAppButton kind="callback" location="final_callback" variant="link" size="bare" className="text-sm">
            {whatsapp.callbackCta}
          </WhatsAppButton>
        </p>
      </Container>
    </section>
  );
}
