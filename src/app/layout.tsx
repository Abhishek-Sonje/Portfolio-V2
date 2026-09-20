import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { Lora, Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { InteractionSounds } from "@/components/providers/interaction-sounds";
import { SOCIAL_LINKS, STACK_ITEMS } from "@/lib/data";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL } from "@/lib/seo";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-lora",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: `${SITE_NAME} Portfolio`,
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    SITE_NAME,
    "Full-Stack Developer",
    "Software Engineer",
    "Web Developer",
    "Developer Tools",
    "Backend Systems",
    ...STACK_ITEMS.map((item) => item.name),
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "technology",
  classification: "Personal portfolio",
  referrer: "origin-when-cross-origin",
  alternates: {
    canonical: "/",
    types: {
      "text/markdown": [
        { url: "/llms.txt", title: `${SITE_NAME} AI content index` },
        { url: "/portfolio.md", title: `${SITE_NAME} portfolio in Markdown` },
      ],
    },
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: "/",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: `${SITE_NAME} Portfolio`,
    firstName: "Abhishek",
    lastName: "Sonje",
    username: "Abhishek-Sonje",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: `${SITE_NAME}, Full-Stack Developer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Abhi_SDev",
    creator: "@Abhi_SDev",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [{ url: "/og-image.png", alt: SITE_TITLE }],
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
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/logo.svg", type: "image/svg+xml" },
      { url: "/logo.png", type: "image/png" },
    ],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#171717" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${lora.variable} ${geist.variable}`}
    >
      <head>
        {SOCIAL_LINKS.map((social) => (
          <link key={social.href} rel="me" href={social.href} />
        ))}
      </head>
      <body className="flex min-h-screen flex-col antialiased">
        <ThemeProvider>
          <InteractionSounds />
          <a
            href="#main-content"
            className="fixed left-4 top-4 z-50 -translate-y-24 rounded-lg bg-primary px-4 py-3 text-primary-foreground focus:translate-y-0"
          >
            Skip to content
          </a>
          <Analytics />
          <div className="mx-auto flex min-h-screen w-full max-w-3xl flex-col border-x border-border/70">
            <Navbar />
            <main
              id="main-content"
              tabIndex={-1}
              className="flex-grow outline-none"
            >
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
