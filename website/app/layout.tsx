import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-inter",
});

const playfair_display = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-playfair",
});

const siteUrl = "https://itsyoga.github.io";

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
      <body className={`${inter.variable} ${playfair_display.variable} font-sans antialiased font-semibold`}>
        <Navigation />
        <main className="pt-16 md:pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
