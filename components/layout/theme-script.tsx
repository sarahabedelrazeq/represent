"use client";

import { useRef } from "react";
import { useServerInsertedHTML } from "next/navigation";
import { themeInitScript } from "@/lib/theme";

/**
 * Injects the theme script into the server-rendered HTML only. React never renders a
 * <script> element itself, so there is no "script tag inside React component" warning,
 * and the data-theme attribute it sets on <html> persists across client navigations.
 */
export function ThemeScript() {
  const inserted = useRef(false);
  useServerInsertedHTML(() => {
    if (inserted.current) return null;
    inserted.current = true;
    return <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />;
  });
  return null;
}
