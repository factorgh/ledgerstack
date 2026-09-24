import React from "react";
import { WORK_PROCESS } from "@/data/company";
import { Badge } from "@/components/ui/Badge";
import {
  Compass,
  Cpu,
  Wrench,
  Award,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

export const ProcessTimeline: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Compass: <Compass className="w-5 h-5 text-amber-700" />,
    Cpu: <Cpu className="w-5 h-5 text-amber-700" />,
    Wrench: <Wrench className="w-5 h-5 text-amber-700" />,
    Award: <Award className="w-5 h-5 text-amber-700" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-amber-700" />,
  };

  return (
    <section className="py-20 lg:py-28 relative bg-[#FAFAFA] border-t border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="gold" size="md">
            STRUCTURED METHODOLOGY
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 tracking-tight">
            How we <span className="text-gradient-gold">work with you.</span>
          </h2>
          <p className="text-zinc-600 text-base sm:text-lg leading-relaxed">
            Technology projects succeed when execution is deliberate. Our 5-stage roadmap takes you smoothly from initial workflow diagnosis to long-term operational autonomy.
          </p>
        </div>

        {/* Timeline Desktop Horizontal & Mobile Vertical */}
        <div className="relative">
          {/* Connecting line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 -translate-y-12 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {WORK_PROCESS.map((item, index) => (
              <div
                key={item.step}
                className="group relative rounded-3xl bg-white border border-zinc-200/90 hover:border-amber-400 hover:shadow-md p-6 flex flex-col justify-between transition-all duration-300"
              >
                <div>
                  {/* Step number badge & icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center group-hover:scale-105 group-hover:bg-amber-500 group-hover:text-white transition-all">
                      {iconMap[item.icon]}
                    </div>
                    <span className="text-xs font-mono font-bold text-amber-800 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-full">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-zinc-900 tracking-tight group-hover:text-amber-800 transition-colors">
                    {item.title}
                  </h3>

                  <div className="text-xs font-bold text-amber-700 mt-1 mb-3">
                    {item.subhead}
                  </div>

                  <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between text-[11px] text-zinc-400 font-semibold">
                  <span>Phase 0{index + 1}</span>
                  {index < WORK_PROCESS.length - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 text-zinc-300 group-hover:text-amber-600 group-hover:translate-x-1 transition-all" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
