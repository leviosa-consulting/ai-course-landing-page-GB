import { course } from "@/content/course";
import { emphasis } from "@/lib/emphasis";
import { Icon } from "../Icon";
import { Container } from "../ui";

export function PilotInvitation() {
  const { pilot } = course;

  return (
    <section id="get-started" aria-labelledby="pilot-heading" className="bg-gb-yellow-50 py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold tracking-wider text-gb-plum/70 uppercase">{pilot.eyebrow}</p>
          <h2 id="pilot-heading" className="mt-3 font-heading text-[32px] leading-tight text-balance text-gb-plum sm:text-4xl lg:text-[44px]">
            {emphasis(pilot.heading)}
          </h2>
          <p className="mt-5 text-lg text-pretty text-gb-plum/85">{pilot.text}</p>
        </div>

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pilot.steps.map((step, i) => (
            <li key={step.title} className="reveal rounded-3xl bg-white/70 p-6 ring-1 ring-gb-plum/10">
              <span className="grid size-10 place-items-center rounded-full bg-gb-plum font-heading font-bold text-gb-yellow">{i + 1}</span>
              <h3 className="mt-4 font-heading text-xl font-bold text-gb-plum">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-gb-plum/85">{step.description}</p>
            </li>
          ))}
        </ol>

        {pilot.note && (
          <p className="mx-auto mt-8 flex max-w-3xl gap-3 text-sm text-gb-plum/80">
            <Icon name="shield" className="size-5 shrink-0" />
            {pilot.note}
          </p>
        )}
      </Container>
    </section>
  );
}
