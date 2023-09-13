import React from "react"

interface TutorialsLayoutProps {
  children: React.ReactNode
}

const TutorialsLayout = ({ children }: TutorialsLayoutProps) => {
  return <div>{children}</div>
}

export default TutorialsLayout
