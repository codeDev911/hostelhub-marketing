
import Link from "next/link"
import {
  MapPin,
  Wallet,
  Calendar,
  Users,
  ShieldCheck,
  Flag,
  MessageCircle,
} from "lucide-react"
import type { Metadata } from "next"

type Props = {
  params: {
    id: string
  }
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  // replace with real DB fetch
  let id = (await params).id
  const data = {
    name: "Ahmad",
    city: "Lahore",
    area: "Johar Town",
    university: "PU",
    budget: "15,000 PKR",
    slug: id,
  }

  return {
    title: `Roommate Needed in ${data.area}, ${data.city} | HostelHub`,
    description: `Looking for a roommate in ${data.city}? ${data.name} is seeking a shared room near ${data.university}. Budget ${data.budget}. Verified student profile.`,
    alternates: {
      canonical: `https://hostelhub.pk/find-roommate/${data.slug}`,
    },
    openGraph: {
      title: `Roommate Needed in ${data.area}, ${data.city}`,
      description: `Verified student looking for a roommate near ${data.university}.`,
      url: `https://hostelhub.pk/find-roommate/${data.slug}`,
      siteName: "HostelHub",
      type: "profile",
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}


export default function RoommateDetailPage() {
  return (
    <main className="min-h-screen bg-background py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Profile Card */}
        <div className="bg-card rounded-2xl p-6 sm:p-8 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">

            {/* User Info */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
                AK
              </div>
              <div>
                <h1 className="text-2xl font-bold text-primary">Ali Khan</h1>
                <p className="text-sm text-muted-foreground">
                  Peshawar · Near UET
                </p>

                <div className="flex items-center gap-2 mt-2 text-sm text-green-600 font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  Verified Student
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-bold hover:bg-primary/90 transition flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Interested
              </button>

              <button className="border border-border px-6 py-3 rounded-full font-semibold text-muted-foreground hover:bg-muted transition flex items-center justify-center gap-2">
                <Flag className="w-5 h-5" />
                Report
              </button>
            </div>
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

          <div className="bg-card rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <Wallet className="w-5 h-5 text-accent" />
              <h3 className="font-semibold text-primary">Budget</h3>
            </div>
            <p className="text-muted-foreground">PKR 10,000 – 12,000</p>
          </div>

          <div className="bg-card rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <Calendar className="w-5 h-5 text-accent" />
              <h3 className="font-semibold text-primary">Move-in Date</h3>
            </div>
            <p className="text-muted-foreground">1st February 2025</p>
          </div>

          <div className="bg-card rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <Users className="w-5 h-5 text-accent" />
              <h3 className="font-semibold text-primary">Preferences</h3>
            </div>
            <p className="text-muted-foreground">
              Male · Student · Non-smoker
            </p>
          </div>

        </div>

        {/* Description */}
        <div className="bg-card rounded-2xl p-6 sm:p-8 mb-8">
          <h2 className="text-xl font-bold text-primary mb-4">
            About This Roommate Request
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            I am a BS Computer Science student looking for one clean and responsible
            roommate near UET Peshawar. Prefer a peaceful environment, shared room,
            and basic facilities. I am friendly, punctual, and respectful.
          </p>
        </div>

        {/* Safety Note */}
        <div className="bg-card rounded-2xl p-6 border border-accent/20">
          <h3 className="text-lg font-bold text-primary mb-2">
            Safety & Trust
          </h3>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>• Only verified users can post roommate requests</li>
            <li>• Never share personal contact details publicly</li>
            <li>• Report suspicious behavior immediately</li>
          </ul>
        </div>

        {/* Back Link */}
        <div className="mt-8 text-center">
          <Link
            href="/find-roommate"
            className="text-accent font-semibold hover:underline"
          >
            ← Back to Find Roommate
          </Link>
        </div>

      </div>
    </main>
  )
}
