import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

const highlights = [
  "Branding & Identitas Visual Terpadu",
  "Produksi Video TVC & Konten Media Sosial",
  "Website Responsif & Cepat",
];

export function HeroSection() {
  return (
    <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 bg-white overflow-hidden border-b border-[#E2E8F0]">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2">
              <Badge variant="primary" className="px-3 py-1 text-xs">
                Creative Production & Digital Agency
              </Badge>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-[1.2]">
              Mitra Terpercaya dalam{" "}
              <span className="text-[#1E40AF]">Branding, Pemasaran</span> &{" "}
              <span className="text-[#1E40AF]">Aktivasi Digital</span>
            </h1>

            <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
              UNIPIC Studio mendampingi bisnis dan organisasi dalam membangun
              identitas visual, produksi konten berkualitas tinggi, pembuatan
              website modern, dan strategi pemasaran digital yang terarah.
            </p>

            <div className="space-y-2 pt-1">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-sm text-[#334155] font-medium">
                  <CheckCircle className="h-4 w-4 text-[#1E40AF] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href="https://wa.me/628151195066?text=Halo%20UNIPIC%20Studio,%20saya%20ingin%20jadwalkan%20konsultasi%20layanan%20kreatif%20dan%20digital"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  <span>Konsultasi Gratis</span>
                </Button>
              </a>

              <Link href="#portfolio">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  <span>Lihat Portofolio</span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: Hero Image Showcase */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-xl bg-slate-100 aspect-[4/3] sm:aspect-[16/11] group">
              <Image
                src="/assets/images/banner/website/porto unipic_fast website.png"
                alt="Showcase Portofolio UNIPIC Studio: Web Development FAST"
                fill
                priority
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/75 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white pointer-events-none">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-200 bg-blue-900/70 backdrop-blur-xs px-2.5 py-0.5 rounded-md">
                    Proyek Pilihan
                  </span>
                  <p className="text-sm font-semibold mt-1">
                    FAST (Famindo Alfa Spektrum Teknologi)
                  </p>
                </div>
                <span className="text-xs text-slate-200 font-medium hidden sm:inline-block">
                  Web Development
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
