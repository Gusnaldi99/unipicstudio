"use client";

import React from "react";
import Image from "next/image";

interface ClientLogo {
  name: string;
  src: string;
}

const rowOneClients: ClientLogo[] = [
  { name: "Pertamina", src: "/assets/images/clients/logo-pertamina.webp" },
  { name: "Bank Central Asia (BCA)", src: "/assets/images/clients/logo-bca.webp" },
  { name: "BEKRAF", src: "/assets/images/clients/logo-bekraf.webp" },
  { name: "GoPayLater", src: "/assets/images/clients/logo-gopaylater.webp" },
  { name: "Kementerian Perdagangan RI", src: "/assets/images/clients/logo-kementrian-perdagangan.webp" },
  { name: "Lazada Indonesia", src: "/assets/images/clients/logo-lazada.webp" },
  { name: "Ekles Clinic", src: "/assets/images/clients/logo-ekles.webp" },
  { name: "Hero Supermarket", src: "/assets/images/clients/logo-hero.webp" },
  { name: "ASEAN Secretariat", src: "/assets/images/clients/logo-asean.webp" },
  { name: "Jakarta Fashion Week (JFW)", src: "/assets/images/clients/logo-jfw.webp" },
  { name: "Fin Logistik", src: "/assets/images/clients/logo-finlogistik.webp" },
  { name: "Inter Design", src: "/assets/images/clients/logo-interdesign.webp" },
  { name: "Defoma", src: "/assets/images/clients/logo-defoma.webp" },
  { name: "Kawan Gym", src: "/assets/images/clients/logo-kawangym.webp" },
  { name: "Scoliosis Care", src: "/assets/images/clients/logo-scoliosiscare.webp" },
  { name: "Zanru", src: "/assets/images/clients/logo-zanru.webp" },
];

const rowTwoClients: ClientLogo[] = [
  { name: "Kementerian Pendidikan dan Kebudayaan RI", src: "/assets/images/clients/logo-kemendikbut.webp" },
  { name: "Kementerian Kelautan dan Perikanan RI", src: "/assets/images/clients/logo-kementrian-kelautan-perikanan.webp" },
  { name: "Kementerian Perindustrian RI", src: "/assets/images/clients/logo-kementrian-perindustrian.webp" },
  { name: "JET Express", src: "/assets/images/clients/logo-jet.webp" },
  { name: "IFFINA", src: "/assets/images/clients/logo-iffina.webp" },
  { name: "IFC", src: "/assets/images/clients/logo-ifc.webp" },
  { name: "Toraja Melo", src: "/assets/images/clients/logo-torajamelo.webp" },
  { name: "Jakarta Bucketlist", src: "/assets/images/clients/logo-jakartabucketlist.webp" },
  { name: "Enchanting", src: "/assets/images/clients/logo-enchanting.webp" },
  { name: "Milagros", src: "/assets/images/clients/logo-milagros.webp" },
  { name: "Family Sakato", src: "/assets/images/clients/logo-familysakato.webp" },
  { name: "Sea Familia", src: "/assets/images/clients/logo-seafamilia.webp" },
  { name: "LFK", src: "/assets/images/clients/logo-lfk.webp" },
  { name: "Kreyo", src: "/assets/images/clients/logo-kreyo.webp" },
  { name: "Speed Creat", src: "/assets/images/clients/logo-speedcreat.webp" },
];

function LogoCard({ logo }: { logo: ClientLogo }) {
  return (
    <div
      title={logo.name}
      className="group/card flex items-center justify-center h-16 md:h-20 px-6 py-2.5 rounded-xl bg-white border border-slate-200/80 shadow-xs min-w-[145px] md:min-w-[185px] shrink-0 transition-all duration-300 hover:shadow-md hover:border-[#1E40AF]/40 hover:-translate-y-0.5 cursor-pointer"
    >
      <div className="relative w-full h-8 md:h-10 flex items-center justify-center">
        <Image
          src={logo.src}
          alt={`Logo mitra ${logo.name}`}
          width={135}
          height={40}
          className="max-h-8 md:max-h-10 w-auto object-contain filter grayscale contrast-125 opacity-70 group-hover/card:grayscale-0 group-hover/card:opacity-100 transition-all duration-300"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export function ClientLogosSection() {
  return (
    <section
      aria-label="Klien dan Mitra UNIPIC Studio"
      className="relative py-12 md:py-16 bg-slate-50/70 border-b border-[#E2E8F0] overflow-hidden"
    >
      {/* Scoped CSS animation for bulletproof continuous smooth marquee */}
      <style jsx>{`
        @keyframes scrollLeft {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(-50%, 0, 0);
          }
        }

        @keyframes scrollRight {
          from {
            transform: translate3d(-50%, 0, 0);
          }
          to {
            transform: translate3d(0, 0, 0);
          }
        }

        .marquee-track-left {
          display: flex;
          width: max-content;
          animation: scrollLeft 32s linear infinite !important;
          will-change: transform;
        }

        .marquee-track-right {
          display: flex;
          width: max-content;
          animation: scrollRight 36s linear infinite !important;
          will-change: transform;
        }

        .marquee-wrapper:hover .marquee-track-left,
        .marquee-wrapper:hover .marquee-track-right {
          animation-play-state: paused !important;
        }

        .fade-edge-mask {
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
        }
      `}</style>

      <div className="container-custom mb-8 text-center">
        <p className="text-xs md:text-sm font-semibold uppercase tracking-wider text-[#1E40AF] mb-2">
          Kemitraan & Rekam Jejak
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] tracking-tight">
          Dipercaya oleh Brand Terkemuka & Instansi Nasional
        </h2>
        <p className="text-sm md:text-base text-[#475569] max-w-2xl mx-auto mt-2.5">
          Lebih dari 30 mitra korporasi, kementerian negara, dan brand retail telah mempercayakan identitas visual serta pertumbuhan bisnis mereka kepada UNIPIC Studio.
        </p>
      </div>

      {/* Marquee Container with fade edge mask and hover pause */}
      <div className="relative w-full space-y-4 marquee-wrapper fade-edge-mask">
        {/* Track 1: Moving Left */}
        <div className="flex overflow-hidden select-none">
          <div className="marquee-track-left flex items-center gap-4 py-1 pr-4">
            {rowOneClients.concat(rowOneClients).map((logo, idx) => (
              <LogoCard key={`row1-${logo.name}-${idx}`} logo={logo} />
            ))}
          </div>
        </div>

        {/* Track 2: Moving Right */}
        <div className="flex overflow-hidden select-none">
          <div className="marquee-track-right flex items-center gap-4 py-1 pr-4">
            {rowTwoClients.concat(rowTwoClients).map((logo, idx) => (
              <LogoCard key={`row2-${logo.name}-${idx}`} logo={logo} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
