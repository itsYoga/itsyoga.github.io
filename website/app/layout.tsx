import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Instrument_Serif } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import CustomCursor from "@/components/CustomCursor";
import FluidBackground from "@/components/FluidBackground";

// Editorial display font - elegant serif for headlines
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const lineSeedSans = localFont({
  src: [
    {
      path: "../public/fonts/line-seed-sans-thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/line-seed-sans-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/line-seed-sans-bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/line-seed-sans-extrabold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/line-seed-sans-heavy.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-line-seed",
  display: "swap",
});

const siteUrl = "https://yujialiang.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "YuJia Liang | Software Engineer & AI Enthusiast",
    template: "%s | YuJia Liang",
  },
  description: "Computer Science Student | AI Enthusiast | Full-Stack Developer | Photographer. Passionate about technology, creativity, and capturing moments through code and photography.",
  keywords: ["Software Engineer", "AI", "Machine Learning", "Full-Stack Developer", "React", "TypeScript", "Python", "Photography"],
  authors: [{ name: "YuJia Liang" }],
  creator: "YuJia Liang",
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/icon.png", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "YuJia Liang",
    title: "YuJia Liang | Software Engineer & AI Enthusiast",
    description: "Computer Science Student | AI Enthusiast | Full-Stack Developer | Photographer. Passionate about technology, creativity, and capturing moments through code and photography.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "YuJia Liang - Software Engineer & AI Enthusiast",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YuJia Liang | Software Engineer & AI Enthusiast",
    description: "Computer Science Student | AI Enthusiast | Full-Stack Developer | Photographer.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a2e" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${lineSeedSans.variable} ${instrumentSerif.variable} font-sans antialiased font-semibold`}>
        <CustomCursor />
        <FluidBackground />
        <Navigation />
        <main className="pt-16 md:pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
