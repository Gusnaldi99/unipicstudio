export interface SocialReelItem {
  id: string;
  orderNumber: string; // e.g. "01", "02", "03"
  videoSrc?: string;
  youtubeUrl?: string;
  youtubeId?: string;
  thumbnailSrc?: string;
  caption?: string;
  tag: string; // Label displayed at the bottom of the card (e.g. "JET FITNESS KARAWACI")
}

export function extractYoutubeId(urlOrId?: string): string | null {
  if (!urlOrId) return null;
  const trimmed = urlOrId.trim();
  if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) {
    return trimmed;
  }
  const match = trimmed.match(
    /(?:youtu\.be\/|youtube\.com\/(?:shorts\/|embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/
  );
  return match ? match[1] : null;
}

export interface ClientBanner {
  id: string;
  label: string;
  imageSrc: string;
  alt: string;
}

export interface SocialClientSection {
  id: string;
  name: string;
  instagramHandle: string;
  instagramUrl: string;
  category: string;
  description: string;
  badgeLabel: string;
  banners?: ClientBanner[];
  reels: SocialReelItem[];
}

export const socialMediaClients: SocialClientSection[] = [
  {
    id: "jet-fitness-karawaci",
    name: "Jet Fitness Karawaci",
    instagramHandle: "@jetfitnesskarawaci",
    instagramUrl: "https://www.instagram.com/jetfitnesskarawaci/",
    category: "Fitness & Wellness",
    description:
      "Produksi konten reels: workout, video transformasi member, dan materi promo bulanan yang fokus ngajak orang buat datang langsung dan daftar keanggotaan.",
    badgeLabel: "IG | JET FITNESS KARAWACI",
    banners: [
      {
        id: "karawaci",
        label: "Cabang Karawaci",
        imageSrc:
          "/assets/images/banner/digital-marketing/porto unipic_jetfitness karawaci.png",
        alt: "Banner Portofolio Digital Marketing Jet Fitness Karawaci oleh UNIPIC Studio",
      },
    ],
    reels: [
      {
        id: "jet-1",
        orderNumber: "01",
        youtubeUrl: "https://www.youtube.com/watch?v=muDWnIaWQqA",
        youtubeId: "muDWnIaWQqA",
        videoSrc: "https://www.youtube.com/embed/muDWnIaWQqA",
        thumbnailSrc: "https://img.youtube.com/vi/muDWnIaWQqA/maxresdefault.jpg",
        tag: "JET FITNESS KARAWACI",
      },
      {
        id: "jet-2",
        orderNumber: "02",
        youtubeUrl: "https://www.youtube.com/watch?v=arQ-Mbdx4CI",
        youtubeId: "arQ-Mbdx4CI",
        videoSrc: "https://www.youtube.com/embed/arQ-Mbdx4CI",
        thumbnailSrc: "https://img.youtube.com/vi/arQ-Mbdx4CI/maxresdefault.jpg",
        tag: "JET FITNESS KARAWACI",
      },
      {
        id: "jet-3",
        orderNumber: "03",
        youtubeUrl: "https://www.youtube.com/watch?v=_qPAjxjA7q4",
        youtubeId: "_qPAjxjA7q4",
        videoSrc: "https://www.youtube.com/embed/_qPAjxjA7q4",
        thumbnailSrc: "https://img.youtube.com/vi/_qPAjxjA7q4/maxresdefault.jpg",
        tag: "JET FITNESS KARAWACI",
      },
    ],
  },
  {
    id: "jet-fitness-fatmawati",
    name: "Jet Fitness Fatmawati",
    instagramHandle: "@jetfitnessfatmawati",
    instagramUrl: "https://www.instagram.com/jetfitnessfatmawati/",
    category: "Fitness & Wellness",
    description:
      "Produksi konten reels: showcase gym terhits Fatmawati, penawaran membership bulanan hemat 200 ribuan, dan promo Member Get Member berkonversi tinggi.",
    badgeLabel: "IG | JET FITNESS FATMAWATI",
    banners: [
      {
        id: "fatmawati",
        label: "Cabang Fatmawati",
        imageSrc:
          "/assets/images/banner/digital-marketing/porto unipic_jetfitness fatmawati.png",
        alt: "Banner Portofolio Digital Marketing Jet Fitness Fatmawati oleh UNIPIC Studio",
      },
    ],
    reels: [
      {
        id: "jet-fatmawati-1",
        orderNumber: "01",
        youtubeUrl: "https://youtube.com/shorts/nWnfKgDfcqE",
        youtubeId: "nWnfKgDfcqE",
        videoSrc: "https://www.youtube.com/embed/nWnfKgDfcqE",
        thumbnailSrc: "https://img.youtube.com/vi/nWnfKgDfcqE/maxresdefault.jpg",
        tag: "JET FITNESS FATMAWATI",
      },
      {
        id: "jet-fatmawati-2",
        orderNumber: "02",
        youtubeUrl: "https://youtube.com/shorts/vet1NjNBb8E",
        youtubeId: "vet1NjNBb8E",
        videoSrc: "https://www.youtube.com/embed/vet1NjNBb8E",
        thumbnailSrc: "https://img.youtube.com/vi/vet1NjNBb8E/maxresdefault.jpg",
        tag: "JET FITNESS FATMAWATI",
      },
      {
        id: "jet-fatmawati-3",
        orderNumber: "03",
        youtubeUrl: "https://youtube.com/shorts/vBraUNiuk58",
        youtubeId: "vBraUNiuk58",
        videoSrc: "https://www.youtube.com/embed/vBraUNiuk58",
        thumbnailSrc: "https://img.youtube.com/vi/vBraUNiuk58/maxresdefault.jpg",
        tag: "JET FITNESS FATMAWATI",
      },
    ],
  },
  {
    id: "la-lavish-interior",
    name: "La Lavish Interior",
    instagramHandle: "@la.lavish.interior",
    instagramUrl: "https://www.instagram.com/la.lavish.interior/",
    category: "Architecture & Interior",
    description:
      "Dokumentasi video vertikal keindahan arsitektur dan tata ruang hunian La Lavish Interior, menampilkan detail pencahayaan alami, perabot kustom, dan kenyamanan ruang keluarga bernuansa mewah.",
    badgeLabel: "IG | LA.LAVISH.INTERIOR",
    banners: [
      {
        id: "lalavish",
        label: "La Lavish Interior",
        imageSrc:
          "/assets/images/banner/digital-marketing/porto unipic_lalavish.png",
        alt: "Banner Portofolio Digital Marketing La Lavish Interior oleh UNIPIC Studio",
      },
    ],
    reels: [
      {
        id: "lalavish-1",
        orderNumber: "01",
        youtubeUrl: "https://youtube.com/shorts/ID3UDE1DfOM",
        youtubeId: "ID3UDE1DfOM",
        videoSrc: "https://www.youtube.com/embed/ID3UDE1DfOM",
        thumbnailSrc: "https://img.youtube.com/vi/ID3UDE1DfOM/maxresdefault.jpg",
        tag: "LA LAVISH INTERIOR",
      },
      {
        id: "lalavish-2",
        orderNumber: "02",
        youtubeUrl: "https://youtube.com/shorts/4Ld33Nvb1BE",
        youtubeId: "4Ld33Nvb1BE",
        videoSrc: "https://www.youtube.com/embed/4Ld33Nvb1BE",
        thumbnailSrc: "https://img.youtube.com/vi/4Ld33Nvb1BE/maxresdefault.jpg",
        tag: "LA LAVISH INTERIOR",
      },
      {
        id: "lalavish-3",
        orderNumber: "03",
        youtubeUrl: "https://youtube.com/shorts/U4JfHvoky-0",
        youtubeId: "U4JfHvoky-0",
        videoSrc: "https://www.youtube.com/embed/U4JfHvoky-0",
        thumbnailSrc: "https://img.youtube.com/vi/U4JfHvoky-0/maxresdefault.jpg",
        tag: "LA LAVISH INTERIOR",
      },
    ],
  },
  {
    id: "ekles-clinic-gading-serpong",
    name: "Ekle's Clinic Gading Serpong",
    instagramHandle: "@eklesclinic_gadingserpong",
    instagramUrl: "https://www.instagram.com/eklesclinic_gadingserpong/",
    category: "Beauty & Clinic",
    description:
      "Konten tour klinik, sesi tanya jawab bareng dokter, dan dokumentasi treatment pasien untuk memperlihatkan suasana klinik yang nyaman, higienis, dan terpercaya.",
    badgeLabel: "IG | EKLES CLINIC GADING SERPONG",
    banners: [
      {
        id: "ekles",
        label: "Cabang Gading Serpong",
        imageSrc: "/assets/images/banner/digital-marketing/porto unipic_ekle's.png",
        alt: "Banner Portofolio Digital Marketing Ekle's Clinic Gading Serpong oleh UNIPIC Studio",
      },
    ],
    reels: [
      {
        id: "ekles-1",
        orderNumber: "01",
        youtubeUrl: "https://youtube.com/shorts/syDr0ECwR3w",
        youtubeId: "syDr0ECwR3w",
        videoSrc: "https://www.youtube.com/embed/syDr0ECwR3w",
        thumbnailSrc: "https://img.youtube.com/vi/syDr0ECwR3w/maxresdefault.jpg",
        tag: "EKLE'S CLINIC GADING SERPONG",
      },
      {
        id: "ekles-2",
        orderNumber: "02",
        youtubeUrl: "https://youtube.com/shorts/XjzFCnDY-pY",
        youtubeId: "XjzFCnDY-pY",
        videoSrc: "https://www.youtube.com/embed/XjzFCnDY-pY",
        thumbnailSrc: "https://img.youtube.com/vi/XjzFCnDY-pY/maxresdefault.jpg",
        tag: "EKLE'S CLINIC GADING SERPONG",
      },
      {
        id: "ekles-3",
        orderNumber: "03",
        youtubeUrl: "https://youtube.com/shorts/xtZoMhx8JmI",
        youtubeId: "xtZoMhx8JmI",
        videoSrc: "https://www.youtube.com/embed/xtZoMhx8JmI",
        thumbnailSrc: "https://img.youtube.com/vi/xtZoMhx8JmI/maxresdefault.jpg",
        tag: "EKLE'S CLINIC GADING SERPONG",
      },
    ],
  },
  {
    id: "defoma",
    name: "Defoma",
    instagramHandle: "@defoma.id",
    instagramUrl: "https://www.instagram.com/defoma.id/",
    category: "Fashion & Retail",
    description:
      "Video komersial vertikal fashion produk Defoma yang memadukan estetika visual lookbook, ritme transisi dinamis, dan daya pikat konversi penjualan online.",
    badgeLabel: "IG | DEFOMA.ID",
    banners: [
      {
        id: "defoma",
        label: "Defoma",
        imageSrc:
          "/assets/images/banner/digital-marketing/porto unipic_de'foma.png",
        alt: "Banner Portofolio Digital Marketing Defoma oleh UNIPIC Studio",
      },
    ],
    reels: [
      {
        id: "defoma-1",
        orderNumber: "01",
        youtubeUrl: "https://youtube.com/shorts/UfEWhEutOVw",
        youtubeId: "UfEWhEutOVw",
        videoSrc: "https://www.youtube.com/embed/UfEWhEutOVw",
        thumbnailSrc: "https://img.youtube.com/vi/UfEWhEutOVw/maxresdefault.jpg",
        tag: "DEFOMA INDONESIA",
      },
      {
        id: "defoma-2",
        orderNumber: "02",
        youtubeUrl: "https://youtube.com/shorts/6zAe2dXA92U",
        youtubeId: "6zAe2dXA92U",
        videoSrc: "https://www.youtube.com/embed/6zAe2dXA92U",
        thumbnailSrc: "https://img.youtube.com/vi/6zAe2dXA92U/maxresdefault.jpg",
        tag: "DEFOMA INDONESIA",
      },
      {
        id: "defoma-3",
        orderNumber: "03",
        youtubeUrl: "https://youtube.com/shorts/lyP84APOzm4",
        youtubeId: "lyP84APOzm4",
        videoSrc: "https://www.youtube.com/embed/lyP84APOzm4",
        thumbnailSrc: "https://img.youtube.com/vi/lyP84APOzm4/maxresdefault.jpg",
        tag: "DEFOMA INDONESIA",
      },
    ],
  },
  {
    id: "will-hadi",
    name: "Will Hadi",
    instagramHandle: "@willhadi.lfk",
    instagramUrl: "https://www.instagram.com/willhadi.lfk/",
    category: "Personal Brand & Sport",
    description:
      "Perancangan visual personal branding dan sinematografi kebugaran atletik, mengemas pola pikir disiplin tinggi dan edukasi fisik yang menginspirasi audiens.",
    badgeLabel: "IG | WILL HADI",
    banners: [
      {
        id: "willhadi",
        label: "Will Hadi",
        imageSrc:
          "/assets/images/banner/digital-marketing/porto unipic_willhadi.png",
        alt: "Banner Portofolio Digital Marketing Will Hadi oleh UNIPIC Studio",
      },
    ],
    reels: [
      {
        id: "willhadi-1",
        orderNumber: "01",
        youtubeUrl: "https://youtube.com/shorts/DPBnGt685Ik",
        youtubeId: "DPBnGt685Ik",
        videoSrc: "https://www.youtube.com/embed/DPBnGt685Ik",
        thumbnailSrc: "https://img.youtube.com/vi/DPBnGt685Ik/maxresdefault.jpg",
        tag: "WILL HADI",
      },
      {
        id: "willhadi-2",
        orderNumber: "02",
        youtubeUrl: "https://youtube.com/shorts/NVlnuYAP1fM",
        youtubeId: "NVlnuYAP1fM",
        videoSrc: "https://www.youtube.com/embed/NVlnuYAP1fM",
        thumbnailSrc: "https://img.youtube.com/vi/NVlnuYAP1fM/maxresdefault.jpg",
        tag: "WILL HADI",
      },
      {
        id: "willhadi-3",
        orderNumber: "03",
        youtubeUrl: "https://youtube.com/shorts/DgabwVOpH38",
        youtubeId: "DgabwVOpH38",
        videoSrc: "https://www.youtube.com/embed/DgabwVOpH38",
        thumbnailSrc: "https://img.youtube.com/vi/DgabwVOpH38/maxresdefault.jpg",
        tag: "WILL HADI",
      },
    ],
  },
  {
    id: "lfk",
    name: "LFK™ (Lithium Fire Killer)",
    instagramHandle: "lithiumfirekiller.com",
    instagramUrl: "https://lithiumfirekiller.com",
    category: "Safety Tech & Innovation",
    description:
      "Produksi konten video vertikal YouTube Shorts dan kampanye digital edukasi penanganan bahaya kebakaran baterai lithium EV serta demonstrasi keandalan APAR LFK Hartindo AF31.",
    badgeLabel: "LFK™ (LITHIUM FIRE KILLER)",
    banners: [
      {
        id: "lfk",
        label: "LFK™ (Lithium Fire Killer)",
        imageSrc:
          "/assets/images/banner/digital-marketing/porto unipic_lfk.png",
        alt: "Banner Portofolio Digital Marketing LFK Lithium Fire Killer oleh UNIPIC Studio",
      },
    ],
    reels: [
      {
        id: "lfk-1",
        orderNumber: "01",
        youtubeUrl: "https://youtube.com/shorts/x-7bNRwXnLE",
        youtubeId: "x-7bNRwXnLE",
        videoSrc: "https://www.youtube.com/embed/x-7bNRwXnLE",
        thumbnailSrc: "https://img.youtube.com/vi/x-7bNRwXnLE/maxresdefault.jpg",
        tag: "LFK™ (LITHIUM FIRE KILLER)",
      },
      {
        id: "lfk-2",
        orderNumber: "02",
        youtubeUrl: "https://youtube.com/shorts/lsCQdfqaRzI",
        youtubeId: "lsCQdfqaRzI",
        videoSrc: "https://www.youtube.com/embed/lsCQdfqaRzI",
        thumbnailSrc: "https://img.youtube.com/vi/lsCQdfqaRzI/maxresdefault.jpg",
        tag: "LFK™ (LITHIUM FIRE KILLER)",
      },
      {
        id: "lfk-3",
        orderNumber: "03",
        youtubeUrl: "https://youtube.com/shorts/pw3he_OIZhQ",
        youtubeId: "pw3he_OIZhQ",
        videoSrc: "https://www.youtube.com/embed/pw3he_OIZhQ",
        thumbnailSrc: "https://img.youtube.com/vi/pw3he_OIZhQ/maxresdefault.jpg",
        tag: "LFK™ (LITHIUM FIRE KILLER)",
      },
    ],
  },
  {
    id: "famili-sakato",
    name: "Famili Sakato",
    instagramHandle: "@familisakato.official",
    instagramUrl: "https://www.instagram.com/familisakato.official/",
    category: "Culinary & F&B",
    description:
      "Pengelolaan konten media sosial kuliner legendaris Masakan Padang Famili Sakato sejak 1985, mengemas menu otentik, sesi potret menu andalan, dan daya tarik cita rasa khas Minang.",
    badgeLabel: "IG | FAMILISAKATO.OFFICIAL",
    banners: [
      {
        id: "famili-sakato",
        label: "Famili Sakato",
        imageSrc:
          "/assets/images/banner/digital-marketing/porto unipic_famili sakato.png",
        alt: "Banner Portofolio Digital Marketing Famili Sakato oleh UNIPIC Studio",
      },
    ],
    reels: [
      {
        id: "famili-sakato-1",
        orderNumber: "01",
        youtubeUrl: "https://youtube.com/shorts/LIJVYSO5K5A",
        youtubeId: "LIJVYSO5K5A",
        videoSrc: "https://www.youtube.com/embed/LIJVYSO5K5A",
        thumbnailSrc: "https://img.youtube.com/vi/LIJVYSO5K5A/maxresdefault.jpg",
        tag: "FAMILI SAKATO",
      },
      {
        id: "famili-sakato-2",
        orderNumber: "02",
        youtubeUrl: "https://youtube.com/shorts/G0KKEw5nYoM",
        youtubeId: "G0KKEw5nYoM",
        videoSrc: "https://www.youtube.com/embed/G0KKEw5nYoM",
        thumbnailSrc: "https://img.youtube.com/vi/G0KKEw5nYoM/maxresdefault.jpg",
        tag: "FAMILI SAKATO",
      },
      {
        id: "famili-sakato-3",
        orderNumber: "03",
        youtubeUrl: "https://youtube.com/shorts/Flfu9XBTnN8",
        youtubeId: "Flfu9XBTnN8",
        videoSrc: "https://www.youtube.com/embed/Flfu9XBTnN8",
        thumbnailSrc: "https://img.youtube.com/vi/Flfu9XBTnN8/maxresdefault.jpg",
        tag: "FAMILI SAKATO",
      },
    ],
  },
  {
    id: "sea-familia",
    name: "Sea Familia",
    instagramHandle: "@sea.familia",
    instagramUrl: "https://www.instagram.com/sea.familia/",
    category: "Travel & Hospitality",
    description:
      "Perancangan visual feed dan promosi digital sailing trip pinisi bersama Sea Familia, menampilkan pesona wisata bahari, panduan diving, dan kenyamanan liveaboard.",
    badgeLabel: "IG | SEA.FAMILIA",
    banners: [
      {
        id: "sea-familia",
        label: "Sea Familia",
        imageSrc:
          "/assets/images/banner/digital-marketing/porto unipic_sea familia.png",
        alt: "Banner Portofolio Digital Marketing Sea Familia oleh UNIPIC Studio",
      },
    ],
    reels: [
      {
        id: "sea-familia-1",
        orderNumber: "01",
        youtubeUrl: "https://youtube.com/shorts/6GWn3UjJy0s",
        youtubeId: "6GWn3UjJy0s",
        videoSrc: "https://www.youtube.com/embed/6GWn3UjJy0s",
        thumbnailSrc: "https://img.youtube.com/vi/6GWn3UjJy0s/maxresdefault.jpg",
        tag: "SEA FAMILIA",
      },
      {
        id: "sea-familia-2",
        orderNumber: "02",
        youtubeUrl: "https://youtube.com/shorts/FHVvBQ3djWE",
        youtubeId: "FHVvBQ3djWE",
        videoSrc: "https://www.youtube.com/embed/FHVvBQ3djWE",
        thumbnailSrc: "https://img.youtube.com/vi/FHVvBQ3djWE/maxresdefault.jpg",
        tag: "SEA FAMILIA",
      },
      {
        id: "sea-familia-3",
        orderNumber: "03",
        youtubeUrl: "https://youtube.com/shorts/CQXGkBQnVtc",
        youtubeId: "CQXGkBQnVtc",
        videoSrc: "https://www.youtube.com/embed/CQXGkBQnVtc",
        thumbnailSrc: "https://img.youtube.com/vi/CQXGkBQnVtc/maxresdefault.jpg",
        tag: "SEA FAMILIA",
      },
    ],
  },
  /*
  // Catatan: Klien portofolio video lainnya sementara dinonaktifkan atas permintaan klien
  // agar fokus meninjau implementasi YouTube Shorts Embed Jet Fitness, La Lavish Interior, Ekle's Clinic, Defoma, Will Hadi, LFK, Famili Sakato, dan Sea Familia.
  {
    id: "erlina-susman",
    name: "Erlina Susman",
    instagramHandle: "@erlina_susman",
    instagramUrl: "https://www.instagram.com/erlina_susman/",
    category: "Lifestyle & Beauty",
    description:
      "Rangkaian konten video gaya hidup dan kecantikan harian yang autentik, menghubungkan personal charm dengan rekomendasi produk yang disukai para pengikutnya.",
    badgeLabel: "IG | ERLINA_SUSMAN",
    reels: [
      {
        id: "erlina-1",
        orderNumber: "01",
        videoSrc:
          "/assets/Vidio%20Social%20Media/Erlina%20Susman/Video%20by%20erlina_susman.mp4",
        tag: "ERLINA SUSMAN",
      },
      {
        id: "erlina-2",
        orderNumber: "02",
        videoSrc:
          "/assets/Vidio%20Social%20Media/Erlina%20Susman/Video%20by%20erlina_susman%20(1).mp4",
        tag: "ERLINA SUSMAN",
      },
      {
        id: "erlina-3",
        orderNumber: "03",
        videoSrc:
          "/assets/Vidio%20Social%20Media/Erlina%20Susman/Video%20by%20erlina_susman%20(2).mp4",
        tag: "ERLINA SUSMAN",
      },
      {
        id: "erlina-4",
        orderNumber: "04",
        videoSrc:
          "/assets/Vidio%20Social%20Media/Erlina%20Susman/Video%20by%20erlina_susman%20(3).mp4",
        tag: "ERLINA SUSMAN",
      },
      {
        id: "erlina-5",
        orderNumber: "05",
        videoSrc:
          "/assets/Vidio%20Social%20Media/Erlina%20Susman/Video%20by%20erlina_susman%20(4).mp4",
        tag: "ERLINA SUSMAN",
      },
      {
        id: "erlina-6",
        orderNumber: "06",
        videoSrc:
          "/assets/Vidio%20Social%20Media/Erlina%20Susman/Video%20by%20erlina_susman%20(5).mp4",
        tag: "ERLINA SUSMAN",
      },
    ],
  },
  */
];
