import Image from "next/image";
import { course } from "@/content/course";
import { emphasis } from "@/lib/emphasis";
import { Container } from "../ui";

export function About() {
  const { about } = course;

  return (
    <section aria-labelledby="about-heading" className="bg-gb-lilac-50 py-16 sm:py-20">
      <Container className="grid items-center gap-10 md:grid-cols-[auto_1fr] md:gap-16">
        <Image src="/brand/Bam-for_footer.png" alt="" width={284} height={264} className="mx-auto w-32 animate-bubble md:w-44" />
        <div>
          <p className="text-sm font-bold tracking-wider text-gb-green-deep uppercase">{about.eyebrow}</p>
          <h2 id="about-heading" className="mt-3 font-heading text-[30px] leading-tight text-balance text-gb-plum sm:text-4xl">
            {emphasis(about.heading)}
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-pretty text-gb-ink">{about.text}</p>
        </div>
      </Container>
    </section>
  );
}
