import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ROYER Cosmetics — Botanical Skincare",
    short_name: "ROYER Cosmetics",
    description: "Premium botanical cosmetics laboratory project — aloe vera, hemp seed oil, compliance-first.",
    start_url: "/",
    display: "standalone",
    background_color: "#faf6ec",
    theme_color: "#0a1330",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
