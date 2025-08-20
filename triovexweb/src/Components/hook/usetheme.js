import { useEffect, useState } from "react";

export function useTheme() {
  const getInitialTheme = () => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme");
      if (stored) {
        console.log("🔄 Loaded theme from localStorage:", stored);
        return stored;
      }

      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      console.log("🌙 Using system preference:", prefersDark ? "dark" : "light");
      return prefersDark ? "dark" : "light";
    }
    return "light";
  };

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    console.log("🎨 Applying theme:", theme);

    if (theme === "dark") {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === "dark" ? "light" : "dark";
      console.log("🖱 Toggled theme:", newTheme);
      return newTheme;
    });
  };

  return { theme, toggleTheme };
}