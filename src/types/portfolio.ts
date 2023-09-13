export interface IPortfolio {
  about: IAbout
  experience: IWorkExperience[]
  education: IEducation[]
  projects: IProject[]
}

export interface IAbout {
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
  description: string
  tags: string[]
}

export interface IEducation {
  school: string
  degree: string
  fieldOfStudy: string
  description?: string
  startDate: string
  link: string
  endDate: string
}

export interface IProject {
  title: string
  description: string
  tags: string[]
}
