import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://unipicstudio.com"),
  title: {
    default: "UNIPIC Studio | Creative & Digital Marketing Agency",
    template: "%s | UNIPIC Studio",
  },
  description:
    "UNIPIC Studio adalah mitra terpercaya dalam Branding, Pembuatan Konten Kreatif, Pengembangan Web, dan Pemasaran Digital untuk akselerasi bisnis Anda.",
  keywords: [
    "digital marketing agency",
    "branding studio indonesia",
    "jasa pembuatan website profesional",
    "social media management",
    "video iklan komersial",
    "unipic studio",
  ],
  authors: [{ name: "UNIPIC Studio Team" }],
  creator: "UNIPIC Studio",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://unipicstudio.com",
    title: "UNIPIC Studio | Creative & Digital Marketing Agency",
    description:
      "Mitra terpercaya dalam Branding, Pembuatan Konten Kreatif, Pengembangan Web, dan Pemasaran Digital.",
    siteName: "UNIPIC Studio",
    images: [
      {
        url: "/assets/images/banner/website/porto unipic_fast website.png",
        width: 1200,
        height: 630,
        alt: "UNIPIC Studio - FAST Web Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UNIPIC Studio | Creative & Digital Marketing Agency",
    description:
      "Mitra terpercaya dalam Branding, Pembuatan Konten Kreatif, Pengembangan Web, dan Pemasaran Digital.",
    images: ["/assets/images/banner/website/porto unipic_fast website.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://unipicstudio.com",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "UNIPIC Studio",
  image: "https://unipicstudio.com/assets/images/logo/logo unipic original 2.png",
  description:
    "Mitra terpercaya dalam Branding, Pembuatan Konten Kreatif, Pengembangan Web, dan Pemasaran Digital.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jakarta",
    addressCountry: "ID",
  },
  url: "https://unipicstudio.com",
  telephone: "+628151195066",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Berapa lama durasi pengerjaan proyek di UNIPIC Studio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Waktu pengerjaan bergantung pada jenis layanan. Untuk pembuatan logo dan identitas merek biasanya memakan waktu 2–3 minggu. Pembuatan website atau landing page rata-rata selesai dalam 2–4 minggu. Sementara produksi video iklan komersial membutuhkan 3–5 minggu dari konsep hingga editing final.",
      },
    },
    {
      "@type": "Question",
      name: "Bagaimana proses dan alur kerja sama proyek?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Proses kerja terbagi menjadi 4 tahap: (1) Diskusi kebutuhan dan brief proyek, (2) Pengajuan konsep kreatif dan moodboard, (3) Proses produksi atau pengembangan, dan (4) Tinjauan bersama serta revisi sebelum serah terima final.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${plusJakartaSans.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-white text-[#0F172A] selection:bg-[#DBEAFE] selection:text-[#1E3A8A]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
