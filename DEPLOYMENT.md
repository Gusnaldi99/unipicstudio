# Deployment & Operational Guide: UNIPIC Studio

**Dokumen:** Prosedur Rilis, Build, dan Hosting Operasional  
**Target Platform:** Vercel / Node.js Server / Docker  
**Domain Produksi:** [https://unipicstudio.com](https://unipicstudio.com)  

---

## 1. Opsi Target Hosting

### 1.1 Platform Rekomendasi: Vercel
Vercel adalah platform bawaan dari pembuat Next.js dengan dukungan penuh untuk App Router, edge caching otomatis, dan optimasi gambar instan:
1. Hubungkan repositori GitHub/GitLab ke dasbor Vercel.
2. Konfigurasi proyek:
   - **Framework Preset:** Next.js
   - **Build Command:** `npm run build`
   - **Output Directory:** `.next` (otomatis)
   - **Install Command:** `npm install`
3. Konfigurasi domain kustom di tab **Settings > Domains**:
   - `unipicstudio.com` (A Record mengarah ke `76.76.21.21`)
   - `www.unipicstudio.com` (CNAME mengarah ke `cname.vercel-dns.com`)

### 1.2 Self-Hosted VPS (Node.js 20+ & PM2)
Jika di-host pada server mandiri (Ubuntu / Debian):
```bash
# 1. Masuk ke direktori aplikasi
cd /var/www/unipicstudio

# 2. Tarik kode terbaru dan install dependensi
git pull origin main
npm ci

# 3. Eksekusi build produksi
npm run build

# 4. Jalankan aplikasi menggunakan PM2
pm2 restart unipicstudio || pm2 start npm --name "unipicstudio" -- start -- -p 3000

# 5. Konfigurasikan Nginx sebagai reverse proxy dengan SSL Certbot
```

### 1.3 Kontainer Docker (Multi-stage Build)
Untuk deployment berbasis container di Google Cloud Run, AWS ECS, atau Kubernetes, gunakan pola multi-stage:
```dockerfile
# Stage 1: Dependencies
FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# Stage 2: Builder
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# Stage 3: Runner
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
EXPOSE 3000
CMD ["node", "server.js"]
```
*(Catatan: Jika menggunakan standalone runner Docker, pastikan menambahkan `output: "standalone"` di `next.config.ts`)*.

---

## 2. Prosedur Verifikasi Sebelum Rilis (Pre-Flight Checks)

Sebelum melakukan rilis atau commit ke branch produksi (`main`), setiap pengembang dan AI Agent wajib menjalankan langkah verifikasi lokal berikut:

```powershell
# 1. Verifikasi Linting dan Standar Gaya Kode
npm run lint

# 2. Verifikasi Kompilasi Produksi (Type check & Page bundling)
npm run build

# 3. Uji Coba Server Produksi Lokal
npm run start
```

Jika ada kegagalan pada tahap `npm run build` (seperti kesalahan tipe data TypeScript, sintaks CSS ilegal, atau kegagalan prerendering), **proses deploy dilarang dilanjutkan** hingga akar masalah diperbaiki di kode sumber.

---

## 3. Variabel Lingkungan (Environment Variables)

Simpan konfigurasi pada berkas `.env.local` saat pengembangan lokal dan pada pengaturan *Environment Variables* di dasbor hosting saat produksi:

| Nama Variabel | Wajib? | Nilai Default / Contoh | Keterangan |
| :--- | :--- | :--- | :--- |
| `NEXT_PUBLIC_SITE_URL` | Ya | `https://unipicstudio.com` | Basis URL absolut untuk pembuatan sitemap.xml dan tag canonical. |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Ya | `628151195066` | Nomor WhatsApp resmi studio untuk menerima pesan konsultasi. |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Opsional | `halo@unipicstudio.com` | Alamat email tujuan penerimaan formulir inquiry. |

> **Perhatian Keamanan:**
> - Jangan pernah melakukan commit berkas `.env` atau `.env.local` ke repositori Git.
> - Seluruh variabel yang diawali `NEXT_PUBLIC_` dapat dibaca oleh peramban klien. Jangan pernah menaruh token rahasia (API key privat) pada variabel berprefiks tersebut.

---

## 4. Kebijakan Caching & Pengiriman Aset

1. **Aset Statis Next.js (`/_next/static/*`):**
   Memiliki hash konten unik dan otomatis di-cache oleh browser/CDN dengan header `Cache-Control: public, max-age=31536000, immutable`.
2. **Berkas Gambar Publik (`/assets/images/*`):**
   Gambar di `public/assets/images/` dilayani melalui kompresor `next/image` yang menghasilkan varian WebP teroptimasi secara dinamis sesuai resolusi layar perangkat peminta.
3. **Berkas Company Profile (`/assets/images/Company Profile Unipic Studio.zip`):**
   Berkas berukuran 66MB. Dilayani sebagai unduhan langsung tanpa melalui proses re-kompresi gambar Next.js.
4. **Halaman HTML:**
   Halaman beranda dikompilasi secara statis (*Static Site Generation / SSG*) dan di-cache pada jaringan CDN Edge dengan revalidasi instan setiap kali terjadi deploy baru.

---

## 5. Checklist Go-Live (10 Poin Kesiapan Produksi)

Sebelum mengumumkan website ke publik atau klien, pastikan seluruh poin di bawah bernilai **LULUS (PASS)**:

- [ ] `npm run lint` menghasilkan 0 error dan 0 warning kritis.
- [ ] `npm run build` sukses membuat bundel statis tanpa error tipe TypeScript.
- [ ] Seluruh gambar di halaman dapat dimuat tanpa error 404 (sesuai inventaris `ASSETS.md`).
- [ ] Tombol CTA WhatsApp berhasil membuka peramban WhatsApp dengan teks terformat rapi.
- [ ] Tautan unduh berkas Company Profile (66MB) dapat diunduh tanpa korup.
- [ ] Komponen peta Google Maps di footer dapat dibuka saat diklik tanpa memblokir muat awal.
- [ ] Metadata OpenGraph dan Twitter Card valid saat diuji menggunakan Facebook Sharing Debugger.
- [ ] Berkas `/robots.txt` dan `/sitemap.xml` dapat diakses langsung oleh peramban.
- [ ] Tata letak diuji pada layar ponsel (320px - 414px) dan bebas dari pergeseran horizontal (*no horizontal overflow*).
- [ ] Sertifikat SSL/TLS aktif (protokol HTTPS terpasang dan mengarahkan lalu lintas HTTP secara otomatis).
