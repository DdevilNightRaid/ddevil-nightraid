import { ColorValue } from '@/lib/types/colorTypes'
import { hexToHsl } from '@/lib/utils'
import React from 'react'
interface InHslProps {
    colorValues: ColorValue[]
}
const InHsl = ({ colorValues }: InHslProps) => {
    return (
        <section className='flex flex-col gap-4 border p-4'>
            <div className='flex flex-col'>
                <span>--background: {hexToHsl(colorValues.find((i) => i.id === 0)?.colorCode || "")};</span>
                <span>--foreground: {hexToHsl(colorValues.find((i) => i.id === 1)?.colorCode || "")};</span>
            </div>
            <div className='flex flex-col'>
                <span> --card: {hexToHsl(colorValues.find((i) => i.id === 2)?.colorCode || "")};</span>
                <span> --card-foreground: {hexToHsl(colorValues.find((i) => i.id === 3)?.colorCode || "")};</span>
            </div>
            <div className='flex flex-col'>
                <span> --popover: {hexToHsl(colorValues.find((i) => i.id === 4)?.colorCode || "")};</span>
                <span>  --popover-foreground: {hexToHsl(colorValues.find((i) => i.id === 5)?.colorCode || "")};</span>
            </div>
            <div className='flex flex-col'>
                <span>--primary: {hexToHsl(colorValues.find((i) => i.id === 6)?.colorCode || "")};</span>
                <span>--primary-foreground: {hexToHsl(colorValues.find((i) => i.id === 7)?.colorCode || "")};</span>
            </div>
            <div className='flex flex-col'>
                <span>--secondary: {hexToHsl(colorValues.find((i) => i.id === 8)?.colorCode || "")};</span>
                <span>--secondary-foreground: {hexToHsl(colorValues.find((i) => i.id === 9)?.colorCode || "")};</span>
            </div>
            <div className='flex flex-col'>
                <span>--muted: {hexToHsl(colorValues.find((i) => i.id === 10)?.colorCode || "")};</span>
                <span>--muted-foreground: {hexToHsl(colorValues.find((i) => i.id === 11)?.colorCode || "")};</span>
            </div>
            <div className='flex flex-col'>
                <span>--accent: {hexToHsl(colorValues.find((i) => i.id === 12)?.colorCode || "")};</span>
                <span>--accent-foreground: {hexToHsl(colorValues.find((i) => i.id === 13)?.colorCode || "")};</span>
            </div>
            <div className='flex flex-col'>
                <span>--destructive: {hexToHsl(colorValues.find((i) => i.id === 14)?.colorCode || "")};</span>
                <span>--destructive-foreground: {hexToHsl(colorValues.find((i) => i.id === 15)?.colorCode || "")};</span>
            </div>
            <div className='flex flex-col'>
                <span>--border: {hexToHsl(colorValues.find((i) => i.id === 16)?.colorCode || "")};</span>
                <span>--input: {hexToHsl(colorValues.find((i) => i.id === 17)?.colorCode || "")};</span>
                <span>--ring: {hexToHsl(colorValues.find((i) => i.id === 18)?.colorCode || "")};</span>
            </div>
        </section>
    )
}

export default InHsl