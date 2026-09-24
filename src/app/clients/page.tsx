"use client";

import React, { useState } from "react";
import { PageHeader } from "@/components/shared/PageHeader";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CLIENTS } from "@/data/company";
import { ConsultationModal } from "@/components/shared/ConsultationModal";
import {
  Building2,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Briefcase,
  Layers,
} from "lucide-react";

export default function ClientsPage() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <div className="flex flex-col w-full">
      <PageHeader
        badge="CLIENT PARTNERSHIPS"
        title="Powering operations for"
        highlight="leading Ghanaian enterprises."
        description="Explore how organizations across food manufacturing, infrastructure engineering, church ministry administration, IT, and pharmaceutical healthcare rely on Ledgerstack for software, training, and support."
      />

      {/* Client Showcase Grid */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
            {CLIENTS.map((client) => (
              <div
                key={client.id}
                className="p-5 sm:p-8 rounded-3xl bg-white border border-zinc-200/90 hover:border-amber-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800">
                      {client.badge}
                    </span>
                    <Building2 className="w-5 h-5 text-zinc-400 group-hover:text-amber-600 transition-colors" />
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight">
                      {client.name}
                    </h3>
                    <div className="text-xs text-zinc-500 mt-1 font-medium">
                      <strong>Sector:</strong> {client.industry}
                    </div>
                  </div>

                  <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed font-normal">
                    {client.description}
                  </p>

                  <div className="p-3.5 sm:p-4 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-1 text-xs text-zinc-700">
                    <div className="font-bold text-zinc-900 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                      <span>Focus Area</span>
                    </div>
                    <p className="text-zinc-600">{client.focusArea}</p>
                  </div>
                </div>

                <div className="pt-4 sm:pt-6 border-t border-zinc-100 mt-5 sm:mt-6 flex items-center justify-between text-xs font-semibold">
                  <span className="text-zinc-500">{client.solutionType}</span>
                  <span className="text-amber-800 font-bold">Active Client</span>
                </div>
              </div>
            ))}
          </div>

          {/* Become a Client Banner */}
          <div className="p-6 sm:p-12 rounded-3xl bg-zinc-950 text-white border border-zinc-800 text-center max-w-3xl mx-auto space-y-5 sm:space-y-6 shadow-xl">
            <h3 className="text-xl sm:text-3xl font-bold text-white tracking-tight">
              Ready to modernize your operations with Ledgerstack?
            </h3>
            <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto font-normal">
              Join forward-thinking businesses across Ghana that have transitioned from spreadsheet friction to unified business software.
            </p>
            <Button
              variant="primary"
              size="lg"
              onClick={() => setIsConsultationOpen(true)}
              showArrow
            >
              Request a Consultation
            </Button>
          </div>
        </div>
      </section>

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        title="Partner with Ledgerstack Technologies"
      />
    </div>
  );
}
