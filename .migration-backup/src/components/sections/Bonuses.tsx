import { course } from "@/content/course";
import { emphasis } from "@/lib/emphasis";
import { Icon } from "../Icon";
import { Container, SectionHeading } from "../ui";

export function Bonuses() {
  const { bonuses } = course;

  return (
    <section aria-labelledby="bonuses-heading" className="bg-white py-16 sm:py-24">
      <Container>
        <SectionHeading id="bonuses-heading" title={bonuses.heading} subtitle={bonuses.subheading} />

        <ul className="mt-14 grid gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {bonuses.items.map((bonus) => (
            <li key={bonus.title} className="reveal relative flex flex-col rounded-3xl bg-gb-lilac-50 p-6 pt-8">
              <span className="absolute -top-3 right-5 rounded-full bg-gb-yellow px-3 py-1 text-xs font-bold tracking-wider text-gb-plum uppercase">
                Free
              </span>
              <span className="grid size-12 place-items-center rounded-2xl bg-gb-purple text-gb-yellow">
                <Icon name={bonus.icon} className="size-6" />
              </span>
              <h3 className="mt-5 font-heading text-xl font-bold text-balance text-gb-plum">{bonus.title}</h3>
              <p className="mt-2 flex-1 leading-relaxed text-gb-ink">{bonus.description}</p>
              <p className="mt-4 text-sm font-bold text-gb-green-deep">{bonus.value}</p>
            </li>
          ))}
        </ul>

        {bonuses.totalValue && <p className="mt-10 text-center font-heading text-xl text-gb-plum sm:text-2xl">{emphasis(bonuses.totalValue)}</p>}
      </Container>
    </section>
  );
}
