# Dar Samar — bilingual restaurant website

A fictional Levantine restaurant site built with Next.js 16 (App Router, Cache Components), TypeScript (strict), Tailwind CSS v4 and Lucide icons. English (LTR) and Arabic (RTL).

```bash
npm install
npm run dev      # http://localhost:3000 → redirects to /en
npm run build && npm start
```

Set `NEXT_PUBLIC_SITE_URL` to the production origin. It is used for canonical URLs, hreflang, the sitemap and structured data.

## Replacing the sample content

| What | Where |
| --- | --- |
| Name, address, phone, WhatsApp, email, hours, socials, coordinates | `data/restaurant.ts` |
| Menu categories and items (bilingual, prices in JOD) | `data/menu.ts` |
| Photos and their bilingual alt text | `data/images.ts` + `public/images/` |
| All UI copy and page metadata | `lib/i18n/dictionaries/en.ts`, `ar.ts` |

`ar.ts` is typed against `en.ts`, so a missing Arabic string fails the type check.

## Structure

```
app/[locale]/          root layout (html lang/dir, fonts), pages, localized 404
app/sitemap.ts, robots.ts, manifest.ts, icon.svg, apple-icon.png
proxy.ts               "/" and unprefixed paths → saved locale cookie, Accept-Language, then English
components/layout/     header, footer, mobile nav (client), language switcher (client)
components/sections/   page sections; menu-explorer is the only other client component
components/ui/         small reusable primitives
lib/                   i18n, routes, formatting, metadata, Schema.org JSON-LD
types/                 shared types
```

## How it works

- **Routing:** locale-prefixed URLs (`/en/menu`, `/ar/menu`), all prerendered statically. The locale is read anywhere on the server via `next/root-params`.
- **RTL:** layouts use logical utilities (`ms-`, `ps-`, `start-`, `end-`, `border-s`), directional icons flip with `rtl:-scale-x-100`, and an `ar:` variant handles Arabic typography (no letter-spacing, looser line-height). Each locale loads its own fonts: Cormorant and Manrope for English, Amiri and IBM Plex Sans Arabic for Arabic.
- **SEO:** each page sets its own title and description, a canonical URL, hreflang links (including x-default), Open Graph and Twitter tags. Restaurant JSON-LD appears on every page and Menu JSON-LD on the menu page. The site also ships a sitemap with alternates, robots.txt and a web manifest.

Sample photos are from Unsplash.
