import { restaurant } from "@/data/restaurant";
import type { Dictionary } from "@/lib/i18n/dictionaries/en";
import { localeMeta } from "@/lib/i18n/config";
import type { Locale, LocalizedMenuItem, MenuItem, OpeningHoursRule } from "@/types";

export function formatPrice(locale: Locale, value: number): string {
  return new Intl.NumberFormat(localeMeta[locale].intl, {
    style: "currency",
    currency: restaurant.currency,
    currencyDisplay: "symbol",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

/** "13:00" -> "1:00 PM" / "١:٠٠ م" */
export function formatTime(locale: Locale, time: string): string {
  const [hours, minutes] = time.split(":").map(Number);
  const date = new Date(Date.UTC(2024, 0, 1, hours, minutes));
  return new Intl.DateTimeFormat(localeMeta[locale].intl, {
    hour: "numeric",
    minute: "2-digit",
    timeZone: "UTC",
  }).format(date);
}

export function formatDays(rule: OpeningHoursRule, dict: Dictionary): string {
  const first = dict.days[rule.days[0]];
  const last = dict.days[rule.days[rule.days.length - 1]];
  return rule.days.length === 1 ? first : `${first} – ${last}`;
}

export function formatHours(locale: Locale, rule: OpeningHoursRule): string {
  return `${formatTime(locale, rule.opens)} – ${formatTime(locale, rule.closes)}`;
}

/** "+96264612480" -> "+962 6 461 2480" (always shown left-to-right). */
export function formatPhone(phone: string): string {
  const match = phone.match(/^\+(\d{3})(\d)(\d{3})(\d{4})$/);
  return match ? `+${match[1]} ${match[2]} ${match[3]} ${match[4]}` : phone;
}

export function localizeMenuItem(item: MenuItem, locale: Locale): LocalizedMenuItem {
  return {
    id: item.id,
    category: item.category,
    name: item.name[locale],
    description: item.description[locale],
    price: formatPrice(locale, item.price),
    image: item.image && { src: item.image.src, alt: item.image.alt[locale] },
    tags: item.tags ?? [],
  };
}

/* ---------- Outbound links ---------- */

export function fullAddress(locale: Locale): string {
  const { street, district, city, country } = restaurant.address;
  const sep = locale === "ar" ? "، " : ", ";
  return [street[locale], district[locale], city[locale], country[locale]].join(sep);
}

export const links = {
  tel: `tel:${restaurant.phone}`,
  mailto: `mailto:${restaurant.email}`,
  whatsapp: (message: string) =>
    `https://wa.me/${restaurant.whatsapp}?text=${encodeURIComponent(message)}`,
  maps: `https://www.google.com/maps/search/?api=1&query=${restaurant.geo.latitude}%2C${restaurant.geo.longitude}`,
  directions: `https://www.google.com/maps/dir/?api=1&destination=${restaurant.geo.latitude}%2C${restaurant.geo.longitude}`,
};
