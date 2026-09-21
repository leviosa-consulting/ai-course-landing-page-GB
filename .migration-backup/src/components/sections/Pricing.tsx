import { course } from "@/content/course";
import { CohortStatus } from "../CohortStatus";
import { Icon } from "../Icon";
import { CheckItem, Container, SectionHeading } from "../ui";
import { WhatsAppButton } from "../WhatsAppButton";

export function Pricing() {
  const { pricing, whatsapp } = course;

  return (
    <section id="enroll" aria-labelledby="enroll-heading" className="bg-gb-yellow py-16 sm:py-24">
      <Container className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div className="lg:col-start-2 lg:row-start-1 lg:self-end">
          <SectionHeading id="enroll-heading" title={pricing.heading} subtitle={pricing.subheading} align="left" />
        </div>

        <div className="relative rounded-[28px] bg-white p-7 shadow-2xl ring-1 shadow-gb-plum/20 ring-gb-plum/10 sm:p-10 lg:col-start-1 lg:row-span-2 lg:row-start-1">
          <p className="absolute -top-3.5 left-7 rounded-full bg-gb-plum px-4 py-1.5 text-xs font-bold tracking-wider text-gb-yellow uppercase sm:left-10">
            {pricing.badge}
          </p>
          {pricing.guaranteeStamp.length > 0 && (
            <p
              className="absolute -top-7 -right-3 grid size-22 rotate-12 place-items-center rounded-full bg-gb-green-deep text-center text-white shadow-xl ring-4 ring-white sm:-right-6 sm:size-26"
              aria-label={`Guarantee: ${pricing.guaranteeStamp.join(" ")}`}
            >
              <span className="leading-tight" aria-hidden="true">
                <Icon name="shield" className="mx-auto mb-0.5 size-5" />
                <span className="block font-heading text-sm font-bold sm:text-base">{pricing.guaranteeStamp[0]}</span>
                <span className="block text-[10px] font-bold tracking-wider uppercase sm:text-xs">{pricing.guaranteeStamp[1]}</span>
              </span>
            </p>
          )}
          <h3 className="pr-16 font-heading text-xl font-bold text-gb-plum sm:pr-20">{pricing.planName}</h3>

          <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="font-heading text-5xl font-bold text-gb-plum">{pricing.price}</span>
            {pricing.originalPrice && (
              <span className="text-xl text-gb-ink line-through">
                <span className="sr-only">Regular price </span>
                {pricing.originalPrice}
              </span>
            )}
            {pricing.discountLabel && (
              <span className="rounded-full bg-gb-green/15 px-2.5 py-1 text-xs font-bold text-gb-green-deep">{pricing.discountLabel}</span>
            )}
            <span className="w-full text-sm text-gb-ink">{pricing.priceNote}</span>
          </p>

          <div className="mt-6">
            <CohortStatus variant="panel" />
          </div>

          <ul className="mt-7 grid gap-x-6 gap-y-3 text-gb-plum sm:grid-cols-2">
            {pricing.includes.map((item) => (
              <CheckItem key={item}>{item}</CheckItem>
            ))}
          </ul>

          <WhatsAppButton location="pricing" size="lg" className="mt-8 w-full">
            {pricing.cta}
          </WhatsAppButton>
          <p className="mt-3 text-center text-sm text-gb-ink">{pricing.ctaNote}</p>
          <p className="mt-3 text-center">
            <WhatsAppButton kind="callback" location="pricing_callback" variant="link" size="bare" className="text-sm">
              {whatsapp.callbackCta}
            </WhatsAppButton>
          </p>

          {pricing.guarantee && (
            <p className="mt-6 flex gap-3 rounded-2xl border border-dashed border-gb-green/60 bg-gb-green/5 p-4 text-sm text-gb-plum">
              <Icon name="shield" className="size-6 shrink-0 text-gb-green-deep" />
              {pricing.guarantee}
            </p>
          )}
        </div>

        <div className="lg:col-start-2 lg:row-start-2">
          <h3 className="font-heading text-2xl font-bold text-balance text-gb-plum">{pricing.nextStepsTitle}</h3>
          <ol className="mt-6 space-y-6">
            {pricing.nextSteps.map((step, i) => (
              <li key={step.title} className="flex gap-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-gb-plum font-heading font-bold text-gb-yellow">
                  {i + 1}
                </span>
                <div>
                  <p className="font-bold text-gb-plum">{step.title}</p>
                  <p className="mt-1 text-gb-plum/85">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
