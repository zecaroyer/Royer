import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
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
  themeColor: "#0d2118",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-cream text-ink antialiased">
        <NavBar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
