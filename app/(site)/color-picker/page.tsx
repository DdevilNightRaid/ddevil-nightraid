"use client"
import React, { useState } from 'react'
import Aside from './Aside/Aside'
import MainSection from './MainSection/MainSection'
const page = () => {
  const [displayContent, setDisplayContent] = useState("colors");
  return (
    <div className='flex h-screen justify-between gap-10'>
      <Aside setDisplayContent={setDisplayContent} />
      <MainSection displayContent={displayContent} />
    </div>
  )
}

export default page