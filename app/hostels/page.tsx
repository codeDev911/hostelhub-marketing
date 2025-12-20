// app/hostels/page.tsx
import { getSeoMeta,cities } from "@/lib/mock-data";
import { Metadata } from "next";
import HostelsPage from "./HostelPage";

 
// Dynamic metadata generation
export async function generateMetadata({ searchParams }:any): Promise<Metadata> {
  const {city} = await searchParams;
  const {area} = await searchParams;
  const {gender} = await searchParams;

  const meta = getSeoMeta(city, area,gender);
 const canonicalUrl = `https://www.hostelhub.pk/hostels${city ? `?city=${city}` : ""}${area ? `&area=${area}` : ""}${gender ? `&gender=${gender}`:""}`;
 
 const getImage = cities.find((c:any)=>c.name.toLowerCase() === city?.toLowerCase())?.image ||"https://hostelhub.pk/og-image.jpg";

  return {
    title: meta?.title || "Find best hostels everywhere in Pakistan | Hostelhub",
    description: meta?.desc || "Find the best hostels and apartments across Pakistan. Hostelhub makes booking easy, fast, and affordable.",
    keywords: meta?.keywords || "hostels, apartments, Pakistan hostels, Hostelhub",
    robots: "index, follow",
      alternates: {
        canonical: canonicalUrl,  
      },
    openGraph: {
      title: meta?.title || "Find best hostels everywhere in Pakistan | Hostelhub",
      description: meta?.desc || "Find the best hostels and apartments across Pakistan. Hostelhub makes booking easy, fast, and affordable.",
      type: "website",
      url: canonicalUrl,
      images: [getImage],
    },
    twitter: {
      card: "summary_large_image",
      title: meta?.title || "Find best hostels everywhere in Pakistan | Hostelhub",
      description: meta?.desc || "Find the best hostels and apartments across Pakistan. Hostelhub makes booking easy, fast, and affordable.",
      images: [getImage],
    },
  };
}

export default async function HostelPage() {
 
  return (
      <HostelsPage/>
  );
}
