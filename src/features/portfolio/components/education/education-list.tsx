import React from "react"
import Link from "next/link"
import { IEducation } from "@/types"

interface EducationListProps {
  educations: IEducation[]
}

export const EducationList = (props: EducationListProps) => {
  const { educations } = props
  return (
    <ul className="flex flex-col space-y-4">
      {educations.map((education, index) => (
        <li className="group relative cursor-pointer" key={index}>
          <Link href={education.link} target="_blank">
            {/* background */}
            <div className="absolute left-0 top-0 z-[-1] h-full w-full rounded-xl bg-[rgba(50,50,50,0.1)] opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100 dark:bg-[rgba(230,230,230,0.1)] dark:from-transparent dark:via-transparent dark:to-transparent" />
            {/* content */}
            <div className=" grid grid-cols-9 gap-6 p-6">
              <div className="col-span-2">
                <p className="text-sm font-medium uppercase text-foreground-secondary">
                  {education.startDate} - {education.endDate}
                </p>
              </div>
              <div className="col-span-6">
                <h3 className="text-lg font-bold">{education.school}</h3>
                <p className="text-md mb-1 text-foreground-secondary">
                  {education.degree}
                  {education.fieldOfStudy && `, ${education.fieldOfStudy}`}
                </p>
                {education.description && (
                  <p className="mb-2 text-sm">{education.description}</p>
                )}
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}

// import { Button } from "@/components/ui"
// import React from "react"

// const education = [
//   {
//     school: "Ecole Supérieure Privée d'Ingénierie et de Technologies - ESPRIT",
//     degree: "Engineer's degree",
//     fieldOfStudy: "Technologies de l'information",
//     description: "My main focus these days is building products and leading projects for our clients at Upstatement",
//     startDate: "2015",
//     endDate: "2020",
//   },
//   {
//     school: "GOMYCODE",
//     degree: "Engineer's degree",
//     fieldOfStudy: "Technologies de l'information",
//     startDate: "2015",
//     endDate: "2020",
//   },
// ]

// export const Education = () => {
//   return (
//     <div className="mx-auto max-w-4xl">
//       <h2 className="mb-4 font-display text-4xl font-bold">Education</h2>
//       <ul className="flex flex-col space-y-4">
//         {education.map((educ, index) => (
//           <li
//             key={index}
//             className="grid grid-cols-8 gap-6 rounded-xl p-6 transition-all hover:bg-[rgba(50,50,50,0.7)] hover:shadow-xl"
//           >
//             <div className="col-span-2 uppercase text-gray-400">
//               {educ.startDate} - {educ.endDate}
//             </div>
//             <div className="col-span-6">
//               <h3 className="text-lg font-bold">{educ.school}</h3>
//               <p className="text-md mb-1 text-gray-400">
//                 {educ.degree}
//                 {educ.fieldOfStudy && `, ${educ.fieldOfStudy}`}
//               </p>
//               {educ.description && <p className="text-sm mb-2 text-gray-200">{educ.description}</p>}
//             </div>
//           </li>
//         ))}
//       </ul>
//       <Button size="lg" variant="outline" className="mx-auto mt-6 block">
//         See all education
//       </Button>
//     </div>
//   )
// }
