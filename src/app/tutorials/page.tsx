import React from "react"
import { PageLayout } from "@/layout"

interface TutorialsLayoutProps {
  children: React.ReactNode
}

const TutorialsLayout = ({ children }: TutorialsLayoutProps) => {
  return <PageLayout title="Tutorials">{children}</PageLayout>
}

export default TutorialsLayout
