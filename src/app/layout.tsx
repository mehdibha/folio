// "use client"
import { Metadata } from "next"
import localFont from "next/font/local"
import { Footer, Header, ThemeProvider } from "@/components"
import { siteConfig } from "@/config"
import "@/styles/globals.css"
import "@/styles/notion.css"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

const display = localFont({
  src: "../assets/fonts/Acorn-Bold.woff2",
  variable: "--font-display",
  display: "swap",
})

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${display.variable} scroll-smooth`}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Header />
          <div className="min-h-[calc(100vh-64px)]">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
