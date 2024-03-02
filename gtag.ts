export const GA_TRACKING_ID: string = process.env.NEXT_PUBLIC_GOOGLE_ID as string;

export const pageview = (url: string): void => {
  (window as any).gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

interface Props {
  action: string;
  category: string;
  label: string;
  value: number;
}

export const event = ({ action, category, label, value }: Props): void => {
  (window as any).gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
