import { locales, type Locale } from "@/types";

export { locales };
export type { Locale };

export const defaultLocale: Locale = "en";

/** Cookie used to remember the visitor's chosen language. */
export const LOCALE_COOKIE = "NEXT_LOCALE";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

interface LocaleMeta {
  dir: "ltr" | "rtl";
  /** BCP 47 tag used for Intl formatting. */
  intl: string;
  /** Open Graph locale, e.g. en_US. */
  ogLocale: string;
  /** Name of the language written in that language. */
  nativeName: string;
}

export const localeMeta: Record<Locale, LocaleMeta> = {
  en: { dir: "ltr", intl: "en-JO", ogLocale: "en_US", nativeName: "English" },
  ar: { dir: "rtl", intl: "ar-JO", ogLocale: "ar_JO", nativeName: "العربية" },
};

export function otherLocale(locale: Locale): Locale {
  return locale === "en" ? "ar" : "en";
}
