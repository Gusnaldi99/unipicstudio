# Design System & Visual Direction: UNIPIC Studio

**Dokumen:** Panduan Desain & Arah Visual Antarmuka  
**Target Platform:** Web (Desktop, Tablet, Mobile)  
**Tingkat Dial Liveliness:** `ENERGY 2 / RHYTHM 2 / MOTION 1`  

---

## 1. Filosofi & Kepribadian Merek (Brand Identity)

UNIPIC Studio merepresentasikan agensi kreatif dan pemasaran digital yang kredibel, modern, dan berorientasi hasil. Karakter visual yang dibangun:
- **Profesional & Berwibawa (*Authoritative*):** Mengutamakan kejelasan informasi dan keterbacaan tinggi.
- **Kreatif Terukur (*Crafted Creativity*):** Estetika modern tanpa terjebak pada tren sesaat atau hiasan berlebihan (*anti-slop*).
- **Bersih & Fungsional (*Clean & High Contrast*):** Setiap ruang kosong (*whitespace*), tipografi, dan elemen visual memiliki tujuan yang jelas.

---

## 2. Pengaturan Dial Antarmuka (Liveliness Dials)

Sesuai standar Anti-Slop Part 3, antarmuka UNIPIC Studio memegang teguh nilai dial:

```
Dial: ENERGY 2 / RHYTHM 2 / MOTION 1
```

1. **ENERGY 2 (Balanced):**
   Tampilan memiliki rasa percaya diri yang solid layaknya agensi global berstandar tinggi. Tidak datar seperti portal pemerintah (Energy 1), tetapi juga tidak kacau atau terlalu riuh seperti eksperimen agensi 3D (Energy 3).
2. **RHYTHM 2 (Consistent with Structural Variety):**
   Susunan layout antar bagian bervariasi secara alami: Hero lebar sinematik, pilar keunggulan modular, tab interaktif pada layanan, galeri grid 3 kolom pada portofolio, dan accordion ringkas pada FAQ. Menghindari ritme monoton (*anti-uniform rhythm*).
3. **MOTION 1 (Calm & Purposeful):**
   Gerakan halus hanya digunakan pada transisi hover tombol, pertukaran tab layanan, ekspansi accordion FAQ, dan buka-tutup modal portofolio. Tidak ada efek paralaks yang membuat pusing atau floating objek acak. Menghargai preferensi `prefers-reduced-motion`.

---

## 3. Sistem Palet Warna (Color System)

Palet warna dikunci secara tegas di `src/app/globals.css` menggunakan token variabel CSS:

| Token Variabel | Kode HEX | Nilai RGB | Penggunaan & Tujuan Desain |
| :--- | :--- | :--- | :--- |
| `--foreground` | `#0F172A` | `15, 23, 42` | Slate 900. Teks utama, judul, dan elemen dengan hierarki tertinggi. |
| `--background` | `#FFFFFF` | `255, 255, 255` | Latar belakang dasar halaman yang bersih dan terang. |
| `--surface-subtle` | `#F8FAFC` | `248, 250, 252` | Slate 50. Pemisah bagian (Services, CTA) agar tidak monoton. |
| `--surface-card` | `#FFFFFF` | `255, 255, 255` | Latar kartu komponen dan modal. |
| `--surface-dark` | `#0F172A` | `15, 23, 42` | Slate 900. Latar mega-footer untuk memberikan bobot penutup yang solid. |
| `--brand-primary` | `#1E40AF` | `30, 64, 175` | Blue 800. Warna identitas utama UNIPIC (tombol utama, tautan aktif). |
| `--brand-primary-hover` | `#1D4ED8` | `29, 78, 216` | Blue 700. State interaktif saat pointer berada di atas tombol utama. |
| `--brand-accent` | `#FF5524` | `255, 85, 36` | Warm Tangerine. Aksen hangat untuk badge sorotan dan titik fokus penting. |
| `--muted-foreground` | `#475569` | `71, 85, 105` | Slate 600. Teks deskripsi, keterangan pelengkap, memenuhi rasio WCAG AA. |
| `--border` | `#E2E8F0` | `226, 232, 240` | Slate 200. Garis batas kartu, pemisah baris, dan input formulir. |

> **Aturan Palet Anti-Slop:**
> - Maksimal 2-3 warna utama + 1 warna aksen (R-29).
> - Dilarang menggunakan gradien generik ungu ke biru (*purple-cyan AI glow*).
> - Rasio kontras teks terhadap latar belakang minimal 4.5:1 untuk teks biasa dan 3:1 untuk teks besar (R-25).

