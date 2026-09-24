import React from "react";
import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { ContactSection } from "@/components/home/ContactSection";
import { FaqSection } from "@/components/home/FaqSection";
import { COMPANY_INFO } from "@/data/company";
import { MessageSquare, Phone, Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Ledgerstack Technologies",
  description:
    "Get in touch with Ledgerstack Technologies in Accra, Ghana for accounting software implementations, corporate training, web development, and 24/7 technical support.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full">
      <PageHeader
        badge="GET IN TOUCH"
        title="We are here to help you build an"
        highlight="efficient business."
        description="Reach out to our technology and business advisory consultants. Call us directly, send an enquiry, or schedule an in-person discovery session in Accra."
      >
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-cyan-300">
          <a
            href={COMPANY_INFO.socials.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-900/60 transition-colors flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat with us on WhatsApp</span>
          </a>
        </div>
      </PageHeader>

      <ContactSection />
      <FaqSection />
    </div>
  );
}
