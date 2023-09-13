import Image from "next/image"
import React from "react"

const about = {
  title: "I'm a Product Designer working remotely from 17°C Dublin, Ireland.",
  description: [
    "Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I've had the privilege of building software for an advertising agency, a start-up, a student-led design studio, and a huge corporation.",
    " My main focus these days is building products and leading projects for our clients at Upstatement. In my free time I've also released an online video course that covers everything you need to know to build a web app with the Spotify API.",
    "When I'm not at the computer, I'm usually rock climbing, hanging out with my wife and two cats, or unning around Hyrule searching for Korok seeds.",
  ],
}

export const About = () => {
  return (
    <div className="flex items-center space-x-12">
      <Image
        src="https://www.seanhalpin.xyz/about/faces.jpg"
        height={300}
        width={200}
        style={{ objectFit: "cover" }}
        alt=""
        className="my-6 rounded-b-xl rounded-t-full"
      />
      <div className="border-1 border-1 border-solid border-red-500">
        <h2 className="mb-4 font-display text-3xl font-bold">{about.title}</h2>
        {about.description.map((paragraph, index) => (
          <p
            className={`mb-${
              index === about.description.length -1 ? 0 : 4
            } text-lg`}
            key={index}
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  )
}
