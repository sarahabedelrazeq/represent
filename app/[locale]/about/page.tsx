import type { Metadata } from "next";
import { photos } from "@/data/images";
import { getDictionary, getLocale } from "@/lib/i18n/get-dictionary";
import { buildPageMetadata } from "@/lib/metadata";
import { SiteHeader } from "@/components/layout/site-header";
import { ContactCta } from "@/components/sections/contact-cta";
import { Kitchen } from "@/components/sections/kitchen";
import { PageHero } from "@/components/sections/page-hero";
import { Story } from "@/components/sections/story";
import { WhatMakesUsSpecial } from "@/components/sections/what-makes-us-special";

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata(await getLocale(), "about");
}

export default async function AboutPage() {
  const locale = await getLocale();
  const dict = await getDictionary(locale);

  return (
    <>
      <SiteHeader locale={locale} current="about" />
      <main id="main" className="flex-1">
        <PageHero
          locale={locale}
          eyebrow={dict.about.eyebrow}
          title={dict.about.title}
          intro={dict.about.pageIntro}
          image={photos.diningRoom}
        />
        <Story locale={locale} dict={dict} />
        <WhatMakesUsSpecial locale={locale} dict={dict} />
        <Kitchen locale={locale} dict={dict} />
        <ContactCta dict={dict} />
      </main>
    </>
  );
}
