import React from 'react'
import ColorCard from './ColorCard';

interface FavColorAccordionProps{
    colorVar: {
        id: number;
        colorName: string;
        colorCode: string;
    }[]
}

const FavColorAccordion = ({
    colorVar
}: FavColorAccordionProps) => {
    return (
        <div className='flex flex-wrap gap-7 '>
            {
                colorVar.map((oneColor) => (
                    <ColorCard
                        key={oneColor.id}
                        colorCode={oneColor.colorCode}
                        colorName={oneColor.colorName}
                    />
                ))
            }
        </div>
    )
}

export default FavColorAccordion