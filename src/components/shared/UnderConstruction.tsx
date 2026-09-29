"use client";

import React from "react";
import Image from "next/image";
import {
  Wrench,
  Construction,
  Phone,
  Mail,
  MessageSquare,
  Clock,
  ShieldAlert,
  Layers,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export const UnderConstruction: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#09090b] text-zinc-100 flex flex-col justify-between overflow-hidden selection:bg-amber-500/30 selection:text-amber-300">
      {/* Background ambient lighting & grid patterns */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-40" />
      
      {/* Glowing radial gradient orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none animate-pulse-subtle" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Top Header Bar */}
      <header className="relative z-10 border-b border-zinc-800/80 bg-zinc-950/60 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 flex items-center justify-center p-1 rounded-xl bg-zinc-900 border border-zinc-800 shadow-inner">
              <Image
                src="/images/llogo.png"
                alt="Ledgerstack Technologies Logo"
                width={36}
                height={36}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div>
              <div className="text-base sm:text-lg font-bold tracking-tight text-white flex items-center gap-1.5">
                Ledgerstack
                <span className="text-xs font-semibold text-amber-400 font-mono tracking-wider uppercase">
                  Technologies
                </span>
              </div>
              <p className="text-[10px] text-zinc-400 font-medium tracking-wider uppercase hidden sm:block">
                Driving efficiency through technology
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            <span>Maintenance Mode</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="max-w-3xl w-full text-center">
          
          {/* Animated Status Icon */}
          <div className="inline-flex items-center justify-center mb-8">
            <div className="relative">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-br from-amber-500/20 via-zinc-900 to-zinc-950 border border-amber-500/40 flex items-center justify-center shadow-[0_0_40px_rgba(217,119,6,0.25)]">
                <Construction className="w-10 h-10 sm:w-12 sm:h-12 text-amber-400 animate-bounce" style={{ animationDuration: "2.5s" }} />
              </div>
              <div className="absolute -bottom-2 -right-2 p-2 rounded-xl bg-zinc-900 border border-zinc-700 shadow-md">
                <Wrench className="w-4 h-4 text-amber-300" />
              </div>
            </div>
          </div>

          {/* Heading and Subtitle */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs sm:text-sm font-medium mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Scheduled Platform Updates In Progress</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight sm:leading-tight">
            Website Under <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">
              Construction
            </span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            We are currently upgrading our systems and infrastructure to provide you with an even faster, more seamless experience. We apologize for any temporary inconvenience and will be back shortly.
          </p>

          {/* Feature highlights grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 text-left">
            <div className="p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800/90 backdrop-blur-sm">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-3">
                <Clock className="w-4 h-4 text-amber-400" />
              </div>
              <h3 className="text-sm font-semibold text-white mb-1">Status</h3>
              <p className="text-xs text-zinc-400">System maintenance & enhancements ongoing</p>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800/90 backdrop-blur-sm">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-3">
                <Layers className="w-4 h-4 text-amber-400" />
              </div>
              <h3 className="text-sm font-semibold text-white mb-1">Services</h3>
              <p className="text-xs text-zinc-400">ERP, TallyPrime, QuickBooks & IT solutions</p>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800/90 backdrop-blur-sm">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-3">
                <ShieldAlert className="w-4 h-4 text-amber-400" />
              </div>
              <h3 className="text-sm font-semibold text-white mb-1">Direct Support</h3>
              <p className="text-xs text-zinc-400">Our customer support lines remain 100% active</p>
            </div>
          </div>

          {/* Direct Contact Callout Box */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-zinc-900/90 to-zinc-950 border border-zinc-800/80 shadow-2xl backdrop-blur-md">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-2">
              Need immediate assistance or software consultation?
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mb-6">
              Our technical consultants and project team are available to take your calls and messages.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              {/* WhatsApp CTA */}
              <a
                href={COMPANY_INFO.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-zinc-950 font-bold text-sm hover:from-amber-400 hover:to-amber-500 transition-all shadow-[0_4px_16px_rgba(217,119,6,0.3)] active:scale-95"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              {/* Call Primary */}
              <a
                href={`tel:${COMPANY_INFO.phones[0]}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700/80 border border-zinc-700 text-white font-semibold text-sm transition-all active:scale-95"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>{COMPANY_INFO.displayPhones[0]}</span>
              </a>

              {/* Email Button */}
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700/80 border border-zinc-700 text-white font-semibold text-sm transition-all active:scale-95"
              >
                <Mail className="w-4 h-4 text-amber-400" />
                <span>{COMPANY_INFO.email}</span>
              </a>
            </div>
          </div>

        </div>
      </main>

      {/* Bottom Footer Bar */}
      <footer className="relative z-10 border-t border-zinc-900 bg-zinc-950/80 backdrop-blur-md py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 text-center sm:text-left">
          <div>
            &copy; {new Date().getFullYear()} {COMPANY_INFO.legalName}. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-zinc-400">
            <span>{COMPANY_INFO.location}</span>
            <span>•</span>
            <a href={`tel:${COMPANY_INFO.phones[1]}`} className="hover:text-amber-400 transition-colors">
              {COMPANY_INFO.displayPhones[1]}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
