import type { Metadata } from "next";
import { getDictionary, getLocale } from "@/lib/i18n/get-dictionary";
import { buildPageMetadata } from "@/lib/metadata";
import { SiteHeader } from "@/components/layout/site-header";
import { ContactOptions } from "@/components/sections/contact-options";
import { PageHero } from "@/components/sections/page-hero";
import { VisitInfo } from "@/components/sections/visit-info";

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata(await getLocale(), "contact");
}

export default async function ContactPage() {
  const locale = await getLocale();
  const dict = await getDictionary(locale);

  return (
    <>
      <SiteHeader locale={locale} current="contact" />
      <main id="main" className="flex-1">
        <PageHero locale={locale} eyebrow={dict.contact.eyebrow} title={dict.contact.title} intro={dict.contact.intro} />
        <ContactOptions dict={dict} />
        <VisitInfo locale={locale} dict={dict} />
      </main>
    </>
  );
}
