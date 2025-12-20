"use client"

import type React from "react"

import Link from "next/link"
import { Menu, X, Search, MoonIcon, SunIcon, UserIcon } from "lucide-react"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "./ui/button"
import { useTheme } from "next-themes"
import { Popover, PopoverAnchor, PopoverContent, PopoverTrigger } from "./ui/popover"
import { PopoverPortal } from "@radix-ui/react-popover"
import { Separator } from "./ui/separator"
import { destroySession } from "@/lib/client-auth"
 
function Header({session}:any) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const {theme,setTheme} = useTheme();
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

    

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/hostels?search=${encodeURIComponent(searchQuery)}`)
      setSearchQuery("")
      setMobileMenuOpen(false)
    }
  }


  

  return (
    <header className="sticky top-0 z-50  ">
      <div className="max-w-7xl mx-auto ">
        <div className="flex w-full items-center p-2 justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex max-sm:w-[70%]  md:px-8 px-6 md:p-4 p-3 shadow- rounded-full bg-card items-center gap-2 hover:opacity-80 transition-opacity shrink-0">
            <div className="w-6.5 h-6.5  flex rounded-md items-center justify-center">
              <img src="/logo.png" className="w-full h-full" alt="Logo" />
            </div>
            <h3 className="text-xl font-bold text-primary sm:block">HostelHub</h3>
          </Link>

          {/* Desktop Navigation & Search */}
          <div className="hidden  md:flex bg-card p-4 rounded-full shadow- px-8 items-center gap-8 ">
            <Link href="/" className="text-foreground hover:text-accent transition-colors font-medium">
              Home
            </Link>
            <Link href="/hostels" className="text-foreground hover:text-accent transition-colors font-medium">
              Hostels
            </Link>
            <Link href="/about" className="text-foreground hover:text-accent transition-colors font-medium">
              About
            </Link>
            <Link href="/contact" className="text-foreground hover:text-accent transition-colors font-medium">
              Contact
            </Link>
            <Link href="/hostel-owners" className="text-foreground hover:text-accent transition-colors font-medium">
              For Owners
            </Link>
          </div>

          <div className="space-x-4 bg-card rounded-full shadow- md:p-3 p-2 md:px-8 px-6 flex items-center">
           <Button
           onClick={()=> router.push("/hostels")}
                variant={"outline"}
                className="max-md:hidden cursor-pointer rounded-full bg-card text-muted-foreground  transition-colors"
              >
                <Search className="w-4 h-4 " />
              </Button>
             

          {session && session?.userId?
          <Popover>
            <PopoverTrigger asChild>
              <Button type="submit"  className=""   variant={"secondary"}>
                <UserIcon className="w-5 h-5"/>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="max-w-[180px] p-3 ">
              

              <h2 className="mb-1 text-sm font-bold text-primary ">User</h2>
              <p className="text-xs text-muted-foreground">{session?.email}</p>
              <p className="text-xs mb-1 text-muted-foreground">{session?.phone}</p>
              <Separator/>

              <h2 className="my-1 text-sm font-bold text-primary">Quick Actions</h2>
              <div className="text-sm mt-1 w-full flex flex-col ">
                <Link href={"/me"} className="p-2 flex-1 rounded-md hover:bg-secondary ">View profile</Link>  
                <Link href={"#"} onClick={()=>destroySession()} className="p-2 flex-1 text-destructive rounded-md hover:bg-secondary ">Logout</Link>  
              </div>
            </PopoverContent>
          </Popover>:<div className="hidden md:flex items-center gap-3 shrink-0">
            <Link href="/student/login">
              <button className="px-4 p-1 cursor-pointer text-foreground hover:text-accent transition-colors font-medium border border-border rounded-full hover:bg-secondary">
                Login
              </button>
            </Link>
            <Link href="/student/register">
              <button className="px-4 p-1 cursor-pointer bg-accent text-accent-foreground hover:bg-accent/90 transition-colors font-medium rounded-full">
                Sign Up
              </button>
            </Link>
          </div>}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-secondary rounded-full transition-colors flex-shrink-0"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
        </div>

        {/* Mobile Navigation & Search */}
        {mobileMenuOpen && (
          <>
           <div onClick={()=>setMobileMenuOpen(false)} className="fixed top-0 w-screen h-screen bg-foreground/20 backdrop-blur-sm left-0 -z-10"></div>
          <nav className="md:hidden mt-4 pb-4 bg-card space-y-2 shadow-2xl z-30 rounded-2xl m-4 p-4">

            <Link
              href="/"
              className="block px-4 py-2 text-foreground hover:bg-secondary rounded-sm transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/hostels"
              className="block px-4 py-2 text-foreground hover:bg-secondary rounded-sm transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Hostels
            </Link>
            <Link
              href="/about"
              className="block px-4 py-2 text-foreground hover:bg-secondary rounded-sm transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-2 text-foreground hover:bg-secondary rounded-sm transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/hostel-owners"
              className="block px-4 py-2 text-foreground hover:bg-secondary rounded-sm transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              For Owners
            </Link>
             <form onSubmit={handleSearch} className="mb-4 border-t  border-border pt-4 mt-4">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search hostels..."
                  className="w-full px-4 py-3 border border-border rounded-full focus:outline-none focus:border-accent transition-colors text-sm"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-accent transition-colors"
                >
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </form>
          {session && session?.userId ?"":   <div className="flex flex-col ">
              <Link href="/student/login" onClick={() => setMobileMenuOpen(false)}>
                <button className="w-full px-4 py-2 text-foreground hover:bg-secondary transition-colors font-medium border border-border rounded-full">
                  Login
                </button>
              </Link>
              <Link href="/student/register" className="mt-4" onClick={() => setMobileMenuOpen(false)}>
                <button className="w-full px-4 py-2 bg-accent text-accent-foreground hover:bg-accent/80 transition-colors font-medium rounded-full">
                  Sign Up
                </button>
              </Link>
            </div>}
          </nav>
          </>
        )}
      </div>
    </header>
  )
}

export { Header }
export default Header
