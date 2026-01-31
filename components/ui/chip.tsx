import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const chipVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default:
          "border-(--color-secondary)/15 bg-(--color-secondary)/5 text-(--color-secondary)/80",
        subtle:
          "border-black/[0.08] bg-white/[0.12] tracking-wide uppercase text-(--color-secondary)/70",
        tag: "border-(--color-secondary)/10 bg-(--color-secondary)/5 tracking-wider uppercase text-(--color-secondary)/70",
      },
      size: {
        default: "px-3 py-1.5",
        sm: "px-2.5 py-0.5 sm:px-3 sm:py-1",
        xs: "px-3 py-1",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ChipProps
  extends
    React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof chipVariants> {
  icon?: React.ComponentType<{ className?: string }>;
}

const Chip = React.forwardRef<HTMLSpanElement, ChipProps>(
  ({ className, variant, size, icon: Icon, children, ...props }, ref) => {
    return (
      <span
        className={cn(chipVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {Icon && <Icon className="h-3.5 w-3.5" aria-hidden="true" />}
        {children}
      </span>
    );
  },
);
Chip.displayName = "Chip";

export { Chip, chipVariants };
