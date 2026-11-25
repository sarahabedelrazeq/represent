import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n/config";
import { absoluteUrl, localePath, navRoutes } from "@/lib/routes";
import type { RouteKey } from "@/types";

const priority: Record<RouteKey, number> = { home: 1, menu: 0.9, about: 0.7, contact: 0.8 };

export default function sitemap(): MetadataRoute.Sitemap {
  return navRoutes.flatMap((route) =>
    locales.map((locale) => ({
      url: absoluteUrl(localePath(locale, route)),
      changeFrequency: route === "menu" ? "weekly" : "monthly",
      priority: priority[route],
      alternates: {
        languages: Object.fromEntries(locales.map((l) => [l, absoluteUrl(localePath(l, route))])),
      },
    })),
  );
}
