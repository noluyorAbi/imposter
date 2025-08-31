import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Imposter Word Game",
  description:
    "A social deduction word game where players must identify the imposter among them. Play in English, German, or Turkish with 15+ word categories.",
  keywords: [
    "imposter",
    "word game",
    "social deduction",
    "party game",
    "multiplayer",
    "puzzle",
    "strategy",
  ],
  authors: [{ name: "Imposter Game Team" }],
  creator: "Imposter Game Team",
  publisher: "Imposter Game Team",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://imposter.adatepe.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://imposter.adatepe.dev",
    siteName: "Imposter Word Game",
    title: "Imposter Word Game - Social Deduction Word Game",
    description:
      "A social deduction word game where players must identify the imposter among them. Play in English, German, or Turkish with 15+ word categories.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Imposter Word Game - Social Deduction Word Game",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Imposter Word Game - Social Deduction Word Game",
    description:
      "A social deduction word game where players must identify the imposter among them. Play in English, German, or Turkish with 15+ word categories.",
    images: ["/og-image.png"],
    creator: "@impostergame",
  },
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
  verification: {
    google: "your-google-verification-code",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  manifest: "/manifest.json",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a1a" },
  ],
  colorScheme: "dark light",
  category: "game",
  classification: "Entertainment",
  other: {
    "msapplication-TileColor": "#1a1a1a",
    "msapplication-config": "/browserconfig.xml",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
