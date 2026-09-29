# Product Requirements Document (PRD): UNIPIC Studio

**Nama Produk:** Website Resmi UNIPIC Studio  
**Versi:** 1.0.0 (Production Ready)  
**Status:** Aktif  
**Domain Produksi:** [unipicstudio.com](https://unipicstudio.com)

---

## 1. Ringkasan Eksekutif & Visi Produk

UNIPIC Studio adalah agensi kreatif dan pemasaran digital profesional yang berbasis di Jakarta, Indonesia. Website ini berfungsi sebagai platform etalase utama (_showcase_), mesin pembangkit prospek (_lead generator_), dan instrumen pembangun kredibilitas untuk menjaring klien bisnis (B2B dan B2C).

### Visi

Menghadirkan pengalaman web agensi modern berkinerja tinggi, berestetika bersih (_clean and authoritative_), cepat diakses di perangkat seluler jaringan lokal Indonesia, serta mempermudah calon klien melakukan konsultasi proyek secara langsung via WhatsApp maupun formulir inquiry.

---

## 2. Sasaran Pengguna (Target Audience)

1. **Pemilik Bisnis & Pengusaha UMKM:**
   Membutuhkan identitas visual (logo, kemasan), pengelolaan media sosial aktif, dan website toko online / company profile modern untuk memperluas jangkauan pasar.
2. **Tim Pemasaran & Brand Manager Perusahaan (Mid-to-Large Enterprise):**
   Memerlukan mitra produksi konten kreatif terpercaya, video komersial iklan berstandar TVC, serta kampanye iklan digital (Meta & Google Ads) berbasis ROI.
3. **Calon Mitra Korporasi & Investor:**
   Mengevaluasi rekam jejak, kredibilitas tim, portofolio kerja nyata, serta mengunduh company profile resmi studio.

---

## 3. Fitur Utama & Kebutuhan Fungsional

### 3.1 Navigasi Utama (Sticky Navbar)

- **Tampilan:** Logo resmi UNIPIC Studio (warna putih/kontras transparan), tautan navigasi ke bagian utama (#services, #portfolio, #about, #faq, #contact).
- **CTA Navigasi:** Tombol langsung "Konsultasi Gratis" yang mengarahkan ke form kontak atau WhatsApp.
- **Responsivitas Seluler:** Menu drawer geser yang mudah ditutup, ukuran target sentuh tombol minimal 44px, dapat dioperasikan via keyboard (tombol Escape untuk menutup).

### 3.2 Hero Showcase (First Fold)

- **Visual:** Gambar latar sinematik beresolusi tinggi (`/assets/images/bg_banner1.jpg`) dengan teknik optimasi `priority` untuk menjaga LCP < 2.5 detik.
- **Copy:** Judul tegas tanpa jargon hiperbola generik, menyoroti layanan terpadu: Pemasaran Digital, Branding, Web Dev, dan Iklan Komersial.
- **Aksi Cepat:** Dua tombol aksi utama:
  1. "Lihat Portofolio" (scroll mulus ke #portfolio).
  2. "Mulai Konsultasi" (scroll mulus ke formulir kontak).

### 3.3 Pilar Nilai & Keunggulan (Value Pillars & Why Choose Us)

- Menyajikan 4 prinsip kerja agensi:
  1. _Strategi Berbasis Data:_ Analisis tren pasar dan performa audiens sebelum eksekusi.
  2. _Kreativitas Berstandar Tinggi:_ Desain visual dan video sinematik yang membedakan brand dari kompetitor.
  3. _Komunikasi Terbuka:_ Pelaporan rutin berkala dan koordinasi transparan.
  4. _Efisiensi Biaya & Tepat Waktu:_ Jadwal rilis jelas dengan manajemen sprint yang terukur.
- Tanpa angka statistik fiktif atau klaim sertifikasi palsu.

### 3.4 Etalase Layanan Interaktif (Services Section)

- **4 Layanan Inti:**
  1. **Digital Marketing:** Manajemen media sosial (Instagram, TikTok), optimasi periklanan berbayar (Meta & Google Ads), editorial calendar.
  2. **Branding & Desain:** Desain logo primer/sekunder, brand guidelines, kemasan produk, sales kit.
  3. **Web Development:** Landing page konversi tinggi, company profile, e-commerce cepat dan aman.
  4. **Advertising & Video:** Produksi video iklan TVC, video profil perusahaan, motion graphic, foto produk komersial.
- **Interaktivitas:** Tampilan tab responsif, ringkasan cakupan kerja (_deliverables checklist_), dan tombol aksi yang otomatis mengisi preferensi layanan pada formulir kontak.

### 3.5 Galeri Portofolio Nyata (Portfolio Showcase)

- **Kategori Filter:** Semua, Branding, Web Dev, Social Media, Advertising.
- **Sumber Aset:** Menggunakan berkas proyek aktual dari `public/assets/images/project/` (lihat `ASSETS.md`).
- **Modal Interaktif:** Klik pada kartu portofolio membuka jendela modal rincian proyek:
  - Foto resolusi penuh.
  - Nama klien dan jenis industri.
  - Masalah yang dipecahkan dan hasil kerja yang diserahkan.
  - Navigasi modal ramah keyboard (Escape untuk keluar, tombol tutup jelas).

### 3.6 Testimoni Klien Terverifikasi (Testimonials Section)

- Mengutip pengalaman nyata klien (Hendra Kusuma dari Artisan Coffee Co, Clarissa Utami dari Aura Skincare, David Setiawan dari Vanguard Apparel, Stephanie Tan dari Apex FinTech).
- Menggunakan foto profil aktual di `public/assets/images/team_*.jpg` dan `public/assets/images/c2.jpg`.
- Dilarang menambahkan testimoni fiktif atau avatar hasil generasi acak tanpa persetujuan.

### 3.7 Pertanyaan yang Sering Diajukan (Interactive FAQ)

- Pertanyaan spesifik dan realistis mengenai alur kerja, durasi proyek (2-4 minggu), kepemilikan aset final, dan sistem revisi.
- Menggunakan komponen accordion yang dapat diakses dengan keyboard (Enter/Space) dan terpasang struktur data `FAQPage` Schema.org untuk mendongkrak SEO rich snippet di Google.

### 3.8 Generator Pesan WhatsApp & Formulir Kontak Terpadu (Contact CTA)

- **Field Formulir:** Nama Lengkap, Nomor WhatsApp / Telepon, Email Bisnis, Pilihan Layanan, Estimasi Anggaran, dan Deskripsi Singkat Proyek.
- **Generator WhatsApp:**
  - Menghasilkan tautan langsung ke nomor resmi `+628151195066`.
  - Format pesan rapi ter-encode (`encodeURIComponent`) dengan ringkasan data yang diinput pengguna.
- **Validasi Klien:** Pengecekan nomor telepon dan email sebelum tombol submit aktif, mencegah pesan kosong atau karakter ilegal.

### 3.9 Unduh Company Profile & Peta Lokasi (Footer Section)

- **Berkas Profil Studio:** Tautan langsung unduh berkas `Company Profile Unipic Studio.zip` (66MB) dengan label ukuran berkas yang transparan.
- **Google Maps Facade:** Menggunakan komponen penampung interaktif (_facade_) yang memuat peta hanya ketika pengguna berinteraksi, menjaga performa skor Core Web Vitals tidak terbebani iframe Google Maps berat di awal render.

---

## 4. Persyaratan Non-Fungsional (Non-Functional Requirements)

### 4.1 Kecepatan & Core Web Vitals (CWV)

- **Largest Contentful Paint (LCP):** < 2.5 detik pada jaringan 4G standar.
- **Cumulative Layout Shift (CLS):** 0.00 (seluruh gambar wajib menyertakan atribut `width`, `height`, atau `fill` dengan rasio terukur).
- **Interaction to Next Paint (INP):** < 200 ms.

### 4.2 Aksesibilitas (WCAG 2.1 AA)

- Rasio kontras teks normal minimal **4.5:1** terhadap latar belakang.
- Seluruh tombol dan tautan memiliki indikator fokus yang terlihat (_visible focus ring_).
- Setiap gambar memiliki atribut `alt` deskriptif yang bermakna.

### 4.3 Kepatuhan Mesin Pencari (SEO)

- Metadata dinamis dan lengkap di `src/app/layout.tsx`.
- Peta situs otomatis via `src/app/sitemap.ts`.
- File instruksi perayap mesin pencari via `src/app/robots.ts`.
- Schema.org JSON-LD tipe `ProfessionalService` dan `FAQPage`.

---

## 5. Batasan & Hal di Luar Cakupan (Non-Goals)

1. **Bukan Toko E-Commerce Self-Hosted:** Transaksi pemesanan jasa dilakukan melalui jalur konsultasi langsung (WhatsApp / konsultasi tim), bukan checkout keranjang otomatis di website.
2. **Tidak Menggunakan Testimoni / Statistik Palsu:** Dilarang mencantumkan angka seperti "10.000+ Klien Puas" atau "99.9% Uptime" tanpa bukti audit resmi.
3. **Bukan Aplikasi Multi-Tenant:** Website ini adalah etalase monolitik tunggal untuk agensi UNIPIC Studio.
