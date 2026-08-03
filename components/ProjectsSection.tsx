"use client";

import { useMemo, useRef, useState } from "react";
import Image from "next/image";
import { useLenis } from "lenis/react";

import { InView } from "@/components/motion-primitives/in-view";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/motion-primitives/carousel";
import ChamferButton from "@/components/ui/ChamferButton";
import {
  trackProjectClick,
  trackProjectFilter,
  trackProjectPagination,
} from "@/lib/analytics";
import { projectCarouselTransition, revealVariants } from "@/lib/motion";
import {
  FiArrowLeft,
  FiArrowRight,
  FiExternalLink,
  FiGitBranch,
} from "react-icons/fi";

const projects = [
  {
    title: "Sistem Informasi Tata Tertib Kampus",
    description: "Project Based Learning (PBL) for managing campus regulations",
    image: "/assets/tatib.webp",
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
    image: "/assets/ukt.webp",
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
    image: "/assets/toeic.webp",
    href: "#",
    github: "https://github.com/igaramadana/PWL_PBL_TOEIC",
    tech: ["Laravel", "TailwindCSS", "Flowbite"],
    gradient: "from-yellow-500 to-orange-600",
    category: "Web App",
  },
  {
    title: "KangDjoe",
    description: "Operational website for KangDjoe Cheese Company",
    image: "/assets/kangdjoe.webp",
    href: "https://operasional.kangdjoe.com/",
    github: "https://github.com/igaramadana/cheeseops",
    tech: ["Laravel", "Flowbite", "TailwindCSS"],
    gradient: "from-red-500 to-pink-600",
    category: "Web App",
  },
  {
    title: "Website Portofolio",
    description: "My personal website built with modern tech stack",
    image: "/assets/porto.webp",
    href: "#",
    github: "https://github.com/wendoj/portfolio",
    tech: ["Next.js", "Tailwind", "TypeScript"],
    gradient: "from-violet-500 to-purple-600",
    category: "Web App",
  },
  {
    title: "CV Builder",
    description:
      "Website for creating and customizing professional CVs with various templates and export options",
    image: "/assets/buatcv.webp",
    href: "https://igaramadana-buatcv.vercel.app",
    github: "https://github.com/igaramadana/cv-builder",
    tech: ["NextJS", "Tailwind", "TypeScript", "Shadcn"],
    gradient: "from-fuchsia-500 to-violet-600",
    category: "Web App",
  },
  {
    title: "Sentra Nusantara FiveM Roleplay Server",
    description: "A custom FiveM server with unique scripts and features",
    image: "/assets/sena.webp",
    href: "#",
    github: "#",
    tech: ["Lua", "QBCore", "MySQL"],
    gradient: "from-indigo-500 to-purple-600",
    category: "FiveM",
  },
  {
    title: "Arena Battleground Fivem Server",
    description: "A custom FiveM server with unique scripts and features",
    image: "/assets/abri.webp",
    href: "#",
    github: "#",
    tech: ["Lua", "ESX", "MySQL"],
    gradient: "from-sky-500 to-indigo-600",
    category: "FiveM",
  },
  {
    title: "Ox_lib Redesign",
    description:
      "Redesign of the popular FiveM script ox_lib with improved UI and UX",
    image: "/assets/ox-lib.webp",
    href: "#",
    github: "https://github.com/igaramadana/ox_lib-redesign",
    tech: ["Lua", "OX", "React"],
    gradient: "from-sky-500 to-indigo-600",
    category: "FiveM",
  },
  {
    title: "Ox_lib Redesign Prodigy inspired",
    description:
      "Redesign of the popular FiveM script ox_lib with improved UI and UX inspired by Prodigy RP 2.0 server",
    image: "/assets/ox-lib_prodigy.webp",
    href: "#",
    github: "#",
    tech: ["Lua", "OX", "React"],
    gradient: "from-sky-500 to-indigo-600",
    category: "FiveM",
  },
  {
    title: "Ox_inventory Redesign PUBG style",
    description:
      "Redesign of the popular FiveM script ox_inventory with improved UI and UX inspired by IGMC",
    image: "/assets/ox-invent_abri.webp",
    href: "#",
    github: "#",
    tech: ["Lua", "OX", "React"],
    gradient: "from-sky-500 to-indigo-600",
    category: "FiveM",
  },
  {
    title: "Looting Ground Script",
    description:
      "A custom fivem Script for looting ground items like PUBG for Arena Battleground server",
    image: "/assets/looting.webp",
    href: "#",
    github: "#",
    tech: ["Lua", "ESX"],
    gradient: "from-sky-500 to-indigo-600",
    category: "FiveM",
  },
  {
    title: "Bot Discord Reminder",
    description:
      "A custom Discord bot for setting reminders for my tasks and events",
    image: "/assets/botdc.webp",
    href: "#",
    github: "#",
    tech: ["JavaScript", "Node.js"],
    gradient: "from-cyan-500 to-blue-600",
    category: "Bot",
  },
  {
    title: "Bot Arena Battleground",
    description:
      "A custom Discord bot for managing the Arena Battleground features like Matchresults, Leaderboard, and Event Announcements",
    image: "/assets/abri-bot.webp",
    href: "#",
    github: "#",
    tech: ["LUA"],
    gradient: "from-cyan-500 to-blue-600",
    category: "Bot",
  },
] as const;

