"use client"
import { DM_Sans, Inter, Open_Sans, Space_Grotesk, Work_Sans } from "next/font/google";
import { useState } from "react";
import FontDisplay from "./FontDisplay";
import Nav from './Nav';
import { Snippet } from "@nextui-org/react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Button } from "@/components/ui/button";

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
const exampleCode = `
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  fontSize: {
    xs: "11px",
    sm: "13px",
    base: "1rem",
    lg: "1.2rem",
    xl: " 1.425rem",
    "2xl": " 1.71rem",
    "3xl": " 2.052rem",
    "4xl": "2.463rem",
    "5xl": "2.955rem",
    "6xl": "3.546rem",
    "7xl": "4.25rem",
    "8xl": "5.1rem",
    "9xl": "8rem",
    "10xl": "10rem",
  },
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
`
const FontSizes = () => {
  const [fontFamily, setFontFamily] = useState("inter");
  const [show, setShow] = useState(false);
  return (
    <section className="flex flex-col gap-7 transition-all duration-400">
      {
        show ? (
          <>
            <header className="flex flex-row-reverse justify-between items-center">
              <Button
                onClick={() => setShow(!show)}
              >
                View tawilwind.config.ts
              </Button>
              <Nav setFontFamily={setFontFamily} />
            </header>
            {
              fontFamily === "inter" && (
                <main className={`${inter.className} bg-background p-3`}>
                  <FontDisplay />
                </main>
              )
            }
            {
              fontFamily === "spaceGrotesk" && (
                <main className={`${spaceGrotesk.className} bg-background p-3`}>
                  <FontDisplay />
                </main>
              )
            }
            {
              fontFamily === "workSans" && (
                <main className={`${workSans.className} bg-background p-3`}>
                  <FontDisplay />
                </main>
              )
            }
            {
              fontFamily === "dmSans" && (
                <main className={`${dmSans.className} bg-background p-3`}>
                  <FontDisplay />
                </main>
              )
            }
            {
              fontFamily === "openSans" && (
                <main className={`${openSans.className} bg-background p-3`}>
                  <FontDisplay />
                </main>
              )
            }
          </>
        ) : (
          <div>
            <div className="flex justify-between py-2">
              <div>
                <p>For implementation you can update your tailwind.config.ts</p>
              </div>
              <div>
                <Button
                  onClick={() => setShow(!show)}
                >
                  View Fonts
                </Button>
              </div>
            </div>
            <div>
              <Snippet
                hideSymbol
                className='flex flex-col-reverse items-start justify-start gap-0 w-fit rounded-md pb-0 px-0'
              >
                <SyntaxHighlighter
                  language="tsx"
                  style={atomDark}
                  customStyle={{
                    padding: '10px'
                  }}
                >
                  {exampleCode}
                </SyntaxHighlighter>
              </Snippet>
            </div>
          </div>
        )
      }
    </section>
  )
}

export default FontSizes