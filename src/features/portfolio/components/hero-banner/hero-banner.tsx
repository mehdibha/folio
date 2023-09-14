import React from "react"
import { Button } from "@/components/ui"
import Link from "next/link"

export const HeroBanner = () => {
  return (
    <div className=" flex min-h-[calc(100vh-64px)] items-center justify-center">
      <div className="pb-28">
        <h1 className="mb-2 text-center font-display text-7xl">
          Hey there. I&apos;m <span className="text-primary">Notionfol.io</span>
          .
          <br />
          An awesome open-source project.
        </h1>
        <h2 className="mb-8 text-center text-xl">
          I&apos;m passionate about crafting experiences that are engaging,
          accessible, and user-centric.
        </h2>
        <div className="ali flex justify-center space-x-4">
          <Link href="/blog">
            <Button size="lg">Read the blog</Button>
          </Link>
          <Link href="#projects">
            <Button variant="neutral" size="lg">
              Browse projects
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
