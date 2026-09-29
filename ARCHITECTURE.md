# Technical Architecture: UNIPIC Studio

**Dokumen:** Arsitektur Perangkat Lunak & Rekayasa Teknis  
**Framework:** Next.js 16.3.5 (App Router, Turbopack)  
**Bahasa:** TypeScript 5  
**Runtime:** Node.js 20+ / Edge  

---

## 1. Ikhtisar Sistem & Filosofi Arsitektur

UNIPIC Studio dibangun dengan fondasi modern web architecture berbasis **Next.js App Router** dan **React 19 Server Components (RSC)**.

Prinsip arsitektur yang dianut:
1. **Server First by Default:** Seluruh halaman, tata letak, dan metadata dirender di server untuk memastikan waktu muat pertama (*First Contentful Paint*) berlangsung instan dan perayap mesin pencari (SEO) dapat membaca seluruh konten tanpa hambatan eksekusi JavaScript.
2. **Isolasi Client Boundaries:** Komponen interaktif yang memerlukan state peramban (`useState`, `onClick`) diisolasi secara tegas dengan direktif `"use client"` pada level komponen terkecil (*leaf components*), menjaga agar ukuran bundel JavaScript klien tetap minimal.
3. **Zero Runtime CSS Overhead:** Menggunakan Tailwind CSS v4 yang dikompilasi secara statis saat proses build menggunakan engine `@tailwindcss/postcss`.
4. **Optimasi Aset Progresif:** Memanfaatkan `next/image` bawaan Next.js untuk transformasi gambar WebP/AVIF otomatis, pencegahan pergeseran tata letak (*layout shift* bernilai 0), dan pemuatan prioritas pada elemen LCP.

---

## 2. Struktur Direktori Proyek

```
unipicstudio/
├── public/
│   └── assets/
│       └── images/                 # Direktori aset statis produksi
│           ├── project/            # Mockup & showcase portofolio
│           ├── logo/               # Aset logo resmi studio
│           │   ├── logo unipic original 2.png
│           │   └── logo unipic putih 2.png
│           ├── bg_banner1.jpg      # Latar hero resolusi tinggi (LCP)
│           └── *.jpg / *.webp      # Aset media (lihat ASSETS.md)
├── src/
│   ├── app/
│   │   ├── globals.css             # Konfigurasi Tailwind v4 & variabel token CSS
│   │   ├── layout.tsx              # Root layout (RSC, font Google, JSON-LD)
│   │   ├── page.tsx                # Komposisi halaman utama (RSC)
│   │   ├── robots.ts               # Generator berkas robots.txt otomatis
│   │   └── sitemap.ts              # Generator peta situs sitemap.xml otomatis
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx          # Navigasi atas dengan menu responsif ("use client")
│   │   │   └── Footer.tsx          # Mega-footer, info kontak, facade peta
│   │   ├── sections/               # Bagian modular halaman beranda
│   │   │   ├── HeroSection.tsx     # Hero showcase & CTA utama
│   │   │   ├── ValuePillars.tsx    # 4 pilar filosofi agensi
│   │   │   ├── WhyChooseUs.tsx     # Nilai keunggulan & rekam jejak
│   │   │   ├── ServicesSection.tsx # Tab interaktif layanan ("use client")
│   │   │   ├── PortfolioSection.tsx# Filter portofolio & modal detail ("use client")
│   │   │   ├── FaqSection.tsx      # Accordion interaktif ("use client")
│   │   │   └── ContactCtaSection.tsx # Form kontak & generator WhatsApp ("use client")
│   │   └── ui/                     # Komponen UI atomik & reusable
│   │       ├── Badge.tsx           # Label pill status/tag
│   │       ├── Button.tsx          # Tombol aksi terstandarisasi dengan varian
│   │       ├── Card.tsx            # Pembungkus kartu dengan elevasi terukur
│   │       ├── SectionHeading.tsx  # Standar judul & subjudul bagian
│   │       └── Placeholder.tsx     # Penampung visual fallback
│   └── lib/
│       └── utils.ts                # Utilitas gabungan class clsx + tailwind-merge (cn)
├── AGENTS.md                       # Master AI agent instructions
├── ARCHITECTURE.md                 # Dokumen ini
├── ASSETS.md                       # Inventaris aset gambar & media riil
├── DEPLOYMENT.md                   # Prosedur rilis & hosting
├── DESIGN.md                       # Sistem desain & panduan visual
├── PRD.md                          # Spesifikasi produk & fitur
├── SECURITY.md                     # Kebijakan & panduan keamanan
├── TASK_INSTRUCTION.md             # Panduan operasional tugas AI
├── package.json                    # Dependensi & skrip eksekusi
├── tsconfig.json                   # Konfigurasi compiler TypeScript
└── next.config.ts                  # Konfigurasi Next.js runtime
```

