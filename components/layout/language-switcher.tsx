"use client";

import Link from "next/link";
import { Languages } from "lucide-react";
import { LOCALE_COOKIE } from "@/lib/i18n/config";
import type { Locale } from "@/types";

interface LanguageSwitcherProps {
  href: string;
  targetLocale: Locale;
  label: string;
  ariaLabel: string;
  className?: string;
}

/** Links to the same page in the other language and remembers the choice for future visits. */
export function LanguageSwitcher({ href, targetLocale, label, ariaLabel, className = "" }: LanguageSwitcherProps) {
  return (
    <Link
      href={href}
      hrefLang={targetLocale}
      lang={targetLocale}
      aria-label={ariaLabel}
      onClick={() => {
        document.cookie = `${LOCALE_COOKIE}=${targetLocale}; path=/; max-age=31536000; samesite=lax`;
      }}
      className={`inline-flex min-h-11 items-center gap-2 rounded-full border border-ink/15 px-3 sm:px-4 text-sm font-medium text-ink transition-colors duration-300 hover:border-ink/40 hover:bg-parchment ${className}`}
    >
      <Languages className="size-4 text-terracotta" aria-hidden="true" />
      <span>{label}</span>
    </Link>
  );
}
