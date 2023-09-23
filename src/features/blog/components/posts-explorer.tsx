"use client"

import React from "react"
import { useSearchParams } from "next/navigation"
import { useUpdateQueryStringValueWithoutNavigation } from "@/hooks"
import { TPost, TPosts } from "@/types"
import { useInView } from "framer-motion"
import { PostsList } from "./posts-list"
import { SearchBar } from "./search-bar"
import { TagsSelect } from "./tags-select"

interface PostsExplorerProps {
  posts: TPosts
  tags: string[]
}

export const PostsExplorer = (props: PostsExplorerProps) => {
  const { posts, tags } = props

  const searchParams = useSearchParams()
  const loadMoreRef = React.useRef<HTMLDivElement | null>(null)
  const inView = useInView(loadMoreRef)
  const [numberDisplayedPosts, setNumberDisplayedPosts] =
    React.useState<number>(30)

  const initialSearchValue = searchParams.get("q") ?? ""
  const initialTags =
    searchParams
      .get("tags")
      ?.split(",")
      .filter((elem) => elem !== "") ?? []

  const [searchValue, setSearchValue] =
    React.useState<string>(initialSearchValue)
  const [selectedTags, setSelectedTags] = React.useState<string[]>(initialTags)

  useUpdateQueryStringValueWithoutNavigation("q", searchValue.trim())
  useUpdateQueryStringValueWithoutNavigation("tags", selectedTags.join(","))

  const handleTagClick = (tag: string) => {
    const selected = selectedTags.findIndex((elem) => elem === tag) > -1
    if (selected) {
      setSelectedTags(selectedTags.filter((elem) => elem !== tag))
    } else {
      setSelectedTags([...selectedTags, tag])
    }
  }

  const filteredPosts = React.useMemo(() => {
    return posts.filter((post: TPost) => {
      let matchesSearch = post.title
        .toLocaleLowerCase()
        .includes(searchValue.toLocaleLowerCase())
      let matchesTags = post.tags
        ? post.tags.some((tag) => selectedTags.includes(tag))
        : false
      if (selectedTags.length === 0) matchesTags = true
      if (searchValue === "") matchesSearch = true
      return matchesSearch && matchesTags
    })
  }, [posts, searchValue, selectedTags])

  React.useEffect(() => {
    if (inView) {
      setNumberDisplayedPosts((prevN) => prevN + 20)
    }
  }, [inView])

  return (
    <div>
      <div className="container mb-10 max-w-3xl">
        <SearchBar
          value={searchValue}
          onChange={(event) => setSearchValue(event.currentTarget.value)}
        />
      </div>
      <div className="container mb-6 max-w-6xl">
        <h2 className="mb-5 text-xl font-bold">Search blog by topics</h2>
        <TagsSelect
          tags={tags}
          selectedTags={selectedTags}
          handleTagClick={handleTagClick}
        />
        {filteredPosts && (
          <PostsList posts={filteredPosts.slice(0, numberDisplayedPosts)} />
        )}
        <div ref={loadMoreRef} />
      </div>
    </div>
  )
}
