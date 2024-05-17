import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        1: "border-transparent bg-orange-500 text-white",
        2: "border-transparent bg-blue-500 text-white",
        3: "border-transparent bg-slate-600 text-white",
        4: "border-transparent bg-green-500 text-white",
        5: "border-transparent bg-red-500 text-white",
      },
    },
    defaultVariants: {
      variant: 1,
    },
  },
);

export interface TicketStatusBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function TicketStatusBadge({ className, variant, ...props }: TicketStatusBadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { TicketStatusBadge, badgeVariants };
