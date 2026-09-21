import Image from "next/image";
import { course } from "@/content/course";
import { Container } from "../ui";

export function LogoStrip() {
  const { logos } = course;

  return (
    <section aria-labelledby="logos-heading" className="border-b border-gb-plum/10 bg-white py-10">
      <Container>
        <h2 id="logos-heading" className="text-center text-sm font-bold tracking-[0.14em] text-gb-mauve uppercase">
          {logos.heading}
        </h2>
        <ul className="mt-6 grid grid-cols-2 items-center gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {logos.items.map((logo, i) => (
            <li key={i} className="flex h-14 items-center justify-center">
              {logo.src ? (
                <div className="relative h-10 w-32">
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    fill
                    sizes="128px"
                    className="object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
                  />
                </div>
              ) : (
                <span className="rounded-lg border border-dashed border-gb-plum/20 px-4 py-2 text-sm text-gb-ink">{logo.name}</span>
              )}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
