"use client"

import { useState } from "react"
import Link from "next/link"
import { MapPin, Users, Star, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import HeroSearch from "@/components/hero-search"
import HostelCard from "@/components/hostel-card"
import { mockHostels, mockCities } from "@/lib/mock-data"

export default function Home() {
  const [searchResults, setSearchResults] = useState(null)

  const handleSearch = (results:any) => {
    setSearchResults(results)
  }

  const featuredHostels = mockHostels.slice(0, 6)

  const hostelsByCity = mockCities.map((city) => ({
    ...city,
    hostels: mockHostels.filter((hostel) => hostel.city === city.name),
  }))

  return (
    <main className="min-h-screen bg-background flex flex-col">

      {/* Hero Section with Search */}
      <HeroSearch onSearch={handleSearch} />
 
      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-8 sm:mb-12 text-center">
            Why Choose HostelHub?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
            <div className="bg-white p-6 sm:p-8 border border-border">
              <div className="w-12 h-12 bg-accent rounded-sm flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-primary mb-2">Best Locations</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Hostels located near universities and city centers for easy access
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 border border-border">
              <div className="w-12 h-12 bg-accent rounded-sm flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-primary mb-2">Community Focused</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Meet fellow students and make lasting connections
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 border border-border">
              <div className="w-12 h-12 bg-accent rounded-sm flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-primary mb-2">Verified Reviews</h3>
              <p className="text-sm sm:text-base text-muted-foreground">Read authentic reviews from real students</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-white border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4 sm:mb-6">
                Are You a Hostel Owner?
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                Join thousands of hostel owners who are growing their business on HostelHub. Get access to thousands of
                students searching for quality accommodation.
              </p>

              <ul className="space-y-3 mb-6 sm:mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-accent rounded-sm flex items-center justify-center text-accent-foreground text-sm font-bold">
                    ✓
                  </div>
                  <span className="text-sm sm:text-base text-foreground">Increase your bookings by 40% on average</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-accent rounded-sm flex items-center justify-center text-accent-foreground text-sm font-bold">
                    ✓
                  </div>
                  <span className="text-sm sm:text-base text-foreground">Complete student management system</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-accent rounded-sm flex items-center justify-center text-accent-foreground text-sm font-bold">
                    ✓
                  </div>
                  <span className="text-sm sm:text-base text-foreground">Real-time analytics and insights</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-accent rounded-sm flex items-center justify-center text-accent-foreground text-sm font-bold">
                    ✓
                  </div>
                  <span className="text-sm sm:text-base text-foreground">Secure payment processing</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-accent rounded-sm flex items-center justify-center text-accent-foreground text-sm font-bold">
                    ✓
                  </div>
                  <span className="text-sm sm:text-base text-foreground">24/7 customer support</span>
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link href="/hostel-owners">
                  <button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-3 rounded-sm font-bold text-base sm:text-lg transition-all">
                    Learn More
                  </button>
                </Link>
                <Link href="/hostel-registration">
                  <button className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground px-6 sm:px-8 py-3 rounded-sm font-bold text-base sm:text-lg transition-all">
                    Register Your Hostel
                  </button>
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-br from-accent/20 to-accent/5 rounded-lg p-8 sm:p-12 border border-accent/20">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">1000+</div>
                  <p className="text-sm sm:text-base text-muted-foreground">Students Searching Daily</p>
                </div>
                <div className="border-t border-accent/20"></div>
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">50+</div>
                  <p className="text-sm sm:text-base text-muted-foreground">Hostels Listed</p>
                </div>
                <div className="border-t border-accent/20"></div>
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">5000+</div>
                  <p className="text-sm sm:text-base text-muted-foreground">Bookings This Year</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
