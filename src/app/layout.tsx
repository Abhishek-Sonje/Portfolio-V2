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
  title: "Abhishek Sonje | Portfolio",
  description: "Frontend-focused Full-Stack Developer",
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
          <main className="flex-grow flex flex-col pt-14">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
