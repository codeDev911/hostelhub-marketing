"use client"

import Link from "next/link"
import { MapPin, Users, Star,CheckCircle, ChevronRight, Quote } from "lucide-react"
import HeroSearch from "@/components/hero-search" 
import { cities } from "@/lib/mock-data"

export default function Home() {
 
  return (
    <main className="min-h-screen bg-background flex flex-col">

      {/* Hero Section with Search */}
      <HeroSearch  />
 
      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-8 sm:mb-12 text-center">
            Why Choose HostelHub?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
            <div className=" bg-card rounded-2xl p-6 sm:p-8 ">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-primary mb-2">Best Locations</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Hostels located near universities and city centers for easy access
              </p>
            </div>

            <div className=" bg-card rounded-2xl p-6 sm:p-8 ">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-primary mb-2">Community Focused</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Meet fellow students and make lasting connections
              </p>
            </div>

            <div className=" bg-card rounded-2xl p-6 sm:p-8 ">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-primary mb-2">Verified Reviews</h3>
              <p className="text-sm sm:text-base text-muted-foreground">Read authentic reviews from real students</p>
            </div>
          </div>
        </div>
      </section>
{/* Popular Cities Section */}
<section className="py-12 sm:py-16 ">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-wrap justify-between items-end mb-8">
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-primary">Explore by City</h2>
        <p className="text-muted-foreground mt-2">Find the best hostels in major educational hubs</p>
      </div>
      <Link href="/cities" className="text-accent font-semibold flex items-center gap-1 hover:underline">
        View all <ChevronRight className="w-4 h-4" />
      </Link>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {cities.slice(0, 4).map((city) => (
        <Link key={city.name} href={`/hostels?city=${city.name.toLowerCase()}`} className="group relative h-48 sm:h-64 overflow-hidden rounded-2xl">
          <img 
            src={city.image} 
            alt={city.name} 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="text-lg sm:text-xl font-bold">{city.name}</h3>
          </div>
        </Link>
      ))}
    </div>
  </div>
</section>

{/* Motivation & Success Section */}
<section className="py-16 bg-card border-y border-accent/10">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
        More Than Just a Room
      </h2>
      <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
        Join 10,000+ students who found their home away from home through HostelHub.
      </p>
    </div>

    {/* Testimonials Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {[
        {
          name: "Umar Khan",
          uni: "CECOS, Peshawar",
          text: "I was worried about security, but HostelHub's 'Verified' badge helped me find a place with 24/7 security. It's been 6 months and I love it!",
          avatar: "UK"
        },
        {
          name: "Sara Khan",
          uni: "LUMS, Lahore",
          text: "Finding a girls' hostel that was both affordable and near my campus was impossible until I used the map filter here. Saved me so much commute time.",
          avatar: "SK"
        },
        {
          name: "Zain Malik",
          uni: "NED University, Karachi",
          text: "The community features are great. I found my current roommates through the platform, and we've become best friends.",
          avatar: "ZM"
        }
      ].map((testimonial, i) => (
        <div key={i} className="bg-card p-8 border-border border rounded-2xl relative">
          <Quote className="absolute top-6 right-6 w-8 h-8 text-accent/20" />
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
              {testimonial.avatar}
            </div>
            <div>
              <h4 className="font-bold text-primary">{testimonial.name}</h4>
              <p className="text-xs text-muted-foreground">{testimonial.uni}</p>
            </div>
          </div>
          <p className="text-muted-foreground italic leading-relaxed">
            "{testimonial.text}"
          </p>
        </div>
      ))}
    </div>

    {/* Trust Badges - Motivates by showing professionalism */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center opacity-70 grayscale hover:grayscale-0 transition-all">
      <div className="flex items-center justify-center gap-2">
        <CheckCircle className="w-5 h-5 text-green-500" />
        <span className="font-semibold text-sm">PEC Recognized</span>
      </div>
      <div className="flex items-center justify-center gap-2">
        <CheckCircle className="w-5 h-5 text-green-500" />
        <span className="font-semibold text-sm">HEC Approved Areas</span>
      </div>
      <div className="flex items-center justify-center gap-2">
        <CheckCircle className="w-5 h-5 text-green-500" />
        <span className="font-semibold text-sm">24/7 Security Check</span>
      </div>
      <div className="flex items-center justify-center gap-2">
        <CheckCircle className="w-5 h-5 text-green-500" />
        <span className="font-semibold text-sm">Verified Inventory</span>
      </div>
    </div>
  </div>
</section>
      <section className="py-12 sm:py-16 md:py-20 bg-secondray ">
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
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-accent-foreground text-sm font-bold">
                    ✓
                  </div>
                  <span className="text-sm sm:text-base text-foreground">Increase your bookings by 40% on average</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-accent-foreground text-sm font-bold">
                    ✓
                  </div>
                  <span className="text-sm sm:text-base text-foreground">Complete student management system</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-accent-foreground text-sm font-bold">
                    ✓
                  </div>
                  <span className="text-sm sm:text-base text-foreground">Real-time analytics and insights</span>
                </li> 
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-accent-foreground text-sm font-bold">
                    ✓
                  </div>
                  <span className="text-sm sm:text-base text-foreground">24/7 customer support</span>
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link href="/hostel-owners">
                  <button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-3 rounded-full font-bold text-base sm:text-lg transition-all">
                    Learn More
                  </button>
                </Link>
                <Link href="/hostel-registration">
                  <button className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground px-6 sm:px-8 py-3 rounded-full font-bold text-base sm:text-lg transition-all">
                    Register Your Hostel
                  </button>
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl p-8 sm:p-12  ">
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
