import type { Metadata } from "next";
import { getDictionary, getLocale } from "@/lib/i18n/get-dictionary";
import { buildPageMetadata } from "@/lib/metadata";
import { SiteHeader } from "@/components/layout/site-header";
import { AboutIntro } from "@/components/sections/about-intro";
import { ContactCta } from "@/components/sections/contact-cta";
import { Hero } from "@/components/sections/hero";
import { SignatureDishes } from "@/components/sections/signature-dishes";
import { VisitInfo } from "@/components/sections/visit-info";

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata(await getLocale(), "home");
}

export default async function HomePage() {
  const locale = await getLocale();
  const dict = await getDictionary(locale);

  return (
    <>
      <SiteHeader locale={locale} current="home" />
      <main id="main" className="flex-1">
        <Hero locale={locale} dict={dict} />
        <AboutIntro locale={locale} dict={dict} />
        <SignatureDishes locale={locale} dict={dict} />
        <ContactCta dict={dict} />
        <VisitInfo locale={locale} dict={dict} />
      </main>
    </>
  );
}
