import Link from "next/link";
import { cacheLife } from "next/cache";
import { Mail, MapPin, Phone } from "lucide-react";
import type { Locale } from "@/types";
import { restaurant } from "@/data/restaurant";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { formatPhone, fullAddress, links } from "@/lib/format";
import { localePath, navRoutes } from "@/lib/routes";
import { localeMeta } from "@/lib/i18n/config";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { OpeningHours } from "@/components/ui/opening-hours";
import { SocialLinks } from "@/components/ui/social-links";

export async function SiteFooter({ locale }: { locale: Locale }) {
  const dict = await getDictionary(locale);
  const year = new Intl.NumberFormat(localeMeta[locale].intl, { useGrouping: false }).format(await getCurrentYear());

  return (
    <footer className="bg-night text-chalk dark:border-t dark:border-chalk/10">
      <Container className="grid gap-12 py-16 sm:py-20 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
        <div className="flex flex-col gap-6 lg:col-span-4">
          <Logo locale={locale} tone="light" label={`${dict.meta.siteName} — ${dict.nav.home}`} />
          <p className="max-w-sm leading-relaxed text-chalk/75">{dict.footer.description}</p>
          <SocialLinks tone="light" newTabLabel={dict.common.opensInNewTab} />
        </div>

        <nav aria-label={dict.common.footerNav} className="lg:col-span-2">
          <h2 className="eyebrow text-saffron!">{dict.footer.explore}</h2>
          <ul className="mt-5 flex flex-col gap-1">
            {navRoutes.map((route) => (
              <li key={route}>
                <Link
                  href={localePath(locale, route)}
                  className="inline-flex min-h-10 items-center text-chalk/85 transition-colors hover:text-saffron"
                >
                  {dict.nav[route]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <h2 className="eyebrow text-saffron!">{dict.footer.visit}</h2>
          <ul className="mt-5 flex flex-col gap-4 text-chalk/85">
            <li>
              <a href={links.maps} target="_blank" rel="noopener noreferrer" className="flex gap-3 transition-colors hover:text-saffron">
                <MapPin className="mt-1 size-4 shrink-0 text-saffron" aria-hidden="true" />
                <span>
                  {fullAddress(locale)}
                  <span className="sr-only"> {dict.common.opensInNewTab}</span>
                </span>
              </a>
            </li>
            <li>
              <a href={links.tel} className="flex items-center gap-3 transition-colors hover:text-saffron">
                <Phone className="size-4 shrink-0 text-saffron" aria-hidden="true" />
                <span dir="ltr">{formatPhone(restaurant.phone)}</span>
              </a>
            </li>
            <li>
              <a href={links.mailto} className="flex items-center gap-3 break-all transition-colors hover:text-saffron">
                <Mail className="size-4 shrink-0 text-saffron" aria-hidden="true" />
                <span dir="ltr">{restaurant.email}</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h2 className="eyebrow text-saffron!">{dict.info.hoursTitle}</h2>
          <div className="mt-3 text-sm">
            <OpeningHours locale={locale} dict={dict} tone="light" />
          </div>
        </div>
      </Container>

      <div className="border-t border-chalk/10">
        <Container className="flex flex-col gap-2 py-6 text-sm text-chalk/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {restaurant.name[locale]}. {dict.footer.rights}
          </p>
          <p>{restaurant.tagline[locale]}</p>
        </Container>
      </div>
    </footer>
  );
}

async function getCurrentYear() {
  "use cache";
  cacheLife("days");
  return new Date().getFullYear();
}