---

## 3. Komponen Server (RSC) vs Client Components

### 3.1 Komponen Server (RSC)
Komponen yang tidak membutuhkan interaksi state peramban tetap berupa Server Component:
- `RootLayout` (`src/app/layout.tsx`): Menangani injeksi font (`next/font/google`), tag metadata canonical/OpenGraph, dan skrip terstruktur Schema.org.
- `HomePage` (`src/app/page.tsx`): Mengatur urutan penyajian komponen bagian tanpa mengirimkan runtime JS tambahan ke klien.
- `HeroSection`, `ValuePillars`, `WhyChooseUs`: Mengalirkan HTML statis langsung ke peramban tanpa delay hidrasi.

### 3.2 Client Components (`"use client"`)
Hanya digunakan pada bagian yang membutuhkan interaktivitas pengguna:
- `Navbar.tsx`: State buka-tutup drawer navigasi seluler dan pendeteksi posisi scroll untuk efek latar semi-transparan.
- `ServicesSection.tsx`: State tab aktif untuk beralih antara 4 layanan inti (Digital Marketing, Branding, Web Dev, Video Ads).
- `PortfolioSection.tsx`: State filter kategori portofolio dan pembukaan modal dialog pop-up detail proyek.
- `FaqSection.tsx`: State ekspansi accordion per butir pertanyaan.
- `ContactCtaSection.tsx`: Validasi input formulir, prefill layanan terpilih, dan penyusunan format pesan WhatsApp ter-encode.

---

## 4. Pola Utilitas Styling: `cn()` Helper

Penggabungan class CSS dinamis dilakukan menggunakan standar `clsx` dan `tailwind-merge` yang dibungkus dalam helper `cn()` di `src/lib/utils.ts`:

```typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

Manfaat:
- Mencegah konflik class Tailwind (contoh: `p-4` yang ditimpa oleh `p-6` secara dinamis akan diselesaikan dengan aman oleh `twMerge`).
- Memudahkan penambahan varian status bersyarat tanpa string concatenation yang rapuh.

---

## 5. Strategi Kinerja & Core Web Vitals (CWV)

### 5.1 Optimasi Gambar (`next/image`)
- **Hero Image:** Gambar `/assets/images/bg_banner1.jpg` pada `HeroSection.tsx` wajib menyertakan properti `priority={true}` agar browser mengunduhnya pada antrean jaringan paling awal (*fetchpriority="high"*).
- **Penetapan Dimensi Pasti:** Setiap gambar wajib menyertakan `width` dan `height` numerik atau properti `fill` bersama kontainer yang memiliki aspect-ratio eksplisit untuk menjamin CLS bernilai 0.
- **Format Modern:** Next.js secara otomatis melayani format AVIF/WebP yang terkompresi sesuai kapabilitas peramban pengguna.

### 5.2 Google Maps Facade Pattern
Memuat iframe peta Google Maps secara mentah di footer dapat membebani metrik LCP dan TBT (Total Blocking Time) hingga 1-2 MB JavaScript pihak ketiga. Website UNIPIC Studio menggunakan pola **Facade**:
- Pada muatan awal, footer hanya menampilkan kartu visual preview peta statis ringan.
- Iframe interaktif Google Maps hanya di-mount ke DOM setelah pengguna menekan tombol interaksi pada kartu tersebut.

### 5.3 SEO & Skema Terstruktur (JSON-LD)
`src/app/layout.tsx` menyematkan dua skema terstruktur resmi Google:
1. `ProfessionalService`: Memberitahukan mesin pencari mengenai nama agensi, nomor kontak resmi, logo, dan area layanan di Jakarta/Indonesia.
2. `FAQPage`: Menjadikan butir FAQ berpeluang muncul langsung sebagai rich snippet pada hasil pencarian Google.

---

## 6. Manajemen State

Proyek ini tidak memerlukan pustaka global state manajemen yang berat (seperti Redux, MobX, atau Zustand). Komunikasi antar komponen dilakukan secara terukur melalui:
- State lokal React (`useState`) pada komponen terkait.
- Navigasi anchor browser (`#services`, `#portfolio`, `#contact`).
- Operan parameter query ringkas untuk memilih tab layanan dan mengarahkan preferensi paket ke formulir kontak.
