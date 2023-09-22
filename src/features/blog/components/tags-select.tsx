"use client"

import React from "react"
import { cn } from "@/utils"
import { Badge } from "@/components/ui"

interface TagsSelectProps {
  tags: string[]
  selectedTags: string[]
  handleTagClick: (tag: string) => void
}

export const TagsSelect = (props: TagsSelectProps) => {
  const { tags, selectedTags, handleTagClick } = props

  return (
    <div className="mb-10 flex flex-wrap gap-4">
      {tags.map((tag) => {
        const selected = selectedTags.findIndex((elem) => elem === tag) > -1
        const onClick = () => {
          handleTagClick(tag)
        }

        return (
          <Badge
            onClick={onClick}
            key={tag}
            className={cn("focus-ring cursor-pointer px-4 py-2", {
              "ring hover:ring-primary": selected,
              "opacity-50": !selected && selectedTags.length > 0,
            })}
          >
            {tag}
          </Badge>
        )
      })}
    </div>
  )
}
