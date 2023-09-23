import React from "react"
import Image from "next/image"
import { siteConfig } from "@/config"
import { cn } from "@/utils"

const name = siteConfig.name
const avatar = siteConfig.about.avatar
const title = siteConfig.about.title
const description = siteConfig.about.description

export const About = () => {
  return (
    <div className="flex flex-col items-center space-y-8 md:flex-row md:space-x-12">
      <Image
        src={avatar}
        height={300}
        width={200}
        alt={name}
        loading="lazy"
        className="aspect-[auto 200 / 300] my-6 rounded-b-[50px] rounded-t-[999px] object-cover"
      />
      <div className="border-1 border-solid border-red-500">
        <h2 className="font-display mb-4 text-2xl font-bold md:text-3xl">
          {title}
        </h2>
        {description.map((paragraph, index) => (
          <p
            className={cn("text-md mb-4 lg:text-lg", {
              "mb-0": index === description.length,
            })}
            key={index}
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  )
}
