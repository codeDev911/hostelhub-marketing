import HeroSearch from '@/components/hero-search'

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Find the Perfect Student Hostel Near You  ",

  description:
    "Looking for a student hostel? HostelHub helps you find safe, affordable, and verified hostels near universities across Pakistan. Search by city, area, budget, and facilities with ease.",

  keywords: [
    "student hostels in Pakistan",
    "find hostel near me",
    "boys hostels",
    "girls hostels",
    "hostels near universities",
    "affordable student accommodation",
    "verified hostels Pakistan",
    "HostelHub",
    "student housing platform",
  ],

  openGraph: {
    title: "Find the Perfect Student Hostel Near You ",
    description:
      "Discover verified student hostels across Pakistan. Compare rent, facilities, and locations using HostelHub’s smart hostel search built for students.",
    url: "https://www.hostelhub.pk/hostels",
    siteName: "HostelHub",
    images: [
      {
        url: "https://www.hostelhub.pk/logo.png",
        width: 1200,
        height: 630,
        alt: "Find Student Hostels with HostelHub",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Find the Perfect Student Hostel Near You ",
    description:
      "Search verified student hostels by city, area, rent, and facilities. Trusted by students across Pakistan.",
    images: ["https://hostelhub.pk/og-find-hostels.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://www.hostelhub.pk/hostels",
  },
}

const page = () => {
  return (
    <div>
        <HeroSearch/>
    </div>
  )
}

export default page