import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "next-themes"
import { getSession } from "@/lib/auth"
import { Toaster } from "sonner"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Find Your Perfect Hostel in Pakistan - HostelHub",
  description:
    "Book affordable hostels for students across Pakistan. Find the best accommodation near your university.",
   icons: {
      icon:"/logo.png",
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  const session : any = await getSession();
  
  
  return (
    <html> 
        <body className={`font-sans antialiased`}>

      {/* <ThemeProvider attribute={"class"}> */}
        <Header session={session}/>
        {children}
        <Toaster  position="top-center" closeButton/>
        <Analytics />
        <Footer/>
      {/* </ThemeProvider> */}
      </body>
    </html>
  )
}
