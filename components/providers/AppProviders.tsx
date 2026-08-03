"use client";

import {
  MotionConfig,
  cancelFrame,
  frame,
} from "framer-motion";
import {
  ReactLenis,
  type LenisRef,
} from "lenis/react";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

import { useHydratedReducedMotion } from "@/lib/hooks/useHydratedReducedMotion";
import { PageReadyContext } from "@/lib/hooks/usePageReady";
import { motionPreferences } from "@/lib/motion";

const PRELOADER_CLASS = "is-preloading";

export default function AppProviders({ children }: { children: ReactNode }) {
  const lenisRef = useRef<LenisRef>(null);
  const shouldReduceMotion = useHydratedReducedMotion();
  const [isPageReady, setIsPageReady] = useState(false);
  const lenisOptions = useMemo(
    () => ({
      anchors: {
        offset: -88,
      },
      autoRaf: false,
      autoToggle: false,
      lerp: shouldReduceMotion ? 1 : 0.085,
      smoothWheel: !shouldReduceMotion,
      stopInertiaOnNavigate: true,
      syncTouch: false,
      wheelMultiplier: 0.9,
    }),
    [shouldReduceMotion],
  );

  useEffect(() => {
    function update({ timestamp }: { timestamp: number }) {
      lenisRef.current?.lenis?.raf(timestamp);
    }

    frame.update(update, true);
    return () => cancelFrame(update);
  }, []);

  useEffect(() => {
    let observer: MutationObserver | undefined;
    let setupFrame = 0;

    setupFrame = window.requestAnimationFrame(() => {
      const root = document.documentElement;
      const syncPreloaderState = () => {
        const isPreloading = root.classList.contains(PRELOADER_CLASS);
        const lenis = lenisRef.current?.lenis;

        setIsPageReady(!isPreloading);

        if (!lenis) return;

        if (isPreloading) {
          lenis.stop();
          return;
        }

        lenis.start();
        window.requestAnimationFrame(() => lenis.resize());
      };

      syncPreloaderState();
      observer = new MutationObserver(syncPreloaderState);
      observer.observe(root, {
        attributes: true,
        attributeFilter: ["class"],
      });
    });

    return () => {
      window.cancelAnimationFrame(setupFrame);
      observer?.disconnect();
    };
  }, []);

  return (
    <MotionConfig
      reducedMotion={
        motionPreferences.respectReducedMotion ? "user" : "never"
      }
    >
      <PageReadyContext.Provider value={isPageReady}>
        <ReactLenis ref={lenisRef} root options={lenisOptions} />
        {children}
      </PageReadyContext.Provider>
    </MotionConfig>
  );
}
