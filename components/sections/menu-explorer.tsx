"use client";

import { useState } from "react";
import type { DietaryTag, LocalizedMenuItem, MenuCategoryId } from "@/types";
import { MenuItemRow } from "@/components/ui/menu-item-row";

export interface LocalizedCategory {
  id: MenuCategoryId;
  name: string;
  description: string;
}

interface MenuExplorerProps {
  categories: LocalizedCategory[];
  items: LocalizedMenuItem[];
  labels: { all: string; filter: string; tags: Record<DietaryTag, string> };
}

type Filter = MenuCategoryId | "all";

/**
 * The full menu is rendered on the server (good for SEO and no-JS visitors);
 * the category filter only narrows what is shown.
 */
export function MenuExplorer({ categories, items, labels }: MenuExplorerProps) {
  const [active, setActive] = useState<Filter>("all");
  const filters: { id: Filter; name: string }[] = [{ id: "all", name: labels.all }, ...categories];
  const visible = active === "all" ? categories : categories.filter((category) => category.id === active);

  return (
    <div>
      <div className="sticky top-(--header-height) z-30 -mx-5 border-b border-ink/10 bg-cream/95 px-5 backdrop-blur-md sm:mx-0 sm:px-0">
        <div role="group" aria-label={labels.filter} className="flex gap-2 overflow-x-auto py-4 [scrollbar-width:none]">
          {filters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              aria-pressed={active === filter.id}
              aria-controls="menu-categories"
              onClick={() => setActive(filter.id)}
              className="min-h-11 shrink-0 rounded-full border border-ink/15 px-5 text-sm font-medium whitespace-nowrap text-umber transition-colors duration-300 hover:border-ink/40 hover:text-ink aria-pressed:border-olive aria-pressed:bg-olive aria-pressed:text-cream"
            >
              {filter.name}
            </button>
          ))}
        </div>
      </div>

      <div id="menu-categories" className="flex flex-col gap-16 pt-12">
        {visible.map((category) => (
          <section key={category.id} aria-labelledby={`category-${category.id}`} className="grid gap-6 lg:grid-cols-12 lg:gap-12">
            <header className="lg:col-span-4">
              <div className="lg:sticky lg:top-[calc(var(--header-height)+6rem)]">
                <h2 id={`category-${category.id}`} className="font-display text-4xl font-medium text-ink ar:leading-snug">
                  {category.name}
                </h2>
                <p className="mt-3 leading-relaxed text-umber">{category.description}</p>
              </div>
            </header>
            <ul className="divide-y divide-ink/10 border-t border-ink/10 lg:col-span-8">
              {items
                .filter((item) => item.category === category.id)
                .map((item) => (
                  <li key={item.id}>
                    <MenuItemRow item={item} tagLabels={labels.tags} />
                  </li>
                ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
