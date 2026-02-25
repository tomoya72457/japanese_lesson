export type Locale = "ja" | "en";

export const LOCALES: Locale[] = ["ja", "en"];

export const NAV_ITEMS: Record<
  Locale,
  { id: string; label: string; href: string }[]
> = {
  ja: [
    { id: "home", label: "トップ", href: "/ja" },
    { id: "instructors", label: "講師紹介", href: "/ja/instructors" },
    { id: "pricing", label: "コース・料金", href: "/ja/pricing" },
    { id: "recruit", label: "講師募集", href: "/ja/recruit" },
    { id: "legal", label: "特定商取引法", href: "/ja/legal" },
  ],
  en: [
    { id: "home", label: "Home", href: "/en" },
    { id: "instructors", label: "Instructors", href: "/en/instructors" },
    { id: "pricing", label: "Courses & Pricing", href: "/en/pricing" },
    { id: "recruit", label: "Join Us", href: "/en/recruit" },
    { id: "legal", label: "Legal Notice", href: "/en/legal" },
  ],
};

export const LINE_BUTTON_LABELS: Record<Locale, string> = {
  ja: "LINE相談・予約",
  en: "LINE Consultation",
};

export const LINE_BUTTON_LABELS_MOBILE: Record<Locale, string> = {
  ja: "LINEで無料相談・予約",
  en: "Free LINE Consultation",
};

export const LANGUAGE_SELECTOR_LABEL: Record<Locale, string> = {
  ja: "言語",
  en: "Language",
};

export const LOCALE_LABELS: Record<Locale, string> = {
  ja: "日本語",
  en: "English",
};

export function getLocaleFromPathname(pathname: string): Locale {
  return pathname.startsWith("/ja") ? "ja" : "en";
}

export function getLocalizedPath(pathname: string, locale: Locale): string {
  if (locale === "en") {
    if (pathname === "/" || pathname === "/ja") return "/en";
    return pathname.replace("/ja", "/en") || "/en";
  }
  if (locale === "ja") {
    if (pathname === "/" || pathname === "/en") return "/ja";
    return pathname.replace("/en", "/ja") || "/ja";
  }
  return pathname;
}
