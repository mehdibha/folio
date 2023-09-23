import React from "react"
import Link from "next/link"
import { IEducation } from "@/types"

interface EducationListProps {
  educations: IEducation[]
}

export const EducationList = (props: EducationListProps) => {
  const { educations } = props
  return (
    <ul className="flex flex-col space-y-4">
      {educations.map((education, index) => (
        <li className="group relative cursor-pointer" key={index}>
          <Link href={education.link} target="_blank">
            {/* background */}
            <div className="absolute left-0 top-0 z-[-1] h-full w-full rounded-xl bg-[rgba(50,50,50,0.1)] opacity-30 shadow-md transition-all duration-300 group-hover:opacity-100 dark:bg-[rgba(230,230,230,0.1)] dark:from-transparent dark:via-transparent dark:to-transparent" />
            {/* content */}
            <div className="grid grid-cols-9 gap-2 p-6 sm:gap-6">
              <div className="col-span-9 sm:col-span-2">
                <p className="text-foreground-secondary text-sm font-medium uppercase">
                  {education.startDate}
                  {education.endDate ? ` - ${education.endDate}` : ""}
                </p>
              </div>
              <div className="col-span-9 sm:col-span-6">
                <h3 className="text-lg font-bold">{education.school}</h3>
                <p className="text-md text-foreground-secondary mb-1">
                  {education.degree}
                  {education.fieldOfStudy && `, ${education.fieldOfStudy}`}
                </p>
                {education.description && (
                  <p className="mb-2 text-sm">{education.description}</p>
                )}
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
