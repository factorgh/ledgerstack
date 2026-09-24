"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ConsultationModal } from "@/components/shared/ConsultationModal";
import {
  Headphones,
  ShieldCheck,
  Phone,
  RefreshCw,
  Database,
  LifeBuoy,
  ArrowRight,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export const SupportBanner: React.FC = () => {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const supportFeatures = [
    {
      icon: LifeBuoy,
      title: "Direct Helpdesk Assistance",
      desc: "Instant telephone, email, and remote desktop access for live operators and accounting personnel.",
    },
    {
      icon: Database,
      title: "Data Backup & Integrity Care",
      desc: "Advisory and routine verification routines to ensure zero data loss from hardware or power faults.",
    },
    {
      icon: RefreshCw,
      title: "Configuration & Report Tuning",
      desc: "Updating VAT rates, adding custom ledger fields, and modifying balance sheet reports as your needs grow.",
    },
    {
      icon: ShieldCheck,
      title: "System Health Checks",
      desc: "Periodic diagnostic audits, index cleanups, and software version update management.",
    },
  ];

  return (
    <section className="py-14 sm:py-20 lg:py-28 bg-zinc-950 text-white relative overflow-hidden border-t border-zinc-900">
      {/* Visual background elements */}
      <div className="absolute inset-0 bg-grid-pattern-light opacity-10" />
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6">
            <Badge variant="dark" size="md">
              CONTINUED PEACE OF MIND
            </Badge>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              We&apos;re here <span className="text-gradient-gold-light">after implementation.</span>
            </h2>

            <p className="text-zinc-300 text-sm sm:text-base lg:text-lg leading-relaxed font-normal">
              Your technology journey doesn&apos;t end when the system goes live. Ledgerstack provides ongoing support to help users resolve issues, understand their systems, and keep business operations moving.
            </p>

            <div className="p-3.5 sm:p-4 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-2">
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wider font-mono">
                Support Advisory Hotlines
              </div>
              <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm font-mono text-zinc-200">
                <a href={`tel:${COMPANY_INFO.phones[0]}`} className="hover:text-amber-400 hover:underline flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  {COMPANY_INFO.displayPhones[0]}
                </a>
                <a href={`tel:${COMPANY_INFO.phones[1]}`} className="hover:text-amber-400 hover:underline flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  {COMPANY_INFO.displayPhones[1]}
                </a>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={() => setIsConsultationOpen(true)}
                icon={Headphones}
              >
                Get Support
              </Button>

              <Button
                variant="outline"
                size="lg"
                href="/support"
                showArrow
                className="bg-zinc-900 text-white border-zinc-700 hover:bg-zinc-800"
              >
                View Support Details
              </Button>
            </div>
          </div>

          {/* Right Column: 4 Support Feature Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
            {supportFeatures.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800 hover:border-amber-400/50 hover:bg-zinc-900 transition-all space-y-3 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white tracking-tight group-hover:text-amber-300 transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                    {feat.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        defaultService="24/7 Support & Maintenance"
        title="Request Support Services"
      />
    </section>
  );
};
