import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        1: "bg-white-300 text-green-400",
        2: "bg-white-300 text-yellow-500",
        3: "bg-white-300 text-red-500",
      },
    },
    defaultVariants: {
      variant: 1,
    },
  },
);

export interface TicketPriorityBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function TicketPriorityBadge({ className, variant, ...props }: TicketPriorityBadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { TicketPriorityBadge, badgeVariants };
