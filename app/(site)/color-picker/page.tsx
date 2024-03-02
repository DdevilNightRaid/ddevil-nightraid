"use client"
import Aside from '@/components/Aside/Aside'
import DisplaySection from '@/components/DisplaySection/DispalySection'
import { ColorPickerAsideValues, ColorPickerDisplayValues } from '@/lib/constants/ColorPickerAside'
import MaxWidthWrapper from '@/lib/MaxWidthWrapper'
import { useState } from 'react'

const page = () => {
  const [displayContent, setDisplayContent] = useState("colors");
  return (
    <div className='flex h-screen justify-between gap-10 dark:bg-black dark:bg-grid-white/[0.1] bg-grid-black/[0.1] transition-all duration-300 ease-in'>
      <Aside setDisplayContent={setDisplayContent} buttonPointers={ColorPickerAsideValues} />
      <MaxWidthWrapper className='m-2 px-1'>
        <DisplaySection displayContent={displayContent} displayValues={ColorPickerDisplayValues} />
      </MaxWidthWrapper>
    </div>
  )
}

export default page