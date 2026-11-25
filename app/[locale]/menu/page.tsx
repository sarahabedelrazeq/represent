import type { Metadata } from "next";
import { Info } from "lucide-react";
import { menuCategories, menuItems } from "@/data/menu";
import { localizeMenuItem } from "@/lib/format";
import { getDictionary, getLocale } from "@/lib/i18n/get-dictionary";
import { buildPageMetadata } from "@/lib/metadata";
import { menuJsonLd } from "@/lib/structured-data";
import { SiteHeader } from "@/components/layout/site-header";
import { ContactCta } from "@/components/sections/contact-cta";
import { MenuExplorer } from "@/components/sections/menu-explorer";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { JsonLd } from "@/components/ui/json-ld";

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata(await getLocale(), "menu");
}

export default async function MenuPage() {
  const locale = await getLocale();
  const dict = await getDictionary(locale);

  const categories = menuCategories.map((category) => ({
    id: category.id,
    name: category.name[locale],
    description: category.description[locale],
  }));
  const items = menuItems.map((item) => localizeMenuItem(item, locale));

  return (
    <>
      <SiteHeader locale={locale} current="menu" />
      <main id="main" className="flex-1">
        <PageHero locale={locale} eyebrow={dict.menu.eyebrow} title={dict.menu.pageTitle} intro={dict.menu.pageIntro} />
        <Container className="pb-20 sm:pb-28">
          <MenuExplorer
            categories={categories}
            items={items}
            labels={{ all: dict.menu.all, filter: dict.menu.filterLabel, tags: dict.menu.tags }}
          />
          <p className="mt-16 flex items-start gap-3 rounded-sm bg-parchment p-5 text-sm leading-relaxed text-umber">
            <Info className="mt-0.5 size-4 shrink-0 text-terracotta" aria-hidden="true" />
            {dict.menu.allergyNote}
          </p>
        </Container>
        <ContactCta dict={dict} />
      </main>
      <JsonLd data={menuJsonLd(locale, dict)} />
    </>
  );
}
