export const GA_TRACKING_ID = process.env.GOOGLE_ANALYTICS_WEB;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  // @ts-ignore
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

type GAEvent = {
  action: string;
  category: string;
  label: string;
  value?: string;
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const ga_event = ({ action, category, label, value }: GAEvent) => {
  // @ts-ignore
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
};
