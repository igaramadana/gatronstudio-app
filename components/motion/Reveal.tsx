"use client";

import { motion, type Variants } from "framer-motion";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

import {
  defaultViewport,
  fadeUp,
  staggerContainer,
} from "@/lib/motion";
import { useHydratedReducedMotion } from "@/lib/hooks/useHydratedReducedMotion";

type RevealProps = ComponentPropsWithoutRef<typeof motion.div> & {
  children: ReactNode;
  variants?: Variants;
};

export function Reveal({
  children,
  variants = fadeUp,
  viewport = defaultViewport,
  ...props
}: RevealProps) {
  const shouldReduceMotion = useHydratedReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView={shouldReduceMotion ? undefined : "visible"}
      viewport={viewport}
      variants={variants}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerReveal({
  children,
  viewport = defaultViewport,
  ...props
}: RevealProps) {
  const shouldReduceMotion = useHydratedReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView={shouldReduceMotion ? undefined : "visible"}
      viewport={viewport}
      variants={staggerContainer}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({ children, ...props }: RevealProps) {
  return (
    <motion.div variants={fadeUp} {...props}>
      {children}
    </motion.div>
  );
}
