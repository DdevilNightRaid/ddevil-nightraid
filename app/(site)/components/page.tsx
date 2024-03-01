"use client"
import Aside from '@/components/Aside/Aside'
import DispalySection from '@/components/DisplaySection/DispalySection'
import { ComponentsAsideValues, ComponentsDisplayValues } from '@/lib/constants/ComponentAsideValues'
import MaxWidthWrapper from '@/lib/MaxWidthWrapper'
import React, { useState } from 'react'

const page = () => {
  const [displayContent, setDisplayContent] = useState("colors");
  return (
    <div className='h-full'>
      <div className='flex min-h-screen justify-between gap-10 dark:bg-black dark:bg-grid-white/[0.1] bg-grid-black/[0.1] transition-all duration-300 ease-in'>
        <Aside setDisplayContent={setDisplayContent} buttonPointers={ComponentsAsideValues} />
        <MaxWidthWrapper className='m-2 px-1 bg-background border'>
          <DispalySection displayContent={displayContent} displayValues={ComponentsDisplayValues}/>
        </MaxWidthWrapper>
      </div>
    </div>
  )
}
export default page