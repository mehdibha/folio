"use client"

import React from "react"
import { getFirstStringsLessThanNChars } from "@/utils"

interface WorkExperienceDescriptionProps {
  list: string[]
}

const WorkExperienceDescription = (props: WorkExperienceDescriptionProps) => {
  const { list } = props
  const [open, setOpen] = React.useState(false)

  const reducedList = React.useMemo(() => {
    const strings = getFirstStringsLessThanNChars(list, 400)
    if (strings.length === 0) return [list[0].substring(0, 400)]
    return strings
  }, [list])

  const exceedsLimit = reducedList.length < list.length
  const displayedList = open ? list : reducedList

  return (
    <div className="mb-3">
      <ul className="list-disc">
        {displayedList.map((elem, index) => (
          <li key={index}>{elem}</li>
        ))}
      </ul>
      {exceedsLimit && (
        <span
          className="font-bold transition-all hover:underline"
          onClick={(e) => {
            e.preventDefault() // Prevent the default link navigation
            e.stopPropagation()
            setOpen(!open)
          }}
        >
          {open ? "See less" : "See more"}
        </span>
      )}
    </div>
  )
}

export default WorkExperienceDescription
