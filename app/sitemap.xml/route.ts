import { mockCities } from "@/lib/mock-data"; // adjust path
import { NextResponse } from "next/server";

const SITE_URL = "https://hostelhub.pk";

function generateSitemap() {
  let urls = "";

  mockCities.forEach((city) => {


    // Didn't included gender
    const cityUrlN = `${SITE_URL}/hostels?city=${encodeURIComponent(city.name)}`;
    urls += `
    <url>
    <loc>${cityUrlN.replace(/&/g, "&amp;")}</loc>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
    </url>
    `;
    
    city.areas.forEach((area) => {
      const areaUrl = `${SITE_URL}/hostels?city=${encodeURIComponent(city.name)}&area=${encodeURIComponent(area)}`;
      urls += `
      <url>
      <loc>${areaUrl.replace(/&/g, "&amp;")}</loc>
      <changefreq>daily</changefreq>
      <priority>0.9</priority>
      </url>
      `;
    });

    // ------------------------------------------------------------ 

    // Included gender
    // For boys
    const cityUrl = `${SITE_URL}/hostels?city=${encodeURIComponent(city.name)}&gender=boys`;
    urls += `
    <url>
    <loc>${cityUrl.replace(/&/g, "&amp;")}</loc>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
    </url>
    `;


     // For Girls
    const cityUrlG = `${SITE_URL}/hostels?city=${encodeURIComponent(city.name)}&gender=girls`;
    urls += `
    <url>
    <loc>${cityUrlG.replace(/&/g, "&amp;")}</loc>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
    </url>
    `;

    // For boys
    city.areas.forEach((area) => {
      const areaUrl = `${SITE_URL}/hostels?city=${encodeURIComponent(city.name)}&area=${encodeURIComponent(area)}&gender=boys`;
      urls += `
      <url>
      <loc>${areaUrl.replace(/&/g, "&amp;")}</loc>
      <changefreq>daily</changefreq>
      <priority>0.9</priority>
      </url>
      `;
    });

    
    // For girls
    city.areas.forEach((area) => {
      const areaUrl = `${SITE_URL}/hostels?city=${encodeURIComponent(city.name)}&area=${encodeURIComponent(area)}&gender=girls`;
      urls += `
      <url>
      <loc>${areaUrl.replace(/&/g, "&amp;")}</loc>
      <changefreq>daily</changefreq>
      <priority>0.9</priority>
      </url>
      `;
    });
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

export async function GET() {
  const sitemap = generateSitemap();

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
