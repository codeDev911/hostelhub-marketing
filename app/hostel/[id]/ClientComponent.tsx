"use client";

import React, { JSX, useEffect, useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Users,
  DoorOpen,
  Star,
  Check,
  Clock,
  AlertCircle,
  UtensilsCrossed,
  Loader2,
  Hotel,
  XIcon,
  InfoIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";  
import { useParams } from "next/navigation";
import { fetchApi } from "@/lib/api";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { toast } from "sonner";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"; 
import { getImageUrl } from "@/lib/getImage";
import Head from "next/head";

interface Room {
  id: string;
  name: string;
  capacity: number;
  roomNumber: string;
  floor: number;
  roomType: string;
  totalSeats: number;
  pricePerMonth: number;
  students?: Array<any>;
  bookings?: Array<{ numberOfSeats: number }>;
}

export default function HostelDetailPage() {
  const params = useParams();
  const id = params?.id as string;
  const [hostel, setHostel] = useState({} as any);
  const [selectedRoom, setSelectedRoom] = useState(null); 
  const [loading, setLoading] = useState(true);
  const [image,setImage] = useState("")

  useEffect(() => {
    const fetchHostel = async () => {
      try {
        let res = await fetchApi({
          method: "GET",
          url: `/api/hostels/${id}`,
        });
        let data = await res.json();
        if(res.ok){
          setHostel(data);
          
          setImage(getImageUrl(data?.images[0]))

        }else{
          toast.error("Field to fetch details, Please try again")
        }
      } catch (error) {
        toast.error("Error occured while fetching  details, please try again", {
          action: {
            label: "Retry",
            onClick: () => location.reload(),
          },
        });
      } finally {
        setLoading(false);
      }
    };

    fetchHostel();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="w-8 h-8 animate-spin text-accent" />
      </div>
    );
  }

  if (!hostel && !loading) {
    return (
      <main className="min-h-screen bg-background flex flex-col">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center grow">
          <p className="text-lg text-muted-foreground">Hostel not found</p>
          <Link href="/hostels" className="mt-4 inline-block">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Back to Hostels
            </Button>
          </Link>
        </div>
      </main>
    );
  }

  function format12Hour(timeSrt: any) {
    let [hours, minutes] = timeSrt.split(":").map(Number);

    const date = new Date();
    date.setHours(hours, minutes, 0, 0);
    let hrs = date.getHours();
    const mins = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return `${hrs}:${mins.toString().padStart(2, "0")} ${ampm}`;
  }



  return (
    <main className="min-h-screen w-full bg-background flex flex-col">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 grow">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="mb-6 sm:mb-8">
              <div className="relative h-64 sm:h-96 bg-muted rounded-lg overflow-hidden mb-4">
                <img
                  src={image}
                  alt={hostel.name + "-main-image"}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 sm:px-4 py-2 rounded-lg font-semibold flex items-center gap-1 text-sm sm:text-base">
                  <Star className="w-4 sm:w-5 h-4 sm:h-5" />
                  {hostel.rating}
                </div>
              </div>
              <div className="grid lg:grid-cols-5 max-md:grid-cols-3 gap-2">
                {hostel?.images?.map((i:any) => (
                  <div
                    key={i}
                    className="h-16 sm:h-20 bg-muted rounded-lg overflow-hidden"
                  >
                    <img
                    onClick={()=>setImage(getImageUrl(i))}
                      src={getImageUrl(i)}
                      alt={`Gallery ${i}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Hostel Info */}
            <div className="bg-primary-foreground border border-border rounded-lg p-4 sm:p-6 mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-2">
                {hostel.name}
              </h2>
              <div className="flex items-center text-muted-foreground mb-4 text-sm sm:text-base">
                <MapPin className="w-4 sm:w-5 h-4 sm:h-5 mr-2 shrink-0" />
                <span>{hostel.address}</span>
              </div>
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  <Star className="w-4 sm:w-5 h-4 sm:h-5 text-accent" />
                  <span className="font-semibold text-foreground">
                    {hostel.rating}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    ({hostel?.feedback?.length} reviews)
                  </span>
                </div>
              </div>
              <p className="text-sm sm:text-base text-primary/60 leading-relaxed">
                {hostel.short_description}
              </p>
              <p className="text-base text-foreground leading-relaxed">
                {hostel.description}
              </p>
            </div>

            {/* Amenities */}
            <div className="bg-primary-foreground border border-border rounded-lg p-4 sm:p-6 mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4 sm:mb-6">
                Facilities
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                {hostel?.amenities?.map((amenity: any, idx: any) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 bg-secondary rounded-lg"
                  >
                    <Check className="w-4 sm:w-5 h-4 sm:h-5 text-accent shrink-0" />
                    <span className="text-sm sm:text-base text-foreground">
                      {amenity}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Availabe rooms */}
            <div className="bg-primary-foreground border border-border rounded-lg p-4 sm:p-6 mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-primary">
                Available Rooms
              </h3>
              {hostel?.rooms.length <= 0 ? (
                <Alert
                  variant={"destructive"}
                  className="border-destructive border"
                >
                  <AlertTitle>No availabe room right now!</AlertTitle>
                  <AlertDescription>
                    <p>
                      Opps! At the moment there is no room available in{" "}
                      <strong>{hostel.name}</strong>.
                    </p>
                  </AlertDescription>
                </Alert>
              ) : (
                <p className="text-sm mb-3 ">
                  There are ({hostel?.rooms?.length}) room(s) availabe{" "}
                </p>
              )}

              <Carousel className="w-full max-w-full">
                <CarouselContent>
                  {hostel?.rooms?.reduce(
                    (
                      acc: JSX.Element[],
                      _: Room,
                      index: number,
                      array: Room[]
                    ): JSX.Element[] => {
                      // Start a new slide every 6 items (3 cols × 2 rows)
                      if (index % 6 === 0) {
                        acc.push(
                          <CarouselItem key={index}>
                            <div className="grid md:grid-cols-3 grid-cols-2 grid-rows-2 gap-2">
                              {array
                                .slice(index, index + 6)
                                .map((room: Room, subIndex: number) => (
                                  <button
                                    key={room.id}
                                    className={`p-3 sm:p-4 border-2 text-start rounded-lg transition-all  ${
                                      selectedRoom === room.id
                                        ? "border-accent bg-accent/10"
                                        : "border-border hover:border-accent/50"
                                    } ${
                                      room.totalSeats -
                                        (room.students?.length || 0) ===
                                      0
                                        ? "opacity-50 cursor-not-allowed"
                                        : "cursor-pointer"
                                    }`}
                                    disabled={
                                      room.totalSeats -
                                        (room.students?.length || 0) ===
                                      0
                                    }
                                  >
                                    <div className="text-xs sm:text-sm font-bold text-primary mb-1">
                                      Room #{room.roomNumber}
                                    </div>

                                    <div className="text-xs text-muted-foreground mb-1">
                                      Floor {room.floor}
                                    </div>
                                    <div className="text-xs text-muted-foreground mb-1">
                                      Type {room.roomType}
                                    </div>
                                    <div className="text-xs font-bold text-muted-foreground mb-1">
                                      Availabe seats{" "}
                                      {room.totalSeats -
                                        (room.students?.length || 0) -
                                        (room?.bookings?.reduce(
                                          (prev: any, next: any) =>
                                            prev + next.numberOfSeats,
                                          0
                                        ) || 0) >
                                      0
                                        ? room.totalSeats -
                                          (room.students?.length || 0) -
                                          (room?.bookings?.reduce(
                                            (prev: any, next: any) =>
                                              prev + next.numberOfSeats,
                                            0
                                          ) || 0)
                                        : 0}
                                    </div>
                                    {(room?.bookings?.reduce(
                                      (prev: any, next: any) =>
                                        prev + next.numberOfSeats,
                                      0
                                    ) || 0) > 0 ? (
                                      <div className="flex items-center space-x-1">
                                        <div className="text-xs text-red-500 font-bold mb-1">
                                          Pending seats{" "}
                                          {room?.bookings?.reduce(
                                            (prev: any, next: any) =>
                                              prev + next.numberOfSeats,
                                            0
                                          ) || 0}
                                        </div>
                                        <Tooltip>
                                          <TooltipTrigger asChild>
                                            <InfoIcon className="w-3 h-3" />
                                          </TooltipTrigger>
                                          <TooltipContent className="bg-primary">
                                            <p>
                                              {room?.bookings?.reduce(
                                                (prev: any, next: any) =>
                                                  prev + next.numberOfSeats,
                                                0
                                              ) || 0}{" "}
                                              seats are not confirmed yet, you
                                              can apply to book.
                                            </p>
                                          </TooltipContent>
                                        </Tooltip>
                                      </div>
                                    ) : (
                                      ""
                                    )}
                                    <div className="text-xs text-muted-foreground mt-1">
                                      Rs {room.pricePerMonth}
                                    </div>
                                  </button>
                                ))}
                            </div>
                                    <div className="w-full p-2 text-center text-sm  mt-2">
                                      {(index/6) + 1} / {Math.floor(Number.parseInt(hostel?.rooms?.length) / 6 )+1}
                                    </div>
                          </CarouselItem>
                        );
                      }
                      return acc;
                    },
                    []
                  )}
                </CarouselContent>
                <CarouselPrevious className="mr-8 ml-8" />
                <CarouselNext className="mr-8 ml-8" />
              </Carousel>
              </div>
<br />
              {/* 7-Day Meal Plan - Complimentary */}
              <div className="bg-primary-foreground border border-border rounded-lg p-4 sm:p-6 mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4 sm:mb-6 flex items-center gap-2">
                  <UtensilsCrossed className="w-5 sm:w-6 h-5 sm:h-6 text-accent" />
                  7-Day Meal Plan 
                </h3>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-sm sm:text-base">
                    <thead>
                      <tr className="bg-secondary border-b-2 border-border">
                        <th className="border border-border px-3 sm:px-4 py-2 sm:py-3 text-left font-bold text-primary">
                          Day
                        </th>
                        <th className="border border-border px-3 sm:px-4 py-2 sm:py-3 text-left font-bold text-primary">
                          Breakfast
                        </th>
                        <th className="border border-border px-3 sm:px-4 py-2 sm:py-3 text-left font-bold text-primary">
                          Morning
                        </th>
                        <th className="border border-border px-3 sm:px-4 py-2 sm:py-3 text-left font-bold text-primary">
                          Evening
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {hostel?.mealPlan?.map((day: any, idx: any) => {
                        day = JSON.parse(day)
                        return(
                        <tr
                          key={idx}
                          className={
                            idx % 2 === 0
                              ? "bg-primary-foreground"
                              : "bg-secondary/30"
                          }
                        >
                          <td className="border border-border px-3 sm:px-4 py-2 sm:py-3 font-semibold text-foreground">
                            {day?.day}
                          </td>
                          <td className="border border-border px-3 sm:px-4 py-2 sm:py-3 text-foreground">
                            {day?.meals[0]?.dishes.join(", ")}
                          </td>
                          <td className="border border-border px-3 sm:px-4 py-2 sm:py-3 text-foreground">
                            {day?.meals[1]?.dishes.join(", ")}
                          </td>
                          <td className="border border-border px-3 sm:px-4 py-2 sm:py-3 text-foreground">
                            {day?.meals[2]?.dishes.join(", ")}
                          </td>
                        </tr>
                      )
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Check-in/Check-out & Rules */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                {/* Check-in/Check-out */}
                <div className="bg-primary-foreground border border-border rounded-lg p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-primary mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Check-in & Check-out
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Check-in Time
                      </p>
                      <p className="font-semibold text-foreground">
                        {format12Hour(hostel.checkInTime)}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Check-out Time
                      </p>
                      <p className="font-semibold text-foreground">
                        {format12Hour(hostel.checkOutTime)}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Rules */}
                <div className="bg-primary-foreground border border-border rounded-lg p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-primary mb-4 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" />
                    House Rules
                  </h3>
                  <ul className="space-y-2">
                    {hostel?.rules?.slice(0, 3).map((rule: any, idx: any) => (
                      <li
                        key={idx}
                        className="text-sm text-foreground flex gap-2"
                      >
                        <span className="text-accent font-bold">•</span>
                        <span>{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Google Map */}
              <div className="bg-primary-foreground border border-border rounded-lg p-4 sm:p-6 mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl font-bold text-primary mb-4">
                  Location on Map
                </h3>
                {/* <div className="w-full h-64 sm:h-96 rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDxKJUd7wGlMLw2vDjT6qZHPstVHignYkE&q=${hostel.latitude},${hostel.longitude}`}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground mt-3">
                {hostel.address}, {hostel.area}, {hostel.city}
              </p> */}
                <h2 className="text-xl font-bold text-center">
                  Commin soon...
                </h2>
              </div>

              {/* Reviews Section */}
              <div className="bg-primary-foreground border border-border rounded-lg p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4 sm:mb-6">
                  Reviews
                </h3>
                {hostel?.feedback?.length > 0 ? (
                  <div className="space-y-4">
                    {hostel?.feedback?.map((review: any, i: any) => (
                      <div
                        key={i}
                        className="pb-4 border-b border-border last:border-b-0"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                          <div>
                            <p className="font-bold text-foreground text-sm sm:text-base">
                              {review.student.firstName}{" "}
                              {review.student.lastName}
                            </p>
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, j) => (
                                <Star
                                  key={j}
                                  className={`w-3 sm:w-4 h-3 sm:h-4 ${
                                    j < Number.parseInt(review.priority)
                                      ? "text-accent fill-accent"
                                      : "text-border"
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                          <p className="text-xs sm:text-sm text-muted-foreground">
                            {new Date(review.createdAt).toLocaleString(
                              "en-Us",
                              {
                                month: "short",
                                year: "numeric",
                                day: "2-digit",
                              }
                            )}
                          </p>
                        </div>
                        <p className="text-sm sm:text-base text-foreground">
                          {review.text}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="w-full text-center justify-center items-center">
                    <h3 className="text-base font-semibold">No Reviews yet </h3>
                  </div>
                )}
              </div>
            </div>
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Quick Info Card */}
            <div className="bg-primary-foreground border border-border rounded-lg p-4 sm:p-6 mb-4 sm:mb-6 lg:sticky lg:top-24">
              <h3 className="text-lg sm:text-xl font-bold text-primary mb-4 sm:mb-6">
                Quick Info
              </h3>

              <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                <div className="flex items-center gap-3 pb-3 sm:pb-4 border-b border-border">
                  <Users className="w-5 h-5 text-accent shrink-0" />
                  <div>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Total students
                    </p>
                    <p className="font-bold text-foreground text-sm sm:text-base">
                      {hostel?.students?.length || 0}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pb-3 sm:pb-4 border-b border-border">
                  <DoorOpen className="w-5 h-5 text-accent shrink-0" />
                  <div>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Available Rooms
                    </p>
                    <div className="flex gap-2">
                      <p className="font-bold text-foreground text-sm sm:text-base">
                        {hostel?.rooms?.length || 0}
                      </p>
                      {hostel.rooms.length > 0 ? (
                        <div className="flex items-center gap-2 text-green-700 text-sm ">
                          <span className="">Rooms Available</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2 text-red-700 text-sm ">
                          <span className="">(No room availabe)</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-accent shrink-0" />
                  <div>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Contact
                    </p>
                    <p className="font-bold text-foreground text-xs sm:text-sm">
                      {hostel.phone}
                    </p>
                  </div>
                </div>
              </div>

              {/* Price Display */}
              <div className="bg-secondary rounded-lg p-3 sm:p-4 mb-3 sm:mb-4">
                <p className="text-xs sm:text-sm text-muted-foreground mb-1">
                  Starting from
                </p>
                <p className="text-2xl sm:text-3xl font-bold text-accent">
                  Rs {hostel.pricePerMonth}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  per seat per month
                </p>
              </div>

              {/* Booking Button */}
              {hostel?.rooms?.length > 0 && (
                <Link href={`/book/${hostel.id}`}>
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-2 sm:py-3 rounded-lg mb-2 sm:mb-3 text-sm sm:text-base">
                    Book Now
                  </Button>
                </Link>
              )}

              
            </div>

            {/* Gender Info */}
            <div className="bg-primary-foreground border border-border rounded-lg p-4 sm:p-6">
              <h3 className="text-lg font-bold text-primary mb-3">
                Hostel Type
              </h3>
              <div className="inline-block bg-accent text-accent-foreground px-3 py-1 rounded-lg text-sm font-semibold capitalize">
                For {hostel.gender}
              </div>
            </div>
          </div>
          </div>
      </div>
    </main>
  );
}
