"use client";

import { useSyncExternalStore } from "react";
import { useReducedMotion } from "framer-motion";

import { motionPreferences } from "@/lib/motion";

const subscribe = () => () => undefined;

/**
 * Returns the user's reduced-motion preference after hydration when the
 * global motion policy opts into it. The server snapshot remains stable so
 * the initial browser render cannot produce a hydration mismatch.
 */
export function useHydratedReducedMotion() {
  const isHydrated = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
  const shouldReduceMotion = useReducedMotion();

  return (
    motionPreferences.respectReducedMotion &&
    isHydrated &&
    shouldReduceMotion === true
  );
}
