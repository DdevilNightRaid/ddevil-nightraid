import { cn } from '@/lib/utils';
import { Copy } from 'lucide-react';
import React from 'react'
import { Input } from './ui/input';

interface ColorCardProps {
    colorCode: string;
    colorName: string;
}
const ColorCard = (
    { colorCode, colorName }: ColorCardProps
) => {
    const handleCopy = (cCode?: string) => {
        if (cCode) navigator.clipboard.writeText(cCode)
    }
    return (
        <div
            className='h-[16rem] w-[12rem] border flex flex-col items-center p-4 rounded-lg'
        >
            <div
                className={cn(`h-[12rem] w-[10rem] border bg-[${colorCode}] rounded-sm`)}
                style={{ backgroundColor: colorCode }}
            />
            <section className='flex my-4 '>
                <Input
                    value={colorCode}
                    className="outline-none ring-0 border-none h-fit w-full text-center text-muted-foreground p-0 focus-visible:ring-0 focus-visible:border-none"
                />
                <div
                    role="button"
                    onClick={() => { handleCopy(colorCode) }}
                >
                    <Copy className='h-4 w-4 text-muted-foreground' />
                </div>
            </section>
            <p className='text-[13px]'>{colorName}</p>
        </div>
    )
}

export default ColorCard