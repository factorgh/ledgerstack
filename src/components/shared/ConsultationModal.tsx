"use client";

import React, { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Phone, Mail, Send, Loader2 } from "lucide-react";
import confetti from "canvas-confetti";
import { COMPANY_INFO } from "@/data/company";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
  title?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultService = "Business Solution Implementation",
  title = "Request an Exploratory Consultation",
}) => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: defaultService,
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#d97706", "#f59e0b", "#09090b", "#fbbf24"],
        });
      } catch {
        // fallback
      }
    }, 850);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      service: defaultService,
      notes: "",
    });
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={isSubmitted ? handleReset : onClose}
      title={isSubmitted ? "Consultation Request Received" : title}
      description={
        isSubmitted
          ? "Thank you for reaching out. A Ledgerstack technology consultant will get in touch with you shortly."
          : "Tell us about your organization's operational challenges. We will prepare actionable recommendations."
      }
    >
      {isSubmitted ? (
        <div className="py-6 text-center space-y-5">
          <div className="w-16 h-16 bg-amber-50 text-amber-600 border border-amber-200 rounded-2xl flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h4 className="text-xl font-bold text-zinc-900">We have received your enquiry</h4>
            <p className="text-sm text-zinc-600 max-w-md mx-auto leading-relaxed">
              Our specialists are reviewing your request for <strong className="text-amber-700">{formData.service}</strong>. You will hear from us within regular business hours.
            </p>
          </div>

          <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-200 text-left space-y-2 text-xs text-zinc-700">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-amber-600" />
              <span>Direct lines: <strong>{COMPANY_INFO.displayPhones.join(" / ")}</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-amber-600" />
              <span>Email: <strong>{COMPANY_INFO.email}</strong></span>
            </div>
          </div>

          <Button variant="primary" onClick={handleReset} className="w-full">
            Done
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 pt-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                Full Name <span className="text-amber-600">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Kwame Mensah"
                className="w-full bg-white border border-zinc-300 rounded-xl px-3.5 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                Company / Organization <span className="text-amber-600">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="e.g. Acme Ghana Ltd"
                className="w-full bg-white border border-zinc-300 rounded-xl px-3.5 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                Business Email <span className="text-amber-600">*</span>
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="kwame@company.com"
                className="w-full bg-white border border-zinc-300 rounded-xl px-3.5 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                Phone Number <span className="text-amber-600">*</span>
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="e.g. 0540000000"
                className="w-full bg-white border border-zinc-300 rounded-xl px-3.5 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
              Service of Interest
            </label>
            <select
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full bg-white border border-zinc-300 rounded-xl px-3.5 py-2.5 text-sm text-zinc-900 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
            >
              <option value="Business Solution Implementation">Business Solution Implementation (Tally, QuickBooks, ERPNext, Odoo, Zoho)</option>
              <option value="Training & Capacity Building">Training & Capacity Building (Corporate & Finance Teams)</option>
              <option value="Web Development & Graphic Design">Web Development & Graphic Design</option>
              <option value="24/7 Support & Maintenance">24/7 Support & Maintenance</option>
              <option value="Business Email Services">Business Email Services (Google Workspace, M365)</option>
              <option value="General Strategic Advisory">General Strategic Technology Advisory</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
              Briefly describe your requirements or operational challenge
            </label>
            <textarea
              rows={3}
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              placeholder="e.g., We need to streamline multi-location inventory and train 6 finance team members..."
              className="w-full bg-white border border-zinc-300 rounded-xl px-3.5 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors resize-none"
            />
          </div>

          <div className="pt-2 flex items-center justify-end gap-3">
            <Button type="button" variant="ghost" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" variant="primary" disabled={isSubmitting} icon={isSubmitting ? Loader2 : Send}>
              {isSubmitting ? "Submitting..." : "Send Request"}
            </Button>
          </div>
        </form>
      )}
    </Modal>
  );
};
