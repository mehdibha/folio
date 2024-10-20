import { notFound } from "next/navigation";
import { getLabBySlug } from "@/lib/docs";
import { MDXContent } from "@/components/mdx-content";

export default async function LabPage({
  params,
}: {
  params: { slug: string };
}) {
  const lab = getLabBySlug(params.slug);
  if (!lab) return notFound();

  return (
    <div>
      <MDXContent code={lab.mdx} />
    </div>
  );
}
