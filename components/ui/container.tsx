import type { HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLElement> {
  as?: "div" | "section" | "dl" | "header" | "footer";
  size?: "default" | "narrow";
}

/** Centered page column with responsive side gutters. */
export function Container({ as: Component = "div", size = "default", className = "", ...props }: ContainerProps) {
  const width = size === "narrow" ? "max-w-4xl" : "max-w-7xl";
  return <Component className={`mx-auto w-full ${width} px-5 sm:px-8 lg:px-10 ${className}`} {...props} />;
}
