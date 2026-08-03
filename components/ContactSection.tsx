"use client";

import Link from "next/link";
import { FiArrowUpRight, FiMail } from "react-icons/fi";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

import {
  InView,
  InViewGroup,
  InViewItem,
} from "@/components/motion-primitives/in-view";
import ChamferButton from "@/components/ui/ChamferButton";
import {
  trackContactClick,
  trackSocialClick,
} from "@/lib/analytics";
import { siteConfig } from "@/lib/site";

function SocialIconBadge({
  label,
  accent = "lime",
  children,
}: {
  label: string;
  accent?: "lime" | "cyan" | "pink";
  children: React.ReactNode;
}) {
  const accentClass =
    accent === "lime"
      ? "group-hover:border-lime-300/40 group-hover:text-lime-300"
      : accent === "cyan"
        ? "group-hover:border-cyan-300/40 group-hover:text-cyan-300"
        : "group-hover:border-pink-400/40 group-hover:text-pink-300";

  return (
    <span
      aria-hidden="true"
      title={label}
      className={`flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white backdrop-blur-sm transition-all duration-200 group-hover:scale-110 ${accentClass}`}
    >
      {children}
    </span>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
  accent = "lime",
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  accent?: "lime" | "cyan" | "pink";
  onClick?: () => void;
}) {
  const glowClass =
    accent === "lime"
      ? "bg-lime-300/15"
      : accent === "cyan"
        ? "bg-cyan-400/15"
        : "bg-pink-400/15";

  const borderClass =
    accent === "lime"
      ? "from-lime-300/70 via-lime-400/20 to-transparent"
      : accent === "cyan"
        ? "from-cyan-300/70 via-cyan-400/20 to-transparent"
        : "from-pink-300/70 via-pink-400/20 to-transparent";

  const isExternal = href.startsWith("http");

  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      onClick={onClick}
      className="group relative flex min-h-[180px] w-full flex-col justify-between overflow-hidden p-5 transition-transform duration-300 hover:-translate-y-1 lg:min-h-[220px] lg:p-6"
    >
      <div
        className="absolute inset-0 bg-white/10"
        style={{
          clipPath:
            "polygon(18px 0,100% 0,100% calc(100% - 18px),calc(100% - 18px) 100%,0 100%,0 18px)",
        }}
        aria-hidden="true"
      />

      <div
        className="absolute inset-px bg-[linear-gradient(155deg,rgba(255,255,255,0.04)_0%,rgba(153,153,153,0.04)_100%)] backdrop-blur-[2px]"
        style={{
          clipPath:
            "polygon(18px 0,100% 0,100% calc(100% - 18px),calc(100% - 18px) 100%,0 100%,0 18px)",
        }}
        aria-hidden="true"
      />

      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className={`absolute -left-8 top-0 h-24 w-24 rounded-full ${glowClass} blur-3xl`} />
        <div className={`absolute -right-8 bottom-0 h-24 w-24 rounded-full ${glowClass} blur-3xl`} />
      </div>

      <div
        className={`pointer-events-none absolute inset-0 bg-linear-to-r ${borderClass} opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100`}
        style={{
          clipPath:
            "polygon(18px 0,100% 0,100% calc(100% - 18px),calc(100% - 18px) 100%,0 100%,0 18px)",
        }}
      />

      <div className="relative flex flex-col gap-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center">
              {icon}
            </div>
          </div>

          <FiArrowUpRight className="size-5 text-white/45 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white/90" />
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-quantico text-xs font-semibold uppercase tracking-[0.22em] text-white/45">
            {label}
          </p>
          <h3 className="break-all font-quantico text-xl font-bold tracking-tight text-white md:text-2xl">
            {value}
          </h3>
        </div>
      </div>
    </Link>
  );
}

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative flex w-full flex-col items-center gap-12 py-16 md:py-24 lg:gap-16 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(40,255,140,0.06),transparent_22%),radial-gradient(circle_at_80%_35%,rgba(0,180,255,0.05),transparent_22%),linear-gradient(180deg,#050505_0%,#081010_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.14)_1px,transparent_1px)] bg-size-[28px_28px]" />

      <InView className="relative flex max-w-5xl flex-col items-center px-4 text-center sm:px-6">
        <div className="flex w-full flex-col items-center gap-3 lg:gap-4">
          <div className="flex flex-col items-center gap-0.5 font-quantico font-bold leading-[1.2]">
            <p className="text-sm tracking-tight text-white">CONTACT</p>
            <h2 className="bg-linear-to-b from-lime-300 via-lime-400 to-lime-500 bg-clip-text text-center font-quantico text-3xl tracking-tight text-transparent sm:text-4xl lg:text-5xl xl:text-6xl">
              Let&apos;s Build Something Great
            </h2>
          </div>

          <p className="min-w-full text-center text-base leading-[1.6] text-white/60 lg:text-lg">
            Punya ide project, kolaborasi, atau ingin ngobrol soal web
            development? Hubungi saya lewat email atau social platform di bawah
            ini.
          </p>
        </div>
      </InView>

      <InViewGroup className="relative mx-auto grid w-full max-w-5xl grid-cols-1 gap-6 px-8 sm:px-10 md:grid-cols-2 lg:gap-8">
        <InViewItem>
          <ContactCard
            label="Email"
            value={siteConfig.author.email}
            href={`mailto:${siteConfig.author.email}`}
            accent="lime"
            onClick={() =>
              trackContactClick({
                contactMethod: "email",
                linkLocation: "contact_card",
              })
            }
            icon={
              <SocialIconBadge label="Email" accent="lime">
                <FiMail className="size-5" strokeWidth={2.2} />
              </SocialIconBadge>
            }
          />
        </InViewItem>

        <InViewItem>
          <ContactCard
            label="GitHub"
            value="github.com/igaramadana"
            href={siteConfig.social.github}
            accent="cyan"
            onClick={() =>
              trackSocialClick({
                platform: "github",
                linkLocation: "contact_card",
              })
            }
            icon={
              <SocialIconBadge label="GitHub" accent="cyan">
                <FaGithub className="h-5 w-5" />
              </SocialIconBadge>
            }
          />
        </InViewItem>

        <InViewItem>
          <ContactCard
            label="LinkedIn"
            value="linkedin.com/in/igaramadana"
            href={siteConfig.social.linkedin}
            accent="cyan"
            onClick={() =>
              trackSocialClick({
                platform: "linkedin",
                linkLocation: "contact_card",
              })
            }
            icon={
              <SocialIconBadge label="LinkedIn" accent="cyan">
                <FaLinkedinIn className="h-5 w-5" />
              </SocialIconBadge>
            }
          />
        </InViewItem>

        <InViewItem>
          <ContactCard
            label="Instagram"
            value="instagram.com/igaramadana"
            href={siteConfig.social.instagram}
            accent="pink"
            onClick={() =>
              trackSocialClick({
                platform: "instagram",
                linkLocation: "contact_card",
              })
            }
            icon={
              <SocialIconBadge label="Instagram" accent="pink">
                <FaInstagram className="size-5" strokeWidth={2.2} />
              </SocialIconBadge>
            }
          />
        </InViewItem>
      </InViewGroup>

      <InView className="relative flex flex-wrap items-center justify-center gap-4 px-6">
        <ChamferButton
          href={`mailto:${siteConfig.author.email}`}
          variant="primary"
          onClick={() =>
            trackContactClick({
              contactMethod: "email",
              linkLocation: "contact_cta",
            })
          }
        >
          <>
            <FiMail className="size-4" />
            Send Email
          </>
        </ChamferButton>

        <ChamferButton
          href={siteConfig.social.github}
          external
          onClick={() =>
            trackSocialClick({
              platform: "github",
              linkLocation: "contact_cta",
            })
          }
        >
          <>
            <FaGithub className="h-4 w-4" />
            Visit GitHub
          </>
        </ChamferButton>

        <ChamferButton
          href={siteConfig.social.linkedin}
          external
          onClick={() =>
            trackSocialClick({
              platform: "linkedin",
              linkLocation: "contact_cta",
            })
          }
        >
          <>
            <FaLinkedinIn className="h-4 w-4" />
            Visit LinkedIn
          </>
        </ChamferButton>

        <ChamferButton
          href={siteConfig.social.instagram}
          external
          onClick={() =>
            trackSocialClick({
              platform: "instagram",
              linkLocation: "contact_cta",
            })
          }
        >
          <>
            <FaInstagram className="size-4" />
            Visit Instagram
          </>
        </ChamferButton>
      </InView>
    </section>
  );
}