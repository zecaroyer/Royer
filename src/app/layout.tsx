import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { isAdminSession } from "@/lib/adminAuth";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// No production domain exists yet — metadataBase is intentionally left unset.
// Set it (and update the absolute image URLs below) once a real domain is live.
export const metadata: Metadata = {
  title: {
    default: "ROYER — Botanical Skincare, Portugal",
    template: "%s · ROYER",
  },
  description:
    "Technical and commercial draft for ROYER, a Portuguese cosmetics laboratory specialising in aloe vera, hemp seed oil and botanical skincare — compliance-first, EU Cosmetics Regulation (EC) 1223/2009 oriented.",
  applicationName: "ROYER",
  keywords: ["ROYER", "cosmetics Portugal", "aloe vera skincare", "botanical cosmetics", "hemp seed oil cosmetics"],
  authors: [{ name: "ROYER" }],
  openGraph: {
    type: "website",
    locale: "en_PT",
    siteName: "ROYER",
    title: "ROYER — Botanical Skincare, Portugal",
    description:
      "A premium botanical cosmetics laboratory project — aloe vera, hemp seed oil and selected botanicals. Cosmetics only. No medical claims.",
    images: ["/products/sku-01.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "ROYER — Botanical Skincare, Portugal",
    description: "A premium botanical cosmetics laboratory project — cosmetics only, compliance-first.",
    images: ["/products/sku-01.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a1330",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ROYER",
  description:
    "Premium botanical cosmetics laboratory project in Portugal — aloe vera, hemp seed oil, compliance-first under EU Regulation (EC) 1223/2009.",
  slogan: "Botanical Skincare, Portugal",
  areaServed: "EU",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isAdmin = await isAdminSession();
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-cream text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-gold focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-deep"
        >
          Skip to content
        </a>
        <NavBar isAdmin={isAdmin} />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer isAdmin={isAdmin} />
        <ScrollToTop />
      </body>
    </html>
  );
}
