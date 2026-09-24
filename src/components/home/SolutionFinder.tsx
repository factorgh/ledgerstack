"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ConsultationModal } from "@/components/shared/ConsultationModal";
import {
  ArrowRight,
  RotateCcw,
  CheckCircle2,
  Cpu,
  Layers,
  HelpCircle,
  TrendingUp,
  ShieldAlert,
} from "lucide-react";

interface QuestionStep {
  key: string;
  title: string;
  subtitle: string;
  options: { label: string; value: string; desc: string }[];
}

export const SolutionFinder: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({
    businessSize: "",
    industry: "",
    mainChallenge: "",
    userCount: "",
    currentSystem: "",
  });
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const steps: QuestionStep[] = [
    {
      key: "businessSize",
      title: "What is the size of your organization?",
      subtitle: "This helps us identify the right system scale and licensing model.",
      options: [
        { label: "Small Business / Startup", value: "small", desc: "1 to 10 employees, agile operational requirements" },
        { label: "Mid-Sized Enterprise", value: "mid", desc: "11 to 50 employees, multiple departments or branches" },
        { label: "Growing Enterprise", value: "large", desc: "50+ employees, complex workflows and multi-branch control" },
      ],
    },
    {
      key: "industry",
      title: "Which industry best describes your business?",
      subtitle: "Specific sectors require specialized compliance, inventory or POS features.",
      options: [
        { label: "Wholesale, Trading & Distribution", value: "trading", desc: "High volume inventory, multi-warehouse, batch numbers" },
        { label: "Retail & Pharmacy / Healthcare", value: "retail", desc: "Point of sale (POS), barcode scanning, expiry dates" },
        { label: "Engineering, Construction & Projects", value: "construction", desc: "Project job costing, vendor tracking, milestone billing" },
        { label: "Professional Services & Agencies", value: "services", desc: "Time tracking, recurring client invoicing, expense flows" },
        { label: "Manufacturing & Processing", value: "manufacturing", desc: "Bill of Materials (BOM), production planning, raw materials" },
      ],
    },
    {
      key: "mainChallenge",
      title: "What is your primary operational bottleneck?",
      subtitle: "Tell us where your team experiences the most friction.",
      options: [
        { label: "Inventory Discrepancies & Stock Leakages", value: "inventory", desc: "Stock counts don't match books, untracked transfers" },
        { label: "Delayed Financial & VAT Reporting", value: "reporting", desc: "Takes days or weeks to get monthly balance sheets or tax figures" },
        { label: "Manual Data Entry & Spreadsheet Chaos", value: "manual", desc: "Data duplicated across multiple unstructured spreadsheets" },
        { label: "Lack of Post-Implementation Support", value: "support", desc: "Previous systems failed because no one was around to assist" },
      ],
    },
    {
      key: "userCount",
      title: "How many staff members will actively use the system?",
      subtitle: "Helps balance concurrent users and training group sizes.",
      options: [
        { label: "1 – 3 Core Users", value: "1-3", desc: "Owner, key cashier, and principal accountant" },
        { label: "4 – 10 Team Members", value: "4-10", desc: "Finance team, warehouse controller, branch managers" },
        { label: "10+ Multi-Department Users", value: "10+", desc: "Cross-functional users across sales, accounts, operations, HR" },
      ],
    },
  ];

  const handleSelectOption = (value: string) => {
    const currentKey = steps[currentStep].key;
    const newAnswers = { ...answers, [currentKey]: value };
    setAnswers(newAnswers);

    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setCurrentStep(steps.length);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({
      businessSize: "",
      industry: "",
      mainChallenge: "",
      userCount: "",
      currentSystem: "",
    });
  };

  const getRecommendation = () => {
    const { industry, businessSize, mainChallenge } = answers;

    if (industry === "trading" || industry === "manufacturing") {
      if (businessSize === "large") {
        return {
          primary: "ERPNext or Odoo ERP",
          fitReason: "Comprehensive multi-warehouse control, Bill of Materials (BOM), batch tracking, and full enterprise workflow customization without per-seat software tax.",
          complementary: ["Staff Capacity Building Workshops", "Data Migration & Sanitization", "24/7 Support SLA"],
          alternative: "TallyPrime for high-speed multi-branch trading",
        };
      }
      return {
        primary: "TallyPrime",
        fitReason: "Industry standard for rapid keyboard-driven transaction entry, robust multi-location inventory, batch tracking, and reliable VAT compliance.",
        complementary: ["Inventory Management Setup", "Accountant Hands-On Training", "Monthly Health Checks"],
        alternative: "ERPNext or Odoo",
      };
    }

    if (industry === "retail") {
      return {
        primary: "TallyPrime or Odoo POS & Inventory",
        fitReason: "Fast barcode-compatible Point of Sale, instant batch and expiry date tracking, and automated stock replenishment alerts.",
        complementary: ["Cashier & Supervisor Training", "POS Hardware Configuration", "Ongoing System Maintenance"],
        alternative: "QuickBooks with Retail Add-ons",
      };
    }

    if (industry === "services" || businessSize === "small") {
      return {
        primary: "QuickBooks or Zoho Books",
        fitReason: "Intuitive cloud accounting with automated recurring billing, client approval portals, bank feed reconciliations, and mobile accessibility for leadership.",
        complementary: ["Custom Domain Business Email", "Chart of Accounts Configuration", "Executive Dashboard Setup"],
        alternative: "TallyPrime",
      };
    }

    return {
      primary: "TallyPrime / ERPNext",
      fitReason: "A balanced, dependable platform providing rigorous financial controls, inventory visibility, and scalable reporting for Ghanaian enterprises.",
      complementary: ["Workflow Assessment & Setup", "Corporate Team Training", "Dedicated Technical Helpdesk"],
      alternative: "QuickBooks or Odoo",
    };
  };

  const recommendation = getRecommendation();

  return (
    <section className="py-20 lg:py-28 bg-white border-t border-zinc-200/80 relative overflow-hidden">
      {/* Background gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <Badge variant="gold" size="md">
            INTERACTIVE SOLUTION RECOMMENDER
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
            Not sure which solution is right for your business?
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Answer 4 quick operational questions. We will analyze your workflow profile and suggest suitable technologies to explore.
          </p>
        </div>

        {/* Questionnaire Box */}
        <div className="rounded-3xl bg-white border border-zinc-200 p-6 sm:p-10 shadow-lg">
          {currentStep < steps.length ? (
            <div className="space-y-6">
              {/* Progress Indicator */}
              <div className="flex items-center justify-between gap-2 text-xs font-mono text-zinc-500 pb-4 border-b border-zinc-100 font-semibold">
                <span>
                  Question {currentStep + 1} of {steps.length}
                </span>
                <div className="flex gap-1.5">
                  {steps.map((_, i) => (
                    <div
                      key={i}
                      className={`w-8 h-1.5 rounded-full transition-all ${
                        i <= currentStep ? "bg-amber-500" : "bg-zinc-200"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Step Header */}
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight">
                  {steps[currentStep].title}
                </h3>
                <p className="text-sm text-zinc-500">
                  {steps[currentStep].subtitle}
                </p>
              </div>

              {/* Options Grid */}
              <div className="grid grid-cols-1 gap-3 pt-2">
                {steps[currentStep].options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleSelectOption(option.value)}
                    className="p-4 rounded-2xl bg-zinc-50/70 border border-zinc-200 hover:border-amber-500 hover:bg-amber-50/40 text-left transition-all duration-200 group flex items-start justify-between gap-4 cursor-pointer"
                  >
                    <div>
                      <div className="text-sm sm:text-base font-bold text-zinc-900 group-hover:text-amber-800 transition-colors">
                        {option.label}
                      </div>
                      <div className="text-xs text-zinc-600 mt-0.5">
                        {option.desc}
                      </div>
                    </div>
                    <div className="w-6 h-6 rounded-full border border-zinc-300 group-hover:border-amber-500 group-hover:bg-amber-500 group-hover:text-white flex items-center justify-center shrink-0 mt-0.5 transition-colors">
                      <ArrowRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white transition-colors" />
                    </div>
                  </button>
                ))}
              </div>

              {/* Back button if past step 1 */}
              {currentStep > 0 && (
                <div className="pt-2">
                  <button
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="text-xs text-zinc-500 hover:text-zinc-900 font-semibold transition-colors cursor-pointer"
                  >
                    ← Back to previous question
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* Results View */
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="flex items-center justify-between pb-4 border-b border-zinc-100">
                <div className="inline-flex items-center gap-2 text-amber-700 text-xs font-bold uppercase tracking-wider font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                  <span>Customized Assessment Summary</span>
                </div>
                <button
                  onClick={handleReset}
                  className="text-xs text-zinc-500 hover:text-zinc-900 font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Start Over</span>
                </button>
              </div>

              <div className="space-y-1.5">
                <span className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wide">
                  Recommended Technology Architecture
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight">
                  {recommendation.primary}
                </h3>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200/90 text-xs sm:text-sm text-zinc-800 leading-relaxed space-y-2 font-medium">
                <div className="font-bold text-amber-900 flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4 text-amber-700" />
                  <span>Why this aligns with your profile:</span>
                </div>
                <p className="text-zinc-700">{recommendation.fitReason}</p>
              </div>

              {/* Complementary Services Recommended */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-zinc-700">
                  Recommended Complementary Services:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                  {recommendation.complementary.map((comp, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-800 font-medium flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                      <span>{comp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Informational Disclaimer */}
              <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200 text-[11px] text-zinc-600 leading-relaxed flex items-start gap-2">
                <HelpCircle className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Informational Notice:</strong> Based on your answers, these solutions may be worth exploring. Actual implementation choices require a thorough operational audit of your charts of accounts and workflow requirements.
                </span>
              </div>

              {/* Next Step CTA */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto"
                  onClick={() => setIsConsultationOpen(true)}
                  showArrow
                >
                  Discuss This Recommendation with Ledgerstack
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                  href="/solutions"
                >
                  View All Supported Platforms
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        defaultService={`Interactive Recommendation Review: ${recommendation.primary}`}
        title="Discuss Your Solution Recommendation"
      />
    </section>
  );
};
