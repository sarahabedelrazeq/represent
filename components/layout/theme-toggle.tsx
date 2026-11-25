"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { THEME_STORAGE_KEY } from "@/lib/theme";

const THEME_EVENT = "themechange";
const darkQuery = "(prefers-color-scheme: dark)";

/** Effective theme: an explicit choice on <html data-theme>, otherwise the OS setting. */
function isDarkNow(): boolean {
  const explicit = document.documentElement.dataset.theme;
  return explicit ? explicit === "dark" : window.matchMedia(darkQuery).matches;
}

function subscribe(onChange: () => void) {
  const media = window.matchMedia(darkQuery);
  media.addEventListener("change", onChange);
  window.addEventListener(THEME_EVENT, onChange);
  return () => {
    media.removeEventListener("change", onChange);
    window.removeEventListener(THEME_EVENT, onChange);
  };
}

function toggleTheme() {
  const next = isDarkNow() ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  try {
    localStorage.setItem(THEME_STORAGE_KEY, next);
  } catch {
    /* Private mode / blocked storage: the choice still applies to this page view. */
  }
  window.dispatchEvent(new Event(THEME_EVENT));
}

interface ThemeToggleProps {
  label: string;
  variant?: "icon" | "row";
  /** Must include the display utility (e.g. "inline-flex", "hidden sm:inline-flex") for the icon variant. */
  className?: string;
}

/**
 * Accessible on/off switch for dark mode. The icon is chosen purely in CSS
 * (`dark:` variant), so the correct icon shows on first paint with no flash.
 */
export function ThemeToggle({ label, variant = "icon", className = "inline-flex" }: ThemeToggleProps) {
  // `null` on the server and during hydration — the theme is only known in the browser.
  const isDark = useSyncExternalStore(subscribe, isDarkNow, () => null);

  const icons = (
    <>
      <Moon className="size-[1.125rem] dark:hidden" aria-hidden="true" />
      <Sun className="hidden size-[1.125rem] dark:block" aria-hidden="true" />
    </>
  );

  if (variant === "row") {
    return (
      <button
        type="button"
        role="switch"
        aria-checked={isDark ?? undefined}
        onClick={toggleTheme}
        className={`flex min-h-14 w-full items-center justify-between gap-4 text-start text-lg text-ink ${className}`}
      >
        <span className="flex items-center gap-3">
          <span className="text-terracotta">{icons}</span>
          {label}
        </span>
        <span
          aria-hidden="true"
          className="relative h-7 w-12 shrink-0 rounded-full bg-sand transition-colors dark:bg-olive"
        >
          <span className="absolute start-1 top-1 size-5 rounded-full bg-chalk shadow-sm transition-[inset-inline-start] duration-300 dark:start-6" />
        </span>
      </button>
    );
  }

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark ?? undefined}
      aria-label={label}
      title={label}
      onClick={toggleTheme}
      className={`size-11 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors duration-300 hover:border-ink/40 hover:bg-parchment ${className}`}
    >
      {icons}
    </button>
  );
}
