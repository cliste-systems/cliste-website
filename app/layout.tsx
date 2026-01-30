import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

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
    "Replace the busy signal with revenue. Irish AI engineering firm building Digital Employees—24/7 voice agents that answer calls, book appointments, and collect payments. LiveKit & ElevenLabs. EU-hosted, GDPR compliant. Donegal.",
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
      "Replace the busy signal with revenue. Digital Employees for Irish service businesses—24/7 voice, bookings, payments. EU-hosted.",
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
      "Replace the busy signal with revenue. Digital Employees—24/7 voice agents for Irish businesses.",
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
      "Irish AI engineering firm specializing in intelligent voice infrastructure for service-based businesses. Digital Employees that answer calls, book appointments, and collect payments 24/7.",
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
    description: "Replace the busy signal with revenue. AI voice engineers for Irish businesses.",
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
      <body
        className={`${inter.variable} bg-white text-slate-600 antialiased selection:bg-indigo-100 selection:text-indigo-900 font-sans`}
      >
        <JsonLd />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
