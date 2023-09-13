"use client"
import React from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { NavItem } from "@/types";
import { cn } from "@/utils";

interface NavProps {
  items: NavItem[];
}

const Nav = (props: NavProps) => {
  const { items } = props;
  const pathname = usePathname()
  
  return (
    <nav className="flex space-x-2">
      {items?.map(
        (item, index) =>
          item.href && (
            <Link
              key={index}
              href={item.href}
              className={cn(
                "flex items-center text-sm font-medium px-5 py-2 rounded-lg transition-all hover:text-foreground",
                item.disabled && "cursor-not-allowed opacity-80",
                item.href === pathname ? "text-foreground bg-foreground/10" : "text-foreground/60"
              )}
            >
              {item.title}
            </Link>
          )
      )}
    </nav>
  );
};

export default Nav;
