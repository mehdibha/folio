"use client"
import React from "react"
import { Button } from "@/components/ui"
import { siteConfig } from "@/config"
import { WorkExperienceList } from "./work-experience-list"

export const WorkExperience = () => {
  const [collapsed, setCollapsed] = React.useState(true)

  const workExperienceData = siteConfig.portfolio["work-experience"]
  const displayedExperience = collapsed
    ? workExperienceData.slice(0, 2)
    : workExperienceData

  const handleClick = () => {
    setCollapsed((prevState) => !prevState)
  }

  return (
    <div className="mx-auto max-w-4xl">
      <h2 className="mb-4 font-display text-4xl font-bold">Experience</h2>
      <WorkExperienceList experiences={displayedExperience} />
      {workExperienceData.length > 2 && (
        <Button size="lg" onClick={handleClick} className="mx-auto mt-6 block">
          {collapsed ? "Show all experience" : "Show less"}
        </Button>
      )}
    </div>
  )
}
