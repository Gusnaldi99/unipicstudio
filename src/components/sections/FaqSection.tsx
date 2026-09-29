"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ChevronDown, HelpCircle } from "lucide-react";

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqList: FaqItem[] = [
  {
    question: "Berapa lama durasi pengerjaan proyek di UNIPIC Studio?",
    answer:
      "Waktu pengerjaan bergantung pada jenis layanan. Untuk pembuatan logo dan identitas merek biasanya memakan waktu 2–3 minggu. Pembuatan website atau landing page rata-rata selesai dalam 2–4 minggu. Sementara produksi video iklan komersial membutuhkan 3–5 minggu dari konsep hingga editing final.",
  },
  {
    question: "Bagaimana proses dan alur kerja sama proyek?",
    answer:
      "Proses kerja terbagi menjadi 4 tahap: (1) Diskusi kebutuhan dan brief proyek, (2) Pengajuan konsep kreatif dan moodboard, (3) Proses produksi atau pengembangan, dan (4) Tinjauan bersama serta revisi sebelum serah terima final.",
  },
  {
    question: "Berapa kali revisi yang diberikan untuk setiap proyek?",
    answer:
      "Kami menyediakan 2–3 kali putaran revisi terstruktur pada setiap tahapan kerja untuk memastikan hasil akhir sesuai dengan kebutuhan dan standar yang telah disepakati bersama.",
  },
  {
    question: "Bagaimana sistem pembayaran dan kontrak kerja?",
    answer:
      "Seluruh proyek dipayungi surat perjanjian kerja (SPK) resmi. Sistem pembayaran umumnya dibagi menjadi uang muka (DP) sebesar 50% saat proyek dimulai dan pelunasan 50% setelah proyek selesai dan disetujui sebelum serah terima berkas final.",
  },
  {
    question: "Apakah master file desain dan kode website akan diserahkan?",
    answer:
      "Ya, setelah pelunasan selesai, semua berkas master (file desain format vektor/AI/PNG, kode sumber website, dan master video resolusi tinggi) akan diserahkan sepenuhnya dan menjadi hak milik klien.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-white border-b border-[#E2E8F0]">
      <div className="container-custom max-w-3xl">
        <SectionHeading
          badgeText="FAQ"
          title="Pertanyaan yang Sering Diajukan"
          subtitle="Jawaban atas beberapa pertanyaan umum seputar proses kerja sama dan layanan di UNIPIC Studio."
        />

        <div className="space-y-3">
          {faqList.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 text-left text-[#0F172A] hover:text-[#1E40AF] transition-colors focus-visible:ring-2 focus-visible:ring-[#1E40AF] min-h-[44px]"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span className="font-semibold text-sm sm:text-base pr-4 flex items-center gap-2.5">
                    <HelpCircle className="h-4 w-4 text-[#1E40AF] shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-[#64748B] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#1E40AF]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${idx}`}
                    className="px-5 pb-5 pt-1 text-sm text-[#475569] leading-relaxed border-t border-[#E2E8F0] bg-white"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
