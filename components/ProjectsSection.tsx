"use client";

import { useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  GitBranch,
  ExternalLink,
} from "lucide-react";

const projects = [
  {
    title: "Sistem Informasi Tata Tertib Kampus",
    description: "Project Based Learning (PBL) for managing campus regulations",
    image: "/assets/tatib.png",
    href: "#",
    github: "https://github.com/igaramadana/PWD_PBLSITatib",
    tech: ["BootStrap", "CSS", "PHP"],
    gradient: "from-blue-500 to-purple-600",
    category: "Web App",
  },
  {
    title: "Sistem Informasi Pembayaran UKT Mahasiswa",
    description:
      "UTS Mata Kuliah Pemrograman Web Lanjut menggunakan Laravel dan payment gateway Midtrans",
    image: "/assets/ukt.png",
    href: "#",
    github: "https://github.com/igaramadana/UTS_SistemPembayaranUKT",
    tech: ["Laravel", "Bootstrap", "SCSS"],
    gradient: "from-green-500 to-emerald-600",
    category: "Web App",
  },
  {
    title: "Sistem Informasi Pendaftaran Ujian TOEIC",
    description:
      "Project Based Learning (PBL) for managing TOEIC exam registrations",
    image: "/assets/toeic.png",
    href: "#",
    github: "https://github.com/igaramadana/PWL_PBL_TOEIC",
    tech: ["Laravel", "TailwindCSS", "Flowbite"],
    gradient: "from-yellow-500 to-orange-600",
    category: "Web App",
  },
  {
    title: "KangDjoe",
    description: "Operational website for KangDjoe Cheese Company",
    image: "/assets/kangdjoe.png",
    href: "https://operasional.kangdjoe.com/",
    github: "https://github.com/igaramadana/cheeseops",
    tech: ["Laravel", "Flowbite", "TailwindCSS"],
    gradient: "from-red-500 to-pink-600",
    category: "Web App",
  },
  {
    title: "Sentra Nusantara FiveM Roleplay Server",
    description: "A custom FiveM Roleplay server with unique scripts and features",
    image: "/assets/sena.jpeg",
    href: "#",
    github: "#",
    tech: ["Lua", "QBCore", "MySQL"],
    gradient: "from-indigo-500 to-purple-600",
    category: "Gaming",
  },
  {
    title: "Website Portofolio",
    description: "My personal website built with modern tech stack",
    image: "/assets/porto.png",
    href: "#",
    github: "https://github.com/wendoj/portfolio",
    tech: ["Next.js", "Tailwind", "TypeScript"],
    gradient: "from-violet-500 to-purple-600",
    category: "Portfolio",
  },
  {
    title: "Arena Battleground Fivem Server",
    description: "A custom FiveM server with unique scripts and features",
    image: "/assets/abri.png",
    href: "#",
    github: "#",
    tech: ["Lua", "ESX", "MySQL"],
    gradient: "from-violet-500 to-purple-600",
    category: "Gaming",
  },
  {
    title: "Bot Discord Reminder",
    description: "A custom Discord bot for setting reminders for my tasks and events",
    image: "/assets/botdc.png",
    href: "#",
    github: "#",
    tech: ["JavaScript", "NODE"],
    gradient: "from-violet-500 to-purple-600",
    category: "Bot Discord",
  },
  {
    title: "CV Builder",
    description: "Website for creating and customizing professional CVs with various templates and export options",
    image: "/assets/buatcv.png",
    href: "https://igaramadana-buatcv.vercel.app",
    github: "https://github.com/igaramadana/cv-builder",
    tech: ["NextJS", "Tailwind", "TypeScript", "Shadcn"],
    gradient: "from-violet-500 to-purple-600",
    category: "Website",
  },
];

const ITEMS_PER_PAGE = 3;

