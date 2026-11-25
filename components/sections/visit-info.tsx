import Image from "next/image";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import type { Locale } from "@/types";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import { photos } from "@/data/images";
import { restaurant } from "@/data/restaurant";
import { formatPhone, links } from "@/lib/format";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { OpeningHours } from "@/components/ui/opening-hours";
import { SectionHeading } from "@/components/ui/section-heading";
import { SocialLinks } from "@/components/ui/social-links";

/** Restaurant information: address, hours, phone, email, social and map links. */
export function VisitInfo({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const { street, district, city, postalCode, country } = restaurant.address;

  return (
    <section id="visit" aria-labelledby="visit-title" className="py-20 sm:py-28">
      <Container className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="flex flex-col gap-10 lg:col-span-7">
          <SectionHeading id="visit-title" eyebrow={dict.info.eyebrow} title={dict.info.title} />

          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <h3 className="eyebrow">{dict.info.addressTitle}</h3>
              <address className="mt-4 leading-relaxed text-ink not-italic">
                {street[locale]}
                <br />
                {district[locale]}{locale === "ar" ? "، " : ", "}{city[locale]} {postalCode}
                <br />
                {country[locale]}
              </address>
              <a
                href={links.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-4 inline-flex min-h-11 items-center gap-1.5 font-semibold text-terracotta hover:text-terracotta-dark"
              >
                {dict.info.viewOnMap}
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 rtl:-scale-x-100" aria-hidden="true" />
                <span className="sr-only">{dict.common.opensInNewTab}</span>
              </a>
            </div>

            <div>
              <h3 className="eyebrow">{dict.info.hoursTitle}</h3>
              <div className="mt-1">
                <OpeningHours locale={locale} dict={dict} />
              </div>
            </div>

            <div>
              <h3 className="eyebrow">{dict.info.contactTitle}</h3>
              <ul className="mt-4 flex flex-col gap-2">
                <li>
                  <a href={links.tel} className="inline-flex min-h-11 items-center gap-3 text-ink hover:text-terracotta">
                    <Phone className="size-4 text-terracotta" aria-hidden="true" />
                    <span className="sr-only">{dict.info.phoneLabel}: </span>
                    <span dir="ltr">{formatPhone(restaurant.phone)}</span>
                  </a>
                </li>
                <li>
                  <a href={links.mailto} className="inline-flex min-h-11 items-center gap-3 break-all text-ink hover:text-terracotta">
                    <Mail className="size-4 shrink-0 text-terracotta" aria-hidden="true" />
                    <span className="sr-only">{dict.info.emailLabel}: </span>
                    <span dir="ltr">{restaurant.email}</span>
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="eyebrow">{dict.info.followTitle}</h3>
              <div className="mt-4">
                <SocialLinks newTabLabel={dict.common.opensInNewTab} />
              </div>
            </div>
          </div>

          <p className="border-s-2 border-terracotta ps-4 text-sm leading-relaxed text-umber">{dict.info.reservationNote}</p>
        </div>

        <div className="flex flex-col gap-6 lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-full bg-sand lg:aspect-auto lg:flex-1">
            <Image
              src={photos.charcoalSkewers.src}
              alt={photos.charcoalSkewers.alt[locale]}
              placeholder="blur"
              fill
              sizes="(min-width: 1024px) 38vw, 100vw"
              className="object-cover"
            />
          </div>
          <ButtonLink
            href={links.directions}
            external={{ newTabLabel: dict.common.opensInNewTab }}
            icon={<ArrowUpRight className="size-4 rtl:-scale-x-100" aria-hidden="true" />}
            className="flex-row-reverse"
          >
            {dict.info.directions}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
