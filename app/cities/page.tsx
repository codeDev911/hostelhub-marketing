import Link from "next/link"
import Image from "next/image"

export function generateMetadata(){

  return {
    title: "Hostels by cities",
    description: "Explore student hostels across major cities in Pakistan.",
    keywords:"pakistan, lahore, islamabad, faisalabad, di khan, gh khan, peshawar , multan, karachi, karrak, kohat, cantt, ai, pakistan, hostels, students, apartments, hyderabad, faisalabad"
  }
}

export const cities = [ 
  { name: "Peshawar", image:"https://res.cloudinary.com/www-travelpakistani-com/image/upload/v1680266483/bala_hisar_fort.jpg", hostels: 38, description: "Northern city with unique cultural experience" }, 
  { name: "Lahore",image:"https://walledcitylahore.gop.pk/wp-content/uploads/2024/06/Minar-e-pakistan.png ", hostels: 0, description: "Pakistan's cultural heart with vibrant student life" },
  { name: "Karachi",image:"https://i.pinimg.com/736x/7f/db/d9/7fdbd9e7f94770b68eaf6439e084459a.jpg", hostels: 0, description: "Coastal city with diverse hostel options" },
  { name: "Islamabad",image:"https://t3.ftcdn.net/jpg/02/74/50/28/360_F_274502877_n3BQGoAGPRqsjgKIU4lB6wns0mBuPTL3.jpg", hostels: 0, description: "Capital city with modern amenities and safe neighborhoods" },
  { name: "Rawalpindi",image:"https://content.r9cdn.net/rimg/dimg/a5/0b/89f2d368-city-35540-1717715c0e3.jpg?width=1366&height=768&xhint=1321&yhint=1758&crop=true", hostels: 0, description: "Sister city of Islamabad with affordable options" },
  { name: "Multan",image:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/1c/c7/08/multan-ghanta-ghar.jpg?w=1200&h=1200&s=1", hostels: 0, description: "Historic city with budget-friendly hostels" },
  { name: "Quetta",image:"https://porterpakistan.com/uploads/2020/01/Mariabad.jpg", hostels: 0, description: "Best hostels in Quetta are listed" },
  { name: "Sialkot",image:"https://i.pinimg.com/originals/8e/b6/67/8eb6677b45c2a0e1c7a986fea9b8ec28.jpg", hostels: 0, description: "Pakistan's most attractive city " },
  { name: "Hyderabad",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Z67haHSz-ZQfqiDQO_DNVpAQtZ7bdTZ94w&s", hostels: 0, description: "Historic city with budget-friendly hostels" },
  { name: "Faisalabad",image:"https://i.pinimg.com/originals/64/6f/52/646f52b084f90599794f122a3f475d20.jpg", hostels: 0, description: "Explore best hostels in a beautiful city (Faisalabad)" },

]
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
                className="group bg-primary-foreground border overflow-hidden border-border rounded-sm hover:shadow-lg hover:border-accent transition-all"
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
