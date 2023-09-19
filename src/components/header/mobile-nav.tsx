"use client"
import React from "react"
import { Button, Sheet, SheetContent, SheetTrigger } from "../ui"
import { siteConfig } from "@/config"
import { Menu } from "@/assets/icons"
import { Nav } from "./nav"

const nav = siteConfig.header.nav

export const MobileNav = () => {
  const [open, setOpen] = React.useState<boolean>(false)

  return (
    <div className="sm:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right"  className="w-40 pt-12">
          <Nav items={nav} direction="column" />
        </SheetContent>
      </Sheet>
    </div>
  )
}
