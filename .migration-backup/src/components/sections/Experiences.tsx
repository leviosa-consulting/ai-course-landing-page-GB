import { course } from "@/content/course";
import type { ExperienceBlock } from "@/content/types";
import { Icon } from "../Icon";
import { Container, SectionHeading } from "../ui";

export function Experiences() {
  const { experiences } = course;

  return (
    <section id="experiences" aria-labelledby="experiences-heading" className="bg-white py-16 sm:py-24">
      <Container>
        <SectionHeading id="experiences-heading" title={experiences.heading} subtitle={experiences.subheading} />

        {experiences.pathway.length > 0 && (
          <FlowRow steps={experiences.pathway} size="lg" className="mt-10 justify-center" />
        )}

        <ol className="mx-auto mt-10 max-w-4xl space-y-5">
          {experiences.items.map((item, i) => (
            <li key={item.title} className="reveal">
              <details open={i === 0} className="group rounded-3xl bg-white ring-1 ring-gb-plum/10 open:shadow-xl open:shadow-gb-plum/10">
                <summary className="p-6 sm:p-8">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-heading text-3xl font-bold text-gb-green-deep">{item.number}</span>
                    <span className="rounded-full bg-gb-lilac-50 px-3 py-1 text-xs font-bold tracking-wider text-gb-plum uppercase">
                      {item.duration}
                    </span>
                    <span className="ml-auto inline-flex items-center gap-1.5 text-sm font-bold text-gb-mauve">
                      {experiences.expandLabel}
                      <Icon name="chevronDown" className="size-4 transition-transform group-open:rotate-180" />
                    </span>
                  </div>

                  <h3 className="mt-3 font-heading text-2xl font-bold text-gb-plum sm:text-3xl">{item.title}</h3>
                  <p className="mt-2 text-lg text-gb-ink">{item.summary}</p>

                  <p className="mt-5 flex flex-col gap-1 rounded-2xl bg-gb-green/10 p-4 sm:flex-row sm:items-baseline sm:gap-3">
                    <span className="shrink-0 text-xs font-bold tracking-wider text-gb-green-deep uppercase">{experiences.outcomeLabel}</span>
                    <span className="font-bold text-gb-plum">{item.outcome}</span>
                  </p>
                </summary>

                <div className="space-y-6 border-t border-gb-plum/10 px-6 pt-6 pb-8 sm:px-8">
                  {item.blocks.map((block, index) => (
                    <Block key={index} block={block} />
                  ))}
                </div>
              </details>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

/** Steps separated by arrows, used for the pathway and for `flow` blocks. */
export function FlowRow({ steps, className = "", size = "sm" }: { steps: string[]; className?: string; size?: "sm" | "lg" }) {
  return (
    <ol className={`flex flex-wrap items-center gap-2 ${className}`}>
      {steps.map((step, i) => (
        // The arrow trails its chip, so a wrapped line never starts with an arrow
        <li key={step} className="flex items-center gap-2">
          <span
            className={`rounded-xl bg-gb-yellow-50 font-bold text-gb-plum ring-1 ring-gb-plum/10 ${
              size === "lg" ? "px-4 py-2.5 text-sm tracking-wider uppercase sm:text-base" : "px-3 py-2 text-sm"
            }`}
          >
            {step}
          </span>
          {i < steps.length - 1 && <Icon name="arrowRight" className={`${size === "lg" ? "size-5" : "size-4"} shrink-0 text-gb-mauve`} />}
        </li>
      ))}
    </ol>
  );
}

function BlockLabel({ children }: { children: string }) {
  return <p className="mb-2 text-xs font-bold tracking-wider text-gb-mauve uppercase">{children}</p>;
}

function Block({ block }: { block: ExperienceBlock }) {
  switch (block.type) {
    case "text":
      return (
        <div>
          {block.label && <BlockLabel>{block.label}</BlockLabel>}
          <p className="leading-relaxed text-gb-ink">{block.body}</p>
        </div>
      );

    case "list":
      return (
        <div>
          {block.label && <BlockLabel>{block.label}</BlockLabel>}
          <ul className="grid gap-2 sm:grid-cols-2">
            {block.items.map((entry) => (
              <li key={entry} className="flex gap-2.5 text-gb-ink">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gb-green" aria-hidden="true" />
                {entry}
              </li>
            ))}
          </ul>
        </div>
      );

    case "chips":
      return (
        <div>
          {block.label && <BlockLabel>{block.label}</BlockLabel>}
          <ul className="flex flex-wrap gap-2">
            {block.items.map((entry) => (
              <li key={entry} className="rounded-full bg-gb-lilac-50 px-3.5 py-1.5 text-sm font-bold text-gb-plum">
                {entry}
              </li>
            ))}
          </ul>
        </div>
      );

    case "flow":
      return (
        <div>
          {block.label && <BlockLabel>{block.label}</BlockLabel>}
          <FlowRow steps={block.steps} />
        </div>
      );

    case "quote":
      return (
        <figure className="rounded-2xl bg-gb-green-deep p-5 text-white sm:p-6">
          {block.label && <figcaption className="mb-2 text-xs font-bold tracking-wider text-white/80 uppercase">{block.label}</figcaption>}
          <blockquote className="font-heading text-lg leading-snug sm:text-xl">{block.body}</blockquote>
        </figure>
      );

    case "case":
      return (
        <div>
          {block.label && <BlockLabel>{block.label}</BlockLabel>}
          <div className="rounded-2xl bg-gb-lilac-50 p-5 sm:p-6">
            <p className="font-heading text-lg font-bold text-gb-plum">{block.title}</p>
            <dl className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {block.rows.map((row) => (
                <div key={row.label}>
                  <dt className="text-xs font-bold tracking-wider text-gb-mauve uppercase">{row.label}</dt>
                  <dd className="mt-0.5 font-bold text-gb-plum">{row.value}</dd>
                </div>
              ))}
            </dl>
            {block.note && <p className="mt-4 border-t border-gb-plum/10 pt-3 text-sm text-gb-ink">{block.note}</p>}
          </div>
        </div>
      );
  }
}
