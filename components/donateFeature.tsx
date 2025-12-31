"use client"

import Link from "next/link"
import { HeartHandshake, ArrowRight } from "lucide-react"

export default function DonationHomeSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* Left Content */}
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
              <HeartHandshake className="w-4 h-4" />
              Donation
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-5 leading-tight">
              Your donation
              <br />
              makes <span className="undercurve">students </span> feel better
            </h2>

            <p className="text-foreground/70 text-base sm:text-lg max-w-xl">
               Donation (Sadaqah) as a way to earn Allah's pleasure, protect from calamity, increase wealth (blessings), and gain reward on Judgment Day
               <br />
               <span className="text-sm">"Give charity without delay, for it stands in the way of calamity." (Al-Tirmidhi)</span>
            </p>

            <div className="mt-8">
              <Link href="/donate">
                <button className="inline-flex cursor-pointer hover:bg-accent/70 items-center gap-2 bg-accent text-accent-foreground px-7 py-3 rounded-full font-semibold  transition">
                  Donate
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>

          {/* Right Visual / Stats */}
          <div className="bg-card rounded-2xl p-8">
            <div className="space-y-6">
              <div>
                <p className="text-3xl font-bold text-primary">1000+</p>
                <p className="text-sm text-foreground/70">
                  Students supported through HostelHub's community & services
                </p>
              </div>

              <div className="h-px bg-border" />

              <div>
                <p className="text-3xl font-bold text-primary">Verified</p>
                <p className="text-sm text-foreground/70">
                  Safe hostels & student communities
                </p>
              </div>

              <div className="h-px bg-border" />

              <div>
                <p className="text-3xl font-bold text-primary">Future-Driven</p>
                <p className="text-sm text-foreground/70">
                  Scholarships, learning & growth initiatives
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
