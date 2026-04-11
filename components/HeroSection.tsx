"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Mouse } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const imageVariants = {
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
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      delay: 0.25,
    },
  },
};

function HeroButton({
  href,
  children,
  primary = false,
}: {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group relative inline-flex shrink-0 items-center justify-center px-5 py-2.5 lg:px-6 lg:py-3 transition-transform duration-150 active:scale-[0.97] ${
        primary ? "drop-shadow-[0_0_24px_rgba(181,255,89,0.25)]" : ""
      }`}
    >
      <span
        className={`absolute inset-0 [clip-path:polygon(12px_0,100%_0,100%_calc(100%-12px),calc(100%-12px)_100%,0_100%,0_12px)] transition-all duration-300 ${
          primary
            ? "bg-[#283222] group-hover:brightness-150"
            : "bg-[#0C0F14] group-hover:brightness-125"
        }`}
        aria-hidden="true"
      />
      <span
        className={`absolute inset-0 [clip-path:polygon(12px_0,100%_0,100%_calc(100%-12px),calc(100%-12px)_100%,0_100%,0_12px)] p-px ${
          primary ? "bg-lime-400" : "bg-white/30 group-hover:bg-lime-400"
        }`}
        aria-hidden="true"
      >
        <span
          className={`block h-full w-full [clip-path:polygon(12px_0,100%_0,100%_calc(100%-12px),calc(100%-12px)_100%,0_100%,0_12px)] ${
            primary ? "bg-[#283222]" : "bg-[#0C0F14]"
          }`}
        />
      </span>

      <span className="relative font-quantico text-sm uppercase leading-none text-white transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.25)] lg:text-[1.05rem]">
        {children}
      </span>
    </Link>
  );
}

function SocialLink({
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
      initial={{ opacity: 0, scale: 0.85, y: 10 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        delay: 0.45 + index * 0.08,
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link
        href={href}
        target="_blank"
        aria-label={label}
        className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white backdrop-blur-sm transition-all duration-200 hover:scale-110 hover:border-lime-300/40 hover:text-lime-300"
      >
        {children}
      </Link>
    </motion.div>
  );
}

function FuturisticFrame() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 [clip-path:polygon(28px_0,100%_0,100%_calc(100%-28px),calc(100%-28px)_100%,0_100%,0_28px)] border border-white/10" />
      <div className="pointer-events-none absolute inset-[1px] [clip-path:polygon(28px_0,100%_0,100%_calc(100%-28px),calc(100%-28px)_100%,0_100%,0_28px)] border border-lime-300/10" />

      <div className="pointer-events-none absolute left-0 top-0 h-14 w-14 border-l border-t border-lime-300/35" />
      <div className="pointer-events-none absolute right-0 top-0 h-14 w-14 border-r border-t border-lime-300/20" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-14 w-14 border-b border-l border-cyan-300/15" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-14 w-14 border-b border-r border-white/10" />

      <div className="pointer-events-none absolute left-6 top-6 h-2 w-2 rotate-45 bg-lime-300/70 shadow-[0_0_18px_rgba(163,230,53,0.6)]" />
      <div className="pointer-events-none absolute bottom-6 right-6 h-2 w-2 rotate-45 bg-cyan-300/50 shadow-[0_0_18px_rgba(34,211,238,0.45)]" />
    </>
  );
}

function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ delay: 0.8, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="pointer-events-none absolute bottom-8 right-4 z-30 hidden md:flex lg:right-6 xl:right-8"
    >
      <div className="group relative flex flex-col items-center gap-4 px-4 py-5">
        <div
          className="absolute inset-0 bg-[#0C0F14]/85 backdrop-blur-sm"
          style={{
            clipPath:
              "polygon(12px 0,100% 0,100% calc(100% - 12px),calc(100% - 12px) 100%,0 100%,0 12px)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-lime-300/35"
          style={{
            clipPath:
              "polygon(12px 0,100% 0,100% calc(100% - 12px),calc(100% - 12px) 100%,0 100%,0 12px)",
            mask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            padding: "1px",
          }}
          aria-hidden="true"
        />

        <div className="absolute inset-x-3 top-2 h-px bg-gradient-to-r from-transparent via-lime-300/70 to-transparent" />
        <div className="absolute inset-x-4 bottom-2 h-px bg-gradient-to-r from-transparent via-lime-300/35 to-transparent" />
        <div className="absolute left-2 top-2 h-2 w-2 rotate-45 bg-lime-300/70 shadow-[0_0_14px_rgba(163,230,53,0.7)]" />
        <div className="absolute bottom-2 right-2 h-2 w-2 rotate-45 bg-lime-300/40 shadow-[0_0_14px_rgba(163,230,53,0.45)]" />

        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="relative flex items-center justify-center text-lime-300 drop-shadow-[0_0_10px_rgba(163,230,53,0.45)]"
        >
          <Mouse size={20} strokeWidth={1.8} />
        </motion.div>

        <div className="relative flex h-8 items-center justify-center overflow-visible">
          <span className="font-quantico text-[10px] uppercase tracking-[0.28em] text-lime-300 [writing-mode:vertical-rl] rotate-180">
            Scroll
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function HeroSection() {
  const roles = [
    "Fullstack Developer",
    "FiveM Developer",
    "Web Developer",
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    if (isWaiting) {
      const waitTimer = setTimeout(() => {
        setIsWaiting(false);
        setIsDeleting(true);
      }, 5000);

      return () => clearTimeout(waitTimer);
    }

    const typingSpeed = isDeleting ? 45 : 90;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        const nextText = currentRole.slice(0, displayedRole.length + 1);
        setDisplayedRole(nextText);

        if (nextText === currentRole) {
          setIsWaiting(true);
        }
      } else {
        const nextText = currentRole.slice(0, displayedRole.length - 1);
        setDisplayedRole(nextText);

        if (nextText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedRole, isDeleting, isWaiting, roleIndex, roles]);

  return (
    <section className="relative mt-[140px] w-full px-6 pb-6 sm:px-8 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative overflow-hidden bg-[#050505] [clip-path:polygon(28px_0,100%_0,100%_calc(100%-28px),calc(100%-28px)_100%,0_100%,0_28px)]"
      >
        <FuturisticFrame />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="pointer-events-none absolute left-[46%] top-[8%] hidden h-[560px] w-[560px] rounded-full bg-lime-400/10 blur-[140px] lg:block"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.15 }}
          className="pointer-events-none absolute right-[8%] top-[18%] hidden h-[360px] w-[360px] rounded-full bg-cyan-400/10 blur-[130px] lg:block"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.25 }}
          className="pointer-events-none absolute left-[15%] bottom-[8%] hidden h-[220px] w-[220px] rounded-full bg-lime-300/10 blur-[100px] lg:block"
        />

        <div className="relative min-h-[760px] lg:min-h-[78vh]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(40,255,140,0.08),transparent_24%),radial-gradient(circle_at_80%_35%,rgba(0,180,255,0.07),transparent_22%),linear-gradient(135deg,#061015_0%,#040404_42%,#050505_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.82)_0%,rgba(0,0,0,0.52)_35%,rgba(0,0,0,0.14)_68%,rgba(0,0,0,0.03)_100%)]" />
          <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:34px_34px]" />

          <div className="relative z-10 grid min-h-[760px] items-end gap-10 px-4 py-8 sm:px-6 lg:min-h-[78vh] lg:grid-cols-[1.1fr_0.9fr] lg:px-12 lg:py-0">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className="flex items-end lg:h-full lg:pb-16"
            >
              <div className="flex max-w-3xl flex-col items-start gap-4 sm:gap-6 lg:gap-8">
                <motion.div
                  variants={itemVariants}
                  className="flex flex-col items-start gap-2 sm:gap-3 lg:gap-4"
                >
                  <motion.h1
                    variants={itemVariants}
                    className="max-w-4xl font-quantico text-3xl font-bold uppercase leading-none tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
                  >
                    Halo, saya <br />
                    <span className="bg-gradient-to-b from-lime-300 via-lime-400 to-lime-500 bg-clip-text text-transparent">
                      Iga Ramadana Sahputra
                    </span>
                  </motion.h1>

                  <motion.div
                    variants={itemVariants}
                    className="min-h-[2rem] lg:min-h-[2.5rem]"
                  >
                    <p className="font-quantico text-base uppercase tracking-[0.18em] text-lime-300 sm:text-lg lg:text-2xl">
                      {displayedRole}
                      <span className="ml-1 inline-block h-[1em] w-[3px] translate-y-[2px] animate-pulse bg-lime-400 align-baseline" />
                    </p>
                  </motion.div>

                  <motion.p
                    variants={itemVariants}
                    className="max-w-2xl text-sm leading-[1.7] text-white/72 lg:text-lg"
                  >
                    Saya adalah seorang Fullstack Developer dan FiveM Developer,
                    domisili saat ini di Malang. Mengenal dunia teknologi sejak
                    usia 8 tahun. Menekuni hingga saat ini juga dan menjadi Web
                    Developer kurang lebih 4 tahun, dan saat ini menjadi Game
                    Developer (FiveM) yang berjalan sekitar 2 tahun.
                  </motion.p>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="flex flex-wrap items-start gap-3 sm:gap-4"
                >
                  <HeroButton href="#about">About Me</HeroButton>
                  <HeroButton href="#projects" primary>
                    Download CV
                  </HeroButton>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="hidden items-center gap-3 pt-2 lg:flex"
                >
                  <SocialLink
                    href="https://github.com/igaramadana"
                    label="GitHub"
                    index={0}
                  >
                    <GitHubLogoIcon className="h-5 w-5" />
                  </SocialLink>
                  <SocialLink
                    href="https://linkedin.com"
                    label="LinkedIn"
                    index={1}
                  >
                    <LinkedInLogoIcon className="h-5 w-5" />
                  </SocialLink>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className="relative hidden h-full items-end justify-end lg:flex"
            >
              <div className="relative w-[400px] xl:w-[500px] 2xl:w-[560px]">
                <div className="absolute inset-x-8 bottom-10 h-40 rounded-full bg-lime-400/20 blur-[90px]" />
                <div className="absolute -right-8 top-24 h-52 w-52 rounded-full bg-cyan-400/10 blur-[110px]" />
                <div className="absolute left-[8%] top-[10%] h-[75%] w-[80%] rounded-[40%] border border-lime-300/10 bg-[radial-gradient(circle_at_center,rgba(181,255,89,0.06),transparent_65%)] blur-sm" />
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-transparent" />

                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Image
                    src="/images/iga.png"
                    alt="Wajahku"
                    width={1000}
                    height={1600}
                    priority
                    className="relative z-10 h-auto w-full object-contain drop-shadow-[0_20px_80px_rgba(0,0,0,0.75)]"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.9,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative z-10 px-4 pb-8 sm:px-6 lg:hidden"
          >
            <div className="relative mx-auto mt-2 w-[280px] sm:w-[340px]">
              <div className="absolute inset-x-6 bottom-6 h-24 rounded-full bg-lime-400/20 blur-[60px]" />
              <Image
                src="/images/iga.png"
                alt="Wajahku"
                width={1000}
                height={1600}
                priority
                className="relative z-10 h-auto w-full object-contain opacity-95 drop-shadow-[0_20px_50px_rgba(0,0,0,0.7)]"
              />
            </div>
          </motion.div>
        </div>

        <ScrollIndicator />
      </motion.div>
    </section>
  );
}