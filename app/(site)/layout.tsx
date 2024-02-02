import React from 'react'
import Navbar from './_components/Navbar/Navbar'

const SiteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className='h-full'>
        {children}
      </main>
    </>
  )
}

export default SiteLayout