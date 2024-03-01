"use client"
import Aside from '@/components/Aside/Aside'
import { ColorPickerAsideValues } from '@/lib/constants/ColorPickerAside'
import MaxWidthWrapper from '@/lib/MaxWidthWrapper'
import React, { useState } from 'react'
import MainSection from './MainSection/MainSection'

const page = () => {
  const [displayContent, setDisplayContent] = useState("colors");
  return (
    <div className='flex h-screen justify-between gap-10 dark:bg-black dark:bg-grid-white/[0.1] bg-grid-black/[0.1] transition-all duration-300 ease-in'>
      <Aside setDisplayContent={setDisplayContent} buttonPointers={ColorPickerAsideValues} />
      <MaxWidthWrapper>
        <MainSection displayContent={displayContent}/>
      </MaxWidthWrapper>
    </div>
  )
}

export default page