import { TPost } from "@/types"

export function filterPublishedPosts({
  posts,
  includePages,
}: {
  posts: TPost[] | null
  includePages: boolean
}): TPost[] {
  if (!posts || !posts.length) return []
  return posts
    .filter((post) =>
      includePages
        ? post?.type?.[0] === "Post" || post?.type?.[0] === "Page"
        : post?.type?.[0] === "Post"
    )
    .filter(
      (post) => post.title && post.slug && post?.status?.[0] === "Published"
    )
}
