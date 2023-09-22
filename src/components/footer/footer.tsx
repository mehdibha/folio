import {
  Codepen,
  GitFork,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Star,
  Twitter,
} from "@/assets/icons"
import { siteConfig } from "@/config"
import { ILinks } from "@/types"
import { getRepoDetails } from "@/lib/github"
import { Button, Separator } from "../ui"

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
  instagram: Instagram,
  codepen: Codepen,
}

export const Footer = async () => {
  const { starsCount, forksCount } = await getData()

  return (
    <div className="container mt-12 pb-1">
      <Separator />
      <div className="flex flex-col-reverse items-start justify-between py-4 sm:flex-row">
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
          <div className="text-foreground-secondary flex space-x-2 text-sm ">
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
            <div className="text-foreground-secondary flex items-center space-x-2 text-sm">
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
          {/* TODO: Repetition of ILinks */}
          {Object.keys(links).map((key) => {
            if (links[key as keyof ILinks]) {
              const Icon = icons[key as keyof ILinks]
              return (
                <a key={key} href={links[key as keyof ILinks]} target="_blank">
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
