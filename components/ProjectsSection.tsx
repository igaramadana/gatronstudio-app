import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Portfolio Website",
    category: "Frontend",
    stack: "Next.js • Tailwind",
    image: "/images/projects/project-1.jpg",
    href: "/projects/portfolio-website",
    description:
      "Website portfolio modern dengan desain dark premium, animasi halus, dan struktur modular yang scalable.",
  },
  {
    title: "Company Profile",
    category: "Fullstack",
    stack: "Next.js • Prisma • Supabase",
    image: "/images/projects/project-2.jpg",
    href: "/projects/company-profile",
    description:
      "Website company profile dengan CMS sederhana, optimasi performa, dan UI yang fokus pada branding serta conversion.",
  },
  {
    title: "Dashboard Admin",
    category: "Web App",
    stack: "Next.js • PostgreSQL",
    image: "/images/projects/project-3.jpg",
    href: "/projects/dashboard-admin",
    description:
      "Dashboard admin responsif untuk mengelola data, konten, dan workflow internal dengan experience yang cepat dan rapi.",
  },
  {
    title: "Booking Platform",
    category: "Fullstack",
    stack: "Next.js • Supabase Auth",
    image: "/images/projects/project-4.jpg",
    href: "/projects/booking-platform",
    description:
      "Platform booking modern dengan autentikasi, manajemen jadwal, dan interface yang clean untuk pengguna akhir.",
  },
  {
    title: "E-Commerce UI",
    category: "Frontend",
    stack: "React • Tailwind",
    image: "/images/projects/project-5.jpg",
    href: "/projects/ecommerce-ui",
    description:
      "UI e-commerce dengan tampilan premium, reusable components, dan layout yang dirancang untuk meningkatkan engagement.",
  },
  {
    title: "Personal Brand Site",
    category: "Branding",
    stack: "Next.js • Motion",
    image: "/images/projects/project-6.jpg",
    href: "/projects/personal-brand-site",
    description:
      "Landing page personal brand dengan visual identity kuat, section storytelling, dan CTA yang diarahkan untuk conversion.",
  },
];

function SectionButton({
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
          primary ? "bg-lime-400" : "bg-white/30"
        }`}
        aria-hidden="true"
      >
        <span
          className={`block h-full w-full [clip-path:polygon(12px_0,100%_0,100%_calc(100%-12px),calc(100%-12px)_100%,0_100%,0_12px)] ${
            primary ? "bg-[#283222]" : "bg-[#0C0F14]"
          }`}
        />
      </span>

      <span className="relative font-quantico text-sm uppercase leading-none text-white transition-all duration-300 group-hover:text-white/90 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] lg:text-[1.05rem]">
        {children}
      </span>
    </Link>
  );
}

function ProjectCard({
  title,
  category,
  stack,
  image,
  href,
  description,
}: {
  title: string;
  category: string;
  stack: string;
  image: string;
  href: string;
  description: string;
}) {
  return (
    <div className="flex">
      <div className="group relative flex w-full flex-1 flex-col p-4 transition-transform duration-300 hover:-translate-y-1 lg:p-6">
        <div
          className="absolute inset-0 bg-white/15"
          style={{
            clipPath:
              "polygon(18px 0,100% 0,100% calc(100% - 18px),calc(100% - 18px) 100%,0 100%,0 18px)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-[1px] bg-[linear-gradient(155deg,rgba(255,255,255,0.04)_0%,rgba(153,153,153,0.04)_100%)]"
          style={{
            clipPath:
              "polygon(18px 0,100% 0,100% calc(100% - 18px),calc(100% - 18px) 100%,0 100%,0 18px)",
          }}
          aria-hidden="true"
        />

        <Link href={href} className="relative flex w-full flex-col gap-6 lg:gap-8">
          <div className="relative aspect-square w-full max-h-[18.75rem]">
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

            <p className="absolute left-0 top-0 flex h-7 items-center font-quantico text-sm font-bold leading-none text-white lg:text-base">
              {category}
            </p>

            <p className="absolute bottom-0 right-0 flex h-8 items-center font-quantico text-base font-bold leading-none text-lime-300 md:text-lg lg:text-xl">
              {stack}
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 lg:gap-4">
            <h3 className="whitespace-pre-line font-quantico text-2xl font-bold leading-[1.2] tracking-tight text-white md:text-3xl lg:text-4xl xl:text-5xl">
              {title}
            </h3>

            <p className="w-full text-base leading-[1.6] text-white/60 lg:text-lg">
              {description}
            </p>
          </div>
        </Link>

        <div className="relative mt-auto flex items-stretch gap-3 pt-6 lg:pt-8">
          <SectionButton href={href} primary>
            View Project
          </SectionButton>
          <SectionButton href={href}>Details</SectionButton>
        </div>
      </div>
    </div>
  );
}

function PaginationButton({
  children,
  ariaLabel,
}: {
  children: React.ReactNode;
  ariaLabel: string;
}) {
  return (
    <button
      aria-label={ariaLabel}
      className="relative flex size-10 items-center justify-center"
      type="button"
    >
      <div
        className="absolute inset-0 bg-white/10"
        style={{
          clipPath:
            "polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px)",
        }}
      />
      <div
        className="absolute inset-0 bg-white/15"
        style={{
          clipPath:
            "polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px)",
          mask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          padding: "1px",
        }}
      />
      <span className="relative text-white">{children}</span>
    </button>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative flex w-full flex-col items-center gap-12 py-16 md:py-24 lg:gap-16 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(40,255,140,0.06),transparent_22%),radial-gradient(circle_at_80%_35%,rgba(0,180,255,0.05),transparent_22%),linear-gradient(180deg,#050505_0%,#081010_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:28px_28px]" />

      <div className="relative flex max-w-5xl flex-col items-center px-4 text-center sm:px-6">
        <div className="flex w-full flex-col items-center gap-3 lg:gap-4">
          <div className="flex flex-col items-center gap-0.5 font-quantico font-bold leading-[1.2]">
            <p className="text-sm tracking-tight text-white">PROJECTS</p>
            <h2 className="bg-gradient-to-b from-lime-300 via-lime-400 to-lime-500 bg-clip-text text-center font-quantico text-3xl tracking-tight text-transparent sm:text-4xl lg:text-5xl xl:text-6xl">
              Explore What I Build
            </h2>
          </div>

          <p className="min-w-full text-center text-base leading-[1.6] text-white/60 lg:text-lg">
            Website, dashboard, dan aplikasi modern. Dibangun dengan fokus pada
            performa, visual, dan pengalaman pengguna.
          </p>
        </div>
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 px-8 sm:px-10 md:grid-cols-2 xl:grid-cols-3 lg:gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>

      <div className="relative flex items-center gap-4">
        <PaginationButton ariaLabel="Previous page">
          <ArrowLeft className="size-4" strokeWidth={2.5} />
        </PaginationButton>

        <div className="flex items-center gap-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <button
              key={i}
              aria-label={`Go to page ${i + 1}`}
              className={`size-3 rounded-full transition-colors duration-200 ${
                i === 1 ? "bg-lime-400" : "bg-white/10"
              }`}
              type="button"
            />
          ))}
        </div>

        <PaginationButton ariaLabel="Next page">
          <ArrowRight className="size-4" strokeWidth={2.5} />
        </PaginationButton>
      </div>
    </section>
  );
}