import { ScrollArea } from '@/components/ui/scroll-area';
import MaxWidthWrapper from '@/lib/MaxWidthWrapper';
import React from 'react'
import ColorPallet from './_components/ColorPallet/ColorPallet'
import Favcolors from './_components/Favcolors/Favcolors';
import FontSizes from './_components/FontSizes/FontSizes';
import { ScrollShadow } from "@nextui-org/react";
interface MainSectionProps {
  displayContent: string;
}
const MainSection = ({ displayContent }: MainSectionProps) => {
  return (
    <MaxWidthWrapper>
      <ScrollShadow hideScrollBar className="w-full h-screen" visibility='bottom'>
        {displayContent === "colors" && (<ColorPallet />)}
        {displayContent === "fontsizes" && (<FontSizes />)}
        {displayContent === "favcolors" && (<Favcolors />)}
      </ScrollShadow>
    </MaxWidthWrapper>
  )
}

export default MainSection