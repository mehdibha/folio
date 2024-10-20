import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/docs";
import { MDXContent } from "@/components/mdx-content";

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();

  return (
    <div>
      <MDXContent code={post.mdx} />
    </div>
  );
}