const ITEMS_PER_PAGE = 3;
const categories = ["All", "Web App", "FiveM", "Bot"] as const;
type Category = (typeof categories)[number];

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

function TechBadge({ label, gradient }: { label: string; gradient: string }) {
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

function FilterButton({
  active,
  label,
  onClick,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className="group relative inline-flex items-center justify-center px-4 py-2.5 transition-transform duration-150 active:scale-[0.97] lg:px-5"
    >
      <span
        className={`absolute inset-0 [clip-path:polygon(10px_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%,0_10px)] transition-all duration-300 ${
          active ? "bg-[#283222]" : "bg-[#0C0F14] group-hover:bg-[#11161d]"
        }`}
        aria-hidden="true"
      />
      <span
        className={`absolute inset-0 [clip-path:polygon(10px_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%,0_10px)] p-px transition-all duration-300 ${
          active ? "bg-lime-400" : "bg-white/20 group-hover:bg-lime-400"
        }`}
        aria-hidden="true"
      >
        <span
          className={`block h-full w-full [clip-path:polygon(10px_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%,0_10px)] ${
            active ? "bg-[#283222]" : "bg-[#0C0F14]"
          }`}
        />
      </span>
      <span
        className={`relative font-quantico text-xs font-semibold uppercase tracking-[0.18em] transition-colors duration-300 lg:text-sm ${
          active ? "text-lime-300" : "text-white/80 group-hover:text-white"
        }`}
      >
        {label}
      </span>
    </button>
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
  tech: readonly string[];
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
          className="absolute inset-px bg-[linear-gradient(155deg,rgba(255,255,255,0.04)_0%,rgba(153,153,153,0.04)_100%)] backdrop-blur-[2px]"
          style={{
            clipPath:
              "polygon(18px 0,100% 0,100% calc(100% - 18px),calc(100% - 18px) 100%,0 100%,0 18px)",
          }}
          aria-hidden="true"
        />

        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div
            className={`absolute -left-10 top-0 h-24 w-24 rounded-full bg-linear-to-r ${gradient} opacity-20 blur-3xl`}
          />
          <div
            className={`absolute -right-10 bottom-0 h-24 w-24 rounded-full bg-linear-to-r ${gradient} opacity-20 blur-3xl`}
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
                  draggable={false}
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
            <ChamferButton
              href={href}
              variant="primary"
              external={!liveDisabled}
              disabled={liveDisabled}
              onClick={() =>
                trackProjectClick({
                  projectName: title,
                  projectCategory: category,
                  destination: "live_demo",
                })
              }
            >
              <>
                <FiExternalLink className="size-4" />
                Live Demo
              </>
            </ChamferButton>

            <ChamferButton
              href={github}
              external={!githubDisabled}
              disabled={githubDisabled}
              onClick={() =>
                trackProjectClick({
                  projectName: title,
                  projectCategory: category,
                  destination: "github",
                })
              }
            >
              <>
                <FiGitBranch className="size-4" />
                Github
              </>
            </ChamferButton>
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
      className={`group relative flex size-11 items-center justify-center transition-opacity duration-200 ${
        disabled ? "cursor-not-allowed opacity-35" : "hover:opacity-80"
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
          disabled
            ? "bg-white/10"
            : "bg-linear-to-r from-lime-400/60 to-cyan-400/40"
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
      <span className="relative text-white">{children}</span>
    </button>
  );
}

export default function ProjectsSection() {
  const lenis = useLenis();
  const gridRef = useRef<HTMLDivElement | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredProjects.length / ITEMS_PER_PAGE),
  );

  const projectPages = useMemo(
    () =>
      Array.from({ length: totalPages }, (_, pageIndex) => {
        const startIndex = pageIndex * ITEMS_PER_PAGE;
        return filteredProjects.slice(startIndex, startIndex + ITEMS_PER_PAGE);
      }),
    [filteredProjects, totalPages],
  );

  const scrollToGrid = () => {
    if (!gridRef.current) return;

    if (lenis) {
      lenis.scrollTo(gridRef.current, { offset: -96 });
      return;
    }

    gridRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleCategoryChange = (category: Category) => {
    if (category === activeCategory) return;

    trackProjectFilter(category);
    setCurrentPage(1);
    setActiveCategory(category);
    requestAnimationFrame(scrollToGrid);
  };

  const goToPage = (
    page: number,
    paginationMethod: "next" | "previous" | "indicator",
  ) => {
    if (page === currentPage || page < 1 || page > totalPages) return;

    trackProjectPagination({
      projectCategory: activeCategory,
      pageNumber: page,
      paginationMethod,
    });
    setCurrentPage(page);
  };

  const handleCarouselIndexChange = (index: number) => {
    const page = index + 1;

    if (page === currentPage) return;

    trackProjectPagination({
      projectCategory: activeCategory,
      pageNumber: page,
      paginationMethod: "carousel",
    });
    setCurrentPage(page);
  };

  return (
    <section
      id="projects"
      className="relative flex w-full flex-col items-center gap-12 py-16 md:py-24 lg:gap-16 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(40,255,140,0.06),transparent_22%),radial-gradient(circle_at_80%_35%,rgba(0,180,255,0.05),transparent_22%),linear-gradient(180deg,#050505_0%,#081010_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.14)_1px,transparent_1px)] bg-size-[28px_28px]" />

      <InView
        variants={revealVariants.blurUp}
        className="relative flex max-w-5xl flex-col items-center px-4 text-center sm:px-6"
      >
        <div className="flex w-full flex-col items-center gap-3 lg:gap-4">
          <div className="flex flex-col items-center gap-0.5 font-quantico font-bold leading-[1.2]">
            <p className="font-quantico text-sm font-bold uppercase tracking-[0.22em] text-white/55">
              PROJECTS
            </p>
            <h2 className="bg-linear-to-b from-lime-300 via-lime-400 to-lime-500 bg-clip-text text-center font-quantico text-3xl tracking-tight text-transparent sm:text-4xl lg:text-5xl xl:text-6xl">
              Explore What I Build
            </h2>
          </div>

          <p className="min-w-full text-center text-base leading-[1.6] text-white/60 lg:text-lg">
            Kumpulan project yang saya kerjakan berdasarkan kategori agar lebih
            mudah dilihat: Web App, FiveM, dan Bot.
          </p>
        </div>
      </InView>

      <InView
        variants={revealVariants.fadeUp}
        className="relative flex flex-wrap items-center justify-center gap-3 px-6"
      >
        {categories.map((category) => (
          <FilterButton
            key={category}
            label={category}
            active={activeCategory === category}
            onClick={() => handleCategoryChange(category)}
          />
        ))}
      </InView>

      <div ref={gridRef} className="relative w-full max-w-7xl px-8 sm:px-10">
        <InView variants={revealVariants.fadeUp}>
          <Carousel
            key={activeCategory}
            index={currentPage - 1}
            onIndexChange={handleCarouselIndexChange}
            ariaLabel={`${activeCategory} projects`}
          >
            <CarouselContent transition={projectCarouselTransition}>
              {projectPages.map((pageProjects, pageIndex) => (
                <CarouselItem
                  key={`${activeCategory}-${pageIndex}`}
                  index={pageIndex}
                  className="basis-full pr-6"
                >
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 xl:grid-cols-3">
                    {pageProjects.map((project) => (
                      <ProjectCard key={project.title} {...project} />
                    ))}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </InView>
      </div>

      {totalPages > 1 && (
        <InView
          variants={revealVariants.fadeUp}
          className="relative flex items-center gap-5"
        >
          <PaginationButton
            ariaLabel="Previous page"
            onClick={() => goToPage(currentPage - 1, "previous")}
            disabled={currentPage === 1}
          >
            <FiArrowLeft className="size-4" strokeWidth={2.5} />
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
                  className="group relative flex h-6 w-8 items-center justify-center"
                  type="button"
                  onClick={() => goToPage(page, "indicator")}
                >
                  <span
                    className={`block h-1.5 rounded-full transition-[width,background-color] duration-300 ${
                      isActive
                        ? "w-7 bg-lime-300"
                        : "w-1.5 bg-white/25 group-hover:bg-white/45"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          <PaginationButton
            ariaLabel="Next page"
            onClick={() => goToPage(currentPage + 1, "next")}
            disabled={currentPage === totalPages}
          >
            <FiArrowRight className="size-4" strokeWidth={2.5} />
          </PaginationButton>
        </InView>
      )}
    </section>
  );
}
