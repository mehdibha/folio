import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import "./globals.css";
import { Providers } from "./providers";

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
        className="antialiased"
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <div className="mx-auto max-w-2xl px-4">
            <main className="py-20">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
