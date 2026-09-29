"use client";

import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import {
  X,
  MessageCircle,
  CheckCircle,
  Search,
  ChevronRight,
  Sparkles,
  ArrowRight,
  ExternalLink,
  Play,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { DigitalMarketingShowcase } from "@/components/portfolio/DigitalMarketingShowcase";
import {
  portfolioData,
  portfolioCategories,
  type PortfolioItem,
} from "@/lib/portfolio-data";

export function PortfolioView() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const showDigitalMarketingShowcase =
    searchParams.get("showcase") === "digital-marketing";

  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const handleOpenShowcase = () => {
    setSelectedItem(null);
    router.push("/portfolio?showcase=digital-marketing", { scroll: false });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToPortfolio = () => {
    router.push("/portfolio", { scroll: false });
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedItem(null);
      }
    };

    if (selectedItem) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedItem]);

  const handleOpenItem = (item: PortfolioItem) => {
    setSelectedItem(item);
  };

  // Filter items based on category and search query
  const filteredItems = useMemo(() => {
    return portfolioData.filter((item) => {
      const matchesCategory =
        activeCategory === "all" || item.category === activeCategory;
      const matchesQuery =
        searchQuery.trim() === "" ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.brandName &&
          item.brandName.toLowerCase().includes(searchQuery.toLowerCase())) ||
        item.deliverables.some((d) =>
          d.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, searchQuery]);

  if (showDigitalMarketingShowcase) {
    return <DigitalMarketingShowcase onBackToPortfolio={handleBackToPortfolio} />;
  }

  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      {/* Top Header & Breadcrumb */}
      <div className="bg-white border-b border-[#E2E8F0] pt-10 pb-12">
        <div className="container-custom">
          {/* Breadcrumb navigation */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs font-medium text-[#64748B] mb-6"
          >
            <Link
              href="/"
              className="hover:text-[#1E40AF] transition-colors focus-visible:ring-2 focus-visible:ring-[#1E40AF] rounded-xs"
            >
              Beranda
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-[#94A3B8]" />
            <span className="text-[#0F172A] font-semibold">Portofolio</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[#1E40AF] text-xs font-bold mb-4">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Koleksi Karya Pilihan</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight font-display">
              Portofolio & Rekam Jejak Brand
            </h1>

            <p className="mt-4 text-base sm:text-lg text-[#475569] leading-relaxed">
              Tinjau hasil kerja nyata UNIPIC Studio: kampanye video digital marketing dan reels untuk brand mitra, serta pengembangan website modern berkinerja tinggi.
            </p>

            {/* Direct Button to Showcase Digital Marketing Sub-view */}
            <div className="mt-6">
              <button
                type="button"
                onClick={handleOpenShowcase}
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-[#1E40AF] hover:bg-[#1D4ED8] text-white shadow-sm text-xs sm:text-sm font-bold transition-all group cursor-pointer"
              >
                <Sparkles className="h-4 w-4" />
                <span>Lihat Showcase Video Digital Marketing</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Controls: Search & Category Filter Pills */}
      <div className="container-custom py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {portfolioCategories.map((cat) => {
              const isActive = activeCategory === cat.key;
              const count =
                cat.key === "all"
                  ? portfolioData.length
                  : portfolioData.filter((i) => i.category === cat.key).length;

              return (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-150 min-h-[44px] cursor-pointer flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-[#1E40AF] ${
                    isActive
                      ? "bg-[#1E40AF] text-white shadow-sm"
                      : "bg-white text-[#475569] hover:text-[#0F172A] hover:bg-[#F1F5F9] border border-[#E2E8F0]"
                  }`}
                  aria-pressed={isActive}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[11px] px-1.5 py-0.5 rounded-full ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-[#F1F5F9] text-[#64748B]"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#94A3B8]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari brand atau proyek..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#CBD5E1] rounded-xl text-xs sm:text-sm text-[#0F172A] placeholder-[#94A3B8] focus:outline-hidden focus:border-[#1E40AF] focus:ring-2 focus:ring-[#1E40AF]/20 transition-all min-h-[44px]"
              aria-label="Cari proyek dalam portofolio"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-[#64748B] hover:text-[#0F172A]"
                aria-label="Hapus kata kunci pencarian"
              >
                Reset
              </button>
            )}
          </div>
        </div>

        {/* Portfolio Grid: 3 columns on desktop */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => {
              return (
                <article
                  key={item.id}
                  className="group rounded-2xl border border-[#E2E8F0] bg-white overflow-hidden shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                >
                  {/* Visual Cover */}
                  <div
                    className="relative aspect-[16/10] overflow-hidden bg-slate-100 cursor-pointer"
                    onClick={() => handleOpenItem(item)}
                  >
                    <Image
                      src={item.imageSrc}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    {/* Hover Callout Overlay */}
                    <div className="absolute inset-0 bg-[#0F172A]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center p-4">
                      <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-[#0F172A] text-xs font-bold shadow-md transform translate-y-1 group-hover:translate-y-0 transition-transform">
                        <span>Lihat Rincian Proyek</span>
                        <ChevronRight className="h-3.5 w-3.5 text-[#1E40AF]" />
                      </span>
                    </div>
                  </div>

                  {/* Card Information */}
                  <div className="p-6 flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold text-[#1E40AF] bg-[#EFF6FF] px-2.5 py-1 rounded-md">
                          {item.categoryLabel}
                        </span>

                        {item.brandName && (
                          <span className="text-xs font-semibold text-[#64748B]">
                            {item.brandName}
                          </span>
                        )}
                      </div>

                      <h2
                        onClick={() => handleOpenItem(item)}
                        className="text-lg font-bold text-[#0F172A] hover:text-[#1E40AF] transition-colors cursor-pointer"
                      >
                        {item.title}
                      </h2>

                      <p className="text-xs sm:text-sm text-[#475569] mt-2.5 line-clamp-3 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Deliverables snippet */}
                      <div className="mt-4 pt-4 border-t border-[#F1F5F9]">
                        <p className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider mb-2">
                          Lingkup Deliverables:
                        </p>
                        <ul className="space-y-1">
                          {item.deliverables.slice(0, 2).map((del, idx) => (
                            <li
                              key={idx}
                              className="text-xs text-[#334155] flex items-start gap-1.5"
                            >
                              <CheckCircle className="h-3.5 w-3.5 text-[#1E40AF] shrink-0 mt-0.5" />
                              <span className="truncate">{del}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-5 mt-4 border-t border-[#F1F5F9] flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => handleOpenItem(item)}
                        className="text-xs font-bold text-[#1E40AF] hover:text-[#1D4ED8] flex items-center gap-1 min-h-[44px] cursor-pointer"
                      >
                        <span>Lihat Rincian Lengkap</span>
                        <ChevronRight className="h-3.5 w-3.5" />
                      </button>
                      {item.category === "marketing" && (
                        <button
                          type="button"
                          onClick={handleOpenShowcase}
                          className="text-xs font-semibold text-[#1E40AF] hover:text-[#1D4ED8] flex items-center gap-1.5 min-h-[44px] cursor-pointer"
                        >
                          <Play className="h-3 w-3 fill-current" />
                          <span>Lihat Video</span>
                        </button>
                      )}
                      {item.liveUrl && (
                        <a
                          href={item.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-semibold text-[#64748B] hover:text-[#0F172A] flex items-center gap-1 min-h-[44px] cursor-pointer"
                        >
                          <span>Kunjungi</span>
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          /* Empty Search / Filter State */
          <div className="rounded-2xl border border-dashed border-[#CBD5E1] bg-white p-12 text-center max-w-lg mx-auto">
            <div className="h-12 w-12 rounded-full bg-[#EFF6FF] text-[#1E40AF] flex items-center justify-center mx-auto mb-4">
              <Search className="h-6 w-6" />
            </div>
            <h3 className="text-base font-bold text-[#0F172A]">
              Tidak Ada Proyek yang Ditemukan
            </h3>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1.5">
              Coba sesuaikan kata kunci pencarian Anda atau pilih kategori lainnya.
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory("all");
                setSearchQuery("");
              }}
              className="mt-5 inline-flex items-center px-4 py-2 rounded-lg bg-[#1E40AF] text-white text-xs font-semibold hover:bg-[#1D4ED8] transition-colors min-h-[44px] cursor-pointer"
            >
              Reset Filter & Pencarian
            </button>
          </div>
        )}

        {/* Bottom Contact Callout */}
        <div className="mt-20 rounded-2xl bg-white border border-[#E2E8F0] p-8 sm:p-12 text-center shadow-xs">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-bold text-[#1E40AF] uppercase tracking-wider bg-[#EFF6FF] px-3 py-1 rounded-full inline-block">
              Mulai Kolaborasi Baru
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
              Punya Rencana Kampanye atau Proyek Kreatif?
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Diskusikan kebutuhan aktivasi KOL, produksi video komersial, pengembangan website, atau strategi branding bersama tim UNIPIC Studio.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://wa.me/628151195066?text=Halo%20UNIPIC%20Studio,%20saya%20tertarik%20untuk%20konsultasi%20proyek%20kreatif%20dan%20digital"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  <span>Konsultasi Proyek via WhatsApp</span>
                </Button>
              </a>
              <Link href="/#contact" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  <span>Isi Form Pertanyaan</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Dialog for Project Detail & Video Player */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
        >
          <div className="relative w-full max-w-3xl lg:max-w-4xl rounded-2xl bg-white p-5 sm:p-7 shadow-2xl border border-[#E2E8F0] my-auto max-h-[92vh] flex flex-col justify-between overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#E2E8F0]">
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="primary">{selectedItem.categoryLabel}</Badge>
                  {selectedItem.brandName && (
                    <span className="text-xs font-semibold text-[#475569] bg-[#F1F5F9] px-2.5 py-0.5 rounded-full">
                      Brand: {selectedItem.brandName}
                    </span>
                  )}
                  {selectedItem.liveUrl && (
                    <a
                      href={selectedItem.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1E40AF] bg-[#EFF6FF] hover:bg-[#DBEAFE] px-2.5 py-0.5 rounded-full transition-colors border border-[#BFDBFE]"
                    >
                      <ExternalLink className="h-3 w-3" />
                      <span>{selectedItem.liveUrl.replace(/^https?:\/\//, "")}</span>
                    </a>
                  )}
                </div>
                <h3
                  id="modal-project-title"
                  className="text-xl sm:text-2xl font-extrabold text-[#0F172A] mt-1"
                >
                  {selectedItem.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={handleCloseModal}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F1F5F9] text-[#475569] hover:text-[#0F172A] hover:bg-[#E2E8F0] transition-colors focus-visible:ring-2 focus-visible:ring-[#1E40AF] cursor-pointer"
                aria-label="Tutup detail proyek"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Body: Clean Presentation (Image, Description, Deliverables & Showcase Button) */}
            <div className="py-4 space-y-5 flex-1">
              {/* Visual Cover */}
              <div className="relative w-full rounded-xl overflow-hidden border border-[#E2E8F0] group bg-white shadow-xs">
                <Image
                  src={selectedItem.imageSrc}
                  alt={selectedItem.title}
                  width={3508}
                  height={2481}
                  className="w-full h-auto block rounded-xl"
                  sizes="(max-width: 1024px) 100vw, 900px"
                  priority
                />
                <a
                  href={selectedItem.imageSrc}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/75 hover:bg-black/90 text-white text-xs font-semibold backdrop-blur-xs border border-white/20 shadow-md"
                  title="Buka gambar resolusi penuh di tab baru"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  <span>Buka Resolusi Penuh</span>
                </a>
              </div>

              {/* Description */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#475569] mb-1">
                  Deskripsi Proyek
                </h4>
                <p className="text-sm text-[#334155] leading-relaxed">
                  {selectedItem.description}
                </p>
              </div>

              {/* Deliverables */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#475569] mb-2">
                  Ruang Lingkup Hasil Kerja:
                </h4>
                <ul className="space-y-1.5 text-xs sm:text-sm text-[#334155]">
                  {selectedItem.deliverables.map((del, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle className="h-4 w-4 text-[#1E40AF] shrink-0 mt-0.5" />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button: Lihat Showcase Digital Marketing */}
              {selectedItem.category === "marketing" && (
                <div className="p-4 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-[#1E40AF] text-white flex items-center justify-center shrink-0 shadow-xs">
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#0F172A]">
                        Lihat Hasil Video di Showcase Digital Marketing
                      </h4>
                      <p className="text-[11px] text-[#475569]">
                        Tinjau video vertikal reels & shorts brand mitra UNIPIC Studio
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleOpenShowcase}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#1E40AF] hover:bg-[#1D4ED8] text-white font-bold text-xs shadow-sm transition-all cursor-pointer shrink-0 min-h-[42px]"
                  >
                    <span>Lihat Showcase Digital Marketing</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              )}
            </div>

            {/* Modal Footer Actions */}
            <div className="pt-4 border-t border-[#E2E8F0] flex flex-col sm:flex-row gap-3">
              {selectedItem.liveUrl && (
                <a
                  href={selectedItem.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#0F172A] hover:bg-[#1E293B] text-white font-bold text-xs sm:text-sm shadow-sm transition-all min-h-[44px]"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Kunjungi Website</span>
                </a>
              )}
              <a
                href={`https://wa.me/628151195066?text=Halo%20UNIPIC%20Studio,%20saya%20tertarik%20konsultasi%20proyek%20serupa%20${encodeURIComponent(
                  selectedItem.brandName || selectedItem.title
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button variant="primary" size="md" className="w-full">
                  <MessageCircle className="h-4 w-4 mr-1.5" />
                  <span>
                    Konsultasi Proyek Serupa {selectedItem.brandName ? `(${selectedItem.brandName})` : ""}
                  </span>
                </Button>
              </a>
              <Button
                variant="outline"
                size="md"
                onClick={handleCloseModal}
              >
                Tutup
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
