import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/",
          "/hostels",
          "/roommates",
          "/community",
          "/find-roommate",
          "/donate",
        ],
        disallow: [
          "/api/",
          "/me/",
          "/admin/",
          "/dashboard/",
          "/auth/",
          "/_next/",
        ],
        crawlDelay: 2,
      },
    ],
    sitemap: [
      "https://www.hostelhub.pk/sitemap.xml",
      "https://www.hostelhub.pk/sitemap-rm.xml",
    ],
  };
}