---

## 4. Tipografi Resmi (Typography Hierarchy)

Website menggunakan dua keluarga font Google yang dimuat secara optimal via `next/font`:

### 4.1 Display Font: Plus Jakarta Sans (`--font-display`)
Digunakan khusus untuk judul, heading bagian, dan angka metrik penting:
- **H1 (Hero Headline):** `text-4xl` hingga `text-6xl`, `font-extrabold` (`font-weight: 800`), `tracking-tight`, line-height proporsional.
- **H2 (Section Heading):** `text-3xl` hingga `text-4xl`, `font-bold` (`font-weight: 700`), `tracking-tight`.
- **H3 (Card / Subsection Heading):** `text-xl` hingga `text-2xl`, `font-semibold` (`font-weight: 600`).
- **H4 / Subhead:** `text-lg`, `font-semibold`.

### 4.2 Body Font: Inter (`--font-sans`)
Digunakan untuk paragraf, daftar cakupan layanan, input form, dan navigasi:
- **Body Regular:** `text-base` (16px), `leading-relaxed` (1.625), Slate 600 (`#475569`).
- **Body Small:** `text-sm` (14px), Slate 600, untuk caption dan metadata.
- **Micro UI Text:** `text-xs` (12px), `font-medium`, khusus label badge dan petunjuk teknis.

> **Aturan Tipografi Anti-Slop:**
> - Dilarang menggunakan font monospace berukuran raksasa tanpa alasan fungsional (R-06).
> - Dilarang menggunakan huruf kapital semua dengan letter-spacing ekstrem (`H O W  I T  W O R K S`) sebagai template generik AI.

---

## 5. Komponen, Elevasi & Spasial

### 5.1 Radius Sudut (Border Radius)
Konsisten dan terukur, tidak semua elemen berbentuk pil (*capsule*):
- `rounded-md` (0.5rem / 8px): Tombol standar, input form, badge ringkas.
- `rounded-xl` (0.75rem / 12px): Kartu portofolio, kartu layanan, dan box accordion FAQ.
- `rounded-2xl` (1rem / 16px): Kontainer modal dan wrapper showcase besar.
- `rounded-full` (9999px): Avatar foto dan pill tag kategori.

### 5.2 Bayangan & Elevasi (Elevation & Shadows)
Bayangan digunakan sebagai penanda elevasi visual secara selektif, bukan membuat semua komponen melayang:
- **Level 0 (Flat):** Komponen dengan border subtle `border-[#E2E8F0]` tanpa bayangan.
- **Level 1 (Card Default):** `shadow-sm` (`0 1px 2px 0 rgb(0 0 0 / 0.05)`).
- **Level 2 (Interactive Hover / Modal):** `shadow-md` atau `shadow-lg` terukur saat kartu disentuh kursor.
- **Dilarang:** Memberikan efek glow berpendar pada setiap tombol atau border.

### 5.3 Ukuran Tombol & Target Sentuh (Touch Targets)
- Semua tombol dan link di mobile memiliki tinggi minimal **44px** (aturan R-03).
- Padding tombol standar: `px-6 py-3` untuk aksi utama, `px-4 py-2` untuk tombol sekunder.

---

## 6. Standar Copywriting UI (Anti-Slop Content Rules)

1. **Bebas Em Dash:** Dilarang mencantumkan tanda baca *em dash* (`—`) pada seluruh teks antarmuka pengguna. Gunakan tanda koma, titik dua, tanda kurung, atau titik (aturan R-02).
2. **CTA Spesifik dan Berorientasi Tindakan:**
   - Dilarang tombol generik: "Get Started", "Learn More", "Try Now", "Discover" (aturan R-15).
   - Gunakan kata kerja langsung: "Lihat Portofolio", "Mulai Konsultasi", "Kirim Pesan WhatsApp", "Unduh Profil Studio (66MB)".
3. **Bebas Buzzword Kosong:**
   - Dilarang kata-kata klise: "AI-Powered", "Next Generation", "Revolutionary", "Cutting Edge", "Seamless" tanpa data pendukung (aturan R-16).
   - Nyatakan hasil nyata secara gamblang: "Manajemen Konten Harian & Meta Ads", "Pengerjaan 2 sampai 4 Minggu".
