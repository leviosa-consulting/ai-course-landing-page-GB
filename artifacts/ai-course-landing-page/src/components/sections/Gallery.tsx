import { course } from "@/content/course";
import { Container, Photo, SectionHeading } from "../ui";

export function Gallery() {
  const { gallery } = course;

  return (
    <section aria-labelledby="gallery-heading" className="overflow-hidden bg-white py-16 sm:py-24">
      <Container>
        <SectionHeading id="gallery-heading" title={gallery.heading} subtitle={gallery.subheading} />

        {/* Swipeable row on mobile, mosaic grid from tablet up */}
        <ul className="no-scrollbar -mx-5 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 sm:-mx-8 sm:px-8 md:mx-0 md:grid md:auto-rows-[220px] md:grid-cols-4 md:overflow-visible md:px-0 lg:auto-rows-[250px]">
          {gallery.images.map((image, i) => (
            <li
              key={i}
              className="relative aspect-[4/3] w-[80%] shrink-0 snap-start overflow-hidden rounded-2xl sm:w-[55%] md:aspect-auto md:w-auto md:first:col-span-2 md:first:row-span-2"
            >
              <Photo
                image={image}
                sizes={i === 0 ? "(min-width: 768px) 50vw, 80vw" : "(min-width: 768px) 25vw, 80vw"}
                className="transition-transform duration-500 hover:scale-105"
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
