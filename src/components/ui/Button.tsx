import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight, LucideIcon } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gold" | "white" | "dark";
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  showArrow?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  icon: Icon,
  iconPosition = "left",
  showArrow = false,
  className,
  children,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 disabled:opacity-50 disabled:cursor-not-allowed group active:scale-[0.98] cursor-pointer";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5 font-semibold",
  };

  const variantStyles = {
    primary:
      "bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold border border-amber-500 shadow-sm",
    secondary:
      "bg-zinc-900 hover:bg-zinc-800 text-white font-medium border border-zinc-800 shadow-sm",
    outline:
      "bg-white hover:bg-zinc-50 text-zinc-800 border border-zinc-300 hover:border-amber-500 hover:text-amber-700 shadow-xs",
    ghost:
      "bg-transparent hover:bg-zinc-100 text-zinc-700 hover:text-zinc-900",
    gold:
      "bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold border border-amber-500 shadow-sm",
    white:
      "bg-white hover:bg-zinc-50 text-zinc-900 font-semibold shadow-xs border border-zinc-200",
    dark:
      "bg-black hover:bg-zinc-900 text-white font-semibold border border-zinc-800 shadow-sm",
  };

  const content = (
    <>
      {Icon && iconPosition === "left" && (
        <Icon className={cn("transition-transform group-hover:scale-110", size === "sm" ? "w-3.5 h-3.5" : size === "lg" ? "w-5 h-5" : "w-4 h-4")} />
      )}
      <span>{children}</span>
      {Icon && iconPosition === "right" && (
        <Icon className={cn("transition-transform group-hover:scale-110", size === "sm" ? "w-3.5 h-3.5" : size === "lg" ? "w-5 h-5" : "w-4 h-4")} />
      )}
      {showArrow && (
        <ArrowRight className={cn("transition-transform duration-200 group-hover:translate-x-1", size === "sm" ? "w-3.5 h-3.5" : size === "lg" ? "w-5 h-5" : "w-4 h-4")} />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}>
        {content}
      </Link>
    );
  }

  return (
    <button className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)} {...props}>
      {content}
    </button>
  );
};
