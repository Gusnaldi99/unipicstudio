"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Check, X, Minus, ShieldCheck } from "lucide-react";
import clsx from "clsx";

interface ComparisonRow {
  parameter: string;
  unipic: string;
  inhouse: string;
  inhouseStatus: "positive" | "negative" | "neutral";
  freelance: string;
  freelanceStatus: "positive" | "negative" | "neutral";
}

const comparisonData: ComparisonRow[] = [
  {
    parameter: "Biaya & Komitmen Anggaran",
    unipic: "Biaya transparan per proyek atau retainer tanpa beban tunjangan & hardware",
    inhouse: "Beban tinggi: Gaji bulanan tetap, tunjangan BPJS, laptop, dan lisensi",
    inhouseStatus: "negative",
    freelance: "Tampak murah di awal, namun rawan bengkak akibat revisi berulang",
    freelanceStatus: "neutral",
  },
  {
    parameter: "Kelengkapan Keahlian Tim",
    unipic: "Tim lengkap: Desainer Grafis, Web Developer, Video Editor, & Media Strategist",
    inhouse: "Umumnya hanya 1 sampai 2 orang dengan cakupan keahlian yang terbatas",
    inhouseStatus: "neutral",
    freelance: "Hanya satu keahlian individu (hanya desain atau hanya koding)",
    freelanceStatus: "negative",
  },
  {
    parameter: "Kepastian Timeline & SLA",
    unipic: "Dipayungi kontrak resmi dengan timeline pengerjaan dan garansi revisi",
    inhouse: "Sering terhambat karena tim harus menangani pekerjaan operasional lain",
    inhouseStatus: "neutral",
    freelance: "Risiko tinggi keterlambatan atau sulit dihubungi di tengah proyek",
    freelanceStatus: "negative",
  },
  {
    parameter: "Waktu Mulai Eksekusi",
    unipic: "Siap kickoff dalam 2 sampai 4 hari kerja setelah brief disepakati",
    inhouse: "Membutuhkan proses rekrutmen dan pelatihan selama 1 sampai 3 bulan",
    inhouseStatus: "negative",
    freelance: "Cepat di awal, namun butuh waktu lama untuk menyelaraskan ekspektasi",
    freelanceStatus: "neutral",
  },
  {
    parameter: "Kualitas & Standar Teknologi",
    unipic: "Peralatan kamera profesional 4K dan teknologi website modern",
    inhouse: "Sering terkendala keterbatasan anggaran upgrade tools perusahaan",
    inhouseStatus: "negative",
    freelance: "Kualitas bergantung pada selera pribadi tanpa quality control berlapis",
    freelanceStatus: "negative",
  },
];

