import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div>
        <Image
            src={'/devil.jpg'}
            alt="my logo"
            fill
            className='rounded-full'
        />
    </div>
  )
}

export default Logo