"use client"
import { DisplayValues } from '@/lib/types/DisplayValues';
import { ScrollShadow } from "@nextui-org/react";
interface DisplaySectionProps {
    displayContent: string;
    displayValues: DisplayValues;
}
const DisplaySection = ({ displayContent, displayValues }: DisplaySectionProps) => {
    return (
        <ScrollShadow hideScrollBar className="w-full h-screen" visibility='bottom'>

            {
                displayValues.map((value) => (
                    <div key={value.id}>
                        {
                            displayContent === value.label ? (
                                <value.componentValue />
                            ) : null
                        }
                    </div>
                ))
            }
        </ScrollShadow>
    )
}

export default DisplaySection;
