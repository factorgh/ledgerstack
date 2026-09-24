import React from "react";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  badge?: string;
  title: string;
  highlight?: string;
  description: string;
  children?: React.ReactNode;
  className?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  badge,
  title,
  highlight,
  description,
  children,
  className,
}) => {
  return (
    <div className={cn("relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden border-b border-zinc-200 bg-gradient-to-b from-white via-[#FAF9F5] to-[#F5F3ED]/50", className)}>
      {/* Background ambient gold lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none">
        <div className="absolute top-[-100px] left-1/3 w-96 h-96 bg-amber-500/8 rounded-full blur-[120px]" />
        <div className="absolute top-[-80px] right-1/3 w-96 h-96 bg-amber-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
        {badge && (
          <div className="mb-4">
            <Badge variant="gold" size="md">
              {badge}
            </Badge>
          </div>
        )}

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-950 tracking-tight leading-[1.15]">
          {title} {highlight && <span className="text-gradient-gold">{highlight}</span>}
        </h1>

        <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
          {description}
        </p>

        {children && <div className="mt-8 flex flex-wrap justify-center gap-4">{children}</div>}
      </div>
    </div>
  );
};
