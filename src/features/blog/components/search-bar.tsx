"use client"
import React from "react"
import { useSearchParams, useRouter, usePathname } from "next/navigation"
import { Input } from "@/components/ui"
import { Search } from "@/assets/icons"
import { createUrl } from "@/utils"

export const SearchBar = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [searchValue, setSearchValue] = React.useState("")

  React.useEffect(() => {
    setSearchValue(searchParams?.get("q") || "")
  }, [searchParams, setSearchValue])

  const handleChange = (e: React.ChangeEventHandler<HTMLInputElement>) => {
     // now you got a read/write object
     const current = new URLSearchParams(Array.from(searchParams.entries())); // -> has to use this form

     // update as necessary
     const value = e.target.value.trim();
 
     if (!value) {
       current.delete("q");
     } else {
       current.set("q", e.target.value);
     }
 
     // cast to string
     const search = current.toString();
     // or const query = `${'?'.repeat(search.length && 1)}${search}`;
     const query = search ? `?${search}` : "";
 
     router.push(`${pathname}${query}`);
  }

  return (
    <div className="relative w-full">
      <Search className="absolute bottom-0 left-3 top-0 my-auto h-6 w-6 text-gray-500" />
      <Input
        value={searchValue}
        onChange={handleChange}
        type="text"
        placeholder="Search a post, a topic, a keyword..."
        className="rounded-2xl py-7 pl-12 pr-4"
      />
    </div>
  )
}
