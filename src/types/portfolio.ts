export interface IPortfolio {
  "work-experience": IWorkExperience[]
  education: IEducation[]
  projects: IProject[]
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
