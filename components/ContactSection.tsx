import Link from "next/link";
import { Mail, ArrowUpRight } from "lucide-react";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  InstagramLogoIcon,
} from "@radix-ui/react-icons";

function ContactButton({
  href,
  children,
  primary = false,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
  external?: boolean;
}) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`group relative inline-flex shrink-0 items-center justify-center px-5 py-2.5 transition-transform duration-150 active:scale-[0.97] lg:px-6 lg:py-3 ${
        primary ? "drop-shadow-[0_0_24px_rgba(181,255,89,0.2)]" : ""
      }`}
    >
      <span
        className={`absolute inset-0 [clip-path:polygon(12px_0,100%_0,100%_calc(100%-12px),calc(100%-12px)_100%,0_100%,0_12px)] transition-all duration-300 ${
          primary
            ? "bg-[#283222] group-hover:brightness-150"
            : "bg-[#0C0F14] group-hover:bg-[#11161d]"
        }`}
        aria-hidden="true"
      />

      <span
        className={`absolute inset-0 [clip-path:polygon(12px_0,100%_0,100%_calc(100%-12px),calc(100%-12px)_100%,0_100%,0_12px)] p-px transition-all duration-300 ${
          primary
            ? "bg-lime-400"
            : "bg-white/25 group-hover:bg-lime-400"
        }`}
        aria-hidden="true"
      >
        <span
          className={`block h-full w-full [clip-path:polygon(12px_0,100%_0,100%_calc(100%-12px),calc(100%-12px)_100%,0_100%,0_12px)] ${
            primary ? "bg-[#283222]" : "bg-[#0C0F14]"
          }`}
        />
      </span>

      <span className="relative inline-flex items-center gap-2 font-quantico text-sm uppercase leading-none text-white transition-all duration-300 group-hover:text-white/90 lg:text-[1.02rem]">
        {children}
      </span>
    </Link>
  );
}

function SocialIconBadge({
  href,
  label,
  accent = "lime",
  children,
}: {
  href: string;
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
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white backdrop-blur-sm transition-all duration-200 hover:scale-110 ${accentClass}`}
    >
      {children}
    </Link>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
  accent = "lime",
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  accent?: "lime" | "cyan" | "pink";
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

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
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

          <ArrowUpRight className="size-5 text-white/45 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white/90" />
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

      <div className="relative flex max-w-5xl flex-col items-center px-4 text-center sm:px-6">
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
      </div>

      <div className="relative mx-auto grid w-full max-w-5xl grid-cols-1 gap-6 px-8 sm:px-10 md:grid-cols-2 lg:gap-8">
        <ContactCard
          label="Email"
          value="igrmdns085@gmail.com"
          href="mailto:igrmdns085@gmail.com"
          accent="lime"
          icon={
            <SocialIconBadge
              href="mailto:igrmdns085@gmail.com"
              label="Email"
              accent="lime"
            >
              <Mail className="size-5" strokeWidth={2.2} />
            </SocialIconBadge>
          }
        />

        <ContactCard
          label="GitHub"
          value="github.com/igaramadana"
          href="https://github.com/igaramadana"
          accent="cyan"
          icon={
            <SocialIconBadge
              href="https://github.com/igaramadana"
              label="GitHub"
              accent="cyan"
            >
              <GitHubLogoIcon className="h-5 w-5" />
            </SocialIconBadge>
          }
        />

        <ContactCard
          label="LinkedIn"
          value="linkedin.com/in/igaramadana"
          href="https://www.linkedin.com/in/iga-ramadana-sahputra-5797b9287?utm_source=share_via&utm_content=profile&utm_medium=member_android"
          accent="cyan"
          icon={
            <SocialIconBadge
              href="https://www.linkedin.com/in/iga-ramadana-sahputra-5797b9287?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              label="LinkedIn"
              accent="cyan"
            >
              <LinkedInLogoIcon className="h-5 w-5" />
            </SocialIconBadge>
          }
        />

        <ContactCard
          label="Instagram"
          value="instagram.com/igaramadana"
          href="https://instagram.com/igarmdna"
          accent="pink"
          icon={
            <SocialIconBadge
              href="https://instagram.com/igarmdna"
              label="Instagram"
              accent="pink"
            >
              <InstagramLogoIcon className="size-5" strokeWidth={2.2} />
            </SocialIconBadge>
          }
        />
      </div>

      <div className="relative flex flex-wrap items-center justify-center gap-4 px-6">
        <ContactButton href="mailto:igrmdns085@gmail.com" primary>
          <>
            <Mail className="size-4" />
            Send Email
          </>
        </ContactButton>

        <ContactButton href="https://github.com/igaramadana" external>
          <>
            <GitHubLogoIcon className="h-4 w-4" />
            Visit GitHub
          </>
        </ContactButton>

        <ContactButton href="https://linkedin.com/in/igaramadana" external>
          <>
            <LinkedInLogoIcon className="h-4 w-4" />
            Visit LinkedIn
          </>
        </ContactButton>

        <ContactButton href="https://instagram.com/igaramadana" external>
          <>
            <InstagramLogoIcon className="size-4" />
            Visit Instagram
          </>
        </ContactButton>
      </div>
    </section>
  );
}