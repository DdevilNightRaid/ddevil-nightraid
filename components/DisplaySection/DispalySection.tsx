"use client"
import ColorPallet from '@/app/(site)/color-picker/MainSection/_components/ColorPallet/ColorPallet';
import { DisplayValues } from '@/lib/types/DisplayValues';
import { ScrollShadow } from "@nextui-org/react";
import { useState } from 'react';
interface DisplaySectionProps {
    displayContent: string;
    displayValues: DisplayValues;
}
const DisplaySection = ({ displayContent, displayValues }: DisplaySectionProps) => {
    const [selectedValue, setSelectedValue] = useState(displayValues[0]);
    return (
        <ScrollShadow hideScrollBar className="w-full h-screen" visibility='bottom'>
            {
                displayValues.map((value) => (
                    <div key={value.id} onClick={() => setSelectedValue(value)}>
                        {
                            displayContent === value.label ? (
                                <value.componentValue />
                            ) : null
                        }
                    </div>
                )
                )
            }
        </ScrollShadow>
    )
}

export default DisplaySection;
