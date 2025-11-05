"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { MapPin, Phone, Calendar, Users, ArrowLeft, Check, Users2, DoorOpen, Loader2, InfoIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { toast } from "react-toastify"
import { fetchApi } from "@/lib/api"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { decryptData, encryptData } from "@/lib/encrypted"

export default function BookHostel() {
  const params = useParams()
  const router = useRouter()
  const hostelId = params.id as string
  const [hostel,setHostel] = useState({} as any)

  const [selectedRoom, setSelectedRoom] = useState({} as any)
  const [bookingType, setBookingType] = useState("seats")
  const [seatsToBook, setSeatsToBook] = useState(1 )
  const [formData, setFormData] = useState({
    studentInformation:{
      firstName:"",
      lastName:"", 
      email:"",
      cnnic:"",
      address:"",
      phone:"", 
    },
    hostelId:"",
    roomId:"",
    numberOfSeats:0,
    checkInDate:"",
    duration:1 as any,
    pricePerMonth:0,
    totalPrice:0,
    bookingNotes:"",
    roomType:selectedRoom?.type  || "",
  })

  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [submitLoading,setSubmitLoading] = useState(false)
  const [encryptedData,setEncryptedData] = useState(String as any)

  useEffect(()=>{
    const fetchHostel = async() =>{
      try {
        let res = await fetchApi({
          url:`/api/hostels/${hostelId}`,
          method:"GET"
        })

        let data = await res.json()
        setHostel(data)
        setSelectedRoom(data?.rooms[0])
        

      } catch (error) {
        
      }finally{
        setIsLoading(false)
      }
    }
    fetchHostel()
  },[])


   if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="w-8 h-8 animate-spin text-accent" />
      </div>
    )
  } 



  if (!hostel && !isLoading) {
    return (
      <main className="min-h-screen bg-background flex flex-col">
        
        <div className="grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-primary mb-4">Hostel not found</h1>
            <Button onClick={() => router.back()} className="bg-accent hover:bg-accent/90">
              Go Back
            </Button>
          </div>
        </div>
        
      </main>
    )
  }

  if(hostel?.rooms?.length <=0){
    return (
      <div className="w-full min-h-[60vh] flex justify-center items-center">
        <div className="md:p-8 p-6 text-center rounded-md bg-muted border border-border">
          <h2 className="md:text-2xl text-xl font-bold text-primary">Opps! access denied</h2>
          <p className="md:text-base text-sm">Currently the hostel does not have any availabe room for rent.</p>
          <div className="grid lg:grid-cols-2 mt-6 grid-cols-1 gap-4">
            <Button onClick={()=> router.back()} variant={"outline"}>Go Back</Button>
            <Button onClick={()=> router.push("/hostels")} variant={"default"}>Browse more hostels</Button>
          </div> 
        </div>
      </div>     
    )
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      studentInformation:{
        ...formData.studentInformation,
        [name]:value
      }
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitLoading(true)

    try {
      // First create booking
      const bookingResponse = await fetchApi({
        url:"/api/bookings",
        method:"POST",
        body: JSON.stringify({
          studentInformation:formData.studentInformation,
          bookingNotes:formData.bookingNotes,
          hostelId: hostel.id,
          roomId: selectedRoom?.id,
          roomType: bookingType === "whole-room" ? "whole_room" : "seats",
          numberOfSeats: seatsToBook,
          checkInDate: formData.checkInDate,
          duration: Number.parseInt(formData.duration),
          pricePerMonth: selectedRoom?.pricePerMonth || 0,
          totalPrice: totalPrice,
        }),
      })

      if (!bookingResponse.ok) {
        const error = await bookingResponse.json()
        toast.error(error.error || "Failed to create booking")
        setSubmitLoading(false)
        return
      }
      const token = encryptData(formData.studentInformation) 
      setEncryptedData(encodeURIComponent(token))
      setSubmitted(true)
      toast.success("Booking submitted successfully!")
    } catch (error) {
      console.error("[v0] Booking error:", error)
      toast.error("An error occurred")
      setSubmitLoading(false)
    }
  }

  const totalPrice = selectedRoom
    ? bookingType === "whole-room"
      ? (selectedRoom.pricePerMonth*selectedRoom.totalSeats) * Number.parseInt(formData.duration)
      : (selectedRoom.pricePerMonth) * seatsToBook * Number.parseInt(formData.duration)
    : 0 || 0

  return (
    <main className="min-h-screen bg-background flex flex-col">
      

      {/* Back Button */}
      <div className="bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-primary hover:text-accent transition-colors font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Hostel
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="grow py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl md:text-3xl font-bold text-primary mb-2">Boook Hostel</h1>
          <p className="text-muted-foreground mb-6">You can book hostel online here from our platform </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Hostel Info & Booking Form */}
            <div className="lg:col-span-2">
              {/* Hostel Summary */}
              <div className="bg-primary-foreground border border-border rounded-lg p-6 md:p-8 mb-8">
                <div className="flex flex-col sm:flex-row gap-6 mb-6">
                  <img
                    src={hostel.image || "/placeholder.svg"}
                    alt={hostel.name}
                    className="w-full sm:w-32 h-32 object-cover rounded-lg"
                  />
                  <div className="grow">
                    <h1 className="text-2xl md:text-3xl font-bold text-primary mb-2">{hostel.name}</h1>
                    <p className="text-base mb-2 text-foreground">{hostel.short_description}</p>
                    <div className="flex flex-wrap gap-4 text-sm md:text-base text-muted-foreground">

                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-accent" />
                        {hostel.area || hostel.state}, {hostel.city}
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-accent" />
                        {hostel.phone}
                      </div>
                      <div className="flex items-center gap-2">
                        <Users2 className="w-4 h-4 text-accent" />
                        {hostel?.students?.length ||0}
                      </div>
                      <div className="flex items-center gap-2">
                        <DoorOpen className="w-4 h-4 text-accent" />
                        {hostel?.rooms?.length ||0}
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6">{hostel.description_full}</p>
              </div>
              {/* Booking Form */}
              <div className="bg-primary-foreground border border-border rounded-lg p-6 md:p-8">

                {submitted ? (
                  <>
                  <div className="  border-green-500 rounded-lg p-8 text-center">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-green-500 mb-2">Booking Request Submitted!</h3>
                    <p className="text-muted-foreground mb-4">
                      Thank you for your interest. The hostel will contact you soon to confirm your booking.
                    </p>
                   
                   <Alert variant={"default"} className="text-start text-green-500 border-green-500">
                      <AlertTitle className="font-bold text-base flex items-center space-x-2">
                        <InfoIcon className="w-4 h-4"/> {" "} <h3>You're just 1 step away! (optional)</h3>
                      </AlertTitle>
                      <AlertDescription>Just setup your password to create your account and access to all your booking details, hostel / appartment activities and get notification on behalf of your accomodation. </AlertDescription>
                      <div className="flex items-center text-primary mt-3 mx-auto space-x-2">
                        <Button onClick={()=>location.assign(`/student/register?set=${encryptedData}`)} variant={"outline"}>Setup password</Button>
                        <Button onClick={()=>location.assign("/hostels")} variant={"outline"}>No Thanks</Button>
                      </div>
                    </Alert>
                  </div>
                    </>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h2 className="text-2xl font-bold text-primary mb-6">Student Information</h2>
                    {/* Personal Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-primary mb-2">First Name *</label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.studentInformation.firstName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-accent transition-colors"
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-primary mb-2">Last Name *</label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.studentInformation.lastName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-accent transition-colors"
                          placeholder="Enter your last name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-primary mb-2">Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.studentInformation.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-accent transition-colors"
                          placeholder="your.email@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-primary mb-2">Phone *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.studentInformation.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-accent transition-colors"
                          placeholder="03012345678"
                        />
                      </div>
                    </div>
 
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-primary mb-2">Cnic *</label>
                        <input
                          type="text"
                          name="cnnic"
                          value={formData.studentInformation.cnnic}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-accent transition-colors"
                          placeholder="13 digit CNIC number"
                        />
                      </div> 
                      <div>
                        <label className="block text-sm font-semibold text-primary mb-2">Permanent address *</label>
                        <input
                          type="text"
                          name="address"
                          value={formData.studentInformation.address}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-accent transition-colors"
                          placeholder="Your home address "
                        />
                      </div> 
                    </div>
                      <div>
                        <label className="block text-sm font-semibold text-primary mb-2">Booking notes</label>
                        <input
                          type="text"
                          name="bookingNotes"
                          value={formData.bookingNotes}
                          onChange={(e)=>setFormData({...formData, bookingNotes:e.target.value })}
                          required
                          className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-accent transition-colors"
                          placeholder="(Optional) Notes or inquiry about booking "
                        />
                      </div> 

                    {/* Room & Duration */}
                    <div className="border-t-2 border-border pt-6">
                      <h3 className="text-lg font-bold text-primary ">Room Selection</h3>
                      <p className="text-base text-muted-foreground mb-4">{hostel?.rooms?.length || 0} Availabe room(s) in <strong>{hostel.name}</strong> founded!</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        {hostel?.rooms?.map((room:any) => (
                          <button
                            key={room.id}
                            type="button"
                            onClick={() => setSelectedRoom(room)}
                            className={`p-4 border-2 rounded-lg transition-all justify-between flex ${
                              selectedRoom?.id === room.id
                                ? "border-accent bg-accent/10"
                                : "border-border hover:border-accent/50"
                            }`}
                          >
                            <div className="text-left ">
                              <div className="font-bold text-primary mb-1">{room.roomType}</div>
                              <div className="font-bold text-primary mb-1">Room #{room.roomNumber} - Floor {room.floor}</div>
                              <div className="text-sm text-muted-foreground mb-2">
                                Rs {room.pricePerMonth.toLocaleString()}/month
                              </div>
                              <div className="text-sm text-accent font-semibold">
                                {room.totalSeats - (room.students?.length || 0) -  ( room?.bookings?.reduce((prev:any,next:any)=> prev + next.numberOfSeats,0) || 0 ) > 0 ? room.totalSeats - (room.students?.length || 0) -  ( room?.bookings?.reduce((prev:any,next:any)=> prev + next.numberOfSeats,0) || 0 ) : 0}
                                {" "} seat(s) available
                                </div>
                           
                            </div>
                               <div>
                               {  ( room?.bookings?.reduce((prev:any,next:any)=> prev + next.numberOfSeats,0) || 0 ) > 0 &&<div>
                               <div className="p-1   font-bold  text-xs text-destructive flex items-center space-x-1  ">
                                     <p>pending seat(s) {  ( room?.bookings?.reduce((prev:any,next:any)=> prev + next.numberOfSeats,0) || 0 )} </p>
                                      <Tooltip>
                                      <TooltipTrigger asChild>
                                          <InfoIcon className="w-3 h-3"/>
                                      </TooltipTrigger>
                                      <TooltipContent className="bg-primary">
                                        <p>{( room?.bookings?.reduce((prev:any,next:any)=> prev + next.numberOfSeats,0) || 0 )} seats are not confirmed yet, you can apply to book.</p>
                                      </TooltipContent>
                                    </Tooltip>
                               </div>
                               </div>
                               }
                               <p className="text-muted-foreground text-xs">{"Booked seat's "}{room?.students?.length||0}</p>
                               </div>
                          </button>
                        ))}
                      </div>

                      <div className="mb-6 p-4 bg-secondary rounded-lg border border-border">
                        <h4 className="text-sm font-bold text-primary mb-3">Booking Type</h4>
                        <div className="grid grid-cols-2 gap-3">
                         {(selectedRoom?.students?.length || 0) == 0 ?
                          <button
                            type="button"
                            onClick={() => {
                              setBookingType("whole-room")
                              setSeatsToBook(Number.parseInt(selectedRoom.totalSeats))
                            }}
                            className={`p-3 rounded-lg border-2 transition-all text-sm font-medium ${
                              bookingType === "whole-room"
                                ? "border-accent bg-accent/10 text-primary"
                                : "border-border text-muted-foreground hover:border-accent/50"
                            }`}
                          >
                            Book Whole Room
                          </button>:
                          <button
                            type="button"
                            className={`p-3 rounded-lg border-2 transition-all text-sm font-medium border-border text-muted-foreground  `}
                          >
                            Can't book whole room 
                          </button>
                          }
                          <button
                            type="button"
                            onClick={() => setBookingType("seats")}
                            className={`p-3 rounded-lg border-2 transition-all text-sm font-medium ${
                              bookingType === "seats"
                                ? "border-accent bg-accent/10 text-primary"
                                : "border-border text-muted-foreground hover:border-accent/50"
                            }`}
                          >
                            Book Seats Only
                          </button>
                        </div>
                      </div>

                      {bookingType === "seats" && selectedRoom && (
                        <div className="mb-6">
                          <label className="block text-sm font-semibold text-primary mb-2">Number of Seats *</label>
                          <select
                            value={seatsToBook}
                            onChange={(e) => setSeatsToBook(Number.parseInt(e.target.value))}
                            className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-accent transition-colors"
                          >
                            {Array.from({ length: (selectedRoom.totalSeats) -  (selectedRoom?.students?.length||0)  }, (_, i) => i + 1).map((num) => (
                              <option key={num} value={num}>
                                {num} seat{num > 1 ? "s" : ""}
                              </option>
                            ))}
                          </select>
                        </div>
                      )}

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-primary mb-2">Check-in Date *</label>
                          <input
                            type="date"
                            name="checkInDate"
                            value={formData.checkInDate}
                            onChange={(e)=>setFormData({...formData,checkInDate:e.target.value})}
                            required
                            className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-accent transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-primary mb-2">Duration (Months) *</label>
                          <select
                            name="duration"
                            value={formData.duration}
                            onChange={(e)=>setFormData({...formData,duration:Number.parseInt(e.target.value)})}
                            className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-accent transition-colors"
                          >
                            {[1, 2, 3, 4, 5, 6, 9, 12].map((month) => (
                              <option key={month} value={month}>
                                {month} month{month > 1 ? "s" : ""}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    {
                      submitLoading?
                      <Button
                      type="button"
                      className="w-full bg-muted  text-accent-foreground font-bold py-6 rounded-lg transition-all text-lg"
                    >
                      Submitting...
                    </Button>
                      :<Button
                      type="submit"
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-6 rounded-lg transition-all text-lg"
                    >
                      Submit Booking Request
                    </Button>
                    }
                  </form>
                )}
              </div>
            </div>

            {/* Right Column - Pricing Summary */}
            <div className="lg:col-span-1">
              <div className="bg-primary-foreground border border-border rounded-lg p-6 md:p-8 sticky top-24">
                <h3 className="text-xl font-bold text-primary mb-6">Booking Summary</h3>

                {selectedRoom && (
                  <>
                    <div className="space-y-4 mb-6 pb-6 border-b-2 border-border">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Room Type:</span>
                        <span className="font-semibold text-foreground">{selectedRoom.roomType}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Booking Type:</span>
                        <span className="font-semibold text-foreground capitalize">
                          {bookingType === "whole-room"
                            ? "Whole Room"
                            : `${seatsToBook} Seat${seatsToBook > 1 ? "s" : ""}`}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">
                          Price per seat
                        </span>
                        <span className="font-semibold text-foreground">
                          Rs{" "}{selectedRoom?.pricePerMonth?.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Duration:</span>
                        <span className="font-semibold text-foreground">{formData.duration} month(s)</span>
                      </div>
                    </div>

                    <div className="bg-accent/10 rounded-lg p-4 mb-6">
                      <div className="flex justify-between items-center">
                       <div>
                         <span className="font-bold text-primary">Total Price:</span>
                       </div>
                        <span className="text-2xl font-bold text-accent">Rs {totalPrice.toLocaleString()}</span>
                      </div>
                         <p className="text-sm text-muted-foreground">For all seats and  duration</p>
                 </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </main>
  )
}
