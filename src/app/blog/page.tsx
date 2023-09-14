// "use client"
import React from "react"
import { Badge } from "@/components/ui"
import { PostsList, SearchBar, getAllTags } from "@/features/blog"
import { getAllPosts } from "@/lib/notion"
import PostsExplorer from "@/features/blog/components/posts-explorer"

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

  if (!posts) {
    return <div>No posts</div>
  }

  return (
    <div className="pt-8">
      <h1 className="mb-4 text-center	text-4xl font-bold">
        Learn development with great articles.
      </h1>
      <PostsExplorer posts={posts} tags={tags} />
    </div>
  )
}

export default Blog
