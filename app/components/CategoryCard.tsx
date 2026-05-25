"use client";

import { Users, Heart, Building2, TrendingUp, TreePine } from "lucide-react";
import { Category } from "../types";

const ICONS = { users: Users, heart: Heart, building2: Building2, trendingUp: TrendingUp, treePine: TreePine };

export function CategoryCard({ cat, isActive, onClick }: { cat: Category; isActive: boolean; onClick: () => void }) {
  const Icon = ICONS[cat.iconName];
  return (
    <button onClick={onClick} className="liquid-glass liquid-glass-hover text-left p-4 flex flex-col gap-3 cursor-pointer" style={isActive ? { boxShadow: "0 0 0 1px rgba(150,135,102,0.35)" } : {}}>
      <div className="icon-glass w-8 h-8 text-[#968766]"><Icon size={14} strokeWidth={1.5} /></div>
      <div>
        <p className="text-[13px] font-medium leading-tight" style={{ color: "var(--fg)" }}>{cat.title}</p>
        <p className="text-[11px] mt-1 leading-relaxed" style={{ color: "var(--jumbo)" }}>{cat.description}</p>
      </div>
      <div className="flex items-center gap-1.5 mt-auto">
        <div className="w-3 h-px bg-[#968766]/40" />
        <span className="text-[10px]" style={{ color: "var(--cloudy)" }}>{cat.count} видео</span>
      </div>
    </button>
  );
}
