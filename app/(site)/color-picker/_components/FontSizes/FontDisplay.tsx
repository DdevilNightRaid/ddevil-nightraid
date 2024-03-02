import React from 'react'
const FontDisplay = () => {
    return (
        <section className='flex flex-col gap-4 max-w-screen'>
            <div className='flex flex-col '>
                <span className='text-[1rem] text-muted-foreground'>Size: 16px / 1rem</span>
                <p className='text-[1rem]'>The quick brown fox jumps over the lazy dog</p>
            </div>
            <div className='flex flex-col gap-1'>
                <span className='text-[1rem] text-muted-foreground'>Size: 19.2px / 1.2rem</span>
                <p className='text-[1.2rem]'>The quick brown fox jumps over the lazy dog</p>
            </div>
            <div className='flex flex-col gap-1'>
                <span className='text-[1rem] text-muted-foreground'>Size: 22.8px / 1.425rem</span>
                <p className='text-[1.425rem]'>The quick brown fox jumps over the lazy dog</p>
            </div>
            <div className='flex flex-col gap-1'>
                <span className='text-[1rem] text-muted-foreground'>Size: 27.36px /  1.71rem</span>
                <p className='text-[1.71rem]'>The quick brown fox jumps over the lazy dog</p>
            </div>
            <div className='flex flex-col gap-1'>
                <span className='text-[1rem] text-muted-foreground'>Size: 32.83px /  2.052rem</span>
                <p className='text-[2.052rem]'>The quick brown fox jumps over the lazy dog</p>
            </div>
            <div className='flex flex-col gap-1'>
                <span className='text-[1rem] text-muted-foreground'>Size: 39.4px /  2.463rem</span>
                <p className='text-[2.463rem]'>The quick brown fox jumps over the lazy dog</p>
            </div>
            <div className='flex flex-col gap-10'>
                <div className='flex flex-col gap-1'>
                    <span className='text-[1rem] text-muted-foreground'>Size: 47.28px /  2.955rem</span>
                    <p className='text-[2.955rem]'>The quick brown fox jumps over the lazy dog</p>
                </div>
                <div className='flex flex-col gap-1'>
                    <span className='text-[1rem] text-muted-foreground'>Size: 56.73px /  3.546rem</span>
                    <p className='text-[3.546rem]'>The quick brown fox jumps over the lazy dog</p>
                </div>
                <div className='flex flex-col gap-1'>
                    <span className='text-[1rem] text-muted-foreground'>Size: 68px /  4.25rem</span>
                    <p className='text-[4.25rem]'>The quick brown fox jumps over the lazy dog</p>
                </div>
                <div className='flex flex-col gap-1'>
                    <span className='text-[1rem] text-muted-foreground'>Size: 81.6px /  5.1rem</span>
                    <p className='text-[5.1rem]'>The quick brown fox jumps over the lazy dog</p>
                </div>
                <div className='flex flex-col gap-1'>
                    <span className='text-[1rem] text-muted-foreground'>Size: 97.92px /  6.12rem</span>
                    <p className='text-[6.12rem]'>The quick brown fox jumps over the lazy dog</p>
                </div>
            </div>
        </section>
    )
}

export default FontDisplay