import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Locale } from "@/types";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import { menuItems, signatureDishIds } from "@/data/menu";
import { localizeMenuItem } from "@/lib/format";
import { localePath } from "@/lib/routes";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function SignatureDishes({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const dishes = signatureDishIds
    .map((id) => menuItems.find((item) => item.id === id))
    .filter((item) => item !== undefined)
    .map((item) => localizeMenuItem(item, locale));

  return (
    <section aria-labelledby="signature-title" className="py-20 sm:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading id="signature-title" eyebrow={dict.menu.eyebrow} title={dict.menu.title} intro={dict.menu.intro} />
          <ButtonLink
            href={localePath(locale, "menu")}
            variant="secondary"
            icon={<ArrowRight className="size-4 rtl:-scale-x-100" aria-hidden="true" />}
            className="shrink-0 flex-row-reverse self-start md:self-auto"
          >
            {dict.menu.viewFull}
          </ButtonLink>
        </div>

        <ul className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {dishes.map((dish, index) => (
            <li key={dish.id} className={index === 1 ? "lg:mt-16" : ""}>
              <article className="group flex flex-col gap-5">
                {dish.image && (
                  <div className="relative aspect-[4/5] overflow-hidden rounded-t-full bg-sand">
                    <Image
                      src={dish.image.src}
                      alt={dish.image.alt}
                      placeholder="blur"
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out-soft group-hover:scale-[1.03]"
                    />
                  </div>
                )}
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-2xl font-medium text-ink sm:text-3xl">{dish.name}</h3>
                  <p className="shrink-0 font-medium text-terracotta tabular-nums">{dish.price}</p>
                </div>
                <p className="-mt-2 leading-relaxed text-umber">{dish.description}</p>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
