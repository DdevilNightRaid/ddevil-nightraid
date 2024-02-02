import { ScrollArea } from '@/components/ui/scroll-area';
import React from 'react'
import ColorPallet from './_components/ColorPallet/ColorPallet'
import FontSizes from './_components/FontSizes/FontSizes';
interface MainSectionProps{
  displayContent: string;
}
const MainSection = ({displayContent}: MainSectionProps) => {
  return (
    <section className='w-full py-2'>
      <ScrollArea className="h-full w-full">
      {displayContent === "colors" && (<ColorPallet />)}
      {displayContent === "fontsizes" && (<FontSizes />)}
      </ScrollArea>
    </section>
  )
}

export default MainSection