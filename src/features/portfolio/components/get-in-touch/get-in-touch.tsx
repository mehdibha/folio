import React from "react"
import { Button } from "@/components/ui"
import { siteConfig } from "@/config"

const data = siteConfig.contact

export const GetInTouch = () => {
  return (
    <div className="container max-w-xl text-center">
      <h2 className="mb-4 font-display text-4xl">{data.title}</h2>
      <p className="mb-8">
        {data.description}
      </p>
      <Button size="lg" asChild>
        <a href={data.callToAction.href}>{data.callToAction.label}</a>
      </Button>
    </div>
  )
}
