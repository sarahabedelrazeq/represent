import { MapPin, MessageCircle, Phone } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import { links } from "@/lib/format";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { LogoMark } from "@/components/ui/logo";

export function ContactCta({ dict }: { dict: Dictionary }) {
  const newTab = { newTabLabel: dict.common.opensInNewTab };
  return (
    <section aria-labelledby="cta-title" className="bg-olive-dark text-chalk">
      <Container size="narrow" className="flex flex-col items-center gap-6 py-20 text-center sm:py-24">
        <LogoMark className="size-12 text-saffron" />
        <h2 id="cta-title" className="font-display text-4xl font-medium sm:text-5xl ar:leading-snug">
          {dict.contact.ctaTitle}
        </h2>
        <p className="max-w-xl text-lg leading-relaxed text-chalk/80">{dict.contact.ctaText}</p>
        <div className="flex w-full flex-col justify-center gap-3 pt-2 sm:w-auto sm:flex-row">
          <ButtonLink href={links.tel} variant="light" icon={<Phone className="size-4" aria-hidden="true" />}>
            {dict.contact.call}
          </ButtonLink>
          <ButtonLink
            href={links.whatsapp(dict.contact.whatsappMessage)}
            variant="outline-light"
            external={newTab}
            icon={<MessageCircle className="size-4" aria-hidden="true" />}
          >
            {dict.contact.whatsapp}
          </ButtonLink>
          <ButtonLink
            href={links.directions}
            variant="outline-light"
            external={newTab}
            icon={<MapPin className="size-4" aria-hidden="true" />}
          >
            {dict.contact.directions}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
