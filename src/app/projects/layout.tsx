import React from "react"
import { PageLayout } from "@/layout"

interface ProjectsLayoutProps {
  children: React.ReactNode
}

const ProjectsLayout = ({ children }: ProjectsLayoutProps) => {
  return <PageLayout title="Projects archive">{children}</PageLayout>
}

export default ProjectsLayout
