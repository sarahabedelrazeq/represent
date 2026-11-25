import { restaurant } from "@/data/restaurant";
import { SocialIcon } from "./social-icon";

export function SocialLinks({ newTabLabel, tone = "dark" }: { newTabLabel: string; tone?: "dark" | "light" }) {
  const colors =
    tone === "dark"
      ? "border-ink/15 text-ink hover:bg-ink hover:text-cream"
      : "border-cream/25 text-cream hover:bg-cream hover:text-ink";
  return (
    <ul className="flex flex-wrap gap-3">
      {restaurant.social.map((link) => (
        <li key={link.platform}>
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex size-11 items-center justify-center rounded-full border transition-colors duration-300 ${colors}`}
          >
            <SocialIcon platform={link.platform} />
            <span className="sr-only">
              {link.label} {newTabLabel}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
