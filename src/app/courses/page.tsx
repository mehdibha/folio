import React from "react"
import { siteConfig } from "@/config"
import { CoursesList } from "@/features/courses"

const courses = siteConfig.courses

export default function Page() {
  return (
    <div>
      <CoursesList courses={courses} />
    </div>
  )
}
