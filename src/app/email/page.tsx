"use client";

import React, { useState } from "react";
import { PageHeader } from "@/components/shared/PageHeader";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ConsultationModal } from "@/components/shared/ConsultationModal";
import {
  Mail,
  ShieldCheck,
  CheckCircle2,
  Lock,
  ArrowRight,
  Server,
  Cloud,
  Users,
  Smartphone,
} from "lucide-react";

export default function BusinessEmailPage() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("Custom Business Email Deployment");

  const emailFeatures = [
    {
      icon: ShieldCheck,
      title: "DNS Security & Deliverability (SPF / DKIM / DMARC)",
      desc: "Stop your emails from ending up in customer spam folders. We configure strict cryptographic authentication records that protect your domain reputation.",
    },
    {
      icon: Cloud,
      title: "Google Workspace & Microsoft 365",
      desc: "Full cloud office suites with integrated enterprise calendars, cloud storage (Google Drive / OneDrive), video meetings, and team chat.",
    },
    {
      icon: Server,
      title: "Zero-Downtime Email Migration",
      desc: "Upgrading from free @gmail/@yahoo or cPanel webmail? We migrate entire historical mailboxes, folders, and contact books without losing a single message.",
    },
    {
      icon: Smartphone,
      title: "Universal Device Sync",
      desc: "Seamless synchronization across iPhones, Android devices, Outlook, Apple Mail, and web browsers with push notifications.",
    },
  ];

  const handleConsult = (planName: string) => {
    setSelectedPlan(planName);
    setIsConsultationOpen(true);
  };

  return (
    <div className="flex flex-col w-full">
      <PageHeader
        badge="BUSINESS EMAIL &amp; CLOUD COLLABORATION"
        title="Professional email infrastructure that"
        highlight="builds customer trust."
        description="Stop sending corporate quotations from generic free email accounts. We set up, secure, and manage branded business email on Google Workspace, Microsoft 365, and private mail servers."
      />

      {/* Overview Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <Badge variant="gold" size="md">
              EMAIL INFRASTRUCTURE
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
              Why business email is non-negotiable for growing companies
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              Using a custom domain (@yourcompany.com) instantly validates your legitimacy with corporate procurement departments, banks, and prospective clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {emailFeatures.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-white border border-zinc-200/90 hover:border-amber-400 hover:shadow-md transition-all duration-300 space-y-4"
                >
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 tracking-tight">
                    {feat.title}
                  </h3>
                  <p className="text-zinc-600 text-sm leading-relaxed font-normal">
                    {feat.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Call to action card */}
          <div className="p-8 sm:p-12 rounded-3xl bg-zinc-950 text-white border border-zinc-800 text-center max-w-3xl mx-auto space-y-6 shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Ready to upgrade your organizational email?
            </h3>
            <p className="text-sm text-zinc-300 max-w-xl mx-auto leading-relaxed">
              We handle domain purchasing, DNS verification, mailbox creation, historical migration, and user setup.
            </p>
            <Button
              variant="primary"
              size="lg"
              onClick={() => handleConsult("Enterprise Email Setup")}
              icon={Mail}
              showArrow
            >
              Get Custom Business Email
            </Button>
          </div>
        </div>
      </section>

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        defaultService={selectedPlan}
        title="Inquire About Business Email Solutions"
      />
    </div>
  );
}
