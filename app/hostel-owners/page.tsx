
import Link from "next/link"
import { BarChart3, Users, Building2, TrendingUp, Shield, Zap } from 'lucide-react' 
import Image from "next/image"

export function generateMetadata() {
  return {
    title: "Manage your Hostel & Apartment business online ",

    description:
      "Grow your hostel or apartment business with HostelHub. Reach thousands of students, manage bookings, listings, and communication — all from one simple platform.",

    keywords: [
      "hostel management Pakistan",
      "apartment management Pakistan",
      "list your hostel online",
      "student hostels Pakistan",
      "hostel registration",
      "HostelHub",
      "hostel owners platform",
      "manage hostel online",
      "student accommodation Pakistan",
    ].join(", "),
  }
}



export default function HostelOwnersPage() {
  return (
    <main className="min-h-screen  flex flex-col">
      

 <section className=" overflow-x-hidden py-20">
  <div className="absolute top-0 -z-10 inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />

  <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    
    {/* Left Content */}
    <div>
      <span className="inline-flex items-center rounded-full bg-accent px-4 py-1 text-sm font-medium text-accent-foreground mb-4">
        For Hostel & Apartment Owners
      </span>

      <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 text-balance">
        Grow your hostel
        <br />
        business with HostelHub
      </h1>

      <p className="max-w-xl text-lg text-foreground/70 mb-8">
        Bring your hostel online, reach more students, manage rooms, payments,
        and operations — all from one powerful dashboard.
      </p>

      <div className="flex flex-wrap gap-4">
        <Link
          href="/hostel-registration"
          className="rounded-full bg-accent px-8 py-3 font-semibold text-accent-foreground hover:bg-accent/90 transition"
        >
          Register Your Hostel
        </Link>

        <Link
          href="#features"
          className="rounded-full border border-border px-8 py-3 font-semibold hover:bg-secondary transition"
        >
          Explore Features
        </Link>
      </div>
    </div>

    {/* Right Visual */}
    <div className="relative">
      <div className="absolute -inset-4 rounded-3xl bg-accent/20 blur-3xl -z-10" />
      <img
        src="/dashboard.PNG"
        alt="HostelHub Dashboard"
        className="w-full rounded-3xl border border-border shadow-2xl"
      />
    </div>

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
            <div className="bg-card  rounded-2xl p-6 sm:p-8  transition-shadow">
              <Users className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3">Complete Student Management</h3>
              <p className="text-foreground text-sm sm:text-base leading-relaxed">
                Track every student in your hostel with detailed profiles, payment history, room assignments, and
                check-in/check-out dates. Get instant notifications for new bookings and manage student information all
                from one dashboard.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-card  rounded-2xl p-6 sm:p-8  transition-shadow">
              <BarChart3 className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3">Advanced Analytics & Insights</h3>
              <p className="text-foreground text-sm sm:text-base leading-relaxed">
                Get real-time insights into occupancy rates, revenue trends, student demographics, and booking patterns.
                Make data-driven decisions to optimize your hostel operations and maximize profitability.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-card  rounded-2xl p-6 sm:p-8  transition-shadow">
              <Building2 className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3">Smart Room Management</h3>
              <p className="text-foreground text-sm sm:text-base leading-relaxed">
                Efficiently manage all your rooms with real-time availability tracking, dynamic pricing, room-wise
                settings, and automated seat management. Update room status instantly as bookings come in.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-card  rounded-2xl p-6 sm:p-8  transition-shadow">
              <TrendingUp className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3">Maximum Online Visibility</h3>
              <p className="text-foreground text-sm sm:text-base leading-relaxed">
                Get listed on our platform and be discovered by thousands of students actively searching for hostels.
                Reach thousands of potential customers from across Pakistan without spending on traditional advertising.
              </p>
            </div>

             

            {/* Feature 6 */}
            <div className="bg-card  rounded-2xl p-6 sm:p-8  transition-shadow">
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

{/* HostelHub Panel overview */}
      <section className="py-12 sm:py-16 md:py-20 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
            See HostelHub in Action
          </h2>
          <p className="text-center text-foreground mb-12 sm:mb-16 max-w-2xl mx-auto">
            Explore how our powerful features make hostel management simple, efficient, and profitable.
          </p>

          {/* Mockup 1: Dashboard */}
          <div className="mb-16 sm:mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-4">Central Dashboard Overview</h3>
                <p className="text-foreground mb-4 leading-relaxed">
                  Get a complete overview of your hostel at a glance. Monitor total students, available seats, room
                  occupancy, and revenue in real-time. Our smart dashboard highlights key metrics and provides
                  actionable insights to help you make quick business decisions.
                </p>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-start">
                    <span className="text-accent font-bold mr-3">✓</span>
                    <span>Real-time occupancy tracking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent font-bold mr-3">✓</span>
                    <span>Revenue analytics at a glance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent font-bold mr-3">✓</span>
                    <span>Recent bookings and activity feed</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg ">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dashboard.PNG-ZGNMOviiRQLz6KLf4eaAt2QU9soH03.png"
                  alt="Dashboard Overview"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Mockup 2: Student Management */}
          <div className="mb-16 sm:mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="rounded-2xl overflow-hidden shadow-lg  order-2 lg:order-1">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/students.PNG-6Lz4jQyNcJRWRCXTKdUaGOQNk6tYF3.png"
                  alt="Student Management"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-4">Complete Student Management</h3>
                <p className="text-foreground mb-4 leading-relaxed">
                  Manage all your students efficiently with our comprehensive student management system. View complete
                  student profiles, track payment status, filter by gender and payment status, and maintain organized
                  records of all your residents.
                </p>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-start">
                    <span className="text-accent font-bold mr-3">✓</span>
                    <span>Advanced search and filtering</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent font-bold mr-3">✓</span>
                    <span>Track payment status instantly</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent font-bold mr-3">✓</span>
                    <span>Detailed student contact information</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Mockup 3: Room Management */}
          <div className="mb-16 sm:mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-4">Smart Room Management</h3>
                <p className="text-foreground mb-4 leading-relaxed">
                  Control all your rooms with intelligent search and filtering options. Find rooms by number, type,
                  floor, and available seats. Set dynamic pricing, view real-time availability, and manage room
                  occupancy effortlessly with our intuitive interface.
                </p>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-start">
                    <span className="text-accent font-bold mr-3">✓</span>
                    <span>Smart search with advanced filters</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent font-bold mr-3">✓</span>
                    <span>Real-time availability tracking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent font-bold mr-3">✓</span>
                    <span>Dynamic pricing per room</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg ">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/room%20managnment.PNG-o9tRGQVkZD4ORMUqF032Ms748V8adP.png"
                  alt="Room Management"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Mockup 4: Payments & Invoices */}
          <div className="mb-16 sm:mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="rounded-2xl overflow-hidden shadow-lg  order-2 lg:order-1">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/payments.PNG-XaqgseQhBYjG7XgvfGq8IEieLbs7hw.png"
                  alt="Payments and Invoices"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-4">Payments & Automated Invoicing</h3>
                <p className="text-foreground mb-4 leading-relaxed">
                  Streamline your payment collection with automated monthly invoicing. Track paid, pending, and overdue
                  payments instantly. Export payment data for accounting and maintain complete financial records without
                  manual effort.
                </p>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-start">
                    <span className="text-accent font-bold mr-3">✓</span>
                    <span>Automated monthly invoicing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent font-bold mr-3">✓</span>
                    <span>Payment status tracking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent font-bold mr-3">✓</span>
                    <span>Export payments for accounting</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Mockup 5: Feedback & Complaints */}
          <div className="mb-16 sm:mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-4">Feedback & Complaint Management</h3>
                <p className="text-foreground mb-4 leading-relaxed">
                  Track and resolve student complaints efficiently. Categorize issues by priority and status, view
                  detailed complaint history linked to specific rooms and students, and get AI-powered insights to
                  improve your service quality.
                </p>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-start">
                    <span className="text-accent font-bold mr-3">✓</span>
                    <span>Priority-based complaint tracking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent font-bold mr-3">✓</span>
                    <span>Resolution status monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent font-bold mr-3">✓</span>
                    <span>AI-powered improvement suggestions</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg ">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/feedbacks-complaint.PNG-B90h4k0XTooQowT5p0KkfCRz5zxudS.png"
                  alt="Complaint Management"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Mockup 6: Feedback Analytics */}
          <div className="mb-16 sm:mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="rounded-2xl overflow-hidden shadow-lg  order-2 lg:order-1">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/feedbacks.PNG-PxJMH2RZc6TksZnKHJtoIueWTN5PNg.png"
                  alt="Feedback Analytics"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-4">Feedback Analytics & Insights</h3>
                <p className="text-foreground mb-4 leading-relaxed">
                  Understand your customer satisfaction with comprehensive feedback analytics. Track average ratings,
                  customer happiness percentage, complaint breakdown by priority, and get AI-powered recommendations to
                  enhance service quality.
                </p>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-start">
                    <span className="text-accent font-bold mr-3">✓</span>
                    <span>Customer satisfaction metrics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent font-bold mr-3">✓</span>
                    <span>Priority breakdown analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent font-bold mr-3">✓</span>
                    <span>Smart recommendations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Mockup 7: Invoice Details */}
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-4">Invoice Generation & Management</h3>
                <p className="text-foreground mb-4 leading-relaxed">
                  Generate professional invoices automatically for each student. View complete billing details, payment
                  receipts, and transaction history. Download and print invoices for your records with a single click.
                </p>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-start">
                    <span className="text-accent font-bold mr-3">✓</span>
                    <span>Professional invoice generation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent font-bold mr-3">✓</span>
                    <span>Download and print invoices</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent font-bold mr-3">✓</span>
                    <span>Complete transaction history</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg ">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/invoice-details.PNG-q2aHgYhrfemL7AlF8IZ5dLULVJHylp.png"
                  alt="Invoice Details"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

