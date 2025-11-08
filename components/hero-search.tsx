"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Search, MapPin, Home, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { mockCities } from "@/lib/mock-data"
import { Label } from "./ui/label"

export default function HeroSearch() {
  const router = useRouter()
  const [city, setCity] = useState("")
  const [area, setArea] = useState("")
  const [gender, setGender] = useState("all")
  const [showCityDropdown, setShowCityDropdown] = useState(false)
  const [showAreaDropdown, setShowAreaDropdown] = useState(false)

  const selectedCity = mockCities.find((c) => c.name === city)
  const areas = selectedCity?.areas || []

  const handleSearch = () => {
    if (city) {
      router.push(`/hostels?city=${city}&area=${area}&gender=${gender}`)
    }
  }

  return (
    <section className="relative z-40 bg-linear-to-br from-stone-800 via-stone-800 to-stone-800/95 py-16 md:py-28 lg:py-36 ">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute animate-pulse top-10 right-10 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute animate-pulse bottom-10 left-10 w-96 h-96 bg-accent/50 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Content */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
            <Home className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-white">Find Your Perfect Student Hostel</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3 leading-tight">
            Find Your Perfect <span className="text-accent">Hostel</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-8">
            Affordable, safe, and comfortable accommodation for students across Pakistan
          </p>

 
        </div>

        {/* Search Box */}
        <div className="bg-primary-foreground rounded-lg shadow-2xl p-4 md:p-5 lg:p-7">
          <div className="flex space-x-2">
            <Sparkles className="w-4 text-accent"/>
            <h2 className="text-primary font-bold">Smart Search</h2>
          </div>
          <p className="text-secondray text-sm mb-4">Our smart and intellegnce search to brings best accomodation for you</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {/* City Select */}
            <div className="relative">
              <label className="block text-sm font-semibold text-primary mb-3">City</label>
              <div className="relative">
                <button
                  onClick={() => setShowCityDropdown(!showCityDropdown)}
                  className="w-full px-4 py-3 md:py-4 border-2 border-border rounded-lg bg-secondray text-left flex items-center justify-between hover:border-accent transition-all duration-200 focus:outline-none focus:border-accent"
                >
                  <span
                    className={`text-sm md:text-base ${city ? "text-foreground font-medium" : "text-muted-foreground"}`}
                  >
                    {city || "Select city"}
                  </span>
                  <MapPin className="w-5 h-5 text-muted-foreground" />
                </button>
                {showCityDropdown && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-primary-foreground border-2 border-border rounded-lg shadow-xl z-20 max-h-56 overflow-y-auto">
                    {mockCities.map((c) => (
                      <button
                        key={c.name}
                        onClick={() => {
                          setCity(c.name)
                          setArea("")
                          setShowCityDropdown(false)
                        }}
                        className="w-full px-4 py-3 text-left hover:bg-accent/10 hover:text-accent transition-colors text-sm md:text-base font-medium border-b border-border/50 last:border-b-0"
                      >
                        {c.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Area Select */}
            <div className="relative">
              <label className="block text-sm font-semibold text-primary mb-3">Area</label>
              <div className="relative">
                <button
                  onClick={() => setShowAreaDropdown(!showAreaDropdown)}
                  disabled={!city}
                  className="w-full px-4 py-3 md:py-4 border-2 border-border rounded-lg bg-primary-foreground text-left flex items-center justify-between hover:border-accent transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:border-accent"
                >
                  <span
                    className={`text-sm md:text-base ${area ? "text-foreground font-medium" : "text-muted-foreground"}`}
                  >
                    {area || "Select area"}
                  </span>
                  <MapPin className="w-5 h-5 text-muted-foreground" />
                </button>
                {showAreaDropdown && areas.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-primary-foreground border-2 border-border rounded-lg shadow-xl z-20 max-h-56 overflow-y-auto">
                    {areas.map((a) => (
                      <button
                        key={a}
                        onClick={() => {
                          setArea(a)
                          setShowAreaDropdown(false)
                        }}
                        className="w-full px-4 py-3 text-left hover:bg-accent/10 hover:text-accent transition-colors text-sm md:text-base font-medium border-b border-border/50 last:border-b-0"
                      >
                        {a}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Gender Select */}
            <div>
              <label className="block text-sm font-semibold text-primary mb-3">For</label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full px-4 py-3 md:py-4 border-2 border-border rounded-lg bg-secondray text-foreground hover:border-accent transition-all duration-200 focus:outline-none focus:border-accent text-sm md:text-base font-medium"
              >
                <option value="all">All</option>
                <option value="boys">Boys</option>
                <option value="girls">Girls</option>
              </select>
            </div>

            {/* Search Button */}
            <div className="flex items-end">
              <Button
                onClick={handleSearch}
                disabled={!city}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-3 md:py-4 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base shadow-lg hover:shadow-xl"
              >
                <Search className="w-5 h-5 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
