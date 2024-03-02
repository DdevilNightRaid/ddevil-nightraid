"use client"
import { Boxes } from '@/components/acertUI/background-boxes'
import Aside from '@/components/Aside/Aside'
import DispalySection from '@/components/DisplaySection/DispalySection'
import { Button } from '@/components/ui/button'
import { FeatureAsideValues, FeatureDisplayValues } from '@/lib/constants/FeatureValues'
import MaxWidthWrapper from '@/lib/MaxWidthWrapper'
import { cn } from '@/lib/utils'
import React, { useState } from 'react'
const page = () => {
  const [displayContent, setDisplayContent] = useState("nodemailer");
  const [display, setDisplay] = useState<boolean>(false);
  return (
    <div className='h-full'>
      {
        display ? (
          <div className='flex min-h-screen justify-between gap-10 dark:bg-black dark:bg-grid-white/[0.1] bg-grid-black/[0.1] transition-all duration-300 ease-in'>
            <Aside setDisplayContent={setDisplayContent} buttonPointers={FeatureAsideValues} />
            <MaxWidthWrapper className='m-2 px-1 bg-background border'>
              <DispalySection displayContent={displayContent} displayValues={FeatureDisplayValues} />
            </MaxWidthWrapper>
          </div>
        ) : (
          <div>
            <div className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
              <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
              <Boxes />
              <div className='flex flex-col'>
                <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
                  Modularity with CTRL + C and CTRL + V  is Awesome
                </h1>
                <div className='mt-2 text-neutral-300 relative z-20 text-center'>
                  <p>
                    Credit of every component here goes to their respective contributors, from whom I have CTRL + C & CTRL + V from
                  </p>
                  <p>Like: Framer, NextUI, Shadcn UI, Aceternity UI NextJS, JavaScript Mastery, Code With Antonio, tomisloading, Josh tried coding</p>
                </div>
              </div>
              <div className='z-20 mt-10'>
                <Button
                 onClick={() => setDisplay(true)}
                >
                  Start CTRL + C and CTRL + V
                </Button>
              </div>
            </div>
          </div>
        )
      }

    </div>
  )
}
export default page