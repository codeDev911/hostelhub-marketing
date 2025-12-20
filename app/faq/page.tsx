

export function generateMetadata(){

  return {
    title: "Frequently Asked Questions (FAQs)",
    description: "Find answers to common questions about HostelHub and our services.",
    keywords:"pakistan, lahore, islamabad,contact, help hostelhub, faisalabad, di khan, gh khan, peshawar , multan, karachi, karrak, kohat, cantt, ai, pakistan, hostels, students, apartments"
  }
}

export default function FAQ() {
  const faqs = [
    {
      question: "How do I search for hostels?",
      answer:
        "Use our search bar on the home page to select your city, area, and hostel type (boys/girls). You'll see all available hostels matching your criteria with prices and availability.",
    },
    {
      question: "Are the hostels verified?",
      answer:
        "Yes, all hostels on HostelHub are verified and checked by our team. We ensure they meet safety and quality standards before listing.",
    },
    {
      question: "Can I book directly through the website?",
      answer:
        "Currently, you can view hostel details and contact information. Booking details will be available soon. You can contact hostels directly using the information provided.",
    },
    {
      question: "What payment methods are accepted?",
      answer:
        "Payment methods vary by hostel. You can check the hostel details page for their accepted payment options.",
    },
    {
      question: "Can I cancel my booking?",
      answer:
        "Cancellation policies vary by hostel. Please check the hostel's terms and conditions or contact them directly for cancellation details.",
    },
    {
      question: "Is my personal information safe?",
      answer:
        "Yes, we take data security seriously. All your information is encrypted and protected according to our privacy policy.",
    },
    {
      question: "How can I leave a review?",
      answer:
        "After your stay, you can leave a review on the hostel's detail page. This helps other students make informed decisions.",
    },
    {
      question: "What if I have issues with a hostel?",
      answer:
        "Contact our support team immediately at support@hostelhub.pk or call +92-300-1234567. We'll help resolve any issues.",
    },
  ]

  return (
    <>
      
      <main className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* Hero Section */}
          <div className="mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4 text-balance">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-foreground/70">
              Find answers to common questions about HostelHub and our services.
            </p>
          </div>

          {/* FAQs */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group rounded-2xl bg-card p-4 sm:p-6 cursor-pointer  group transition-colors"
              >
                <summary className="flex items-center justify-between font-semibold text-foreground">
                  <span className="group-hover:text-accent ">{faq.question}</span>
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-foreground/70 mt-4 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>

          {/* Still Have Questions */}
          <div className="mt-12 sm:mt-16 p-6 sm:p-8 bg-card rounded-2xl text-center">
            <h2 className="text-2xl font-bold text-primary mb-3">Still have questions?</h2>
            <p className="text-foreground/70 mb-6">
              Can't find the answer you're looking for? Please contact our support team.
            </p>
            <a
              href="/contact"
              className="inline-block bg-accent text-primary font-semibold px-6 py-3 rounded-full hover:bg-accent/90 transition-colors"
            >
              Contact Support
            </a>
          </div>
        </div>
      </main>
      
    </>
  )
}
