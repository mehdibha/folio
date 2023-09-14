import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui"

interface PostListItemProps {
  href: string
  title: string
  createdTime: string
  timeToRead: number
  summary?: string
  tags?: string[]
}

export const PostListItem = (props: PostListItemProps) => {
  const { href, title, createdTime, timeToRead, summary, tags } = props

  return (
    <Link href={href}>
      <li className="group relative cursor-pointer">
        {/* background */}
        <div className="absolute left-0 top-0 z-[-1] h-full w-full rounded-xl bg-[rgba(50,50,50,0.1)] opacity-30 shadow-md transition-all duration-300 group-hover:opacity-100 dark:bg-[rgba(230,230,230,0.1)] dark:from-transparent dark:via-transparent dark:to-transparent" />
        {/* content */}
        <div className="flex space-x-6 p-6">
          <div className="w-full">
            <h2 className="text-lg font-bold">{title}</h2>
            <p className="mb-1 text-sm text-gray-400">
              Published on {createdTime} • {timeToRead} min read
            </p>
            <p className="mb-3 text-sm">{summary}</p>
            <div className="flex space-x-2">
              {tags &&
                tags.map((tag) => (
                  <Badge
                    variant="outlined"
                    key={tag}
                  >
                    {tag}
                  </Badge>
                ))}
            </div>
          </div>
          <Image
            src="https://miro.medium.com/v2/resize:fill:140:140/0*70WW9yETGs2BFPp6"
            width={180}
            height={10}
            loading="lazy"
            className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30"
            alt={title}
          />
        </div>
      </li>
    </Link>
  )
}
