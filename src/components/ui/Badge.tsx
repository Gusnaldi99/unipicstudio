import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "accent" | "neutral" | "outline";
}

export function Badge({
  className,
  variant = "primary",
  children,
  ...props
}: BadgeProps) {
  const variantStyles = {
    primary: "bg-[#EFF6FF] text-[#1D4ED8] border-[#BFDBFE]",
    accent: "bg-[#FFF1EE] text-[#EA580C] border-[#FED7AA]",
    neutral: "bg-[#F1F5F9] text-[#475569] border-[#E2E8F0]",
    outline: "bg-transparent text-[#64748B] border-[#CBD5E1]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
