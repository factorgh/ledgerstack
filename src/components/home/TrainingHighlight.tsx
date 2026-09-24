"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ConsultationModal } from "@/components/shared/ConsultationModal";
import {
  GraduationCap,
  Users,
  CheckCircle2,
  BookOpen,
  ArrowRight,
  Calculator,
  Briefcase,
  FileCheck,
} from "lucide-react";

export const TrainingHighlight: React.FC = () => {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const audiences = [
    { title: "Corporate Teams", desc: "Cross-departmental standard operating procedures and role-based data entries" },
    { title: "Finance & Accounting", desc: "Bank reconciliations, VAT & tax computation, multi-currency, and month-end closes" },
    { title: "Business Owners & Executives", desc: "Reading real-time management reports, cash flow audits, and inventory KPIs" },
    { title: "Students & Job Seekers", desc: "Hands-on software skills in Tally, QuickBooks & ERPs that fast-track employment" },
  ];

  return (
    <section className="py-14 sm:py-20 lg:py-28 bg-white border-t border-zinc-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-zinc-950 via-zinc-900 to-black text-white border border-zinc-800 p-5 sm:p-10 lg:p-16 shadow-2xl relative overflow-hidden">
          {/* Ambient gold lighting */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-5 sm:space-y-6">
              <Badge variant="dark" size="md">
                CAPACITY BUILDING &amp; WORKSHOPS
              </Badge>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Turn software into <span className="text-gradient-gold-light">capability.</span>
              </h2>

              <p className="text-zinc-300 text-sm sm:text-base lg:text-lg leading-relaxed font-normal">
                Even the most powerful business software produces zero return if your team hesitates to use it. We transform complex software workflows into clear, repeatable daily habits through hands-on, practical simulation.
              </p>

              <div className="space-y-2.5 sm:space-y-3 pt-1">
                {[
                  "Hands-on exercises with real transaction scenarios",
                  "Role-based focus: cashiers, warehouse leads, accountants, and executives",
                  "Post-training job aids, error-prevention checklists, and support",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-200">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => setIsConsultationOpen(true)}
                  icon={GraduationCap}
                >
                  Book Training Session
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  href="/training"
                  showArrow
                  className="bg-zinc-900 text-white border-zinc-700 hover:bg-zinc-800"
                >
                  Explore Course Modules
                </Button>
              </div>
            </div>

            {/* Right Audience Grid */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {audiences.map((aud, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800 hover:border-amber-400/50 hover:bg-zinc-900 transition-all space-y-2 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center">
                    <Users className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                    {aud.title}
                  </h3>
                  <p className="text-xs text-zinc-300 leading-relaxed font-normal">
                    {aud.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        defaultService="Training & Capacity Building"
        title="Inquire About Training Workshops"
      />
    </section>
  );
};
