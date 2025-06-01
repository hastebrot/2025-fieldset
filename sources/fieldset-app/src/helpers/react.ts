import { useEffect, useState } from "react";

export type PrefersColorScheme = "dark" | "light" | "no-preference";

// from: https://github.com/rfoel/use-prefers-color-scheme/blob/v1.1.3/src/index.ts
export const usePrefersColorScheme = (): PrefersColorScheme => {
  const [prefersColorScheme, setPrefersColorScheme] = useState<PrefersColorScheme>(() => {
    if (typeof window === "undefined") return "no-preference";

    const isDark = window.matchMedia("(prefers-color-scheme: dark)");
    const isLight = window.matchMedia("(prefers-color-scheme: light)");

    return isDark.matches ? "dark" : isLight.matches ? "light" : "no-preference";
  });

  useEffect(() => {
    if (typeof window.matchMedia !== "function") return;

    const isDark = window.matchMedia("(prefers-color-scheme: dark)");
    const isLight = window.matchMedia("(prefers-color-scheme: light)");

    if (typeof isDark.addEventListener === "function") {
      const darkListener = (event: MediaQueryListEvent) => {
        event.matches && setPrefersColorScheme("dark");
      };
      const lightListener = (event: MediaQueryListEvent) => {
        event.matches && setPrefersColorScheme("light");
      };
      isDark.addEventListener("change", darkListener);
      isLight.addEventListener("change", lightListener);
      return () => {
        isDark.removeEventListener("change", darkListener);
        isLight.removeEventListener("change", lightListener);
      };
    }

    return;
  }, []);

  return prefersColorScheme;
};
