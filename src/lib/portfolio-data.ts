export interface PortfolioItem {
  id: string;
  title: string;
  brandName?: string;
  brandLogo?: string;
  category: "marketing" | "web";
  categoryLabel: string;
  imageSrc: string;
  description: string;
  deliverables: string[];
  liveUrl?: string;
}

export const portfolioCategories = [
  { key: "all", label: "Semua Proyek" },
  { key: "marketing", label: "Digital Marketing" },
  { key: "web", label: "Web Development" },
] as const;

export const portfolioData: PortfolioItem[] = [
  {
    id: "marketing-defoma",
    title: "Kampanye Video Digital Marketing Defoma",
    brandName: "Defoma",
    brandLogo: "/assets/images/clients/logo-defoma.webp",
    category: "marketing",
    categoryLabel: "Digital Marketing",
    imageSrc:
      "/assets/images/banner/digital-marketing/porto unipic_de'foma.png",
    description:
      "Produksi rangkaian konten video kreatif dan promosi digital marketing untuk Defoma, berfokus pada visual appeal produk dan storytelling berdurasi ringkas yang engaging.",
    deliverables: [
      "Produksi 6 konten video vertikal digital marketing",
      "Penyusunan hook visual dan audio copywriting kreatif",
      "Strategi distribusi konten digital marketing terjadwal",
    ],
  },
  {
    id: "marketing-ekles",
    title: "Aktivasi Video Reels Ekle's Clinic Gading Serpong",
    brandName: "Ekle's Clinic Gading Serpong",
    brandLogo: "/assets/images/clients/logo-ekles.webp",
    category: "marketing",
    categoryLabel: "Digital Marketing",
    imageSrc:
      "/assets/images/banner/digital-marketing/porto unipic_ekle's.png",
    description:
      "Kampanye konten video klinik kecantikan dan perawatan kulit Ekle's Clinic Gading Serpong, mengedukasi prosedur perawatan medis secara ramah dan membangun kepercayaan pasien.",
    deliverables: [
      "Produksi konten video vertikal & reels YouTube Shorts",
      "Liputan fasilitas klinik dan konsultasi dokter ahli",
      "Optimasi engagement penonton organik media sosial",
    ],
  },
  {
    id: "marketing-jet-fitness",
    title: "Kampanye Video Motivasi Jet Fitness Karawaci",
    brandName: "Jet Fitness Karawaci",
    brandLogo: "/assets/images/clients/logo-jet.webp",
    category: "marketing",
    categoryLabel: "Digital Marketing",
    imageSrc:
      "/assets/images/banner/digital-marketing/porto unipic_jetfitness karawaci.png",
    description:
      "Pengembangan konten video kebugaran berenergi tinggi untuk Jet Fitness Karawaci, menonjolkan peralatan modern, instruktur profesional, dan semangat komunitas gym.",
    deliverables: [
      "Produksi konten video kreatif & reels vertikal YouTube Shorts",
      "Visualisasi fasilitas gym dan pendampingan personal trainer",
      "Format video berirama dinamis untuk menarik anggota baru",
    ],
  },
  {
    id: "marketing-jet-fitness-fatmawati",
    title: "Kampanye Video & Promosi Jet Fitness Fatmawati",
    brandName: "Jet Fitness Fatmawati",
    brandLogo: "/assets/images/clients/logo-jet.webp",
    category: "marketing",
    categoryLabel: "Digital Marketing",
    imageSrc:
      "/assets/images/banner/digital-marketing/porto unipic_jetfitness fatmawati.png",
    description:
      "Pengembangan konten video vertikal dan promosi keanggotaan untuk Jet Fitness Fatmawati, mengemas gym terhits di Fatmawati Jakarta Selatan, membership hemat mulai 200 ribuan, dan promo Member Get Member.",
    deliverables: [
      "Produksi konten video kreatif & reels vertikal YouTube Shorts",
      "Highlight fasilitas gym terlengkap di Fatmawati Jakarta Selatan",
      "Strategi konten penawaran membership dan promo Member Get Member",
    ],
  },
  {
    id: "marketing-will-hadi",
    title: "Personal Branding & Video Konten Will Hadi (LFK)",
    brandName: "Will Hadi (LFK)",
    brandLogo: "/assets/images/clients/logo-lfk.webp",
    category: "marketing",
    categoryLabel: "Digital Marketing",
    imageSrc:
      "/assets/images/banner/digital-marketing/porto unipic_willhadi.png",
    description:
      "Perancangan dan produksi video personal branding untuk Will Hadi bersama LFK, mengemas konten kebugaran, pola pikir disiplin, dan edukasi fisik dengan sinematografi tajam.",
    deliverables: [
      "Produksi konten video kreatif & personal branding YouTube Shorts",
      "Penyusunan narasi motivasi dan teknik latihan atletik",
      "Konsistensi tone warna dan audio berenergi tinggi",
    ],
  },
  {
    id: "marketing-lfk",
    title: "Kampanye Inovasi & Peluncuran Produk LFK™",
    brandName: "LFK™ (Lithium Fire Killer)",
    brandLogo: "/assets/images/clients/logo-lfk.webp",
    category: "marketing",
    categoryLabel: "Digital Marketing",
    imageSrc:
      "/assets/images/banner/digital-marketing/porto unipic_lfk.png",
    description:
      "Perancangan visual feed dan kampanye digital marketing untuk peluncuran inovasi alat pemadam kebakaran baterai lithium EV (FAST APAR) dari LFK™.",
    deliverables: [
      "Produksi konten video kreatif & YouTube Shorts edukasi risiko kebakaran EV",
      "Perancangan visual katalog produk dan kampanye edisi kolektor",
      "Strategi distribusi konten feed media sosial terintegrasi",
    ],
  },
  {
    id: "marketing-famili-sakato",
    title: "Digital Marketing & Konten Kuliner Famili Sakato",
    brandName: "Rumah Makan Famili Sakato",
    brandLogo: "/assets/images/clients/logo-familysakato.webp",
    category: "marketing",
    categoryLabel: "Digital Marketing",
    imageSrc:
      "/assets/images/banner/digital-marketing/porto unipic_famili sakato.png",
    description:
      "Pengelolaan konten media sosial dan promosi digital untuk Rumah Makan Padang Famili Sakato (sejak 1985), mengangkat kelezatan menu otentik serta program gratis ongkir.",
    deliverables: [
      "Produksi konten video kreatif & YouTube Shorts kuliner Masakan Padang",
      "Penyusunan hook copywriting kuliner yang menggugah selera",
      "Penguatan branding digital untuk cabang Paramount Petals",
    ],
  },
  {
    id: "marketing-sea-familia",
    title: "Branding & Digital Marketing Sea Familia",
    brandName: "Sea Familia",
    brandLogo: "/assets/images/clients/logo-seafamilia.webp",
    category: "marketing",
    categoryLabel: "Digital Marketing",
    imageSrc:
      "/assets/images/banner/digital-marketing/porto unipic_sea familia.png",
    description:
      "Kampanye digital marketing dan perancangan materi visual media sosial untuk paket wisata sailing trip kapal pinisi serta liveaboard diving bersama Sea Familia.",
    deliverables: [
      "Perancangan visual edukasi sailing trip dan starter pack diving",
      "Penyusunan konten tips memilih kapal pinisi yang aman dan nyaman",
      "Strategi promosi wisata bahari premium di media sosial",
    ],
  },
  {
    id: "marketing-lalavish",
    title: "Showcase Desain Interior La Lavish",
    brandName: "La Lavish Interior",
    category: "marketing",
    categoryLabel: "Digital Marketing",
    imageSrc:
      "/assets/images/banner/digital-marketing/porto unipic_lalavish.png",
    description:
      "Dokumentasi video estetika arsitektur dan interior rumah tinggal dari La Lavish Interior, menampilkan detail pengerjaan ruang, pencahayaan alami, dan kehangatan hunian.",
    deliverables: [
      "Produksi video showcase arsitektur & interior",
      "Pengambilan gambar sudut ruang dan detail material",
      "Penyelarasan mood visual elegan dan menenangkan",
    ],
  },
  {
    id: "web-fast",
    title: "Website Korporat & Katalog Proteksi Kebakaran FAST",
    brandName: "FAST (Famindo Alfa Spektrum Teknologi)",
    category: "web",
    categoryLabel: "Web Development",
    imageSrc:
      "/assets/images/banner/website/porto unipic_fast website.png",
    description:
      "Perancangan dan pengembangan website korporat modern untuk PT Famindo Alfa Spektrum Teknologi (FAST) dengan fokus pada katalog alat proteksi kebakaran, edukasi keselamatan, dan navigasi multi-halaman yang responsif.",
    deliverables: [
      "Desain antarmuka UI/UX bersih dan responsif lintas perangkat",
      "Struktur katalog produk keselamatan dan sistem inquiry langsung",
      "Optimasi performa halaman dan kecepatan akses (Core Web Vitals)",
      "Integrasi tautan kontak resmi WhatsApp dan formulir penawaran",
    ],
    liveUrl: "https://famindofast.com",
  },
  {
    id: "web-lfk",
    title: "Website Edukasi & Penanganan Baterai Lithium LFK™",
    brandName: "LFK™ (Lithium Fire Killer)",
    brandLogo: "/assets/images/clients/logo-lfk.webp",
    category: "web",
    categoryLabel: "Web Development",
    imageSrc:
      "/assets/images/banner/website/porto unipic_lfk website.png",
    description:
      "Pengembangan website resmi LFK™ (Lithium Fire Killer) untuk memperkenalkan teknologi mutakhir pemadam api baterai lithium EV (Hartindo AF31), didukung visualisasi sertifikasi lab internasional dan profil perusahaan komprehensif.",
    deliverables: [
      "Tata letak interaktif visual produk dan edukasi thermal runaway",
      "Penyajian hasil uji laboratorium terverifikasi dan sertifikasi resmi",
      "Desain antarmuka modern dengan akses cepat ke katalog produk",
      "Saluran konsultasi WhatsApp langsung untuk kebutuhan industri dan korporasi",
    ],
    liveUrl: "https://lithiumfirekiller.com",
  },
  {
    id: "web-ssd",
    title: "Platform Solusi Mobilitas Kendaraan Listrik Sinergi Satu Daya",
    brandName: "Sinergi Satu Daya (SSD)",
    category: "web",
    categoryLabel: "Web Development",
    imageSrc:
      "/assets/images/banner/website/porto unipic_ssd website.png",
    description:
      "Pengembangan website one-stop solution B2B untuk PT Sinergi Satu Daya (SSD), menyajikan ekosistem kendaraan listrik terintegrasi mulai dari operasional armada, konsultasi manajemen operasional, hingga infrastruktur pengisian daya baterai.",
    deliverables: [
      "Desain antarmuka B2B modern dengan palet warna dinamis",
      "Struktur navigasi komprehensif solusi armada dan stasiun pengisian daya",
      "Alur konversi pendaftaran mitra bisnis dan kolaborasi investor",
      "Arsitektur website responsif ponsel dan komputer berkecepatan tinggi",
    ],
    liveUrl: "https://sinergisatudaya.com",
  },
];
