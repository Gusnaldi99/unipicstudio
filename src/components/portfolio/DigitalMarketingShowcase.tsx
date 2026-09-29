"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  Volume2,
  VolumeX,
  Play,
  Pause,
  ChevronDown,
  ChevronUp,
  X,
  MessageCircle,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  ArrowLeft,
  Maximize2,
} from "lucide-react";
import {
  socialMediaClients,
  type SocialClientSection,
  type SocialReelItem,
  extractYoutubeId,
} from "@/lib/social-media-data";

interface DigitalMarketingShowcaseProps {
  onBackToPortfolio?: () => void;
}

export function DigitalMarketingShowcase({
  onBackToPortfolio,
}: DigitalMarketingShowcaseProps) {
  const [selectedClientId, setSelectedClientId] = useState<string>("all");
  const [expandedClients, setExpandedClients] = useState<Record<string, boolean>>({});
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);
  const [mutedStates, setMutedStates] = useState<Record<string, boolean>>({});
  const [activeBannerTab, setActiveBannerTab] = useState<Record<string, string>>({});
  const [lightboxBanner, setLightboxBanner] = useState<{
    src: string;
    alt: string;
    title: string;
    clientName: string;
  } | null>(null);
  const [modalReel, setModalReel] = useState<{
    reel: SocialReelItem;
    client: SocialClientSection;
    index: number;
  } | null>(null);

  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});
  const modalVideoRef = useRef<HTMLVideoElement | null>(null);

  // Toggle client accordion (expand beyond first 3 videos)
  const toggleExpand = (clientId: string) => {
    setExpandedClients((prev) => ({
      ...prev,
      [clientId]: !prev[clientId],
    }));
  };

  // Toggle inline audio mute per video
  const toggleMute = (e: React.MouseEvent, reelId: string) => {
    e.stopPropagation();
    const video = videoRefs.current[reelId];
    if (video) {
      const newMuted = !video.muted;
      video.muted = newMuted;
      setMutedStates((prev) => ({ ...prev, [reelId]: newMuted }));
    }
  };

  // Play / pause inline video
  const togglePlayInline = (reelId: string) => {
    const video = videoRefs.current[reelId];
    if (!video) return;

    if (playingVideoId === reelId && !video.paused) {
      video.pause();
      setPlayingVideoId(null);
    } else {
      // Pause any other playing video
      if (playingVideoId && videoRefs.current[playingVideoId]) {
        videoRefs.current[playingVideoId]?.pause();
      }
      video.play().catch(() => {
        // Autoplay policy fallback
      });
      setPlayingVideoId(reelId);
    }
  };

  // Play YouTube inline
  const playYoutubeInline = (reelId: string) => {
    if (playingVideoId && videoRefs.current[playingVideoId]) {
      videoRefs.current[playingVideoId]?.pause();
    }
    setPlayingVideoId(reelId);
  };

  const openModalReel = (
    client: SocialClientSection,
    reel: SocialReelItem,
    index: number
  ) => {
    // Pause any inline playing video
    if (playingVideoId && videoRefs.current[playingVideoId]) {
      videoRefs.current[playingVideoId]?.pause();
      setPlayingVideoId(null);
    }
    setModalReel({ reel, client, index });
  };

  // Close modal
  const closeModalReel = useCallback(() => {
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
    }
    setModalReel(null);
  }, []);

  // Navigate next / prev in modal
  const handleModalNext = useCallback(() => {
    setModalReel((prev) => {
      if (!prev) return null;
      const { client, index } = prev;
      const nextIndex = (index + 1) % client.reels.length;
      return {
        client,
        reel: client.reels[nextIndex],
        index: nextIndex,
      };
    });
  }, []);

  const handleModalPrev = useCallback(() => {
    setModalReel((prev) => {
      if (!prev) return null;
      const { client, index } = prev;
      const prevIndex = (index - 1 + client.reels.length) % client.reels.length;
      return {
        client,
        reel: client.reels[prevIndex],
        index: prevIndex,
      };
    });
  }, []);

  // Keyboard navigation for modal & lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (lightboxBanner) {
          setLightboxBanner(null);
          return;
        }
        if (modalReel) {
          closeModalReel();
          return;
        }
      }
      if (modalReel) {
        if (e.key === "ArrowRight") handleModalNext();
        if (e.key === "ArrowLeft") handleModalPrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    if (modalReel || lightboxBanner) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [modalReel, lightboxBanner, closeModalReel, handleModalNext, handleModalPrev]);

  // Filter clients
  const visibleClients =
    selectedClientId === "all"
      ? socialMediaClients
      : socialMediaClients.filter((c) => c.id === selectedClientId);

  return (
    <div className="bg-[#F8FAFC] text-[#0F172A] selection:bg-[#1E40AF] selection:text-white">
      {/* Top Header & Navigation Back */}
      <div className="bg-white border-b border-[#E2E8F0] pt-6 pb-8">
        <div className="container-custom max-w-6xl">
          {/* Breadcrumb with Back Action */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-xs font-medium text-[#64748B]"
            >
              <button
                type="button"
                onClick={onBackToPortfolio}
                className="hover:text-[#1E40AF] transition-colors cursor-pointer"
              >
                Portofolio
              </button>
              <span className="text-[#CBD5E1]">/</span>
              <span className="text-[#1E40AF] font-bold">
                Showcase Digital Marketing
              </span>
            </nav>

            {onBackToPortfolio && (
              <button
                type="button"
                onClick={onBackToPortfolio}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#EFF6FF] hover:bg-[#DBEAFE] text-[#1E40AF] border border-[#BFDBFE] text-xs font-bold transition-all min-h-[38px] cursor-pointer shadow-xs"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                <span>Kembali ke Semua Portofolio</span>
              </button>
            )}
          </div>

          {/* Section Title with Master Web Royal Blue Accent */}
          <div className="flex items-center gap-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#0F172A] font-display flex items-baseline gap-2">
              <span>Digital</span>
              <span className="text-[#1E40AF]">Marketing</span>
            </h1>
            <div className="flex-1 h-[2px] bg-gradient-to-r from-[#1E40AF]/40 via-[#E2E8F0] to-transparent" />
          </div>
          <p className="text-xs sm:text-sm text-[#475569] mt-2">
            Eksplorasi hasil produksi video konten vertikal 9:16 untuk kampanye Digital Marketing oleh UNIPIC Studio.
          </p>
        </div>
      </div>

      <div className="container-custom py-10 max-w-6xl space-y-12">
        {/* Hero Feature Card (Layout from reference, styled to match master web) */}
        <section
          aria-label="Statistik dan Pendekatan Produksi Digital Marketing"
          className="relative rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#BFDBFE] bg-white shadow-sm overflow-hidden"
        >
          {/* Subtle Ambient Light */}
          <div
            className="absolute -top-24 -right-24 w-72 h-72 bg-[#EFF6FF] rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left 2x2 Stats Box (Master Slate Dark Accent) */}
            <div className="lg:col-span-5 bg-[#0F172A] border border-slate-800 text-white rounded-2xl p-6 sm:p-7 shadow-md">
              <div className="grid grid-cols-2 gap-y-7 gap-x-6">
                <div>
                  <div className="text-3xl sm:text-4xl font-black text-white tracking-tight font-display">
                    50+
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-bold tracking-wider text-slate-300 uppercase mt-1">
                    Kolaborasi Brand
                  </div>
                </div>

                <div>
                  <div className="text-3xl sm:text-4xl font-black text-white tracking-tight font-display">
                    100+
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-bold tracking-wider text-slate-300 uppercase mt-1">
                    Video Konten
                  </div>
                </div>

                <div>
                  <div className="text-3xl sm:text-4xl font-black text-white tracking-tight font-display">
                    9:16
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-bold tracking-wider text-slate-300 uppercase mt-1">
                    Format Vertical
                  </div>
                </div>

                <div>
                  <div className="text-3xl sm:text-4xl font-black text-blue-400 tracking-tight font-display">
                    100%
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-bold tracking-wider text-slate-300 uppercase mt-1">
                    Produksi UNIPIC Studio
                  </div>
                </div>
              </div>
            </div>

            {/* Right Copywriting Box */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-[11px] font-bold tracking-widest text-[#1E40AF] uppercase">
                <span className="w-5 h-[2px] bg-[#1E40AF] inline-block" />
                <span>Konten Digital Marketing Kreatif</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F172A] leading-tight tracking-tight font-display">
                Dirancang untuk feed.{" "}
                <span className="italic text-[#1E40AF] font-serif font-normal">
                  Dibuat untuk konversi.
                </span>
              </h2>

              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed max-w-2xl font-normal">
                Fokusnya sederhana: bikin audiens berhenti scrolling di detik pertama dan betah nonton sampai selesai. Dari konsep cerita, pengambilan gambar, hingga ritme editing, semua dirancang agar karakter brand tersampaikan kuat dan menghasilkan aksi nyata.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="https://wa.me/628151195066?text=Halo%20UNIPIC%20Studio,%20saya%20tertarik%20konsultasi%20produksi%20konten%20video%20Digital%20Marketing%20untuk%20brand%20saya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1E40AF] hover:bg-[#1D4ED8] text-white font-bold text-xs tracking-wide transition-all shadow-sm min-h-[44px]"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Konsultasi Video Digital Marketing Brand Anda</span>
                </a>
                <span className="text-[11px] text-[#64748B] font-medium">
                  Respons cepat via WhatsApp
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Tabs / Pills (Master Web Style) */}
        <section
          aria-label="Filter Berdasarkan Klien"
          className="pb-2 overflow-x-auto scrollbar-none"
        >
          <div className="flex items-center gap-2 min-w-max">
            <button
              type="button"
              onClick={() => setSelectedClientId("all")}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all min-h-[40px] cursor-pointer ${
                selectedClientId === "all"
                  ? "bg-[#1E40AF] text-white shadow-sm"
                  : "bg-white text-[#475569] hover:text-[#0F172A] hover:bg-[#F1F5F9] border border-[#E2E8F0]"
              }`}
              aria-pressed={selectedClientId === "all"}
            >
              Semua Klien
            </button>

            {socialMediaClients.map((client) => {
              const isActive = selectedClientId === client.id;
              return (
                <button
                  key={client.id}
                  type="button"
                  onClick={() => setSelectedClientId(client.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all min-h-[40px] cursor-pointer ${
                    isActive
                      ? "bg-[#1E40AF] text-white shadow-sm"
                      : "bg-white text-[#475569] hover:text-[#0F172A] hover:bg-[#F1F5F9] border border-[#E2E8F0]"
                  }`}
                  aria-pressed={isActive}
                >
                  {client.name}
                </button>
              );
            })}
          </div>
        </section>

        {/* Client Sections */}
        <div className="space-y-16">
          {visibleClients.map((client) => {
            const isExpanded = !!expandedClients[client.id];
            const displayedReels = isExpanded
              ? client.reels
              : client.reels.slice(0, 3);
            const remainingCount = client.reels.length - 3;

            return (
              <article
                key={client.id}
                id={client.id}
                className="space-y-6 scroll-mt-24"
              >
                {/* Client Header Card */}
                <div className="rounded-2xl p-5 sm:p-6 bg-white border border-[#E2E8F0] shadow-xs flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] tracking-tight font-display">
                      {client.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#475569] mt-1 max-w-2xl leading-relaxed">
                      {client.description}
                    </p>
                  </div>

                  <a
                    href={client.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="self-start sm:self-center inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] hover:bg-[#DBEAFE] text-[#1E40AF] text-xs font-mono font-semibold border border-[#BFDBFE] transition-all group"
                  >
                    <span>{client.instagramHandle}</span>
                    <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>

                {/* Client Portfolio Banner Card */}
                {client.banners && client.banners.length > 0 && (() => {
                  const activeBannerId =
                    activeBannerTab[client.id] || client.banners[0].id;
                  const currentBanner =
                    client.banners.find((b) => b.id === activeBannerId) ||
                    client.banners[0];

                  return (
                    <div className="rounded-2xl sm:rounded-3xl bg-white border border-[#E2E8F0] p-4 sm:p-6 shadow-xs space-y-4">
                      {/* Banner Header Controls */}
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-semibold text-[#475569]">
                            {currentBanner.label}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          {/* Branch Switcher */}
                          {client.banners.length > 1 && (
                            <div
                              role="tablist"
                              aria-label="Pilihan Cabang Banner"
                              className="inline-flex items-center p-1 bg-[#F1F5F9] rounded-xl border border-[#E2E8F0]"
                            >
                              {client.banners.map((b) => {
                                const isSelected = b.id === activeBannerId;
                                return (
                                  <button
                                    key={b.id}
                                    type="button"
                                    role="tab"
                                    aria-selected={isSelected}
                                    onClick={() =>
                                      setActiveBannerTab((prev) => ({
                                        ...prev,
                                        [client.id]: b.id,
                                      }))
                                    }
                                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                                      isSelected
                                        ? "bg-white text-[#1E40AF] shadow-xs"
                                        : "text-[#64748B] hover:text-[#0F172A]"
                                    }`}
                                  >
                                    {b.label}
                                  </button>
                                );
                              })}
                            </div>
                          )}

                        </div>
                      </div>

                      {/* Banner Visual Display Container */}
                      <div
                        className="group relative w-full aspect-[3508/2481] rounded-xl sm:rounded-2xl overflow-hidden bg-slate-950 border border-[#E2E8F0] cursor-pointer shadow-xs hover:shadow-md transition-all duration-300"
                        style={{ aspectRatio: "3508 / 2481" }}
                        onClick={() =>
                          setLightboxBanner({
                            src: currentBanner.imageSrc,
                            alt: currentBanner.alt,
                            title: `${client.name} (${currentBanner.label})`,
                            clientName: client.name,
                          })
                        }
                      >
                        <Image
                          src={currentBanner.imageSrc}
                          alt={currentBanner.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1152px"
                          className="object-contain object-center transition-transform duration-500 group-hover:scale-[1.01]"
                        />

                        {/* Hover Overlay Hint */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200 pointer-events-none flex items-end justify-end p-3 sm:p-4">
                          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/75 backdrop-blur-md text-white text-xs font-medium shadow-md">
                            <Maximize2 className="h-3.5 w-3.5" />
                            <span>Lihat Resolusi Penuh</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })()}

                {/* Reels Vertical Cards Grid (9:16 Aspect Ratio) or Fallback Feed Note */}
                {displayedReels.length > 0 ? (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                      {displayedReels.map((reel, index) => {
                        const isPlaying = playingVideoId === reel.id;
                        const isMuted = mutedStates[reel.id] ?? true;
                        const youtubeId =
                          reel.youtubeId ||
                          extractYoutubeId(reel.youtubeUrl || reel.videoSrc);

                        if (youtubeId) {
                          const thumbnailSrc =
                            reel.thumbnailSrc ||
                            `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;

                          return (
                            <div key={reel.id} className="flex flex-col">
                              {/* 9:16 Portrait Card Container */}
                              <div className="group relative aspect-[9/16] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#0A0F1A] border border-[#E2E8F0] shadow-sm hover:shadow-md hover:border-[#1E40AF]/50 transition-all duration-300 flex flex-col justify-between">
                                {isPlaying ? (
                                  <>
                                    {/* Regular YouTube Embed Player (Autoplay on click, no initial shorts splash) */}
                                    <iframe
                                      src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&playsinline=1&modestbranding=1&controls=1`}
                                      title={reel.caption || reel.tag}
                                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                      allowFullScreen
                                      className="absolute inset-0 w-full h-full border-0"
                                    />

                                    {/* Active Controls Bar */}
                                    <div className="relative z-10 p-3 sm:p-4 flex items-center justify-between pointer-events-none">
                                      <span className="px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md text-[11px] font-mono font-bold text-white border border-white/15 pointer-events-auto">
                                        {reel.orderNumber}
                                      </span>

                                      <div className="flex items-center gap-1.5 pointer-events-auto">
                                        <button
                                          type="button"
                                          onClick={() => openModalReel(client, reel, index)}
                                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/80 hover:bg-black text-white text-xs font-semibold backdrop-blur-md border border-white/20 shadow-md transition-colors cursor-pointer"
                                          title="Buka tampilan layar penuh"
                                        >
                                          <Maximize2 className="h-3.5 w-3.5 text-blue-400" />
                                          <span>Perbesar</span>
                                        </button>
                                        <button
                                          type="button"
                                          onClick={() => setPlayingVideoId(null)}
                                          className="p-1.5 rounded-full bg-black/80 hover:bg-black text-white border border-white/20 transition-colors cursor-pointer"
                                          title="Tutup pemutar video"
                                          aria-label="Tutup pemutar video"
                                        >
                                          <X className="h-4 w-4" />
                                        </button>
                                      </div>
                                    </div>
                                  </>
                                ) : (
                                  <div
                                    className="relative w-full h-full cursor-pointer flex flex-col justify-between"
                                    onClick={() => playYoutubeInline(reel.id)}
                                  >
                                    {/* Video Poster Thumbnail Cover (Clean - Zero Shorts Branding) */}
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                      src={thumbnailSrc}
                                      alt={reel.caption || reel.tag}
                                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                      loading="lazy"
                                      onError={(e) => {
                                        const target = e.currentTarget;
                                        if (!target.src.includes("hqdefault.jpg")) {
                                          target.src = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
                                        }
                                      }}
                                    />

                                    {/* Dark Gradient Overlays for Readability */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 pointer-events-none" />

                                    {/* Top Controls Bar */}
                                    <div className="relative z-10 p-3 sm:p-4 flex items-center justify-between">
                                      <span className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-[11px] font-mono font-bold text-white border border-white/15">
                                        {reel.orderNumber}
                                      </span>

                                      <button
                                        type="button"
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          openModalReel(client, reel, index);
                                        }}
                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 hover:bg-black/90 text-white text-xs font-semibold backdrop-blur-md border border-white/20 shadow-md transition-colors cursor-pointer"
                                        title="Buka tampilan layar penuh"
                                      >
                                        <Maximize2 className="h-3.5 w-3.5 text-blue-400" />
                                        <span>Perbesar</span>
                                      </button>
                                    </div>

                                    {/* Center Transparent Play Button */}
                                    <div className="relative z-10 px-4 text-center my-auto">
                                      <div className="inline-flex w-14 h-14 rounded-full bg-black/40 hover:bg-black/60 group-hover:bg-black/60 backdrop-blur-md border border-white/30 items-center justify-center text-white group-hover:scale-110 group-hover:border-white/50 transition-all duration-200 shadow-xl">
                                        <Play className="h-6 w-6 ml-0.5 fill-current" />
                                      </div>
                                    </div>

                                  </div>
                                )}
                              </div>

                              {/* Clean Project Meta Below Card */}
                              <div className="mt-3 text-center px-1">
                                <p className="text-xs sm:text-sm font-bold text-[#0F172A] line-clamp-1">
                                  {reel.caption || client.name}
                                </p>
                                <p className="text-[10px] font-semibold text-[#64748B] tracking-wider uppercase mt-0.5">
                                  UNIPIC Studio
                                </p>
                              </div>
                            </div>
                          );
                        }

                        return (
                          <div key={reel.id} className="flex flex-col">
                            {/* 9:16 Portrait Card Container */}
                            <div
                              className="group relative aspect-[9/16] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#0A0F1A] border border-[#E2E8F0] shadow-sm hover:shadow-md hover:border-[#1E40AF]/50 transition-all duration-300 flex flex-col justify-between cursor-pointer"
                              onClick={() => openModalReel(client, reel, index)}
                            >
                              {/* Background Video */}
                              <video
                                ref={(el) => {
                                  videoRefs.current[reel.id] = el;
                                }}
                                src={reel.videoSrc}
                                muted={isMuted}
                                playsInline
                                loop
                                preload="metadata"
                                className="absolute inset-0 w-full h-full object-cover"
                              />

                              {/* Video Dark Overlays for Readability */}
                              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 pointer-events-none" />

                              {/* Top Controls Bar */}
                              <div className="relative z-10 p-4 flex items-center justify-between">
                                {/* Order Number Badge */}
                                <span className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-[11px] font-mono font-bold text-white border border-white/15">
                                  {reel.orderNumber}
                                </span>

                                {/* Sound Toggle Button */}
                                <button
                                  type="button"
                                  onClick={(e) => toggleMute(e, reel.id)}
                                  className="p-2 rounded-full bg-black/60 backdrop-blur-md text-white/90 hover:text-white border border-white/15 transition-colors focus-visible:ring-2 focus-visible:ring-[#1E40AF]"
                                  aria-label={isMuted ? "Bunyikan audio video" : "Bisukan audio video"}
                                >
                                  {isMuted ? (
                                    <VolumeX className="h-3.5 w-3.5" />
                                  ) : (
                                    <Volume2 className="h-3.5 w-3.5 text-blue-400" />
                                  )}
                                </button>
                              </div>

                              {/* Center Hook Overlay & Play Trigger */}
                              <div className="relative z-10 px-4 text-center my-auto">
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    togglePlayInline(reel.id);
                                  }}
                                  className="inline-flex w-12 h-12 rounded-full bg-black/40 hover:bg-black/60 group-hover:bg-black/60 backdrop-blur-md border border-white/30 items-center justify-center text-white group-hover:scale-110 group-hover:border-white/50 transition-all duration-200 shadow-lg"
                                  aria-label={isPlaying ? "Jeda video inline" : "Putar video inline"}
                                >
                                  {isPlaying ? (
                                    <Pause className="h-5 w-5" />
                                  ) : (
                                    <Play className="h-5 w-5 ml-0.5" />
                                  )}
                                </button>
                              </div>

                            </div>

                            {/* Clean Project Meta Below Card */}
                            <div className="mt-3 text-center px-1">
                              <p className="text-xs sm:text-sm font-bold text-[#0F172A] line-clamp-1">
                                {reel.caption || client.name}
                              </p>
                              <p className="text-[10px] font-semibold text-[#64748B] tracking-wider uppercase mt-0.5">
                                UNIPIC Studio
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Expand / Collapse Button if client has more than 3 reels */}
                    {remainingCount > 0 && (
                      <div className="pt-2 text-center">
                        <button
                          type="button"
                          onClick={() => toggleExpand(client.id)}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-[#EFF6FF] text-[#1E40AF] border border-[#BFDBFE] text-xs font-bold transition-all duration-150 min-h-[44px] cursor-pointer shadow-xs focus-visible:ring-2 focus-visible:ring-[#1E40AF]"
                        >
                          <span>
                            {isExpanded
                              ? "Tampilkan Lebih Sedikit"
                              : `Lihat Selengkapnya (${client.reels.length} Video)`}
                          </span>
                          {isExpanded ? (
                            <ChevronUp className="h-3.5 w-3.5 text-[#1E40AF]" />
                          ) : (
                            <ChevronDown className="h-3.5 w-3.5 text-[#1E40AF]" />
                          )}
                        </button>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="rounded-2xl p-4 sm:p-5 bg-white border border-[#E2E8F0] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-[#64748B]">
                    <div className="flex items-center gap-2.5">
                      <Sparkles className="h-4 w-4 text-[#1E40AF] shrink-0" />
                      <span>Dokumentasi visual feed dan materi kampanye terangkum lengkap pada banner portofolio resmi di atas.</span>
                    </div>
                    <a
                      href={client.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="self-start sm:self-center inline-flex items-center gap-1 font-bold text-[#1E40AF] hover:underline"
                    >
                      <span>Kunjungi Akun Instagram</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                )}

                {/* Center Badge Divider */}
                <div className="pt-4 flex items-center justify-center">
                  <span className="px-3.5 py-1 rounded-full text-[10px] font-mono tracking-widest text-[#64748B] bg-white border border-[#E2E8F0]">
                    {client.badgeLabel}
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Conversion Section */}
        <section
          aria-label="Konsultasi Konten"
          className="mt-20 p-8 sm:p-12 rounded-3xl bg-white border border-[#E2E8F0] text-center space-y-6 shadow-sm"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] text-[#1E40AF] border border-[#BFDBFE] text-xs font-bold">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Mulai Kampanye Video Digital Marketing Brand Anda</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight max-w-2xl mx-auto font-display">
            Tertarik Menghadirkan Konten Berkualitas Seperti Ini untuk Brand Anda?
          </h2>

          <p className="text-xs sm:text-sm text-[#475569] max-w-xl mx-auto leading-relaxed">
            Tim UNIPIC Studio siap mengurus seluruh proses produksi, dari penyusunan hook, naskah narasi, syuting profesional, hingga video siap posting di feed media sosial brand.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://wa.me/628151195066?text=Halo%20UNIPIC%20Studio,%20saya%20tertarik%20bekerjasama%20untuk%20produksi%20konten%20Digital%20Marketing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#1E40AF] hover:bg-[#1D4ED8] text-white font-bold text-sm transition-all shadow-sm w-full sm:w-auto min-h-[44px]"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Diskusi Projek via WhatsApp</span>
            </a>

            {onBackToPortfolio && (
              <button
                type="button"
                onClick={onBackToPortfolio}
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white hover:bg-[#F8FAFC] text-[#334155] border border-[#E2E8F0] font-bold text-sm transition-all w-full sm:w-auto min-h-[44px] cursor-pointer"
              >
                <span>Kembali ke Semua Portofolio</span>
              </button>
            )}
          </div>
        </section>
      </div>

      {/* Full Modal Reels Viewer (Click to view with full audio and WhatsApp action) */}
      {modalReel && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-xs animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-label={`Memutar video ${modalReel.client.name} - ${modalReel.reel.tag}`}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={closeModalReel}
            className="absolute top-4 right-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/90 border border-white/20 transition-colors focus-visible:ring-2 focus-visible:ring-[#1E40AF] cursor-pointer"
            aria-label="Tutup pemutar video"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Prev Navigation Button */}
          <button
            type="button"
            onClick={handleModalPrev}
            className="hidden md:flex absolute left-6 z-50 h-12 w-12 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/90 border border-white/20 transition-colors focus-visible:ring-2 focus-visible:ring-[#1E40AF] cursor-pointer"
            aria-label="Video sebelumnya"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Next Navigation Button */}
          <button
            type="button"
            onClick={handleModalNext}
            className="hidden md:flex absolute right-6 z-50 h-12 w-12 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/90 border border-white/20 transition-colors focus-visible:ring-2 focus-visible:ring-[#1E40AF] cursor-pointer"
            aria-label="Video berikutnya"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Modal Content Container */}
          <div className="relative w-full max-w-sm sm:max-w-md max-h-[92vh] flex flex-col items-center">
            {/* 9:16 Video Container */}
            <div className="relative w-full aspect-[9/16] rounded-3xl overflow-hidden bg-black border border-white/20 shadow-2xl">
              {(() => {
                const modalYoutubeId =
                  modalReel.reel.youtubeId ||
                  extractYoutubeId(
                    modalReel.reel.youtubeUrl || modalReel.reel.videoSrc
                  );

                if (modalYoutubeId) {
                  return (
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${modalYoutubeId}?autoplay=1&rel=0&playsinline=1&modestbranding=1&controls=1`}
                      title={modalReel.reel.caption || modalReel.client.name}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full border-0"
                    />
                  );
                }

                return (
                  <video
                    ref={modalVideoRef}
                    src={modalReel.reel.videoSrc}
                    controls
                    autoPlay
                    playsInline
                    className="w-full h-full object-cover"
                  />
                );
              })()}

              {/* Floating Client Badge on Video */}
              <div className="absolute top-4 left-4 right-14 pointer-events-none z-10 flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-bold text-white border border-white/20">
                  {modalReel.client.name}
                </span>
                <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-mono text-slate-300 border border-white/10">
                  {modalReel.reel.orderNumber} / {modalReel.client.reels.length}
                </span>
              </div>
            </div>

            {/* Bottom Meta & WhatsApp CTA Bar */}
            <div className="w-full mt-3 p-3.5 rounded-2xl bg-white border border-[#E2E8F0] text-left flex items-center justify-between gap-3 shadow-lg">
              <div className="min-w-0">
                <p className="text-xs font-bold text-[#0F172A] truncate">
                  {modalReel.client.name}
                </p>
                <p className="text-[11px] text-[#64748B] truncate">
                  {modalReel.reel.caption || modalReel.client.category}
                </p>
              </div>

              <a
                href={`https://wa.me/628151195066?text=Halo%20UNIPIC%20Studio,%20saya%20tertarik%20produksi%20video%20Digital%20Marketing%20seperti%20${encodeURIComponent(
                  `${modalReel.client.name} - ${modalReel.reel.tag}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#1E40AF] hover:bg-[#1D4ED8] text-white text-xs font-bold transition-all shadow-sm"
              >
                <MessageCircle className="h-3.5 w-3.5" />
                <span>Pesan Serupa</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Banner Lightbox Modal (Full Resolution Viewer) */}
      {lightboxBanner && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-label={lightboxBanner.title}
          onClick={() => setLightboxBanner(null)}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={() => setLightboxBanner(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus-visible:ring-2 focus-visible:ring-[#1E40AF] cursor-pointer"
            aria-label="Tutup tampilan banner"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Modal Box */}
          <div
            className="relative w-full max-w-5xl max-h-[92vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Container with Natural 3508/2481 Aspect Ratio */}
            <div className="relative w-full aspect-[3508/2481] max-h-[78vh] rounded-2xl sm:rounded-3xl overflow-hidden bg-black border border-white/20 shadow-2xl">
              <Image
                src={lightboxBanner.src}
                alt={lightboxBanner.alt}
                fill
                sizes="(max-width: 1200px) 100vw, 1280px"
                className="object-contain"
                priority
              />
            </div>

            {/* Bottom Meta & WhatsApp CTA Bar */}
            <div className="w-full mt-3 p-3.5 sm:p-4 rounded-2xl bg-white border border-[#E2E8F0] text-left flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 shadow-xl">
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-md bg-[#EFF6FF] text-[#1E40AF] font-bold text-[10px] uppercase border border-[#BFDBFE]">
                    Banner Resmi
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-[#0F172A] truncate">
                    {lightboxBanner.title}
                  </p>
                </div>
                <p className="text-[11px] text-[#64748B] mt-0.5">
                  Desain portofolio kampanye digital marketing berskala HD (3508 &times; 2481).
                </p>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={`https://wa.me/628151195066?text=Halo%20UNIPIC%20Studio,%20saya%20tertarik%20pembuatan%20desain%20dan%20konten%20banner%20Digital%20Marketing%20seperti%20${encodeURIComponent(
                    lightboxBanner.title
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#1E40AF] hover:bg-[#1D4ED8] text-white text-xs font-bold transition-all shadow-sm shrink-0"
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                  <span>Konsultasi Banner Ini</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