{/* Why choose hostelhub */}
      <section className="bg-secondary text-primary py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 sm:mb-16 text-center">
            Why Hostel Owners Choose HostelHub
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-card rounded-2xl p-6 sm:p-8">
              <div className="text-3xl mb-3">📈</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">Increase Revenue</h3>
              <p className="text-sm sm:text-base text-white/90">
                Reach more students and fill your rooms faster. Average owners see a 40% increase in bookings within
                first 3 months.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6 sm:p-8">
              <div className="text-3xl mb-3">⏱️</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">Save Time</h3>
              <p className="text-sm sm:text-base text-white/90">
                Automate manual tasks like bookings, payments, and student management. Focus on growing your business,
                not paperwork.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6 sm:p-8">
              <div className="text-3xl mb-3">🌐</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">Go Digital</h3>
              <p className="text-sm sm:text-base text-white/90">
                Join thousands of hostel owners already using our platform. Be part of Pakistan's leading hostel booking
                ecosystem.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6 sm:p-8">
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
      <section className=" py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-12 sm:mb-16 text-center">
            How to Register Your Hostel
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
            {/* Step 1 */}
            <div className="bg-card  rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Fill Form</h3>
              <p className="text-sm sm:text-base text-foreground">
                Fill out the registration form with your hostel details, contact information, and location.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-card  rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Verification</h3>
              <p className="text-sm sm:text-base text-foreground">
                Our team verifies your hostel details and CNIC information for security.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-card  rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Setup Admin</h3>
              <p className="text-sm sm:text-base text-foreground">
                Get access to your admin dashboard and set up your rooms, pricing, and amenities.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-card  rounded-2xl p-6 text-center">
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
              <button className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 sm:px-8 py-3 rounded-full font-bold text-base sm:text-lg transition-all">
                Start Registration Now
              </button>
            </Link>
          </div>
        </div>
      </section>

      
    </main>
  )
}
