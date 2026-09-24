"use client";

import React, { useState } from "react";
import { PageHeader } from "@/components/shared/PageHeader";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ConsultationModal } from "@/components/shared/ConsultationModal";
import {
  GraduationCap,
  Users,
  CheckCircle2,
  BookOpen,
  Calendar,
  ArrowRight,
  ShieldCheck,
  Building,
  Award,
  Clock,
} from "lucide-react";

export default function TrainingPage() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState("Corporate Team Training");

  const trainingTracks = [
    {
      id: "tally",
      title: "TallyPrime Operational Mastery",
      badge: "Accounting & Inventory",
      target: "Accountants, Inventory Officers, Data Entry Staff",
      duration: "Flexible Modular Schedule (3 - 5 Days)",
      modules: [
        "Company creation, chart of accounts & ledger setup",
        "Voucher entries: Sales, Purchases, Receipts, Payments & Journals",
        "Multi-location inventory, stock transfers & batch tracking",
        "Ghana VAT, withholding taxes & compliance reporting",
        "Bank reconciliation statements & month-end closing procedures",
        "Audit trail tracking and management MIS reports",
      ],
    },
    {
      id: "quickbooks",
      title: "QuickBooks Cloud & Desktop Workflows",
      badge: "Financial Management",
      target: "Finance Teams, Small Business Owners, Office Managers",
      duration: "Practical Interactive Sessions (3 Days)",
      modules: [
        "Customer & vendor database setup with custom terms",
        "Automated bank feed synchronization & transaction rules",
        "Invoicing, recurring sales receipts & customer payment tracking",
        "Bill processing, purchase orders & vendor expense allocation",
        "Class tracking for multi-department project profitability",
        "Balance sheet, P&L & cashflow statement generation",
      ],
    },
    {
      id: "erp",
      title: "ERPNext & Odoo Enterprise Operations",
      badge: "Integrated ERP",
      target: "Operations Leads, Warehouse Managers, Procurement Officers",
      duration: "Departmental Deep-Dives (4 - 7 Days)",
      modules: [
        "Navigating integrated role workspaces & permission matrices",
        "Procurement cycles: Material Requests, RFQs, Purchase Orders & Goods Receipts",
        "Sales workflows: Quotations, Sales Orders, Delivery Notes & POS transactions",
        "Manufacturing: Bill of Materials (BOM) & Work Order management",
        "HR & Payroll: Attendance logging, salary slips & leave tracking",
      ],
    },
    {
      id: "executive",
      title: "Executive Financial Dashboard Interpretation",
      badge: "Leadership Track",
      target: "CEOs, Managing Directors, Board Members, Entrepreneurs",
      duration: "1-Day Intensive Masterclass",
      modules: [
        "Decoding balance sheets, working capital ratios & cashflow statements",
        "Spotting inventory leakages and unusual expense variances",
        "Configuring custom executive KPI dashboards and automated email reports",
        "Internal control mechanisms & anti-fraud audit trail reviews",
      ],
    },
  ];

  const deliveryModels = [
    {
      icon: Building,
      title: "On-Site Corporate Workshops",
      desc: "Conducted directly at your offices across Ghana. We train your staff on their actual machines and sample transactional data.",
    },
    {
      icon: Users,
      title: "Group Capacity Building Batches",
      desc: "Scheduled cohort-based training for accounting graduates, job seekers, and individual professionals seeking in-demand software skills.",
    },
    {
      icon: Award,
      title: "1-on-1 Executive Coaching",
      desc: "Private, high-impact sessions for business owners and executives focusing on strategic dashboard interpretation and internal controls.",
    },
  ];

  const handleBook = (trackTitle: string) => {
    setSelectedTrack(trackTitle);
    setIsConsultationOpen(true);
  };

  return (
    <div className="flex flex-col w-full">
      <PageHeader
        badge="CAPACITY BUILDING &amp; WORKSHOPS"
        title="Transform software into"
        highlight="real operational capability."
        description="Software produces value only when teams have the muscle memory to use it accurately. We deliver practical, scenario-based training for Ghanaian corporate teams, finance professionals, and business leaders."
      />

      {/* Course Tracks Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <Badge variant="gold" size="md">
              CURRICULUM TRACKS
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
              Structured training programs for every operational role
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              Every course is built around practical Ghanaian business scenarios, not generic textbook theory.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {trainingTracks.map((track) => (
              <div
                key={track.id}
                className="p-8 rounded-3xl bg-white border border-zinc-200/90 hover:border-amber-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800">
                      {track.badge}
                    </span>
                    <span className="text-xs text-zinc-500 font-medium flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-zinc-400" />
                      {track.duration}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight">
                      {track.title}
                    </h3>
                    <div className="text-xs text-zinc-500 mt-1 font-medium">
                      <strong className="text-zinc-700">Target Audience:</strong> {track.target}
                    </div>
                  </div>

                  <div className="space-y-2.5 pt-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                      Core Modules Covered
                    </div>
                    {track.modules.map((mod, mIdx) => (
                      <div
                        key={mIdx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700"
                      >
                        <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <span>{mod}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 border-t border-zinc-100 mt-6 flex items-center justify-between">
                  <Button
                    variant="primary"
                    size="md"
                    onClick={() => handleBook(track.title)}
                    icon={GraduationCap}
                  >
                    Book This Training
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Formats */}
      <section className="py-20 bg-[#FAFAFA] border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <Badge variant="gold" size="md">
              FLEXIBLE DELIVERY
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
              How we deliver training
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {deliveryModels.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-white border border-zinc-200 shadow-xs space-y-4"
                >
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 border border-amber-200 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        defaultService={`Training Inquiry: ${selectedTrack}`}
        title="Schedule Training Session"
      />
    </div>
  );
}
