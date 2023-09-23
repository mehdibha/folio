import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Star } from "@/assets/icons"
import { ICourse } from "@/types"
import { Badge } from "@/components/ui"

interface CoursesListProps {
  courses: ICourse[]
}

export const CoursesList = (props: CoursesListProps) => {
  const { courses } = props
  return (
    <ul className="grid grid-cols-12 gap-6">
      {courses.map((course, index) => {
        return (
          <li
            className="group relative col-span-12 h-[300px] cursor-pointer p-4 sm:col-span-6 md:col-span-4 lg:col-span-3"
            key={index}
          >
            <Link href={course.link} target="_blank">
              {/* background */}
              <div className="absolute left-0 top-0 z-[-1] h-full w-full rounded-xl border-2 border-gray-400 bg-[rgba(50,50,50,0.1)] opacity-30 shadow-md transition-all duration-300 group-hover:opacity-100 dark:border-slate-200/30 dark:bg-[rgba(230,230,230,0.1)] dark:from-transparent dark:via-transparent dark:to-transparent" />
              {course.price && (
                <Badge className="absolute right-4 top-4" size="sm">
                  {course.price}
                </Badge>
              )}
              {/* content */}
              <div className="flex h-full flex-col">
                <div className="flex-1">
                  <Image
                    src={course.image}
                    width={50}
                    height={50}
                    alt={course.title}
                    className="mb-2 rounded-md border-2 border-slate-200/10  duration-300"
                  />
                  <h2 className="text-lg font-bold">{course.title}</h2>
                  <p className="text-md text-foreground-secondary mt-1">
                    {course.description}
                  </p>
                </div>
                <div>
                  <div className="text-foreground-secondary flex items-center space-x-1 text-sm">
                    <Star size={15} />
                    <span>{course.rate}</span>
                    <span>{`(${course.numberReviews} reviews)`}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    {course.tags.map((tag, index) => (
                      <React.Fragment>
                        <span>{tag}</span>
                        {index !== course.tags.length - 1 && <span>•</span>}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
