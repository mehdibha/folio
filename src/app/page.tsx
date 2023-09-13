import {
  About,
  Education,
  GetInTouch,
  HeroBanner,
  WorkExperience,
  Projects
} from "@/features/portfolio"
import { Posts } from "@/features/blog"
import { AnimatedGradient } from "@/components"

export default function Home() {
  return (
    <main>
      <AnimatedGradient />
      <HeroBanner />
      <div className="container flex flex-col space-y-24 pb-36">
        <About />
        <WorkExperience />
        <Education />
        <Projects />
        <Posts />
        <GetInTouch />
      </div>
    </main>
  )
}
