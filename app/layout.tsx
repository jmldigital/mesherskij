import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"], weight: ["300", "400", "500", "600"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  title: "Meshchersky 1 — Videoguide",
  description: "Video guide to a private home complex with hotel service in Meshchersky Park. Nature at arm's length.",
  openGraph: { title: "Meshchersky 1", description: "A home among pines with hotel service", images: ["/hero-bg.jpg"], type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`} suppressHydrationWarning>
      <body style={{ fontFamily: "var(--font-inter), Inter, system-ui, sans-serif" }}>{children}</body>
    </html>
  );
}
