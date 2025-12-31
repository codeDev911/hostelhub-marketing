
import Link from "next/link"
import { 
  MessageSquare,
  ShieldCheck,
  Sparkles,
  ThumbsUp,
  Search,
  MapPin,
  UserCheck,
  TrendingUp,
  HeartHandshake,
} from "lucide-react"

import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  return {
    title: "Best environment for students - Hostelhub community ",
    description:
     "Pakistan’s student community where students actually help each other and best housing hostel reviews, roommate search, and real experiences from real students.",
        keywords:
      "hostelhub community, roommate , student housing data pakistan,online scholarships,scholarships for pakistani students,Bs scholarships,Ms scholarships, students in pakistan, students home, students hub , find new students, find roommates,",
    alternates: {
      canonical: "https://www.hostelhub.pk/community",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
export default function CommunityPage() {
  return (
    <main className="">

      {/* HERO */}
      <section className=" ">
        <div className="absolute -z-10 top-0 inset-0 bg-linear-to-tl to-accent/25 via-background from-background" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2  px-4 py-2 rounded-full text-sm font-semibold bg-accent mb-6">
              <Sparkles className="w-4 h-4" /> Live Community
            </span>
            <h1 className="text-4xl sm:text-5xl  md:text-6xl font-bold text-primary mb-6">
              Where students <span className="undercurve">actually</span> help each other
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8">
              HostelHub Community is Pakistan’s first student-focused housing community 
              ask questions, share hostel experiences, find roommates, and make smarter
              living decisions together.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link target="__blank" href="https://discuss.hostelhub.pk">
                <button className="bg-primary hover:bg-primary/90 cursor-pointer text-primary-foreground px-8 py-3 rounded-full font-bold text-lg">
                  Explore Community
                </button>
              </Link>
              <Link href="/find-roommate">
                <button className="bg-card hover:bg-card/80 cursor-pointer  px-8 py-3 rounded-full font-bold text-lg">
                  Find a Roommate
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STATS */}
      <section className="py-14 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { label: "Active Students", value: "0" },
            { label: "Discussions Created", value: "0" },
            { label: "Cities Covered", value: "0" },
            { label: "Helpful Replies", value: "0" },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-3xl sm:text-4xl font-bold text-primary">
                {stat.value}
              </div>
              <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY COMMUNITY */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-14 text-center">
            Why  <span className="undercurve">Students Love</span> HostelHub Community
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <UserCheck className="w-8 h-8" />,
                title: "Real Students Only",
                text: "No fake profiles. Every discussion is powered by real students & verified members.",
              },
              {
                icon: <MapPin className="w-8 h-8" />,
                title: "City & Area Focused",
                text: "Get advice specific to your city, area, and even street-level hostels.",
              },
              {
                icon: <MessageSquare className="w-8 h-8" />,
                title: "Ask Anything",
                text: "From hostel food to security, roommates, rent & rules  nothing is off-limits.",
              },
              {
                icon: <ThumbsUp className="w-8 h-8" />,
                title: "Helpful Answers Win",
                text: "Upvotes and reputation highlight the most useful replies, not noise.",
              },
              {
                icon: <ShieldCheck className="w-8 h-8" />,
                title: "Safe & Moderated",
                text: "Reports, moderation, and staff oversight keep discussions respectful.",
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Smarter Decisions",
                text: "Learn from others’ experiences before choosing a hostel or roommate.",
              },
            ].map((f, i) => (
              <div
                key={i}
                className="bg-card  rounded-2xl p-8 transition-all"
              >
                <div className="w-11 h-11 p-3 bg-accent  rounded-xl flex items-center justify-center text-accent-foreground mb-4">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">
                  {f.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {f.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU CAN DO */}
      <section className="py-20 bg-card  ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-14 text-center">
            What you can <span className="undercurve">do inside</span> community
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {[
                "Post hostel reviews and read honest experiences",
                "Find roommates based on city, budget & lifestyle",
                "Ask questions and get answers from seniors",
                "Discuss universities, exams, and student life",
                "Report issues and get official HostelHub responses",
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-accent-foreground text-sm font-bold">
                    ✓
                  </div>
                  <p className="text-lg text-foreground">{item}</p>
                </div>
              ))}
            </div>

            <div className="bg-background rounded-2xl p-8 ">
              <Search className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-2xl font-bold text-primary mb-3">
                Search Before You Decide
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Before choosing a hostel or roommate, search discussions,
                reviews, and real stories  and avoid costly mistakes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-br from-accent/25 to-accent/5 rounded-2xl p-12 border border-accent/20">
            <HeartHandshake className="w-12 h-12 text-accent mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Your Student Journey Starts Here
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Thousands of students are already helping each other.
              Join the conversation and make better housing decisions today.
            </p>
            <Link target="__blank" href="https://discuss.hostelhub.pk">
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 rounded-full font-bold text-lg">
                Join Community Now
              </button>
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
