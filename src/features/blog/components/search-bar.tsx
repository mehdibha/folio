import React from "react"
import { Input } from "@/components/ui"
import { Search } from "@/assets/icons"

export const SearchBar = () => {
  return (
    <div className="relative w-full">
      <Search className="absolute bottom-0 left-3 top-0 my-auto h-6 w-6 text-gray-500" />
      <Input
        type="text"
        placeholder="Search a post, a topic, a keyword..."
        className="rounded-2xl py-7 pl-12 pr-4"
      />
    </div>
  )
}
