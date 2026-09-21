import { course } from "@/content/course";
import { Icon } from "../Icon";
import { Container, SectionHeading } from "../ui";
import { WhatsAppButton } from "../WhatsAppButton";

export function Faq() {
  const { faq } = course;

  return (
    <section id="faq" aria-labelledby="faq-heading" className="bg-white py-16 sm:py-24">
      <Container className="max-w-3xl">
        <SectionHeading id="faq-heading" title={faq.heading} />

        <div className="mt-12 divide-y divide-gb-plum/10 border-y border-gb-plum/10">
          {faq.items.map((item) => (
            <details key={item.question} className="group">
              <summary className="flex items-center justify-between gap-6 py-5 font-heading text-lg font-bold text-gb-plum">
                {item.question}
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-gb-lilac-50 text-gb-purple transition-transform group-open:rotate-45">
                  <Icon name="plus" className="size-4" />
                </span>
              </summary>
              <p className="pr-12 pb-6 leading-relaxed text-gb-ink">{item.answer}</p>
            </details>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-3xl bg-gb-lilac-50 p-6 text-center sm:flex-row sm:text-left">
          <p className="font-heading text-xl font-bold text-gb-plum">{faq.stillQuestions}</p>
          <WhatsAppButton location="faq" variant="outline">
            {faq.stillQuestionsCta}
          </WhatsAppButton>
        </div>
      </Container>
    </section>
  );
}
