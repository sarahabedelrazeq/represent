import type { ReactNode } from "react";
import type { SocialLink } from "@/types";

/* Lucide no longer ships brand marks, so simplified versions of the three we need live here. */
const glyphs: Record<SocialLink["platform"], ReactNode> = {
  instagram: (
    <g fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="0.6" fill="currentColor" stroke="none" />
    </g>
  ),
  facebook: (
    <path
      fill="currentColor"
      d="M13.5 21v-7.2h2.4l.4-2.9h-2.8V9.1c0-.8.3-1.4 1.4-1.4h1.5V5.1A19 19 0 0 0 14.3 5c-2.1 0-3.6 1.3-3.6 3.7v2.2H8.3v2.9h2.4V21h2.8Z"
    />
  ),
  tiktok: (
    <path
      fill="currentColor"
      d="M16.6 5.8A4.3 4.3 0 0 1 15.5 3h-3.1v12.4a2.6 2.6 0 0 1-2.6 2.5 2.6 2.6 0 0 1-2.6-2.6 2.6 2.6 0 0 1 3.4-2.5V9.7a5.7 5.7 0 0 0-6.5 5.7 5.7 5.7 0 0 0 5.7 5.6 5.7 5.7 0 0 0 5.7-5.7V9a7.4 7.4 0 0 0 4.3 1.4V7.3s-1.9.1-3.2-1.5Z"
    />
  ),
};

export function SocialIcon({
  platform,
  className = "size-5",
}: {
  platform: SocialLink["platform"];
  className?: string;
}) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className={className}>
      {glyphs[platform]}
    </svg>
  );
}
