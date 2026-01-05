"use client"

import type React from "react"

import Link from "next/link"
import { Menu, X, Search, MoonIcon, SunIcon, UserIcon, ChevronDown, Sun, Moon } from "lucide-react"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "./ui/button"
import { useTheme } from "next-themes"
import { Popover, PopoverAnchor, PopoverContent, PopoverTrigger } from "./ui/popover"
import { PopoverPortal } from "@radix-ui/react-popover"
import { Separator } from "./ui/separator"
import { destroySession } from "@/lib/client-auth"

function Header({ session }: any) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme();
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
          <Link href="/" className="flex max-sm:w-[70%]  md:px-8 px-6 md:p-4 p-3  rounded-full bg-card/70 backdrop-blur-2xl items-center gap-2 hover:opacity-80 transition-opacity shrink-0">
            <div className="w-8 h-8 bg-white p-1   flex rounded-md items-center justify-center">
              <img src="/logo.png" className="w-full h-full" alt="Logo" />
            </div>
            <h3 className="text-xl font-bold text-primary sm:block">HostelHub</h3>
          </Link>

          {/* Desktop Navigation & Search */}
          <div className="hidden md:flex bg-card/70 backdrop-blur-2xl p-4 rounded-full px-8 items-center gap-8">
            <Link href="/blogs" className="nav-link">Blogs</Link>
            <Link href="/hostels" className="nav-link">Hostels</Link>


            <Link href="/about" className="nav-link">About</Link>

            {/* Explore Dropdown */}
            <Popover>
              <PopoverTrigger asChild>
                <button className="flex cursor-pointer items-center gap-1  ">
                  Explore <ChevronDown className="w-4 h-4" />
                </button>
              </PopoverTrigger>

              <PopoverContent align="start" className="w-56 p-2 border-0 shadow-2xl rounded-2xl bg-card/70 backdrop-blur-2xl">
                
                <div className="flex flex-col text-sm">
                  <p className="text-muted-foreground px-2 py-1">Products / Features</p>
                  <Link href="/community" className="p-2 hover:bg-secondary rounded-xl ">Community</Link>
                  <Link href="/find-roommate" className="p-2 hover:bg-secondary rounded-xl ">Find roommate</Link>
                  <Link href="/find-hostels" className="p-2 hover:bg-secondary rounded-xl ">Find hostel</Link>
                <Separator className="my-1"/>
                  <p className="text-muted-foreground px-2 py-1">Business</p>
                  <Link href="/hostel-owners" className="p-2 hover:bg-secondary rounded-xl ">Hostel buiness</Link>
                <Separator className="my-1"/>
                  <p className="text-muted-foreground px-2 py-1">Helpfull links</p>
                  <Link href="/cities" className="p-2 hover:bg-secondary rounded-xl ">Cities</Link>
                  <Link href="/contact" className="p-2 hover:bg-secondary rounded-xl ">Contact</Link>
                </div>
              </PopoverContent>
            </Popover>
          </div>

          <div className="space-x-4  bg-card/70 backdrop-blur-2xl rounded-full shadow- md:p-3 p-2 md:px-8 px-6 flex items-center">
            <Button
              onClick={() => router.push("/hostels")}
              variant={"outline"}
              size={"icon"}
              className="max-md:hidden cursor-pointer  hover:bg-secondary rounded-full bg-card text-muted-foreground  transition-colors"
            >
              <Search className="w-4 h-4 " />
            </Button>
            <Button
              onClick={() => setTheme(theme == "dark"?"light":"dark")}
              variant={"outline"}
              size={"icon"}
              className="max-md:hidden cursor-pointer  hover:bg-secondary rounded-full bg-card text-muted-foreground  transition-colors"
            >
              {theme == "light"?<Sun className="w-4 h-4 transition-all " />:<Moon className="w-4 h-4 transition-all" />}
            </Button>



            {session && session?.userId ?
              <Popover>
                <PopoverTrigger asChild>
                  <Button type="submit" size={"icon"} 
              className=" cursor-pointer  hover:bg-secondary rounded-full bg-card text-muted-foreground  transition-colors"
                  variant={"secondary"}>
                    <UserIcon className="w-4 h-4" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="max-w-[180px] p-3 ">


                  <h2 className="mb-1 text-sm font-bold text-primary ">User</h2>
                  <p className="text-xs text-muted-foreground">{session?.email}</p>
                  <p className="text-xs mb-1 text-muted-foreground">{session?.phone}</p>
                  <Separator />

                  <h2 className="my-1 text-sm font-bold text-primary">Quick Actions</h2>
                  <div className="text-sm mt-1 w-full flex flex-col ">
                    <Link href={"/me"} className="p-2 flex-1 rounded-md hover:bg-secondary ">View profile</Link>
                    <Link href={"#"} onClick={() => destroySession()} className="p-2 flex-1 text-destructive rounded-md hover:bg-secondary ">Logout</Link>
                  </div>
                </PopoverContent>
              </Popover> : <div className="hidden md:flex items-center gap-3 shrink-0">
                <Link href="/student/login">
                  <button className="px-4 p-1 cursor-pointer bg-card text-foreground  transition-colors font-medium border border-border rounded-full hover:bg-secondary">
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
            <div onClick={() => setMobileMenuOpen(false)} className="fixed top-0 w-screen h-screen bg-card/20 backdrop-blur-sm left-0 -z-10"></div>
            <nav className="md:hidden mt-4 pb-4 bg-card/70 backdrop-blur-2xl space-y-2 shadow-2xl z-30 rounded-2xl m-4 p-4">

              <Link
                href="/blogs"
                className="block px-4 py-2 text-foreground hover:bg-secondary rounded-sm transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blogs
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
                href="/hostel-owners"
                className="block px-4 py-2 text-foreground hover:bg-secondary rounded-sm transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                For Hostel Business
              </Link>
             
               <Popover>
              <PopoverTrigger asChild>
                <button className="flex w-full justify-between px-4 cursor-pointer items-center gap-1  ">
                  Explore <ChevronDown className="w-4 h-4" />
                </button>
              </PopoverTrigger>

              <PopoverContent align="start" className="w-full p-2 border-0 shadow-2xl rounded-2xl">
                <p className="text-muted-foreground p-2">Explore more</p>
                <Separator/>
                <div className="flex flex-col text-sm w-full">
                  <Link href="/community" className="p-2 hover:bg-secondary rounded-xl ">Community</Link>
                  <Link href="/find-roommate" className="p-2 hover:bg-secondary rounded-xl ">Find Roommate</Link>
                  <Link href="/find-hostels" className="p-2 hover:bg-secondary rounded-xl ">Find Hostel</Link>
                  <Link href="/cities" className="p-2 hover:bg-secondary rounded-xl ">Cities</Link>
                  <Link href="/contact" className="p-2 hover:bg-secondary rounded-xl ">Contact</Link>
                </div>
              </PopoverContent>
            </Popover>
             <div className="px-2 py-1 flex justify-between items-center">
              <p className="px-2">Theme ({theme}) </p>
                <Button
              onClick={() => setTheme(theme == "dark"?"light":"dark")}
              variant={"outline"}
              size={"icon"}
              className=" cursor-pointer  hover:bg-secondary rounded-full bg-card border-0 shadow-0 text-muted-foreground  transition-colors"
            >
              {theme == "light"?<Sun className="w-4 h-4 transition-all " />:<Moon className="w-4 h-4 transition-all" />}
            </Button>
            </div>
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
              {session && session?.userId ? "" : <div className="flex flex-col ">
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
