import { course } from "@/content/course";
import { Icon } from "../Icon";
import { Container, SectionHeading } from "../ui";
import { WhatsAppButton } from "../WhatsAppButton";

export function Curriculum() {
  const { curriculum } = course;

  return (
    <section id="curriculum" aria-labelledby="curriculum-heading" className="bg-gb-yellow-50 py-16 sm:py-24">
      <Container>
        <SectionHeading id="curriculum-heading" title={curriculum.heading} subtitle={curriculum.subheading} />

        <dl className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2.5">
          {curriculum.stats.map((stat) => (
            <div key={stat.label} className="flex items-baseline gap-1.5 rounded-full bg-white px-4 py-2 ring-1 ring-gb-plum/10">
              <dt className="order-2 text-sm text-gb-ink">{stat.label}</dt>
              <dd className="font-heading text-lg font-bold text-gb-plum">{stat.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {curriculum.modules.map((module, i) => (
            <details
              key={module.title}
              open={i === 0}
              className="group rounded-2xl bg-white ring-1 ring-gb-plum/10 transition-shadow open:shadow-lg open:shadow-gb-plum/10"
            >
              <summary className="flex items-center gap-4 p-5 sm:p-6">
                <span className="w-16 shrink-0 text-xs font-bold tracking-wider text-gb-green-deep uppercase sm:w-20">{module.label}</span>
                <span className="flex-1 font-heading text-lg font-bold text-gb-plum sm:text-xl">{module.title}</span>
                <Icon name="chevronDown" className="size-5 shrink-0 text-gb-mauve transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-5 pb-6 sm:pr-6 sm:pl-30">
                <ul className="space-y-2 text-gb-ink">
                  {module.topics.map((topic) => (
                    <li key={topic} className="flex gap-3">
                      <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-gb-green" aria-hidden="true" />
                      {topic}
                    </li>
                  ))}
                </ul>
                {module.simulation && (
                  <p className="mt-4 flex gap-3 rounded-xl bg-gb-lilac-50 p-4 text-gb-plum">
                    <Icon name="gamepad" className="mt-0.5 size-5 shrink-0 text-gb-mauve" />
                    <span>
                      <span className="block text-xs font-bold tracking-wider text-gb-mauve uppercase">Simulation</span>
                      <span className="font-bold">{module.simulation}</span>
                    </span>
                  </p>
                )}
              </div>
            </details>
          ))}
        </div>

        <div className="mx-auto mt-10 flex max-w-3xl flex-col items-start gap-5 rounded-3xl bg-gb-purple p-7 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <h3 className="font-heading text-2xl font-bold text-white">{curriculum.syllabusTitle}</h3>
            <p className="mt-2 text-gb-lilac">{curriculum.syllabusText}</p>
          </div>
          <WhatsAppButton kind="syllabus" location="curriculum" variant="yellow" className="shrink-0">
            {curriculum.syllabusCta}
          </WhatsAppButton>
        </div>
      </Container>
    </section>
  );
}
