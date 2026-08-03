import type { Metadata } from "next";

import LegalPage from "@/components/LegalPage";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Kebijakan privasi untuk website portofolio ${siteConfig.name}.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      description="Halaman ini menjelaskan data apa yang diproses ketika kamu mengunjungi website portofolio Gatrons Studio."
      sections={[
        {
          title: "Data yang diproses",
          content: (
            <p>
              Website ini tidak menyediakan formulir akun atau menyimpan data pribadi
              pengunjung secara langsung. Saat kamu menghubungi melalui email atau
              platform sosial, data diproses oleh layanan yang kamu gunakan dan hanya
              digunakan untuk menanggapi komunikasi tersebut.
            </p>
          ),
        },
        {
          title: "Data teknis",
          content: (
            <p>
              Penyedia hosting dapat memproses data teknis standar seperti alamat IP,
              jenis perangkat, browser, waktu akses, dan log keamanan untuk menjaga
              ketersediaan serta keamanan layanan.
            </p>
          ),
        },
        {
          title: "Tautan pihak ketiga",
          content: (
            <p>
              Website memuat tautan menuju GitHub, LinkedIn, Instagram, dan project
              eksternal. Kebijakan privasi masing-masing layanan berlaku setelah kamu
              membuka tautan tersebut.
            </p>
          ),
        },
        {
          title: "Perubahan kebijakan",
          content: (
            <p>
              Kebijakan ini dapat diperbarui ketika fitur atau layanan yang digunakan
              website berubah. Tanggal pembaruan terbaru selalu dicantumkan di bagian
              atas halaman.
            </p>
          ),
        },
      ]}
    />
  );
}
