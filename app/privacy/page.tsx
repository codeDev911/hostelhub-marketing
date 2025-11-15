

export function generateMetadata(){

  return {
    title: "Privacy polices | Hostelhub",
    description: "Privacy polices hostelhubs",
    keywords:"pakistan, lahore, islamabad,contact, help hostelhub, faisalabad, di khan, gh khan, peshawar , multan, karachi, karrak, kohat, cantt, ai, pakistan, hostels, students, appartments"
  }
}

export default function Privacy() {
  return (
    <>
      
      <main className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* Hero Section */}
          <div className="mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4 text-balance">Privacy Policy</h1>
            <p className="text-lg text-foreground/70">Last updated: March 2025</p>
          </div>

          {/* Privacy Content */}
          <div className="space-y-8 text-foreground/70">
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">1. Introduction</h2>
              <p>
                HostelHub ("we" or "us" or "our") operates the HostelHub website. This page informs you of our policies
                regarding the collection, use, and disclosure of personal data when you use our service and the choices
                you have associated with that data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">2. Information Collection and Use</h2>
              <p>
                We collect several different types of information for various purposes to provide and improve our
                service to you.
              </p>
              <h3 className="text-lg font-semibold text-primary mt-4 mb-2">Types of Data Collected:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Personal Data: Name, email address, phone number, cookies and usage data</li>
                <li>Usage Data: Browser type, IP address, pages visited, time and date of visit</li>
                <li>Location Data: City and area preferences for hostel searches</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">3. Use of Data</h2>
              <p>HostelHub uses the collected data for various purposes:</p>
              <ul className="list-disc list-inside space-y-2 mt-3">
                <li>To provide and maintain our service</li>
                <li>To notify you about changes to our service</li>
                <li>To allow you to participate in interactive features of our service</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information so we can improve our service</li>
                <li>To monitor the usage of our service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">4. Security of Data</h2>
              <p>
                The security of your data is important to us but remember that no method of transmission over the
                Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable
                means to protect your personal data, we cannot guarantee its absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">5. Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">6. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at:</p>
              <div className="mt-4 p-4 bg-secondary rounded-sm">
                <p className="font-semibold text-foreground">Email: privacy@hostelhub.pk</p>
                <p className="font-semibold text-foreground">Phone: +923051767579</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      
    </>
  )
}
