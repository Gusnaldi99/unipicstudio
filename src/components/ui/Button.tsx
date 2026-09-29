import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "accent";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      type = "button",
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-semibold transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E40AF] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-lg cursor-pointer select-none";

    const variantStyles = {
      primary:
        "bg-[#1E40AF] text-white hover:bg-[#1D4ED8] shadow-sm hover:shadow active:scale-[0.99] border border-transparent",
      accent:
        "bg-[#FF5524] text-white hover:bg-[#E0471A] shadow-sm hover:shadow active:scale-[0.99] border border-transparent",
      secondary:
        "bg-[#F1F5F9] text-[#0F172A] hover:bg-[#E2E8F0] border border-[#E2E8F0]",
      outline:
        "border border-[#CBD5E1] text-[#1E293B] hover:bg-[#F8FAFC] hover:border-[#94A3B8]",
      ghost:
        "text-[#475569] hover:text-[#0F172A] hover:bg-[#F1F5F9] border border-transparent",
    };

    const sizeStyles = {
      sm: "min-h-[36px] px-3.5 py-1.5 text-xs gap-1.5",
      md: "min-h-[44px] px-5 py-2.5 text-sm gap-2", // 44px for tap target guideline
      lg: "min-h-[48px] px-6 py-3 text-base gap-2.5",
    };

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
