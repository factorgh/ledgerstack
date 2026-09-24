"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export interface AccordionItemData {
  id?: string;
  title: string;
  content: string | React.ReactNode;
  category?: string;
}

interface AccordionProps {
  items: AccordionItemData[];
  defaultOpenIndex?: number | null;
  allowMultiple?: boolean;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  defaultOpenIndex = 0,
  allowMultiple = false,
  className,
}) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>(
    defaultOpenIndex !== null && defaultOpenIndex !== undefined ? [defaultOpenIndex] : []
  );

  const toggleItem = (index: number) => {
    if (allowMultiple) {
      if (openIndexes.includes(index)) {
        setOpenIndexes(openIndexes.filter((i) => i !== index));
      } else {
        setOpenIndexes([...openIndexes, index]);
      }
    } else {
      if (openIndexes.includes(index)) {
        setOpenIndexes([]);
      } else {
        setOpenIndexes([index]);
      }
    }
  };

  return (
    <div className={cn("space-y-3", className)}>
      {items.map((item, index) => {
        const isOpen = openIndexes.includes(index);
        return (
          <div
            key={index}
            className={cn(
              "rounded-2xl border transition-all duration-200 overflow-hidden",
              isOpen
                ? "bg-white border-amber-400 shadow-sm"
                : "bg-white border-zinc-200 hover:border-zinc-300"
            )}
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full text-left px-6 py-4.5 flex items-center justify-between gap-4 font-semibold text-zinc-900 hover:text-amber-700 transition-colors focus:outline-none cursor-pointer"
              aria-expanded={isOpen}
            >
              <span className="text-base font-semibold">{item.title}</span>
              <ChevronDown
                className={cn(
                  "w-5 h-5 text-zinc-400 transition-transform duration-200 shrink-0",
                  isOpen && "rotate-180 text-amber-600"
                )}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.22, ease: "easeInOut" }}
                >
                  <div className="px-6 pb-5 pt-1 text-sm text-zinc-600 leading-relaxed border-t border-zinc-100">
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};
