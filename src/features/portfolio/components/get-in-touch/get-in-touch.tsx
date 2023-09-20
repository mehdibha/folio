"use client"
import React from "react"
import { Button } from "@/components/ui"
import { siteConfig } from "@/config"
import { CopyButton } from "./copy-button"

const data = siteConfig.contact
const mail = siteConfig.links.mail

export const GetInTouch = () => {
  const handleClick = () => {}
  return (
    <div className="container max-w-xl text-center">
      <h2 className="mb-4 font-display text-4xl">{data.title}</h2>
      <p className="mb-4">{data.description}</p>
      <div className="mb-2 flex items-center justify-center space-x-2 font-semibold">
        <p>{mail}</p>
        <CopyButton />
      </div>
      <Button size="lg" asChild>
        <a href={data.callToAction.href}>{data.callToAction.label}</a>
      </Button>
    </div>
  )
}
