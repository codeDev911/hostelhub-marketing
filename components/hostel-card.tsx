import Link from "next/link"
import { MapPin, Users, DoorOpen } from "lucide-react"
import { getImageUrl } from "@/lib/getImage"

export default function HostelCard({ hostel }:any) {
  console.log(hostel);
  
  return (
    <Link href={`/hostel/${hostel.id}`}>
      <div className="bg-primary-foreground border group border-border rounded-sm overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full  grid grid-cols-5">
        {/* Image */}
        <div className="relative h-48 bg-muted overflow-hidden col-span-2">
          <img
            src={getImageUrl(hostel?.images[0])}
            alt={hostel.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
          {/* <div className="absolute top-3 right-3 bg-accent text-accent-foreground px-3 py-1 rounded-sm text-sm font-semibold">
            {hostel.rating} ★
          </div> */}
        </div>

        {/* Content */}
        <div className="p-4 flex-1 flex flex-col col-span-3">
          <h3 className="text-lg font-bold text-primary mb-1 group-hover:text-accent">{hostel.name}</h3>

          <div className="flex items-center group-hover:text-accent text-muted-foreground text-sm mb-3">
            <MapPin className="w-4 h-4 mr-1" />
            <span>
              {hostel.area || hostel.state}, {hostel.city}
            </span>
          </div>

          <div className="flex space-x-1 space-y-1 max-h-14 overflow-hidden flex-wrap mb-2">
            {hostel?.amenities?.map((am:any)=>(
              <div className="p-1 rounded-md  bg-accent/15 px-2 text-[10px]">{am}</div>
            ))} 
          </div>


          {/* Stats */}
          <div className="grid grid-cols-2 gap-3    ">
            <div className="flex items-center text-sm">
              <Users className="w-4 h-4 mr-2 text-accent" />
              <span className="text-foreground font-semibold">
                {hostel?.students?.length} students
              </span>
            </div>
            <div className="flex items-center text-sm">
              <DoorOpen className="w-4 h-4 mr-2 text-accent" />
              <span className="text-foreground font-semibold">{hostel.rooms.length} room(s)</span>
            </div>
          </div>

          {/* Price and Button */}
          <div className="flex items-center justify-between mt-2">
            <div>
              <p className="text-xs text-muted-foreground">Starting from</p>
              <div className="flex items-center space-x-1.5"><p className="text-2xl font-bold text-accent">Rs {hostel.pricePerMonth}</p>
              <span className="text-muted-foreground text-sm">/ month</span></div>
            </div> 
          </div>
        </div>
      </div>
    </Link>
  )
}