function SectionButton({
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
  const isDisabled = href === "#" || href.trim() === "";

  const className = `group relative inline-flex shrink-0 items-center justify-center px-5 py-2.5 transition-transform duration-150 active:scale-[0.97] lg:px-6 lg:py-3 ${
    primary ? "drop-shadow-[0_0_24px_rgba(181,255,89,0.2)]" : ""
  } ${isDisabled ? "pointer-events-none opacity-50" : ""}`;

  const content = (
    <>
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
          primary ? "bg-lime-400" : "bg-white/20"
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
    </>
  );

  if (isDisabled) {
    return <div className={className}>{content}</div>;
  }

  return (
    <Link
      href={href}
      className={className}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {content}
    </Link>
  );
}

function CategoryBadge({
  label,
  gradient,
}: {
  label: string;
  gradient: string;
}) {
  return (
    <div className="group relative inline-flex">
      <span
        className={`absolute inset-0 bg-linear-to-r ${gradient} opacity-25 blur-lg transition-opacity duration-300 group-hover:opacity-40`}
        style={{
          clipPath:
            "polygon(12px 0,100% 0,100% calc(100% - 12px),calc(100% - 12px) 100%,0 100%,0 12px)",
        }}
        aria-hidden="true"
      />

      <span
        className={`absolute inset-0 bg-linear-to-r ${gradient} p-px`}
        style={{
          clipPath:
            "polygon(12px 0,100% 0,100% calc(100% - 12px),calc(100% - 12px) 100%,0 100%,0 12px)",
        }}
        aria-hidden="true"
      >
        <span
          className="block h-full w-full bg-[#0B1016]/90 backdrop-blur-md"
          style={{
            clipPath:
              "polygon(12px 0,100% 0,100% calc(100% - 12px),calc(100% - 12px) 100%,0 100%,0 12px)",
          }}
        />
      </span>

      <span className="pointer-events-none absolute left-3 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full border border-white/20 bg-lime-300 shadow-[0_0_14px_rgba(181,255,89,0.9)]" />

      <span
        className="relative inline-flex items-center py-2 pl-7 pr-4 font-quantico text-[10px] font-bold uppercase tracking-[0.22em] text-white/95 md:text-[11px]"
        style={{
          clipPath:
            "polygon(12px 0,100% 0,100% calc(100% - 12px),calc(100% - 12px) 100%,0 100%,0 12px)",
        }}
      >
        {label}
      </span>
    </div>
  );
}

function TechBadge({
  label,
  gradient,
}: {
  label: string;
  gradient: string;
}) {
  return (
    <span className="group relative inline-flex">
      <span
        className={`absolute inset-0 bg-linear-to-r ${gradient} opacity-20 blur-md transition-opacity duration-300 group-hover:opacity-35`}
        style={{
          clipPath:
            "polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px)",
        }}
        aria-hidden="true"
      />

      <span
        className={`absolute inset-0 bg-linear-to-r ${gradient} p-px`}
        style={{
          clipPath:
            "polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px)",
        }}
        aria-hidden="true"
      >
        <span
          className="block h-full w-full bg-[#0A0D12]/95 backdrop-blur-md"
          style={{
            clipPath:
              "polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px)",
          }}
        />
      </span>

      <span className="pointer-events-none absolute left-2.5 top-1/2 size-1.5 -translate-y-1/2 rounded-full bg-lime-300 shadow-[0_0_10px_rgba(181,255,89,0.85)]" />

      <span
        className="relative inline-flex items-center py-1.5 pl-6 pr-3 font-quantico text-[11px] font-semibold uppercase tracking-[0.16em] text-white/85 transition-colors duration-300 group-hover:text-white"
        style={{
          clipPath:
            "polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px)",
        }}
      >
        {label}
      </span>
    </span>
  );
}

function ProjectCard({
  title,
  category,
  image,
  href,
  description,
  github,
  tech,
  gradient,
}: {
  title: string;
  category: string;
  image: string;
  href: string;
  description: string;
  github: string;
  tech: string[];
  gradient: string;
}) {
  const liveDisabled = href === "#" || href.trim() === "";
  const githubDisabled = github === "#" || github.trim() === "";

  return (
    <article className="flex h-full">
      <div className="group relative flex w-full flex-1 flex-col overflow-hidden p-4 transition-transform duration-300 hover:-translate-y-1 lg:p-6">
        <div
          className="absolute inset-0 bg-white/10"
          style={{
            clipPath:
              "polygon(18px 0,100% 0,100% calc(100% - 18px),calc(100% - 18px) 100%,0 100%,0 18px)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-px bg-[linear-gradient(155deg, rgba(255, 255, 255, 0.04) 0%, rgba(153, 153, 153, 0.04) 100%)] backdrop-blur-[2px]"
          style={{
            clipPath:
              "polygon(18px 0,100% 0,100% calc(100% - 18px),calc(100% - 18px) 100%,0 100%,0 18px)",
          }}
          aria-hidden="true"
        />

        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div
            className={`absolute -left-10 top-0 h-24 w-24 bg-linear-to-r ${gradient} rounded-full blur-3xl opacity-20`}
          />
          <div
            className={`absolute -right-10 bottom-0 h-24 w-24 bg-linear-to-r ${gradient} rounded-full blur-3xl opacity-20`}
          />
        </div>

        <div className="relative flex h-full flex-col gap-6 lg:gap-7">
          <div className="relative">
            <div className="relative aspect-16/11 w-full overflow-hidden">
              <div
                className="absolute inset-0 overflow-hidden"
                style={{
                  clipPath:
                    "polygon(16px 0,100% 0,100% calc(100% - 16px),calc(100% - 16px) 100%,0 100%,0 16px)",
                }}
              >
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
              </div>

              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />

              <div className="absolute left-4 top-4 z-10">
                <CategoryBadge label={category} gradient={gradient} />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-quantico text-2xl font-bold leading-[1.2] tracking-tight text-white md:text-3xl">
              {title}
            </h3>

            <p className="text-sm leading-[1.8] text-white/65 md:text-base">
              {description}
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              {tech.map((item) => (
                <TechBadge
                  key={`${title}-${item}`}
                  label={item}
                  gradient={gradient}
                />
              ))}
            </div>
          </div>

          <div className="mt-auto flex flex-wrap items-stretch gap-3 pt-2">
            <SectionButton href={href} primary external={!liveDisabled}>
              <>
                <ExternalLink className="size-4" />
                Live Demo
              </>
            </SectionButton>

            <SectionButton href={github} external={!githubDisabled}>
              <>
                <GitBranch className="size-4" />
                Github
              </>
            </SectionButton>
          </div>
        </div>
      </div>
    </article>
  );
}

function PaginationButton({
  children,
  ariaLabel,
  onClick,
  disabled = false,
}: {
  children: React.ReactNode;
  ariaLabel: string;
  onClick?: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      aria-label={ariaLabel}
      className={`group relative flex size-11 items-center justify-center transition-all duration-300 ${
        disabled
          ? "cursor-not-allowed opacity-35"
          : "hover:-translate-y-0.5 hover:opacity-100"
      }`}
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      <div
        className="absolute inset-0 bg-white/8 transition-colors duration-300 group-hover:bg-white/12"
        style={{
          clipPath:
            "polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px)",
        }}
      />
      <div
        className={`absolute inset-0 p-px ${
          disabled ? "bg-white/10" : "bg-linear-to-r from-lime-400/60 to-cyan-400/40"
        }`}
        style={{
          clipPath:
            "polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px)",
        }}
      >
        <div
          className="h-full w-full bg-[#0B0F14]"
          style={{
            clipPath:
              "polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px)",
          }}
        />
      </div>
      {!disabled && (
        <div className="absolute inset-0 bg-lime-300/10 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />
      )}
      <span className="relative text-white transition-transform duration-300 group-hover:scale-110">
        {children}
      </span>
    </button>
  );
}

export default function ProjectsSection() {
  const gridRef = useRef<HTMLDivElement | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [direction, setDirection] = useState(0);

  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);

  const paginatedProjects = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return projects.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [currentPage]);

  const scrollToGrid = () => {
    gridRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const goToPage = (page: number) => {
    if (page === currentPage || page < 1 || page > totalPages) return;

    setDirection(page > currentPage ? 1 : -1);
    setCurrentPage(page);
    requestAnimationFrame(scrollToGrid);
  };

  const goToPreviousPage = () => {
    if (currentPage === 1) return;
    goToPage(currentPage - 1);
  };

  const goToNextPage = () => {
    if (currentPage === totalPages) return;
    goToPage(currentPage + 1);
  };

  const pageVariants = {
    initial: (dir: number) => ({
      opacity: 0,
      y: 28,
      x: dir > 0 ? 40 : -40,
    }),
    animate: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
        staggerChildren: 0.08,
      },
    },
    exit: (dir: number) => ({
      opacity: 0,
      y: -18,
      x: dir > 0 ? -40 : 40,
      transition: {
        duration: 0.38,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    }),
  };

  const cardVariants = {
    initial: (dir: number) => ({
      opacity: 0,
      y: 24,
      x: dir > 0 ? 24 : -24,
      filter: "blur(8px)",
    }),
    animate: {
      opacity: 1,
      y: 0,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
    exit: (dir: number) => ({
      opacity: 0,
      y: -16,
      x: dir > 0 ? -24 : 24,
      filter: "blur(6px)",
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    }),
  };

  return (
    <section
      id="projects"
      className="relative flex w-full flex-col items-center gap-12 py-16 md:py-24 lg:gap-16 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(40,255,140,0.06),transparent_22%),radial-gradient(circle_at_80%_35%,rgba(0,180,255,0.05),transparent_22%),linear-gradient(180deg,#050505_0%,#081010_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.14)_1px,transparent_1px)] bg-size-[28px_28px]" />

      <div className="relative flex max-w-5xl flex-col items-center px-4 text-center sm:px-6">
        <div className="flex w-full flex-col items-center gap-3 lg:gap-4">
          <div className="flex flex-col items-center gap-0.5 font-quantico font-bold leading-[1.2]">
            <p className="text-sm tracking-tight text-white">PROJECTS</p>
            <h2 className="bg-linear-to-b from-lime-300 via-lime-400 to-lime-500 bg-clip-text text-center font-quantico text-3xl tracking-tight text-transparent sm:text-4xl lg:text-5xl xl:text-6xl">
              Explore What I Build
            </h2>
          </div>

          <p className="min-w-full text-center text-base leading-[1.6] text-white/60 lg:text-lg">
            Kumpulan project web, sistem informasi, dan eksperimen digital yang
            saya bangun dengan fokus pada performa, visual, dan pengalaman
            pengguna.
          </p>
        </div>
      </div>

      <div ref={gridRef} className="relative w-full max-w-7xl px-8 sm:px-10">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentPage}
            custom={direction}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 lg:gap-8"
          >
            {paginatedProjects.map((project) => (
              <motion.div
                key={`${currentPage}-${project.title}`}
                custom={direction}
                variants={cardVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                layout
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {totalPages > 1 && (
        <div className="relative flex items-center gap-5">
          <PaginationButton
            ariaLabel="Previous page"
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
          >
            <ArrowLeft className="size-4" strokeWidth={2.5} />
          </PaginationButton>

          <div className="flex items-center gap-3">
            {Array.from({ length: totalPages }).map((_, i) => {
              const page = i + 1;
              const isActive = page === currentPage;

              return (
                <button
                  key={page}
                  aria-label={`Go to page ${page}`}
                  aria-current={isActive ? "page" : undefined}
                  className="group relative flex h-4 items-center justify-center"
                  type="button"
                  onClick={() => goToPage(page)}
                >
                  <span
                    className={`absolute transition-all duration-300 ${
                      isActive
                        ? "h-4 w-10 bg-linear-to-r from-lime-300 via-lime-400 to-cyan-400 opacity-100 blur-[10px]"
                        : "h-3 w-3 bg-white/20 opacity-0 blur-[6px] group-hover:opacity-100"
                    }`}
                    style={{
                      clipPath:
                        "polygon(6px 0,100% 0,100% calc(100% - 6px),calc(100% - 6px) 100%,0 100%,0 6px)",
                    }}
                    aria-hidden="true"
                  />
                  <span
                    className={`relative transition-all duration-300 ${
                      isActive
                        ? "h-3 w-8 bg-linear-to-r from-lime-300 via-lime-400 to-cyan-400 shadow-[0_0_14px_rgba(181,255,89,0.55)]"
                        : "h-2.5 w-2.5 bg-white/15 group-hover:bg-white/35"
                    }`}
                    style={{
                      clipPath:
                        "polygon(6px 0,100% 0,100% calc(100% - 6px),calc(100% - 6px) 100%,0 100%,0 6px)",
                    }}
                  />
                </button>
              );
            })}
          </div>

          <PaginationButton
            ariaLabel="Next page"
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
          >
            <ArrowRight className="size-4" strokeWidth={2.5} />
          </PaginationButton>
        </div>
      )}
    </section>
  );
}