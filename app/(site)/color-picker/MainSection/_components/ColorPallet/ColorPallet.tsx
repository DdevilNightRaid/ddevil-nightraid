"use client"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { initialColorValues } from '@/lib/constants/initialColorValues';
import { ColorValue } from '@/lib/types/colorTypes';
import { cn, hexToHsl } from '@/lib/utils'
import { Copy, Pipette } from 'lucide-react';
import React, { ChangeEvent, useEffect, useState } from 'react'
import ExportColorPallet from '../ExportColor/ExportColorPallet';


const ColorPallet = () => {
    const [allColors, setAllColors] = useState<ColorValue[]>(initialColorValues)

    useEffect(() => {
        const storedColors = localStorage.getItem('allColors');

        if (storedColors) {
            // Parse the JSON string to get the array of colors
            const parsedColors = JSON.parse(storedColors);

            // Update the state with the fetched colors
            setAllColors(parsedColors);
        }
    }, [])

    const handleAddNewColor = (e: ChangeEvent<HTMLInputElement>, id: number) => {
        const foundColor = allColors.find((colorValue) => colorValue.id === id);

        if (foundColor) {
            // If color is found, update the state with the found color
            setAllColors((prevColors) => {
                const updatedColors = [...prevColors];
                const index = updatedColors.findIndex((colorValue) => colorValue.id === id);

                if (index !== -1) {
                    updatedColors[index] = { ...foundColor, colorCode: e.target.value };
                }
                localStorage.setItem('allColors', JSON.stringify(updatedColors));
                return updatedColors;
            });
        } else {
            // Handle the case when color is not found (optional)
            console.warn(`Color with id ${id} not found`);
        }
    };
    const handleCopy = (cCode?: string) => {
        if (cCode) navigator.clipboard.writeText(cCode)
    }
    return (
        <div className='flex flex-col gap-2 w-fit pr-10'>
            <div className='flex justify-end'>
                <ExportColorPallet colorValues={allColors} />
            </div>
            <div className='flex flex-wrap gap-7 '>
                {
                    allColors.map((oneColor) => (
                        <div
                            key={oneColor.id}
                            className='h-[16rem] w-[12rem] border flex flex-col items-center p-4 rounded-lg'
                        >
                            <div
                                className={cn(`h-[12rem] w-[10rem] border bg-[${oneColor.colorCode}] rounded-sm`)}
                                style={{ backgroundColor: oneColor.colorCode }}
                            />
                            <section className='flex my-4 '>
                                <div className='h-4 w-4 rounded-full relative'>
                                    <Pipette className='h-4 w-4 absolute top-[50%] -translate-x-[50%] -translate-y-[50%] left-[50%]'/>
                                    <input
                                        type={"color"}
                                        className="z-[10] outline-none opacity-0 ring-0 border-none rounded-full h-4 w-4 bg-transparent  p-0 focus-visible:ring-0 focus-visible:border-none"
                                        onChange={(e) => handleAddNewColor(e, oneColor.id)}
                                    />
                                </div>
                                <Input
                                    value={oneColor.colorCode}
                                    className="outline-none ring-0 border-none h-fit w-full text-center text-muted-foreground p-0 focus-visible:ring-0 focus-visible:border-none"
                                    onChange={(e) => handleAddNewColor(e, oneColor.id)}
                                />
                                <div
                                    role="button"
                                    onClick={() => { handleCopy(oneColor.colorCode) }}
                                >
                                    <Copy className='h-4 w-4 text-muted-foreground' />
                                </div>
                            </section>
                            <p className='text-[13px]'>{oneColor.colorName}</p>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default ColorPallet