import { course } from "@/content/course";
import { Icon } from "../Icon";
import { CheckItem, Container, Photo, SectionHeading, StatRow } from "../ui";

export function Facilitators() {
  const { facilitators } = course;

  return (
    <section aria-labelledby="facilitators-heading" className="bg-gb-lilac-50 py-16 sm:py-24">
      <Container>
        <SectionHeading id="facilitators-heading" title={facilitators.heading} subtitle={facilitators.subheading} />

        <StatRow stats={facilitators.stats} className="mt-10 rounded-3xl bg-white py-6 ring-1 ring-gb-plum/10" />

        <div className="mx-auto mt-8 grid max-w-5xl gap-6 md:grid-cols-2">
          {facilitators.people.map((person, i) => (
            <article key={i} className="reveal flex flex-col gap-6 rounded-3xl bg-white p-7 shadow-sm ring-1 ring-gb-plum/10 sm:flex-row sm:p-8">
              <div className="relative size-28 shrink-0 overflow-hidden rounded-2xl sm:size-32">
                <Photo image={person.photo} sizes="128px" />
              </div>
              <div>
                <h3 className="font-heading text-2xl font-bold text-gb-plum">{person.name}</h3>
                <p className="mt-1 text-sm font-bold text-gb-green-deep">{person.role}</p>
                <p className="mt-3 leading-relaxed text-gb-ink">{person.bio}</p>
                <ul className="mt-4 space-y-2 text-sm text-gb-plum">
                  {person.credentials.map((credential) => (
                    <CheckItem key={credential}>{credential}</CheckItem>
                  ))}
                </ul>
                {person.linkedin && (
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-gb-purple hover:underline"
                  >
                    <Icon name="linkedin" className="size-4" />
                    LinkedIn profile
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
