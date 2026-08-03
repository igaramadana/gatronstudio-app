"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

import { InViewGroup, InViewItem } from "@/components/motion-primitives/in-view";
import {
  trackContactClick,
  trackNavigationClick,
  trackSocialClick,
} from "@/lib/analytics";
import { revealVariants } from "@/lib/motion";
import { siteConfig } from "@/lib/site";

function HexPattern() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      whileInView={{ opacity: 0.08, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="pointer-events-none absolute right-0 top-0 aspect-[886/492] w-[80vw] mix-blend-overlay md:w-[40vw]"
    >
      <motion.svg
        preserveAspectRatio="none"
        width="100%"
        height="100%"
        viewBox="0 0 885.6 492"
        fill="none"
        className="block h-full w-full"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <path d="M123 0L229.521 70.725V212.175L123 282.9L16.4789 212.175V70.725L123 0Z" fill="white" />
        <path d="M229.602 209.1L336.123 279.825V421.275L229.602 492L123.08 421.275V279.825L229.602 209.1Z" fill="white" />
        <path d="M442.801 209.1L549.322 279.825V421.275L442.801 492L336.28 421.275V279.825L442.801 209.1Z" fill="white" />
        <path d="M549.4 0L655.922 70.725V212.175L549.4 282.9L442.879 212.175V70.725L549.4 0Z" fill="white" />
        <path d="M762.6 0L869.121 70.725V212.175L762.6 282.9L656.078 212.175V70.725L762.6 0Z" fill="white" />
      </motion.svg>
    </motion.div>
  );
}

function SocialIconLink({
  href,
  label,
  children,
  index,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        delay: 0.15 + index * 0.08,
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link
        href={href}
        onClick={() =>
          trackSocialClick({
            platform: label.toLowerCase(),
            linkLocation: "footer",
          })
        }
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="relative flex h-6 w-6 items-center justify-center text-white transition-all duration-200 hover:scale-125 hover:rotate-6 hover:text-lime-300 hover:drop-shadow-[0_0_8px_rgba(136,229,43,0.4)]"
      >
        {children}
      </Link>
    </motion.div>
  );
}

function FooterTextLink({
  href,
  children,
  label,
}: {
  href: string;
  children: React.ReactNode;
  label: string;
}) {
  return (
    <Link
      href={href}
      onClick={() =>
        trackNavigationClick({
          linkName: label,
          linkTarget: href,
          linkLocation: "footer",
        })
      }
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
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute right-0 top-0 flex h-[80vw] w-[90vw] items-center justify-center md:h-[40vw] md:w-[55vw]"
      >
        <motion.div
          className="rotate-[19.6deg]"
          animate={{ rotate: [19.6, 21, 19.6] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="relative h-[60vw] w-[80vw] md:h-[30vw] md:w-[45vw]">
            <div className="absolute inset-[-83.93%_-55.47%] rounded-full bg-lime-400/10 blur-[140px]" />
          </div>
        </motion.div>
      </motion.div>

      <HexPattern />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.03 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1 }}
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.14)_1px,transparent_1px)] bg-size-[28px_28px]"
      />

      <InViewGroup
        stagger={0.12}
        className="relative mx-auto flex max-w-7xl flex-col items-center gap-8 px-8 sm:px-10 lg:flex-row lg:items-start lg:justify-between"
      >
        <InViewItem
          variants={revealVariants.fadeRight}
          className="flex flex-col items-center gap-6 lg:items-start lg:gap-8"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="relative h-10 w-[10rem] lg:h-14 lg:w-[14rem]"
          >
            <Image
              src="/images/logo.webp"
              alt="Gatrons Studio"
              fill
              className="object-contain object-left"
              sizes="(max-width: 1024px) 160px, 224px"
            />
          </motion.div>

          <motion.p
            variants={revealVariants.blurUp}
            className="max-w-[35rem] text-center font-quantico text-base leading-[1.6] text-white/60 lg:text-left lg:text-lg"
          >
            Saya membangun website modern, portfolio, dan aplikasi web yang
            clean, cepat, dan scalable. Kalau kamu punya visi yang sama untuk
            project digitalmu, mari bangun sesuatu yang keren bersama.{" "}
            <a
              href={`mailto:${siteConfig.author.email}`}
              onClick={() =>
                trackContactClick({
                  contactMethod: "email",
                  linkLocation: "footer",
                })
              }
              className="group relative inline text-white no-underline"
            >
              <span className="relative transition-colors duration-200 group-hover:text-lime-300">
                {siteConfig.author.email}
              </span>
              <span className="absolute bottom-0 left-0 h-px w-0 bg-lime-400 transition-all duration-300 group-hover:w-full" />
            </a>
          </motion.p>
        </InViewItem>

        <InViewItem
          variants={revealVariants.fadeLeft}
          className="flex flex-col items-center justify-between gap-6 self-stretch lg:items-start lg:gap-8"
        >
          <motion.div
            variants={revealVariants.blurUp}
            className="flex flex-col items-center gap-4 lg:items-start"
          >
            <p className="font-quantico text-base leading-[1.5] text-white/55 lg:text-xl">
              Follow Me
            </p>

            <div className="flex items-center gap-[1.125rem]">
              <SocialIconLink
                href={siteConfig.social.github}
                label="GitHub"
                index={0}
              >
                <FaGithub className="h-5 w-5" />
              </SocialIconLink>

              <SocialIconLink
                href={siteConfig.social.linkedin}
                label="LinkedIn"
                index={1}
              >
                <FaLinkedinIn className="h-5 w-5" />
              </SocialIconLink>

              <SocialIconLink
                href={siteConfig.social.instagram}
                label="Instagram"
                index={2}
              >
                <FaInstagram className="h-5 w-5" />
              </SocialIconLink>
            </div>
          </motion.div>

          <motion.div
            variants={revealVariants.blurUp}
            className="flex flex-wrap items-center justify-center gap-4 font-quantico text-base leading-normal text-white/55 lg:justify-start lg:gap-6 lg:text-lg"
          >
            <FooterTextLink href="/terms" label="terms_conditions">
              Terms & Conditions
            </FooterTextLink>
            <FooterTextLink href="/privacy" label="privacy_policy">
              Privacy Policy
            </FooterTextLink>
          </motion.div>

          <motion.p
            variants={revealVariants.blurUp}
            className="text-center font-quantico text-base leading-normal text-white/55 lg:text-left lg:text-lg"
          >
            © 2026 Iga Ramadana Sahputra. All rights reserved.
          </motion.p>
        </InViewItem>
      </InViewGroup>
    </footer>
  );
}