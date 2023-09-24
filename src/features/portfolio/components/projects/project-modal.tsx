import React from "react"
import Image from "next/image"
import { Github, Link, Npm } from "@/assets/icons"
import {
  Badge,
  Button,
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui"

interface ILinks {
  website?: string
  github?: string
  npm?: string
}

interface ProjectModalProps {
  children: React.ReactNode
  title: string
  summary: string
  description?: string[]
  tags: string[]
  image: string
  links?: ILinks
}

const icons = {
  website: Link,
  github: Github,
  npm: Npm,
}

export const ProjectModal = (props: ProjectModalProps) => {
  const { children, title, summary, image, description, tags, links } = props
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-2xl p-0">
        <div className="max-h-[80vh] overflow-y-scroll p-6">
          <h2 className="mb-2 text-xl font-semibold">{title}</h2>
          <p className="text-muted-foreground text-sm">{summary}</p>
          <Image
            src={image}
            width={350}
            height={100}
            alt={title}
            objectFit="contain"
            className="mx-auto my-6"
          />
          <div className="mb-4 flex gap-2">
            {tags &&
              tags.map((tag, index) => (
                <Badge variant="filled" key={index}>
                  {tag}
                </Badge>
              ))}
          </div>
          <div className="mb-2">
            {description &&
              description.map((paragraph, index) => (
                <p key={index} className="mb-2">
                  {paragraph}
                </p>
              ))}
          </div>
          <div className="mt-8 flex space-x-1">
            {links &&
              Object.keys(links).map((key) => {
                if (links[key as keyof ILinks]) {
                  const Icon = icons[key as keyof ILinks]
                  return (
                    <a
                      key={key}
                      href={links[key as keyof ILinks]}
                      target="_blank"
                    >
                      <Button size="icon" variant="ghost">
                        <Icon size={20} />
                      </Button>
                    </a>
                  )
                }
              })}
          </div>
        </div>
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
