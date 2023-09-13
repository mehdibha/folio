import { PageLayout } from "@/layout"
import React from "react"

interface CoursesLayoutProps {
  children: React.ReactNode
}

const CoursesLayout = ({ children }: CoursesLayoutProps) => {
  return <PageLayout title="Take a course">{children}</PageLayout>
}

export default CoursesLayout
