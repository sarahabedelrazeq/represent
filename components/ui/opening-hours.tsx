import { restaurant } from "@/data/restaurant";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import { formatDays, formatTime } from "@/lib/format";
import type { Locale } from "@/types";

export function OpeningHours({ locale, dict, tone = "dark" }: { locale: Locale; dict: Dictionary; tone?: "dark" | "light" }) {
  const muted = tone === "dark" ? "text-umber" : "text-chalk/75";
  const rule = tone === "dark" ? "border-ink/10" : "border-chalk/15";
  return (
    <dl className="flex flex-col">
      {restaurant.openingHours.map((entry) => (
        <div key={entry.days.join()} className={`flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b py-3 last:border-b-0 ${rule}`}>
          <dt className={muted}>{formatDays(entry, dict)}</dt>
          <dd className="font-medium tabular-nums">
            <time dateTime={entry.opens}>{formatTime(locale, entry.opens)}</time>
            {" – "}
            <time dateTime={entry.closes}>{formatTime(locale, entry.closes)}</time>
          </dd>
        </div>
      ))}
    </dl>
  );
}
