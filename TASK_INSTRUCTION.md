# Task Execution Instruction (SOP): UNIPIC Studio

**Dokumen:** Prosedur Operasional Standar (SOP) Pengerjaan Tugas untuk AI Coding Agent & Pengembang  
**Tujuan:** Mencegah halusinasi (*anti-ngawur*), menjaga konsistensi kode, mematuhi standar Anti-Slop, dan menjamin kode langsung siap produksi (*production-ready*).  

---

## 1. Siklus 4 Tahap Pengerjaan Tugas (The 4-Phase Task Lifecycle)

Setiap kali menerima perintah modifikasi, penambahan fitur, atau perbaikan bug, AI Agent **wajib** mengikuti alur 4 tahap berikut secara berurutan:

```
[Tahap 1: Discovery & Grounding]
            │
            ▼
[Tahap 2: Purpose-Test & Anti-Slop Check]
            │
            ▼
[Tahap 3: Direct Source Implementation]
            │
            ▼
[Tahap 4: Delivery Gate & Build Verification]
```

---

## 2. Tahap 1: Discovery & Grounding (Pemeriksaan Fakta)

Sebelum menulis atau mengedit baris kode apa pun:
1. **Periksa Kode Nyata di Repositori:**
   Gunakan tool pencarian atau pembaca berkas untuk memeriksa implementasi komponen terkini di `src/`. Jangan berasumsi berdasarkan memori lama atau model default.
2. **Katalog Aset Media Wajib:**
   Buka [`ASSETS.md`](file:///c:/Users/Gusnaldi%20Luthfi/Documents/CODE/unipic/unipicstudio/ASSETS.md). Jika komponen membutuhkan gambar, gunakan nama berkas asli yang telah tercatat (misal: `/assets/images/bg_banner1.jpg`, `/assets/images/project/branding.webp`). **Dilarang keras mengarang path gambar fiktif.**
3. **Kesesuaian Arah Desain & Produk:**
   Buka [`DESIGN.md`](file:///c:/Users/Gusnaldi%20Luthfi/Documents/CODE/unipic/unipicstudio/DESIGN.md) untuk memastikan palet warna, tipografi, dan dial yang digunakan selaras (`ENERGY 2 / RHYTHM 2 / MOTION 1`). Buka [`PRD.md`](file:///c:/Users/Gusnaldi%20Luthfi/Documents/CODE/unipic/unipicstudio/PRD.md) untuk memastikan cakupan fitur yang diminta memang sesuai kebutuhan bisnis.

---

## 3. Tahap 2: Purpose-Test & Anti-Slop Check (Uji Niat)

Sebelum mengusulkan solusi visual atau antarmuka, pastikan lolos uji tujuan:
1. **Uji 1 Baris Alasan (Aturan R-31):**
   Setiap penambahan elemen visual, warna, atau kartu harus dapat dijelaskan dalam 1 kalimat logis (contoh: *"Menggunakan kartu latar putih dengan border tipis untuk membedakan item portofolio dari latar belakang Slate 50"*).
2. **Larangan Tanda Baca Em Dash (Aturan R-02):**
   Periksa seluruh copy teks antarmuka yang akan ditampilkan ke pengguna. Pastikan tidak ada karakter *em dash* (`—`). Gunakan tanda koma, titik dua, tanda kurung, atau titik.
3. **Kelengkapan Fungsional (Aturan C-2 & R-26):**
   Pastikan setiap tombol atau tautan baru yang dibuat memiliki tujuan nyata (`href="#section"` yang valid, `onClick` handler yang memicu aksi, atau modal yang dapat dibuka dan ditutup). Jangan pernah membuat tombol pajangan yang mati.
4. **Pemeriksaan Kontras Warna (Aturan R-25):**
   Pastikan teks memenuhi standar WCAG AA (minimal 4.5:1 untuk teks normal 16px). Jangan gunakan teks abu-abu terang di atas latar abu-abu muda.
5. **Responsivitas Layar Seluler (Aturan R-03):**
   Pastikan struktur elemen tidak menghasilkan pergeseran horizontal (*no horizontal overflow*) pada lebar layar 320px - 414px dan target sentuh tombol minimal 44px.

---

## 4. Tahap 3: Direct Source Implementation (Penulisan Kode)

1. **Ubah Langsung pada Berkas Sumber:**
   Tulis kode langsung pada komponen terkait (`.tsx`, `.css`). Dilarang menjalankan skrip Python atau skrip shell sementara untuk mengganti teks secara regex (*no patch scripts*).
2. **Prinsip Komponen Server vs Klien:**
   - Pertahankan komponen sebagai **Server Component** secara default.
   - Tambahkan direktif `"use client"` hanya pada berkas yang benar-benar memerlukan hooks interaktif peramban (`useState`, `useEffect`, `useRef`).
3. **Penggunaan Token Styling:**
   - Gunakan class Tailwind v4 dan variabel token resmi yang didefinisikan di `src/app/globals.css` (seperti `bg-[var(--brand-primary)]`, `text-[#0F172A]`, dll.).
   - Manfaatkan fungsi `cn()` dari `@/lib/utils` untuk penggabungan class kondisional.
4. **Ketik Tipe Data TypeScript yang Ketat:**
   - Definisikan `interface` atau `type` eksplisit untuk setiap prop komponen dan struktur data data dummy.
   - Hindari penggunaan tipe `any`.
5. **Larangan Caption pada Data Portofolio:**
   - Dilarang keras menambahkan properti `caption` saat menambah atau memodifikasi item portofolio (`social-media-data.ts`, `portfolio-data.ts`, dsb.).
6. **Larangan Badge Tag di Dalam Card Video/Reels:**
   - Dilarang menambahkan badge box putih (`reel.tag` / bottom tag badge) di bagian dalam bawah card video portofolio. Biarkan visual thumbnail/video tampil bersih tanpa kotak penutup.

---

## 5. Tahap 4: Delivery Gate & Build Verification (Gerbang Verifikasi)

Sebelum mengumumkan bahwa tugas telah selesai, jalankan gerbang verifikasi wajib berikut:

### Langkah Verifikasi Otomatis:
```powershell
# 1. Jalankan linter Next.js
npm run lint

# 2. Jalankan build kompilasi produksi
npm run build
```

### Kriteria Kelulusan (Pass/Fail Criteria):
- **PASS:** Perintah `npm run build` selesai dengan pesan sukses, menghasilkan bundel statis halaman tanpa peringatan tipe TypeScript atau error rendering.
- **FAIL:** Jika ada error kompilasi, halaman gagal dirender, tautan gambar menghasilkan 404, atau tombol interaktif tidak merespons, **perbaiki kesalahan tersebut terlebih dahulu**. Jangan pernah menyerahkan kode dalam kondisi build rusak.

---

## 6. Ringkasan Format Laporan Selesai ke Pengguna

Saat menyampaikan hasil kerja kepada pengguna:
1. Sebutkan berkas mana saja yang diubah atau ditambahkan (gunakan format tautan markdown `[NamaBerkas](file:///path/ke/berkas)`).
2. Ringkaskan fitur atau perbaikan yang dicapai tanpa menggunakan jargon kosong atau klaim hiperbola.
3. Lampirkan status verifikasi `npm run build` sebagai bukti keandalan kode.
