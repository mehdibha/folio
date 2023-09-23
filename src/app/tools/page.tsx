import React from "react"
import { siteConfig } from "@/config"
import { ToolsList } from "@/features/tools"

const tools = siteConfig.tools

export default function Page() {
  return (
    <div>
      <ToolsList tools={tools} />
    </div>
  )
}
