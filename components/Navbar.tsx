"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

function HoverDiamond() {
  return (
    <span className="pointer-events-none absolute left-1/2 top-full mt-3 -translate-x-1/2">
      <span className="relative block h-3.5 w-3.5 rotate-45 scale-75 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
        <span className="absolute inset-0 rounded-[2px] border border-lime-300/80 bg-lime-300/10 shadow-[0_0_10px_rgba(163,230,53,0.35),0_0_24px_rgba(163,230,53,0.3)]" />
        <span className="absolute inset-[2px] rounded-[1px] border border-lime-200/70 bg-gradient-to-br from-lime-300/60 via-lime-200/20 to-transparent" />
        <span className="absolute -inset-2 rounded-full bg-lime-300/20 blur-md" />
      </span>
    </span>
  );
}

function NavItem({
  name,
  href,
  onClick,
}: {
  name: string;
  href: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="group relative flex shrink-0 items-center justify-center py-1"
    >
      <span className="font-quantico text-sm font-bold uppercase leading-none tracking-[0.16em] text-white transition-all duration-200 group-hover:text-lime-300">
        {name}
      </span>
      <HoverDiamond />
    </Link>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-black/70 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <nav
        className={clsx(
          "mx-auto flex w-full max-w-7xl items-center justify-between px-8 sm:px-10 transition-all duration-300",
          scrolled ? "py-4" : "py-6 xl:py-8"
        )}
      >
        <Link
          href="/"
          className="relative block w-[160px] shrink-0 transition-opacity duration-200 hover:opacity-80 lg:h-14 lg:w-[220px]"
        >
          <Image
            src="/images/logo.png"
            alt="Logo"
            fill
            priority
            className="object-contain"
            sizes="(max-width: 1024px) 180px, 220px"
          />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <NavItem key={link.name} {...link} />
          ))}
        </div>

        <div className="lg:hidden">
          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen((prev) => !prev)}
            className="relative flex h-10 w-10 items-center justify-center text-white transition-all duration-200 hover:scale-110 active:scale-95"
          >
            {isOpen ? <X size={24} strokeWidth={2} /> : <Menu size={24} strokeWidth={2} />}
          </button>
        </div>
      </nav>

      <div
        className={clsx(
          "overflow-hidden transition-all duration-300 lg:hidden",
          isOpen
            ? "max-h-[420px] border-t border-white/10 bg-black/80 opacity-100 backdrop-blur-xl"
            : "max-h-0 opacity-0"
        )}
      >
        <div className="flex flex-col gap-6 px-8 py-6 sm:px-10">
          {navLinks.map((link) => (
            <NavItem
              key={link.name}
              {...link}
              onClick={() => setIsOpen(false)}
            />
          ))}

          <Link
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="font-quantico inline-flex w-fit rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white transition-all duration-200 hover:border-lime-300/50 hover:bg-lime-300/10 hover:text-lime-300"
          >
            Hire Me
          </Link>
        </div>
      </div>
      <div
        className="h-1 w-full opacity-40"
        style={{
          background:
            "linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgb(182, 255, 82) 50%, rgba(255, 255, 255, 0) 100%)",
        }}
      />
    </header>
  );
}