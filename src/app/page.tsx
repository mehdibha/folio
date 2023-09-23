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
import { generatePDF } from "@/lib/resume"

async function getData() {
  const posts = await getAllPosts({ includePages: false })
  const pdf = await generatePDF({
    headings: {
      basics: "Personal Information",
      work: "Work Experience",
      education: "Education",
      skills: "Skills",
      projects: "Projects",
      awards: "Awards",
      publications: "Publications",
      volunteer: "Volunteer Experience",
    },
    sections: [
      "basics",
      "work",
      "education",
      "skills",
      "projects",
      "awards",
      "publications",
      "volunteer",
    ],
    selectedTemplate: 1, // Replace with the selected template number
    basics: {
      name: "John Doe",
      email: "johndoe@example.com",
      phone: "+1 (123) 456-7890",
      location: {
        address: "123 Main Street",
        city: "Anytown",
        countryCode: "US",
        region: "CA",
      },
    },
    work: [
      {
        name: "ABC Company",
        position: "Software Engineer",
        startDate: "2020-01-01",
        endDate: "2022-12-31",
        summary: "Worked on web application development.",
        highlights: ["Implemented new features", "Fixed bugs"],
        location: "Anytown, USA",
      },
      // Add more work experiences if needed
    ],
    education: [
      {
        institution: "XYZ University",
        area: "Computer Science",
        studyType: "Bachelor's Degree",
        startDate: "2016-09-01",
        endDate: "2020-05-31",
        location: "Cityville, USA",
      },
      // Add more education entries if needed
    ],
    skills: [
      {
        name: "JavaScript",
        level: "Advanced",
        keywords: ["React", "Node.js"],
      },
      // Add more skills if needed
    ],
    projects: [
      {
        name: "Project X",
        description: "Developed a web application for project management.",
        highlights: [
          "Designed the user interface",
          "Implemented user authentication",
        ],
        keywords: ["Web Development", "React"],
        startDate: "2021-03-15",
        endDate: "2021-06-30",
      },
      // Add more projects if needed
    ],
    awards: [
      {
        title: "Outstanding Student Award",
        date: "2020-05-15",
        awarder: "XYZ University",
        summary: "Recognized for academic excellence.",
      },
      // Add more awards if needed
    ],
    publications: [
      {
        name: "Paper on Web Development Trends",
        publisher: "Tech Journal",
        releaseDate: "2021-08-20",
        url: "https://example.com/paper",
        summary:
          "Published an article on the latest trends in web development.",
      },
      // Add more publications if needed
    ],
    volunteer: [
      {
        organization: "Charity Foundation",
        position: "Volunteer Coordinator",
        startDate: "2019-06-01",
        endDate: "2020-02-28",
        summary: "Coordinated volunteer activities for community events.",
        highlights: [
          "Organized fundraising events",
          "Managed volunteer schedules",
        ],
      },
      // Add more volunteer experiences if needed
    ],
  })

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
