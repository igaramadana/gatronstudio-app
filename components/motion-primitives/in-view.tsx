"use client";

import {
  motion,
  useInView,
  type HTMLMotionProps,
  type Variants,
} from "framer-motion";
import { useRef, type ReactNode } from "react";

import { useHydratedReducedMotion } from "@/lib/hooks/useHydratedReducedMotion";
import { usePageReady } from "@/lib/hooks/usePageReady";
import {
  createStaggerVariants,
  inViewOptions,
  revealVariants,
} from "@/lib/motion";

type ViewOptions = Omit<
  NonNullable<Parameters<typeof useInView>[1]>,
  "once"
>;

type InViewProps = Omit<
  HTMLMotionProps<"div">,
  "animate" | "initial" | "variants" | "children" | "ref"
> & {
  children: ReactNode;
  variants?: Variants;
  viewOptions?: ViewOptions;
  once?: boolean;
};

/**
 * Local Motion Primitives-style InView component.
 * It uses useInView instead of scattered whileInView props, which makes
 * viewport triggering predictable for tall and nested sections.
 */
export function InView({
  children,
  variants = revealVariants.blurUp,
  viewOptions = inViewOptions.default,
  once = true,
  ...props
}: InViewProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { ...viewOptions, once });
  const shouldReduceMotion = useHydratedReducedMotion();
  const isPageReady = usePageReady();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={
        isPageReady && (isInView || shouldReduceMotion)
          ? "visible"
          : "hidden"
      }
      variants={variants}
      {...props}
    >
      {children}
    </motion.div>
  );
}

type InViewGroupProps = InViewProps & {
  stagger?: number;
  delay?: number;
};

export function InViewGroup({
  children,
  stagger,
  delay,
  variants,
  ...props
}: InViewGroupProps) {
  return (
    <InView
      variants={
        variants ??
        createStaggerVariants({
          stagger,
          delay,
        })
      }
      {...props}
    >
      {children}
    </InView>
  );
}

type InViewItemProps = Omit<
  HTMLMotionProps<"div">,
  "variants" | "children"
> & {
  children: ReactNode;
  variants?: Variants;
};

/** Child item that inherits the visible/hidden state from InViewGroup. */
export function InViewItem({
  children,
  variants = revealVariants.blurUp,
  ...props
}: InViewItemProps) {
  return (
    <motion.div variants={variants} {...props}>
      {children}
    </motion.div>
  );
}
