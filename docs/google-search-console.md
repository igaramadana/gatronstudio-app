# Integrasi Google Search Console

Domain production: `https://www.gatronstudio.online/`

Project sudah menyiapkan canonical URL, metadata, robots, sitemap, Open Graph, JSON-LD, dan opsi meta verification. Verifikasi kepemilikan tetap harus dilakukan dari akun Google yang mengelola domain.

## Pilihan yang direkomendasikan: Domain property

1. Buka Google Search Console dan pilih **Add property**.
2. Pilih tipe **Domain**.
3. Masukkan hanya:

   ```text
   gatronstudio.online
   ```

   Jangan memakai `https://`, path, atau `www`.

4. Google akan memberikan DNS TXT record.
5. Tambahkan record tersebut di DNS provider domain.
6. Tunggu propagasi DNS, lalu tekan **Verify**.

Domain property mencakup HTTP/HTTPS serta semua subdomain, termasuk `www`.

## Alternatif: URL-prefix dengan meta tag

Gunakan property:

```text
https://www.gatronstudio.online/
```

Dari meta tag yang diberikan Google:

```html
<meta name="google-site-verification" content="TOKEN_DARI_GOOGLE" />
```

Salin hanya `TOKEN_DARI_GOOGLE`, kemudian isi environment variable production:

```env
GOOGLE_SITE_VERIFICATION=TOKEN_DARI_GOOGLE
```

Di Vercel, masukkan variable tersebut untuk environment **Production**, lalu redeploy. Next.js akan menghasilkan meta verification melalui Metadata API.

## Setelah website terbaru berhasil dideploy

1. Pastikan halaman berikut dapat dibuka tanpa redirect/error:
   - `https://www.gatronstudio.online/robots.txt`
   - `https://www.gatronstudio.online/sitemap.xml`
2. Di Search Console, buka **Sitemaps**.
3. Submit:

   ```text
   sitemap.xml
   ```

4. Gunakan **URL Inspection** untuk homepage.
5. Jalankan **Test Live URL**, lalu **Request Indexing** setelah hasil live test valid.
6. Pantau menu **Pages**, **Core Web Vitals**, dan **Enhancements** setelah Google mulai memproses data.

## Checklist deployment

- Domain utama mengarah ke deployment terbaru.
- HTTPS aktif.
- Hanya satu versi URL utama yang dipakai secara konsisten: `https://www.gatronstudio.online/`.
- Environment variable verifikasi sudah terpasang bila memakai URL-prefix.
- `robots.txt` tidak memblokir homepage.
- `sitemap.xml` memuat homepage, privacy, dan terms.
- Tidak ada password protection atau deployment protection pada production.

## Catatan

Menambahkan meta tag atau sitemap ke source code tidak otomatis menyelesaikan verifikasi **Domain property**. Metode tersebut tetap membutuhkan DNS TXT record. Meta tag hanya berlaku untuk property tipe **URL-prefix**.
