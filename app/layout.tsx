import type { Metadata } from "next";
import localFont from "next/font/local";
import { Exo_2 } from "next/font/google";

import "./globals.css";
import { Footer, Header } from "./components";

// Local font setup
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const exo2 = Exo_2({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

// Metadata configuration
export const metadata: Metadata = {
  title: "Nolimit Design Studio",
  description: "Expand your imagination",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${exo2.className} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
