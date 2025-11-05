"use client"

import Link from "next/link"
import { BarChart3, Users, Building2, TrendingUp, Shield, Zap } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function HostelOwnersPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Grow Your Hostel Business</h1>
          <p className="text-lg sm:text-xl text-white/90 mb-8">
            Connect with thousands of students online. Manage your hostel effortlessly.
          </p>
          <Link href="/hostel-registration">
            <button className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 sm:px-8 py-3 rounded-sm font-bold text-base sm:text-lg transition-all">
              Register Your Hostel
            </button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-12 sm:mb-16 text-center">
            Our Powerful Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Feature 1 */}
            <div className="bg-primary-foreground border border-border rounded-lg p-6 sm:p-8 hover:shadow-lg transition-shadow">
              <Users className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3">Complete Student Management</h3>
              <p className="text-foreground text-sm sm:text-base leading-relaxed">
                Track every student in your hostel with detailed profiles, payment history, room assignments, and
                check-in/check-out dates. Get instant notifications for new bookings and manage student information all
                from one dashboard.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-primary-foreground border border-border rounded-lg p-6 sm:p-8 hover:shadow-lg transition-shadow">
              <BarChart3 className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3">Advanced Analytics & Insights</h3>
              <p className="text-foreground text-sm sm:text-base leading-relaxed">
                Get real-time insights into occupancy rates, revenue trends, student demographics, and booking patterns.
                Make data-driven decisions to optimize your hostel operations and maximize profitability.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-primary-foreground border border-border rounded-lg p-6 sm:p-8 hover:shadow-lg transition-shadow">
              <Building2 className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3">Smart Room Management</h3>
              <p className="text-foreground text-sm sm:text-base leading-relaxed">
                Efficiently manage all your rooms with real-time availability tracking, dynamic pricing, room-wise
                settings, and automated seat management. Update room status instantly as bookings come in.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-primary-foreground border border-border rounded-lg p-6 sm:p-8 hover:shadow-lg transition-shadow">
              <TrendingUp className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3">Maximum Online Visibility</h3>
              <p className="text-foreground text-sm sm:text-base leading-relaxed">
                Get listed on our platform and be discovered by thousands of students actively searching for hostels.
                Reach thousands of potential customers from across Pakistan without spending on traditional advertising.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-primary-foreground border border-border rounded-lg p-6 sm:p-8 hover:shadow-lg transition-shadow">
              <Shield className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3">Secure Payment Processing</h3>
              <p className="text-foreground text-sm sm:text-base leading-relaxed">
                Securely process payments, track payment status, generate invoices, and manage financial records.
                Built-in payment security ensures both you and your students have a safe transaction experience.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-primary-foreground border border-border rounded-lg p-6 sm:p-8 hover:shadow-lg transition-shadow">
              <Zap className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3">Quick & Easy Setup</h3>
              <p className="text-foreground text-sm sm:text-base leading-relaxed">
                Get your hostel online in minutes with our simple registration process. No technical knowledge required
                - just fill in your hostel details and start receiving bookings right away.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary text-white py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 sm:mb-16 text-center">
            Why Hostel Owners Choose HostelHub
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-primary-foreground/10 backdrop-blur border border-white/20 rounded-lg p-6 sm:p-8">
              <div className="text-3xl mb-3">📈</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">Increase Revenue</h3>
              <p className="text-sm sm:text-base text-white/90">
                Reach more students and fill your rooms faster. Average owners see a 40% increase in bookings within
                first 3 months.
              </p>
            </div>

            <div className="bg-primary-foreground/10 backdrop-blur border border-white/20 rounded-lg p-6 sm:p-8">
              <div className="text-3xl mb-3">⏱️</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">Save Time</h3>
              <p className="text-sm sm:text-base text-white/90">
                Automate manual tasks like bookings, payments, and student management. Focus on growing your business,
                not paperwork.
              </p>
            </div>

            <div className="bg-primary-foreground/10 backdrop-blur border border-white/20 rounded-lg p-6 sm:p-8">
              <div className="text-3xl mb-3">🌐</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">Go Digital</h3>
              <p className="text-sm sm:text-base text-white/90">
                Join thousands of hostel owners already using our platform. Be part of Pakistan's leading hostel booking
                ecosystem.
              </p>
            </div>

            <div className="bg-primary-foreground/10 backdrop-blur border border-white/20 rounded-lg p-6 sm:p-8">
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">Full Control</h3>
              <p className="text-sm sm:text-base text-white/90">
                Have complete control over your hostel data, pricing, and student information. Your data is always
                secure with us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Register Section */}
      <section className="bg-secondary py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-12 sm:mb-16 text-center">
            How to Register Your Hostel
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
            {/* Step 1 */}
            <div className="bg-primary-foreground border border-border rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Fill Form</h3>
              <p className="text-sm sm:text-base text-foreground">
                Fill out the registration form with your hostel details, contact information, and location.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-primary-foreground border border-border rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Verification</h3>
              <p className="text-sm sm:text-base text-foreground">
                Our team verifies your hostel details and CNIC information for security.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-primary-foreground border border-border rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Setup Admin</h3>
              <p className="text-sm sm:text-base text-foreground">
                Get access to your admin dashboard and set up your rooms, pricing, and amenities.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-primary-foreground border border-border rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Go Live</h3>
              <p className="text-sm sm:text-base text-foreground">
                Your hostel is now live on our platform. Start receiving bookings from students!
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/hostel-registration">
              <button className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 sm:px-8 py-3 rounded-sm font-bold text-base sm:text-lg transition-all">
                Start Registration Now
              </button>
            </Link>
          </div>
        </div>
      </section>

      
    </main>
  )
}
