"use client"
import React from "react"
import { useSearchParams } from "next/navigation"
import { useScroll } from "@/hooks"
import { cn } from "@/utils"

export const Background = () => {
  useSearchParams()
  const { scrolled } = useScroll(0)

  return (
    <div
      className={cn(
        "absolute left-0 top-0 z-[-1] h-full w-full bg-background/70 opacity-0 shadow-md backdrop-blur-md transition-all",
        { "opacity-100": scrolled }
      )}
    />
  )
}
