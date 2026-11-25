import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "light" | "outline-light";

const variants: Record<Variant, string> = {
  primary: "bg-olive text-cream hover:bg-olive-dark",
  secondary: "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-cream",
  light: "bg-cream text-ink hover:bg-parchment",
  "outline-light": "border border-cream/40 text-cream hover:border-cream hover:bg-cream hover:text-ink",
};

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  icon?: ReactNode;
  /** External links open in a new tab and announce it to screen readers. */
  external?: { newTabLabel: string };
  className?: string;
}

export function ButtonLink({ href, children, variant = "primary", icon, external, className = "" }: ButtonLinkProps) {
  const classes = `inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-300 ${variants[variant]} ${className}`;
  const content = (
    <>
      {icon}
      <span>{children}</span>
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
        <span className="sr-only"> {external.newTabLabel}</span>
      </a>
    );
  }

  if (/^(tel|mailto):/.test(href)) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
