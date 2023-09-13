import React from "react"
import { Badge } from "@/components/ui"
import { IProject } from "@/types"
import Image from "next/image"

interface ProjectsListProps {
  projects: IProject[]
}

export const ProjectsList = (props: ProjectsListProps) => {
  const { projects } = props
  return (
    <ul className="flex flex-col space-y-4">
      {projects.map((project) => (
        <li className="group relative cursor-pointer" key={project.title}>
          {/* background */}
          <div className="absolute left-0 top-0 z-[-1] h-full w-full rounded-xl bg-[rgba(50,50,50,0.1)] opacity-30 shadow-md transition-all duration-300 group-hover:opacity-100 dark:bg-[rgba(230,230,230,0.1)] dark:from-transparent dark:via-transparent dark:to-transparent" />
          {/* content */}
          <div className=" grid grid-cols-9 gap-6 p-6">
              <Image
                src="/images/projects/halcyon.webp"
                alt={project.title}
                width={300}
                loading="lazy"
                height={48}
                className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 col-span-2"
              />
            <div className="col-span-7">
              <h3 className="text-lg font-bold">{project.title}</h3>
              <p className="mb-2">{project.description}</p>
              <div>
                {project.tags.map((tag, index) => (
                  <Badge
                    variant="filled"
                    color="primary"
                    className="mr-2 mt-2"
                    key={index}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}
