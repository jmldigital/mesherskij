"use client";

import { useState, useEffect } from "react";
import { CategoryCard } from "../components/CategoryCard";
import { getScenarios } from "../lib/api";
import { Scenario } from "../types";

export function Categories({ activeCategory, onCategoryChange }: { activeCategory: string; onCategoryChange: (id: string) => void }) {
  const [scenarios, setScenarios] = useState<Scenario[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getScenarios().then(setScenarios).catch(console.error).finally(() => setLoading(false));
  }, []);

  return (
    <section id="categories" className="py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="flex items-center gap-3 mb-3"><div className="w-5 h-px bg-[#968766]" /><span className="text-caption">Categories</span></div>
            <h2 className="text-headline">Life Scenarios</h2>
          </div>
          <button onClick={() => onCategoryChange("all")} className="text-[13px] font-medium transition-colors" style={{ color: activeCategory === "all" ? "var(--granite)" : "var(--jumbo)" }}>All</button>
        </div>
        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {Array.from({ length: 5 }).map((_, i) => <div key={i} className="liquid-glass p-4 h-32 animate-pulse" />)}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {scenarios.map((cat) => <CategoryCard key={cat.id} cat={cat} isActive={activeCategory === cat.id} onClick={() => onCategoryChange(activeCategory === cat.id ? "all" : cat.id)} />)}
          </div>
        )}
      </div>
    </section>
  );
}
