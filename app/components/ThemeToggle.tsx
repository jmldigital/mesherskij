"use client";

import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="icon-glass" aria-hidden="true" />;
  }

  return (
    <button onClick={toggle} className="icon-glass cursor-pointer" title={theme === "light" ? "Тёмная тема" : "Светлая тема"}>
      {theme === "light" ? <Moon size={14} strokeWidth={1.5} /> : <Sun size={14} strokeWidth={1.5} />}
    </button>
  );
}