export function WhyChooseUs() {
  const [mobileTab, setMobileTab] = useState<"all" | "inhouse" | "freelance">("all");

  return (
    <section id="comparison" className="py-20 bg-white border-b border-[#E2E8F0]">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#EFF6FF] text-[#1E40AF]">
              Mengapa Memilih Kami?
            </span>

            <h2 className="text-3xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
              <span className="text-[#1E40AF]">UNIPIC Studio.</span> Lebih dari Sekadar Agensi Kreatif
            </h2>

            <p className="text-base text-[#475569] leading-relaxed">
              Kami percaya bahwa keberhasilan jangka panjang tercipta dari komunikasi transparan, komitmen hasil, dan layanan menyeluruh sebagai mitra bisnis Anda.
            </p>

            {/* Client Showcase Banner */}
            <div className="relative rounded-xl overflow-hidden border border-[#E2E8F0] shadow-md aspect-[16/10] group">
              <Image
                src="/assets/images/banner/digital-marketing/porto unipic_jetfitness karawaci.png"
                alt="Produksi Digital Marketing UNIPIC Studio: Jet Fitness Karawaci"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/75 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 text-white pointer-events-none">
                <p className="text-xs font-bold uppercase tracking-wider text-blue-200">
                  Produksi Konten Nyata
                </p>
                <p className="text-sm font-semibold">
                  Jet Fitness Karawaci (Digital Marketing & Reels)
                </p>
              </div>
            </div>

            <p className="text-xs text-[#64748B] italic">
              Diskusikan kebutuhan proyek Anda bersama kami untuk mendapatkan solusi yang paling efisien dan berdampak langsung.
            </p>
          </div>

          {/* Right Column: Comparison Table */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-[#E2E8F0] shadow-sm bg-white overflow-hidden">
              {/* Mobile View Switcher (Below sm breakpoint) */}
              <div className="p-3 bg-[#F8FAFC] border-b border-[#E2E8F0] sm:hidden">
                <div className="text-[11px] font-semibold text-[#475569] uppercase tracking-wider mb-2">
                  Bandingkan UNIPIC dengan:
                </div>
                <div className="grid grid-cols-3 gap-1.5 p-1 bg-[#E2E8F0]/70 rounded-lg text-xs" role="tablist">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={mobileTab === "all"}
                    onClick={() => setMobileTab("all")}
                    className={clsx(
                      "py-2 px-1 rounded-md font-medium transition-all text-center min-h-[44px] flex items-center justify-center text-xs",
                      mobileTab === "all"
                        ? "bg-white text-[#0F172A] shadow-xs font-semibold"
                        : "text-[#475569] hover:text-[#0F172A]"
                    )}
                  >
                    Semua Kolom
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={mobileTab === "inhouse"}
                    onClick={() => setMobileTab("inhouse")}
                    className={clsx(
                      "py-2 px-1 rounded-md font-medium transition-all text-center min-h-[44px] flex items-center justify-center text-xs",
                      mobileTab === "inhouse"
                        ? "bg-white text-[#0F172A] shadow-xs font-semibold"
                        : "text-[#475569] hover:text-[#0F172A]"
                    )}
                  >
                    vs In-House
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={mobileTab === "freelance"}
                    onClick={() => setMobileTab("freelance")}
                    className={clsx(
                      "py-2 px-1 rounded-md font-medium transition-all text-center min-h-[44px] flex items-center justify-center text-xs",
                      mobileTab === "freelance"
                        ? "bg-white text-[#0F172A] shadow-xs font-semibold"
                        : "text-[#475569] hover:text-[#0F172A]"
                    )}
                  >
                    vs Freelancer
                  </button>
                </div>
                {mobileTab === "all" && (
                  <p className="mt-2 text-[11px] text-[#64748B] italic text-center">
                    Geser tabel ke samping untuk melihat seluruh komparasi &rarr;
                  </p>
                )}
              </div>

              {/* Table Container */}
              <div className="overflow-x-auto">
                <table
                  className={clsx(
                    "w-full text-left border-collapse",
                    mobileTab === "all" ? "min-w-[620px] sm:min-w-0" : "w-full"
                  )}
                >
                  <thead>
                    <tr className="border-b border-[#E2E8F0] bg-[#F8FAFC]">
                      {/* Parameter Column Header */}
                      <th
                        scope="col"
                        className="p-4 text-xs font-bold text-[#475569] uppercase tracking-wider w-1/3 sm:w-[27%]"
                      >
                        <span className="block text-[#0F172A]">Parameter Evaluasi</span>
                        <span className="block text-[11px] font-normal text-[#64748B] lowercase tracking-normal mt-0.5">
                          aspek kebutuhan bisnis
                        </span>
                      </th>

                      {/* UNIPIC Column Header (Elevated) */}
                      <th
                        scope="col"
                        className="p-4 text-xs font-bold bg-[#EFF6FF] border-x border-[#DBEAFE] w-1/3 sm:w-[35%]"
                      >
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#1E40AF] bg-[#DBEAFE]/80 px-2 py-0.5 rounded-full uppercase tracking-wider mb-1">
                          Solusi Ideal
                        </span>
                        <span className="block text-sm font-extrabold text-[#1E40AF] tracking-tight">
                          UNIPIC Studio
                        </span>
                        <span className="block text-[11px] font-medium text-blue-700/80 lowercase tracking-normal mt-0.5">
                          mitra agensi terpadu
                        </span>
                      </th>

                      {/* In-House Column Header */}
                      <th
                        scope="col"
                        className={clsx(
                          "p-4 text-xs font-bold text-[#64748B] uppercase tracking-wider sm:w-[19%]",
                          mobileTab === "freelance"
                            ? "hidden sm:table-cell"
                            : "table-cell"
                        )}
                      >
                        <span className="block text-[#475569]">Tim In-House</span>
                        <span className="block text-[11px] font-normal text-[#64748B] lowercase tracking-normal mt-0.5">
                          staf internal tetap
                        </span>
                      </th>

                      {/* Freelance Column Header */}
                      <th
                        scope="col"
                        className={clsx(
                          "p-4 text-xs font-bold text-[#64748B] uppercase tracking-wider sm:w-[19%]",
                          mobileTab === "inhouse"
                            ? "hidden sm:table-cell"
                            : "table-cell"
                        )}
                      >
                        <span className="block text-[#475569]">Freelancer</span>
                        <span className="block text-[11px] font-normal text-[#64748B] lowercase tracking-normal mt-0.5">
                          pekerja lepas mandiri
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E2E8F0] text-xs sm:text-sm">
                    {comparisonData.map((row, idx) => (
                      <tr
                        key={idx}
                        className="hover:bg-[#F8FAFC]/70 transition-colors group"
                      >
                        {/* Parameter Title */}
                        <td className="p-4 align-top font-bold text-[#0F172A] leading-snug">
                          {row.parameter}
                        </td>

                        {/* UNIPIC Column (Highlighted) */}
                        <td className="p-4 align-top bg-[#EFF6FF]/50 border-x border-[#DBEAFE] text-[#0F172A] font-medium group-hover:bg-[#EFF6FF]/80 transition-colors">
                          <div className="flex items-start gap-2.5">
                            <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1E40AF] text-white shadow-xs">
                              <Check className="h-3 w-3 stroke-[2.5]" />
                            </div>
                            <span className="leading-relaxed text-xs sm:text-sm">
                              {row.unipic}
                            </span>
                          </div>
                        </td>

                        {/* In-House Column */}
                        <td
                          className={clsx(
                            "p-4 align-top text-[#475569]",
                            mobileTab === "freelance"
                              ? "hidden sm:table-cell"
                              : "table-cell"
                          )}
                        >
                          <div className="flex items-start gap-2.5">
                            <div
                              className={clsx(
                                "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border",
                                row.inhouseStatus === "negative"
                                  ? "bg-rose-50 border-rose-200 text-rose-600"
                                  : "bg-amber-50 border-amber-200 text-amber-700"
                              )}
                            >
                              {row.inhouseStatus === "negative" ? (
                                <X className="h-3 w-3 stroke-[2.5]" />
                              ) : (
                                <Minus className="h-3 w-3 stroke-[2.5]" />
                              )}
                            </div>
                            <span className="leading-relaxed text-xs">
                              {row.inhouse}
                            </span>
                          </div>
                        </td>

                        {/* Freelance Column */}
                        <td
                          className={clsx(
                            "p-4 align-top text-[#475569]",
                            mobileTab === "inhouse"
                              ? "hidden sm:table-cell"
                              : "table-cell"
                          )}
                        >
                          <div className="flex items-start gap-2.5">
                            <div
                              className={clsx(
                                "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border",
                                row.freelanceStatus === "negative"
                                  ? "bg-rose-50 border-rose-200 text-rose-600"
                                  : "bg-amber-50 border-amber-200 text-amber-700"
                              )}
                            >
                              {row.freelanceStatus === "negative" ? (
                                <X className="h-3 w-3 stroke-[2.5]" />
                              ) : (
                                <Minus className="h-3 w-3 stroke-[2.5]" />
                              )}
                            </div>
                            <span className="leading-relaxed text-xs">
                              {row.freelance}
                            </span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Table Footer Callout */}
              <div className="border-t border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3.5 sm:px-6 sm:py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#475569]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-[#1E40AF] shrink-0" />
                  <span className="font-medium text-[#0F172A]">
                    Setiap kerja sama dilindungi kontrak resmi dengan jaminan kepastian SLA dan revisi terukur.
                  </span>
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 font-semibold text-[#1E40AF] hover:text-[#1D4ED8] transition-colors shrink-0 hover:underline"
                >
                  Konsultasikan Kebutuhan Proyek &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

