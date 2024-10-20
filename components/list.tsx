"use client";

import { useState } from "react";
import NavLink from "next/link";
import { cn } from "@/lib/cn";

export const List = ({
  items,
}: {
  items: { title: string; description?: string; hint?: string; href: string }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="text-sm">
      {items.map((item, index) => (
        <NavLink
          key={index}
          href={item.href}
          className={cn(
            "flex items-center justify-between border-b py-3 duration-200",
            hoveredIndex !== null && hoveredIndex !== index ? "opacity-50" : ""
          )}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          target={item.href.startsWith("http") ? "_blank" : undefined}
        >
          <div className="flex flex-col">
            <span>{item.title}</span>
            {item.description && (
              <span className="text-fg-muted">{item.description}</span>
            )}
          </div>
          {item.hint && <span className="text-fg-muted">{item.hint}</span>}
        </NavLink>
      ))}
    </div>
  );
};
