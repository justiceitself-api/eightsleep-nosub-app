import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: "Eight Sleep Control",
    short_name: "Eight Sleep",
    description: "Control your Eight Sleep bed and temperature schedule.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#0b1220",
    theme_color: "#0b1220",
    icons: [
      { src: "/app-icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any maskable" },
      { src: "/app-icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any maskable" },
    ],
  };
}
