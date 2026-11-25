import Image from "next/image";
import type { Locale } from "@/types";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import { photos } from "@/data/images";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function Kitchen({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section aria-labelledby="kitchen-title" className="py-20 sm:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="relative aspect-[4/5] overflow-hidden rounded-t-full bg-sand sm:aspect-[4/3] lg:aspect-[4/5]">
          <Image
            src={photos.chefFlame.src}
            alt={photos.chefFlame.alt[locale]}
            placeholder="blur"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-8">
          <SectionHeading id="kitchen-title" title={dict.about.kitchenTitle} intro={dict.about.kitchenText} />
          <figure className="border-s-2 border-terracotta ps-6">
            <blockquote className="font-display text-2xl leading-snug text-ink italic sm:text-3xl ar:leading-relaxed ar:not-italic">
              <p>{dict.about.quote}</p>
            </blockquote>
            <figcaption className="mt-4 text-sm text-umber">{dict.about.quoteAuthor}</figcaption>
          </figure>
        </div>
      </Container>
    </section>
  );
}
