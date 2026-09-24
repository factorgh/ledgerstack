import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "glass" | "solid" | "bordered" | "interactive" | "dark";
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  variant = "glass",
  children,
  className,
  ...props
}) => {
  const variantStyles = {
    glass:
      "bg-white/95 backdrop-blur-xl border border-zinc-200/90 rounded-2xl shadow-sm text-zinc-900",
    solid:
      "bg-white border border-zinc-200 rounded-2xl shadow-sm text-zinc-900",
    bordered:
      "bg-transparent border border-zinc-300 rounded-2xl text-zinc-900",
    interactive:
      "bg-white border border-zinc-200/90 rounded-2xl shadow-sm transition-all duration-300 hover:border-amber-500/50 hover:shadow-amber-500/10 hover:-translate-y-1 text-zinc-900",
    dark:
      "bg-zinc-950 border border-zinc-800 rounded-2xl shadow-xl text-white",
  };

  return (
    <div className={cn(variantStyles[variant], className)} {...props}>
      {children}
    </div>
  );
};

export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => (
  <div className={cn("p-6 pb-3", className)} {...props}>
    {children}
  </div>
);

export const CardTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  className,
  children,
  ...props
}) => (
  <h3 className={cn("text-xl font-bold tracking-tight text-zinc-900", className)} {...props}>
    {children}
  </h3>
);

export const CardDescription: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({
  className,
  children,
  ...props
}) => (
  <p className={cn("text-sm text-zinc-600 leading-relaxed mt-1.5", className)} {...props}>
    {children}
  </p>
);

export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => (
  <div className={cn("p-6 pt-3", className)} {...props}>
    {children}
  </div>
);

export const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => (
  <div className={cn("p-6 pt-0 flex items-center", className)} {...props}>
    {children}
  </div>
);
