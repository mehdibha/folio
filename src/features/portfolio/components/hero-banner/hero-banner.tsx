import React from "react"
import { Button } from "@/components/ui"
import Link from "next/link"
import { siteConfig } from "@/config"

const data = siteConfig.heroBanner

export const HeroBanner = () => {
  return (
    <div className=" flex min-h-[calc(100vh-64px)] items-center justify-center p-4">
      <div className="pb-28">
        <h1 className="mb-2 text-center font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          {Object.keys(data.title).map((sectionKey) => (
            <span key={sectionKey}>
              {data.title[sectionKey].map((item, index) => (
                <span
                  key={index}
                  className={item.highlighted ? "text-primary" : ""}
                >
                  {item.text}
                </span>
              ))}
              <br />
            </span>
          ))}
        </h1>
        <h2 className="mb-8 text-center text-lg md:text-xl font-medium">{data.subtitle}</h2>
        <div className="flex justify-center space-x-4">
          {data.callToActions.map((elem, index) => (
            <Button
              key={index}
              asChild
              size="lg"
              variant={index === 0 ? "default" : "neutral"}
            >
              <Link href={elem.href}>{elem.label}</Link>
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
