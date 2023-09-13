import { PageLayout } from "@/layout"
import React from "react"

interface ToolsLayoutProps {
  children: React.ReactNode
}

const ToolsLayout = ({ children }: ToolsLayoutProps) => {
  return <PageLayout title="Tools i've built">{children}</PageLayout>
}

export default ToolsLayout
