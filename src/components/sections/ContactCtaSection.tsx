"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import {
  MessageCircle,
  Send,
  CheckCircle,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

export function ContactCtaSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "Digital Marketing",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const waText = encodeURIComponent(
      `Halo UNIPIC Studio, saya ${formData.name} dari ${formData.company || "Pribadi"}.\n` +
        `Tertarik pada layanan: ${formData.service}\n` +
        `Catatan: ${formData.message || "-"}`
    );

    setSubmitted(true);
    window.open(`https://wa.me/628151195066?text=${waText}`, "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-[#F8FAFC]">
      <div className="container-custom">
        <SectionHeading
          badgeText="Hubungi Kami"
          title="Mulai Konsultasi Proyek Anda Hari Ini"
          subtitle="Sampaikan kebutuhan bisnis Anda. Tim UNIPIC Studio siap membantu merancang solusi visual dan pemasaran digital yang tepat."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto items-start">
          {/* Left Column: Direct WhatsApp Contact Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-[#DBEAFE] bg-[#EFF6FF] p-7 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1E40AF] text-white mb-4">
                <MessageCircle className="h-6 w-6" />
              </div>

              <h3 className="text-xl font-bold text-[#0F172A] mb-2">
                Konsultasi Cepat via WhatsApp
              </h3>

              <p className="text-sm text-[#475569] leading-relaxed mb-6">
                Butuh respons cepat mengenai estimasi biaya atau jadwal pengerjaan? Hubungi tim kami langsung melalui WhatsApp resmi.
              </p>

              <a
                href="https://wa.me/628151195066?text=Halo%20UNIPIC%20Studio,%20saya%20ingin%20konsultasi%20layanan%20kreatif%20dan%20digital"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-block"
              >
                <Button variant="primary" size="lg" className="w-full justify-center">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  <span>Chat WhatsApp Sekarang</span>
                </Button>
              </a>
            </div>

            {/* Quick Contact Info */}
            <div className="rounded-xl border border-[#E2E8F0] bg-white p-6 space-y-4 shadow-sm">
              <div className="flex items-start gap-3 text-sm text-[#334155]">
                <Phone className="h-4 w-4 text-[#1E40AF] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#0F172A] block">Telepon / WhatsApp:</span>
                  <a href="tel:08151195066" className="hover:text-[#1E40AF] transition-colors">
                    0815-1195-066
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 text-sm text-[#334155]">
                <Mail className="h-4 w-4 text-[#1E40AF] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#0F172A] block">Email Resmi:</span>
                  <a href="mailto:unipicstudio@gmail.com" className="hover:text-[#1E40AF] transition-colors">
                    unipicstudio@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 text-sm text-[#334155]">
                <Clock className="h-4 w-4 text-[#1E40AF] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#0F172A] block">Jam Operasional:</span>
                  <span>Senin – Jumat: 09.00 – 18.00 WIB</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-[#E2E8F0] bg-white p-7 sm:p-8 shadow-sm">
              <h3 className="text-xl font-bold text-[#0F172A] mb-1">
                Kirim Pesan / Permintaan Penawaran
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] mb-6">
                Isi data di bawah ini, tim kami akan segera menghubungi Anda kembali.
              </p>

              {submitted ? (
                <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6 text-center space-y-3">
                  <div className="flex justify-center">
                    <CheckCircle className="h-10 w-10 text-emerald-600" />
                  </div>
                  <h4 className="text-base font-bold text-emerald-900">
                    Formulir Disiapkan untuk WhatsApp
                  </h4>
                  <p className="text-xs text-emerald-700 max-w-sm mx-auto">
                    Data Anda telah disiapkan dan diteruskan ke WhatsApp. Jika jendela chat tidak terbuka otomatis, hubungi kami langsung di 0815-1195-066.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSubmitted(false)}
                    className="mt-2"
                  >
                    Kirim Pesan Lain
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-semibold text-[#334155] mb-1"
                      >
                        Nama Lengkap *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Nama Anda"
                        className="w-full rounded-lg border border-[#CBD5E1] bg-[#F8FAFC] px-3.5 py-2.5 text-sm text-[#0F172A] placeholder-slate-400 focus-visible:border-[#1E40AF] focus-visible:bg-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1E40AF]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-company"
                        className="block text-xs font-semibold text-[#334155] mb-1"
                      >
                        Perusahaan / Usaha
                      </label>
                      <input
                        id="contact-company"
                        type="text"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        placeholder="Nama Brand / Usaha"
                        className="w-full rounded-lg border border-[#CBD5E1] bg-[#F8FAFC] px-3.5 py-2.5 text-sm text-[#0F172A] placeholder-slate-400 focus-visible:border-[#1E40AF] focus-visible:bg-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1E40AF]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-semibold text-[#334155] mb-1"
                      >
                        Email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="nama@email.com"
                        className="w-full rounded-lg border border-[#CBD5E1] bg-[#F8FAFC] px-3.5 py-2.5 text-sm text-[#0F172A] placeholder-slate-400 focus-visible:border-[#1E40AF] focus-visible:bg-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1E40AF]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-xs font-semibold text-[#334155] mb-1"
                      >
                        Nomor WhatsApp *
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="0812xxxxxxx"
                        className="w-full rounded-lg border border-[#CBD5E1] bg-[#F8FAFC] px-3.5 py-2.5 text-sm text-[#0F172A] placeholder-slate-400 focus-visible:border-[#1E40AF] focus-visible:bg-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1E40AF]"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-service"
                      className="block text-xs font-semibold text-[#334155] mb-1"
                    >
                      Pilihan Layanan
                    </label>
                    <select
                      id="contact-service"
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="w-full rounded-lg border border-[#CBD5E1] bg-[#F8FAFC] px-3.5 py-2.5 text-sm text-[#0F172A] focus-visible:border-[#1E40AF] focus-visible:bg-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1E40AF]"
                    >
                      <option value="Digital Marketing & Social Media">
                        Digital Marketing & Social Media
                      </option>
                      <option value="Web Development & Landing Page">
                        Web Development & Landing Page
                      </option>
                      <option value="Konsultasi Terpadu">
                        Konsultasi Terpadu
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-semibold text-[#334155] mb-1"
                    >
                      Kebutuhan / Rencana Proyek
                    </label>
                    <textarea
                      id="contact-message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Jelaskan secara singkat kebutuhan atau target yang ingin Anda capai..."
                      className="w-full rounded-lg border border-[#CBD5E1] bg-[#F8FAFC] px-3.5 py-2.5 text-sm text-[#0F172A] placeholder-slate-400 focus-visible:border-[#1E40AF] focus-visible:bg-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1E40AF]"
                    />
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full justify-center"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      <span>Kirim Permintaan Konsultasi</span>
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
