import Image from "next/image";

const skills = [
  {
    name: "Next.js",
    category: "Framework",
    image: "/assets/icon-nextjs.png",
  },
  {
    name: "React",
    category: "UI Library",
    image: "/assets/icon-react.png",
  },
  {
    name: "TypeScript",
    category: "Language",
    image: "/assets/icon-typescript.png",
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    image: "/assets/icon-tailwind.png",
  },
  {
    name: "Laravel",
    category: "Framework",
    image: "/assets/icon-laravel.png",
  },
  {
    name: "PHP",
    category: "Language",
    image: "/assets/icon-php.png",
  },
  {
    name: "MySQL",
    category: "Database",
    image: "/assets/icon-mysql.png",
  },
  {
    name: "Python",
    category: "Language",
    image: "/assets/icon-python.png",
  },
  {
    name: "LUA",
    category: "Language",
    image: "/assets/icon-lua.png",
  },
  {
    name: "QBCORE",
    category: "FiveM Framework",
    image: "/assets/icon-qbcore.png",
  },
  {
    name: "QBox",
    category: "FiveM Framework",
    image: "/assets/icon-qbox.png",
  },
  {
    name: "ESX",
    category: "FiveM Framework",
    image: "/assets/icon-esx.png",
  },
];

function SkillCard({
  name,
  category,
  image,
}: {
  name: string;
  category: string;
  image: string;
}) {
  return (
    <div className="group relative flex min-h-[240px] w-full flex-col items-center justify-center overflow-hidden p-6 transition-transform duration-300 hover:-translate-y-1 lg:min-h-[280px] lg:p-8">
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
        <div className="absolute -left-8 top-0 h-24 w-24 rounded-full bg-lime-300/15 blur-3xl" />
        <div className="absolute -right-8 bottom-0 h-24 w-24 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <div className="relative flex w-full flex-col items-center gap-6 text-center">
        <div className="relative flex h-20 w-20 items-center justify-center md:h-24 md:w-24 lg:h-28 lg:w-28">
          <div className="absolute inset-0 rounded-full bg-white/5 blur-md" />
          <div className="relative h-full w-full">
            <Image
              src={image}
              alt={name}
              fill
              className="object-contain transition-transform duration-300 group-hover:scale-105"
              sizes="112px"
            />
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <h3 className="font-quantico text-xl font-bold tracking-tight text-white md:text-2xl">
            {name}
          </h3>

          <span
            className="relative inline-flex items-center px-4 py-1.5 font-quantico text-[10px] font-semibold uppercase tracking-[0.18em] text-white/80"
            style={{
              clipPath:
                "polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px)",
            }}
          >
            <span
              className="absolute inset-0 bg-white/10"
              style={{
                clipPath:
                  "polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px)",
              }}
              aria-hidden="true"
            />
            <span
              className="absolute inset-0 p-px"
              style={{
                clipPath:
                  "polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px)",
                background:
                  "linear-gradient(90deg, rgba(181,255,89,0.65), rgba(74,222,128,0.15), rgba(34,211,238,0.45))",
              }}
              aria-hidden="true"
            >
              <span
                className="block h-full w-full bg-[#0B1016]"
                style={{
                  clipPath:
                    "polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px)",
                }}
              />
            </span>

            <span className="relative">{category}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative flex w-full flex-col items-center gap-12 py-16 md:py-24 lg:gap-16 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(40,255,140,0.06),transparent_22%),radial-gradient(circle_at_80%_35%,rgba(0,180,255,0.05),transparent_22%),linear-gradient(180deg,#050505_0%,#081010_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.14)_1px,transparent_1px)] bg-size-[28px_28px]" />

      <div className="relative flex max-w-5xl flex-col items-center px-4 text-center sm:px-6">
        <div className="flex w-full flex-col items-center gap-3 lg:gap-4">
          <div className="flex flex-col items-center gap-0.5 font-quantico font-bold leading-[1.2]">
            <p className="text-sm tracking-tight text-white">SKILLS</p>
            <h2 className="bg-linear-to-b from-lime-300 via-lime-400 to-lime-500 bg-clip-text text-center font-quantico text-3xl tracking-tight text-transparent sm:text-4xl lg:text-5xl xl:text-6xl">
              Tech Stack I Work With
            </h2>
          </div>

          <p className="min-w-full text-center text-base leading-[1.6] text-white/60 lg:text-lg">
            Tools, frameworks, dan teknologi yang saya gunakan untuk membangun
            website modern, sistem informasi, dan pengalaman digital yang cepat,
            scalable, dan menarik secara visual.
          </p>
        </div>
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 px-8 sm:grid-cols-2 sm:px-10 xl:grid-cols-4 lg:gap-8">
        {skills.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </div>
    </section>
  );
}