import { course } from "@/content/course";
import { emphasis } from "@/lib/emphasis";
import { HERO_CTA_ID } from "@/lib/ids";
import { Icon } from "../Icon";
import { MailButton } from "../MailButton";
import { Container, Photo } from "../ui";
import { WhatsAppButton } from "../WhatsAppButton";

export function Hero() {
  const { hero, email, sections } = course;

  return (
    <section id="hero" className="relative overflow-hidden bg-gb-yellow">
      <Container className="grid items-center gap-10 pt-10 pb-14 sm:pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-20">
        <div>
          {hero.eyebrow && (
            <p className="inline-flex items-center gap-2 rounded-full bg-gb-plum px-3.5 py-1.5 text-xs font-bold tracking-wider text-gb-yellow uppercase">
              <span className="size-2 animate-pulse rounded-full bg-gb-green" aria-hidden="true" />
              {hero.eyebrow}
            </p>
          )}

          <h1 className="mt-5 font-heading text-[34px] leading-[1.1] text-balance text-gb-plum sm:text-[42px] lg:text-[52px]">
            {emphasis(hero.headline, "block")}
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-gb-plum/85">{hero.lead}</p>

          {hero.facts.length > 0 && (
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="At a glance">
              {hero.facts.map((fact) => (
                <li
                  key={fact.label}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white/60 px-3 py-1.5 text-sm font-bold text-gb-plum ring-1 ring-gb-plum/10"
                >
                  <Icon name={fact.icon} className="size-4" />
                  {fact.label}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <WhatsAppButton id={HERO_CTA_ID} location="hero" size="lg">
              {hero.primaryCta}
            </WhatsAppButton>
            {sections.experiences && hero.secondaryCta && (
              <a
                href="#experiences"
                className="inline-flex items-center justify-center gap-2.5 rounded-full px-5 py-3.5 font-bold text-gb-plum ring-2 ring-inset ring-gb-plum/25 transition-colors hover:bg-white/60"
              >
                {hero.secondaryCta}
                <Icon name="arrowRight" className="size-5" />
              </a>
            )}
          </div>

          <p className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-gb-plum/80">
            {hero.ctaNote && <span>{hero.ctaNote}</span>}
            <span>Prefer email?</span>
            <MailButton subject="pilot" location="hero_email" variant="link" size="bare" className="text-sm">
              {email.address}
            </MailButton>
          </p>

          {hero.trustLine && (
            <p className="mt-6 flex items-center gap-3 border-t border-gb-plum/15 pt-5 text-sm font-bold text-gb-plum">
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-gb-plum text-gb-yellow">
                <Icon name="users" className="size-4" />
              </span>
              {hero.trustLine}
            </p>
          )}
        </div>

        <figure className="lg:justify-self-end">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] bg-white shadow-2xl ring-4 shadow-gb-plum/20 ring-white">
            <Photo image={hero.image} sizes="(min-width: 1024px) 560px, 100vw" preload />
          </div>
          {hero.imageCaption && <figcaption className="mt-3 max-w-md text-sm text-gb-plum/80">{hero.imageCaption}</figcaption>}
        </figure>
      </Container>
    </section>
  );
}
