import ColorPallet from "@/app/(site)/color-picker/_components/ColorPallet/ColorPallet"
import Favcolors from "@/app/(site)/color-picker/_components/Favcolors/Favcolors"
import FontSizes from "@/app/(site)/color-picker/_components/FontSizes/FontSizes"

export const ColorPickerAsideValues = [
    {
      id: 0,
      label: "Color Pallet",
      onClickValue: "colors",
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
  export const ColorPickerDisplayValues = [
    {
      id: 0,
      label: "colors",
      componentValue: ColorPallet,
    },
    {
      id: 1,
      label: "fontsizes",
      componentValue: FontSizes,
    },
    {
      id: 2,
      label: "favcolors",
      componentValue: Favcolors,
    },
]