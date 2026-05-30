"use client";

import { useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { Header } from "./components/Header";
import { Hero } from "./sections/Hero";
import { Categories } from "./sections/Categories";
import { Player } from "./sections/Player";
import { Footer } from "./sections/Footer";

function PageContent() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div style={{ background: "var(--bg)", color: "var(--fg)", minHeight: "100vh" }}>
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <Hero />
      <Categories activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
      <div className="max-w-5xl mx-auto px-6 md:px-10"><div className="liquid-glass h-px" style={{ background: "transparent" }} /></div>
      <Player activeCategory={activeCategory} searchQuery={searchQuery} />
      <Footer />
    </div>
  );
}

export default function Home() {
  return (
    <ThemeProvider><PageContent /></ThemeProvider>
  );
}
