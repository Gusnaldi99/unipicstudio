<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# UNIPIC Studio: Master AI Agent Operating Manual

Dokumen ini adalah pedoman utama (*master entrypoint*) untuk setiap AI Coding Agent yang bekerja di repositori **UNIPIC Studio** (`unipicstudio`).

Tujuan aturan ini adalah memastikan AI tidak berhalusinasi (*ngawur*), tidak menghasilkan *generic AI slop*, dan selalu mempertahankan standar *craftsmanship* tingkat produksi pada kode, performa, serta estetika visual.

---

<!-- antislop:start -->
## antislop
For UI, copy, people, mobile layout, or code comments work, read `antislop.md` (core) and then the skill for the task:
- UI / visual: `skills/antislop-ui/SKILL.md`
- Copy & text: `skills/antislop-copywriting/SKILL.md`
- People: `skills/antislop-human/SKILL.md`
- Mobile / responsive: `skills/antislop-layoutmobile/SKILL.md`
- Code comments: `skills/antislop-code/SKILL.md`
Before starting, ask the user when antislop applies: during the work, or after it is done.
<!-- antislop:end -->

---

## 1. Peta Rujukan Wajib (Documentation Roadmap)

Sebelum mengubah atau membuat berkas baru, AI wajib membaca dokumen terkait sesuai konteks pekerjaannya:

