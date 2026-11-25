import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone, type LucideIcon } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import { restaurant } from "@/data/restaurant";
import { formatPhone, links } from "@/lib/format";
import { Container } from "@/components/ui/container";

interface ContactOption {
  icon: LucideIcon;
  title: string;
  value: string;
  hint: string;
  href: string;
  external: boolean;
  ltrValue: boolean;
}

export function ContactOptions({ dict }: { dict: Dictionary }) {
  const options: ContactOption[] = [
    { icon: Phone, title: dict.contact.call, value: formatPhone(restaurant.phone), hint: dict.contact.callHint, href: links.tel, external: false, ltrValue: true },
    { icon: MessageCircle, title: dict.contact.whatsapp, value: `+${restaurant.whatsapp.replace(/^(\d{3})(\d{2})(\d{3})(\d{4})$/, "$1 $2 $3 $4")}`, hint: dict.contact.whatsappHint, href: links.whatsapp(dict.contact.whatsappMessage), external: true, ltrValue: true },
    { icon: MapPin, title: dict.contact.directions, value: dict.contact.directionsHint, hint: dict.info.viewOnMap, href: links.directions, external: true, ltrValue: false },
    { icon: Mail, title: dict.contact.email, value: restaurant.email, hint: dict.contact.emailHint, href: links.mailto, external: false, ltrValue: true },
  ];

  return (
    <section aria-label={dict.contact.eyebrow} className="pb-8">
      <Container>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {options.map(({ icon: Icon, ...option }) => (
            <li key={option.title}>
              <a
                href={option.href}
                {...(option.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group flex h-full flex-col gap-6 rounded-sm border border-ink/10 bg-parchment p-6 transition-colors duration-300 hover:border-terracotta/50 hover:bg-sand/60"
              >
                <span className="flex items-center justify-between">
                  <span className="inline-flex size-12 items-center justify-center rounded-full bg-cream text-terracotta">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <ArrowUpRight
                    className="size-5 text-umber transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:text-terracotta rtl:-scale-x-100"
                    aria-hidden="true"
                  />
                </span>
                <span className="flex flex-col gap-1">
                  <span className="font-display text-2xl font-medium text-ink">{option.title}</span>
                  <span className="font-medium text-ink [overflow-wrap:anywhere]">
                    <span dir={option.ltrValue ? "ltr" : undefined}>{option.value}</span>
                  </span>
                  <span className="text-sm text-umber">{option.hint}</span>
                </span>
                {option.external && <span className="sr-only">{dict.common.opensInNewTab}</span>}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
