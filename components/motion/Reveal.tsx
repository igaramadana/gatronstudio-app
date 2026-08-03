"use client";

/**
 * Backward-compatible aliases for the previous Reveal API.
 *
 * The animation implementation now lives in
 * `components/motion-primitives/in-view.tsx`. Keeping this adapter prevents
 * older imports from breaking while avoiding duplicated animation logic.
 */
export {
  InView as Reveal,
  InViewGroup as StaggerReveal,
  InViewItem as RevealItem,
} from "@/components/motion-primitives/in-view";
