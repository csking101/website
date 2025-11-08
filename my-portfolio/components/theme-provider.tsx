"use client";
import React, {
  useEffect,
  useState,
  useCallback,
  createContext,
  useContext,
} from "react";
import {
  IBM_Plex_Sans,
  Inter,
  Lora,
  Merriweather,
  Open_Sans,
  Roboto_Slab,
} from "next/font/google";

const ibm = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "600"] });
const inter = Inter({ subsets: ["latin"] });
const lora = Lora({ subsets: ["latin"] });
const merriweather = Merriweather({ subsets: ["latin"] });
const openSans = Open_Sans({ subsets: ["latin"] });
const robotoSlab = Roboto_Slab({ subsets: ["latin"] });

type Theme = "light" | "dark";
export type Font =
  | "ibm"
  | "inter"
  | "lora"
  | "merriweather"
  | "openSans"
  | "robotoSlab";

interface ThemeContextValue {
  theme: Theme;
  toggle: () => void;
  setTheme: (t: Theme) => void;
  font: Font;
  setFont: (f: Font) => void;
  fontClass: string;
}

const fontClasses: Record<Font, string> = {
  ibm: ibm.className,
  inter: inter.className,
  lora: lora.className,
  merriweather: merriweather.className,
  openSans: openSans.className,
  robotoSlab: robotoSlab.className,
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme") as Theme | null;
      if (stored) return stored;
      const prefersDark = window
        .matchMedia("(prefers-color-scheme: dark)")
        .matches;
      return prefersDark ? "dark" : "light";
    }
    return "light";
  });

  const [font, setFontState] = useState<Font>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("font") as Font | null;
      if (stored && fontClasses[stored]) return stored;
    }
    return "ibm"; // default IBM font
  });

  // Apply current theme class whenever theme changes
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const setTheme = useCallback((t: Theme) => {
    setThemeState(t);
    document.documentElement.classList.toggle("dark", t === "dark");
    try {
      localStorage.setItem("theme", t);
    } catch {}
  }, []);

  const toggle = useCallback(
    () => setTheme(theme === "dark" ? "light" : "dark"),
    [theme, setTheme]
  );

  // React to system changes if user has no manual override
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const listener = () => {
      const stored = localStorage.getItem("theme");
      if (!stored) {
        setTheme(mq.matches ? "dark" : "light");
      }
    };
    mq.addEventListener("change", listener);
    return () => mq.removeEventListener("change", listener);
  }, [setTheme]);

  // Apply font class to body when font changes
  useEffect(() => {
    const body = document.body;
    // remove any previous font classes
    Object.values(fontClasses).forEach((cls) => body.classList.remove(cls));
    body.classList.add(fontClasses[font]);
    try {
      localStorage.setItem("font", font);
    } catch {}
  }, [font]);

  const setFont = useCallback((f: Font) => {
    if (!fontClasses[f]) return;
    setFontState(f);
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggle,
        setTheme,
        font,
        setFont,
        fontClass: fontClasses[font],
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
