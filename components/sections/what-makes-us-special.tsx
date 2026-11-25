import Image from "next/image";
import type { Locale, Photo } from "@/types";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import { photos } from "@/data/images";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const pillarPhotos: Photo[] = [photos.charcoalSkewers, photos.taboonBread, photos.spices];

export function WhatMakesUsSpecial({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section aria-labelledby="special-title" className="bg-parchment py-20 sm:py-28">
      <Container>
        <SectionHeading id="special-title" title={dict.about.specialTitle} />
        <ol className="mt-14 grid gap-12 md:grid-cols-3 md:gap-8">
          {dict.about.special.map((pillar, index) => {
            const photo = pillarPhotos[index];
            return (
              <li key={pillar.title} className="flex flex-col gap-5">
                {photo && (
                  <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-sand">
                    <Image
                      src={photo.src}
                      alt={photo.alt[locale]}
                      placeholder="blur"
                      fill
                      sizes="(min-width: 768px) 30vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                )}
                <span className="font-display text-xl text-terracotta" aria-hidden="true">
                  {new Intl.NumberFormat(locale === "ar" ? "ar-JO" : "en", { minimumIntegerDigits: 2 }).format(index + 1)}
                </span>
                <h3 className="-mt-3 font-display text-3xl font-medium text-ink">{pillar.title}</h3>
                <p className="leading-relaxed text-umber">{pillar.text}</p>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
