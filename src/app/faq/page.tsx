import React from "react";
import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { FaqSection } from "@/components/home/FaqSection";
import { ContactSection } from "@/components/home/ContactSection";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Ledgerstack Technologies",
  description:
    "Common questions regarding accounting software implementation, data migration, ERP selection, corporate training, and support SLAs in Ghana.",
};

export default function FaqPage() {
  return (
    <div className="flex flex-col w-full">
      <PageHeader
        badge="KNOWLEDGE &amp; ANSWERS"
        title="Everything you need to know about"
        highlight="working with Ledgerstack."
        description="Clear, transparent answers on our software recommendation process, data migration security, corporate training curriculums, and ongoing support agreements."
      />

      <FaqSection />
      <ContactSection />
    </div>
  );
}
