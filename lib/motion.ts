import type { Transition, Variants } from "framer-motion";

/**
 * This portfolio is motion-first, so animations stay enabled even when the
 * operating system requests reduced motion. Change this to `true` if the site
 * should follow the visitor's OS preference.
 */
export const motionPreferences = {
  respectReducedMotion: false,
} as const;

type CubicBezier = [number, number, number, number];

export const motionEasings = {
  smooth: [0.22, 1, 0.36, 1] as CubicBezier,
  emphasized: [0.16, 1, 0.3, 1] as CubicBezier,
  standard: [0.4, 0, 0.2, 1] as CubicBezier,
} as const;

export const motionDurations = {
  fast: 0.36,
  normal: 0.62,
  slow: 0.82,
  ambient: 1.15,
} as const;

export const motionDelays = {
  section: 0.04,
  item: 0.08,
  hero: 0.12,
} as const;

export const motionTransitions = {
  reveal: {
    duration: motionDurations.normal,
    ease: motionEasings.smooth,
  },
  revealSlow: {
    duration: motionDurations.slow,
    ease: motionEasings.emphasized,
  },
  interaction: {
    duration: motionDurations.fast,
    ease: motionEasings.smooth,
  },
  spring: {
    type: "spring",
    stiffness: 150,
    damping: 22,
    mass: 0.8,
  },
} as const satisfies Record<string, Transition>;

/**
 * IntersectionObserver settings for the Motion-Primitives-style InView
 * component. A low amount keeps tall sections and cards from getting stuck.
 */
export const inViewOptions = {
  default: {
    amount: 0.12,
    margin: "0px 0px -8% 0px",
  },
  early: {
    amount: 0.06,
    margin: "0px 0px 4% 0px",
  },
  card: {
    amount: 0.16,
    margin: "0px 0px -4% 0px",
  },
} as const;

export const revealVariants = {
  fade: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: motionTransitions.reveal,
    },
  },
  blurUp: {
    hidden: {
      opacity: 0,
      y: 32,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: motionTransitions.reveal,
    },
  },
  fadeUp: {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: motionTransitions.reveal,
    },
  },
  fadeDown: {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: motionTransitions.reveal,
    },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: 34 },
    visible: {
      opacity: 1,
      x: 0,
      transition: motionTransitions.reveal,
    },
  },
  fadeRight: {
    hidden: { opacity: 0, x: -34 },
    visible: {
      opacity: 1,
      x: 0,
      transition: motionTransitions.reveal,
    },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.94, y: 18 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: motionTransitions.revealSlow,
    },
  },
} as const satisfies Record<string, Variants>;

export function createStaggerVariants({
  stagger = motionDelays.item,
  delay = motionDelays.section,
}: {
  stagger?: number;
  delay?: number;
} = {}): Variants {
  return {
    hidden: {},
    visible: {
      transition: {
        delayChildren: delay,
        staggerChildren: stagger,
      },
    },
  };
}

export const staggerContainer = createStaggerVariants();
export const heroStaggerContainer = createStaggerVariants({
  stagger: 0.11,
  delay: motionDelays.hero,
});

export const heroImageVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.94,
    filter: "blur(12px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      delay: 0.25,
      ease: motionEasings.smooth,
    },
  },
};

export const projectCarouselTransition: Transition = {
  type: "spring",
  stiffness: 115,
  damping: 24,
  mass: 0.9,
};
