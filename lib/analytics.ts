type AnalyticsValue = string | number | boolean;
type AnalyticsParameters = Record<string, AnalyticsValue | undefined>;

type LinkTracking = {
  linkName: string;
  linkTarget: string;
  linkLocation: string;
};

type SocialTracking = {
  platform: string;
  linkLocation: string;
};

type ContactTracking = {
  contactMethod: string;
  linkLocation: string;
};

type ProjectTracking = {
  projectName: string;
  projectCategory: string;
  destination: "live_demo" | "github";
};

type ProjectPaginationTracking = {
  projectCategory: string;
  pageNumber: number;
  paginationMethod: "next" | "previous" | "indicator" | "carousel";
};

export const analyticsEventNames = {
  navigationClick: "navigation_click",
  socialClick: "social_click",
  contactClick: "contact_click",
  projectClick: "project_click",
  projectFilter: "project_filter",
  projectPagination: "project_pagination",
} as const;

function removeUndefinedValues(parameters: AnalyticsParameters) {
  return Object.fromEntries(
    Object.entries(parameters).filter(([, value]) => value !== undefined),
  ) as Record<string, AnalyticsValue>;
}

function isDebugModeEnabled() {
  if (typeof window === "undefined") return false;

  return new URLSearchParams(window.location.search).get("ga_debug") === "1";
}

function ensureGtag() {
  if (typeof window === "undefined") return undefined;

  window.dataLayer ??= [];

  if (typeof window.gtag !== "function") {
    window.gtag = (...args) => {
      window.dataLayer?.push(args);
    };
  }

  return window.gtag;
}

export function trackEvent(
  eventName: string,
  parameters: AnalyticsParameters = {},
) {
  const gtag = ensureGtag();
  if (!gtag) return false;

  const debugMode = isDebugModeEnabled();
  const eventParameters = {
    ...removeUndefinedValues(parameters),
    page_path: window.location.pathname,
    page_location: window.location.href,
    page_title: document.title,
    ...(debugMode
      ? {
          debug_mode: true,
          engagement_time_msec: 100,
        }
      : {}),
  };

  gtag("event", eventName, eventParameters);

  if (debugMode) {
    console.info(`[GA4] ${eventName}`, eventParameters);
  }

  return true;
}

export function trackNavigationClick({
  linkName,
  linkTarget,
  linkLocation,
}: LinkTracking) {
  return trackEvent(analyticsEventNames.navigationClick, {
    link_name: linkName,
    link_target: linkTarget,
    link_location: linkLocation,
  });
}

export function trackSocialClick({
  platform,
  linkLocation,
}: SocialTracking) {
  return trackEvent(analyticsEventNames.socialClick, {
    social_platform: platform,
    link_location: linkLocation,
  });
}

export function trackContactClick({
  contactMethod,
  linkLocation,
}: ContactTracking) {
  return trackEvent(analyticsEventNames.contactClick, {
    contact_method: contactMethod,
    link_location: linkLocation,
  });
}

export function trackProjectClick({
  projectName,
  projectCategory,
  destination,
}: ProjectTracking) {
  return trackEvent(analyticsEventNames.projectClick, {
    project_name: projectName,
    project_category: projectCategory,
    project_destination: destination,
  });
}

export function trackProjectFilter(projectCategory: string) {
  return trackEvent(analyticsEventNames.projectFilter, {
    project_category: projectCategory,
  });
}

export function trackProjectPagination({
  projectCategory,
  pageNumber,
  paginationMethod,
}: ProjectPaginationTracking) {
  return trackEvent(analyticsEventNames.projectPagination, {
    project_category: projectCategory,
    page_number: String(pageNumber),
    pagination_method: paginationMethod,
  });
}
