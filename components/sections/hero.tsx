import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import type { Locale } from "@/types";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import { photos } from "@/data/images";
import { restaurant } from "@/data/restaurant";
import { formatDays, formatHours } from "@/lib/format";
import { localePath } from "@/lib/routes";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [weekdays] = restaurant.openingHours;

  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      <Container className="grid items-center gap-12 pt-10 pb-16 sm:pt-14 lg:grid-cols-12 lg:gap-16 lg:pt-16 lg:pb-24">
        <div className="flex flex-col items-start gap-6 lg:col-span-6 xl:col-span-5">
          <p className="eyebrow motion-safe:animate-rise">{dict.hero.eyebrow}</p>
          <h1
            id="hero-title"
            className="font-display text-6xl leading-[0.95] font-medium tracking-tight text-ink motion-safe:animate-rise sm:text-7xl lg:text-8xl ar:leading-[1.25] ar:tracking-normal"
          >
            {restaurant.name[locale]}
          </h1>
          <p className="font-display text-2xl text-terracotta italic motion-safe:animate-rise motion-safe:[animation-delay:120ms] sm:text-3xl ar:not-italic">
            {restaurant.tagline[locale]}
          </p>
          <p className="max-w-lg text-base leading-relaxed text-umber motion-safe:animate-rise motion-safe:[animation-delay:200ms] sm:text-lg">
            {dict.hero.intro}
          </p>
          <div className="flex w-full flex-col gap-3 pt-2 motion-safe:animate-rise motion-safe:[animation-delay:280ms] sm:w-auto sm:flex-row">
            <ButtonLink
              href={localePath(locale, "menu")}
              icon={<ArrowRight className="size-4 rtl:-scale-x-100" aria-hidden="true" />}
              className="flex-row-reverse"
            >
              {dict.hero.primaryCta}
            </ButtonLink>
            <ButtonLink href={localePath(locale, "contact")} variant="secondary">
              {dict.hero.secondaryCta}
            </ButtonLink>
          </div>
          <p className="flex items-start gap-2 pt-4 text-sm text-umber">
            <MapPin className="mt-0.5 size-4 shrink-0 text-terracotta" aria-hidden="true" />
            <span>
              {restaurant.address.street[locale]}{locale === "ar" ? "، " : ", "}{restaurant.address.district[locale]}
              <span className="mx-2 text-stone" aria-hidden="true">
                ·
              </span>
              <span className="whitespace-nowrap">{formatDays(weekdays, dict)}</span>{" "}
              <span className="whitespace-nowrap">{formatHours(locale, weekdays)}</span>
            </span>
          </p>
        </div>

        <figure className="relative lg:col-span-6 xl:col-span-7">
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-[12rem] bg-sand motion-safe:animate-fade sm:aspect-[5/4] sm:rounded-t-[20rem] lg:aspect-[4/5] xl:aspect-[5/6]">
            <Image
              src={photos.hero.src}
              alt={photos.hero.alt[locale]}
              placeholder="blur"
              loading="eager"
              fetchPriority="high"
              sizes="(min-width: 1280px) 56vw, (min-width: 1024px) 48vw, 100vw"
              className="h-full w-full object-cover"
            />
          </div>
          <figcaption className="mt-3 text-sm text-umber italic ar:not-italic">{dict.hero.imageCaption}</figcaption>
        </figure>
      </Container>
    </section>
  );
}
