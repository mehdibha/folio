import Link from "next/link"
import { AnimatedGradient } from "@/components"
import { PostsList, getAllPosts } from "@/features/blog"
import {
  About,
  Education,
  GetInTouch,
  HeroBanner,
  Projects,
  WorkExperience,
} from "@/features/portfolio"
import { Button } from "@/components/ui"
import { filterPublishedPosts } from "@/lib/notion"

async function getData() {
  const posts = await getAllPosts({ includePages: false })
  const filteredPosts = filterPublishedPosts({ posts, includePages: false })

  return { posts: filteredPosts }
}

export default async function Home() {
  const { posts } = await getData()

  return (
    <main>
      <AnimatedGradient />
      <HeroBanner />
      <div className="container flex flex-col space-y-24">
        <About />
        <Section id="experience" title="Experience">
          <WorkExperience />
        </Section>
        <Section id="education" title="Education">
          <Education />
        </Section>
        <Section id="projects" title="Some featured projects">
          <Projects />
        </Section>
        {posts && (
          <Section id="latest-posts" title="Latest posts">
            <PostsList posts={posts.slice(0, 3)} />
            <div className="text-center">
              <Button size="lg" asChild className="mx-auto mt-6">
                <Link href="/blog">See all blog posts</Link>
              </Button>
            </div>
          </Section>
        )}
      </div>
      <div
        id="contact"
        className="flex min-h-[calc(100vh-160px)] items-center justify-center py-20"
      >
        <GetInTouch />
      </div>
    </main>
  )
}

interface SectionProps {
  title: string
  children: React.ReactNode
  id: string
}

const Section = (props: SectionProps) => {
  const { title, id, children } = props
  return (
    <div id={id} className="mx-auto w-full max-w-4xl">
      <h2 className="font-display mb-4 text-4xl font-bold">{title}</h2>
      {children}
    </div>
  )
}
