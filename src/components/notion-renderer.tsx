"use client"

import { FC } from "react"
import dynamic from "next/dynamic"
import Image from "next/image"
import Link from "next/link"
import "katex/dist/katex.min.css"
import { useTheme } from "next-themes"
import { ExtendedRecordMap } from "notion-types"
import "prismjs/themes/prism-tomorrow.css"
import "react-notion-x/src/styles.css"

const _NotionRenderer = dynamic(
  () => import("react-notion-x").then((m) => m.NotionRenderer),
  { ssr: false }
)

const Collection = dynamic(() =>
  import("react-notion-x/build/third-party/collection").then(
    (m) => m.Collection
  )
)
const Equation = dynamic(() =>
  import("react-notion-x/build/third-party/equation").then((m) => m.Equation)
)
const Pdf = dynamic(
  () => import("react-notion-x/build/third-party/pdf").then((m) => m.Pdf),
  {
    ssr: false,
  }
)
const Modal = dynamic(
  () => import("react-notion-x/build/third-party/modal").then((m) => m.Modal),
  {
    ssr: false,
  }
)

const Code = dynamic(
  () => import("react-notion-x/build/third-party/code").then((m) => m.Code),
  {
    ssr: false,
  }
)

const mapPageUrl = (id: string) => {
  return "https://www.notion.so/" + id.replace(/-/g, "")
}

type Props = {
  recordMap: ExtendedRecordMap
}

const NotionRenderer: FC<Props> = ({ recordMap }) => {
  const { theme } = useTheme()

  return (
    <_NotionRenderer
      darkMode={theme === "dark"}
      recordMap={recordMap}
      components={{
        Code,
        Collection,
        Equation,
        Modal,
        Pdf,
        nextImage: Image,
        nextLink: Link,
      }}
      mapPageUrl={mapPageUrl}
    />
  )
}

export default NotionRenderer
