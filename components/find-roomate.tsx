import Link from "next/link"
import { Users, ShieldCheck, MapPin, ArrowRight,  Clock3 } from "lucide-react"

export default function FindRoommateFeature() {
  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="bg-card rounded-2xl p-8 sm:p-12  relative overflow-hidden">

          {/* Soft Background Accent */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent pointer-events-none" />

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 text-accent-foreground bg-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                <Clock3 className="w-4 h-4" />
                Coming soon
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
                Find the Right Roommate
              </h2>

              <p className="text-muted-foreground text-base sm:text-lg mb-6 leading-relaxed">
                Moving to a new city or sharing a room? Connect with verified students
                who match your budget, location, and preferences safely and easily.
              </p>

              {/* Feature Points */}
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent" />
                  <span className="text-sm sm:text-base">
                    Search by city, area, and university
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-accent" />
                  <span className="text-sm sm:text-base">
                    Connect with students looking to share rooms
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-accent" />
                  <span className="text-sm sm:text-base">
                    Verified profiles for a safer experience
                  </span>
                </li>
              </ul>

              {/* CTA */}
              <Link
                href="/find-roommate"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-6 sm:px-8 py-3 rounded-full font-bold transition"
              >
                Find a Roommate
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right Visual Card */}
            <div className="hidden lg:block">
              <div className="bg-background rounded-2xl p-6 border border-border shadow-sm">
                <div className="space-y-4">
                  <div className="h-3 w-1/2 bg-muted rounded"></div>
                  <div className="h-3 w-3/4 bg-muted rounded"></div>
                  <div className="h-3 w-2/3 bg-muted rounded"></div>

                  <div className="border-t pt-4 mt-4 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent/20"></div>
                      <div className="space-y-2">
                        <div className="h-3 w-32 bg-muted rounded"></div>
                        <div className="h-3 w-24 bg-muted rounded"></div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent/20"></div>
                      <div className="space-y-2">
                        <div className="h-3 w-28 bg-muted rounded"></div>
                        <div className="h-3 w-20 bg-muted rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
