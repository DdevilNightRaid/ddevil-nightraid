import React from 'react'
import Logo from '@/components/Logo'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='flex items-center p-2 md:px-7 lg:px-14 justify-between border-b'>
      <div className='flex items-center gap-2'>
        <div className='relative h-10 w-10 rounded-full'>
          <Logo />
        </div>
        <h2>D~Devil NightRaid</h2>
      </div>
      <section className='flex items-center gap-2'>
        <Link href={'/'}>
          <span>Site</span>
        </Link>
        <Link href={'/components'}>
          <span>Components</span>
        </Link>
        <Link href={'/color-picker'}>
          <span>Color Picker</span>
        </Link>
      </section>
    </nav>
  )
}

export default Navbar