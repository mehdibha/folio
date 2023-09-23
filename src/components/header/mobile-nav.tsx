"use client"

import React from "react"
import { Menu } from "@/assets/icons"
import { siteConfig } from "@/config"
import { Button, Sheet, SheetContent, SheetTrigger } from "../ui"
import { Nav } from "./nav"

const nav = siteConfig.header.nav

export const MobileNav = () => {
  const [open, setOpen] = React.useState<boolean>(false)
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div className="sm:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-40 pt-12">
          <Nav items={nav} direction="column" onNavItemClick={handleClose} />
        </SheetContent>
      </Sheet>
    </div>
  )
}
