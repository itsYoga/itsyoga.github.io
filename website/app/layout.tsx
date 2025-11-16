import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "YuJia",
  description: "Computer Science Student | AI Enthusiast | Full-Stack Developer | Photographer. Passionate about technology, creativity, and capturing moments through code and photography.",
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/icon.png', type: 'image/png' },
    ],
  },
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
