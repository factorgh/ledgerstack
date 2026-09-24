"use client";

import React, { useState } from "react";
import { COMPANY_INFO, SERVICES } from "@/data/company";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Loader2,
  MessageSquare,
} from "lucide-react";
import confetti from "canvas-confetti";

export const ContactSection: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "Business Solution Implementation",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.7 },
          colors: ["#d97706", "#f59e0b", "#09090b", "#fbbf24"],
        });
      } catch {
        // fallback
      }
    }, 850);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setForm({
      name: "",
      company: "",
      email: "",
      phone: "",
      service: "Business Solution Implementation",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative bg-[#FAFAFA] border-t border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <Badge variant="gold" size="md">
                GET IN TOUCH
              </Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 tracking-tight">
                Let&apos;s start the <span className="text-gradient-gold">conversation.</span>
              </h2>
              <p className="text-zinc-600 text-base leading-relaxed">
                Whether you are exploring a new accounting platform, upgrading legacy ERP software, planning employee training, or seeking dedicated support, our consultants are ready to assist.
              </p>
            </div>

            {/* Direct Channels */}
            <div className="space-y-4 text-sm">
              <div className="p-5 rounded-2xl bg-white border border-zinc-200 shadow-xs flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                    Telephone &amp; WhatsApp
                  </div>
                  <div className="mt-1 font-mono font-bold text-zinc-900 space-y-0.5">
                    <div>
                      <a href={`tel:${COMPANY_INFO.phones[0]}`} className="hover:text-amber-700 transition-colors">
                        {COMPANY_INFO.displayPhones[0]}
                      </a>
                    </div>
                    <div>
                      <a href={`tel:${COMPANY_INFO.phones[1]}`} className="hover:text-amber-700 transition-colors">
                        {COMPANY_INFO.displayPhones[1]}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-zinc-200 shadow-xs flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                    Official Email
                  </div>
                  <div className="mt-1 font-bold text-zinc-900">
                    <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-amber-700 transition-colors">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-zinc-200 shadow-xs flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                    Headquarters
                  </div>
                  <div className="mt-1 text-zinc-700 font-medium">
                    {COMPANY_INFO.address}
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-zinc-200 shadow-xs flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                    Operating Hours
                  </div>
                  <div className="mt-1 text-zinc-700 font-medium">
                    {COMPANY_INFO.workingHours}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white border border-zinc-200 p-6 sm:p-10 shadow-lg relative">
              {isSuccess ? (
                <div className="py-10 text-center space-y-5 animate-in fade-in duration-300">
                  <div className="w-16 h-16 bg-amber-50 text-amber-600 border border-amber-200 rounded-2xl flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-zinc-900">Enquiry Received</h3>
                    <p className="text-sm text-zinc-600 max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-zinc-900">{form.name}</strong>. Our business technology advisory team has received your enquiry regarding <strong className="text-amber-700">{form.service}</strong>.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200 text-xs text-zinc-600 max-w-md mx-auto text-left space-y-1 font-medium">
                    <div>• Dedicated response within regular business hours</div>
                    <div>• For urgent system assistance, call <strong>{COMPANY_INFO.displayPhones[0]}</strong></div>
                  </div>

                  <Button variant="outline" size="md" onClick={handleReset}>
                    Submit Another Enquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-zinc-100 pb-4 mb-2">
                    <h3 className="text-xl font-bold text-zinc-900 tracking-tight">
                      Send an Operational Enquiry
                    </h3>
                    <p className="text-xs text-zinc-500 mt-1">
                      Fill out the form below. We will analyze your requirements and follow up.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-zinc-700 mb-1.5">
                        Full Name <span className="text-amber-600">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="e.g. Kofi Annan"
                        className="w-full bg-white border border-zinc-300 rounded-xl px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-zinc-700 mb-1.5">
                        Company Name <span className="text-amber-600">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        placeholder="e.g. Volta Traders Ltd"
                        className="w-full bg-white border border-zinc-300 rounded-xl px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-zinc-700 mb-1.5">
                        Business Email <span className="text-amber-600">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="kofi@voltatraders.com"
                        className="w-full bg-white border border-zinc-300 rounded-xl px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-zinc-700 mb-1.5">
                        Phone Number <span className="text-amber-600">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="0540000000"
                        className="w-full bg-white border border-zinc-300 rounded-xl px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-700 mb-1.5">
                      Service Needed <span className="text-amber-600">*</span>
                    </label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full bg-white border border-zinc-300 rounded-xl px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                    >
                      <option value="Business Solution Implementation">Business Solution Implementation (Tally, QuickBooks, ERPNext, Odoo, Zoho)</option>
                      <option value="Training & Capacity Building">Training & Capacity Building (Corporate & Finance Teams)</option>
                      <option value="Web Development & Graphic Design">Web Development & Graphic Design</option>
                      <option value="24/7 Support & Maintenance">24/7 Support & Maintenance</option>
                      <option value="Business Email Services">Business Email Services (Google Workspace, M365)</option>
                      <option value="General Business Consultation">General Business Technology Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-700 mb-1.5">
                      Operational Message / Requirement Details
                    </label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Please share details such as team size, current accounting tools, or specific bottlenecks..."
                      className="w-full bg-white border border-zinc-300 rounded-xl px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    icon={isSubmitting ? Loader2 : Send}
                    className="w-full"
                  >
                    {isSubmitting ? "Submitting Enquiry..." : "Send Enquiry"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
