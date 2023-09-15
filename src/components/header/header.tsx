import React from "react"
import Link from "next/link"
import { siteConfig } from "@/config"
import Nav from "./nav"
import Image from "next/image"
import ThemeToggle from "./theme-toggle"
import { cn } from "@/utils"

interface HeaderProps {
  elevated: boolean
}

const logo = siteConfig.header.logo
const name = siteConfig.name
const nav = siteConfig.header.nav

export const Header = (props: HeaderProps) => {
  const { elevated } = props
  return (
    <header className={cn("sticky top-0 z-40 w-full")}>
      <div className="relative">
        <div>
          <div className="container flex h-16 items-center space-x-6">
            <Link
              href="/"
              className="mr-8 flex items-center space-x-2 transition-all hover:opacity-80"
            >
              <Image src={logo} alt="notionfol.io" width={30} height={30} />
              <span className="inline-block font-bold">{name}</span>
            </Link>
            <div className="flex-1">
              <Nav items={nav} />
            </div>
            <div className="flex space-x-2">
              <ThemeToggle />
            </div>
          </div>
        </div>
        {/* background */}
        <div
          className={cn(
            "absolute left-0 top-0 z-[-1] h-full w-full bg-background/70 opacity-0 shadow-md backdrop-blur-md transition-all",
            { "opacity-100": elevated }
          )}
        />
      </div>
    </header>
  )
}

export default Header
