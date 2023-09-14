"use client"
import React from "react"
import { TPosts } from "@/types"
import { SearchBar } from "./search-bar"
import { useSearchParams } from "next/navigation"

interface PostsExplorerProps {
  posts: TPosts
}

const PostsExplorer = (props: PostsExplorerProps) => {
  const { posts } = props

  return (
    <div>
      <div className="container mb-10 max-w-3xl">
        <SearchBar />
      </div>
    </div>
  )
}

export default PostsExplorer
