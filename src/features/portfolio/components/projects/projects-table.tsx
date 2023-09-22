import React from "react"
import { siteConfig } from "@/config"
import { getFirstStringsLessThanNChars } from "@/utils"
import {
  Badge,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui"
import { ProjectModal } from "./project-modal"

const projects = siteConfig.projects

export const ProjectsTable = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Year</TableHead>
          <TableHead>Project</TableHead>
          <TableHead>Made at</TableHead>
          <TableHead className="w-[450px]">Summary</TableHead>
          <TableHead className="w-[250px]">Built with</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
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
            <TableRow className="cursor-pointer appearance-none items-start">
              <TableCell className="text-muted-foreground">2019</TableCell>
              <TableCell>{project.title}</TableCell>
              <TableCell>Apple</TableCell>
              <TableCell>
                {project.summary.length > 100
                  ? `${getFirstStringsLessThanNChars(
                      project.summary.split(" "),
                      100
                    ).join(" ")}...`
                  : project.summary}
              </TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <Badge variant="filled" key={index}>
                      {tag}
                    </Badge>
                  ))}
                </div>
              </TableCell>
            </TableRow>
          </ProjectModal>
        ))}
      </TableBody>
    </Table>
  )
}
