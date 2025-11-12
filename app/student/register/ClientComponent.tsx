"use client"

import type React from "react"

import { useEffect, useState } from "react"
import Link from "next/link" 
import { Button } from "@/components/ui/button"
import { User, Mail, Phone, MapPin, AlertCircle, IdCard } from "lucide-react"
import { useSearchParams } from "next/navigation"
import { decryptData } from "@/lib/encrypted"
import { fetchApi } from "@/lib/api"
import { toast } from "sonner"

export default function ClientComponent() {
  const searchParams = useSearchParams()
  const token = searchParams.get("set") || ""

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    cnnic: "",
    fatherName:"",
    fatherPhone:"",
    address:"",
    password: "",
    confirmPassword: "",
  })
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [isFromBooking,setIsFromBooking] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (
      !formData.name ||
      !formData.email ||
      !formData.address ||
      !formData.cnnic ||
      !formData.phone ||
      !formData.fatherName || 
      !formData.gender ||
      !formData.password||
      !formData.confirmPassword 
    ) {
      setError("Please fill in all fields")
      return
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match")
      return
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters")
      return
    }
    
    try {
      setLoading(true)
      let res = await fetchApi({
        url:"/api/students",
        method:"POST",
        body:JSON.stringify(formData)
      })
      
        if(res.status == 403){
        toast.error("User is already registered with the given email or phone")}
      if(res.ok){
          toast.success("Account created success!")
          location.assign("/student/login")
      }
    
    } catch (error) {
      toast.error("An error occured")
      setError("Unknown error occured"+error)
    }
    finally{
      setLoading(false)
    }
     
  }

  useEffect(()=>{
    if(token && token !== "undefined" && token !== undefined && token !=="" && token !== null){

      let data = decryptData(decodeURIComponent(token))
      if(data?.email){
        setIsFromBooking(true)
        setFormData({
          ...formData,
          name:data.firstName + " " + data.lastName,
          email : data.email,
          phone:data.phone
        })
      }

    }
    
  },[])

  return (
    <div className="flex flex-col min-h-screen bg-background">

      <main className="flex-1 px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-primary mb-2">Create Student Account</h1>
            <p className="text-foreground/60 mb-8">Register to book your hostel and manage your stay</p>

            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                  <div className="relative">
                    <User className="absolute left-3 top-3.5 w-5 h-5 text-foreground/40" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      disabled={isFromBooking}
                      placeholder="John Doe"
                      onChange={(e)=>isFromBooking ? null : handleChange(e)}
                      className={`${isFromBooking?"bg-muted text-muted-foreground":""} w-full  pl-10 pr-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent`}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3.5 w-5 h-5 text-foreground/40" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      disabled={isFromBooking}
                      onChange={(e)=>isFromBooking ? null : handleChange(e)}
                      placeholder="student@example.com"
                      className={`${isFromBooking?"bg-muted text-muted-foreground":""} w-full  pl-10 pr-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent`}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3.5 w-5 h-5 text-foreground/40" />
                    <input
                      type="tel"
                      name="phone"
                      
                      value={formData.phone}
                      onChange={(e)=>isFromBooking ? null : handleChange(e)}
                      disabled={isFromBooking}
                      placeholder="+92-300-1234567"
                      className={`${isFromBooking?"bg-muted text-muted-foreground":""} w-full  pl-10 pr-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent`}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Cnic *</label>
                  <div className="relative">
                    <IdCard className="absolute left-3 top-3.5 w-5 h-5 text-foreground/40" />
                    <input
                      type="number"
                      name="cnnic" 
                      min={0}
                      max={9999999999999}
                      value={formData.cnnic}
                      onChange={(e)=>{
                        if(e.target.value.length !== 14){
                          isFromBooking ? null : handleChange(e)
                        }
                      }}
                      placeholder="13 Digits of your ID"
                      className={` w-full  pl-10 pr-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent`}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Gender *</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>

                   <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Father name *</label>
                  <div className="relative">
                    <input
                      type="text"
                      name="fatherName"
                      value={formData.fatherName}
                      onChange={(e)=>isFromBooking ? null : handleChange(e)}
                      placeholder="Your father name"
                      className={` w-full  pl-10 pr-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent`}
                    />
                  </div>
                </div>
                   <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Father Phone </label>
                  <div className="relative">
                    <input
                      type="tel"
                      name="fatherPhone"
                      value={formData.fatherPhone}
                      onChange={(e)=>isFromBooking ? null : handleChange(e)}
                      placeholder="03012345678"
                      className={` w-full  pl-10 pr-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent`}
                    />
                  </div>
                </div>
                   <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Parmanent address *</label>
                  <div className="relative">
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={(e)=>isFromBooking ? null : handleChange(e)}
                      placeholder="Your father name"
                      className={` w-full  pl-10 pr-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent`}
                    />
                  </div>
                </div>


              </div>
                <p className="text-sm text-muted-foreground">Setup you're password for HostelHub student account. Please don't share with anyone</p>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Password *</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Confirm Password *</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                </div>
                </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-accent hover:bg-accent/90 text-primary font-semibold py-2.5 rounded-lg transition-colors"
              >
                {loading ? "Creating Account..." : "Create Account"}
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-center text-foreground/60 text-sm">
                Already have an account?{" "}
                <Link href="/student/login" className="text-accent font-semibold hover:underline">
                  Sign in here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>

    </div>
  )
}
