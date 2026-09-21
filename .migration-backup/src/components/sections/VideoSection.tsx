import { course } from "@/content/course";
import { Container, SectionHeading } from "../ui";
import { YouTubeFacade } from "../YouTubeFacade";

export function VideoSection() {
  const { video } = course;

  return (
    <section id="video" aria-labelledby="video-heading" className="bg-gb-yellow-50 py-16 sm:py-24">
      <Container>
        <SectionHeading id="video-heading" title={video.heading} subtitle={video.subheading} />

        <div className="relative mx-auto mt-12 max-w-4xl">
          <div className="absolute -inset-3 -rotate-1 rounded-[34px] bg-gb-yellow sm:-inset-4" aria-hidden="true" />
          <div className="relative aspect-video overflow-hidden rounded-3xl bg-gb-plum shadow-2xl shadow-gb-plum/25">
            <YouTubeFacade url={video.youtubeUrl} poster={video.poster} title={video.title} location="video" />
          </div>
        </div>
      </Container>
    </section>
  );
}
