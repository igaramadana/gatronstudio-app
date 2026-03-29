import Link from "next/link";

function AboutButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group relative inline-flex shrink-0 items-center justify-center px-5 py-2.5 lg:px-6 lg:py-3 transition-transform duration-150 active:scale-[0.97]"
    >
      <span
        className="absolute inset-0 [clip-path:polygon(12px_0,100%_0,100%_calc(100%-12px),calc(100%-12px)_100%,0_100%,0_12px)] bg-[#0C0F14] transition-all duration-300 group-hover:brightness-125"
        aria-hidden="true"
      />
      <span
        className="absolute inset-0 [clip-path:polygon(12px_0,100%_0,100%_calc(100%-12px),calc(100%-12px)_100%,0_100%,0_12px)] bg-white/30 p-px"
        aria-hidden="true"
      >
        <span className="block h-full w-full [clip-path:polygon(12px_0,100%_0,100%_calc(100%-12px),calc(100%-12px)_100%,0_100%,0_12px)] bg-[#0C0F14]" />
      </span>

      <span className="relative font-quantico text-sm uppercase leading-none text-white transition-all duration-300 group-hover:text-white/90 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] lg:text-[1.05rem]">
        {children}
      </span>
    </Link>
  );
}

function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-gradient-to-b from-lime-300 via-lime-400 to-lime-500 bg-clip-text font-bold text-transparent">
      {children}
    </span>
  );
}

function HexPatternLeft() {
  return (
    <div className="pointer-events-none absolute left-[-2vw] top-[-8vw] hidden h-[30vw] w-[56vw] opacity-[0.08] mix-blend-overlay lg:block">
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

function HexPatternRight() {
  return (
    <div className="pointer-events-none absolute right-[-8vw] top-[10vw] hidden h-[30vw] w-[56vw] rotate-180 opacity-[0.08] mix-blend-overlay lg:block">
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

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex overflow-hidden py-20 md:py-24 lg:py-32"
    >
      <div className="absolute inset-0 bg-[#0a0f0f]" />
      <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.16)_1px,transparent_1px)] [background-size:28px_28px]" />

      <div className="pointer-events-none absolute -left-[12vw] -top-[8vw] h-[30vw] w-[30vw] rounded-full bg-lime-400/10 blur-[140px]" />
      <div className="pointer-events-none absolute -right-[12vw] bottom-[-8vw] h-[30vw] w-[30vw] rounded-full bg-lime-400/10 blur-[140px]" />

      <HexPatternLeft />
      <HexPatternRight />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-8 px-8 text-center sm:px-10 lg:gap-12">
        <p className="font-quantico text-sm font-bold uppercase leading-[1.2] tracking-[0.22em] text-white/55">
          About Me
        </p>

        <div className="font-quantico text-2xl font-normal leading-[1.2] tracking-tight text-white/75 md:text-3xl lg:text-4xl xl:text-5xl">
          <span>Saya seorang </span>
          <Highlight>fullstack developer</Highlight>
          <span> yang fokus membangun </span>
          <Highlight>website modern</Highlight>
          <span>, </span>
          <Highlight>user experience</Highlight>
          <span> yang clean, dan aplikasi yang bukan cuma berjalan dengan baik, tapi juga memberi </span>
          <Highlight>impact nyata</Highlight>
          <span> untuk personal brand, bisnis, dan produk digital.</span>
        </div>

        <p className="max-w-3xl text-sm leading-7 text-white/58 md:text-base">
          Saya terbiasa bekerja dengan Next.js, Prisma, Supabase, dan pendekatan
          pengembangan yang rapi, scalable, dan tetap memperhatikan detail visual.
          Buat saya, website bukan cuma soal tampilan, tapi juga identitas,
          performa, dan pengalaman yang kuat untuk pengguna.
        </p>

        <AboutButton href="#projects">Learn More</AboutButton>
      </div>
    </section>
  );
}