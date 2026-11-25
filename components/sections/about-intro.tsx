import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Locale } from "@/types";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import { photos } from "@/data/images";
import { localePath } from "@/lib/routes";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function AboutIntro({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section aria-labelledby="about-title" className="bg-parchment py-20 sm:py-28">
      <Container className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="relative lg:col-span-6">
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-sand">
            <Image
              src={photos.diningRoom.src}
              alt={photos.diningRoom.alt[locale]}
              placeholder="blur"
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-10 end-4 hidden w-2/5 overflow-hidden rounded-t-full border-8 border-parchment bg-sand sm:block lg:-end-8">
            <Image
              src={photos.taboonBread.src}
              alt={photos.taboonBread.alt[locale]}
              placeholder="blur"
              sizes="20vw"
              className="aspect-[3/4] h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col gap-6 lg:col-span-6 lg:ps-8">
          <SectionHeading id="about-title" eyebrow={dict.about.eyebrow} title={dict.about.title} />
          <p className="font-display text-2xl leading-snug text-ink sm:text-[1.75rem] ar:leading-relaxed">{dict.about.lead}</p>
          <p className="leading-relaxed text-umber">{dict.about.body[0]}</p>
          <Link
            href={localePath(locale, "about")}
            className="group inline-flex min-h-11 items-center gap-2 self-start font-semibold text-terracotta transition-colors hover:text-terracotta-dark"
          >
            {dict.about.readMore}
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
