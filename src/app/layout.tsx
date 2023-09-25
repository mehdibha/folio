import { Metadata } from "next"
import localFont from "next/font/local"
import { Footer, Header, ThemeProvider } from "@/components"
import { REVALIDATE_TIME, siteConfig } from "@/config"
import { Analytics } from "@vercel/analytics/react"
import "@/styles/globals.css"
import "@/styles/notion.css"

export const revalidate = REVALIDATE_TIME

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
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    images: siteConfig.image,
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
    <html lang="en" className={`${display.variable}`}>
      <body>
        <Analytics />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Header />
          <div className="min-h-[calc(100vh-64px)]">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
