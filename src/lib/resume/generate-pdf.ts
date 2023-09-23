import { FormValues } from "@/types"
import { execSync } from "child_process"
import fs from "fs"
import latex from "node-latex"
import { getTemplateData } from "./get-template-data"

export async function generatePDF(formData: FormValues) {
  const { texDoc, opts } = getTemplateData(formData)

  // Install R (Choose the appropriate URL for your system from the R Project website)
  try {
    execSync(
      "curl -o Rinstaller.exe https://cran.r-project.org/bin/windows/base/R-4.1.1-win.exe"
    )
    execSync("Rinstaller.exe /SILENT")
    execSync("del Rinstaller.exe")
  } catch (error) {
    console.error("Error installing R:", error.message)
  }

  // Install TinyTeX
  try {
    execSync("R -e \"install.packages('tinytex');tinytex::install_tinytex()\"")
  } catch (error) {
    console.error("Error installing TinyTeX:", error.message)
  }

  // const pdf = await latex(texDoc, opts)

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
