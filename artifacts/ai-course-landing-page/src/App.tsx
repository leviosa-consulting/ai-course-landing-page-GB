import { type ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ErrorBoundary } from "@/components/error-boundary";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch, useLocation, Router as WouterRouter } from "wouter";

import { Analytics } from "@/components/Analytics";
import { ReviewBadge } from "@/components/ReviewBadge";
import { StickyCtas } from "@/components/StickyCtas";
import { About } from "@/components/sections/About";
import { Audience } from "@/components/sections/Audience";
import { AudienceStrip } from "@/components/sections/AudienceStrip";
import { Bonuses } from "@/components/sections/Bonuses";
import { Certificate } from "@/components/sections/Certificate";
import { Curriculum } from "@/components/sections/Curriculum";
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
import { Pricing } from "@/components/sections/Pricing";
import { TeamEnquiry } from "@/components/sections/TeamEnquiry";
import { Testimonials } from "@/components/sections/Testimonials";
import { VideoSection } from "@/components/sections/VideoSection";
import { course } from "@/content/course";
import type { SectionKey } from "@/content/types";
import { getHeroStatus, getSectionStatus, type ReviewStatus } from "@/lib/reviewStatus";

// Switch sections off in src/content/course.ts (the `sections` block).
const { sections } = course;

function Home() {
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
        <Section name="experiences">
          <Experiences />
        </Section>
        <Section name="video">
          <VideoSection />
        </Section>
        <Section name="logos">
          <LogoStrip />
        </Section>
        <Section name="audience">
          <Audience />
        </Section>
        <Section name="outcomes">
          <Outcomes />
        </Section>
        <Section name="curriculum">
          <Curriculum />
        </Section>
        <Section name="howItWorks">
          <HowItWorks />
        </Section>
        <Section name="gallery">
          <Gallery />
        </Section>
        <Section name="facilitators">
          <Facilitators />
        </Section>
        <Section name="testimonials">
          <Testimonials />
        </Section>
        <Section name="certificate">
          <Certificate />
        </Section>
        <Section name="bonuses">
          <Bonuses />
        </Section>
        <Section name="pricing">
          <Pricing />
        </Section>
        <Section name="pilot">
          <PilotInvitation />
        </Section>
        <Section name="team">
          <TeamEnquiry />
        </Section>
        <Section name="faq">
          <Faq />
        </Section>
        <Section name="about">
          <About />
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
    name: "AI at Work for Retail",
    serviceType: "Facilitated AI learning experiences for retail organisations",
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

const queryClient = new QueryClient();

function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900">404 Not Found</h1>
      </div>
    </div>
  );
}

function Router() {
  return (
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Analytics />
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
