"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { ConsultationModal } from "@/components/shared/ConsultationModal";
import {
  Layers,
  ChevronDown,
  Menu,
  X,
  Phone,
  ArrowUpRight,
  GraduationCap,
  Palette,
  Headphones,
  Mail,
} from "lucide-react";
import { SERVICES, SOFTWARE_PLATFORMS, COMPANY_INFO } from "@/data/company";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setSolutionsDropdownOpen(false);
  }, [pathname]);

  const serviceIcons: Record<string, React.ReactNode> = {
    "business-solutions": <Layers className="w-4 h-4 text-amber-600" />,
    "training-capacity": <GraduationCap className="w-4 h-4 text-amber-600" />,
    "web-graphic-design": <Palette className="w-4 h-4 text-amber-600" />,
    "support-maintenance": <Headphones className="w-4 h-4 text-amber-600" />,
    "business-email": <Mail className="w-4 h-4 text-amber-600" />,
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          isScrolled
            ? "bg-white/92 backdrop-blur-xl border-b border-zinc-200/90 shadow-sm py-3"
            : "bg-white/70 backdrop-blur-md border-b border-zinc-100 py-4.5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo: Official Brand Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center shrink-0">
                <Image
                  src="/images/llogo.png"
                  alt="Ledgerstack Technologies Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-bold tracking-tight text-zinc-950 group-hover:text-amber-600 transition-colors">
                  Ledgerstack
                  <span className="text-xs font-semibold text-amber-600 ml-1.5 hidden sm:inline tracking-normal uppercase font-mono">
                    Technologies
                  </span>
                </span>
                <span className="text-[10px] text-zinc-500 tracking-wider uppercase font-medium hidden md:block">
                  Driving efficiency through technology
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
              <Link
                href="/"
                className={cn(
                  "px-3 py-1.5 rounded-xl text-xs xl:text-sm font-semibold transition-colors",
                  pathname === "/" ? "text-amber-800 bg-amber-50 font-bold" : "text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100/80"
                )}
              >
                Home
              </Link>

              <Link
                href="/about"
                className={cn(
                  "px-3 py-1.5 rounded-xl text-xs xl:text-sm font-semibold transition-colors",
                  pathname === "/about" ? "text-amber-800 bg-amber-50 font-bold" : "text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100/80"
                )}
              >
                About
              </Link>

              {/* Services Mega Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <button
                  className={cn(
                    "px-3 py-1.5 rounded-xl text-xs xl:text-sm font-semibold flex items-center gap-1 transition-colors cursor-pointer",
                    pathname.startsWith("/services") || pathname.startsWith("/training") || pathname.startsWith("/web-design") || pathname.startsWith("/support") || pathname.startsWith("/email")
                      ? "text-amber-800 bg-amber-50 font-bold"
                      : "text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100/80"
                  )}
                >
                  <span>Services</span>
                  <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-200 text-zinc-500", servicesDropdownOpen && "rotate-180 text-amber-600")} />
                </button>

                {servicesDropdownOpen && (
                  <div className="absolute top-full left-0 w-84 pt-2 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="bg-white border border-zinc-200 rounded-2xl shadow-xl p-2.5 space-y-1">
                      <div className="px-3 py-2 border-b border-zinc-100 flex items-center justify-between">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-500">Core Services</span>
                        <Link href="/services" className="text-[11px] font-semibold text-amber-600 hover:underline flex items-center gap-0.5">
                          All Services <ArrowUpRight className="w-3 h-3" />
                        </Link>
                      </div>

                      {SERVICES.map((srv) => (
                        <Link
                          key={srv.id}
                          href={srv.slug === "solutions" ? "/services" : `/${srv.slug}`}
                          className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-amber-50/60 transition-colors group/item"
                        >
                          <div className="p-2 bg-zinc-50 rounded-xl border border-zinc-200 group-hover/item:border-amber-400 group-hover/item:bg-amber-100/50 transition-colors shrink-0">
                            {serviceIcons[srv.id]}
                          </div>
                          <div>
                            <div className="text-xs font-bold text-zinc-900 group-hover/item:text-amber-800 transition-colors">
                              {srv.title}
                            </div>
                            <div className="text-[11px] text-zinc-500 line-clamp-1 mt-0.5">
                              {srv.shortDesc}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Solutions Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setSolutionsDropdownOpen(true)}
                onMouseLeave={() => setSolutionsDropdownOpen(false)}
              >
                <button
                  className={cn(
                    "px-3 py-1.5 rounded-xl text-xs xl:text-sm font-semibold flex items-center gap-1 transition-colors cursor-pointer",
                    pathname === "/solutions" ? "text-amber-800 bg-amber-50 font-bold" : "text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100/80"
                  )}
                >
                  <span>Solutions</span>
                  <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-200 text-zinc-500", solutionsDropdownOpen && "rotate-180 text-amber-600")} />
                </button>

                {solutionsDropdownOpen && (
                  <div className="absolute top-full left-0 w-84 pt-2 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="bg-white border border-zinc-200 rounded-2xl shadow-xl p-2.5 space-y-1">
                      <div className="px-3 py-2 border-b border-zinc-100 flex items-center justify-between">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-500">Supported Platforms</span>
                        <Link href="/solutions" className="text-[11px] font-semibold text-amber-600 hover:underline flex items-center gap-0.5">
                          Explore All <ArrowUpRight className="w-3 h-3" />
                        </Link>
                      </div>

                      {SOFTWARE_PLATFORMS.map((plat) => (
                        <Link
                          key={plat.id}
                          href={`/solutions#${plat.id}`}
                          className="flex items-start justify-between p-2.5 rounded-xl hover:bg-amber-50/60 transition-colors group/item"
                        >
                          <div>
                            <div className="text-xs font-bold text-zinc-900 group-hover/item:text-amber-800 transition-colors">
                              {plat.name}
                            </div>
                            <div className="text-[11px] text-zinc-500 line-clamp-1">
                              {plat.tagline}
                            </div>
                          </div>
                          {plat.badge && (
                            <span className="text-[9px] px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-semibold border border-amber-200 font-mono">
                              {plat.badge}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/training"
                className={cn(
                  "px-3 py-1.5 rounded-xl text-xs xl:text-sm font-semibold transition-colors",
                  pathname === "/training" ? "text-amber-800 bg-amber-50 font-bold" : "text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100/80"
                )}
              >
                Training
              </Link>

              <Link
                href="/clients"
                className={cn(
                  "px-3 py-1.5 rounded-xl text-xs xl:text-sm font-semibold transition-colors",
                  pathname === "/clients" ? "text-amber-800 bg-amber-50 font-bold" : "text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100/80"
                )}
              >
                Clients
              </Link>

              <Link
                href="/contact"
                className={cn(
                  "px-3 py-1.5 rounded-xl text-xs xl:text-sm font-semibold transition-colors",
                  pathname === "/contact" ? "text-amber-800 bg-amber-50 font-bold" : "text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100/80"
                )}
              >
                Contact
              </Link>
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${COMPANY_INFO.phones[0]}`}
                className="hidden xl:flex items-center gap-2 text-xs font-mono font-semibold text-zinc-700 hover:text-amber-600 transition-colors px-2 py-1"
              >
                <Phone className="w-3.5 h-3.5 text-amber-600" />
                <span>{COMPANY_INFO.displayPhones[0]}</span>
              </a>

              <Button
                variant="primary"
                size="sm"
                onClick={() => setIsConsultationOpen(true)}
              >
                Let&apos;s Talk
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-zinc-100 border border-zinc-200 text-zinc-800 hover:text-zinc-950 focus:outline-none cursor-pointer"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-zinc-200 bg-white px-4 pt-4 pb-6 space-y-4 max-h-[85vh] overflow-y-auto shadow-xl">
            <div className="space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 rounded-xl text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 rounded-xl text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
              >
                About Us
              </Link>
              <Link
                href="/services"
                className="block px-3 py-2 rounded-xl text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
              >
                All Services
              </Link>
              <div className="pl-4 space-y-1 border-l border-zinc-200 my-1">
                <Link href="/solutions" className="block py-1.5 text-xs text-zinc-600 hover:text-amber-600 font-medium">
                  • 1. Implementation of Business Solution Software
                </Link>
                <Link href="/training" className="block py-1.5 text-xs text-zinc-600 hover:text-amber-600 font-medium">
                  • 2. Training for Corporate Workers &amp; Students on Accounting Softwares
                </Link>
                <Link href="/web-design" className="block py-1.5 text-xs text-zinc-600 hover:text-amber-600 font-medium">
                  • 3. Web Development and Graphic Design
                </Link>
                <Link href="/support" className="block py-1.5 text-xs text-zinc-600 hover:text-amber-600 font-medium">
                  • 4. 24/7 Support Service on Implemented Business Solutions
                </Link>
                <Link href="/email" className="block py-1.5 text-xs text-zinc-600 hover:text-amber-600 font-medium">
                  • 5. Business Email Services
                </Link>
              </div>
              <Link
                href="/solutions"
                className="block px-3 py-2 rounded-xl text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
              >
                Supported Platforms (Tally, QuickBooks, Odoo, ERPNext, Zoho)
              </Link>
              <Link
                href="/training"
                className="block px-3 py-2 rounded-xl text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
              >
                Corporate Training
              </Link>
              <Link
                href="/clients"
                className="block px-3 py-2 rounded-xl text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
              >
                Our Clients
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 rounded-xl text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
              >
                Contact & Location
              </Link>
            </div>

            <div className="pt-3 border-t border-zinc-200 space-y-3">
              <div className="text-xs text-zinc-600 space-y-1">
                <div>Direct Call: <strong>{COMPANY_INFO.displayPhones[0]}</strong></div>
                <div>Support: <strong>{COMPANY_INFO.displayPhones[1]}</strong></div>
              </div>
              <Button
                variant="primary"
                className="w-full"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsConsultationOpen(true);
                }}
              >
                Let&apos;s Talk / Book Consultation
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Shared consultation modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </>
  );
};
