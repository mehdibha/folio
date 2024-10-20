import type { Metadata } from "next";
import localFont from "next/font/local";
import { Footer } from "@/components/footer";
import "./globals.css";
import { Providers } from "./providers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Mehdi BHA",
  description: "Design engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <div className="mx-auto max-w-xl">
            <main className="py-20">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
