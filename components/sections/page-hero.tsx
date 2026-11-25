import Image from "next/image";
import type { Locale, Photo } from "@/types";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

interface PageHeroProps {
  locale: Locale;
  eyebrow: string;
  title: string;
  intro: string;
  image?: Photo;
}

/** Heading block for inner pages; owns the page's single <h1>. */
export function PageHero({ locale, eyebrow, title, intro, image }: PageHeroProps) {
  return (
    <section aria-labelledby="page-title" className="pt-14 pb-12 sm:pt-20 sm:pb-16">
      <Container>
        <SectionHeading as="h1" id="page-title" eyebrow={eyebrow} title={title} intro={intro} className="motion-safe:animate-rise" />
        {image && (
          <div className="relative mt-12 aspect-[16/10] overflow-hidden rounded-t-[10rem] bg-sand motion-safe:animate-fade sm:aspect-[21/9] sm:rounded-t-[24rem]">
            <Image
              src={image.src}
              alt={image.alt[locale]}
              placeholder="blur"
              loading="eager"
              fetchPriority="high"
              fill
              sizes="(min-width: 1280px) 1200px, 100vw"
              className="object-cover"
            />
          </div>
        )}
      </Container>
    </section>
  );
}
