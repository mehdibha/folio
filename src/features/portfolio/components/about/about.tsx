import React from "react"
import Image from "next/image"
import { siteConfig } from "@/config"

const avatar = siteConfig.about.avatar
const title = siteConfig.about.title
const description = siteConfig.about.description

export const About = () => {
  return (
    <div className="flex items-center space-x-12">
      <Image
        src={avatar}
        height={300}
        width={200}
        style={{ objectFit: "cover" }}
        alt=""
        className="my-6 rounded-b-xl rounded-t-full"
      />
      <div className="border-1 border-1 border-solid border-red-500">
        <h2 className="mb-4 font-display text-3xl font-bold">{title}</h2>
        {description.map((paragraph, index) => (
          <p
            className={`mb-${
              index === description.length -1 ? 0 : 4
            } text-lg`}
            key={index}
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  )
}
