import React, { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

export function BentoGrid({
  className,
  children,
  ...props
}: BentoGridProps) {
  return (
    <div
      {...props}
      className={cn(
        "grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string;
  description: string;
  background: ReactNode;
  Icon?: React.ElementType;
  className?: string;
  children?: ReactNode;
}

export function BentoCard({
  name,
  description,
  background,
  Icon,
  className,
  children,
  ...props
}: BentoCardProps) {
  return (
    <div
      {...props}
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-xl border bg-background p-4 shadow-md transition-shadow hover:shadow-lg",
        className
      )}
    >
      {/* Background sits beneath */}
      <div className="absolute inset-0 -z-10">{background}</div>

      {/* Content moves up on hover */}
      <div className="z-10 flex flex-col gap-2 transition-transform duration-300 group-hover:-translate-y-8">
        {Icon && <Icon className="h-6 w-6 text-muted-foreground" />}
        <h3 className="text-lg font-semibold text-white">{name}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>

      {/* Buttons slide in on hover */}
      <div
        className={cn(
          "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-wrap gap-2 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        )}
      >
        <div className="pointer-events-auto flex flex-wrap gap-2">{children}</div>
      </div>
    </div>
  );
}
