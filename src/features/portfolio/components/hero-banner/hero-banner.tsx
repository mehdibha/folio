import React from "react"
import { Button } from "@/components/ui"
import Link from "next/link"
import { siteConfig } from "@/config"

const data = siteConfig.heroBanner

export const HeroBanner = () => {
  return (
    <div className=" flex min-h-[calc(100vh-64px)] items-center justify-center">
      <div className="pb-28">
        <h1 className="mb-2 text-center font-display text-7xl">
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
        <h2 className="mb-8 text-center text-xl">{data.subtitle}</h2>
        <div className="ali flex justify-center space-x-4">
          {data.callToActions.map((elem, index) => (
            <Link key={index} href={elem.href}>
              <Button size="lg" variant={index === 0 ? "default" : "neutral"}>
                {elem.label}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
