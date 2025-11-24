import { fetchApi } from "@/lib/api";
import ClientComponent from "./ClientComponent";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getImageUrl } from "@/lib/getImage";

interface HostelMeta {
  title: string;
  description: string;
  keywords: string;
  reviews: number;
  images: any;
  location: string;
  phone: string;
  pricePerMonth: number;
  city:string
}


type PageProps = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

// Server fetch function
async function getHostelMeta(id: string): Promise<HostelMeta> {
  const res = await fetchApi({url:`/api/hostels/meta-details?id=${id}`,method:"GET"})

  if (!res.ok) throw new Error("Hostel not found");

  return res.json();
} 


export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  let hostel: HostelMeta;
  let {id} = await params
  
  try {
    hostel = await getHostelMeta(id);
  } catch {
    return { title: "Best accomodation for you in Pakistan",description:"We are glade you see you here, See our featured and best accomodations across all Over Pakistan.",keywords:"accomodation, travel, pakistan, hostelhub, studenthub, students, mdcat, peshawar, islamabad, karachi, lahore, Afnan Ahad" };
  }
  
  // JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: hostel.title,
    description: hostel.description,
    image: getImageUrl(hostel?.images[0]),
    telephone: hostel.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: hostel.location,
      addressLocality: hostel.city,
      addressCountry: "PK",
    },
    priceRange: `Rs ${hostel.pricePerMonth.toLocaleString()}`,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: hostel.reviews,
      reviewCount: 1,
    },
  };

  return {
    title: `${hostel.title} | HostelHub`,
    description: hostel.description,
    keywords: hostel.keywords,
    openGraph: {
      title: hostel.title,
      description: hostel.description,
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/hostel/${id}`,
      siteName: "HostelHub", 
      images:hostel?.images?.filter((i:any)=>{
       return {
         url:getImageUrl(i),
          width: 800,
          height: 600,
       }
      })
      ,
      type: "website",
      locale: "en_PK",
    },
    twitter: {
      card: "summary_large_image",
      title: hostel.title,
      description: hostel.description,
      images: [hostel?.images?.filter((i:any)=>getImageUrl(i))],
    },
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://hostelhub.pk"),
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL||"https://hostelhub.pk"}/hostel/${id}`,
    },
    robots: {
      index: true,
      follow: true,
    },
    other: {
      scripts: [
        `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`,
      ],
    },
  };
}

// -----------------------------------
// Page Component
// -----------------------------------
export default async function HostelPage({ params }: PageProps) {

  return (
    <ClientComponent/>
  );
}
