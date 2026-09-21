import { course } from "@/content/course";
import { emphasis } from "@/lib/emphasis";
import { Icon } from "../Icon";
import { CheckItem, Container } from "../ui";
import { WhatsAppButton } from "../WhatsAppButton";

export function TeamEnquiry() {
  const { team, email } = course;

  return (
    <section aria-labelledby="team-heading" className="bg-gb-plum py-16 sm:py-20">
      <Container className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
        <div>
          <p className="text-sm font-bold tracking-wider text-gb-yellow uppercase">{team.eyebrow}</p>
          <h2 id="team-heading" className="mt-3 font-heading text-[32px] leading-tight text-balance text-white sm:text-4xl lg:text-[44px]">
            {emphasis(team.heading)}
          </h2>
          <p className="mt-4 text-lg text-gb-lilac">{team.text}</p>
          <ul className="mt-7 grid gap-3 text-white sm:grid-cols-2">
            {team.points.map((point) => (
              <CheckItem key={point} tone="yellow">
                {point}
              </CheckItem>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl bg-white/5 p-8 text-center ring-1 ring-white/10">
          <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-gb-yellow/15 text-gb-yellow">
            <Icon name="users" className="size-7" />
          </span>
          <p className="mt-4 text-lg text-white">Tell us about your team. We&apos;ll suggest a format that fits.</p>
          <WhatsAppButton kind="team" location="team" variant="yellow" size="lg" className="mt-6 w-full">
            {team.cta}
          </WhatsAppButton>
          <p className="mt-4 text-sm text-gb-lilac">
            or email{" "}
            <a
              href={`mailto:${email.address}?subject=${encodeURIComponent(email.subjects.general)}`}
              className="font-bold text-white underline-offset-4 hover:underline"
            >
              {email.address}
            </a>
          </p>
        </div>
      </Container>
    </section>
  );
}
