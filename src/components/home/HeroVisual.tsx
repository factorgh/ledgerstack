"use client";

import React, { useState, useEffect } from "react";
import {
  Layers,
  BarChart3,
  Users,
  ShieldCheck,
  Mail,
  Cpu,
  Server,
  Zap,
  CheckCircle2,
  ArrowUpRight,
  Activity,
  Database,
  RefreshCw,
} from "lucide-react";

interface SystemModule {
  id: string;
  name: string;
  tagline: string;
  category: string;
  status: string;
  metric: string;
  metricLabel: string;
  description: string;
  technologies: string[];
}

export const HeroVisual: React.FC = () => {
  const [activeModule, setActiveModule] = useState<string>("accounting");
  const [livePulse, setLivePulse] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setLivePulse((prev) => (prev + 1) % 100);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const modules: SystemModule[] = [
    {
      id: "accounting",
      name: "Financial & Tax Accounting",
      tagline: "Voucher Speed & Local Compliance",
      category: "Accounting Systems",
      status: "Verified",
      metric: "100%",
      metricLabel: "Audit Trail Accuracy",
      description: "Automated VAT computation, bank reconciliations, multi-currency ledgers, and fast voucher entries.",
      technologies: ["TallyPrime", "QuickBooks", "Zoho Books"],
    },
    {
      id: "erp",
      name: "Enterprise ERP & Inventory",
      tagline: "Multi-Warehouse & Batch Control",
      category: "Operations & Supply Chain",
      status: "Live Sync",
      metric: "Real-time",
      metricLabel: "Stock Level Sync",
      description: "Bill of Materials (BOM), Point of Sale (POS), barcode scanning, expiry date tracking, and automated reorder triggers.",
      technologies: ["ERPNext", "Odoo ERP"],
    },
    {
      id: "training",
      name: "Team Capacity Building",
      tagline: "Practical Workflow Mastery",
      category: "Workforce Empowerment",
      status: "Certified",
      metric: "Hands-on",
      metricLabel: "Role-Based Modules",
      description: "Equipping finance teams, cashiers, and warehouse staff with muscle memory and error-prevention checklists.",
      technologies: ["Corporate Workshops", "1-on-1 Coaching"],
    },
    {
      id: "support",
      name: "24/7 Support & Cloud Email",
      tagline: "Continuous Operational Care",
      category: "Infrastructure & SLAs",
      status: "24/7 Active",
      metric: "Direct",
      metricLabel: "Ghanaian Hotline Access",
      description: "Routine database backups, system troubleshooting, DMARC/SPF email security, and version updates.",
      technologies: ["Google Workspace", "M365", "Remote Support"],
    },
  ];

  const current = modules.find((m) => m.id === activeModule) || modules[0];

  return (
    <div className="w-full max-w-xl lg:max-w-2xl mx-auto">
      {/* Outer Card Container */}
      <div className="rounded-3xl bg-white border border-zinc-200 shadow-xl overflow-hidden relative">
        {/* Top Metallic Gold Header Strip */}
        <div className="bg-zinc-950 px-4 sm:px-5 py-3 flex items-center justify-between border-b border-zinc-800 text-white">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-zinc-700" />
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-amber-400" />
            </div>
            <span className="text-[11px] sm:text-xs font-mono font-bold tracking-wider uppercase text-zinc-300 ml-1">
              Ledgerstack Core Engine
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="flex items-center gap-1.5 text-amber-400 bg-amber-950/60 border border-amber-500/30 px-2 sm:px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span>Operational</span>
            </span>
          </div>
        </div>

        {/* Interactive Architecture Hub */}
        <div className="p-3.5 sm:p-6 space-y-4 sm:space-y-6 bg-gradient-to-b from-[#FAF9F5] via-white to-white">
          {/* Central System Flow Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {modules.map((mod) => {
              const isSelected = mod.id === activeModule;
              return (
                <button
                  key={mod.id}
                  onClick={() => setActiveModule(mod.id)}
                  className={`p-2.5 sm:p-3 rounded-2xl text-left transition-all duration-200 border cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? "bg-zinc-950 text-white border-amber-500 shadow-md ring-2 ring-amber-500/20"
                      : "bg-white text-zinc-800 border-zinc-200 hover:border-amber-400 hover:bg-amber-50/30"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span
                      className={`w-6 h-6 sm:w-7 sm:h-7 rounded-xl flex items-center justify-center text-xs font-bold ${
                        isSelected
                          ? "bg-amber-500 text-zinc-950"
                          : "bg-amber-50 text-amber-800 border border-amber-200"
                      }`}
                    >
                      {mod.id === "accounting" && <Layers className="w-3.5 h-3.5" />}
                      {mod.id === "erp" && <Cpu className="w-3.5 h-3.5" />}
                      {mod.id === "training" && <Users className="w-3.5 h-3.5" />}
                      {mod.id === "support" && <ShieldCheck className="w-3.5 h-3.5" />}
                    </span>
                    {isSelected && (
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                    )}
                  </div>

                  <div>
                    <div className="text-[11px] sm:text-xs font-bold leading-tight line-clamp-1">
                      {mod.name.split(" ")[0]} {mod.name.split(" ")[1] || ""}
                    </div>
                    <div
                      className={`text-[9px] sm:text-[10px] font-mono mt-0.5 ${
                        isSelected ? "text-amber-400" : "text-zinc-500"
                      }`}
                    >
                      {mod.status}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Central Architecture Connector Banner */}
          <div className="relative rounded-2xl bg-zinc-950 text-white p-4 sm:p-6 border border-zinc-800 shadow-lg overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-3 sm:space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="text-[10px] sm:text-[11px] font-mono font-bold text-amber-400 uppercase tracking-wide">
                      {current.category}
                    </span>
                    <span className="text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-300 font-mono">
                      {current.tagline}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-xl font-bold text-white tracking-tight">
                    {current.name}
                  </h3>
                </div>

                <div className="flex items-center sm:flex-col sm:items-end justify-between sm:justify-start shrink-0 bg-zinc-900/80 sm:bg-transparent px-3 py-1.5 sm:p-0 rounded-xl sm:rounded-none border border-zinc-800/80 sm:border-0">
                  <div className="text-base sm:text-2xl font-extrabold text-amber-400 font-mono">
                    {current.metric}
                  </div>
                  <div className="text-[9px] sm:text-[10px] text-zinc-400 uppercase font-mono">
                    {current.metricLabel}
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                {current.description}
              </p>

              <div className="pt-3 border-t border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-zinc-400 text-[10px] sm:text-[11px] font-semibold">Supported:</span>
                  <div className="flex flex-wrap gap-1">
                    {current.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-md bg-zinc-900 border border-zinc-700 text-amber-300 font-mono text-[10px] sm:text-[11px]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-amber-400 font-semibold text-[11px] sm:text-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>Fully Managed &amp; Supported</span>
                </div>
              </div>
            </div>
          </div>

          {/* Real-Time Live Activity Ticker */}
          <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-200 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 text-xs">
            <div className="flex items-center gap-2 text-zinc-700">
              <Activity className="w-4 h-4 text-amber-600 animate-pulse shrink-0" />
              <span className="font-semibold text-zinc-900 text-xs">Live Ecosystem:</span>
              <span className="text-zinc-600 text-[11px] sm:text-xs">
                Ghanaian Multi-branch Sync verified
              </span>
            </div>
            <div className="flex items-center gap-1 text-amber-800 font-mono font-bold text-[10px] sm:text-[11px] shrink-0 self-start sm:self-auto">
              <RefreshCw className="w-3 h-3 text-amber-600" />
              <span>Real-Time Sync</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
