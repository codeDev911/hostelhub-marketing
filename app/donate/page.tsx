import ClientComponent from "./ClientComponent"

export function generateMetadata() {
  return {
    title:
      "Donate for Students Education & Safe Living ",
    description:
      "Support students across Pakistan by donating to HostelHub. Your donation funds safe accommodation, student communities, scholarships, and a trusted student-friendly ecosystem",
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
        "Donate for Students Education & Safe Living ",
      description:
        "Your donation supports student accommodation, communities, scholarships, and guidance. Help build a safer future for students in Pakistan.",
      url: "https://www.hostelhub.pk/donate",
      siteName: "HostelHub",
      locale: "en_PK",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title:
        "Donate for Students Education & Safe Living ",
      description:
        "This donation is not for us. It’s for students and their future. Support safe living, education, and student communities across Pakistan.",
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: "https://www.hostelhub.pk/donate",
    },
  }
}


export default function page(){
    return (
        <ClientComponent/>
    )
}