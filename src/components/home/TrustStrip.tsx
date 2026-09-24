import React from "react";
import Link from "next/link";
import { CLIENTS } from "@/data/company";
import { ShieldCheck, ArrowRight } from "lucide-react";

export const TrustStrip: React.FC = () => {
  return (
    <section className="py-12 border-b border-zinc-200 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-amber-700 text-xs font-bold uppercase tracking-wider font-mono">
              <ShieldCheck className="w-4 h-4 text-amber-600" />
              <span>Proven Track Record</span>
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-zinc-950 tracking-tight">
              Technology trusted by growing businesses
            </h2>
          </div>
          <Link
            href="/clients"
            className="text-xs text-zinc-600 hover:text-amber-700 font-semibold inline-flex items-center gap-1 transition-colors self-start md:self-auto"
          >
            <span>View all client relationships</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Client Wall Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
          {CLIENTS.map((client) => (
            <div
              key={client.id}
              className="group relative p-4 rounded-2xl bg-zinc-50/80 border border-zinc-200/90 hover:border-amber-400 hover:bg-white hover:shadow-sm transition-all duration-300 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] uppercase font-mono font-bold px-2 py-0.5 rounded-md bg-white text-amber-800 border border-zinc-200 shadow-2xs">
                  {client.category.split("&")[0].trim()}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 group-hover:bg-amber-600 transition-colors" />
              </div>

              <div>
                <div className="text-sm sm:text-base font-bold text-zinc-900 tracking-tight group-hover:text-amber-700 transition-colors">
                  {client.name}
                </div>
                <div className="text-[11px] text-zinc-500 mt-0.5 line-clamp-1">
                  {client.industry}
                </div>
              </div>

              <div className="mt-3 pt-2.5 border-t border-zinc-200 text-[10px] text-zinc-600 flex items-center justify-between font-medium">
                <span>{client.solutionType.split("&")[0].trim()}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
