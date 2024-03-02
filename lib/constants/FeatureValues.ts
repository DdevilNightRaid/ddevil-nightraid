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
]

