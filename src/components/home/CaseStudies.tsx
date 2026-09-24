import React from "react";
import Link from "next/link";
import { CLIENTS } from "@/data/company";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  Briefcase,
  Layers,
  ArrowRight,
  Building,
  CheckCircle2,
} from "lucide-react";

export const CaseStudies: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 lg:py-28 relative bg-[#FAFAFA] border-t border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 sm:gap-6 mb-10 sm:mb-16">
          <div className="space-y-3 sm:space-y-4 max-w-2xl">
            <Badge variant="gold" size="md">
              CLIENT ENGAGEMENTS &amp; PROOF
            </Badge>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 tracking-tight">
              Helping businesses <span className="text-gradient-gold">work better.</span>
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base lg:text-lg leading-relaxed">
              We partner with organizations across food processing, infrastructure engineering, church administration, tech, and retail healthcare to build resilient operational systems.
            </p>
          </div>

          <Button href="/clients" variant="outline" size="md" showArrow>
            Explore Client Directory
          </Button>
        </div>

        {/* Case Study Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {CLIENTS.map((client) => (
            <div
              key={client.id}
              className="group rounded-3xl bg-white border border-zinc-200/90 hover:border-amber-400 hover:shadow-md transition-all duration-300 p-5 sm:p-8 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800">
                    {client.badge}
                  </span>
                  <Building className="w-4 h-4 text-zinc-400 group-hover:text-amber-600 transition-colors" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-zinc-900 tracking-tight group-hover:text-amber-800 transition-colors">
                    {client.name}
                  </h3>
                  <div className="text-xs text-zinc-500 mt-1 font-medium">
                    Industry: {client.industry}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                  {client.description}
                </p>

                <div className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-1 text-xs text-zinc-700">
                  <div className="font-bold text-zinc-900 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                    <span>Focus Area</span>
                  </div>
                  <div className="text-zinc-600">{client.focusArea}</div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between text-xs font-semibold">
                <span className="text-zinc-500">{client.solutionType}</span>
                <Link
                  href="/clients"
                  className="text-amber-700 hover:text-amber-800 font-bold inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  <span>Details</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
