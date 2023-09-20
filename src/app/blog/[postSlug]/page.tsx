import React from "react"
import NotionRenderer from "@/components/notion-renderer"
import { Badge } from "@/components/ui"
import { getAllPosts } from "@/lib/notion"
import { getPostBlocks } from "@/lib/notion/get-post-blocks"
import { notFound } from "next/navigation"
import { formatDate } from "@/utils"

const title = "How to configure ESLint and Prettier in an Expo project"
const date = "Jul 25, 2023"
const timeToRead = 3
const tags = ["Expo"]

export async function generateStaticParams() {
  const posts = await getAllPosts({ includePages: false })
  return posts?.map((elem) => ({
    postSlug: elem.slug,
  }))
}

async function getPost(postSlug: string) {
  const posts = await getAllPosts({ includePages: false })
  if (!posts) return { post: null, recordMap: null }
  const filteredPosts = posts.filter((elem) => postSlug === elem.slug)
  if (filteredPosts.length === 0) return { post: null, recordMap: null }
  const post = filteredPosts[0]
  const recordMap = await getPostBlocks(post.id)
  return { post, recordMap }
}

interface PostPageProps {
  params: {
    postSlug: string
  }
}

const PostPage = async (props: PostPageProps) => {
  const { params } = props
  const { postSlug } = params
  const { post, recordMap } = await getPost(postSlug)

  if (!post) notFound()

  return (
    <div className="mt-20">
      <h1 className="mb-4 text-4xl font-bold">{post.title}</h1>
      <div className="flex items-center space-x-2">
        <p>Published in {formatDate(post.createdTime)}</p>
        <p>•</p>
        <p>{timeToRead} min read</p>
        <p>•</p>
        <div className="flex space-x-1">
          {post.tags && post.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      </div>
      <div className="mt-12">
        <NotionRenderer recordMap={recordMap} />
      </div>
    </div>
  )
}

export default PostPage
