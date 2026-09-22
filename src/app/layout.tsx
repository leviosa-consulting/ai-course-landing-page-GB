import type { Metadata, Viewport } from "next";
import { Fira_Sans, Lato } from "next/font/google";
import { Analytics } from "@/components/Analytics";
import { course } from "@/content/course";
import "./globals.css";

// Same typefaces as gentlebamboo.com
const firaSans = Fira_Sans({
  variable: "--font-fira-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
});

// On Vercel, use the deployment's own domain so share images and canonical links work
// on preview links; fall back to the real site URL everywhere else.
const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : course.meta.siteUrl;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: course.meta.title,
  description: course.meta.description,
  alternates: { canonical: "/" },
  // The page is still a draft: keep it out of search results until review mode is switched off.
  robots: course.review.mode ? { index: false, follow: false } : undefined,
  openGraph: {
    title: course.meta.title,
    description: course.meta.description,
    siteName: "Gentle Bamboo Solutions",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: course.meta.title,
    description: course.meta.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#59265d",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${firaSans.variable} ${lato.variable} antialiased`}>
      <body className="font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
