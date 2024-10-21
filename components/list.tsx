"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import { ItemLink } from "./fade-in";

export const List = ({
  items,
}: {
  items: { title: string; description?: string; hint?: string; href: string }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  console.log(hoveredIndex);

  return (
    <div className="text-sm">
      {items.map((item, index) => (
        <ItemLink
          key={index}
          href={item.href}
          className={cn(
            "flex items-center justify-between border-b py-3 duration-200",
            hoveredIndex !== null && hoveredIndex !== index ? "!opacity-50" : ""
          )}
          onHoverStart={() => {
            console.log(index);
            setHoveredIndex(index);
          }}
          onHoverEnd={() => setHoveredIndex(null)}
          target={item.href.startsWith("http") ? "_blank" : undefined}
        >
          <div className="flex flex-col">
            <span>{item.title}</span>
            {item.description && (
              <span className="text-fg-muted">{item.description}</span>
            )}
          </div>
          {item.hint && <span className="text-fg-muted">{item.hint}</span>}
        </ItemLink>
      ))}
    </div>
  );
};
