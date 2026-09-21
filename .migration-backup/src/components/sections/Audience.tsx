import { course } from "@/content/course";
import { Icon } from "../Icon";
import { Container, SectionHeading } from "../ui";

// Cycles brand accents across the persona cards
const accents = ["bg-gb-green/15 text-gb-green-deep", "bg-gb-yellow/40 text-gb-plum", "bg-gb-purple/10 text-gb-purple", "bg-gb-mauve/15 text-gb-mauve"];

export function Audience() {
  const { audience } = course;

  return (
    <section aria-labelledby="audience-heading" className="bg-gb-lilac-50 py-16 sm:py-24">
      <Container>
        <SectionHeading id="audience-heading" title={audience.heading} subtitle={audience.subheading} />

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {audience.personas.map((persona, i) => (
            <li key={persona.title} className="reveal flex flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gb-plum/10">
              <span className={`grid size-12 place-items-center rounded-2xl ${accents[i % accents.length]}`}>
                <Icon name={persona.icon} className="size-6" />
              </span>
              <h3 className="mt-5 font-heading text-xl font-bold text-balance text-gb-plum">{persona.title}</h3>
              <p className="mt-2 flex-1 leading-relaxed text-gb-ink">{persona.description}</p>
              <p className="mt-5 border-t border-gb-plum/10 pt-4 text-sm font-bold text-gb-plum">
                <span className="mb-1 block text-xs tracking-wider text-gb-green-deep uppercase">You&apos;ll leave with</span>
                {persona.outcome}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-6 rounded-3xl p-6 ring-1 ring-gb-plum/10 sm:p-7 lg:flex lg:items-center lg:gap-8">
          <h3 className="shrink-0 font-heading text-lg font-bold text-gb-plum">{audience.notForYouTitle}</h3>
          <ul className="mt-4 flex flex-col gap-3 text-gb-ink sm:flex-row sm:flex-wrap sm:gap-x-8 lg:mt-0">
            {audience.notForYou.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-gb-plum/10 text-gb-mauve">
                  <Icon name="x" className="size-3" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
