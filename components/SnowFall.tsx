"use client";

import { useEffect, useState } from "react";
import Snowfall from "react-snowfall";

import { motionPreferences } from "@/lib/motion";

type NetworkInformation = {
  saveData?: boolean;
};

type NavigatorWithConnection = Navigator & {
  connection?: NetworkInformation;
};

type SnowPreferences = {
  count: number;
  enabled: boolean;
};

function getSnowPreferences(): SnowPreferences {
  const reduceMotion =
    motionPreferences.respectReducedMotion &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isSmallScreen = window.matchMedia("(max-width: 767px)").matches;
  const saveData = (navigator as NavigatorWithConnection).connection?.saveData;
  const cpuCount = navigator.hardwareConcurrency || 8;
  const hasLimitedCpu = cpuCount < 4;

  return {
    count: 44,
    enabled:
      !reduceMotion &&
      !isSmallScreen &&
      !saveData &&
      !hasLimitedCpu &&
      document.visibilityState === "visible",
  };
}

export default function SnowEffect() {
  const [preferences, setPreferences] = useState<SnowPreferences>({
    count: 0,
    enabled: false,
  });

  useEffect(() => {
    const updatePreferences = () => setPreferences(getSnowPreferences());
    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const screenQuery = window.matchMedia("(max-width: 767px)");

    updatePreferences();
    reducedMotionQuery.addEventListener("change", updatePreferences);
    screenQuery.addEventListener("change", updatePreferences);
    document.addEventListener("visibilitychange", updatePreferences);

    return () => {
      reducedMotionQuery.removeEventListener("change", updatePreferences);
      screenQuery.removeEventListener("change", updatePreferences);
      document.removeEventListener("visibilitychange", updatePreferences);
    };
  }, []);

  if (!preferences.enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-40" aria-hidden="true">
      <Snowfall
        snowflakeCount={preferences.count}
        speed={[0.2, 0.65]}
        wind={[-0.06, 0.06]}
        radius={[0.7, 1.7]}
        color="#e8fff0"
      />
    </div>
  );
}
