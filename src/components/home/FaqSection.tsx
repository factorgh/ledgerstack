import React from "react";
import Link from "next/link";
import { FAQS } from "@/data/company";
import { Badge } from "@/components/ui/Badge";
import { Accordion } from "@/components/ui/Accordion";
import { ArrowRight, HelpCircle } from "lucide-react";

export const FaqSection: React.FC = () => {
  const accordionItems = FAQS.map((faq) => ({
    title: faq.q,
    content: faq.a,
  }));

  return (
    <section className="py-20 lg:py-28 bg-white border-t border-zinc-200/80 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="gold" size="md">
            COMMON QUESTIONS
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
            Frequently asked <span className="text-gradient-gold">questions.</span>
          </h2>
          <p className="text-zinc-600 text-base leading-relaxed">
            Everything you need to know about our implementation process, supported platforms, training programs, and ongoing technical support.
          </p>
        </div>

        <Accordion items={accordionItems} defaultOpenIndex={0} />

        <div className="mt-12 p-6 rounded-3xl bg-zinc-50 border border-zinc-200 text-center space-y-3">
          <h3 className="text-base font-bold text-zinc-900">
            Have a specific operational question not listed here?
          </h3>
          <p className="text-xs text-zinc-600 max-w-lg mx-auto">
            Our technology consultants are happy to review your current processes and answer all questions directly.
          </p>
          <div className="pt-1">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800 transition-colors"
            >
              <span>Speak with a Consultant</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
