import * as React from "react"
import { VariantProps, cn, cva } from "@/utils"

const badgeVariants = cva(
  "flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5 border",
  {
    variants: {
      color: {
        default: "border-gray-400/30 bg-gray-400/30 text-foreground",
        primary: "border-primary bg-primary text-primary-foreground",
        secondary: "border-secondary bg-secondary text-secondary-foreground",
      },
      variant: {
        filled: "border-transparent",
        outlined: "bg-transparent",
      },
    },
    defaultVariants: {
      variant: "filled",
      color: "default",
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
    <div
      className={cn(badgeVariants({ color, variant }), className)}
      {...restProps}
    />
  )
}

export { Badge, badgeVariants }
