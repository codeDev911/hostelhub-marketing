"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Loader2 } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { toast } from "sonner"
import { fetchApi } from "@/lib/api"

export default function HostelRegistrationPage() {
  const [formData, setFormData] = useState({
    ownerName: "",
    email: "",
    phone: "",
    businessName: "",
    businessType: "hostel",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    cnnic: "", 
  })

  const [isLoading, setIsLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    console.log(formData);
    try {
      const response = await fetchApi({
        url:"/api/registrations/submit",
        method:"POST",
        body:JSON.stringify(formData),
        headers:{}
      })
      

      const data = await response.json()

      if (!response.ok) {
        toast.error(data.error || "Failed to register hostel")
        return
      }

      
      
      setSubmitted(true)
      toast.success("Hostel registration submitted successfully! Our team will review it shortly.")
      setTimeout(() => {
        window.location.href = "/hostel-owners"
      }, 2000)
    } catch (error) {
      console.error("[v0] Registration error:", error)
      toast.error("An error occurred during registration")
    } finally {
      setIsLoading(false)
    }
  }

  const cities = ["Lahore", "Karachi", "Islamabad", "Rawalpindi", "Peshawar", "Multan", "Faisalabad", "Quetta"]

  if (submitted) {
    return (
      <main className="min-h-screen bg-background flex flex-col">
        
        <div className="grow flex items-center justify-center px-4">
          <div className="bg-primary-foreground border border-border rounded-lg p-8 text-center max-w-md">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-primary mb-2">Registration Submitted!</h2>
            <p className="text-muted-foreground mb-4">We will verify your details and contact you soon.</p>
            <p className="text-sm text-muted-foreground">Redirecting...</p>
          </div>
        </div>
        
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background flex flex-col">
      

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 grow">
        <Link href="/hostel-owners" className="flex items-center gap-2 text-accent hover:text-accent/80 mb-6 sm:mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Hostel Owners
        </Link>

        <div className="mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2">Register Your Hostel</h1>
          <p className="text-muted-foreground text-sm sm:text-base">
            Fill out the form below to register your hostel on HostelHub
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-primary-foreground border border-border rounded-lg p-6 sm:p-8 space-y-6 sm:space-y-8"
        >
          {/* Section: Hostel Information */}
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-primary mb-4 sm:mb-6">Hostel Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Business Name *</label>
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  placeholder="e.g., Student Haven Lahore"
                  required
                  className="w-full px-4 py-2 border border-border rounded-sm focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Business Type *</label>
                <select
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border rounded-sm focus:outline-none focus:border-accent transition-colors"
                >
                  <option value="hostel">Hostel</option>
                  <option value="shared">Shared Housing</option>
                  <option value="apartment">Apartment</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-foreground mb-2">Description *</label>
                <textarea
                  name="description"
                  placeholder="Describe your hostel features and amenities"
                  required
                  rows={2}
                  className="w-full px-4 py-2 border border-border rounded-sm focus:outline-none focus:border-accent transition-colors resize-none"
                />
              </div>
            </div>
          </div>

          {/* Section: Owner Information */}
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-primary mb-4 sm:mb-6">Owner Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Owner Name *</label>
                <input
                  type="text"
                  name="ownerName"
                  value={formData.ownerName}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                  className="w-full px-4 py-2 border border-border rounded-sm focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="w-full px-4 py-2 border border-border rounded-sm focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+92-300-1234567"
                  required
                  className="w-full px-4 py-2 border border-border rounded-sm focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">CNIC Number *</label>
                <input
                  type="text"
                  name="cnnic"
                  value={formData.cnnic}
                  onChange={handleChange}
                  placeholder="xxxxx-xxxxxxx-x"
                  required
                  className="w-full px-4 py-2 border border-border rounded-sm focus:outline-none focus:border-accent transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Section: Hostel Location */}
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-primary mb-4 sm:mb-6">Hostel Location</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">City *</label>
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-sm focus:outline-none focus:border-accent transition-colors"
                >
                  <option value="">Select City</option>
                  {cities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">State *</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="e.g., Punjab"
                  required
                  className="w-full px-4 py-2 border border-border rounded-sm focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Postal Code *</label>
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  placeholder="e.g., 54000"
                  required
                  className="w-full px-4 py-2 border border-border rounded-sm focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-foreground mb-2">Full Address *</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter complete hostel address"
                  required
                  rows={2}
                  className="w-full px-4 py-2 border border-border rounded-sm focus:outline-none focus:border-accent transition-colors resize-none"
                />
              </div>
            </div>
          </div>
 

          <div className="flex gap-4">
            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-sm font-bold transition-all disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit Registration"
              )}
            </button>
            <Link href="/hostel-owners" className="flex-1">
              <button
                type="button"
                className="w-full border border-border hover:bg-secondary px-6 py-3 rounded-sm font-bold transition-all"
              >
                Cancel
              </button>
            </Link>
          </div>

          <p className="text-xs sm:text-sm text-muted-foreground">
            By registering, you agree to our Terms of Service and Privacy Policy.
          </p>
        </form>
      </div>

      
    </main>
  )
}
