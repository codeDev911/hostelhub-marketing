
export function generateMetadata(){

  return {
    title: "Help center",
    description: "Get help with common issues and learn how to use HostelHub..",
    keywords:"pakistan, lahore, islamabad,contact, help hostelhub, help center, faisalabad, di khan, gh khan, peshawar , multan, karachi, karrak, kohat, cantt, ai, pakistan, hostels, students, appartments"
  }
}

export default function Help() {
  return (
    <>
      
      <main className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* Hero Section */}
          <div className="mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4 text-balance">Help Center</h1>
            <p className="text-lg text-foreground/70">Get help with common issues and learn how to use HostelHub.</p>
          </div>

          {/* Help Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <div className="bg-primary-foreground border border-border rounded-sm p-6 sm:p-8">
              <h3 className="text-xl font-bold text-primary mb-4">Getting Started</h3>
              <ul className="space-y-3 text-foreground/70">
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>How to search for hostels</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>Understanding hostel listings</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>Viewing hostel details</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>Contacting hostels</span>
                </li>
              </ul>
            </div>

            <div className="bg-primary-foreground border border-border rounded-sm p-6 sm:p-8">
              <h3 className="text-xl font-bold text-primary mb-4">Account & Booking</h3>
              <ul className="space-y-3 text-foreground/70">
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>Creating an account</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>Making a booking</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>Cancellation policy</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>Payment methods</span>
                </li>
              </ul>
            </div>

            <div className="bg-primary-foreground border border-border rounded-sm p-6 sm:p-8">
              <h3 className="text-xl font-bold text-primary mb-4">Safety & Security</h3>
              <ul className="space-y-3 text-foreground/70">
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>Hostel verification process</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>Data protection</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>Reporting issues</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>Safety guidelines</span>
                </li>
              </ul>
            </div>

            <div className="bg-primary-foreground border border-border rounded-sm p-6 sm:p-8">
              <h3 className="text-xl font-bold text-primary mb-4">Reviews & Ratings</h3>
              <ul className="space-y-3 text-foreground/70">
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>How ratings work</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>Leaving a review</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>Review guidelines</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>Reporting fake reviews</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Support */}
          <div className="p-6 sm:p-8 bg-accent/10 border border-accent/20 rounded-sm text-center">
            <h2 className="text-2xl font-bold text-primary mb-3">Need more help?</h2>
            <p className="text-foreground/70 mb-6">
              Our support team is available 24/7 to assist you with any questions or issues.
            </p>
            <a
              href="/contact"
              className="inline-block bg-accent text-primary font-semibold px-6 py-3 rounded-sm hover:bg-accent/90 transition-colors"
            >
              Contact Support
            </a>
          </div>
        </div>
      </main>
      
    </>
  )
}
