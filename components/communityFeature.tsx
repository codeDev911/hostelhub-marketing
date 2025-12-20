import {
  MessageCircle,
  Users,
  BookOpen,
  Calendar,
  Sparkles,
  Lock
} from "lucide-react"

export default function CommunityFeatureShowcase() {
  return (
    <section className="py-24    relative overflow-x-hidden">
      
      {/* Ambient Blobs */}
      <div className="absolute top-40 -right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT – Narrative */}
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              Community · Coming Soon
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight mb-6">
              A Community Built<br />Around Student Life
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              HostelHub Community will be a safe, moderated space where students
              connect beyond rooms — sharing experiences, learning together,
              and supporting each other through hostel life.
            </p>

            <p className="text-muted-foreground mb-10">
              Whether you’re new to a city, confused about hostels, or just want
              honest advice — this will be your go-to place.
            </p>

            <div className="inline-flex items-center gap-3 text-sm text-muted-foreground">
              <Lock className="w-4 h-4" />
              Verified students only · Moderated discussions
            </div>
          </div>

          {/* RIGHT – Feature Tiles */}
          <div className="grid grid-cols-2 gap-6">

            <FeatureTile
              icon={<MessageCircle className="w-6 h-6" />}
              title="Open Discussions"
              desc="Ask questions, share experiences, and get real answers from students."
            />

            <FeatureTile
              icon={<Users className="w-6 h-6" />}
              title="City & University Groups"
              desc="Join groups based on your city, hostel, or university."
            />

            <FeatureTile
              icon={<BookOpen className="w-6 h-6" />}
              title="Guides & Knowledge"
              desc="Verified guides on hostel life, budgeting, and student survival."
            />

            <FeatureTile
              icon={<Calendar className="w-6 h-6" />}
              title="Events & Announcements"
              desc="Updates, meetups, and important student-related notices."
            />

          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-muted px-6 py-3 rounded-full text-muted-foreground font-semibold">
            Launching Soon · Early Access for HostelHub Users
          </div>
        </div>

      </div>
    </section>
  )
}

function FeatureTile({
  icon,
  title,
  desc
}: {
  icon: React.ReactNode
  title: string
  desc: string
}) {
  return (
    <div className=" bg-card  rounded-2xl p-6  transition">
      <div className="w-12 h-12 rounded-xl bg-accent text-accent-foreground flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {desc}
      </p>
    </div>
  )
}
