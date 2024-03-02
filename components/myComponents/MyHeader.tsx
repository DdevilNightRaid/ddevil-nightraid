import React from 'react'
import { Divider } from "@nextui-org/react";

interface HeaderProps{
    title: string;
    desc: string;
}
const MyHeader = ({
    title,
    desc
}: HeaderProps) => {
    return (
        <header className='flex flex-col'>
            <h2 className='text-base'>Component</h2>
            <h1 className='text-3xl'>{title}</h1>
            <Divider className="my-4" />
            <div>
                <span className='text-base font-semibold'>
                    Purpose
                </span>
                <p>
                    {desc}
                </p>
            </div>
        </header>
    )
}

export default MyHeader