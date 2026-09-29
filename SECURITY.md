# Security Policy & Guardrails: UNIPIC Studio

**Dokumen:** Kebijakan & Standar Keamanan Aplikasi Web  
**Cakupan:** Repositori & Aplikasi Web UNIPIC Studio  
**Status:** Aktif  

---

## 1. Kebijakan Keamanan Umum

Keamanan aplikasi web UNIPIC Studio mencakup perlindungan data pengunjung, pencegahan manipulasi tautan eksternal (termasuk generator WhatsApp), sanitasi masukan formulir, dan mitigasi risiko kerentanan frontend modern seperti Cross-Site Scripting (XSS) serta Open Redirect.

Setiap kontributor kode dan AI Agent wajib mematuhi panduan keamanan ini sebelum mengajukan perubahan kode.

---

## 2. Pencegahan XSS & Sanitasi Masukan (Form Input Sanitization)

### 2.1 Validasi Masukan Formulir Kontak
Formulir kontak (`ContactCtaSection.tsx`) mengumpulkan data calon klien (nama, nomor telepon, email, jenis layanan, dan pesan kebutuhan proyek):
1. **Validasi Klien:**
   - Nama: Dibatasi maksimal 100 karakter, hanya mengizinkan karakter teks standar dan spasi.
   - Email: Wajib mematuhi format standar alamat email yang sah (`/^[^\s@]+@[^\s@]+\.[^\s@]+$/`).
   - Nomor Telepon/WhatsApp: Dibatasi 9–15 digit numerik (hanya angka, tanda plus di awal, atau spasi).
   - Pesan: Dibatasi maksimal 1.000 karakter untuk mencegah transmisi beban data berlebih.
2. **Larangan `dangerouslySetInnerHTML` Sembarangan:**
   - Direktif `dangerouslySetInnerHTML` **dilarang keras** digunakan untuk merender data atau teks yang bersumber dari masukan pengguna, URL peramban, atau parameter query.
   - Pengecualian satu-satunya diizinkan untuk skrip skema terstruktur `JSON-LD` di `src/app/layout.tsx` yang datanya berasal dari konstanta internal kode sumber yang telah divalidasi.

---

## 3. Keamanan Generator Tautan WhatsApp (URL Injection Prevention)

Formulir kontak membuat tautan langsung ke WhatsApp Web / WhatsApp Mobile (`https://wa.me/628151195066?text=...`). 

Untuk mencegah eksploitasi injeksi parameter URL (*URL parameter tampering*):
1. **Wajib Menggunakan `encodeURIComponent`:**
   Seluruh masukan pengguna (nama, layanan, catatan pesan) wajib di-encode secara utuh sebelum digabungkan ke query string:
   ```typescript
   const safeText = encodeURIComponent(
     `Halo UNIPIC Studio,\n\nNama: ${sanitizedName}\nLayanan: ${sanitizedService}\nCatatan: ${sanitizedMessage}`
   );
   const waUrl = `https://wa.me/${TARGET_PHONE}?text=${safeText}`;
   ```
2. **Atribut Keamanan Tautan Eksternal:**
   Setiap tautan yang membuka tab baru (`target="_blank"`) wajib menyertakan atribut:
   ```html
   rel="noopener noreferrer"
   ```
   Atribut ini melindungi pengguna dari serangan *tabnabbing* (di mana halaman target yang dibuka dapat mengambil alih halaman asal melalui `window.opener`).

---

## 4. Header Keamanan HTTP (Recommended Security Headers)

Untuk deployment di lingkungan produksi (misalnya via `next.config.ts` atau konfigurasi Nginx/Vercel), header keamanan HTTP berikut disarankan untuk diaktifkan:

```typescript
// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY", // Mencegah clickjacking pada iframe asing
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff", // Mencegah MIME sniffing
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()", // Membatasi akses sensor perangkat
          },
        ],
      },
    ];
  },
};

export default nextConfig;
```

---

## 5. Perlindungan Aset Statis & Pencegahan Kebocoran Data

1. **Pemeriksaan Direktori Publik (`public/`):**
   - Direktori `public/` dapat diakses langsung oleh publik internet melalui URL peramban.
   - **Dilarang keras** menyimpan berkas rahasia, berkas `.env`, berkas cadangan database (`.sql`), atau arsip kode sumber (`.zip` repositori) di dalam folder `public/`.
   - Satu-satunya berkas arsip zip yang diizinkan di `public/assets/images/` adalah `Company Profile Unipic Studio.zip` yang telah ditinjau dan memang ditujukan sebagai dokumen promosi publik.
2. **Pembersihan Berkas Cadangan:**
   - Direktori cadangan lama (seperti `legacy-backup/`) wajib diabaikan oleh Git via `.gitignore` atau disimpan secara aman di luar pohon publik website produksi.

---

## 6. Audit & Manajemen Dependensi

1. Jalankan audit kerentanan berkala terhadap pustaka npm:
   ```bash
   npm audit
   ```
2. Jika ditemukan kerentanan dengan tingkat keparahan tinggi (*High* atau *Critical*), perbarui dependensi terkait menggunakan versi stabil terbaru:
   ```bash
   npm audit fix
   ```
3. Jangan menginstal pustaka pihak ketiga sembarangan yang tidak memiliki reputasi baik atau tidak aktif dipelihara di ekosistem npm.

---

## 7. Pelaporan Kerentanan (Vulnerability Disclosure)

Jika Anda menemukan celah atau potensi kerentanan keamanan pada website UNIPIC Studio:
- Hubungi tim pengembang melalui email: `security@unipicstudio.com` atau kontak darurat via WhatsApp resmi studio.
- Harap sertakan rincian langkah reproduksi (*proof of concept*) secara privat tanpa mempublikasikannya ke publik sebelum tim melakukan penambalan (*responsible disclosure*).
