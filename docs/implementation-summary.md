# Ringkasan Implementasi

## Motion dan scrolling

- Lenis React dipasang sebagai global smooth-scroll instance dengan RAF yang disinkronkan ke frame loop Framer Motion.
- Preloader secara eksplisit menghentikan Lenis, lalu provider menjalankan kembali dan menghitung ulang ukuran halaman setelah loading selesai.
- Anchor navigation memakai offset navbar agar heading tidak tertutup.
- Scroll pagination project memakai instance Lenis yang sama.
- Primitive `InView`, `InViewGroup`, dan `InViewItem` mengikuti pola Motion Primitives untuk trigger viewport yang konsisten.
- Seluruh easing, duration, viewport, stagger, dan variants dipusatkan di `lib/motion.ts`.
- Seluruh primitive InView dan Hero menunggu preloader selesai sebelum menjalankan entrance animation.
- Kebijakan reduced motion dikontrol terpusat melalui `motionPreferences` di `lib/motion.ts`; default portfolio ini menjalankan motion penuh.

## Optimasi performa

- Homepage dikembalikan menjadi Server Component; state browser dipisahkan ke komponen client kecil.
- Snow effect dimuat secara dinamis saat browser idle dan dinonaktifkan pada mobile, data-saver, reduced motion, serta perangkat dengan CPU terbatas.
- Preloader hanya dimainkan sekali per browser tab dan durasinya dipersingkat.
- Asset visual besar dikonversi ke WebP. Ukuran folder project turun secara signifikan tanpa mengubah dimensi gambar.
- `next/image` dikonfigurasi untuk AVIF dan WebP.
- Dependency yang tidak digunakan dihapus dari `package.json`.
- Security headers, canonical host redirect, dan cache policy asset ditambahkan.

## SEO dan Search Console

- Metadata title, description, canonical, Open Graph, Twitter Card, robots directive, icon, dan manifest.
- Dynamic Open Graph image.
- `robots.txt` dan `sitemap.xml` melalui Next Metadata Routes.
- JSON-LD untuk WebSite, ProfilePage, dan Person.
- Dukungan `GOOGLE_SITE_VERIFICATION` untuk property URL-prefix.
- Panduan Domain property DNS dan submit sitemap tersedia di `docs/google-search-console.md`.

## Perbaikan struktur

- Header, main content, dan footer dipisahkan secara semantik.
- Shared chamfer button menghapus duplikasi markup button pada beberapa section.
- Data domain, author, email, dan social URL dipusatkan di `lib/site.ts`.
- Route `/privacy` dan `/terms` ditambahkan agar link footer tidak menghasilkan 404.
- Broken/nested links dan beberapa atribut aksesibilitas diperbaiki.
