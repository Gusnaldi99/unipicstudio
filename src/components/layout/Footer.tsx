import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
} from "lucide-react";

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#1E293B] bg-[#0F172A] text-[#94A3B8]">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: Studio Brand & Bio */}
          <div className="lg:col-span-4 space-y-4">
            <Link
              href="/"
              className="inline-block focus-visible:ring-2 focus-visible:ring-[#1E40AF] rounded-sm"
              aria-label="UNIPIC Studio Homepage"
            >
              <div className="relative h-10 w-44">
                <Image
                  src="/assets/images/logo/logo unipic putih 2.png"
                  alt="UNIPIC STUDIO Logo"
                  fill
                  className="object-contain object-left"
                  sizes="176px"
                />
              </div>
            </Link>

            <p className="text-sm leading-relaxed text-[#94A3B8] max-w-sm">
              Mitra digital marketing dan produksi kreatif yang mendampingi bisnis dalam membangun identitas merek, pembuatan konten visual, pengembangan web, dan periklanan digital sejak 2017.
            </p>

            <div className="flex items-center gap-2.5 pt-1">
              <a
                href="https://www.instagram.com/unipic.studio/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram UNIPIC Studio"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.facebook.com/unipicstudio"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook UNIPIC Studio"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>

          {/* Col 2: Services Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-sm font-bold text-white">
              Layanan
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/#services"
                  className="hover:text-white transition-colors"
                >
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="hover:text-white transition-colors"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="hover:text-white transition-colors"
                >
                  Portofolio Proyek
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio?showcase=digital-marketing"
                  className="hover:text-white transition-colors"
                >
                  Showcase Video Reels
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigation & Company */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-sm font-bold text-white">
              Eksplorasi
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/#solutions"
                  className="hover:text-white transition-colors"
                >
                  Solusi Kami
                </Link>
              </li>
              <li>
                <Link
                  href="/#comparison"
                  className="hover:text-white transition-colors"
                >
                  Keunggulan
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="hover:text-white transition-colors"
                >
                  Portofolio Proyek
                </Link>
              </li>
              <li>
                <Link
                  href="/#faq"
                  className="hover:text-white transition-colors"
                >
                  Pertanyaan (FAQ)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div className="lg:col-span-4 space-y-3">
            <p className="text-sm font-bold text-white">
              Kontak & Kantor
            </p>

            <ul className="space-y-2.5 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 mt-0.5 text-[#38BDF8] shrink-0" />
                <span>
                  Jakarta, Indonesia
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-[#38BDF8] shrink-0" />
                <a
                  href="mailto:unipicstudio@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  unipicstudio@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-[#38BDF8] shrink-0" />
                <a
                  href="tel:08151195066"
                  className="hover:text-white transition-colors"
                >
                  0815-1195-066
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 text-[#38BDF8] shrink-0" />
                <span>Senin - Jumat: 09.00 - 18.00 WIB</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#64748B] gap-4">
          <p>© {currentYear} UNIPIC Studio. Hak Cipta Dilindungi.</p>
          <div className="flex items-center gap-6">
            <Link href="#contact" className="hover:text-white transition-colors">
              Kontak
            </Link>
            <Link href="#services" className="hover:text-white transition-colors">
              Layanan
            </Link>
            <Link href="#faq" className="hover:text-white transition-colors">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
