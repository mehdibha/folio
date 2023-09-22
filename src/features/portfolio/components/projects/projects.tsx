'use client'

import Link from 'next/link'
import React from 'react'

import { siteConfig } from '@/config'

import { Button } from '@/components/ui'

import { ProjectsList } from './projects-list'

export const Projects = () => {
  const projectsData = siteConfig.projects
  const displayedProjects = projectsData.filter((project) => project.featured)

  return (
    <div>
      <ProjectsList projects={displayedProjects} />
      <div className='text-center'>
        <Button size='lg' asChild className='mx-auto mt-6'>
          <Link href='/projects'>See full projects archive</Link>
        </Button>
      </div>
    </div>
  )
}
