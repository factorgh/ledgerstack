"use client";

import React, { useState } from "react";
import { PageHeader } from "@/components/shared/PageHeader";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ConsultationModal } from "@/components/shared/ConsultationModal";
import { COMPANY_INFO } from "@/data/company";
import {
  Headphones,
  ShieldCheck,
  Phone,
  Mail,
  RefreshCw,
  Database,
  LifeBuoy,
  CheckCircle2,
  AlertTriangle,
  FileCheck,
} from "lucide-react";

export default function SupportPage() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const supportTiers = [
    {
      title: "Routine User Assistance & Helpdesk",
      desc: "Day-to-day operational support for accountants and cashiers experiencing voucher errors, negative stock alerts, or reconciliation confusion.",
      items: ["Telephone & WhatsApp hotline support", "Remote desktop intervention (AnyDesk/TeamViewer)", "Transaction reversal & adjustment guidance", "User login & access privilege resets"],
    },
    {
      title: "System Maintenance & Health Checks",
      desc: "Proactive database reviews and index cleanups to prevent software slowdowns, database crashes, and corrupt ledger tables.",
      items: ["Periodic database file size optimization", "Error log analysis & bug patches", "Version update installation & testing", "Audit trail validation"],
    },
    {
      title: "Data Backup & Recovery Advisory",
      desc: "Structuring automated local and off-site cloud backup routines to ensure complete resilience against power surges or hardware failures.",
      items: ["Automated daily/weekly backup configuration", "Cloud sync setup (Google Drive / OneDrive / NAS)", "Disaster recovery dry-run simulations", "Corrupted ledger database restoration advisory"],
    },
    {
      title: "Custom Reporting & Parameter Tweaks",
      desc: "Modifying system parameters as your organizational structure, tax laws, or executive reporting needs change.",
      items: ["New VAT / Withholding tax rule adjustments", "Custom invoice & receipt voucher layouts", "Multi-branch cost center restructuring", "New employee onboarding & refresher sessions"],
    },
  ];

  return (
    <div className="flex flex-col w-full">
      <PageHeader
        badge="24/7 SUPPORT ON IMPLEMENTED BUSINESS SOLUTIONS"
        title="We stay in your corner"
        highlight="after implementation."
        description="Go-live is not the end of our relationship; it is the beginning of your daily operational rhythm. We provide dependable 24/7 post-implementation support, proactive maintenance, and immediate troubleshooting for your implemented business solutions across Ghana."
      />

      {/* Direct Contact Bar */}
      <section className="py-8 bg-zinc-950 text-white border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wider font-mono">
                Immediate Operational Assistance
              </div>
              <p className="text-sm text-zinc-300">
                Are your operators or finance team currently experiencing a software blocker?
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`tel:${COMPANY_INFO.phones[0]}`}
                className="px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-700 text-white font-mono text-xs hover:border-amber-400 transition-colors flex items-center gap-2 font-bold"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                {COMPANY_INFO.displayPhones[0]}
              </a>
              <a
                href={`tel:${COMPANY_INFO.phones[1]}`}
                className="px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-700 text-white font-mono text-xs hover:border-amber-400 transition-colors flex items-center gap-2 font-bold"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                {COMPANY_INFO.displayPhones[1]}
              </a>
              <Button
                variant="primary"
                size="sm"
                onClick={() => setIsConsultationOpen(true)}
                icon={Headphones}
              >
                Open Support Ticket
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Support Tiers Grid */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <Badge variant="gold" size="md">
              CORE SUPPORT PILLARS
            </Badge>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
              Comprehensive operational care for your software ecosystem
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
            {supportTiers.map((tier, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-8 rounded-3xl bg-white border border-zinc-200/90 hover:border-amber-400 hover:shadow-md transition-all duration-300 space-y-4"
              >
                <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-800 border border-amber-200 flex items-center justify-center font-mono font-bold text-xs">
                  0{idx + 1}
                </div>

                <h3 className="text-xl font-bold text-zinc-900 tracking-tight">
                  {tier.title}
                </h3>

                <p className="text-zinc-600 text-sm leading-relaxed font-normal">
                  {tier.desc}
                </p>

                <div className="space-y-2 pt-2 border-t border-zinc-100">
                  {tier.items.map((item, iIdx) => (
                    <div key={iIdx} className="flex items-center gap-2 text-xs sm:text-sm text-zinc-700">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        defaultService="24/7 Support & Maintenance Agreement"
        title="Inquire About Ongoing Support Plans"
      />
    </div>
  );
}
