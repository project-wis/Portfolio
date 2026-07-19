import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://projectwis.vercel.app";
  return [
    {
      url: `${baseUrl}/`,
      lastModified: "2026-07-19",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
