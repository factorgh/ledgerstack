"use client";

import React, { useState } from "react";
import { PageHeader } from "@/components/shared/PageHeader";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SOFTWARE_PLATFORMS, WORK_PROCESS } from "@/data/company";
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
  ShieldCheck,
  HelpCircle,
  Database,
} from "lucide-react";

export default function SolutionsPage() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState("TallyPrime");

  const migrationSteps = [
    { title: "Data Audit & Cleansing", desc: "Audit legacy spreadsheets or software, deduplicate customer/vendor records, and balance opening figures." },
    { title: "Chart of Accounts Structure", desc: "Architect standard revenue, expense, asset, and liability heads aligned with Ghanaian compliance." },
    { title: "Master File Import", desc: "Safely map and import inventory items, units of measure, tax codes, bank accounts, and pricing matrices." },
    { title: "Parallel Testing Run", desc: "Run test vouchers side-by-side with historical records to verify balance sheet and P&L accuracy." },
  ];

  return (
    <div className="flex flex-col w-full">
      <PageHeader
        badge="BUSINESS SOLUTIONS &amp; ERP"
        title="The right software architecture for"
        highlight="your business model."
        description="We implement, configure, and maintain the leading accounting and ERP systems for Ghanaian enterprises — from high-speed desktop setups to integrated cloud ecosystems."
      />

      {/* Solutions Detailed Grid */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <Badge variant="gold" size="md">
              SUPPORTED PLATFORMS
            </Badge>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
              Enterprise platforms configured to your exact workflows
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              We take an objective, business-first approach to software selection. We configure what fits your operation best.
            </p>
          </div>

          <div className="space-y-8 sm:space-y-12">
            {SOFTWARE_PLATFORMS.map((platform) => (
              <div
                key={platform.id}
                id={platform.id}
                className="scroll-mt-32 p-5 sm:p-8 lg:p-10 rounded-3xl bg-white border border-zinc-200/90 shadow-lg relative overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
                  <div className="lg:col-span-6 space-y-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-amber-700 uppercase tracking-wide">
                          {platform.category}
                        </span>
                        {platform.badge && (
                          <span className="text-[10px] px-2 py-0.5 rounded bg-amber-100 text-amber-800 border border-amber-200 font-mono font-bold">
                            {platform.badge}
                          </span>
                        )}
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight">
                        {platform.name}
                      </h3>
                      <p className="text-sm font-bold text-amber-700">
                        {platform.tagline}
                      </p>
                    </div>

                    <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                      {platform.description}
                    </p>

                    <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-1.5">
                      <div className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                        Best Operational Fit
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-medium">
                        {platform.bestFor}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200">
                        <span className="text-zinc-500 block mb-1 font-medium">Deployment Architecture</span>
                        <strong className="text-zinc-900 font-bold">{platform.deployment}</strong>
                      </div>
                      <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200">
                        <span className="text-zinc-500 block mb-1 font-medium">Licensing Model</span>
                        <strong className="text-zinc-900 font-bold">{platform.pricingModel}</strong>
                      </div>
                    </div>

                    <div className="pt-2">
                      <Button
                        variant="primary"
                        size="md"
                        onClick={() => {
                          setSelectedPlatform(platform.name);
                          setIsConsultationOpen(true);
                        }}
                      >
                        Enquire About {platform.name} Implementation
                      </Button>
                    </div>
                  </div>

                  <div className="lg:col-span-6 bg-zinc-50 rounded-2xl border border-zinc-200 p-6 sm:p-8 space-y-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-zinc-800 flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-amber-600" />
                      <span>Key Features &amp; Modules</span>
                    </div>

                    <div className="space-y-3">
                      {platform.keyFeatures.map((feat, fIdx) => (
                        <div
                          key={fIdx}
                          className="p-3 rounded-xl bg-white border border-zinc-200 flex items-start gap-3 text-xs sm:text-sm text-zinc-800"
                        >
                          <div className="w-4 h-4 rounded-md bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3" />
                          </div>
                          <span className="font-medium">{feat}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 mb-2">
                        Core Advantages
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {platform.strengths.map((str) => (
                          <span
                            key={str}
                            className="px-3 py-1 rounded-lg bg-white text-xs text-zinc-800 border border-zinc-200 font-bold"
                          >
                            {str}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Methodology */}
      <section className="py-20 bg-[#FAFAFA] border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <Badge variant="gold" size="md">
              DATA INTEGRITY FIRST
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
              Our 4-step safe data migration framework
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              Never worry about losing historical balances, customer ledgers, or inventory stock valuations during system migration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {migrationSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-zinc-200 shadow-xs space-y-3"
              >
                <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-800 border border-amber-200 flex items-center justify-center font-mono font-bold text-xs">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-bold text-zinc-900 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        defaultService={`Business Solution Consultation: ${selectedPlatform}`}
      />
    </div>
  );
}
