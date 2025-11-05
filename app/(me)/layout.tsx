import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "../globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "next-themes"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Find Your Perfect Hostel in Pakistan - HostelHub",
  description:
    "Book affordable hostels for students across Pakistan. Find the best accommodation near your university.",
   icons: {
      icon:"/logo2.png",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html>
      <body className={`font-sans antialiased`}>
        <section className="max-w-7xl p-2 mx-auto">
            {children}
        </section>
      </body>
    </html>
  )
}
