"use client"
import React from "react"
import { Button } from "@/components/ui"
import { siteConfig } from "@/config"
import { EducationList } from "./education-list"

export const Education = () => {
  const [collapsed, setCollapsed] = React.useState(true)

  const educationData = siteConfig.portfolio.education
  const displayedEducations = collapsed
    ? educationData.slice(0, 2)
    : educationData

  const handleClick = () => {
    setCollapsed((prevState) => !prevState)
  }

  return (
    <div className="mx-auto max-w-4xl">
      <h2 className="mb-4 font-display text-4xl font-bold">Education</h2>
      <EducationList educations={displayedEducations} />
      {educationData.length > 2 && (
        <Button size="lg" onClick={handleClick} className="mx-auto mt-6 block">
          {collapsed ? "Show all education" : "Show less"}
        </Button>
      )}
    </div>
  )
}
