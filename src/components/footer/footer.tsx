import { Button, Separator } from "../ui"
import {
  Codepen,
  GitFork,
  Github,
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  Star,
} from "@/assets/icons"
import { siteConfig } from "@/config"
import { getRepoDetails } from "@/lib/github"
import { ISocialLinks } from "@/types"

const getData = async () => {
  try {
    const repoDetails = await getRepoDetails()
    const { stargazers_count, forks } = repoDetails
    return { starsCount: stargazers_count, forksCount: forks }
  } catch (error) {
    return { starsCount: 116, forksCount: 40 }
  }
}

const links = siteConfig.links
const icons = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  mail: Mail,
  instragram: Instagram,
  codepen: Codepen,
}

export const Footer = async () => {
  const { starsCount, forksCount } = await getData()

  return (
    <div className="container mt-12 pb-1">
      <Separator />
      <div className="flex items-start justify-between py-4">
        <div>
          <p>
            All rights reserved ©{" "}
            <a
              href="https://github.com/Mehdi-BHA/notionfolio"
              target="_blank"
              className="hover:underline"
            >
              {siteConfig.name}
            </a>{" "}
            2023.
          </p>
          <div className="flex space-x-2 text-sm text-foreground-secondary ">
            <p>
              Website powered by{" "}
              <a
                href="https://github.com/Mehdi-BHA/notionfolio"
                target="_blank"
                className="hover:underline"
              >
                notionfol.io.
              </a>
            </p>
            <div className="flex items-center space-x-2 text-sm text-foreground-secondary">
              <div className="flex items-center space-x-1">
                <Star size={16} />
                <span>{starsCount}</span>
              </div>
              <div className="flex items-center space-x-1">
                <GitFork size={16} />
                <span>{forksCount}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex space-x-1">
          {/* TODO: Repetition of IsocialLinks */}
          {Object.keys(links).map((key) => {
            if (links[key as keyof ISocialLinks]) {
              const Icon = icons[key as keyof ISocialLinks]
              return (
                <a key={key} href={links[key as keyof ISocialLinks]} target="_blank">
                  <Button size="icon" variant="ghost">
                    <Icon />
                  </Button>
                </a>
              )
            }
          })}
        </div>
      </div>
    </div>
  )
}
