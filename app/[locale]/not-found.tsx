import { ArrowRight } from "lucide-react";
import { getDictionary, getLocale } from "@/lib/i18n/get-dictionary";
import { localePath } from "@/lib/routes";
import { SiteHeader } from "@/components/layout/site-header";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { LogoMark } from "@/components/ui/logo";

export default async function NotFound() {
  const locale = await getLocale();
  const dict = await getDictionary(locale);

  return (
    <>
      <title>{`${dict.meta.notFound.title} | ${dict.meta.siteName}`}</title>
      <SiteHeader locale={locale} current={null} />
      <main id="main" className="flex flex-1 items-center">
        <Container size="narrow" className="flex flex-col items-center gap-6 py-28 text-center">
          <LogoMark className="size-14 text-terracotta" />
          <p className="eyebrow">404</p>
          <h1 className="font-display text-4xl font-medium sm:text-5xl ar:leading-snug">{dict.notFound.title}</h1>
          <p className="max-w-md text-lg text-umber">{dict.notFound.text}</p>
          <ButtonLink
            href={localePath(locale, "home")}
            icon={<ArrowRight className="size-4 rtl:-scale-x-100" aria-hidden="true" />}
            className="flex-row-reverse"
          >
            {dict.notFound.back}
          </ButtonLink>
        </Container>
      </main>
    </>
  );
}
