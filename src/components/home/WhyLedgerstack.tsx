import React from "react";
import { WHY_CHOOSE_US } from "@/data/company";
import { Badge } from "@/components/ui/Badge";
import {
  Briefcase,
  SlidersHorizontal,
  BookOpenCheck,
  Clock,
  Network,
  Building2,
} from "lucide-react";

export const WhyLedgerstack: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Briefcase: <Briefcase className="w-5 h-5 text-amber-700" />,
    SlidersHorizontal: <SlidersHorizontal className="w-5 h-5 text-amber-700" />,
    BookOpenCheck: <BookOpenCheck className="w-5 h-5 text-amber-700" />,
    Clock: <Clock className="w-5 h-5 text-amber-700" />,
    Network: <Network className="w-5 h-5 text-amber-700" />,
    Building2: <Building2 className="w-5 h-5 text-amber-700" />,
  };

  return (
    <section className="py-20 lg:py-28 bg-white border-t border-zinc-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="gold" size="md">
            THE LEDGERSTACK ADVANTAGE
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 tracking-tight">
            Why businesses choose <span className="text-gradient-gold">Ledgerstack.</span>
          </h2>
          <p className="text-zinc-600 text-base sm:text-lg leading-relaxed">
            We operate as a committed technology ally. We focus on solving operational bottlenecks rather than selling software licenses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-zinc-50/70 border border-zinc-200/90 hover:border-amber-400 hover:bg-white hover:shadow-md transition-all duration-300 space-y-4 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center group-hover:scale-105 group-hover:bg-amber-500 group-hover:text-white transition-all">
                {iconMap[item.icon]}
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-zinc-900 tracking-tight group-hover:text-amber-800 transition-colors">
                {item.title}
              </h3>

              <p className="text-sm text-zinc-600 leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
