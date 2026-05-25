"use client";

import { useState, useMemo } from "react";
import { Clock, Eye } from "lucide-react";
import { VideoPlayer } from "../components/VideoPlayer";
import { VideoList } from "../components/VideoList";
import { VIDEOS, CATEGORIES } from "../data/videos";

export function Player({ activeCategory, searchQuery }: { activeCategory: string; searchQuery: string }) {
  const [activeVideo, setActiveVideo] = useState(VIDEOS[0]);

  const filtered = useMemo(() => VIDEOS.filter((v) => {
    const mc = activeCategory === "all" || v.category === activeCategory;
    const ms = !searchQuery || v.title.toLowerCase().includes(searchQuery.toLowerCase());
    return mc && ms;
  }), [activeCategory, searchQuery]);

  const catTitle = activeCategory === "all" ? "Все сценарии" : CATEGORIES.find((c) => c.id === activeCategory)?.title || "";
  const categoryLabel = CATEGORIES.find((c) => c.id === activeVideo.category)?.title;

  return (
    <section id="player" className="py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="flex items-center gap-3 mb-3"><div className="w-5 h-px bg-[#968766]" /><span className="text-caption">Видео</span></div>
            <h2 className="text-headline">{catTitle}</h2>
          </div>
          <span className="text-micro">{filtered.length} видео</span>
        </div>
        <div className="grid lg:grid-cols-[1fr_340px] gap-5">
          <div>
            <VideoPlayer video={activeVideo} />
            <div className="mt-5">
              <h3 className="text-title mb-1">{activeVideo.title}</h3>
              <p className="text-body">{activeVideo.description}</p>
              <div className="flex items-center gap-4 mt-3 text-[12px]" style={{ color: "var(--jumbo)" }}>
                <span className="flex items-center gap-1.5"><Eye size={13} strokeWidth={1.5} /> {activeVideo.views}</span>
                <span className="flex items-center gap-1.5"><Clock size={13} strokeWidth={1.5} /> {activeVideo.duration}</span>
                {categoryLabel && <span className="liquid-glass px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-[#968766]" style={{ backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", background: "rgba(150,135,102,0.06)" }}>{categoryLabel}</span>}
              </div>
            </div>
          </div>
          <div className="liquid-glass p-4 lg:p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[13px] font-medium" style={{ color: "var(--fg)" }}>Плейлист</span>
              <span className="text-[11px]" style={{ color: "var(--cloudy)" }}>{filtered.length}</span>
            </div>
            <VideoList videos={filtered} activeId={activeVideo.id} onSelect={setActiveVideo} />
          </div>
        </div>
      </div>
    </section>
  );
}
