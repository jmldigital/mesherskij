"use client";

import { useState } from "react";
import { Search, X } from "lucide-react";
import { LogoMonogram, LogoText } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

export function Header({ searchQuery, onSearchChange }: { searchQuery: string; onSearchChange: (q: string) => void }) {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
      <div className="relative max-w-5xl mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <LogoMonogram size={32} />
          <div className="hidden sm:block"><LogoText /></div>
        </div>
        <nav className="hidden md:flex items-center gap-10">
          {[
            { label: "Главная", href: "#hero" },
            { label: "Сценарии", href: "#categories" },
            { label: "Видео", href: "#player" },
          ].map((item) => (
            <a key={item.label} href={item.href} className="text-[13px] font-medium tracking-wide transition-colors duration-300 relative group nav-link">
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#968766] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          {searchOpen ? (
            <div className="liquid-glass rounded-full px-4 py-2 flex items-center gap-2">
              <Search size={14} style={{ color: "var(--jumbo)" }} />
              <input autoFocus type="text" placeholder="Поиск..." value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="bg-transparent text-[13px] w-28 md:w-40 outline-none"
                style={{ color: "var(--fg)" }} />
              <button onClick={() => { setSearchOpen(false); onSearchChange(""); }} style={{ color: "var(--cloudy)" }}>
                <X size={14} />
              </button>
            </div>
          ) : (
            <button onClick={() => setSearchOpen(true)} className="icon-glass cursor-pointer"><Search size={14} strokeWidth={1.5} /></button>
          )}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
