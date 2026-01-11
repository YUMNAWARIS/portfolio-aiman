import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import ThemeClientProvider from "@/theme/ThemeClientProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Aiman | Portfolio",
  description: "Professional portfolio built with Next.js and Material UI",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Aiman | Portfolio",
    description: "Professional portfolio built with Next.js and Material UI",
    url: "https://example.com",
    siteName: "Yumna Portfolio",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeClientProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeClientProvider>
      </body>
    </html>
  );
}


