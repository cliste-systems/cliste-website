import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Mona_Sans, Geist } from "next/font/google";
import "./globals.css";
import { PageTransition } from "@/components/PageTransition";
import { ScrollToTop } from "@/components/ScrollToTop";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { cn } from "@/lib/utils";
import { CLISTE_COMPANY } from "@/lib/company-details";
import { CLISTE_META_DESCRIPTION } from "@/lib/site-copy";
import { getSiteUrl } from "@/lib/site-url";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const monaSans = Mona_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Hello Cara | AI Voice Receptionist",
    template: "%s | Hello Cara",
  },
  description: CLISTE_META_DESCRIPTION,
  icons: {
    icon: [{ url: "/icon.png", type: "image/png", sizes: "512x512" }],
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
  },
  keywords: [
    "AI voice",
    "voice AI",
    "Irish voice agent",
    "phone automation",
    "Donegal",
    "Ireland",
    "voice automation",
    "receptionist AI",
    "Hello Cara",
    "Cliste Systems Limited",
  ],
  authors: [{ name: CLISTE_COMPANY.productName, url: siteUrl }],
  creator: CLISTE_COMPANY.legalName,
  publisher: CLISTE_COMPANY.legalName,
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: siteUrl,
    siteName: CLISTE_COMPANY.productName,
    title: "Hello Cara | AI Voice Receptionist",
    description: CLISTE_META_DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hello Cara - AI Voice Receptionist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hello Cara | AI Voice Receptionist",
    description: CLISTE_META_DESCRIPTION,
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
    name: CLISTE_COMPANY.productName,
    legalName: CLISTE_COMPANY.legalName,
    url: siteUrl,
    description: CLISTE_META_DESCRIPTION,
    email: CLISTE_COMPANY.helloEmail,
    address: {
      "@type": "PostalAddress",
      addressRegion: "Donegal",
      addressCountry: "IE",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: CLISTE_COMPANY.helloEmail,
      contactType: "sales",
      areaServed: "IE",
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: CLISTE_COMPANY.productName,
    url: siteUrl,
    description: CLISTE_META_DESCRIPTION,
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
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){if(!window.location.hash){history.scrollRestoration='manual';window.scrollTo(0,0);}})();`,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${monaSans.variable} ${jetbrainsMono.variable} bg-white text-slate-600 antialiased selection:bg-indigo-100 selection:text-indigo-900 font-sans`}
      >
        <JsonLd />
        <ScrollToTop />
        <PageTransition>{children}</PageTransition>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
