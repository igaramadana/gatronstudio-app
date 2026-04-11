import Link from "next/link";

function ActionButton({
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
      className={`group relative inline-flex shrink-0 items-center justify-center px-5 py-2.5 lg:px-6 lg:py-3 transition-transform duration-150 active:scale-[0.97] ${primary ? "drop-shadow-[0_0_24px_rgba(181,255,89,0.25)]" : ""
        }`}
    >
      <div
        className={`absolute inset-0 transition-all duration-300 ${primary
            ? "bg-[#2E3827] group-hover:brightness-150"
            : "bg-[#0C0F14] group-hover:brightness-150"
          }`}
        style={{
          clipPath:
            "polygon(12px 0,100% 0,100% calc(100% - 12px),calc(100% - 12px) 100%,0 100%,0 12px)",
        }}
        aria-hidden="true"
      />
      <div
        className={`absolute inset-0 transition-all duration-300 ${primary ? "bg-[#88E52B]" : "bg-[#797979]"
          }`}
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
      <span className="relative font-quantico text-sm uppercase leading-none text-white transition-all duration-300 group-hover:text-white/90 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] lg:text-[1.125rem]">
        {children}
      </span>
    </Link>
  );
}

export default function NotFound() {
  return (
    <main
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden antialiased"
      style={{ backgroundColor: "#0e1515" }}
    >
      <div className="pointer-events-none absolute left-[10%] top-[12%] h-48 w-48 rounded-full bg-lime-400/10 blur-[90px]" />
      <div className="pointer-events-none absolute right-[12%] bottom-[10%] h-56 w-56 rounded-full bg-cyan-400/10 blur-[100px]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:30px_30px]" />
      `
      <div className="relative flex flex-col items-center gap-8 px-4 text-center">
        <div className="flex flex-col items-center gap-3">
          <p className="bg-gradient-to-b from-lime-300 via-lime-400 to-lime-500 bg-clip-text font-quantico text-8xl font-bold leading-none tracking-tight text-transparent sm:text-9xl lg:text-[10rem]">
            404
          </p>

          <h1 className="font-quantico text-2xl font-bold uppercase leading-[1.2] tracking-tight text-white sm:text-3xl lg:text-4xl">
            Page Not Found
          </h1>
        </div>

        <p className="max-w-md text-base leading-[1.5] text-white/60 lg:text-lg">
          Halaman yang kamu cari tidak tersedia, sudah dipindahkan, atau URL-nya
          tidak valid.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <ActionButton href="/" primary>
            Go Home
          </ActionButton>
        </div>
      </div>
    </main>
  );
}