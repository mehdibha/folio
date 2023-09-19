"use client"
import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { INavItem } from "@/types"
import { cn } from "@/utils"

interface NavProps {
  items: INavItem[]
  direction?: "column" | "row"
}

export const Nav = (props: NavProps) => {
  const { items, direction = "row" } = props
  const pathname = usePathname()

  return (
    <nav
      className={cn("flex sm:space-x-2 space-x-0", { "flex-col items-stretch": direction === "column" })}
    >
      {items?.map(
        (item, index) =>
          item.href && (
            <Link
              key={index}
              href={item.href}
              className={cn(
                "flex justify-center items-center rounded-lg px-5 py-2 text-sm font-medium transition-all hover:text-foreground",
                item.disabled && "cursor-not-allowed opacity-80",
                item.href === pathname
                  ? "bg-foreground/10 text-foreground"
                  : "text-foreground/60"
              )}
            >
              {item.title}
            </Link>
          )
      )}
    </nav>
  )
}
