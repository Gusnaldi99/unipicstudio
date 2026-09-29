"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import {
  Share2,
  Code2,
  CheckCircle2,
} from "lucide-react";

interface ServiceItem {
  id: string;
  tabTitle: string;
  icon: React.ElementType;
  headline: string;
  description: string;
  imageSrc: string;
  deliverables: string[];
  inquiryQuery: string;
}

const servicesList: ServiceItem[] = [
  {
    id: "digital-marketing",
    tabTitle: "Digital Marketing",
    icon: Share2,
    headline: "Manajemen Media Sosial & Periklanan Berbayar",
    description:
      "Kami menyusun strategi konten harian dan bulanan yang relevan dengan target pasar Anda di Instagram, TikTok, dan Facebook, serta mengelola iklan berbayar (Meta & Google Ads) untuk meningkatkan penjualan.",
    imageSrc:
      "/assets/images/banner/digital-marketing/porto unipic_de'foma.png",
    deliverables: [
      "Perencanaan konten bulanan (Editorial Calendar)",
      "Produksi konten visual dan video pendek (Reels & TikTok)",
      "Pemasangan dan optimasi iklan Meta Ads & Google Ads",
      "Laporan perkembangan performa dan evaluasi mingguan",
    ],
    inquiryQuery: "Digital Marketing & Social Media Management",
  },
  {
    id: "web-development",
    tabTitle: "Web Development",
    icon: Code2,
    headline: "Pembuatan Website Modern, Responsif & Cepat",
    description:
      "Website profesional yang dirancang agar tampil optimal di layar ponsel maupun komputer. Dilengkapi struktur SEO yang baik dan alur navigasi yang memudahkan pengunjung melakukan pemesanan.",
    imageSrc: "/assets/images/banner/website/porto unipic_fast website.png",
    deliverables: [
      "Landing page promosi produk dengan konversi tinggi",
      "Website profil perusahaan (Company Profile)",
      "Toko online e-commerce terintegrasi WhatsApp / pembayaran",
      "Pemeliharaan berkala, backup rutin, dan optimasi kecepatan",
    ],
    inquiryQuery: "Web Development & Landing Page",
  },
];

export function ServicesSection() {
  const [activeTab, setActiveTab] = useState<string>("digital-marketing");

  const currentService =
    servicesList.find((s) => s.id === activeTab) || servicesList[0];

  return (
    <section id="services" className="py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]">
      <div className="container-custom">
        <SectionHeading
          badgeText="Layanan Kami"
          title="Solusi Lengkap untuk Jejak Digital Bisnis Anda"
          subtitle="Unipic Studio menyediakan rangkaian layanan terpadu yang dapat disesuaikan dengan skala dan target pertumbuhan bisnis Anda."
        />

        {/* Tab Buttons (GoSocial Service Tabs Style) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {servicesList.map((service) => {
            const Icon = service.icon;
            const isActive = activeTab === service.id;
            return (
              <button
                key={service.id}
                type="button"
                onClick={() => setActiveTab(service.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-150 min-h-[44px] cursor-pointer focus-visible:ring-2 focus-visible:ring-[#1E40AF] ${
                  isActive
                    ? "bg-[#1E40AF] text-white shadow-sm"
                    : "bg-white text-[#475569] hover:text-[#0F172A] hover:bg-[#F1F5F9] border border-[#E2E8F0]"
                }`}
                aria-pressed={isActive}
              >
                <Icon className="h-4 w-4" />
                <span>{service.tabTitle}</span>
              </button>
            );
          })}
        </div>

        {/* Active Service Presentation Card */}
        <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Description & Deliverables */}
            <div className="lg:col-span-7 space-y-5">
              <span className="inline-block text-xs font-semibold text-[#1E40AF] bg-[#EFF6FF] px-3 py-1 rounded-md">
                Layanan {currentService.tabTitle}
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
                {currentService.headline}
              </h3>

              <p className="text-base text-[#475569] leading-relaxed">
                {currentService.description}
              </p>

              <div className="space-y-3 pt-2">
                <p className="text-xs font-semibold text-[#334155]">
                  Ruang Lingkup & Hasil Kerja:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentService.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-[#334155] bg-[#F8FAFC] p-3 rounded-lg border border-[#E2E8F0]"
                    >
                      <CheckCircle2 className="h-4 w-4 text-[#1E40AF] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <a
                  href={`https://wa.me/628151195066?text=Halo%20UNIPIC%20Studio,%20saya%20tertarik%20dengan%20layanan%20${encodeURIComponent(
                    currentService.inquiryQuery
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button variant="primary" size="md">
                    <span>Konsultasikan Kebutuhan Ini</span>
                  </Button>
                </a>
              </div>
            </div>

            {/* Right Image Showcase */}
            <div className="lg:col-span-5">
              <div className="relative rounded-xl overflow-hidden border border-[#E2E8F0] shadow-md bg-slate-50 aspect-[16/11]">
                <Image
                  src={currentService.imageSrc}
                  alt={currentService.headline}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
