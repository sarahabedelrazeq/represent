import type { Metadata } from "next";
import type { Locale, RouteKey } from "@/types";
import { photos } from "@/data/images";
import { locales, localeMeta } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { absoluteUrl, localePath } from "@/lib/routes";

/** Per-page metadata: unique title/description, canonical, hreflang alternates, OG and Twitter cards. */
export async function buildPageMetadata(locale: Locale, route: RouteKey): Promise<Metadata> {
  const dict = await getDictionary(locale);
  const page = dict.meta[route];
  const isHome = route === "home";
  // The home title is already complete; inner pages get the "| Dar Samar" template from the layout.
  const title = isHome ? { absolute: page.title } : page.title;
  const socialTitle = isHome ? page.title : `${page.title} | ${dict.meta.siteName}`;
  const path = localePath(locale, route);

  const languages: Record<string, string> = Object.fromEntries(
    locales.map((l) => [l, absoluteUrl(localePath(l, route))]),
  );
  languages["x-default"] = absoluteUrl(localePath("en", route));

  const ogImage = { url: "/og-image.jpg", width: 1200, height: 630, alt: photos.hero.alt[locale] };

  return {
    title,
    description: page.description,
    alternates: { canonical: path, languages },
    openGraph: {
      type: "website",
      siteName: dict.meta.siteName,
      title: socialTitle,
      description: page.description,
      url: path,
      locale: localeMeta[locale].ogLocale,
      alternateLocale: locales.filter((l) => l !== locale).map((l) => localeMeta[l].ogLocale),
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: page.description,
      images: [ogImage.url],
    },
  };
}
