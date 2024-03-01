import Favcolors from '@/app/(site)/color-picker/MainSection/_components/Favcolors/Favcolors';
import WidthWrapper from '@/app/(site)/components/_components/WidthWrapper/WidthWrapper';
import FontSizes from '../../app/(site)/color-picker/MainSection/_components/FontSizes/FontSizes';

export const ComponentsAsideValues = [
    {
      id: 0,
      label: "Max Width Wrapper",
      onClickValue: "maxwidthwrapper",
    },
    {
      id: 1,
      label: "Font Sizes",
      onClickValue: "fontsizes",
    },
    {
      id: 2,
      label: "Colors",
      onClickValue: "favcolors",
    },
]
export const ComponentsDisplayValues = [
    {
      id: 0,
      label: "maxwidthwrapper",
      componentValue: WidthWrapper,
    },
    {
      id: 1,
      label: "fontsizes",
      componentValue: FontSizes ,
    },
    {
      id: 2,
      label: "favcolors",
      componentValue: Favcolors,
    },
]

