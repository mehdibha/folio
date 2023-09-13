// "use client"
import React from "react"
import { Badge } from "@/components/ui"
import Image from "next/image"
import Link from "next/link"
import { SearchBar } from "@/features/blog"
import { getAllPosts } from "@/lib/notion"

const keywords = [
  "career",
  "react",
  "node",
  "review",
  "personal",
  "databases",
  "remix",
  "typescript",
  "user experience",
  "css",
  "testing",
  "javascript",
  "productivity",
  "open source",
  "programming",
  "teaching",
  "state",
  "performance",
  "learning",
]

const posts = [
  {
    title: "Fetch Data in React JS in a Modern Way",
    description:
      "There are several ways to fetch data in a React application. Here are some of the most common: Fetch API: The Fetch API is a built-in browser API for fetching resources, including data from a server. It...",
    tags: ["Programming"],
    timeToRead: 4,
    date: "Jul 23, 2023",
    link: "fetch-data-in-react-js-in-a-modern-way",
  },
  {
    title: "Getting Started with Node.js and Express",
    description:
      "Learn the basics of Node.js and Express to build scalable and fast web applications. This tutorial covers setting up a Node.js project, creating routes, and handling requests.",
    tags: ["Node.js", "Express", "Web Development"],
    timeToRead: 6,
    date: "Aug 10, 2023",
    link: "getting-started-with-nodejs-and-express",
  },
  {
    title: "Introduction to Machine Learning with Python",
    description:
      "Explore the world of machine learning with Python. This introductory guide covers the fundamentals of machine learning, including data preprocessing, model training, and evaluation.",
    tags: ["Machine Learning", "Python"],
    timeToRead: 5,
    date: "Sep 5, 2023",
    link: "introduction-to-machine-learning-with-python",
  },
  {
    title: "Mastering CSS Grid Layout for Responsive Web Design",
    description:
      "CSS Grid Layout is a powerful tool for creating responsive web layouts. This comprehensive tutorial will help you master CSS Grid and create flexible, responsive designs for your websites.",
    tags: ["Web Design", "CSS Grid", "Responsive Design"],
    timeToRead: 7,
    date: "Oct 2, 2023",
    link: "mastering-css-grid-layout-for-responsive-web-design",
  },
  {
    title: "Building RESTful APIs with Django and Django REST framework",
    description:
      "Learn how to build RESTful APIs using the Django web framework and Django REST framework. This tutorial covers API development, authentication, serialization, and more.",
    tags: ["Django", "RESTful API", "Web Development"],
    timeToRead: 6,
    date: "Nov 15, 2023",
    link: "building-restful-apis-with-django-and-django-rest-framework",
  },
]

async function getData() {
  const posts = await getAllPosts({ includePages: false })
  return { posts }
}

// {
//   id: '4351daf9-72c0-48f9-9212-d66e5c0f8c4d',
//   date: { start_date: '2021-03-11' },
//   type: [ 'Post' ],
//   slug: 'next-for-vercel',
//   tags: [ 'Website' ],
//   summary: "What's Next",
//   title: 'Next for Vercel',
//   status: [ 'Published' ],
//   fullWidth: false,
//   createdTime: 'Sun May 28 2023 20:14:07 GMT+0100 (Central European Standard Time)'
// }

const Blog = async () => {
  const { posts } = await getData()
  // console.log("heyp",posts)
  // const [selectedTopics, setSelectedTopics] = React.useState<string[]>([])
  // const handleTopicClick = (newTopic: string) => {
  //   if (selectedTopics.includes(newTopic)) {
  //     setSelectedTopics(selectedTopics.filter((elem) => elem !== newTopic))
  //   } else {
  //     setSelectedTopics([...selectedTopics, newTopic])
  //   }
  // }
  return (
    <div className="pt-8">
      <h1 className="mb-4 text-center	text-4xl font-bold">
        Learn development with great articles.
      </h1>
      <div className="container mb-10 max-w-3xl">
        <SearchBar />
      </div>
      <div className="container mb-6 max-w-6xl">
        <h2 className="mb-5 text-xl font-bold">Search blog by topics</h2>
        <div className="mb-10 flex flex-wrap gap-3">
          {keywords.map((keyword) => {
            // const selected = selectedTopics.includes(keyword)
            return (
              <Badge
                key={keyword}
                className="focus-ring cursor-pointer px-4 py-2"
                selected={false}
                // onClick={false}
                // disabled={Boolean(!visibleTags.has(tag)) ? !selected : false}
              >
                {keyword}
              </Badge>
            )
          })}
        </div>
        <ul className="flex flex-col space-y-4">
          {posts.map((post, index) => (
            <Link href={`/blog/${post.slug}`} key={index}>
              <li className="focus-ring cursor-pointer rounded-lg bg-gray-300 p-4 shadow-md dark:bg-gray-800">
                <div className="flex space-x-4">
                  <div>
                    <h2 className="text-lg font-bold">{post.title}</h2>
                    <p className="mb-1 text-sm text-gray-400">
                      Published on {post.createdTime} • 4 min read
                    </p>
                    <p className="mb-3 text-sm">{post.summary}</p>
                    <div className="flex space-x-2">
                      {post.tags && post.tags.map((tag) => (
                        <Badge
                          variant="outline"
                          key={tag}
                          className="border-current pb-1"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    {/* TODO: fix image size issue */}
                    <Image
                      src="https://miro.medium.com/v2/resize:fill:140:140/0*70WW9yETGs2BFPp6"
                      width={112}
                      height={112}
                      loading="lazy"
                      alt={post.title}
                    />
                  </div>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Blog
