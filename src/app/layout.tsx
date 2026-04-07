import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { Tiny5 } from "next/font/google";

const tiny = Tiny5({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-serif", // pick any name
});

export const metadata: Metadata = {
  metadataBase: new URL("https://abhishekdev.tech"),
  title: {
    default: "Abhishek Sonje | Full-Stack Developer",
    template: "%s | Abhishek Sonje",
  },
  description:
    "Portfolio of Abhishek Sonje, a Full-Stack Developer specializing in Next.js, React, TypeScript, and Node.js. Building scalable, production-ready web applications.",
  keywords: [
    "Abhishek Sonje",
    "Full-Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Web Development",
    "Software Engineer",
    "India",
  ],
  authors: [{ name: "Abhishek Sonje", url: "https://abhishekdev.tech" }],
  creator: "Abhishek Sonje",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abhishekdev.tech",
    title: "Abhishek Sonje | Full-Stack Developer",
    description:
      "Portfolio of Abhishek Sonje, a Full-Stack Developer specializing in Next.js, React, TypeScript, and Node.js.",
    siteName: "Abhishek Sonje Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Abhishek Sonje | Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Abhi_SDev",
    creator: "@Abhi_SDev",
    title: "Abhishek Sonje | Full-Stack Developer",
    description:
      "Portfolio of Abhishek Sonje, a Full-Stack Developer specializing in Next.js, React, TypeScript, and Node.js.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/logo.svg", type: "image/svg+xml" }, 
      { url: "/logo.png" }, // fallback for older browsers
    ],
    shortcut: "/logo.png",
    apple: "/logo.png", // iOS doesn't support SVG
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={tiny.variable}>
      <body className="min-h-screen flex flex-col antialiased">
        <ThemeProvider>
          <Navbar />
          <main className="flex-grow flex flex-col pt-14">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
