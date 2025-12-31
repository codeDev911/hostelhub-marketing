// app/roommates/[...slug]/page.tsx

import { Calendar, MapPin, Plus, ShieldCheck, Sparkles, Users, Wallet } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = {
  params: { slug?: string[] };
  searchParams: { gender?: string };
};
import {getRoommateSeoMeta} from "@/lib/mock-data";

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: { slug?: string[] };
  searchParams: { gender?: string };
}) {
  const slug = (await params).slug || [];

  const city = slug[0];
  const area = slug[1]?.replace("%20", " ") || undefined;
  const gender = (await searchParams).gender;
  
  const seo = getRoommateSeoMeta(city, area, gender);
    
  return {
    title: seo?.title,
    description: seo?.desc,
    keywords: seo?.keywords,
    alternates: {
      canonical: city
        ? area
          ? `https://www.hostelhub.pk/roommates/${encodeURIComponent(
              city
            )}/${encodeURIComponent(area)}${gender ? `?gender=${gender}` : ""}`
          : `https://www.hostelhub.pk/roommates/${encodeURIComponent(
              city
            )}${gender ? `?gender=${gender}` : ""}`
        : `https://www.hostelhub.pk/roommates${gender ? `?gender=${gender}` : ""}`,
    }, 
    openGraph: {
        title: seo?.title,
        description: seo?.desc,
        url: city
            ? area
                ? `https://www.hostelhub.pk/roommates/${encodeURIComponent(city)}/${encodeURIComponent(area)}`
                : `https://www.hostelhub.pk/roommates/${encodeURIComponent(city)}`
            : `https://www.hostelhub.pk/roommates`,
        siteName: "HostelHub",
        type: "website",
        images: [
            {
                url: "https://www.hostelhub.pk/logo.jpg",
                width: 1200,
                height: 630,
                alt: seo?.title,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: seo?.title,
        description: seo?.desc,
        images: ["https://www.hostelhub.pk/logo.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },
  };
}

export default async function RoommatesPage({ params, searchParams }: PageProps) {
  const slug = (await params).slug || [];

  const city = slug[0] ? decodeURIComponent(slug[0]) : undefined;
  const area = slug[1] ? decodeURIComponent(slug[1]) : undefined;
  const gender = (await searchParams).gender;

  if (!city) return notFound();

   return (
    <main className="min-h-screen bg-background">

      {/* ===== HERO SECTION ===== */}
      <section className="pt-12 sm:pt-16 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden bg-card rounded-2xl p-8 sm:p-12">

            {/* Subtle Gradient Decoration */}
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />

            <div className="relative z-10 sm:text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 text-accent-foreground bg-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                <Sparkles className="w-4 h-4" />
                {/* New • Safe • Student-Focused */}
                Coming soon
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 leading-tight">
                Find the Right <span className="undercurve">Roommate</span>,
                <br className="hidden sm:block" /> Without the Stress
              </h1>

              <p className="text-muted-foreground text-base sm:text-lg mb-8">
                Connect with verified students looking to share rooms near your university
                or hostel safely and easily.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="#roommates">
                  <button className="bg-primary cursor-pointer text-primary-foreground px-8 py-3 rounded-full font-bold text-base hover:bg-primary/70 transition">
                    Find Roommates
                  </button>
                </Link>

                <Link href="/find-roommate/create">
                  <button className="bg-accent cursor-pointer text-accent-foreground px-8 py-3 rounded-full font-bold text-base hover:bg-accent/70 transition flex items-center justify-center gap-2">
                    <Plus className="w-5 h-5" />
                    Post Roommate Request
                  </button>
                </Link>
              </div>

              {/* Trust Line */}
              <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <ShieldCheck className="w-4 h-4 text-green-600" />
                Only verified users • Report & block anytime
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FILTER SECTION ===== */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-2xl p-6 sm:p-8 ">
            <h2 className="text-base font-bold text-primary">
              Smart search
            </h2>
            <p className="text-sm text-muted-foreground">Find a best roommate using our smart search feature</p>
          <div className="mt-4  grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="flex items-center gap-2">
              <MapPin className="w-6 h-6 text-muted-foreground" />
              <select className="w-full bg-background border rounded-full p-2">
                <option>City</option>
                <option>Peshawar</option>
                <option>Lahore</option>
                <option>Islamabad</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <Users className="w-6 h-6 text-muted-foreground" />
              <select className="w-full bg-background border rounded-full p-2">
                <option>Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <Wallet className="w-6 h-6 text-muted-foreground" />
              <select className="w-full bg-background border rounded-full p-2">
                <option>Budget</option>
                <option>Below 10k</option>
                <option>10k – 15k</option>
                <option>15k+</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="w-6 h-6 text-muted-foreground" />
              <input
                type="date"
                className="w-full bg-background border rounded-full p-2"
              />
            </div>

            <button className="bg-primary p-2 text-primary-foreground rounded-full font-bold hover:bg-primary/90 transition">
              Search
            </button>
          </div>
          </div>
        </div>
      </section>

      {/* ===== ROOMMATE LISTINGS ===== */}
      {/* <section id="roommates" className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-8">
            Available Roommates
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="bg-card rounded-2xl p-6 ">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    AK
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Ali Khan</h4>
                    <p className="text-xs text-muted-foreground">
                      Peshawar · Near UET
                    </p>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4">
                  Looking for a clean and responsible roommate near UET Peshawar.
                </p>

                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-1 text-xs text-green-600 font-semibold">
                    <ShieldCheck className="w-4 h-4" />
                    Verified Student
                  </span>

                  <Link
                    href="/find-roommate/1"
                    className="text-accent font-semibold hover:underline"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

    </main>
  )
}
