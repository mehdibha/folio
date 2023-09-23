import React from "react"
import Image from "next/image"
import { IProject } from "@/types"
import { Badge } from "@/components/ui"
import { ProjectModal } from "./project-modal"

interface ProjectsListProps {
  projects: IProject[]
}

export const ProjectsList = (props: ProjectsListProps) => {
  const { projects } = props
  return (
    <ul className="flex flex-col space-y-4">
      {projects.map((project) => (
        <ProjectModal
          key={project.title}
          title={project.title}
          summary={project.summary}
          description={project.description}
          image={project.image}
          tags={project.tags}
          links={project.links}
        >
          <li className="group relative cursor-pointer">
            {/* background */}
            <div className="absolute left-0 top-0 z-[-1] h-full w-full rounded-xl bg-[rgba(50,50,50,0.1)] opacity-30 shadow-md transition-all duration-300 group-hover:opacity-100 dark:bg-[rgba(230,230,230,0.1)] dark:from-transparent dark:via-transparent dark:to-transparent" />
            {/* content */}
            <div className="grid grid-cols-9 gap-6 p-6">
              <Image
                src={project.image}
                alt={project.title}
                width={300}
                loading="lazy"
                height={150}
                className="col-span-9 rounded border-2 border-slate-200/10 object-cover transition group-hover:border-slate-200/30 sm:col-span-2"
              />
              <div className="col-span-9 sm:col-span-7">
                <h3 className="text-lg font-bold">{project.title}</h3>
                <p className="mb-2">{project.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <Badge variant="filled" key={index}>
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </li>
        </ProjectModal>
      ))}
    </ul>
  )
}
