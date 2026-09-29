import React from "react";
import Link from "next/link";
import { Compass, Target, LineChart } from "lucide-react";

const solutions = [
  {
    icon: Compass,
    title: "Customized Strategy",
    tagline: "Perencanaan Strategis",
    description:
      "Setiap bisnis memiliki tantangan berbeda. Kami menyusun strategi visual dan pemasaran digital yang dirancang spesifik untuk target pasar dan model bisnis Anda.",
    linkHref: "#services",
  },
  {
    icon: Target,
    title: "Digital Activation",
    tagline: "Eksekusi Kreatif Terpadu",
    description:
      "Dari pembuatan konten visual berkualitas, manajemen media sosial, hingga peluncuran kampanye iklan berbayar yang menarik atensi calon pelanggan.",
    linkHref: "#services",
  },
  {
    icon: LineChart,
    title: "Performance Optimization",
    tagline: "Optimasi Berkelanjutan",
    description:
      "Pemantauan performa berkala dan penyempurnaan alur konversi website agar setiap alokasi budget menghasilkan dampak bisnis yang optimal.",
    linkHref: "#services",
  },
];

export function ValuePillars() {
  return (
    <section id="solutions" className="py-16 md:py-20 bg-[#1E40AF] text-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/15 text-white mb-3">
            Pendekatan Kerja Kami
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-3">
            Solusi Terpadu untuk Akselerasi Bisnis Anda
          </h2>
          <p className="text-sm sm:text-base text-blue-100">
            Kolaborasi terstruktur yang menggabungkan kreativitas visual, kekuatan teknologi web, dan strategi pemasaran terukur.
          </p>
        </div>

        {/* 3 Solution Cards (Matching GoSocial's Our Solution Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {solutions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="rounded-xl bg-white text-[#0F172A] p-6 sm:p-7 shadow-lg flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-[#1E40AF]">
                      {item.tagline}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EFF6FF] text-[#1E40AF]">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#0F172A] mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#475569] leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F1F5F9]">
                  <Link
                    href={item.linkHref}
                    className="text-xs font-bold text-[#1E40AF] hover:text-[#1D4ED8] transition-colors"
                  >
                    Lihat Layanan Terkait
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
