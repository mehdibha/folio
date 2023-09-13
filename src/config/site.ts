import { ISiteConfig } from "@/types"

export const siteConfig: ISiteConfig = {
  name: "Notionfol.io",
  description:
    "Make your own portfolio + Notion-powered blog in minutes with Next.js and Vercel.",
  nav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Blog",
      href: "/blog",
    },
  ],
  links: {
    linkedin: "https://linkedin.com/mehdibha",
    github: "https://github.com/mehdibha",
    twitter: "https://twitter.com/mehdibha_",
  },
  portfolio: {
    about: {
      title:
        "I'm a Product Designer working remotely from 17°C Dublin, Ireland.",
      description: [
        "Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I've had the privilege of building software for an advertising agency, a start-up, a student-led design studio, and a huge corporation.",
        " My main focus these days is building products and leading projects for our clients at Upstatement. In my free time I've also released an online video course that covers everything you need to know to build a web app with the Spotify API.",
        "When I'm not at the computer, I'm usually rock climbing, hanging out with my wife and two cats, or unning around Hyrule searching for Korok seeds.",
      ],
    },
    experience: [
      {
        title: "Software Engineer",
        company: "Tech Solutions Inc.",
        link: "https://www.pengguin.com",
        location: "United States",
        startDate: "Jan 2019",
        endDate: "Present",
        description:
          "Developed and maintained web applications using modern technologies. Collaborated with cross-functional teams to deliver high-quality software solutions.",
        tags: [
          "Software Development",
          "Web Applications",
          "Modern Technologies",
          "Cross-Functional Teams",
          "High-Quality Software",
          "Collaboration",
        ],
      },
      {
        title: "Product Manager",
        company: "InnovateTech",
        link: "https://www.pengguin.com",
        location: "United States",
        startDate: "Jun 2017",
        endDate: "Dec 2018",
        description:
          "Led product development initiatives, defined product roadmaps, and coordinated with engineering and design teams to launch successful products.",
        tags: [
          "Product Development",
          "Product Roadmaps",
          "Engineering",
          "Design",
          "Coordination",
          "Launch",
          "Product Management",
        ],
      },
      {
        title: "Marketing Specialist",
        company: "Digital Marketing Agency",
        link: "https://www.pengguin.com",
        location: "United States",
        startDate: "Mar 2015",
        endDate: "May 2017",
        description:
          "Executed digital marketing campaigns, analyzed performance metrics, and optimized strategies to increase client ROI.",
        tags: [
          "Digital Marketing",
          "Campaigns",
          "Performance Metrics",
          "Strategy Optimization",
          "ROI Analysis",
        ],
      },
      {
        title: "Intern",
        company: "ABC Corporation",
        link: "https://www.pengguin.com",
        location: "United States",
        startDate: "Jun 2014",
        endDate: "Aug 2014",
        description:
          "Assisted in various departments, gaining exposure to marketing, sales, and project management.",
        tags: [
          "Internship",
          "Exposure",
          "Marketing",
          "Sales",
          "Project Management",
          "Assisting",
        ],
      },
    ],
    education: [
      {
        school:
          "Ecole Supérieure Privée d'Ingénierie et de Technologies - ESPRIT",
        link: "www.esprit.tn",
        degree: "Engineer's degree",
        fieldOfStudy: "Technologies de l'information",
        description:
          "My main focus these days is building products and leading projects for our clients at Upstatement",
        startDate: "2015",
        endDate: "2020",
      },
      {
        school: "GOMYCODE",
        link: "www.gomycode.tn",
        degree: "Engineer's degree",
        fieldOfStudy: "Technologies de l'information",
        startDate: "2015",
        endDate: "2020",
      },
    ],
    projects: [
      {
        title: "Build a Spotify Connected App",
        description:
          "Build a Spotify Connected App Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.",
        tags: ["React"],
      },
      {
        title: "Spotify profile",
        description:
          "Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
        tags: ["React", "Express", "Spotify API", "Node.js"],
      },
      {
        title: "Halcyon Theme",
        description: "Web app for visualizing personalized .",
        tags: ["React"],
      },
      {
        title: "brittanychiang.com (v4)",
        description:
          "Build a Spotify Connected App Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.",
        tags: ["React"],
      },
    ],
  },
}
