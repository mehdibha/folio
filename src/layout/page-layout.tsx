import React from "react"

interface PageLayoutProps {
  children: React.ReactNode
  title: string
}

export const PageLayout = (props: PageLayoutProps) => {
  const { children, title } = props
  return (
    <div className="pt-8">
      <h1 className="mb-4 text-center	text-4xl font-bold">{title}</h1>
      {children}
    </div>
  )
}
