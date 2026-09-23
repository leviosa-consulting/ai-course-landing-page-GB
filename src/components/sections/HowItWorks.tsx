import { course } from "@/content/course";
import { Container, SectionHeading } from "../ui";

export function HowItWorks() {
  const { howItWorks } = course;

  return (
    <section id="how-we-work" aria-labelledby="how-heading" className="bg-gb-purple py-16 sm:py-24">
      <Container>
        <SectionHeading id="how-heading" title={howItWorks.heading} subtitle={howItWorks.subheading} tone="light" />

        <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {howItWorks.steps.map((step, i) => (
            <li
              key={step.title}
              className="reveal relative lg:after:absolute lg:after:top-6 lg:after:right-0 lg:after:left-16 lg:after:h-px lg:after:bg-white/20 lg:last:after:hidden"
            >
              <span className="grid size-12 place-items-center rounded-full bg-gb-yellow font-heading text-lg font-bold text-gb-plum">
                {i + 1}
              </span>
              <h3 className="mt-5 font-heading text-2xl font-bold text-white">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-gb-lilac">{step.description}</p>
            </li>
          ))}
        </ol>

        {howItWorks.closing && (
          <p className="mt-14 text-center font-heading text-2xl text-balance text-gb-yellow sm:text-3xl">{howItWorks.closing}</p>
        )}
      </Container>
    </section>
  );
}
