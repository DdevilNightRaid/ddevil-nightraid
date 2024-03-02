import { ColorValue } from '@/lib/types/colorTypes'
import React from 'react'
interface InHexProps {
    colorValues: ColorValue[]
}
const InHex = ({ colorValues }: InHexProps) => {
    return (
        <section className='flex flex-col gap-4 border p-4'>
            <div className='flex flex-col'>
                <span>--background: {(colorValues.find((i) => i.id == 0))?.colorCode}</span>
                <span>--foreground: {(colorValues.find((i) => i.id == 1))?.colorCode};</span>
            </div>
            <div className='flex flex-col'>
                <span> --card: {(colorValues.find((i) => i.id == 2))?.colorCode};</span>
                <span> --card-foreground: {(colorValues.find((i) => i.id == 3))?.colorCode};</span>
            </div>
            <div className='flex flex-col'>
                <span> --popover: {(colorValues.find((i) => i.id == 4))?.colorCode};</span>
                <span>  --popover-foreground: {(colorValues.find((i) => i.id == 5))?.colorCode};</span>
            </div>
            <div className='flex flex-col'>
                <span>--primary: {(colorValues.find((i) => i.id == 6))?.colorCode};</span>
                <span>--primary-foreground: {(colorValues.find((i) => i.id == 7))?.colorCode};</span>
            </div>
            <div className='flex flex-col'>
                <span>--secondary: {(colorValues.find((i) => i.id == 8))?.colorCode};</span>
                <span>--secondary-foreground: {(colorValues.find((i) => i.id == 9))?.colorCode};</span>
            </div>
            <div className='flex flex-col'>
                <span>--muted: {(colorValues.find((i) => i.id == 10))?.colorCode};</span>
                <span>--muted-foreground: {(colorValues.find((i) => i.id == 11))?.colorCode};</span>
            </div>
            <div className='flex flex-col'>
                <span>--accent: {(colorValues.find((i) => i.id == 12))?.colorCode};</span>
                <span>--accent-foreground: {(colorValues.find((i) => i.id == 13))?.colorCode};</span>
            </div>
            <div className='flex flex-col'>
                <span>--destructive: {(colorValues.find((i) => i.id == 14))?.colorCode};</span>
                <span>--destructive-foreground: {(colorValues.find((i) => i.id == 15))?.colorCode};</span>
            </div>
            <div className='flex flex-col'>
                <span>--border: {(colorValues.find((i) => i.id == 16))?.colorCode};</span>
                <span>--input: {(colorValues.find((i) => i.id == 17))?.colorCode};</span>
                <span>--ring: {(colorValues.find((i) => i.id == 18))?.colorCode};</span>
            </div>
        </section>
    )
}

export default InHex