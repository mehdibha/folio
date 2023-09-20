"use client"
import React from "react"
import { Button } from "@/components/ui"
import { siteConfig } from "@/config"
import { ProjectsList } from "./projects-list"
import Link from "next/link"

export const Projects = () => {
  const projectsData = siteConfig.projects
  const displayedProjects = projectsData.filter((project) => project.featured)

  return (
    <div>
      <ProjectsList projects={displayedProjects} />
      <div className="text-center">
        <Button size="lg" asChild className="mx-auto mt-6">
          <Link href="/projects">See full projects archive</Link>
        </Button>
      </div>
    </div>
  )
}
