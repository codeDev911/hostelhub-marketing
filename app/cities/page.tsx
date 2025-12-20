import Link from "next/link"
import Image from "next/image"
import { cities } from "@/lib/mock-data"

export function generateMetadata(){

  return {
    title: "Hostels by cities",
    description: "Explore student hostels across major cities in Pakistan.",
    keywords:"pakistan, lahore, islamabad, faisalabad, di khan, gh khan, peshawar , multan, karachi, karrak, kohat, cantt, ai, pakistan, hostels, students, apartments, hyderabad, faisalabad"
  }
}


export default function Cities() {

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
                className="group bg-card  overflow-hidden  rounded-2xl  transition-all"
              >
                <Image src={city.image.trimEnd()} width={100} height={200} className="w-full h-[200px] flex bg-cover  group-hover:scale-110 transition-all 1s "  alt={`${city.name}-famous-place`}/>
                <div className=" p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-bold text-primary group-hover:text-accent transition-colors">
                    {city.name}
                  </h3>
                </div>
                <p className="text-foreground/70 text-sm mb-4">{city.description}</p>
                <span className="text-accent font-semibold text-sm group-hover:underline">Browse Hostels →</span>
                </div>
              </Link>
            ))}
          </div>

          {/* Info Section */}
          <div className="mt-12 sm:mt-16 p-6 sm:p-8 bg-card  rounded-2xl">
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
