import React from "react";
import Link from "next/link";
import Image from "next/image";
import { COMPANY_INFO, SERVICES, SOFTWARE_PLATFORMS } from "@/data/company";
import { Phone, Mail, MapPin, ArrowUpRight, ShieldCheck, HeartHandshake, ArrowRight } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 text-zinc-400 text-sm relative overflow-hidden">
      {/* Subtle background gold glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-amber-500/5 blur-3xl pointer-events-none" />

      {/* Top CTA Strip */}
      <div className="border-b border-zinc-900 bg-zinc-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>Modernize Your Organization</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Let&apos;s build an efficient technology engine for your business.
              </h3>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 font-bold text-sm shadow-md shadow-amber-500/20 transition-all active:scale-95"
              >
                Schedule Consultation
              </Link>
              <a
                href={`tel:${COMPANY_INFO.phones[0]}`}
                className="px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 text-sm font-semibold transition-all hover:border-amber-500/40"
              >
                Call: {COMPANY_INFO.displayPhones[0]}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center shrink-0">
                <Image
                  src="/images/llogo.png"
                  alt="Ledgerstack Technologies Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white tracking-tight">Ledgerstack Technologies</span>
                <span className="text-xs text-amber-400 font-semibold tracking-wide">
                  {COMPANY_INFO.tagline}
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-md">
              A trusted Ghanaian business technology solutions company. We help growing organizations select, configure, and maintain accounting, ERP, web, and enterprise email systems that drive sustainable operational efficiency.
            </p>

            <div className="pt-2 space-y-2 text-xs">
              <div className="flex items-center gap-2.5 text-zinc-300">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5 text-zinc-300">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{COMPANY_INFO.displayPhones.join(" • ")}</span>
              </div>
              <div className="flex items-center gap-2.5 text-zinc-300">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-amber-400 transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/" className="hover:text-amber-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-400 transition-colors">
                  About Ledgerstack
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-amber-400 transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-amber-400 transition-colors">
                  Business Solutions
                </Link>
              </li>
              <li>
                <Link href="/clients" className="hover:text-amber-400 transition-colors">
                  Client Directory
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-amber-400 transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-400 transition-colors">
                  Contact & Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Col */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Services & Capabilities
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {SERVICES.map((srv) => (
                <li key={srv.id}>
                  <Link
                    href={srv.slug === "solutions" ? "/services" : `/${srv.slug}`}
                    className="hover:text-amber-400 transition-colors"
                  >
                    {srv.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/training" className="hover:text-amber-400 transition-colors">
                  Capacity Building Workshops
                </Link>
              </li>
            </ul>
          </div>

          {/* Software Platforms Col */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Supported Platforms
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {SOFTWARE_PLATFORMS.map((plat) => (
                <li key={plat.id}>
                  <Link
                    href={`/solutions#${plat.id}`}
                    className="hover:text-amber-400 transition-colors flex items-center justify-between"
                  >
                    <span>{plat.name}</span>
                    <ArrowUpRight className="w-3 h-3 text-zinc-600" />
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 p-3.5 rounded-2xl bg-zinc-900 border border-zinc-800">
              <div className="flex items-center gap-2 text-xs font-bold text-white mb-1">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>Dedicated Support</span>
              </div>
              <p className="text-[11px] text-zinc-400">
                Direct helpdesk assistance for live client installations across Ghana.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="mt-12 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© 2026 Ledgerstack Technologies Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-zinc-300">
              <HeartHandshake className="w-3.5 h-3.5 text-amber-400" />
              Ghanaian Technology & Business Solutions
            </span>
            <Link href="/contact" className="hover:text-zinc-300 transition-colors">
              Support Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
