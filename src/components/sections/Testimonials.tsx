import Image from "next/image";
import { course } from "@/content/course";
import { Icon } from "../Icon";
import { Container, SectionHeading, StatRow } from "../ui";
import { YouTubeFacade } from "../YouTubeFacade";

function initials(name: string) {
  return name
    .replace(/[^\p{L}\s]/gu, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join("");
}

function LinkedInPostLink({ url, name, light = false }: { url?: string; name: string; light?: boolean }) {
  if (!url) return null;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Read ${name}'s post on LinkedIn`}
      className={`ml-auto grid size-9 shrink-0 place-items-center rounded-full transition-colors ${light ? "bg-white/15 text-white hover:bg-white/25" : "bg-white text-gb-purple ring-1 ring-gb-plum/10 hover:bg-gb-purple hover:text-white"}`}
    >
      <Icon name="linkedin" className="size-4" />
    </a>
  );
}

export function Testimonials() {
  const { testimonials } = course;
  const { featured } = testimonials;

  return (
    <section id="reviews" aria-labelledby="reviews-heading" className="bg-white py-16 sm:py-24">
      <Container>
        <SectionHeading id="reviews-heading" title={testimonials.heading} subtitle={testimonials.subheading} />
        <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-linear-to-r from-gb-green to-gb-green-deep" aria-hidden="true" />

        <StatRow stats={testimonials.stats} className="mt-12" />

        <figure className="relative mx-auto mt-14 max-w-4xl rounded-3xl bg-gb-green-deep px-7 py-10 text-white sm:px-14 sm:py-14 lg:pl-40">
          <Image
            src="/brand/Bam-for_footer.png"
            alt=""
            width={284}
            height={264}
            className="absolute bottom-8 -left-12 hidden w-40 animate-bubble lg:block"
          />
          <Icon name="quote" className="size-10 text-white/30" />
          <blockquote className="mt-4 font-heading text-xl leading-snug sm:text-2xl">{featured.quote}</blockquote>
          <figcaption className="mt-6 flex items-center gap-4">
            <span>
              <span className="block font-bold">{featured.name}</span>
              <span className="text-sm">{featured.role}</span>
            </span>
            <LinkedInPostLink url={featured.linkedinUrl} name={featured.name} light />
          </figcaption>
        </figure>

        <ul className="mt-8 grid gap-5 md:grid-cols-3">
          {testimonials.items.map((item, i) => (
            <li key={i} className="reveal">
              <figure className="flex h-full flex-col rounded-3xl bg-gb-lilac-50 p-6 sm:p-7">
                {item.youtubeUrl && (
                  <div className="relative mb-5 aspect-video overflow-hidden rounded-xl bg-gb-plum">
                    <YouTubeFacade
                      url={item.youtubeUrl}
                      title={`Testimonial from ${item.name}`}
                      location="testimonial"
                      sizes="(min-width: 768px) 33vw, 100vw"
                    />
                  </div>
                )}
                <blockquote className="flex-1 leading-relaxed text-gb-plum">{item.quote}</blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-gb-purple text-sm font-bold text-white" aria-hidden="true">
                    {initials(item.name)}
                  </span>
                  <span>
                    <span className="block font-bold text-gb-plum">{item.name}</span>
                    <span className="text-sm text-gb-ink">{item.role}</span>
                  </span>
                  <LinkedInPostLink url={item.linkedinUrl} name={item.name} />
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
