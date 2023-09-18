import React from "react"
import Image from "next/image"
import { siteConfig } from "@/config"
import { cn } from "@/utils"

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
        style={{ objectFit: "cover" }}
        alt=""
        className="my-6 rounded-b-[50px] rounded-t-[999px]"
      />
      <div className="border-1 border-1 border-solid border-red-500">
        <h2 className="mb-4 font-display text-2xl font-bold md:text-3xl">
          {title}
        </h2>
        {description.map((paragraph, index) => (
          <p
            className={cn("mb-4 text-md lg:text-lg", {
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
