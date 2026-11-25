import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  intro?: ReactNode;
  as?: "h1" | "h2";
  id?: string;
  align?: "start" | "center";
  tone?: "dark" | "light";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  as: Heading = "h2",
  id,
  align = "start",
  tone = "dark",
  className = "",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center items-center" : "items-start text-start";
  const titleColor = tone === "dark" ? "text-ink" : "text-chalk";
  const introColor = tone === "dark" ? "text-umber" : "text-chalk/80";
  const size = Heading === "h1" ? "text-5xl sm:text-6xl lg:text-7xl" : "text-4xl sm:text-5xl";

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignment} ${className}`}>
      {eyebrow && <p className={`eyebrow ${tone === "light" ? "text-saffron!" : ""}`}>{eyebrow}</p>}
      <Heading id={id} className={`${size} leading-[1.05] font-medium ${titleColor} ar:leading-[1.35]`}>
        {title}
      </Heading>
      {intro && <p className={`text-base leading-relaxed sm:text-lg ${introColor}`}>{intro}</p>}
    </div>
  );
}
