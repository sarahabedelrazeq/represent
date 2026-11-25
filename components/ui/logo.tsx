import Link from "next/link";
import type { Locale } from "@/types";
import { restaurant } from "@/data/restaurant";
import { localePath } from "@/lib/routes";

/** Wordmark with a small arched-doorway monogram, echoing old Amman stone houses. */
export function Logo({ locale, tone = "dark", label }: { locale: Locale; tone?: "dark" | "light"; label: string }) {
  const color = tone === "dark" ? "text-ink" : "text-cream";
  return (
    <Link
      href={localePath(locale, "home")}
      aria-label={label}
      className={`group inline-flex items-center gap-3 ${color}`}
    >
      <LogoMark className="size-9 text-terracotta transition-transform duration-500 group-hover:-translate-y-0.5" />
      <span className="font-display text-2xl leading-none font-semibold tracking-tight whitespace-nowrap ar:text-[1.65rem] ar:tracking-normal">
        {restaurant.name[locale]}
      </span>
    </Link>
  );
}

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" focusable="false" className={className}>
      <path d="M8 36V18a12 12 0 0 1 24 0v18" stroke="currentColor" strokeWidth="2.5" />
      <path d="M14 36V19.5a6 6 0 0 1 12 0V36" stroke="currentColor" strokeWidth="2.5" />
      <path d="M4 36h32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}
