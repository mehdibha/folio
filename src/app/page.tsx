import {
  About,
  Education,
  GetInTouch,
  HeroBanner,
  WorkExperience,
  Projects,
} from "@/features/portfolio"
import { PostsList, getAllPosts } from "@/features/blog"
import { AnimatedGradient } from "@/components"
import { Button } from "@/components/ui"
import Link from "next/link"

async function getData() {
  const posts = await getAllPosts({ includePages: false })
  return { posts }
}

export default async function Home() {
  const { posts } = await getData()

  return (
    <main>
      <AnimatedGradient />
      <HeroBanner />
      <div className="container flex flex-col space-y-24">
        <About />
        <Section title="Experience">
          <WorkExperience />
        </Section>
        <Section title="Education">
          <Education />
        </Section>
        <Section title="Some featured projects">
          <Projects />
        </Section>
        {posts && (
          <Section title="Latest posts">
            <PostsList posts={posts.slice(0, 3)} />
            <div className="text-center">
              <Button size="lg" asChild className="mx-auto mt-6">
                <Link href="/projects">See all blog posts</Link>
              </Button>
            </div>
          </Section>
        )}
      </div>
      <div className="flex min-h-[calc(100vh-160px)] items-center justify-center py-20">
        <GetInTouch />
      </div>
    </main>
  )
}

interface SectionProps {
  title: string
  children: React.ReactNode
}

const Section = (props: SectionProps) => {
  const { title, children } = props
  return (
    <div className="mx-auto w-full max-w-4xl">
      <h2 className="mb-4 font-display text-4xl font-bold">{title}</h2>
      {children}
    </div>
  )
}
