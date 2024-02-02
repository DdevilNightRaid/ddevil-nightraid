"use client"
import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from '@/components/ui/button'
import { ColorValue } from '@/lib/types/colorTypes'
import InHex from './InHex'
import InHsl from './InHsl'

interface ExportColorPalletProps {
    colorValues: ColorValue[]
}
const ExportColorPallet = ({ colorValues }: ExportColorPalletProps) => {
    const [colorFormat, setColorFormat] = useState("hex");
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                >
                    Export
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader className='flex'>
                    <div className='flex gap-2'>
                    <Button onClick={() => setColorFormat("hex")}>HEX</Button>
                    <Button onClick={() => setColorFormat("hsl")}>HSL</Button>
                    </div>
                </DialogHeader>
                <ScrollArea className='max-h-[27rem]'>
                    {
                        colorFormat === "hex" && (
                            <InHex colorValues={colorValues} />
                        )
                    }
                    {colorFormat === "hsl" && (
                        <InHsl colorValues={colorValues} />
                    )}
                </ScrollArea>
            </DialogContent>
        </Dialog>
    )
}

export default ExportColorPallet