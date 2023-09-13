import * as React from "react"
import { VariantProps, cn, cva } from "@/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      color: {
        primary: "border-primary bg-primary text-primary-foreground",
        secondary: "border-secondary bg-secondary text-secondary-foreground",
      },
      variant: {
        filled: "border-transparent",
        outlined: "bg-transparent text-primary",
      },
    },
    defaultVariants: {
      variant: "filled",
      color: "primary",
    },
  }
)

export interface BadgeProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "color">,
    VariantProps<typeof badgeVariants> {
  selected?: boolean
}

function Badge(props: BadgeProps) {
  const { className, variant, selected, color, ...restProps } = props
  return (
    <div className={cn(badgeVariants({ color, variant }), className)} {...restProps} />
  )
}

export { Badge, badgeVariants }
