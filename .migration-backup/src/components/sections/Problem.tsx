import { course } from "@/content/course";
import { CheckItem, Container, SectionHeading } from "../ui";

/** The organisational gap: AI access alone doesn't change how work gets done. */
export function Problem() {
  const { problem } = course;

  return (
    <section id="why" aria-labelledby="problem-heading" className="bg-white py-16 sm:py-24">
      <Container className="max-w-4xl">
        <SectionHeading id="problem-heading" title={problem.heading} subtitle={problem.text} />

        <div className="mt-10 rounded-3xl bg-gb-lilac-50 p-7 sm:p-9">
          <p className="font-heading text-lg font-bold text-gb-plum">{problem.listIntro}</p>
          <ul className="mt-5 grid gap-3.5 text-lg text-gb-plum sm:grid-cols-2">
            {problem.points.map((point) => (
              <CheckItem key={point}>{point}</CheckItem>
            ))}
          </ul>
        </div>

        <p className="reveal mt-8 border-l-4 border-gb-green pl-5 font-heading text-xl leading-snug text-balance text-gb-plum sm:text-2xl">
          {problem.closing}
        </p>
      </Container>
    </section>
  );
}
