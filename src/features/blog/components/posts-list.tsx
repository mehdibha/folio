import React from "react"
import { TPost } from "@/types"
import { PostListItem } from "./post-list-item"

interface PostsListProps {
  posts: TPost[]
}

export const PostsList = (props: PostsListProps) => {
  const { posts } = props
  return (
    <ul className="flex flex-col space-y-4">
      {posts.map((post) => (
        <PostListItem
          key={post.slug}
          href={`/blog/${post.slug}`}
          title={post.title}
          createdTime={post.createdTime}
          timeToRead={4}
          summary={post.summary}
          thumbnail={post?.thumbnail}
          tags={post.tags}
        />
      ))}
    </ul>
  )
}
