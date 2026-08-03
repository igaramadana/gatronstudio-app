import type { Metadata } from "next";

import LegalPage from "@/components/LegalPage";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Ketentuan penggunaan website portofolio ${siteConfig.name}.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms & Conditions"
      description="Ketentuan berikut berlaku saat kamu mengakses dan menggunakan website portofolio Gatrons Studio."
      sections={[
        {
          title: "Penggunaan website",
          content: (
            <p>
              Konten website disediakan untuk menampilkan profil, kemampuan, dan
              project. Kamu dapat mengaksesnya untuk tujuan informasi yang sah tanpa
              mengganggu keamanan atau ketersediaan layanan.
            </p>
          ),
        },
        {
          title: "Hak atas konten",
          content: (
            <p>
              Desain, tulisan, identitas visual, dan aset original tetap menjadi hak
              pemiliknya. Source code project yang ditautkan melalui GitHub mengikuti
              lisensi yang tercantum pada repository masing-masing.
            </p>
          ),
        },
        {
          title: "Informasi project",
          content: (
            <p>
              Informasi dan tautan project dapat berubah sewaktu-waktu. Website tidak
              menjamin bahwa seluruh demo atau layanan pihak ketiga akan selalu tersedia.
            </p>
          ),
        },
        {
          title: "Batasan tanggung jawab",
          content: (
            <p>
              Website diberikan sebagaimana adanya. Pengguna bertanggung jawab atas
              keputusan yang dibuat berdasarkan informasi atau tautan eksternal yang
              tersedia di website ini.
            </p>
          ),
        },
      ]}
    />
  );
}