| Jenis Tugas | Dokumen Rujukan Utama | Apa yang Dicari |
| :--- | :--- | :--- |
| **Pengerjaan Fitur / Bisnis** | [`PRD.md`](file:///c:/Users/Gusnaldi%20Luthfi/Documents/CODE/unipic/unipicstudio/PRD.md) | Cakupan fungsional, alur pengguna, persona klien, kriteria selesai (*acceptance criteria*). |
| **Pekerjaan UI / Gaya / Desain** | [`DESIGN.md`](file:///c:/Users/Gusnaldi%20Luthfi/Documents/CODE/unipic/unipicstudio/DESIGN.md) | Sistem warna, tipografi, token Tailwind v4, dial liveliness, aturan anti-slop visual. |
| **Arsitektur / Struktur Kode** | [`ARCHITECTURE.md`](file:///c:/Users/Gusnaldi%20Luthfi/Documents/CODE/unipic/unipicstudio/ARCHITECTURE.md) | Pemisahan Server/Client Component, struktur direktori, konvensi penamaan, Web Vitals. |
| **Deploy & Rilis Sistem** | [`DEPLOYMENT.md`](file:///c:/Users/Gusnaldi%20Luthfi/Documents/CODE/unipic/unipicstudio/DEPLOYMENT.md) | Build step, optimasi Vercel/Node.js, header caching, checklist go-live. |
| **Keamanan & Validasi Input** | [`SECURITY.md`](file:///c:/Users/Gusnaldi%20Luthfi/Documents/CODE/unipic/unipicstudio/SECURITY.md) | Sanitasi form kontak, URL encoding WhatsApp, header keamanan HTTP, audit dependensi. |
| **Alur Eksekusi Tugas AI** | [`TASK_INSTRUCTION.md`](file:///c:/Users/Gusnaldi%20Luthfi/Documents/CODE/unipic/unipicstudio/TASK_INSTRUCTION.md) | Standar langkah kerja AI: Discovery -> Purpose Test -> Implementation -> Verification. |
| **Integrasi Gambar & Media** | [`ASSETS.md`](file:///c:/Users/Gusnaldi%20Luthfi/Documents/CODE/unipic/unipicstudio/ASSETS.md) | Lokasi berkas visual riil di `public/assets/images/`. **Dilarang keras menebak path gambar.** |

---

## 2. Lima Standar Keahlian (The Craftsmanship Standard)

Semua kode yang dihasilkan AI harus memenuhi lima standar kualitas:

1. **C-1 Intentionality (Keputusan Bertujuan):**
   Setiap keputusan desain dan kode memiliki alasan yang jelas. Jangan menggunakan template generik bawaan AI tanpa konteks.
2. **C-2 Functional Completeness (Lengkap Fungsional):**
   Setiap tombol, tautan, atau form harus benar-benar berfungsi atau dihapus. Jangan pernah menyisakan tombol mati (*dead button*).
3. **C-3 Content-Driven Composition (Komposisi Berbasis Konten):**
   Susunan layout harus melayani konten nyata UNIPIC Studio, bukan template statis AI (misal: 3 kartu identik, hero + fake terminal).
4. **C-4 Resilience (Ketahanan Lintas Kondisi):**
   Antarmuka harus tahan banting di seluruh breakpoint mobile (bebas horizontal scroll), mendukung keyboard navigation, serta memiliki state loading, error, dan empty.
5. **C-5 Evidence Over Claims (Fakta di Atas Klaim):**
   Hanya tampilkan data, portofolio, dan testimoni yang nyata atau placeholder jujur bertanda `[REAL DATA]` / `[LOGO]`. Dilarang mengarang testimoni atau metrik fiktif.

---

## 3. Aturan Ketat Larangan Halusinasi (Strict Anti-Hallucination Guardrails)

1. **Jangan Mengarang File Media:**
   Periksa selalu [`ASSETS.md`](file:///c:/Users/Gusnaldi%20Luthfi/Documents/CODE/unipic/unipicstudio/ASSETS.md) atau isi direktori `public/assets/images/`. Jangan pernah membuat path acak seperti `/assets/images/cool-agency-banner.jpg` yang tidak ada di disk.
2. **Jangan Menggunakan Skrip Regex untuk Mengubah File Sumber:**
   Dilarang menjalankan skrip Python atau Node satu baris yang mereplace string CSS/komponen secara mekanis (*no patch scripts*). Ubah kode langsung pada berkas sumbernya.
3. **Jangan Menyisakan Em Dash pada Copy UI:**
   Hindari tanda baca *em dash* (`—`) pada teks tampilan pengguna (merujuk aturan R-02 Anti-Slop). Gunakan tanda koma, titik dua, tanda kurung, atau titik.
4. **Dilarang Memasukkan Field Caption pada Data Portofolio:**
   Saat menambahkan atau memodifikasi item portofolio (baik di `social-media-data.ts`, `portfolio-data.ts`, atau data portofolio lainnya), **dilarang keras memasukkan properti `caption`**. Biarkan card portofolio fokus pada tag, media, brand name, dan kategori tanpa caption teks panjang.
5. **Dilarang Menampilkan Badge Tag di Dalam Card Video/Reels:**
   Jangan pernah memasukkan badge box putih bertuliskan tag (`reel.tag` / bottom tag badge) di bagian dalam bawah card video/reels portofolio. Card harus bersih dengan video/thumbnail penuh tanpa elemen kotak badge penutup.
6. **Dilarang Menampilkan Badge Logo / Brand Overlay di Atas Media Card Portofolio:**
   Jangan pernah menambahkan elemen badge/box floating overlay (baik logo brand `item.brandLogo` maupun nama brand `item.brandName`) di atas area media thumbnail card portofolio (seperti top overlay badges). Media card harus bersih dan leluasa menampilkan visual foto/thumbnail secara penuh tanpa elemen penutup. Informasi brand cukup ditampilkan di area teks kartu atau di dalam modal rincian proyek.
7. **Dilarang Menampilkan Embedded Video Player / Video Cards di Dalam Modal Detail Portofolio:**
   Jangan pernah menyematkan kumpulan kartu/player video vertikal (seperti 9:16 video items atau iframe pemutar video yang menumpuk) di dalam modal atau kartu rincian proyek (`PortfolioView` maupun `PortfolioSection`). Kartu/modal harus selalu dijaga tetap bersih (*clean*), hanya menampilkan cover visual utama, deskripsi, dan deliverables. Untuk melihat hasil karya video digital marketing, cukup sediakan action button terdedikasi yang mengarahkan pengguna ke showcase portofolio video (tombol 'Lihat Showcase Digital Marketing').
8. **Wajib Memverifikasi Build Sebelum Selesai:**
   Sebelum menyatakan pekerjaan selesai, jalankan validasi otomatis:
   ```bash
   npm run lint
   npm run build
   ```
   Pastikan tidak ada error kompilasi TypeScript, linting, atau kegagalan SSR Next.js.

