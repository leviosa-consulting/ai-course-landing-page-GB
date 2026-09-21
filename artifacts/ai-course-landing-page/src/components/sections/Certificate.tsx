import Image from "@/components/Image";
import { course } from "@/content/course";
import { Icon } from "../Icon";
import { CheckItem, Container, SectionHeading } from "../ui";

export function Certificate() {
  const { certificate } = course;

  return (
    <section aria-labelledby="certificate-heading" className="overflow-hidden bg-gb-yellow-50 py-16 sm:py-24">
      <Container className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            id="certificate-heading"
            eyebrow={certificate.eyebrow}
            title={certificate.heading}
            subtitle={certificate.text}
            align="left"
          />
          <ul className="mt-7 space-y-3 text-lg text-gb-plum">
            {certificate.points.map((point) => (
              <CheckItem key={point}>{point}</CheckItem>
            ))}
          </ul>
        </div>

        <div className="relative mx-2 sm:mx-6">
          <div className="absolute -inset-3 rotate-2 rounded-[28px] bg-gb-purple sm:-inset-5" aria-hidden="true" />
          <div className="@container relative aspect-[1.414] overflow-hidden rounded-2xl bg-white shadow-2xl">
            {certificate.image.src ? (
              <Image src={certificate.image.src} alt={certificate.image.alt} fill sizes="(min-width: 1024px) 600px, 100vw" className="object-contain" />
            ) : (
              <SampleCertificate alt={certificate.image.alt} />
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

/** A branded stand-in shown until the real certificate image is added. Scales with its container. */
function SampleCertificate({ alt }: { alt: string }) {
  return (
    <div role="img" aria-label={alt} className="absolute inset-0 p-[3.5cqw]">
      <div className="flex h-full flex-col items-center justify-between rounded-[1cqw] border-[0.5cqw] border-gb-purple p-[4cqw] text-center outline-[0.25cqw] -outline-offset-[1.6cqw] outline-gb-yellow outline-solid">
        <Image src="/brand/GB-logo-yellow-bg.png" alt="" width={518} height={209} className="w-[20cqw]" />

        <div>
          <p className="text-[2.1cqw] font-bold tracking-[0.3em] text-gb-mauve uppercase">Certificate of completion</p>
          <p className="mt-[1.5cqw] text-[1.8cqw] text-gb-ink">This certifies that</p>
          <p className="font-heading text-[6cqw] leading-tight font-bold text-gb-plum">Your Name</p>
          <p className="text-[1.8cqw] text-gb-ink">has successfully completed</p>
          <p className="mt-[0.5cqw] font-heading text-[3cqw] font-bold text-gb-purple">{course.pricing.planName}</p>
        </div>

        <div className="flex w-full items-end justify-between text-[1.6cqw] text-gb-ink">
          <div className="w-[26%] text-left">
            <div className="mb-[0.8cqw] h-px bg-gb-plum/40" />
            Lead facilitator
          </div>
          <span className="grid size-[10cqw] place-items-center rounded-full bg-gb-green-deep text-white ring-[0.6cqw] ring-gb-green/30">
            <Icon name="award" className="size-[5.5cqw]" />
          </span>
          <div className="w-[26%] text-right">
            <div className="mb-[0.8cqw] h-px bg-gb-plum/40" />
            ID: GB-AI-0000
          </div>
        </div>
      </div>
      <span className="absolute top-[5cqw] -right-[9cqw] w-[36cqw] rotate-45 bg-gb-yellow py-[0.8cqw] text-center text-[1.8cqw] font-bold tracking-[0.3em] text-gb-plum uppercase">
        Sample
      </span>
    </div>
  );
}
