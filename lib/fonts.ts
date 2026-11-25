import { Amiri, Cormorant, IBM_Plex_Sans_Arabic, Manrope } from "next/font/google";
import type { Locale } from "@/types";

/* Latin: an elegant high-contrast serif for display, a warm grotesque for text. */
const cormorant = Cormorant({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

/* Arabic: classical Naskh for display, a clean humanist sans for text. */
const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-amiri",
  display: "swap",
  preload: false,
});

const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-arabic",
  display: "swap",
  preload: false,
});

/**
 * Only the active locale's fonts are attached to <html>, so English pages
 * never download Arabic font files and vice versa.
 */
export const fontVariables: Record<Locale, string> = {
  en: `${cormorant.variable} ${manrope.variable}`,
  ar: `${amiri.variable} ${plexArabic.variable} ${manrope.variable}`,
};
