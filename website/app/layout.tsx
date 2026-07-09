import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "@/components/Navigation";
import CustomCursor from "@/components/CustomCursor";
import FluidBackground from "@/components/FluidBackground";

// LINE Seed Sans - clean, modern font
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
    default: "YuJia Liang | AI Engineer & Full-Stack Developer",
    template: "%s | YuJia Liang",
  },
  description: "AI Engineer & Full-Stack Developer building intelligent systems across web, mobile, and macOS — and capturing the world through photography.",
  keywords: ["AI Engineer", "Full-Stack Developer", "Machine Learning", "React", "TypeScript", "Python", "Swift", "Photography"],
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
    title: "YuJia Liang | AI Engineer & Full-Stack Developer",
    description: "Building intelligent systems across web, mobile, and macOS.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "YuJia Liang - AI Engineer & Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YuJia Liang | AI Engineer & Full-Stack Developer",
    description: "Building intelligent systems across web, mobile, and macOS.",
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
      <body className={`${lineSeedSans.variable} antialiased`} style={{ fontFamily: "var(--font-line-seed), system-ui, sans-serif" }}>
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
