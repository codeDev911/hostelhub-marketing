import ClientComponent from "./ClientComponent"

export function generateMetadata() {
  return {
    title:
      "Donate for Students Education & Safe Living in Pakistan | HostelHub",
    description:
      "Support students across Pakistan by donating to HostelHub. Your donation funds safe accommodation, student communities, scholarships, and a trusted student-friendly ecosystem. This support is not for us — it’s for your children’s future.",
    keywords: [
      "donate for students pakistan",
      "education donation pakistan",
      "student housing support",
      "hostel donation",
      "support students education",
      "safe student accommodation",
      "student community pakistan",
      "scholarship support pakistan",
      "non profit education platform",
      "help students pakistan",
      "hostelhub donation",
      "student ecosystem pakistan",
    ],
    openGraph: {
      title:
        "Donate for Students Education & Safe Living in Pakistan | HostelHub",
      description:
        "Your donation supports student accommodation, communities, scholarships, and guidance. Help build a safer future for students in Pakistan.",
      url: "https://hostelhub.pk/donate",
      siteName: "HostelHub",
      locale: "en_PK",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title:
        "Donate for Students Education & Safe Living in Pakistan | HostelHub",
      description:
        "This donation is not for us. It’s for students and their future. Support safe living, education, and student communities across Pakistan.",
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: "https://hostelhub.pk/donate",
    },
  }
}


export default function page(){
    return (
        <ClientComponent/>
    )
}