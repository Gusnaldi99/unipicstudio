import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { ClientLogosSection } from "@/components/sections/ClientLogosSection";
import { ValuePillars } from "@/components/sections/ValuePillars";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactCtaSection } from "@/components/sections/ContactCtaSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ClientLogosSection />
      <ValuePillars />
      <WhyChooseUs />
      <ServicesSection />
      <PortfolioSection />
      <FaqSection />
      <ContactCtaSection />
    </>
  );
}

