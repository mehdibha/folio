import { format } from "date-fns"
import { INavItem } from "./nav"

export interface ILinks {
  github?: string
  linkedin?: string
  twitter?: string
  mail: string
  codepen?: string
  instagram?: string
}

export interface IHeroBanner {
  title: {
    [sectionNumber: string]: {
      text: string
      highlighted?: boolean
    }[]
  }
  subtitle: string
  callToActions: {
    label: string
    href: string
  }[]
}

export interface IAbout {
  avatar: string
  title: string
  description: string[]
}

export interface IWorkExperience {
  title: string
  company: string
  link: string
  location: string
  startDate: string
  endDate: string
  description: string[]
  tags: string[]
}

export interface IEducation {
  school: string
  degree: string
  fieldOfStudy?: string
  description?: string
  startDate: string
  link: string
  endDate?: string
}

export interface IProject {
  title: string
  image: string
  summary: string
  description?: string[]
  tags: string[]
  links?: {
    website?: string
    github?: string
    npm?: string
  }
  featured: boolean
}

export interface IContact {
  title: string
  description: string
  callToAction: {
    label: string
    href: string
  }
}

export interface ICourse {
  title: string
  description: string
  image: string
  rate: number
  numberReviews: string
  price: string
  tags: string[]
  link: string
}

export interface ITool {
  title: string
  description: string
  image: string
  tags: string[]
  link: string
}

export interface ISiteConfig {
  name: string
  description: string
  image: string
  links: ILinks
  header: { logo?: string; nav: INavItem[] }
  heroBanner: IHeroBanner
  about: IAbout
  experience: IWorkExperience[]
  education: IEducation[]
  projects: IProject[]
  courses: ICourse[]
  contact: IContact
  tools: ITool[]
}
