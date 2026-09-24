"use client";

import React, { useState } from "react";
import { PageHeader } from "@/components/shared/PageHeader";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SERVICES } from "@/data/company";
import { ConsultationModal } from "@/components/shared/ConsultationModal";
import {
  Layers,
  GraduationCap,
  Palette,
  Headphones,
  Mail,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Check,
} from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(SERVICES[0].title);

  const iconMap: Record<string, React.ReactNode> = {
    Layers: <Layers className="w-6 h-6 text-amber-700" />,
    GraduationCap: <GraduationCap className="w-6 h-6 text-amber-700" />,
    Palette: <Palette className="w-6 h-6 text-amber-700" />,
    Headphones: <Headphones className="w-6 h-6 text-amber-700" />,
    Mail: <Mail className="w-6 h-6 text-amber-700" />,
  };

  const handleConsult = (title: string) => {
    setSelectedService(title);
    setIsConsultationOpen(true);
  };

  return (
    <div className="flex flex-col w-full">
      <PageHeader
        badge="SERVICES &amp; CAPABILITIES"
        title="Comprehensive solutions to build an"
        highlight="efficient business engine."
        description="Explore our five core service areas: business management software implementation, hands-on team training, modern web and brand design, dedicated technical support, and enterprise email."
      />

      {/* Services Detailed Breakdown */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
          {SERVICES.map((srv, index) => {
            const isEven = index % 2 === 1;
            return (
              <div
                key={srv.id}
                id={srv.slug}
                className="scroll-mt-32 p-5 sm:p-8 lg:p-12 rounded-3xl bg-white border border-zinc-200/90 shadow-lg relative overflow-hidden"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start ${isEven ? "lg:flex-row-reverse" : ""}`}>
                  {/* Left Overview */}
                  <div className="lg:col-span-6 space-y-4 sm:space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center shrink-0">
                        {iconMap[srv.iconName]}
                      </div>
                      <div>
                        <span className="text-[10px] sm:text-xs font-mono text-amber-800 font-bold uppercase tracking-wider">
                          Service 0{index + 1}
                        </span>
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-zinc-950 tracking-tight">
                          {srv.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-zinc-600 text-xs sm:text-sm lg:text-base leading-relaxed">
                      {srv.fullDesc}
                    </p>

                    {/* Supported Platforms / Tools */}
                    {srv.supportedTools && (
                      <div className="space-y-2">
                        <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-zinc-500">
                          Platforms Supported
                        </div>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {srv.supportedTools.map((tool) => (
                            <span
                              key={tool}
                              className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-xl bg-zinc-50 border border-zinc-200 text-[11px] sm:text-xs font-mono font-bold text-zinc-800"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Target Audience */}
                    <div className="space-y-2">
                      <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-zinc-500">
                        Designed For
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {srv.audience.map((aud) => (
                          <span
                            key={aud}
                            className="px-2.5 py-0.5 sm:py-1 rounded-lg bg-zinc-100 text-zinc-700 text-[11px] sm:text-xs font-medium"
                          >
                            {aud}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row gap-2.5 sm:gap-3">
                      <Button
                        variant="primary"
                        size="md"
                        onClick={() => handleConsult(srv.title)}
                      >
                        Enquire About {srv.title}
                      </Button>
                      {srv.slug !== "solutions" && (
                        <Button
                          variant="outline"
                          size="md"
                          href={`/${srv.slug}`}
                          showArrow
                        >
                          Dedicated Page
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Right Deliverables Checklist */}
                  <div className="lg:col-span-6 bg-zinc-50 rounded-2xl border border-zinc-200/90 p-4 sm:p-6 lg:p-8 space-y-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-zinc-800 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-600" />
                      <span>Standard Engagement Deliverables</span>
                    </div>

                    <div className="space-y-2.5">
                      {srv.deliverables.map((del, dIdx) => (
                        <div
                          key={dIdx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700"
                        >
                          <div className="w-4 h-4 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-0.5 font-bold">
                            <Check className="w-3 h-3" />
                          </div>
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-zinc-200 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {srv.highlights.map((hl, hIdx) => (
                        <div key={hIdx} className="p-3.5 rounded-xl bg-white border border-zinc-200 text-xs">
                          <strong className="text-zinc-900 block mb-0.5">{hl.title}</strong>
                          <span className="text-zinc-600">{hl.desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        defaultService={selectedService}
      />
    </div>
  );
}
