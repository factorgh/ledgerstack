"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SERVICES } from "@/data/company";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  Layers,
  GraduationCap,
  Palette,
  Headphones,
  Mail,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { ConsultationModal } from "@/components/shared/ConsultationModal";

export const ServicesShowcase: React.FC = () => {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedServiceTitle, setSelectedServiceTitle] = useState(SERVICES[0].title);

  const iconMap: Record<string, React.ReactNode> = {
    Layers: <Layers className="w-5 h-5 text-amber-700" />,
    GraduationCap: <GraduationCap className="w-5 h-5 text-amber-700" />,
    Palette: <Palette className="w-5 h-5 text-amber-700" />,
    Headphones: <Headphones className="w-5 h-5 text-amber-700" />,
    Mail: <Mail className="w-5 h-5 text-amber-700" />,
  };

  const handleOpenConsultation = (serviceTitle: string) => {
    setSelectedServiceTitle(serviceTitle);
    setIsConsultationOpen(true);
  };

  return (
    <section className="py-20 lg:py-28 bg-white border-t border-zinc-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="gold" size="md">
            WHAT WE DO
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 tracking-tight">
            Everything you need to <span className="text-gradient-gold">work smarter.</span>
          </h2>
          <p className="text-zinc-600 text-base sm:text-lg leading-relaxed">
            From implementing business software to training your workforce and safeguarding your systems, we provide comprehensive technology solutions built for real results.
          </p>
        </div>

        {/* 5 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((srv, index) => {
            const isWide = index === 0;
            return (
              <div
                key={srv.id}
                className={`group rounded-3xl border transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between ${
                  isWide
                    ? "md:col-span-2 lg:col-span-2 bg-gradient-to-br from-zinc-950 via-zinc-900 to-black text-white border-zinc-800 shadow-xl"
                    : "bg-white border-zinc-200/90 hover:border-amber-400 hover:shadow-md text-zinc-900"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${
                        isWide
                          ? "bg-zinc-900 border border-zinc-800 text-amber-400"
                          : "bg-amber-50 border border-amber-200 text-amber-700 group-hover:bg-amber-500 group-hover:text-white"
                      }`}
                    >
                      {iconMap[srv.iconName]}
                    </div>
                    <span
                      className={`text-xs font-mono px-3 py-1 rounded-full font-bold ${
                        isWide
                          ? "bg-zinc-900 border border-zinc-800 text-amber-400"
                          : "bg-zinc-100 text-zinc-700"
                      }`}
                    >
                      0{index + 1}
                    </span>
                  </div>

                  <h3
                    className={`text-xl sm:text-2xl font-bold tracking-tight transition-colors ${
                      isWide ? "text-white group-hover:text-amber-300" : "text-zinc-900 group-hover:text-amber-800"
                    }`}
                  >
                    {srv.title}
                  </h3>

                  <p
                    className={`text-sm leading-relaxed mt-3 mb-6 font-normal ${
                      isWide ? "text-zinc-300" : "text-zinc-600"
                    }`}
                  >
                    {srv.shortDesc}
                  </p>

                  {/* Highlights / Deliverables */}
                  <div className="space-y-2 mb-6">
                    <div
                      className={`text-[11px] font-bold uppercase tracking-wider ${
                        isWide ? "text-amber-400" : "text-zinc-400"
                      }`}
                    >
                      Key Highlights
                    </div>
                    {srv.highlights.slice(0, 2).map((hl, i) => (
                      <div
                        key={i}
                        className={`flex items-start gap-2 text-xs ${
                          isWide ? "text-zinc-300" : "text-zinc-700"
                        }`}
                      >
                        <CheckCircle2
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            isWide ? "text-amber-400" : "text-amber-600"
                          }`}
                        />
                        <div>
                          <strong className={isWide ? "text-white" : "text-zinc-900"}>{hl.title}:</strong> {hl.desc}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Supported Tools Tags */}
                  {srv.supportedTools && (
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {srv.supportedTools.map((tool) => (
                        <span
                          key={tool}
                          className={`text-[11px] font-mono px-2.5 py-0.5 rounded-lg border font-semibold ${
                            isWide
                              ? "bg-zinc-900 text-amber-300 border-zinc-800"
                              : "bg-zinc-50 text-zinc-800 border-zinc-200"
                          }`}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Bottom Actions */}
                <div
                  className={`pt-6 border-t flex items-center justify-between gap-4 ${
                    isWide ? "border-zinc-800" : "border-zinc-100"
                  }`}
                >
                  <Link
                    href={srv.slug === "solutions" ? "/services" : `/${srv.slug}`}
                    className={`text-xs font-bold flex items-center gap-1.5 group/link ${
                      isWide ? "text-amber-400 hover:text-amber-300" : "text-amber-700 hover:text-amber-800"
                    }`}
                  >
                    <span>Detailed Breakdown</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>

                  <button
                    onClick={() => handleOpenConsultation(srv.title)}
                    className={`text-xs font-semibold transition-colors cursor-pointer ${
                      isWide ? "text-zinc-400 hover:text-white" : "text-zinc-500 hover:text-zinc-900"
                    }`}
                  >
                    Enquire Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Explorer Link */}
        <div className="mt-12 text-center">
          <Button href="/services" variant="secondary" size="lg" showArrow>
            Explore All Capabilities &amp; Case Studies
          </Button>
        </div>
      </div>

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        defaultService={selectedServiceTitle}
      />
    </section>
  );
};
