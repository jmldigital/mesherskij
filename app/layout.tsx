import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Мещерский 1 — Видеогид",
  description: "Видео-гид по комплексу частных домов с гостиничным сервисом в Мещерском парке. Природа без дистанции.",
  openGraph: {
    title: "Мещерский 1",
    description: "Дом в соснах с гостиничным сервисом",
    images: ["/hero-bg.jpg"],
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={`${inter.variable} antialiased`} suppressHydrationWarning>
      <body style={{ fontFamily: "var(--font-inter), Inter, system-ui, sans-serif" }}>{children}</body>
    </html>
  );
}
