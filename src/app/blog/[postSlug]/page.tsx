import NotionRenderer from "@/components/notion-renderer"
import { Badge } from "@/components/ui"
import { getAllPosts } from "@/lib/notion"
import { getPostBlocks } from "@/lib/notion/get-post-blocks"
import { notFound } from "next/navigation"
import React from "react"

const title = "How to configure ESLint and Prettier in an Expo project"
const date = "Jul 25, 2023"
const timeToRead = 3
const tags = ["Expo"]

export async function generateStaticParams() {
  const posts = await getAllPosts({ includePages: false })
  return posts?.map((elem) => {
    postSlug: elem.slug
  })
}

async function getPost(params) {
  const posts = await getAllPosts({ includePages: false })
  const filteredPosts = posts.filter((elem) => params.postSlug === elem.slug)
  if (filteredPosts.length === 0) return null
  const post = filteredPosts[0]
  const recordMap = await getPostBlocks(post.id)
  return { post, recordMap }
}

const PostPage = async ({ params }) => {
  const { post, recordMap } = await getPost(params)
  if (!post) notFound()
  return (
    <div>
      <h1 className="mb-4 text-4xl font-bold">{title}</h1>
      <div className="flex items-center space-x-2">
        <p>Published in {date}</p>
        <p>•</p>
        <p>{timeToRead} min read</p>
        <p>•</p>
        <div className="flex space-x-1">
          {tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      </div>
      <div className="mt-8">
        <NotionRenderer recordMap={recordMap} />
      </div>
    </div>
  )
}

export default PostPage
