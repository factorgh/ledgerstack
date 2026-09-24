import React from "react";
import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { CompanyIntro } from "@/components/home/CompanyIntro";
import { ServicesShowcase } from "@/components/home/ServicesShowcase";
import { SoftwareShowcase } from "@/components/home/SoftwareShowcase";
import { SolutionFinder } from "@/components/home/SolutionFinder";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { WhyLedgerstack } from "@/components/home/WhyLedgerstack";
import { CaseStudies } from "@/components/home/CaseStudies";
import { TrainingHighlight } from "@/components/home/TrainingHighlight";
import { SupportBanner } from "@/components/home/SupportBanner";
import { FaqSection } from "@/components/home/FaqSection";
import { ContactSection } from "@/components/home/ContactSection";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <TrustStrip />
      <CompanyIntro />
      <ServicesShowcase />
      <SoftwareShowcase />
      <SolutionFinder />
      <ProcessTimeline />
      <WhyLedgerstack />
      <CaseStudies />
      <TrainingHighlight />
      <SupportBanner />
      <FaqSection />
      <ContactSection />
    </div>
  );
}
