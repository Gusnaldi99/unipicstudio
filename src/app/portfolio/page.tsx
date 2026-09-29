import type { Metadata } from "next";
import { Suspense } from "react";
import { PortfolioView } from "./PortfolioView";

export const metadata: Metadata = {
  title: "Portofolio & Studi Kasus Proyek",
  description:
    "Tinjau kumpulan portofolio dan studi kasus proyek nyata dari UNIPIC Studio, meliputi Digital Marketing, Kampanye Media Sosial, dan Web Development.",
  openGraph: {
    title: "Portofolio & Studi Kasus Proyek | UNIPIC Studio",
    description:
      "Tinjau portofolio pilihan UNIPIC Studio: Digital Marketing, Konten Media Sosial Reels, dan Website Development responsif.",
    url: "https://unipicstudio.com/portfolio",
  },
  alternates: {
    canonical: "https://unipicstudio.com/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <Suspense
      fallback={
        <div className="bg-[#F8FAFC] min-h-screen py-16">
          <div className="container-custom">
            <div className="h-8 w-48 bg-slate-200 animate-pulse rounded mb-4" />
            <div className="h-12 w-96 bg-slate-200 animate-pulse rounded mb-8" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <div key={n} className="h-72 bg-slate-200 animate-pulse rounded-xl" />
              ))}
            </div>
          </div>
        </div>
      }
    >
      <PortfolioView />
    </Suspense>
  );
}
