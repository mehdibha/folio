"use client"

import React from "react"
import { siteConfig } from "@/config"
import { Button } from "@/components/ui"
import { WorkExperienceList } from "./work-experience-list"

const workExperienceData = siteConfig.experience

export const WorkExperience = () => {
  const [collapsed, setCollapsed] = React.useState(true)

  const displayedExperience = collapsed
    ? workExperienceData.slice(0, 2)
    : workExperienceData

  const handleClick = () => {
    setCollapsed((prevState) => !prevState)
  }

  return (
    <div>
      <WorkExperienceList experiences={displayedExperience} />
      {workExperienceData.length > 2 && (
        <Button size="lg" onClick={handleClick} className="mx-auto mt-6 block">
          {collapsed ? "Show all experience" : "Show less"}
        </Button>
      )}
    </div>
  )
}
