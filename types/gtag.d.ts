export {};

type GoogleAnalyticsValue = string | number | boolean;
type GoogleAnalyticsParameters = Record<
  string,
  GoogleAnalyticsValue | undefined
>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (
      command: "event",
      eventName: string,
      parameters?: GoogleAnalyticsParameters,
    ) => void;
  }
}
