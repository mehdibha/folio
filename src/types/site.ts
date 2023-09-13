import { INavItem } from "./nav"
import { IPortfolio } from "./portfolio"

export interface ISocialLinks {
  github: string
  linkedin: string
  twitter: string
}

export interface ISiteConfig {
  name: string
  description: string
  nav: INavItem[]
  links: ISocialLinks
  portfolio: IPortfolio
}
