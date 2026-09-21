import { course } from "@/content/course";
import { Container } from "../ui";

/** The band under the first screen: one line of positioning plus the functions we work with. */
export function AudienceStrip() {
  const { audienceStrip } = course;

  return (
    <section aria-labelledby="audience-strip-heading" className="bg-gb-plum py-10 sm:py-12">
      <Container className="text-center">
        <h2 id="audience-strip-heading" className="font-heading text-xl text-balance text-white sm:text-2xl">
          {audienceStrip.heading}
        </h2>
        <ul className="mt-5 flex flex-wrap justify-center gap-2">
          {audienceStrip.items.map((item) => (
            <li key={item} className="rounded-full bg-white/10 px-4 py-1.5 text-sm font-bold text-gb-lilac sm:text-base">
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
