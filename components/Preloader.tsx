"use client";

import { useEffect, useMemo, useState } from "react";
import {
  AnimatePresence,
  motion,
  type Variants,
} from "framer-motion";

import { useHydratedReducedMotion } from "@/lib/hooks/useHydratedReducedMotion";

const words = ["Hello", "Bonjour", "Olá", "Hallo"] as const;

const EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];

const opacity: Variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 0.75,
    transition: {
      duration: 0.45,
      delay: 0.05,
    },
  },
};

const slideUp: Variants = {
  initial: {
    y: 0,
  },
  exit: {
    y: "-100%",
    transition: {
      duration: 0.7,
      ease: EASE,
      delay: 0.1,
    },
  },
};

type PreloaderProps = {
  onFinish?: () => void;
};

export default function Preloader({ onFinish }: PreloaderProps) {
  const shouldReduceMotion = useHydratedReducedMotion();
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [dimension, setDimension] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("is-preloading");

    return () => root.classList.remove("is-preloading");
  }, []);

  useEffect(() => {
    if (shouldReduceMotion) {
      const timer = window.setTimeout(() => setIsVisible(false), 250);
      return () => window.clearTimeout(timer);
    }
  }, [shouldReduceMotion]);

  useEffect(() => {
    const updateSize = () => {
      setDimension({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    if (shouldReduceMotion) return;

    if (index === words.length - 1) {
      const finishTimer = setTimeout(() => {
        setIsVisible(false);
      }, 220);

      return () => clearTimeout(finishTimer);
    }

    const timer = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, index === 0 ? 520 : 110);

    return () => clearTimeout(timer);
  }, [index, shouldReduceMotion]);

  const initialPath = useMemo(() => {
    return `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${
      dimension.width / 2
    } ${dimension.height + 300} 0 ${dimension.height} L0 0`;
  }, [dimension]);

  const targetPath = useMemo(() => {
    return `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${
      dimension.width / 2
    } ${dimension.height} 0 ${dimension.height} L0 0`;
  }, [dimension]);

  const curve: Variants = {
    initial: {
      d: initialPath,
      transition: {
        duration: 0.55,
        ease: EASE,
      },
    },
    exit: {
      d: targetPath,
      transition: {
        duration: 0.55,
        ease: EASE,
        delay: 0.3,
      },
    },
  };

  return (
    <AnimatePresence mode="wait" onExitComplete={onFinish}>
      {isVisible && (
        <motion.div
          variants={slideUp}
          initial="initial"
          exit="exit"
          role="status"
          aria-live="polite"
          aria-label="Memuat Gatrons Studio"
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#050505] text-white"
        >
          <motion.p
            variants={opacity}
            initial="initial"
            animate="enter"
            className="absolute z-10 flex items-center gap-3 text-2xl font-medium tracking-wide md:text-4xl"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-[#b6ff52] md:h-3 md:w-3" />
            {words[index]}
          </motion.p>

          {dimension.width > 0 && (
            <svg className="pointer-events-none absolute left-0 top-0 h-[calc(100%+300px)] w-full">
              <motion.path
                variants={curve}
                initial="initial"
                exit="exit"
                fill="#050505"
              />
            </svg>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}