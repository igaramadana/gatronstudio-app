export {};

type GoogleAnalyticsValue = string | number | boolean;
type GoogleAnalyticsParameters = Record<
  string,
  GoogleAnalyticsValue | undefined
>;

type GoogleAnalyticsCommand = (
  command: "event",
  eventName: string,
  parameters?: GoogleAnalyticsParameters,
) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: GoogleAnalyticsCommand;
  }
}
