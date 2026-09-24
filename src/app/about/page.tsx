import React from "react";
import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { COMPANY_INFO } from "@/data/company";
import {
  Compass,
  CheckCircle2,
  Users,
  Building,
  Target,
  ShieldCheck,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Ledgerstack Technologies",
  description:
    "Learn how Ledgerstack Technologies partners with Ghanaian organizations to implement business software, train operational teams, and drive sustainable efficiency.",
};

export default function AboutPage() {
  const coreValues = [
    {
      title: "Business-First Pragmatism",
      desc: "We prioritize operational realities over technical hype. If a tool doesn't make your business faster or clearer, we won't recommend it.",
    },
    {
      title: "Integrity in Data Migration",
      desc: "Financial data is the bedrock of business truth. We treat master ledgers, inventory balances, and tax records with absolute precision.",
    },
    {
      title: "Empowerment Through Training",
      desc: "We believe true technology success occurs when staff operate software with natural autonomy, without depending on external handholding.",
    },
    {
      title: "Unwavering Long-Term Commitment",
      desc: "We stay in your corner after go-live. When regulatory filings loom or unexpected glitches strike, our team is right beside you.",
    },
  ];

  return (
    <div className="flex flex-col w-full">
      <PageHeader
        badge="ABOUT LEDGERSTACK TECHNOLOGIES"
        title="Modern business solutions grounded in"
        highlight="real operational reality."
        description="We are a Ghanaian technology company dedicated to driving organizational efficiency through business software, capacity building, digital presence, and ongoing technical support."
      />

      {/* Origin & Philosophy Section */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-4 sm:space-y-6">
              <Badge variant="gold" size="md">
                OUR PHILOSOPHY
              </Badge>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
                Not just software implementers — <span className="text-gradient-gold">long-term technology partners.</span>
              </h2>
              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                Many businesses in Ghana struggle with the same dilemma: they invest in expensive accounting or ERP software, only for the project to stall because the software was never tailored to their day-to-day workflow, or the staff was never properly trained.
              </p>
              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                Ledgerstack Technologies was built to bridge this critical gap. We operate at the intersection of business understanding and practical technology execution. We help you choose the right platform, configure it to your chart of accounts, train your team to mastery, and support you every step of the journey.
              </p>
              <div className="p-3.5 sm:p-4 rounded-2xl bg-zinc-50 border border-zinc-200 text-xs text-amber-800 font-mono font-bold">
                {COMPANY_INFO.tagline}
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              <div className="p-5 sm:p-8 rounded-3xl bg-white border border-zinc-200 shadow-xs space-y-3">
                <Target className="w-7 h-7 sm:w-8 sm:h-8 text-amber-600" />
                <h3 className="text-base sm:text-lg font-bold text-zinc-900">Our Mission</h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                  To empower African businesses with dependable software architectures, practical skills, and continuous support that eliminate operational chaos.
                </p>
              </div>

              <div className="p-5 sm:p-8 rounded-3xl bg-white border border-zinc-200 shadow-xs space-y-3">
                <Compass className="w-7 h-7 sm:w-8 sm:h-8 text-amber-700" />
                <h3 className="text-base sm:text-lg font-bold text-zinc-900">Our Vision</h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                  To be the most trusted business technology partner in Ghana, recognized for practical implementations, thorough training, and genuine client care.
                </p>
              </div>

              <div className="p-5 sm:p-8 rounded-3xl bg-white border border-zinc-200 shadow-xs space-y-3">
                <Users className="w-7 h-7 sm:w-8 sm:h-8 text-amber-600" />
                <h3 className="text-base sm:text-lg font-bold text-zinc-900">People First</h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                  Software produces zero value without human competence. We focus relentlessly on user confidence and operational clarity.
                </p>
              </div>

              <div className="p-5 sm:p-8 rounded-3xl bg-white border border-zinc-200 shadow-xs space-y-3">
                <ShieldCheck className="w-7 h-7 sm:w-8 sm:h-8 text-amber-700" />
                <h3 className="text-base sm:text-lg font-bold text-zinc-900">Reliable Support</h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                  We don&apos;t disappear after deployment. Our ongoing support SLA ensures your systems are backed up, patched, and running smoothly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-14 sm:py-20 bg-[#FAFAFA] border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-10 sm:mb-16">
            <Badge variant="gold" size="md">
              GUIDING PRINCIPLES
            </Badge>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
              Values that guide every <span className="text-gradient-gold">client engagement.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {coreValues.map((val, i) => (
              <div
                key={i}
                className="p-5 sm:p-8 rounded-3xl bg-white border border-zinc-200/90 hover:border-amber-400 hover:shadow-md transition-all space-y-3"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-xl bg-amber-50 text-amber-800 border border-amber-200 flex items-center justify-center font-mono font-bold text-xs shrink-0">
                    0{i + 1}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-zinc-900 tracking-tight">
                    {val.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-12 sm:py-16 bg-zinc-950 text-white border-t border-zinc-900 text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-5 sm:space-y-6">
          <h3 className="text-xl sm:text-3xl font-bold text-white">
            Ready to transform your business operations?
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-lg mx-auto">
            Speak with one of our business technology consultants today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Button href="/contact" variant="primary" size="lg" showArrow>
              Schedule an Exploratory Call
            </Button>
            <Button href="/services" variant="outline" size="lg" className="bg-zinc-900 text-white border-zinc-700 hover:bg-zinc-800">
              Explore Our Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
