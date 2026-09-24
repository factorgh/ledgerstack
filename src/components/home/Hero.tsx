"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { HeroVisual } from "./HeroVisual";
import { ConsultationModal } from "@/components/shared/ConsultationModal";
import {
  ArrowRight,
  PhoneCall,
  ShieldCheck,
  CheckCircle,
  Cpu,
  Layers,
} from "lucide-react";

export const Hero: React.FC = () => {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden bg-gradient-to-b from-white via-[#FAF9F5] to-[#F5F3ED]/40 border-b border-zinc-200/80">
      {/* Background ambient gradient beams */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none overflow-hidden">
        <div className="absolute top-[-150px] left-1/4 w-[500px] h-[500px] bg-amber-500/8 rounded-full blur-[120px]" />
        <div className="absolute top-[-100px] right-1/4 w-[500px] h-[500px] bg-amber-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl xl:text-6xl font-extrabold text-zinc-950 tracking-tight leading-[1.12]">
              Drive your business forward with{" "}
              <span className="text-gradient-gold">technology that works.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              Ledgerstack Technologies helps businesses streamline operations, implement powerful business software, empower their teams, and stay supported with reliable technology solutions.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <Button
                variant="primary"
                size="lg"
                onClick={() => setIsConsultationOpen(true)}
                showArrow
              >
                Get Started
              </Button>

              <Button
                variant="secondary"
                size="lg"
                href="/services"
                icon={Layers}
              >
                Explore Our Services
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => setIsConsultationOpen(true)}
                icon={PhoneCall}
              >
                Talk to an Expert
              </Button>
            </div>

            {/* Supported Solution Highlights */}
            <div className="pt-6 border-t border-zinc-200">
              <div className="text-xs uppercase tracking-wider text-zinc-600 font-bold mb-3 flex items-center justify-center lg:justify-start gap-2">
                <Cpu className="w-3.5 h-3.5 text-amber-600" />
                <span>Supported Technologies &amp; Platforms</span>
              </div>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs">
                {["TallyPrime", "QuickBooks", "ERPNext", "Odoo", "Zoho Books", "Google Workspace"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-xl bg-white border border-zinc-200 text-zinc-800 font-semibold hover:border-amber-400 hover:text-amber-800 transition-colors font-mono shadow-2xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Value Guarantees */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-zinc-600 pt-1 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Zero guesswork implementation</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Role-based team training</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Long-term post-launch support</span>
              </div>
            </div>
          </div>

          {/* Right Hero Interactive Visual */}
          <div className="lg:col-span-5">
            <HeroVisual />
          </div>
        </div>
      </div>

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </section>
  );
};
