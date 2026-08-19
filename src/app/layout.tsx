import type { Metadata } from "next";
import { Manrope, Fraunces } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BottomTabBar } from "@/components/BottomTabBar";
import { brand } from "@/lib/data/content";

/* UI + body — clean humanist sans. */
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

/* Display headings — warm, soft optical serif (Wedibox's editorial-warm feel). */
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Yanı Başımda — Düğün oturma planı, herkes yanı başında",
    template: "%s | Yanı Başımda",
  },
  description: brand.description,
  keywords: [
    "düğün oturma planı",
    "seating planner",
    "masa düzeni",
    "misafir listesi",
    "düğün planlama",
    "Yanı Başımda",
  ],
  openGraph: {
    type: "website",
    siteName: brand.name,
    title: "Yanı Başımda — En güzel gününde, herkes yanı başında",
    description: brand.description,
    locale: "tr_TR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${manrope.variable} ${fraunces.variable}`}>
      <body className="min-h-screen antialiased">
        <Header />
        <main className="pb-28 md:pb-32">{children}</main>
        <Footer />
        <BottomTabBar />
      </body>
    </html>
  );
}
