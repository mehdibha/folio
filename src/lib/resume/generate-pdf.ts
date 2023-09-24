// import { FormValues } from "@/types"
import { DYNAMIC_DOCS_TOKEN } from "@/config"
import { delay } from "@/utils"
import axios from "axios"
import fs from "fs"
import { getTemplateData } from "./get-template-data"

const formData = {
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
      summary: "Published an article on the latest trends in web development.",
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
}

// export async function generatePDFResume(formData: FormValues) {
export async function generatePDFResume() {
  try {
    const { texDoc } = getTemplateData(formData)

    // // if you want to generate also your resume in latex
    // fs.writeFile("./public/resume.tex", texDoc, (err) => {
    //   if (err) {
    //     console.error("Error writing to resume.tex", err)
    //   } else {
    //     console.log("LaTeX content has been written to resume.tex")
    //   }
    // })

    const jobStatusResponse = await axios.post(
      "https://api.advicement.io/v1/templates/pub-tex-to-pdf-with-pdflatex-v1/compile",
      { texFileContent: texDoc },
      {
        headers: {
          "Adv-Security-Token": DYNAMIC_DOCS_TOKEN,
        },
      }
    )

    await delay(20000) // wait 20sec until the job is finished

    const { data } = await axios.get(jobStatusResponse.data.documentStatusUrl)
    const documentUrl = data.documentUrl

    const response = await axios.get(documentUrl, { responseType: "stream" })

    // Pipe the response data to a writable stream to save the file
    response.data.pipe(fs.createWriteStream("./public/resume.pdf"))

    // Wait for the file to finish writing
    await new Promise((resolve, reject) => {
      response.data.on("end", resolve)
      response.data.on("error", reject)
    })

    console.log("PDF downloaded successfully.")
  } catch (error) {
    console.log(error)
  }
}
