"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { Menu, X } from "lucide-react";

export interface NavItem {
  href: string;
  label: string;
  current: boolean;
}

interface MobileNavProps {
  items: NavItem[];
  openLabel: string;
  closeLabel: string;
  navLabel: string;
  /** Extra controls shown under the links (e.g. the theme switch). */
  children?: ReactNode;
}

export function MobileNav({ items, openLabel, closeLabel, navLabel, children }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector("a")?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const onResize = () => {
      if (window.matchMedia("(min-width: 768px)").matches) setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? closeLabel : openLabel}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex size-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-parchment"
      >
        {open ? <X className="size-6" aria-hidden="true" /> : <Menu className="size-6" aria-hidden="true" />}
      </button>

      <div
        id={panelId}
        ref={panelRef}
        hidden={!open}
        className="fixed inset-x-0 top-(--header-height) bottom-0 z-40 overflow-y-auto bg-cream px-5 pt-6 pb-10 sm:px-8"
      >
        <nav aria-label={navLabel}>
          <ul className="flex flex-col divide-y divide-ink/10 border-y border-ink/10">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className="flex min-h-16 items-center font-display text-3xl text-ink transition-colors hover:text-terracotta aria-[current=page]:text-terracotta"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {children && <div className="border-b border-ink/10">{children}</div>}
      </div>
    </div>
  );
}
