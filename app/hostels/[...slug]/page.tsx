// app/hostels/page.tsx
import { getSeoMeta,cities } from "@/lib/mock-data";
import HostelsPage from "../HostelPage";

 
// Dynamic metadata generation
export async function generateMetadata({
  params,
  searchParams,
}: {
  params: { slug?: string[] };
  searchParams: { gender?: string, city?: string, area?:string };
}) {
  const slug = (await params).slug || [];

  const city = (await searchParams).city|| slug[0];
  const area = (await searchParams).area|| slug[1]?.replace("%20", " ") || undefined;
  const gender = slug && ( area == "boys" || area == "girls"? slug[1]: slug[2] )|| (await searchParams).gender;
  
  const canonicalUrl = `https://www.hostelhub.pk/hostels${city ? `/${city}` : ""}${area ? `/${area}` : ""}${gender ? `/${gender}`:""}`;
const meta = getSeoMeta(city, area,gender);
 
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
