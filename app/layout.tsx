import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { getSession } from "@/lib/auth"
import { Toaster } from "sonner"
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider"

// Configure Rubik
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins", // Define the CSS variable
});
export const metadata: Metadata = {
  title: " Pakistan’s #1 Student Housing, Community & Growth Platform",
  description:
    "From verified hostels and roommates to student communities, scholarships, and support. HostelHub is building Pakistan’s most trusted student-friendly ecosystem."
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  const session : any = await getSession();
  
  
  return (
    <html lang="en" className={poppins.variable}> 
        <body className={`font-sans antialiased`}>

      <ThemeProvider attribute={"class"} defaultTheme="system">
        <Header session={session}/>
        {children}
        <Toaster  position="top-center" closeButton/>
        <Analytics />
        <Footer/>
      </ThemeProvider>
      </body>
    </html>
  )
}
