"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { href: "/#services", label: "Layanan" },
  { href: "/#solutions", label: "Solusi" },
  { href: "/#comparison", label: "Keunggulan" },
  { href: "/portfolio", label: "Portofolio" },
  { href: "/#faq", label: "FAQ" },
];

function InstagramIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Announcement Bar (ATM: GoSocial Top Announcement) */}
      <div className="bg-[#EFF6FF] border-b border-[#DBEAFE] text-xs py-2 px-4 text-[#1E40AF]">
        <div className="container-custom flex items-center justify-between gap-4">
          <p className="mx-auto sm:mx-0 font-medium text-center sm:text-left truncate sm:overflow-visible">
            <span className="font-bold">UNIPIC Studio</span>, Partner Terpercaya Branding, Konten Kreatif & Aktivasi Digital sejak 2017
          </p>
          <div className="hidden sm:flex items-center gap-3.5 text-xs font-semibold text-[#1E40AF] shrink-0">
            <a href="tel:08151195066" className="hover:underline transition-colors">
              0815-1195-066
            </a>
            <span className="text-[#93C5FD]">•</span>
            <a href="mailto:unipicstudio@gmail.com" className="hover:underline transition-colors">
              unipicstudio@gmail.com
            </a>
            <span className="text-[#BFDBFE]">|</span>
            <div className="flex items-center gap-1.5 text-[#1E40AF]">
              <a
                href="https://www.instagram.com/unipic.studio/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram UNIPIC Studio"
                title="Instagram @unipic.studio"
                className="p-1 rounded hover:bg-[#DBEAFE] text-[#1E40AF] hover:text-[#1D4ED8] transition-colors inline-flex items-center justify-center focus-visible:ring-2 focus-visible:ring-[#1E40AF]"
              >
                <InstagramIcon className="h-3.5 w-3.5" />
              </a>
              <a
                href="https://www.facebook.com/unipicstudio"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook UNIPIC Studio"
                title="Facebook UNIPIC Studio"
                className="p-1 rounded hover:bg-[#DBEAFE] text-[#1E40AF] hover:text-[#1D4ED8] transition-colors inline-flex items-center justify-center focus-visible:ring-2 focus-visible:ring-[#1E40AF]"
              >
                <FacebookIcon className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-200 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-[#E2E8F0] shadow-sm py-3"
            : "bg-white border-b border-[#F1F5F9] py-4"
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo with Light-Background Ready Logo Asset */}
          <Link
            href="/"
            className="group flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-[#1E40AF] rounded-sm"
            aria-label="UNIPIC Studio Homepage"
          >
            <div className="relative h-10 w-44">
              <Image
                src="/assets/images/logo/logo unipic original 2.png"
                alt="UNIPIC STUDIO Logo"
                fill
                priority
                className="object-contain object-left"
                sizes="176px"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Navigasi Utama"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 text-sm font-medium text-[#475569] hover:text-[#1E40AF] hover:bg-[#F8FAFC] transition-colors duration-150 rounded-lg focus-visible:ring-2 focus-visible:ring-[#1E40AF]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://wa.me/628151195066?text=Halo%20UNIPIC%20Studio,%20saya%20tertarik%20untuk%20konsultasi%20layanan%20kreatif%20dan%20digital"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
            >
              <Button variant="primary" size="md">
                <MessageCircle className="h-4 w-4 mr-1.5" />
                <span>Konsultasi Gratis</span>
              </Button>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex md:hidden min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] text-[#334155] hover:text-[#0F172A] focus-visible:ring-2 focus-visible:ring-[#1E40AF]"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div
            id="mobile-navigation"
            className="md:hidden fixed inset-x-0 top-[105px] bg-white border-b border-[#E2E8F0] px-6 py-6 shadow-xl animate-in fade-in duration-150"
          >
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2.5 text-base font-medium text-[#334155] hover:text-[#1E40AF] transition-colors border-b border-[#F1F5F9]"
                >
                  <span>{link.label}</span>
                </Link>
              ))}

              <div className="pt-4 space-y-4">
                <a
                  href="https://wa.me/628151195066?text=Halo%20UNIPIC%20Studio,%20saya%20tertarik%20untuk%20konsultasi%20layanan%20kreatif%20dan%20digital"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-block text-center"
                >
                  <Button variant="primary" size="lg" className="w-full">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    <span>Mulai Konsultasi Gratis</span>
                  </Button>
                </a>

                {/* Mobile Social Links & Direct Contacts */}
                <div className="pt-4 border-t border-[#F1F5F9] flex flex-col gap-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#475569]">Sosial Media:</span>
                    <div className="flex items-center gap-2">
                      <a
                        href="https://www.instagram.com/unipic.studio/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram UNIPIC Studio"
                        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#EFF6FF] border border-[#DBEAFE] text-xs font-semibold text-[#1E40AF] hover:bg-[#DBEAFE] transition-colors"
                      >
                        <InstagramIcon className="h-3.5 w-3.5" />
                        <span>Instagram</span>
                      </a>
                      <a
                        href="https://www.facebook.com/unipicstudio"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook UNIPIC Studio"
                        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#EFF6FF] border border-[#DBEAFE] text-xs font-semibold text-[#1E40AF] hover:bg-[#DBEAFE] transition-colors"
                      >
                        <FacebookIcon className="h-3.5 w-3.5" />
                        <span>Facebook</span>
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs text-[#64748B] pt-1">
                    <a href="tel:08151195066" className="font-semibold text-[#1E40AF] hover:underline">
                      0815-1195-066
                    </a>
                    <a href="mailto:unipicstudio@gmail.com" className="text-slate-600 hover:underline">
                      unipicstudio@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
