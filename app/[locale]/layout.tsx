import type { Metadata, Viewport } from "next";
import "../globals.css";
import { fontVariables } from "@/lib/fonts";
import { locales, localeMeta } from "@/lib/i18n/config";
import { getDictionary, getLocale } from "@/lib/i18n/get-dictionary";
import { siteUrl } from "@/lib/routes";
import { restaurantJsonLd } from "@/lib/structured-data";
import { SiteFooter } from "@/components/layout/site-footer";
import { JsonLd } from "@/components/ui/json-ld";
import { ThemeScript } from "@/components/layout/theme-script";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata(): Promise<Metadata> {
  const dict = await getDictionary();
  return {
    metadataBase: new URL(siteUrl),
    title: { default: dict.meta.home.title, template: `%s | ${dict.meta.siteName}` },
    description: dict.meta.home.description,
    applicationName: dict.meta.siteName,
    formatDetection: { telephone: false, email: false, address: false },
    robots: { index: true, follow: true },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f4ed" },
    { media: "(prefers-color-scheme: dark)", color: "#16120e" },
  ],
  colorScheme: "light dark",
};

export default async function LocaleLayout({ children }: LayoutProps<"/[locale]">) {
  const locale = await getLocale();
  const dict = await getDictionary(locale);

  return (
    <html
      lang={locale}
      dir={localeMeta[locale].dir}
      className={`${fontVariables[locale]} h-full`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col">
        <ThemeScript />
        <a
          href="#main"
          className="fixed start-4 top-3 z-[60] -translate-y-24 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-cream transition-transform focus:translate-y-0"
        >
          {dict.common.skipToContent}
        </a>
        {children}
        <SiteFooter locale={locale} />
        <JsonLd data={restaurantJsonLd(locale, dict)} />
      </body>
    </html>
  );
}
