"use client";

import React, { useState } from "react";
import { PageHeader } from "@/components/shared/PageHeader";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ConsultationModal } from "@/components/shared/ConsultationModal";
import {
  Palette,
  Layout,
  Code2,
  Smartphone,
  Zap,
  CheckCircle2,
  ArrowRight,
  Monitor,
  PenTool,
  Layers,
} from "lucide-react";

export default function WebDesignPage() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Corporate Web Development");

  const webOfferings = [
    {
      icon: Monitor,
      title: "Corporate Websites",
      desc: "Editorial-grade, ultra-responsive corporate websites that immediately position your organization as a credible industry authority.",
      deliverables: ["Custom Next.js / React engineering", "Mobile-first responsive architecture", "Core Web Vitals & SEO optimization", "Secure CMS integration"],
    },
    {
      icon: Code2,
      title: "Bespoke Web Applications",
      desc: "Tailored customer portals, internal operational tools, and custom workflow dashboards built to streamline unique business operations.",
      deliverables: ["Role-based authentication", "Database design & API connectivity", "Interactive dashboards & reporting", "High security standards"],
    },
    {
      icon: PenTool,
      title: "Brand Identity & Graphic Systems",
      desc: "Cohesive visual identity packages including corporate logo marks, official typography guidelines, color palettes, and stationery.",
      deliverables: ["Brand identity stylebooks", "Vector logos & icon suites", "Digital letterheads & business cards", "Social media brand kits"],
    },
    {
      icon: Layers,
      title: "Marketing Collateral & Pitch Decks",
      desc: "High-impact digital marketing assets, investor pitch decks, corporate brochures, and product one-pagers that convert prospects.",
      deliverables: ["Investor & sales pitch presentations", "High-resolution corporate brochures", "Trade exhibition banner graphics", "Digital report layouts"],
    },
  ];

  const handleEnquire = (title: string) => {
    setSelectedService(title);
    setIsConsultationOpen(true);
  };

  return (
    <div className="flex flex-col w-full">
      <PageHeader
        badge="DIGITAL DESIGN &amp; ENGINEERING"
        title="Digital touchpoints that command"
        highlight="instant authority."
        description="We craft high-performance corporate websites, tailored web applications, and coherent brand identities engineered to elevate credibility and drive business conversion."
      />

      {/* Offerings Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <Badge variant="gold" size="md">
              CAPABILITIES
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
              Design and code built to modern global standards
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              We reject bloated templates and generic page builders. We build lean, modern digital assets designed for speed, beauty, and measurable business impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {webOfferings.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-white border border-zinc-200/90 hover:border-amber-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-5">
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>

                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-zinc-600 text-sm leading-relaxed mt-2 font-normal">
                        {item.desc}
                      </p>
                    </div>

                    <div className="space-y-2 pt-2">
                      <div className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                        Deliverables Include
                      </div>
                      {item.deliverables.map((del, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-2 text-xs sm:text-sm text-zinc-700">
                          <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-zinc-100 mt-6">
                    <Button
                      variant="primary"
                      size="md"
                      onClick={() => handleEnquire(item.title)}
                      icon={ArrowRight}
                    >
                      Enquire About {item.title}
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Standards & Technology */}
      <section className="py-20 bg-[#FAFAFA] border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-zinc-200 shadow-xs space-y-3">
              <Zap className="w-8 h-8 text-amber-600" />
              <h3 className="text-lg font-bold text-zinc-900">Sub-Second Load Times</h3>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                Optimized assets and server-rendered Next.js performance ensure frictionless experiences across desktop and mobile devices.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-zinc-200 shadow-xs space-y-3">
              <Smartphone className="w-8 h-8 text-amber-700" />
              <h3 className="text-lg font-bold text-zinc-900">Intentional Mobile Layouts</h3>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                Over 70% of Ghanaian visitors browse via smartphones. We craft mobile layouts with thumb-friendly controls and fluid typography.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-zinc-200 shadow-xs space-y-3">
              <Code2 className="w-8 h-8 text-zinc-900" />
              <h3 className="text-lg font-bold text-zinc-900">Clean, Maintainable Code</h3>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                Modular TypeScript and structured components make your site easily expandable as your company introduces new services.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        defaultService={`Web & Design Project: ${selectedService}`}
        title="Start a Web or Design Project"
      />
    </div>
  );
}
