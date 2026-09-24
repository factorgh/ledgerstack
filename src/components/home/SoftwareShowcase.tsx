"use client";

import React, { useState } from "react";
import { SOFTWARE_PLATFORMS } from "@/data/company";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ConsultationModal } from "@/components/shared/ConsultationModal";
import {
  Check,
  Cpu,
  Layers,
  Server,
  Cloud,
  FileSpreadsheet,
  Workflow,
  ArrowRight,
} from "lucide-react";

export const SoftwareShowcase: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>(SOFTWARE_PLATFORMS[0].id);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const selectedPlatform =
    SOFTWARE_PLATFORMS.find((p) => p.id === selectedId) || SOFTWARE_PLATFORMS[0];

  return (
    <section className="py-14 sm:py-20 lg:py-28 relative bg-[#FAFAFA] border-t border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-10 sm:mb-16">
          <Badge variant="gold" size="md">
            SUPPORTED PLATFORMS
          </Badge>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 tracking-tight">
            The right software for the way <span className="text-gradient-gold">your business works.</span>
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base lg:text-lg leading-relaxed">
            Different businesses have distinct operating models. We help you choose, configure, and operate the platform that perfectly aligns with your team, scale, and industry.
          </p>
        </div>

        {/* Platform Selection Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-8 sm:mb-10">
          {SOFTWARE_PLATFORMS.map((platform) => {
            const isSelected = platform.id === selectedId;
            return (
              <button
                key={platform.id}
                onClick={() => setSelectedId(platform.id)}
                className={`px-3.5 sm:px-5 py-2 sm:py-3 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-1.5 sm:gap-2 border cursor-pointer ${
                  isSelected
                    ? "bg-amber-500 text-zinc-950 border-amber-600 shadow-md shadow-amber-500/20"
                    : "bg-white text-zinc-700 border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50"
                }`}
              >
                <span>{platform.name}</span>
                {platform.badge && (
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-md font-mono hidden sm:inline ${
                      isSelected ? "bg-zinc-950 text-amber-300" : "bg-zinc-100 text-zinc-600"
                    }`}
                  >
                    {platform.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Detailed Spotlight Card */}
        <div className="rounded-3xl bg-white border border-zinc-200 p-5 sm:p-10 shadow-lg relative overflow-hidden">
          {/* Subtle gold glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative z-10">
            {/* Left Col: Platform Overview */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-amber-700 uppercase tracking-wider">
                    {selectedPlatform.category}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight">
                  {selectedPlatform.name}
                </h3>
                <p className="text-sm font-semibold text-amber-700">
                  {selectedPlatform.tagline}
                </p>
              </div>

              <p className="text-zinc-600 text-sm leading-relaxed">
                {selectedPlatform.description}
              </p>

              <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                  Ideal Operating Context
                </div>
                <p className="text-xs text-zinc-700 leading-relaxed font-medium">
                  {selectedPlatform.bestFor}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200">
                  <span className="text-zinc-500 block mb-1 font-medium">Deployment Model</span>
                  <strong className="text-zinc-900 font-bold">{selectedPlatform.deployment}</strong>
                </div>
                <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200">
                  <span className="text-zinc-500 block mb-1 font-medium">Structure</span>
                  <strong className="text-zinc-900 font-bold">{selectedPlatform.pricingModel}</strong>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => setIsConsultationOpen(true)}
                >
                  Consult on {selectedPlatform.name}
                </Button>
                <Button
                  variant="outline"
                  size="md"
                  href="/solutions"
                  showArrow
                >
                  Full Solutions Guide
                </Button>
              </div>
            </div>

            {/* Right Col: Key Functional Capabilities */}
            <div className="lg:col-span-6 space-y-5">
              <div className="text-xs font-bold uppercase tracking-wider text-zinc-800 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-amber-600" />
                <span>Core Functional Capabilities</span>
              </div>

              <div className="space-y-3">
                {selectedPlatform.keyFeatures.map((feat, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200 flex items-start gap-3 text-xs sm:text-sm text-zinc-800"
                  >
                    <div className="w-5 h-5 rounded-md bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-medium">{feat}</span>
                  </div>
                ))}
              </div>

              {/* Strengths Badges */}
              <div className="pt-2">
                <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 mb-2">
                  Key Strengths
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedPlatform.strengths.map((str) => (
                    <span
                      key={str}
                      className="px-3 py-1 rounded-lg bg-zinc-100 text-xs font-semibold text-zinc-800 border border-zinc-200"
                    >
                      {str}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        defaultService={`Implementation Consultation: ${selectedPlatform.name}`}
      />
    </section>
  );
};
