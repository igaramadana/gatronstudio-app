import Link from "next/link";
import type { ReactNode } from "react";

import { siteConfig } from "@/lib/site";

type LegalSection = {
  title: string;
  content: ReactNode;
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  sections: LegalSection[];
};

export default function LegalPage({
  eyebrow,
  title,
  description,
  sections,
}: LegalPageProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] px-6 py-16 text-white sm:px-10 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(181,255,89,0.08),transparent_26%),linear-gradient(180deg,#050505_0%,#081010_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:28px_28px]" />

      <article className="relative mx-auto max-w-4xl">
        <Link
          href="/"
          className="font-quantico text-sm uppercase tracking-[0.16em] text-lime-300 transition-opacity hover:opacity-75"
        >
          ← Kembali ke beranda
        </Link>

        <header className="mt-10 border-b border-white/10 pb-10">
          <p className="font-quantico text-sm font-bold uppercase tracking-[0.22em] text-white/50">
            {eyebrow}
          </p>
          <h1 className="mt-3 font-quantico text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-white/65">
            {description}
          </p>
          <p className="mt-4 text-sm text-white/40">
            Terakhir diperbarui: 3 Agustus 2026
          </p>
        </header>

        <div className="space-y-10 py-10">
          {sections.map((section) => (
            <section key={section.title} className="space-y-3">
              <h2 className="font-quantico text-2xl font-bold text-lime-300">
                {section.title}
              </h2>
              <div className="space-y-3 text-base leading-8 text-white/65">
                {section.content}
              </div>
            </section>
          ))}
        </div>

        <footer className="border-t border-white/10 pt-8 text-sm leading-7 text-white/45">
          Pertanyaan mengenai halaman ini dapat dikirim ke{" "}
          <a
            href={`mailto:${siteConfig.author.email}`}
            className="text-lime-300 hover:underline"
          >
            {siteConfig.author.email}
          </a>
          .
        </footer>
      </article>
    </main>
  );
}
