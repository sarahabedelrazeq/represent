import type { MetadataRoute } from "next";
import { restaurant } from "@/data/restaurant";
import en from "@/lib/i18n/dictionaries/en";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${restaurant.name.en} — ${restaurant.tagline.en}`,
    short_name: restaurant.name.en,
    description: en.meta.home.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f8f4ed",
    theme_color: "#4f5a2e",
    lang: "en",
    dir: "ltr",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
