import React from "react"
import { Badge } from "@/components/ui"
import { IWorkExperience } from "@/types"
import Link from "next/link"

interface WorkExperienceListProps {
  experiences: IWorkExperience[]
}

export const WorkExperienceList = (props: WorkExperienceListProps) => {
  const { experiences } = props
  return (
    <ul className="flex flex-col space-y-4">
      {experiences.map((experience) => (
        <li className="group relative cursor-pointer" key={experience.title}>
          <Link href={experience.link} target="_blank">
            {/* background */}
            <div className="absolute left-0 top-0 z-[-1] h-full w-full rounded-xl bg-[rgba(50,50,50,0.1)] opacity-30 transition-all shadow-md duration-300 group-hover:opacity-100 dark:bg-[rgba(230,230,230,0.1)] dark:from-transparent dark:via-transparent dark:to-transparent" />
            {/* content */}
            <div className=" grid grid-cols-9 gap-6 p-6">
              <div className="col-span-2 pt-1">
                <p className="text-sm font-medium uppercase text-foreground-secondary">
                  {experience.startDate} - {experience.endDate}
                </p>
              </div>
              <div className="col-span-7">
                <h3 className="text-lg font-bold">
                  {experience.title}{" "}
                  <span className="text-primary">@{experience.company}</span>
                </h3>
                <p className="text-md mb-1 text-foreground-secondary">
                  {experience.location}
                </p>
                <p className="mb-3">{experience.description}</p>
                <div className="flex flex-wrap gap-2">
                  {experience.tags.map((tag, index) => (
                    <Badge variant="filled" color="secondary" key={index}>
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
