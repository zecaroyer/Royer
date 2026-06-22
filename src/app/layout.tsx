import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: {
    default: "Aloe Lab Portugal — Botanical Cosmetics Laboratory Project",
    template: "%s · Aloe Lab Portugal",
  },
  description:
    "Technical and commercial draft for a Portuguese cosmetics laboratory specialising in aloe vera, hemp seed oil and botanical skincare — compliance-first, EU Cosmetics Regulation (EC) 1223/2009 oriented.",
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
