import Image from "next/image";
import type { Locale } from "@/types";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import { photos } from "@/data/images";
import { Container } from "@/components/ui/container";

export function Story({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section aria-labelledby="story-title" className="py-16 sm:py-24">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <h2 id="story-title" className="eyebrow">
            {dict.about.eyebrow}
          </h2>
          <p className="mt-5 font-display text-3xl leading-snug text-ink sm:text-4xl ar:leading-relaxed">{dict.about.lead}</p>
        </div>
        <div className="flex flex-col gap-6 text-lg leading-relaxed text-umber lg:col-span-6 lg:col-start-7">
          {dict.about.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Container>

      <Container as="dl" className="mt-16 grid gap-8 border-y border-ink/10 py-10 sm:grid-cols-3">
        {dict.about.stats.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-1">
            <dt className="order-2 text-sm text-umber">{stat.label}</dt>
            <dd className="order-1 font-display text-5xl text-terracotta">{stat.value}</dd>
          </div>
        ))}
      </Container>

      <Container className="mt-16">
        <div className="relative aspect-[16/10] overflow-hidden rounded-sm bg-sand sm:aspect-[21/9]">
          <Image
            src={photos.eveningTable.src}
            alt={photos.eveningTable.alt[locale]}
            placeholder="blur"
            fill
            sizes="(min-width: 1280px) 1200px, 100vw"
            className="object-cover"
          />
        </div>
      </Container>
    </section>
  );
}
