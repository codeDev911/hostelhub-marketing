import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Hostels for Students in Lahore",
      excerpt: "Discover the best student-friendly hostels in Lahore with affordable prices and great amenities.",
      date: "March 15, 2025",
      category: "Guides",
    },
    {
      id: 2,
      title: "How to Choose the Right Hostel for Your Needs",
      excerpt:
        "A comprehensive guide to help you find the perfect hostel based on your budget, location, and preferences.",
      date: "March 10, 2025",
      category: "Tips",
    },
    {
      id: 3,
      title: "Student Life in Karachi: Best Neighborhoods for Hostels",
      excerpt: "Explore the safest and most convenient areas in Karachi for student accommodation.",
      date: "March 5, 2025",
      category: "Guides",
    },
    {
      id: 4,
      title: "Budget Hostel Living: Money-Saving Tips",
      excerpt: "Learn how to live comfortably in a hostel while saving money on accommodation.",
      date: "February 28, 2025",
      category: "Tips",
    },
    {
      id: 5,
      title: "Safety Tips for Hostel Residents",
      excerpt: "Important safety guidelines to ensure a secure and comfortable stay in your hostel.",
      date: "February 20, 2025",
      category: "Safety",
    },
    {
      id: 6,
      title: "Islamabad Hostels: A Student's Guide",
      excerpt: "Everything you need to know about finding and living in hostels in Islamabad.",
      date: "February 15, 2025",
      category: "Guides",
    },
  ]

  return (
    <>
      
      <main className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* Hero Section */}
          <div className="mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4 text-balance">HostelHub Blog</h1>
            <p className="text-lg text-foreground/70 max-w-2xl">
              Tips, guides, and stories about student hostel living in Pakistan.
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-primary-foreground border border-border rounded-sm overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center">
                  <span className="text-accent text-4xl">📝</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-sm">
                      {post.category}
                    </span>
                    <span className="text-xs text-foreground/50">{post.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2 line-clamp-2">{post.title}</h3>
                  <p className="text-foreground/70 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  <a href="#" className="text-accent font-semibold hover:underline text-sm">
                    Read More →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      
    </>
  )
}
