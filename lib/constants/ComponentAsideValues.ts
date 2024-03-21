import AccertinityUiForm from '@/app/(site)/components/_components/accerform/AccertinityUiForm';
import WidthWrapper from '@/app/(site)/components/_components/WidthWrapper/WidthWrapper';

export const ComponentsAsideValues = [
    {
      id: 0,
      label: "Max Width Wrapper",
      onClickValue: "maxwidthwrapper",
    },
    {
      id: 1,
      label: "Form Kit",
      onClickValue: "formkit",
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
      label: "formkit",
      componentValue: AccertinityUiForm,
    },
]

