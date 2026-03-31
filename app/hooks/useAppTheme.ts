import { VALID_THEMES } from "@/app/constants/theme";
import { useCurrentTheme, useSetCurrentTheme } from "@/app/stores/theme";
import { useLayoutEffect } from "react";

interface UseAppThemeResult {
  currentTheme: string;
  setTheme: (theme: string) => void;
  isValidTheme: boolean;
}

const useAppTheme = (): UseAppThemeResult => {
  const storeTheme = useCurrentTheme();
  const setStoreTheme = useSetCurrentTheme();

  // Validate theme is in the list of valid themes
  const isValidTheme = Array.from(VALID_THEMES).includes(storeTheme);

  // Apply theme to HTML element when store theme changes
  useLayoutEffect(() => {
    // Skip during SSR - document doesn't exist on server
    if (typeof document === "undefined") {
      return;
    }

    const themeToApply = storeTheme || "dark";

    // Validate theme before applying
    if (storeTheme && !Array.from(VALID_THEMES).includes(storeTheme)) {
      setStoreTheme("dark");
      return;
    }

    try {
      const htmlElement = document.documentElement;
      const previousTheme = htmlElement.dataset.theme;

      // Only update if theme actually changed
      if (previousTheme !== themeToApply) {
        htmlElement.dataset.theme = themeToApply;
      }
    } catch (err) {
      const errorMsg = `[Theme] Failed to apply theme: ${err}`;
      console.error(errorMsg);
    }
  }, [storeTheme, setStoreTheme]);

  // Wrapper function with validation
  const setTheme = (theme: string) => {
    if (!VALID_THEMES.has(theme)) {
      const errorMsg = `Invalid theme: ${theme}`;
      console.error(`[Theme] ${errorMsg}`);
      return;
    }
    setStoreTheme(theme);
  };

  return {
    currentTheme: storeTheme || "dark",
    setTheme,
    isValidTheme,
  };
};

export default useAppTheme;
