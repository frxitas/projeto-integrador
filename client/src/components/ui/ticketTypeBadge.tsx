import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        1: " bg-white text-black",
        2: " bg-black text-white",
      },
    },
    defaultVariants: {
      variant: 1,
    },
  },
);

export interface TicketTypeBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function TicketTypeBadge({ className, variant, ...props }: TicketTypeBadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { TicketTypeBadge, badgeVariants };
