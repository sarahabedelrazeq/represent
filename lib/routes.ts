import type { Locale, RouteKey } from "@/types";

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.darsamar.jo"
).replace(/\/$/, "");

export const routePaths: Record<RouteKey, string> = {
  home: "",
  about: "/about",
  menu: "/menu",
  contact: "/contact",
};

export const navRoutes: RouteKey[] = ["home", "about", "menu", "contact"];

/** Locale-prefixed path, e.g. ("ar", "menu") -> "/ar/menu". */
export function localePath(locale: Locale, route: RouteKey): string {
  return `/${locale}${routePaths[route]}`;
}

export function absoluteUrl(path: string): string {
  return `${siteUrl}${path}`;
}
