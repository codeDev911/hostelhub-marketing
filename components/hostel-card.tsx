import Link from "next/link"
import { MapPin, Users, DoorOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HostelCard({ hostel }:any) {
  return (
    <Link href={`/hostel/${hostel.id}`}>
      <div className="bg-primary-foreground border group border-border rounded-sm overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col">
        {/* Image */}
        <div className="relative h-48 bg-muted overflow-hidden">
          <img
            src={hostel.image || "/placeholder.svg"}
            alt={hostel.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 right-3 bg-accent text-accent-foreground px-3 py-1 rounded-sm text-sm font-semibold">
            {hostel.rating} ★
          </div>
        </div>

        {/* Content */}
        <div className="p-4 flex-1 flex flex-col">
          <h3 className="text-lg font-bold text-primary mb-1 group-hover:text-accent">{hostel.name}</h3>

          <div className="flex items-center group-hover:text-accent text-muted-foreground text-sm mb-3">
            <MapPin className="w-4 h-4 mr-1" />
            <span>
              {hostel.area || hostel.state}, {hostel.city}
            </span>
          </div>

          <p className="text-sm text-muted-foreground group-hover:text-accent mb-4 flex-1">{hostel.short_description}</p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-3 mb-4 py-3 border-t border-b border-border">
            <div className="flex items-center text-sm">
              <Users className="w-4 h-4 mr-2 text-accent" />
              <span className="text-foreground font-semibold">
                {hostel?.students?.length} 
              </span>
            </div>
            <div className="flex items-center text-sm">
              <DoorOpen className="w-4 h-4 mr-2 text-accent" />
              <span className="text-foreground font-semibold">{hostel.rooms.length} room(s)</span>
            </div>
          </div>

          {/* Price and Button */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-muted-foreground">Starting from</p>
              <p className="text-2xl font-bold text-accent">Rs {hostel.pricePerMonth}</p>
            </div> 
          </div>
        </div>
      </div>
    </Link>
  )
}
