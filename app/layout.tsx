import GoogleAnalytics from "@/components/GoogleAnalytics";
import { NextProvider } from "@/components/providers/NextProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Work_Sans } from "next/font/google";
import { Space_Grotesk } from "next/font/google";
import { DM_Sans } from "next/font/google";
import { Open_Sans } from "next/font/google";

import "./globals.css";

// Default Fit
const inter = Inter({
  subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext", "vietnamese", "greek", "greek-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

// Fun
const workSans = Work_Sans({
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

// Techy
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"]
});

// Personality Unknown
const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

// Old School
const openSans = Open_Sans({
  subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext", "vietnamese", "greek", "greek-ext", "hebrew", "math", "symbols"],
  weight: ["300", "400", "500", "600", "700", "800"]
});


export const metadata: Metadata = {
  title: "D~Devil | NightRaid",
  description: "My self D~Devil (Answeshan Sunar),",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        <NextProvider>
          {children}
        </NextProvider>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
