import { FormValues } from "@/types"
import { execSync } from "child_process"
import fs from "fs"
import latex from "node-latex"
import { getTemplateData } from "./get-template-data"

export async function generatePDF(formData: FormValues) {
  const { texDoc, opts } = getTemplateData(formData)

  // const pdf = await latex(texDoc, opts)
  // Import the child_process module

  // Install TinyTeX
  try {
    execSync('curl -sL "https://yihui.org/tinytex/install-bin-unix.sh" | sh')
  } catch (error) {
    console.error("Error installing TinyTeX:", error)
  }

  fs.writeFile("./public/resume.tex", texDoc, (err) => {
    if (err) {
      console.error("Error writing to output.tex:", err)
    } else {
      console.log("LaTeX content has been written to output.tex")
    }
  })

  const output = fs.createWriteStream("./public/resume.pdf")

  latex(texDoc, opts).pipe(output)
}
