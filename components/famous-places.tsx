import { MapPin } from "lucide-react"

const famousPlaces = [
  {
    name: "Lahore Fort",
    city: "Lahore",
    description: "Historic Mughal fortress in the heart of Lahore",
    image: "/lahore-fort-historic-monument.jpg",
  },
  {
    name: "Badshahi Mosque",
    city: "Lahore",
    description: "One of the largest mosques in the world",
    image: "/badshahi-mosque-lahore.jpg",
  },
  {
    name: "Minar-e-Pakistan",
    city: "Lahore",
    description: "Monument celebrating Pakistan independence",
    image: "/minar-e-pakistan-monument.jpg",
  },
  {
    name: "Faisal Mosque",
    city: "Islamabad",
    description: "Modern architectural marvel in Islamabad",
    image: "/faisal-mosque-islamabad.jpg",
  },
  {
    name: "Hunza Valley",
    city: "Gilgit-Baltistan",
    description: "Scenic mountain valley with stunning views",
    image: "/hunza-valley-mountains.jpg",
  },
  {
    name: "Karachi Beach",
    city: "Karachi",
    description: "Beautiful coastal destination",
    image: "/karachi-beach-seaside.jpg",
  },
]

export default function FamousPlaces() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">Explore Pakistan</h2>
          <p className="text-muted-foreground">Discover famous places near our hostels</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {famousPlaces.map((place, idx) => (
            <div
              key={idx}
              className="bg-white border border-border rounded-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="h-40 bg-muted overflow-hidden">
                <img
                  src={place.image || "/placeholder.svg"}
                  alt={place.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-primary mb-1">{place.name}</h3>
                <div className="flex items-center text-muted-foreground text-sm mb-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{place.city}</span>
                </div>
                <p className="text-sm text-muted-foreground">{place.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
