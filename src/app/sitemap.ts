import type { MetadataRoute } from "next";

// No production domain exists yet — using the IANA-reserved example.com
// placeholder (RFC 2606). Replace BASE_URL once a real domain is live.
const BASE_URL = "https://example.com";

const ROUTES: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/products", priority: 0.9 },
  { path: "/formulas", priority: 0.8 },
  { path: "/investors", priority: 0.8 },
  { path: "/laboratory", priority: 0.7 },
  { path: "/compliance", priority: 0.7 },
  { path: "/costs", priority: 0.6 },
  { path: "/traceability", priority: 0.6 },
  { path: "/sops", priority: 0.6 },
  { path: "/white-paper", priority: 0.6 },
  { path: "/marketing-plan", priority: 0.6 },
  { path: "/site-map", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: new Date(),
    priority: route.priority,
  }));
}
