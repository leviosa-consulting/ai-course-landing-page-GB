import { course } from "@/content/course";
import { CheckItem, Container, SectionHeading } from "../ui";

/** Organisational conditions, not job-title personas. */
export function Audience() {
  const { audience } = course;

  return (
    <section aria-labelledby="audience-heading" className="bg-gb-lilac-50 py-16 sm:py-24">
      <Container className="max-w-4xl">
        <SectionHeading id="audience-heading" title={audience.heading} subtitle={audience.intro} />

        <ul className="reveal mt-10 grid gap-4 rounded-3xl bg-white p-7 text-lg text-gb-plum shadow-sm ring-1 ring-gb-plum/10 sm:grid-cols-2 sm:p-9">
          {audience.conditions.map((condition) => (
            <CheckItem key={condition}>{condition}</CheckItem>
          ))}
        </ul>
      </Container>
    </section>
  );
}
