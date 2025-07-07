import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anisa Rafiee - Communication Professional",
  description: "Enthusiastic Communication major at UCF, specializing in digital marketing, social media strategy, and event promotion. Seeking opportunities in advertising, entertainment, and technology.",
  keywords: ["Anisa Rafiee", "Communication", "Marketing", "Social Media", "UCF", "Digital Strategy", "Event Promotion"],
  authors: [{ name: "Anisa Rafiee" }],
  creator: "Anisa Rafiee",
  openGraph: {
    title: "Anisa Rafiee - Communication Professional",
    description: "Enthusiastic Communication major at UCF, specializing in digital marketing, social media strategy, and event promotion.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-stone-50 text-stone-900`}
      >
        {children}
      </body>
    </html>
  );
}
