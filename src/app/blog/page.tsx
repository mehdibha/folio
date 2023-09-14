// "use client"
import React from "react"
import { Badge } from "@/components/ui"
import { PostsList, SearchBar, getAllTags } from "@/features/blog"
import { getAllPosts } from "@/lib/notion"

async function getData() {
  const posts = await getAllPosts({ includePages: false })
  let tags: string[] = []
  if (posts) {
    tags = getAllTags(posts)
  }
  return { posts, tags }
}

const Blog = async () => {
  const { posts, tags } = await getData()

  return (
    <div className="pt-8">
      <h1 className="mb-4 text-center	text-4xl font-bold">
        Learn development with great articles.
      </h1>
      <div className="container mb-10 max-w-3xl">
        <SearchBar />
      </div>
      <div className="container mb-6 max-w-6xl">
        <h2 className="mb-5 text-xl font-bold">Search blog by topics</h2>
        <div className="mb-10 flex flex-wrap gap-3">
          {tags.map((tag) => {
            // const selected = selectedTopics.includes(keyword)
            return (
              <Badge
                key={tag}
                className="focus-ring cursor-pointer px-4 py-2"
                selected={false}
                // onClick={false}
                // disabled={Boolean(!visibleTags.has(tag)) ? !selected : false}
              >
                {tag}
              </Badge>
            )
          })}
        </div>
        {posts && <PostsList posts={posts} />}
      </div>
    </div>
  )
}

export default Blog
