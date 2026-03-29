import Image from "next/image";
import Link from "next/link";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  InstagramLogoIcon,
} from "@radix-ui/react-icons";

function HexPattern() {
  return (
    <div className="pointer-events-none absolute right-0 top-0 w-[80vw] aspect-[886/492] opacity-[0.08] mix-blend-overlay md:w-[40vw]">
      <svg
        preserveAspectRatio="none"
        width="100%"
        height="100%"
        viewBox="0 0 885.6 492"
        fill="none"
        className="block h-full w-full"
      >
        <path d="M123 0L229.521 70.725V212.175L123 282.9L16.4789 212.175V70.725L123 0Z" fill="white" />
        <path d="M229.602 209.1L336.123 279.825V421.275L229.602 492L123.08 421.275V279.825L229.602 209.1Z" fill="white" />
        <path d="M442.801 209.1L549.322 279.825V421.275L442.801 492L336.28 421.275V279.825L442.801 209.1Z" fill="white" />
        <path d="M549.4 0L655.922 70.725V212.175L549.4 282.9L442.879 212.175V70.725L549.4 0Z" fill="white" />
        <path d="M762.6 0L869.121 70.725V212.175L762.6 282.9L656.078 212.175V70.725L762.6 0Z" fill="white" />
      </svg>
    </div>
  );
}

function SocialIconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="relative flex h-6 w-6 items-center justify-center text-white transition-all duration-200 hover:scale-125 hover:rotate-6 hover:text-lime-300 hover:drop-shadow-[0_0_8px_rgba(136,229,43,0.4)]"
    >
      {children}
    </Link>
  );
}

function FooterTextLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group relative transition-colors duration-200 hover:text-white"
    >
      {children}
      <span className="absolute bottom-0 left-0 h-px w-0 bg-lime-400 transition-all duration-300 group-hover:w-full" />
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0d1113] py-10 lg:py-16">
      <div className="pointer-events-none absolute right-0 top-0 flex h-[80vw] w-[90vw] items-center justify-center md:h-[40vw] md:w-[55vw]">
        <div className="rotate-[19.6deg]">
          <div className="relative h-[60vw] w-[80vw] md:h-[30vw] md:w-[45vw]">
            <div className="absolute inset-[-83.93%_-55.47%] rounded-full bg-lime-400/10 blur-[140px]" />
          </div>
        </div>
      </div>

      <HexPattern />

      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:28px_28px]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-8 px-8 sm:px-10 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex flex-col items-center gap-6 lg:items-start lg:gap-8">
          <div className="relative h-10 w-[10rem] transition-transform duration-200 hover:scale-105 lg:h-14 lg:w-[14rem]">
            <Image
              src="/images/logo.png"
              alt="Logo"
              fill
              className="object-contain object-left"
              sizes="(max-width: 1024px) 160px, 224px"
            />
          </div>

          <p className="max-w-[35rem] text-center font-quantico text-base leading-[1.6] text-white/60 lg:text-left lg:text-lg">
            Saya membangun website modern, portfolio, dan aplikasi web yang
            clean, cepat, dan scalable. Kalau kamu punya visi yang sama untuk
            project digitalmu, mari bangun sesuatu yang keren bersama.{" "}
            <a
              href="mailto:atherosmurf@gmail.com"
              className="group relative inline text-white no-underline"
            >
              <span className="relative transition-colors duration-200 group-hover:text-lime-300">
                atherosmurf@gmail.com
              </span>
              <span className="absolute bottom-0 left-0 h-px w-0 bg-lime-400 transition-all duration-300 group-hover:w-full" />
            </a>
          </p>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 self-stretch lg:items-start lg:gap-8">
          <div className="flex flex-col items-center gap-4 lg:items-start">
            <p className="font-quantico text-base leading-[1.5] text-white/55 lg:text-xl">
              Follow Me
            </p>

            <div className="flex items-center gap-[1.125rem]">
              <SocialIconLink href="https://github.com/atherosmurf" label="GitHub">
                <GitHubLogoIcon className="h-5 w-5" />
              </SocialIconLink>

              <SocialIconLink href="https://linkedin.com" label="LinkedIn">
                <LinkedInLogoIcon className="h-5 w-5" />
              </SocialIconLink>

              <SocialIconLink href="https://instagram.com" label="Instagram">
                <InstagramLogoIcon className="h-5 w-5" />
              </SocialIconLink>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 font-quantico text-base leading-normal text-white/55 lg:justify-start lg:gap-6 lg:text-lg">
            <FooterTextLink href="/terms">Terms & Conditions</FooterTextLink>
            <FooterTextLink href="/privacy">Privacy Policy</FooterTextLink>
          </div>

          <p className="text-center font-quantico text-base leading-normal text-white/55 lg:text-left lg:text-lg">
            © 2026 Iga Ramadana Sahputra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}