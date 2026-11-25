import Link from "next/link";
import type { Locale, RouteKey } from "@/types";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { localeMeta, otherLocale } from "@/lib/i18n/config";
import { localePath, navRoutes } from "@/lib/routes";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { LanguageSwitcher } from "./language-switcher";
import { MobileNav, type NavItem } from "./mobile-nav";

interface SiteHeaderProps {
  locale: Locale;
  /** The page being rendered; `null` for pages outside the main navigation (e.g. 404). */
  current: RouteKey | null;
}

export async function SiteHeader({ locale, current }: SiteHeaderProps) {
  const dict = await getDictionary(locale);
  const target = otherLocale(locale);

  const items: NavItem[] = navRoutes.map((route) => ({
    href: localePath(locale, route),
    label: dict.nav[route],
    current: route === current,
  }));

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream/90 backdrop-blur-md supports-[backdrop-filter]:bg-cream/80">
      <Container className="flex h-(--header-height) items-center justify-between gap-4">
        <Logo locale={locale} label={`${dict.meta.siteName} — ${dict.nav.home}`} />

        <nav aria-label={dict.common.primaryNav} className="hidden md:block">
          <ul className="flex items-center gap-1 lg:gap-2">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                  className="relative inline-flex min-h-11 items-center px-3 text-sm font-medium text-umber transition-colors hover:text-ink aria-[current=page]:text-ink after:absolute after:inset-x-3 after:bottom-2 after:h-px after:origin-left after:scale-x-0 after:bg-terracotta after:transition-transform after:duration-300 hover:after:scale-x-100 aria-[current=page]:after:scale-x-100 rtl:after:origin-right"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher
            href={localePath(target, current ?? "home")}
            targetLocale={target}
            label={localeMeta[target].nativeName}
            ariaLabel={dict.common.switchLanguage}
          />
          <MobileNav
            items={items}
            openLabel={dict.common.openMenu}
            closeLabel={dict.common.closeMenu}
            navLabel={dict.common.primaryNav}
          />
        </div>
      </Container>
    </header>
  );
}
