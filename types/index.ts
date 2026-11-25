import type { StaticImageData } from "next/image";

export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];

/** A string translated into every supported locale. */
export type LocalizedText = Record<Locale, string>;

export type RouteKey = "home" | "about" | "menu" | "contact";

export interface Photo {
  src: StaticImageData;
  alt: LocalizedText;
}

/* ---------- Menu ---------- */

export type MenuCategoryId = "starters" | "mains" | "desserts" | "drinks";

export type DietaryTag = "vegetarian" | "signature" | "spicy";

export interface MenuCategory {
  id: MenuCategoryId;
  name: LocalizedText;
  description: LocalizedText;
}

export interface MenuItem {
  id: string;
  category: MenuCategoryId;
  name: LocalizedText;
  description: LocalizedText;
  /** Price in the restaurant's currency, as a decimal number. */
  price: number;
  image?: Photo;
  tags?: DietaryTag[];
}

/** A menu item already resolved to one locale, safe to pass to Client Components. */
export interface LocalizedMenuItem {
  id: string;
  category: MenuCategoryId;
  name: string;
  description: string;
  price: string;
  image?: { src: StaticImageData; alt: string };
  tags: DietaryTag[];
}

/* ---------- Restaurant ---------- */

export type DayOfWeek =
  | "Sunday"
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday";

export interface OpeningHoursRule {
  days: DayOfWeek[];
  /** 24h "HH:mm" */
  opens: string;
  /** 24h "HH:mm" — may be past midnight, e.g. "00:30" */
  closes: string;
}

export interface SocialLink {
  platform: "instagram" | "facebook" | "tiktok";
  label: string;
  url: string;
}

export interface Restaurant {
  name: LocalizedText;
  tagline: LocalizedText;
  cuisine: string[];
  priceRange: string;
  currency: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: {
    street: LocalizedText;
    district: LocalizedText;
    city: LocalizedText;
    postalCode: string;
    countryCode: string;
    country: LocalizedText;
  };
  geo: { latitude: number; longitude: number };
  openingHours: OpeningHoursRule[];
  social: SocialLink[];
  foundedYear: number;
}
