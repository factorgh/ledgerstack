import React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  Compass,
  Layers,
  GraduationCap,
  Headphones,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export const CompanyIntro: React.FC = () => {
  const pillars = [
    {
      icon: Compass,
      title: "Strategic Discovery",
      desc: "We analyze your transactional flows, charts of accounts, and reporting bottlenecks before recommending any tool.",
    },
    {
      icon: Layers,
      title: "Tailored Implementation",
      desc: "Custom setup, tax rules, user permissions, and safe data migration structured around your business lifecycle.",
    },
    {
      icon: GraduationCap,
      title: "Practical Team Training",
      desc: "Role-specific hands-on workshops that give your team operational muscle memory and eliminate guesswork.",
    },
    {
      icon: Headphones,
      title: "Proactive Long-Term Support",
      desc: "Continuous post-launch troubleshooting, routine backups, and maintenance to keep your business running smoothly.",
    },
  ];

  return (
    <section className="py-14 sm:py-20 lg:py-28 relative bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Column: Bold Statement & Visual Accent */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6">
            <Badge variant="gold" size="md">
              WHO WE ARE &amp; HOW WE PARTNER
            </Badge>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight leading-tight">
              Technology that makes business <span className="text-gradient-gold">simpler.</span>
            </h2>

            <p className="text-zinc-600 text-sm sm:text-base lg:text-lg leading-relaxed">
              Ledgerstack Technologies is a Ghanaian technology and business-solutions company. We help organizations modernize their operations through business management software, practical capacity building, modern digital touchpoints, and dependable technical care.
            </p>

            <div className="p-4 sm:p-6 rounded-3xl bg-zinc-950 text-white border border-zinc-800 space-y-3 shadow-lg">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-400 font-mono">
                The Ledgerstack Principle
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 italic leading-relaxed">
                &ldquo;We don&apos;t just install software. We understand how your organization works, implement the right technology, train your team to mastery, and stand by you for the long haul.&rdquo;
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs text-zinc-400">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span>Credible Technology Partner • Accra, Ghana</span>
              </div>
            </div>

            <div>
              <Button href="/about" variant="outline" size="md" showArrow>
                Learn More About Our Story
              </Button>
            </div>
          </div>

          {/* Right Column: 4 Strategic Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-5 sm:p-8 rounded-3xl bg-white border border-zinc-200/90 hover:border-amber-400 hover:shadow-sm transition-all duration-300 space-y-3 group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center group-hover:scale-105 group-hover:bg-amber-500 group-hover:text-white transition-all">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-zinc-900 tracking-tight group-hover:text-amber-800 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
