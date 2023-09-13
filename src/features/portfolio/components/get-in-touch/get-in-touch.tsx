import { Button } from "@/components/ui"
import React from "react"

export const GetInTouch = () => {
  return (
    <div className="container max-w-xl text-center">
      <h2 className="mb-4 font-display text-4xl">Get in touch</h2>
      <p className="mb-8">
        Although I’m not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I’ll
        try my best to get back to you!
      </p>
      <Button size="lg">Say hello</Button>
    </div>
  )
}
