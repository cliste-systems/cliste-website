import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { ScrollToTop } from "@/components/ScrollToTop";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://clistesystems.ie";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Cliste Systems | AI Voice Engineers",
    template: "%s | Cliste Systems",
  },
  description:
    "Ireland's AI voice engineers. We build hyper-realistic Irish voice agents, natural, local, Donegal-based.",
  keywords: [
    "AI voice",
    "voice AI",
    "Irish voice agent",
    "phone automation",
    "Donegal",
    "Ireland",
    "voice automation",
    "receptionist AI",
    "Cliste Systems",
  ],
  authors: [{ name: "Cliste Systems", url: siteUrl }],
  creator: "Cliste Systems",
  publisher: "Cliste Systems",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: siteUrl,
    siteName: "Cliste Systems",
    title: "Cliste Systems | AI Voice Engineers",
    description:
      "Ireland's AI voice engineers. Hyper-realistic Irish voice agents for 24/7 phone automation. Donegal-based.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cliste Systems - AI Voice Engineers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cliste Systems | AI Voice Engineers",
    description:
      "Ireland's AI voice engineers. Hyper-realistic Irish voice agents, 24/7. Donegal-based.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: { canonical: siteUrl },
  category: "technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a",
};

function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Cliste Systems",
    url: siteUrl,
    description:
      "Ireland's AI voice engineers. We build hyper-realistic Irish voice agents for 24/7 phone automation. Donegal-based.",
    email: "brendan@clistesystems.ie",
    address: {
      "@type": "PostalAddress",
      addressRegion: "Donegal",
      addressCountry: "IE",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "brendan@clistesystems.ie",
      contactType: "sales",
      areaServed: "IE",
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Cliste Systems",
    url: siteUrl,
    description: "Ireland's AI voice engineers. Hyper-realistic Irish voice agents for 24/7 phone automation. Donegal-based.",
    publisher: { "@id": `${siteUrl}#organization` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){if(!window.location.hash){history.scrollRestoration='manual';window.scrollTo(0,0);}})();`,
          }}
        />
      </head>
      <body
        className={`${inter.variable} bg-white text-slate-600 antialiased selection:bg-indigo-100 selection:text-indigo-900 font-sans`}
      >
        <JsonLd />
        <ScrollToTop />
        <Nav />
        <PageTransition>{children}</PageTransition>
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
