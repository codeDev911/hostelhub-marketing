import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

export default function Cities() {
  const cities = [ 
    { name: "Peshawar", hostels: 38, description: "Northern city with unique cultural experience" }, 
      { name: "Lahore", hostels: 0, description: "Pakistan's cultural heart with vibrant student life" },
    { name: "Karachi", hostels: 0, description: "Coastal city with diverse hostel options" },
    { name: "Islamabad", hostels: 0, description: "Capital city with modern amenities and safe neighborhoods" },
    { name: "Rawalpindi", hostels: 0, description: "Sister city of Islamabad with affordable options" },
    { name: "Multan", hostels: 0, description: "Historic city with budget-friendly hostels" },

  ]

  return (
    <>
      
      <main className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* Hero Section */}
          <div className="mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4 text-balance">Hostels by City</h1>
            <p className="text-lg text-foreground/70 max-w-2xl">
              Explore student hostels across major cities in Pakistan.
            </p>
          </div>

          {/* Cities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {cities.map((city) => (
              <Link
                key={city.name}
                href={`/hostels?city=${city.name}`}
                className="group bg-primary-foreground border border-border rounded-sm p-6 hover:shadow-lg hover:border-accent transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-bold text-primary group-hover:text-accent transition-colors">
                    {city.name}
                  </h3>
                  <span className="text-accent font-bold text-lg">{city.hostels}</span>
                </div>
                <p className="text-foreground/70 text-sm mb-4">{city.description}</p>
                <span className="text-accent font-semibold text-sm group-hover:underline">Browse Hostels →</span>
              </Link>
            ))}
          </div>

          {/* Info Section */}
          <div className="mt-12 sm:mt-16 p-6 sm:p-8 bg-accent/10 border border-accent/20 rounded-sm">
            <h2 className="text-2xl font-bold text-primary mb-3">Can't find your city?</h2>
            <p className="text-foreground/70 mb-4">
              We're constantly expanding to new cities. If your city isn't listed yet, let us know!
            </p>
            <Link href="/contact" className="inline-block text-accent font-semibold hover:underline">
              Suggest a City →
            </Link>
          </div>
        </div>
      </main>
      
    </>
  )
}
