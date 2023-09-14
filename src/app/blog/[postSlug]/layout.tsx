import React from "react"

interface PostLayoutProps {
  children: React.ReactNode
}

const PostLayout = (props: PostLayoutProps) => {
  const { children } = props
  return <div className="max-w-4xl container">{children}</div>
}

export default PostLayout
