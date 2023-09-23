import { FormValues } from "@/types"
import fs from "fs"
import latex from "node-latex"
import { getTemplateData } from "./get-template-data"

export async function generatePDF(formData: FormValues) {
  const { texDoc, opts } = getTemplateData(formData)

  // const pdf = await latex(texDoc, opts)

  fs.writeFile("./public/resume.tex", texDoc, (err) => {
    if (err) {
      console.error("Error writing to output.tex:", err)
    } else {
      console.log("LaTeX content has been written to output.tex")
    }
  })

  // fs.writeFile('./output.tex',texDoc)
  // const output = fs.createWriteStream("./output.pdf")

  // latex(texDoc, opts).pipe(output)
  //   pdf.pipe(res)
  //   res.setHeader('Content-Type', 'application/pdf')
}
