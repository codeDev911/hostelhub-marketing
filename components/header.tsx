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
    <header className="sticky top-0 z-50 bg-primary-foreground border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity flex-shrink-0">
            <div className="w-6 h-6 bg-accent rounded-sm flex items-center justify-center">
              <img src="/logo2.png" className="w-full h-full" alt="Logo" />
            </div>
            <h1 className="text-2xl font-bold text-primary sm:block">HostelHub</h1>
          </Link>

          {/* Desktop Navigation & Search */}
          <nav className="hidden md:flex items-center gap-8 grow">
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
          </nav>

           <Button
           onClick={()=> router.push("/hostels")}
                variant={"outline"}
                className="max-md:hidden  text-muted-foreground  transition-colors"
              >
                <Search className="w-4 h-4" />
              </Button>
            {
              theme === "light"?
            <Button onClick={()=>setTheme("dark")} variant={"outline"}>
              <MoonIcon className="w-5 h-5"/>
            </Button>
              :
            <Button onClick={()=>setTheme("light")} variant={"outline"}>
              <SunIcon className="w-5 h-5"/>
            </Button>
            }

          {session && session?.userId?
          <Popover>
            <PopoverTrigger>
              <Button type="submit"  className=""  variant={"secondary"}>
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
          </Popover>:<div className="hidden md:flex items-center gap-2 shrink-0">
            <Link href="/student/login">
              <button className="px-4 py-2 text-foreground hover:text-accent transition-colors font-medium border border-border rounded-sm hover:bg-secondary">
                Login
              </button>
            </Link>
            <Link href="/student/register">
              <button className="px-4 py-2 bg-accent text-accent-foreground hover:bg-accent/90 transition-colors font-medium rounded-sm">
                Sign Up
              </button>
            </Link>
          </div>}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-secondary rounded-sm transition-colors flex-shrink-0"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation & Search */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-2 border-t border-border pt-4">
            <form onSubmit={handleSearch} className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search hostels..."
                  className="w-full px-4 py-2 border-2 border-border rounded-sm focus:outline-none focus:border-accent transition-colors text-sm"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-accent transition-colors"
                >
                  <Search className="w-4 h-4" />
                </button>
              </div>
            </form>

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
            <div className="border-t border-border pt-4 mt-4 ">
              <Link href="/student/login" onClick={() => setMobileMenuOpen(false)}>
                <button className="w-full px-4 py-2 text-foreground hover:bg-secondary transition-colors font-medium border border-border rounded-sm">
                  Login
                </button>
              </Link>
              <Link href="/student/register" onClick={() => setMobileMenuOpen(false)}>
                <button className="w-full px-4 py-2 bg-accent text-accent-foreground hover:bg-accent/90 transition-colors font-medium rounded-sm">
                  Sign Up
                </button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export { Header }
export default Header
