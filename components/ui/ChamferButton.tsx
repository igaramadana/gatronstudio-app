import clsx from "clsx";
import Link from "next/link";
import type { ReactNode } from "react";

type ChamferButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
  disabled?: boolean;
  className?: string;
  ariaLabel?: string;
};

export default function ChamferButton({
  href,
  children,
  variant = "secondary",
  external,
  disabled = false,
  className,
  ariaLabel,
}: ChamferButtonProps) {
  const isPrimary = variant === "primary";
  const isExternal = external ?? /^https?:\/\//.test(href);
  const rootClassName = clsx(
    "group relative inline-flex shrink-0 items-center justify-center px-5 py-2.5 transition-transform duration-150 active:scale-[0.97] lg:px-6 lg:py-3",
    isPrimary && "drop-shadow-[0_0_24px_rgba(181,255,89,0.22)]",
    disabled && "cursor-not-allowed opacity-40 active:scale-100",
    className,
  );

  const content = (
    <>
      <span
        className={clsx(
          "absolute inset-0 [clip-path:polygon(12px_0,100%_0,100%_calc(100%-12px),calc(100%-12px)_100%,0_100%,0_12px)] transition-all duration-300",
          isPrimary
            ? "bg-[#283222] group-hover:brightness-150"
            : "bg-[#0C0F14] group-hover:bg-[#11161d]",
        )}
        aria-hidden="true"
      />
      <span
        className={clsx(
          "absolute inset-0 [clip-path:polygon(12px_0,100%_0,100%_calc(100%-12px),calc(100%-12px)_100%,0_100%,0_12px)] p-px transition-all duration-300",
          isPrimary ? "bg-lime-400" : "bg-white/25 group-hover:bg-lime-400",
        )}
        aria-hidden="true"
      >
        <span
          className={clsx(
            "block h-full w-full [clip-path:polygon(12px_0,100%_0,100%_calc(100%-12px),calc(100%-12px)_100%,0_100%,0_12px)]",
            isPrimary ? "bg-[#283222]" : "bg-[#0C0F14]",
          )}
        />
      </span>
      <span className="relative inline-flex items-center gap-2 font-quantico text-sm uppercase leading-none text-white transition-all duration-300 group-hover:text-white/90 lg:text-[1.02rem]">
        {children}
      </span>
    </>
  );

  if (disabled) {
    return (
      <span className={rootClassName} aria-disabled="true" aria-label={ariaLabel}>
        {content}
      </span>
    );
  }

  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={rootClassName}
      aria-label={ariaLabel}
    >
      {content}
    </Link>
  );
}
