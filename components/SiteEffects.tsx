"use client";

import dynamic from "next/dynamic";
import { useCallback, useEffect, useState } from "react";

import Preloader from "@/components/Preloader";

const PRELOADER_SESSION_KEY = "gatrons-preloader-seen";

const SnowEffect = dynamic(() => import("@/components/SnowFall"), {
  ssr: false,
});

function hasSeenPreloader() {
  try {
    return window.sessionStorage.getItem(PRELOADER_SESSION_KEY) === "true";
  } catch {
    return false;
  }
}

function rememberPreloader() {
  try {
    window.sessionStorage.setItem(PRELOADER_SESSION_KEY, "true");
  } catch {
    // Storage can be unavailable in restricted browser contexts.
  }
}

export default function SiteEffects() {
  const [isLoading, setIsLoading] = useState(true);
  const [showAmbientEffect, setShowAmbientEffect] = useState(false);

  useEffect(() => {
    if (hasSeenPreloader()) {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (isLoading) return;

    const enableEffect = () => setShowAmbientEffect(true);
    const idleWindow = window as Window & {
      requestIdleCallback?: (
        callback: IdleRequestCallback,
        options?: IdleRequestOptions,
      ) => number;
      cancelIdleCallback?: (handle: number) => void;
    };

    if (idleWindow.requestIdleCallback) {
      const idleId = idleWindow.requestIdleCallback(enableEffect, {
        timeout: 1600,
      });

      return () => idleWindow.cancelIdleCallback?.(idleId);
    }

    const timer = window.setTimeout(enableEffect, 900);
    return () => window.clearTimeout(timer);
  }, [isLoading]);

  const finishLoading = useCallback(() => {
    rememberPreloader();
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <Preloader onFinish={finishLoading} />;
  }

  return showAmbientEffect ? <SnowEffect /> : null;
}
