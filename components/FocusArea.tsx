import { FiCode, FiGlobe, FiLayers, FiServer } from "react-icons/fi";
import { InView, InViewGroup, InViewItem } from "@/components/motion-primitives/in-view";
import ChamferButton from "@/components/ui/ChamferButton";

function FeatureItem({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="relative overflow-hidden p-4">
      <div
        className="absolute inset-0 bg-[#0B0F10]"
        style={{
          clipPath:
            "polygon(14px 0,100% 0,100% calc(100% - 14px),calc(100% - 14px) 100%,0 100%,0 14px)",
        }}
      />
      <div
        className="absolute inset-0 border border-white/10"
        style={{
          clipPath:
            "polygon(14px 0,100% 0,100% calc(100% - 14px),calc(100% - 14px) 100%,0 100%,0 14px)",
        }}
      />
      <div className="pointer-events-none absolute left-0 top-0 h-16 w-16 rounded-full bg-lime-300/10 blur-2xl" />

      <div className="relative flex items-start gap-4">
        <div className="relative mt-1 shrink-0">
          <div
            className="absolute inset-0 bg-lime-300/15 blur-md"
            style={{
              clipPath:
                "polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px)",
            }}
          />
          <div
            className="relative flex size-11 items-center justify-center border border-lime-300/35 bg-[#11161A] text-lime-300"
            style={{
              clipPath:
                "polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px)",
            }}
          >
            {icon}
          </div>
        </div>

        <div>
          <h4 className="font-quantico text-base uppercase tracking-[0.12em] text-white">
            {title}
          </h4>
          <p className="mt-2 text-sm leading-7 text-white/60">{description}</p>
        </div>
      </div>
    </div>
  );
}

function SpecializationCard({
  eyebrow,
  title,
  description,
  features,
  ctaHref,
  ctaLabel,
}: {
  eyebrow: string;
  title: string;
  description: string;
  features: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];
  ctaHref: string;
  ctaLabel: string;
}) {
  return (
    <article className="group relative overflow-hidden p-5 lg:p-6">
      <div
        className="absolute inset-0 bg-white/10"
        style={{
          clipPath:
            "polygon(20px 0,100% 0,100% calc(100% - 20px),calc(100% - 20px) 100%,0 100%,0 20px)",
        }}
      />
      <div
        className="absolute inset-px bg-[linear-gradient(155deg,rgba(255,255,255,0.04)_0%,rgba(153,153,153,0.03)_100%)]"
        style={{
          clipPath:
            "polygon(20px 0,100% 0,100% calc(100% - 20px),calc(100% - 20px) 100%,0 100%,0 20px)",
        }}
      />
      <div className="pointer-events-none absolute -left-6 top-6 h-24 w-24 rounded-full bg-lime-300/10 blur-3xl opacity-80" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-24 w-24 rounded-full bg-lime-300/10 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative">
        <p className="font-quantico text-xs uppercase tracking-[0.22em] text-lime-300/90">
          {eyebrow}
        </p>

        <h3 className="mt-4 font-quantico text-2xl leading-tight text-white md:text-3xl">
          {title}
        </h3>

        <p className="mt-4 max-w-2xl text-sm leading-8 text-white/62 md:text-base">
          {description}
        </p>

        <div className="mt-8 grid gap-4">
          {features.map((feature) => (
            <FeatureItem
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        <div className="mt-8">
          <ChamferButton href={ctaHref} variant="primary">
            {ctaLabel}
          </ChamferButton>
        </div>
      </div>
    </article>
  );
}

export default function FocusArea() {
  return (
    <section
      id="focus-area"
      className="relative overflow-hidden py-20 md:py-24 lg:py-28"
    >
      <div className="absolute inset-0 bg-[#060808]" />
      <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:28px_28px]" />
      <div className="pointer-events-none absolute left-[-10vw] top-[2vw] h-[24vw] w-[24vw] rounded-full bg-lime-300/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-[-10vw] bottom-[0vw] h-[22vw] w-[22vw] rounded-full bg-lime-300/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-8 sm:px-10">
        <InView className="mb-12 max-w-3xl text-center lg:mx-auto lg:mb-16">
            <p className="font-quantico text-sm font-bold uppercase tracking-[0.22em] text-white/55">
                Focus Area
            </p>
            <h2 className="bg-linear-to-b from-lime-300 via-lime-400 to-lime-500 bg-clip-text text-center font-quantico text-3xl tracking-tight font-bold text-transparent sm:text-4xl lg:text-5xl xl:text-6xl">
              My Specialization
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/60 md:text-base">
                Saya berfokus pada dua area utama: membangun website yang rapi,
                modern, dan fungsional, serta mengembangkan pengalaman FiveM yang
                lebih immersive dengan identitas visual yang kuat.
            </p>
        </InView>

        <InViewGroup className="grid gap-6 lg:grid-cols-2">
          <InViewItem>
            <SpecializationCard
            eyebrow="Area 01"
            title="Web Development"
            description="Saya membangun website dan web app yang tidak hanya menarik secara visual, tapi juga jelas secara struktur, nyaman digunakan, dan relevan dengan kebutuhan bisnis atau personal brand."
            ctaHref="#projects"
            ctaLabel="See Web Projects"
            features={[
              {
                icon: <FiGlobe className="size-5" />,
                title: "Landing Page & Company Profile",
                description:
                  "Cocok untuk personal brand, bisnis, studio, maupun kebutuhan promosi produk dengan tampilan yang lebih profesional.",
              },
              {
                icon: <FiLayers className="size-5" />,
                title: "Dashboard & Operational System",
                description:
                  "Membuat sistem yang membantu pengelolaan data, workflow, dan proses internal agar lebih terstruktur dan mudah dipantau.",
              },
              {
                icon: <FiCode className="size-5" />,
                title: "Modern Frontend Experience",
                description:
                  "Fokus pada UI yang clean, responsif, dan konsisten supaya produk terasa lebih polished di berbagai ukuran layar.",
              },
            ]}
            />
          </InViewItem>

          <InViewItem>
            <SpecializationCard
            eyebrow="Area 02"
            title="FiveM Development"
            description="Saya mengembangkan UI, experience, dan sistem pendukung untuk server FiveM dengan pendekatan yang lebih modern, immersive, dan selaras dengan identitas server."
            ctaHref="#projects"
            ctaLabel="See FiveM Projects"
            features={[
              {
                icon: <FiServer className="size-5" />,
                title: "Custom UI & Redesign",
                description:
                  "Mendesain ulang elemen antarmuka agar terasa lebih premium, immersive, dan berbeda dari tampilan default.",
              },
              {
                icon: <FiLayers className="size-5" />,
                title: "Server Identity & Visual Direction",
                description:
                  "Membantu membangun identitas visual server melalui interface yang lebih kuat, rapi, dan punya karakter.",
              },
              {
                icon: <FiCode className="size-5" />,
                title: "Functional & Immersive Experience",
                description:
                  "Menjaga agar tampilan tetap menarik tanpa mengorbankan fungsi, readability, dan kenyamanan player saat digunakan.",
              },
            ]}
            />
          </InViewItem>
        </InViewGroup>
      </div>
    </section>
  );
}