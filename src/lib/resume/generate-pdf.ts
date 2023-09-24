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
  // try {
  //   execSync('curl -sL "https://yihui.org/tinytex/install-bin-unix.sh" | sh')
  // } catch (error) {
  //   console.error("Error installing TinyTeX:", error)
  // }

  const content = `\documentclass{article} % Document class (article, report, book, etc.)
    % Dummy text generator
  
  % Title and Author
  \title{Your Title Here}
  \author{Your Name}
  \date{\today} % Use \date{} to set a specific date
  
  \begin{document}
  
  \maketitle % Generates the title based on the information provided above
  
  \section{Introduction}
  
  This is the introduction section of your document. You can start writing your content here.
  
  \section{Main Content}
  
  Here's some more content. You can use various LaTeX commands for formatting, such as \textit{italic}, \textbf{bold}, and \texttt{typewriter} text. You can also create lists:
  
  \begin{itemize}
    \item Item 1
    \item Item 2
    \item Item 3
  \end{itemize}
  
  Or numbered lists:
  
  \begin{enumerate}
    \item First item
    \item Second item
    \item Third item
  \end{enumerate}
  
  You can include figures:
  
  \begin{figure}[h]
    \centering
    \includegraphics[width=0.5\textwidth]{example-image}
    \caption{A sample figure.}
    \label{fig:sample}
  \end{figure}
  
  And you can reference figures like this: Figure~\ref{fig:sample}.
  
  \subsection{Subsection}
  
  You can create subsections to organize your content further.
  
  \section{Conclusion}
  
  This is the conclusion section of your document.
  
  \section*{Acknowledgments} % Unnumbered section
  
  You can also create unnumbered sections like acknowledgments.
  
  \appendix % Start appendices
  
  \section{Appendix A}
  
  You can include appendices in your document as well.
  
  \end{document}`

  fs.writeFile("./public/resume.tex", content, (err) => {
    if (err) {
      console.error("Error writing to output.tex:", err)
    } else {
      console.log("LaTeX content has been written to output.tex")
    }
  })

  const output = fs.createWriteStream("./public/resume.pdf")

  latex(texDoc, opts).pipe(output)
}
