import { FormValues, TemplateData } from "@/types"
import { template1 } from "./templates/template-01"

export function getTemplateData(data: FormValues): TemplateData {
  switch (data.selectedTemplate) {
    default:
      return {
        texDoc: template1(data),
        opts: {
          cmd: "pdflatex",
        },
      }
  }
}
