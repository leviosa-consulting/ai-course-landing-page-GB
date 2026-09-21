import { course } from "@/content/course";
import { Container, SectionHeading } from "../ui";

export function Outcomes() {
  const { outcomes } = course;

  return (
    <section id="outcomes" aria-labelledby="outcomes-heading" className="bg-white py-16 sm:py-24">
      <Container>
        <SectionHeading id="outcomes-heading" title={outcomes.heading} subtitle={outcomes.subheading} />

        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {outcomes.items.map((item, i) => (
            <li
              key={item.title}
              className="reveal rounded-3xl border border-gb-plum/10 p-7 transition duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-xl hover:shadow-gb-plum/10"
            >
              <span className="inline-block rounded-full bg-gb-green/15 px-3 py-1 font-heading text-sm font-bold text-gb-green-deep">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-heading text-xl font-bold text-gb-plum">{item.title}</h3>
              <p className="mt-2 leading-relaxed text-gb-ink">{item.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
