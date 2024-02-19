import { ScrollArea } from '@/components/ui/scroll-area';
import MaxWidthWrapper from '@/lib/MaxWidthWrapper';
import React from 'react'
import ColorPallet from './_components/ColorPallet/ColorPallet'
import Favcolors from './_components/Favcolors/Favcolors';
import FontSizes from './_components/FontSizes/FontSizes';
interface MainSectionProps {
  displayContent: string;
}
const MainSection = ({ displayContent }: MainSectionProps) => {
  return (
    <MaxWidthWrapper>
      <ScrollArea className="h-full w-full py-2">
        {displayContent === "colors" && (<ColorPallet />)}
        {displayContent === "fontsizes" && (<FontSizes />)}
        {displayContent === "favcolors" && (<Favcolors />)}
      </ScrollArea>
    </MaxWidthWrapper>
  )
}

export default MainSection