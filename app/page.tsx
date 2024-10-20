import { allLabs, allPosts } from "@/lib/docs";
import { Link } from "@/components/core/link";
import { List } from "@/components/list";
import { projects } from "@/content/projects";

export default function Home() {
  return (
    <div>
      <h1 className="text-lg font-semibold">Mehdi Ben Hadj Ali</h1>
      <p className="text-fg-muted">Design Engineer</p>
      <p className="mt-10 text-sm">
        Currently making the web better at{" "}
        <Link href="https://dotui.org" target="_blank">
          dotUI
        </Link>
        .<br />I like building accessible, polished, and modern user interfaces.
      </p>
      <h2 className="mb-2 mt-10 text-sm text-fg-muted">Projects</h2>
      <List items={projects} />
      <h2 className="mt-10 text-sm text-fg-muted">Lab</h2>
      <List
        items={allLabs.map((lab) => ({
          title: lab.title,
          href: `/lab/${lab._meta.fileName}`,
        }))}
      />
      <h2 className="mt-10 text-sm text-fg-muted">Writing</h2>
      <List
        items={allPosts.map((post) => ({
          title: post.title,
          href: `/writing/${post._meta.fileName}`,
        }))}
      />
    </div>
  );
}
