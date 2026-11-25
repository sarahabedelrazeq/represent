import Image from "next/image";
import type { LocalizedMenuItem, DietaryTag } from "@/types";

interface MenuItemRowProps {
  item: LocalizedMenuItem;
  tagLabels: Record<DietaryTag, string>;
}

const tagStyles: Record<DietaryTag, string> = {
  signature: "bg-terracotta/10 text-terracotta-dark",
  vegetarian: "bg-olive/10 text-olive-dark dark:bg-olive/30 dark:text-[#cdd6a3]",
  spicy: "bg-saffron/20 text-ink",
};

export function MenuItemRow({ item, tagLabels }: MenuItemRowProps) {
  return (
    <article className="flex gap-5 py-6">
      {item.image && (
        <div className="relative size-20 shrink-0 overflow-hidden rounded-full bg-sand sm:size-24">
          <Image
            src={item.image.src}
            alt={item.image.alt}
            placeholder="blur"
            fill
            sizes="96px"
            className="object-cover"
          />
        </div>
      )}
      <div className="flex min-w-0 flex-1 flex-col gap-2">
        <div className="flex items-baseline gap-3">
          <h3 className="font-display text-2xl leading-tight font-medium text-ink ar:leading-normal">{item.name}</h3>
          <span className="min-w-6 flex-1 translate-y-[-0.3em] border-b border-dotted border-stone" aria-hidden="true" />
          <p className="shrink-0 font-semibold text-terracotta tabular-nums">{item.price}</p>
        </div>
        <p className="leading-relaxed text-umber">{item.description}</p>
        {item.tags.length > 0 && (
          <ul className="flex flex-wrap gap-2 pt-1">
            {item.tags.map((tag) => (
              <li key={tag} className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${tagStyles[tag]}`}>
                {tagLabels[tag]}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
