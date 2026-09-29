import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ImageIcon } from "lucide-react";

export interface PlaceholderProps extends React.HTMLAttributes<HTMLDivElement> {
  idName: string;
  label: string;
  dimensions: string; // e.g. "1920x1080" or "800x600"
  aspectRatio?: string; // e.g. "aspect-video", "aspect-[4/3]", "aspect-square"
  src?: string;
  alt: string;
  priority?: boolean;
  category?: string;
}

export function Placeholder({
  idName,
  label,
  dimensions,
  aspectRatio = "aspect-video",
  src,
  alt,
  priority = false,
  category,
  className,
  ...props
}: PlaceholderProps) {
  // If a valid image source is provided, render next/image with layout stability
  if (src) {
    const [wStr, hStr] = dimensions.split("x");
    const width = parseInt(wStr, 10) || 800;
    const height = parseInt(hStr, 10) || 600;

    return (
      <div
        id={idName}
        className={cn(
          "relative overflow-hidden rounded-lg bg-neutral-900 border border-white/10",
          aspectRatio,
          className
        )}
        {...props}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
    );
  }

  // Fallback: structured accessible placeholder
  return (
    <div
      id={idName}
      role="img"
      aria-label={alt}
      className={cn(
        "relative flex flex-col items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-gradient-to-b from-[#141b2d] to-[#0d121f] p-4 text-center select-none group",
        aspectRatio,
        className
      )}
      {...props}
    >
      {/* Background grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 flex flex-col items-center space-y-2 text-neutral-400">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-neutral-300">
          <ImageIcon className="h-5 w-5 opacity-80" aria-hidden="true" />
        </div>

        {category && (
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#ff5e2b]">
            {category}
          </span>
        )}

        <p className="text-sm font-medium text-neutral-200">{label}</p>

        <span className="inline-block rounded bg-white/5 px-2 py-0.5 font-mono text-[11px] text-neutral-400 border border-white/5">
          {dimensions}
        </span>
      </div>
    </div>
  );
}
