import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function setPageMeta(title: string, description?: string) {
  if (title) document.title = title;
  if (description) {
    let meta = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]'
    );
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = description;
  }
}

export function buildSrcSet(baseSrc: string, widths: number[] = [400, 800]) {
  try {
    const dot = baseSrc.lastIndexOf(".");
    if (dot <= 0) return undefined;
    const name = baseSrc.slice(0, dot);
    const ext = baseSrc.slice(dot);
    return widths
      .map((w) => `${name}-${w}w${ext} ${w}w`)
      .join(", ");
  } catch {
    return undefined;
  }
}
