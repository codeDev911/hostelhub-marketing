// app/hostels/page.tsx
import { getSeoMeta } from "@/lib/mock-data";
import { Metadata } from "next";
import HostelsPage from "./HostelPage";

 
// Dynamic metadata generation
export async function generateMetadata({ searchParams }:any): Promise<Metadata> {
  const {city} = await searchParams;
  const {area} = await searchParams;
  const {gender} = await searchParams;

  const meta = getSeoMeta(city, area,gender);
 const canonicalUrl = `https://hostelhub.pk/hostels${city ? `?city=${city}` : ""}${area ? `&area=${area}` : ""}${gender ? `&gender=${gender}`:""}`;

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
      images: ["https://walledcitylahore.gop.pk/wp-content/uploads/2024/06/Minar-e-pakistan.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: meta?.title || "Find best hostels everywhere in Pakistan | Hostelhub",
      description: meta?.desc || "Find the best hostels and apartments across Pakistan. Hostelhub makes booking easy, fast, and affordable.",
      images: ["https://walledcitylahore.gop.pk/wp-content/uploads/2024/06/Minar-e-pakistan.png"],
    },
  };
}

export default async function HostelPage() {
 
  return (
      <HostelsPage/>
  );
}
