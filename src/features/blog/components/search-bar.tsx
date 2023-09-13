import React from "react"
import { Input } from "../../../components/ui"

export const SearchBar = () => {
  return (
    <div className="relative w-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 left-3 top-0 my-auto h-6 w-6 text-gray-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <Input
        type="text"
        placeholder="Search a post, a topic, a keyword..."
        className="rounded-2xl py-7 pl-12 pr-4"
      />
    </div>
  )
}
