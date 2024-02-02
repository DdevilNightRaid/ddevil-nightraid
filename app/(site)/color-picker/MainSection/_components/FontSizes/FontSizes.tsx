"use client"
import { DM_Sans, Inter, Open_Sans, Space_Grotesk, Work_Sans } from "next/font/google";
import { useState } from "react";
import FontDisplay from "./FontDisplay";
import Nav from './Nav';

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
const FontSizes = () => {
  const [fontFamily, setFontFamily] = useState("inter")
  return (
    <section className="flex flex-col gap-7">
      <header>
        <Nav setFontFamily={setFontFamily}/>
      </header>
      {
        fontFamily === "inter" && (
          <main className={`${inter.className}`}>
            <FontDisplay />
          </main>
        )
      }
      {
        fontFamily === "spaceGrotesk" && (
          <main className={`${spaceGrotesk.className}`}>
            <FontDisplay />
          </main>
        )
      }
      {
        fontFamily === "workSans" && (
          <main className={`${workSans.className}`}>
            <FontDisplay />
          </main>
        )
      }
      {
        fontFamily === "dmSans" && (
          <main className={`${dmSans.className}`}>
            <FontDisplay />
          </main>
        )
      }
      {
        fontFamily === "openSans" && (
          <main className={`${openSans.className}`}>
            <FontDisplay />
          </main>
        )
      }
    </section>
  )
}

export default FontSizes