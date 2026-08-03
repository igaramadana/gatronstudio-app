import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata, Viewport } from "next";
import { Quantico } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";

import AppProviders from "@/components/providers/AppProviders";
import { siteConfig } from "@/lib/site";

const quantico = Quantico({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-quantico",
  display: "swap",
});

const googleVerification =
  process.env.GOOGLE_SITE_VERIFICATION?.trim() || undefined;

const googleAnalyticsId = "G-PVJL7HP7C6";

const validGoogleVerification = googleVerification?.startsWith("qUBaD_")
  ? undefined
  : googleVerification;

const validGoogleAnalyticsId = googleAnalyticsId?.startsWith("G-")
  ? googleAnalyticsId
  : undefined;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [
    {
      name: siteConfig.author.name,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.author.name,
  publisher: siteConfig.name,
  category: "technology",
  keywords: [
    "Iga Ramadana Sahputra",
    "Gatrons Studio",
    "Web Developer Malang",
    "FiveM Developer Indonesia",
    "Next.js Developer",
    "React Developer",
    "FiveM UI Developer",
    "Qbox Developer",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — ${siteConfig.author.jobTitle}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: validGoogleVerification
    ? {
        google: validGoogleVerification,
      }
    : undefined,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
  themeColor: "#050505",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={siteConfig.language} suppressHydrationWarning>
      <body
        className={`${quantico.variable} bg-[#050505] text-white antialiased`}
      >
        <AppProviders>{children}</AppProviders>
      </body>

      {validGoogleAnalyticsId ? (
        <GoogleAnalytics gaId={validGoogleAnalyticsId} />
      ) : null}
    </html>
  );
}
