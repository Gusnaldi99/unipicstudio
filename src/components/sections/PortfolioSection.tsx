"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { X, MessageCircle, CheckCircle, ArrowRight, ExternalLink, Play } from "lucide-react";
import {
  portfolioData,
  portfolioCategories,
  type PortfolioItem,
} from "@/lib/portfolio-data";

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedModalItem, setSelectedModalItem] = useState<PortfolioItem | null>(null);

  // Close modal on Escape key press and prevent body scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedModalItem(null);
      }
    };

    if (selectedModalItem) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedModalItem]);

  const filteredItems =
    activeFilter === "all"
      ? portfolioData
      : portfolioData.filter((item) => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-white border-b border-[#E2E8F0]">
      <div className="container-custom">
        <SectionHeading
          badgeText="Portofolio Proyek"
          title="Hasil Karya & Kolaborasi Pilihan"
          subtitle="Tinjau beberapa proyek yang telah kami selesaikan bersama berbagai klien dari beragam sektor industri."
        />

        {/* Filter Pills (GoSocial Portfolio Style) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {portfolioCategories.map((cat) => {
            const isActive = activeFilter === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => setActiveFilter(cat.key)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-150 min-h-[44px] cursor-pointer focus-visible:ring-2 focus-visible:ring-[#1E40AF] ${
                  isActive
                    ? "bg-[#1E40AF] text-white shadow-sm"
                    : "bg-[#F8FAFC] text-[#475569] hover:text-[#0F172A] hover:bg-[#F1F5F9] border border-[#E2E8F0]"
                }`}
                aria-pressed={isActive}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group rounded-xl border border-[#E2E8F0] bg-white overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              {/* Image Container with Hover Trigger */}
              <div
                className="relative aspect-[16/10] overflow-hidden bg-slate-100 cursor-pointer"
                onClick={() => setSelectedModalItem(item)}
              >
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-white text-[#0F172A] text-xs font-semibold shadow">
                    Lihat Detail
                  </span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <div className="text-xs mb-2">
                    <span className="font-bold text-[#1E40AF]">
                      {item.categoryLabel}
                    </span>
                  </div>

                  <h3
                    onClick={() => setSelectedModalItem(item)}
                    className="text-base font-bold text-[#0F172A] hover:text-[#1E40AF] transition-colors cursor-pointer"
                  >
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#475569] mt-2 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#F1F5F9] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setSelectedModalItem(item)}
                    className="text-xs font-semibold text-[#1E40AF] hover:text-[#1D4ED8] cursor-pointer"
                  >
                    Rincian Proyek
                  </button>
                  {item.category === "marketing" && (
                    <Link
                      href="/portfolio?showcase=digital-marketing"
                      className="text-xs font-semibold text-[#1E40AF] hover:text-[#1D4ED8] flex items-center gap-1 cursor-pointer"
                    >
                      <Play className="h-3 w-3 fill-current" />
                      <span>Lihat Video</span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Direct Link to Portfolio and Digital Marketing Showcase */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/portfolio?showcase=digital-marketing"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#1E40AF] hover:bg-[#1D4ED8] text-white font-bold text-sm transition-all duration-150 shadow-sm shadow-[#1E40AF]/20 group min-h-[44px] focus-visible:ring-2 focus-visible:ring-[#1E40AF]"
          >
            <span>Lihat Showcase Video Digital Marketing</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-1" />
          </Link>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#EFF6FF] hover:bg-[#DBEAFE] text-[#1E40AF] font-bold text-sm transition-all duration-150 border border-[#BFDBFE] shadow-xs group min-h-[44px] focus-visible:ring-2 focus-visible:ring-[#1E40AF]"
          >
            <span>Semua Portofolio & Studi Kasus</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Modal Dialog */}
        {selectedModalItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150 cursor-pointer"
            role="dialog"
            aria-modal="true"
            aria-label={selectedModalItem.title}
            onClick={() => setSelectedModalItem(null)}
          >
            <div
              className="relative w-full max-w-xl rounded-2xl bg-white p-6 sm:p-8 shadow-2xl border border-[#E2E8F0] max-h-[90vh] overflow-y-auto cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedModalItem(null)}
                className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#F1F5F9] text-[#475569] hover:text-[#0F172A] hover:bg-[#E2E8F0] transition-colors focus-visible:ring-2 focus-visible:ring-[#1E40AF] cursor-pointer"
                aria-label="Tutup detail proyek"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="primary">{selectedModalItem.categoryLabel}</Badge>
                  {selectedModalItem.brandName && (
                    <span className="text-xs font-semibold text-[#475569] bg-[#F1F5F9] px-2.5 py-0.5 rounded-full">
                      Brand: {selectedModalItem.brandName}
                    </span>
                  )}
                  {selectedModalItem.liveUrl && (
                    <a
                      href={selectedModalItem.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#1E40AF] bg-[#EFF6FF] hover:bg-[#DBEAFE] px-2.5 py-0.5 rounded-full transition-colors border border-[#BFDBFE]"
                    >
                      <ExternalLink className="h-3 w-3" />
                      <span>{selectedModalItem.liveUrl.replace(/^https?:\/\//, "")}</span>
                    </a>
                  )}
                </div>

                <h3 className="text-xl font-extrabold text-[#0F172A]">
                  {selectedModalItem.title}
                </h3>

                <div className="relative w-full rounded-xl overflow-hidden border border-[#E2E8F0] my-3 bg-white shadow-xs group">
                  <Image
                    src={selectedModalItem.imageSrc}
                    alt={selectedModalItem.title}
                    width={3508}
                    height={2481}
                    className="w-full h-auto block rounded-xl"
                  />
                  <a
                    href={selectedModalItem.imageSrc}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/75 hover:bg-black/90 text-white text-xs font-semibold backdrop-blur-xs border border-white/20 shadow-md"
                    title="Buka gambar resolusi penuh di tab baru"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    <span>Buka Resolusi Penuh</span>
                  </a>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#475569] mb-1">
                    Deskripsi Pekerjaan
                  </h4>
                  <p className="text-sm text-[#334155] leading-relaxed">
                    {selectedModalItem.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#475569] mb-2">
                    Ruang Lingkup Hasil Kerja:
                  </h4>
                  <ul className="space-y-1.5 text-xs text-[#334155]">
                    {selectedModalItem.deliverables.map((del, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-3.5 w-3.5 text-[#1E40AF]" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>



                {selectedModalItem.category === "marketing" && (
                  <div className="p-3.5 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] flex flex-col sm:flex-row items-center justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-[#0F172A]">
                        Showcase Video Digital Marketing
                      </p>
                      <p className="text-[11px] text-[#475569]">
                        Tinjau video vertikal reels & shorts brand mitra UNIPIC Studio
                      </p>
                    </div>
                    <Link
                      href="/portfolio?showcase=digital-marketing"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-[#1E40AF] hover:bg-[#1D4ED8] text-white text-xs font-bold shadow-xs transition-all shrink-0"
                    >
                      <span>Lihat Showcase Digital Marketing</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                )}

                <div className="pt-4 border-t border-[#E2E8F0] flex flex-col sm:flex-row gap-3">
                  {selectedModalItem.liveUrl && (
                    <a
                      href={selectedModalItem.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#0F172A] hover:bg-[#1E293B] text-white font-bold text-xs shadow-sm transition-all"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      <span>Kunjungi Website</span>
                    </a>
                  )}
                  <a
                    href={`https://wa.me/628151195066?text=Halo%20UNIPIC%20Studio,%20saya%20tertarik%20konsultasi%20proyek%20serupa%20${encodeURIComponent(
                      selectedModalItem.brandName || selectedModalItem.title
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button variant="primary" size="md" className="w-full">
                      <MessageCircle className="h-4 w-4 mr-1.5" />
                      <span>Konsultasi Proyek Serupa</span>
                    </Button>
                  </a>
                  <Button
                    variant="outline"
                    size="md"
                    onClick={() => setSelectedModalItem(null)}
                  >
                    Tutup
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
