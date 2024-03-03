import AddLocalFonts from '@/app/(site)/features/_components/AddLocalFonts/AddLocalFonts';
import ImplementGoogleAnalytics from '@/app/(site)/features/_components/GoogleAnalaytics/ImplementGoogleAnalytics';
import Nodemailer from '@/app/(site)/features/_components/NodeMailer/Nodemailer';

export const FeatureAsideValues = [
    {
      id: 0,
      label: "Node mailer",
      onClickValue: "nodemailer",
    },
    {
      id: 1,
      label: "Google Analytics",
      onClickValue: "google-analytics",
    },
    {
      id: 1,
      label: "Local Fonts",
      onClickValue: "local-fonts",
    },
]
export const FeatureDisplayValues = [
    {
      id: 0,
      label: "nodemailer",
      componentValue: Nodemailer,
    },
    {
      id: 1,
      label: "google-analytics",
      componentValue: ImplementGoogleAnalytics,
    },
    {
      id: 1,
      label: "local-fonts",
      componentValue: AddLocalFonts,
    },
]

