import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "gold" | "dark" | "white" | "outline" | "cyan" | "emerald" | "amber" | "slate" | "indigo";
  size?: "sm" | "md";
  className?: string;
  dot?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "gold",
  size = "md",
  className,
  dot = false,
}) => {
  const variantStyles = {
    gold: "bg-amber-50 text-amber-900 border-amber-300/80 font-semibold shadow-xs",
    dark: "bg-zinc-900 text-amber-400 border-zinc-800 font-medium",
    white: "bg-white text-zinc-900 border-zinc-200 shadow-xs font-medium",
    outline: "bg-transparent text-zinc-700 border-zinc-300 font-medium",
    amber: "bg-amber-50 text-amber-800 border-amber-300/80 font-medium",
    cyan: "bg-amber-50 text-amber-900 border-amber-300/80 font-semibold",
    emerald: "bg-emerald-50 text-emerald-800 border-emerald-200 font-medium",
    slate: "bg-zinc-100 text-zinc-800 border-zinc-200 font-medium",
    indigo: "bg-amber-50 text-amber-900 border-amber-300 font-medium",
  };

  const dotColors = {
    gold: "bg-amber-500",
    dark: "bg-amber-400",
    white: "bg-zinc-900",
    outline: "bg-amber-500",
    amber: "bg-amber-500",
    cyan: "bg-amber-500",
    emerald: "bg-emerald-500",
    slate: "bg-zinc-600",
    indigo: "bg-amber-500",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 border rounded-full tracking-wide transition-colors",
        size === "sm" ? "text-xs px-2.5 py-0.5" : "text-xs px-3.5 py-1",
        variantStyles[variant],
        className
      )}
    >
      {dot && (
        <span
          className={cn(
            "w-1.5 h-1.5 rounded-full animate-pulse",
            dotColors[variant]
          )}
        />
      )}
      {children}
    </span>
  );
};
