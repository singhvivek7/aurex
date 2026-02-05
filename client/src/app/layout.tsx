import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap", // Faster font loading
  preload: true, // Preload fonts
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aurex.vivekkk.in"),
  title: "Aurex | The Future of Payments",
  description: "Accept, route, and move money with a modern payment platform built for reliability and growth.",
  keywords: ["payments", "payment gateway", "payment infrastructure", "fintech", "payment processing", "online payments", "digital payments"],
  authors: [{ name: "Aurex" }],
  creator: "Aurex",
  publisher: "Aurex",

  // Open Graph
  openGraph: {
    title: "Aurex | The Future of Payments",
    description: "Accept, route, and move money with a modern payment platform built for reliability and growth.",
    url: "https://aurex.vivekkk.in",
    siteName: "Aurex",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aurex - The Future of Payments",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Aurex | The Future of Payments",
    description: "Accept, route, and move money with a modern payment platform built for reliability and growth.",
    creator: "@v1v3k__",
    images: ["/twitter-image.jpg"],
  },

  // Additional metadata
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-background text-foreground selection:bg-primary/10 selection:text-primary`}>
        {children}
      </body>
    </html>
  );
}
