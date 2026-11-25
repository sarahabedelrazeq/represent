import type { Locale } from "@/types";
import { photos } from "@/data/images";
import { menuCategories, menuItems } from "@/data/menu";
import { restaurant } from "@/data/restaurant";
import { absoluteUrl, localePath, siteUrl } from "@/lib/routes";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

/** Schema.org Restaurant (https://schema.org/Restaurant). */
export function restaurantJsonLd(locale: Locale, dict: Dictionary) {
  const { address, geo } = restaurant;
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${siteUrl}/#restaurant`,
    name: restaurant.name[locale],
    alternateName: restaurant.name[locale === "en" ? "ar" : "en"],
    description: dict.meta.home.description,
    url: absoluteUrl(localePath(locale, "home")),
    image: absoluteUrl(photos.hero.src.src),
    logo: absoluteUrl("/icon.svg"),
    telephone: restaurant.phone,
    email: restaurant.email,
    priceRange: restaurant.priceRange,
    currenciesAccepted: restaurant.currency,
    servesCuisine: restaurant.cuisine,
    acceptsReservations: true,
    hasMenu: absoluteUrl(localePath(locale, "menu")),
    inLanguage: locale,
    foundingDate: String(restaurant.foundedYear),
    address: {
      "@type": "PostalAddress",
      streetAddress: address.street[locale],
      addressLocality: address.city[locale],
      addressRegion: address.district[locale],
      postalCode: address.postalCode,
      addressCountry: address.countryCode,
    },
    geo: { "@type": "GeoCoordinates", latitude: geo.latitude, longitude: geo.longitude },
    openingHoursSpecification: restaurant.openingHours.map((rule) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: rule.days.map((day) => `https://schema.org/${day}`),
      opens: rule.opens,
      closes: rule.closes,
    })),
    sameAs: restaurant.social.map((s) => s.url),
  };
}

/** Schema.org Menu with sections and priced items, for the menu page. */
export function menuJsonLd(locale: Locale, dict: Dictionary) {
  return {
    "@context": "https://schema.org",
    "@type": "Menu",
    name: `${restaurant.name[locale]} — ${dict.menu.pageTitle}`,
    url: absoluteUrl(localePath(locale, "menu")),
    inLanguage: locale,
    hasMenuSection: menuCategories.map((category) => ({
      "@type": "MenuSection",
      name: category.name[locale],
      description: category.description[locale],
      hasMenuItem: menuItems
        .filter((item) => item.category === category.id)
        .map((item) => ({
          "@type": "MenuItem",
          name: item.name[locale],
          description: item.description[locale],
          ...(item.image && { image: absoluteUrl(item.image.src.src) }),
          ...(item.tags?.includes("vegetarian") && { suitableForDiet: "https://schema.org/VegetarianDiet" }),
          offers: { "@type": "Offer", price: item.price.toFixed(2), priceCurrency: restaurant.currency },
        })),
    })),
  };
}
