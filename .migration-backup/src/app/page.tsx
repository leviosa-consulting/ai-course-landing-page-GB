import type { ReactNode } from "react";
import { ReviewBadge } from "@/components/ReviewBadge";
import { StickyCtas } from "@/components/StickyCtas";
import { About } from "@/components/sections/About";
import { Audience } from "@/components/sections/Audience";
import { AudienceStrip } from "@/components/sections/AudienceStrip";
import { Experiences } from "@/components/sections/Experiences";
import { Facilitators } from "@/components/sections/Facilitators";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";
import { Gallery } from "@/components/sections/Gallery";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { LogoStrip } from "@/components/sections/LogoStrip";
import { Navbar } from "@/components/sections/Navbar";
import { Outcomes } from "@/components/sections/Outcomes";
import { PilotInvitation } from "@/components/sections/PilotInvitation";
import { Problem } from "@/components/sections/Problem";
import { Testimonials } from "@/components/sections/Testimonials";
import { VideoSection } from "@/components/sections/VideoSection";
import { course } from "@/content/course";
import type { SectionKey } from "@/content/types";
import { getHeroStatus, getSectionStatus, type ReviewStatus } from "@/lib/reviewStatus";

// Switch sections off in src/content/course.ts (the `sections` block).
const { sections } = course;

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Reviewable status={getHeroStatus()}>
          <Hero />
        </Reviewable>
        <Section name="audienceStrip">
          <AudienceStrip />
        </Section>
        <Section name="problem">
          <Problem />
        </Section>
        <Section name="experiences">
          <Experiences />
        </Section>
        <Section name="howItWorks">
          <HowItWorks />
        </Section>
        <Section name="outcomes">
          <Outcomes />
        </Section>
        <Section name="audience">
          <Audience />
        </Section>

        {/* Proof and credibility */}
        <Section name="about">
          <About />
        </Section>
        <Section name="logos">
          <LogoStrip />
        </Section>
        <Section name="gallery">
          <Gallery />
        </Section>
        <Section name="video">
          <VideoSection />
        </Section>
        <Section name="testimonials">
          <Testimonials />
        </Section>
        <Section name="facilitators">
          <Facilitators />
        </Section>

        <Section name="pilot">
          <PilotInvitation />
        </Section>
        <Section name="faq">
          <Faq />
        </Section>
        <Section name="finalCta">
          <FinalCta />
        </Section>
      </main>
      <Footer />
      <StickyCtas />
      <StructuredData />
    </>
  );
}

/** Renders a section when its switch is on, with a "pending" label while review mode is on. */
function Section({ name, children }: { name: SectionKey; children: ReactNode }) {
  if (!sections[name]) return null;
  return (
    <Reviewable status={getSectionStatus(name)} switchName={name}>
      {children}
    </Reviewable>
  );
}

function Reviewable({ status, switchName, children }: { status: ReviewStatus | null; switchName?: string; children: ReactNode }) {
  if (!course.review.mode || !status) return children;
  return (
    <div className="relative">
      <ReviewBadge status={status} switchName={switchName} />
      {children}
    </div>
  );
}

/** Organisation, service and FAQ schema so search engines can show richer results. */
function StructuredData() {
  const { pricing, cohort, faq, meta, experiences, email } = course;

  const organisation = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Gentle Bamboo Solutions",
    description: meta.description,
    url: meta.siteUrl,
    email: email.address,
    sameAs: ["https://gentlebamboo.com", course.footer.linkedin],
  };

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Building Human Capability for an AI-First Future",
    serviceType: "Facilitated AI learning experiences, simulations and leadership sessions for organisations",
    provider: { "@type": "Organization", name: "Gentle Bamboo Solutions" },
    areaServed: "IN",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Experiences",
      itemListElement: experiences.items.map((item) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: item.title, description: item.summary },
      })),
    },
  };

  const publicCourse = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: pricing.planName,
    description: meta.description,
    provider: { "@type": "Organization", name: "Gentle Bamboo Solutions", sameAs: meta.siteUrl },
    hasCourseInstance: { "@type": "CourseInstance", courseMode: "Online", startDate: cohort.startDate },
    ...(pricing.priceValue !== null && {
      offers: { "@type": "Offer", category: "Paid", price: pricing.priceValue, priceCurrency: pricing.currency },
    }),
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  const data = [
    organisation,
    ...(sections.experiences ? [service] : []),
    ...(sections.pricing ? [publicCourse] : []),
    ...(sections.faq ? [faqPage] : []),
  ];

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
