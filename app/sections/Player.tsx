"use client";

import { useState, useEffect, useMemo } from "react";
import { Clock, Eye } from "lucide-react";
import { VideoPlayer } from "../components/VideoPlayer";
import { VideoList } from "../components/VideoList";
import { getAllVideos, getScenarios } from "../lib/api";
import { Video, Scenario } from "../types";

export function Player({ activeCategory, searchQuery }: { activeCategory: string; searchQuery: string }) {
  const [videos, setVideos] = useState<Video[]>([]);
  const [scenarios, setScenarios] = useState<Scenario[]>([]);
  const [activeVideo, setActiveVideo] = useState<Video | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([getAllVideos(), getScenarios()])
      .then(([vids, scens]) => { setVideos(vids); setScenarios(scens); if (vids.length > 0) setActiveVideo(vids[0]); })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const filtered = useMemo(() => videos.filter((v) => {
    const mc = activeCategory === "all" || v.scenario_id === activeCategory;
    const ms = !searchQuery || (v.title?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false);
    return mc && ms;
  }), [videos, activeCategory, searchQuery]);

  const catTitle = activeCategory === "all" ? "All Scenarios" : scenarios.find((c) => c.id === activeCategory)?.title || "";
  const categoryLabel = activeVideo?.scenario_id ? scenarios.find((c) => c.id === activeVideo.scenario_id)?.title : null;

  if (loading) {
    return (
      <section id="player" className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-[1fr_340px] gap-5">
            <div className="aspect-video rounded-[1rem] liquid-glass animate-pulse" />
            <div className="liquid-glass p-4 h-64 animate-pulse" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="player" className="py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="flex items-center gap-3 mb-3"><div className="w-5 h-px bg-[#968766]" /><span className="text-caption">Video</span></div>
            <h2 className="text-headline">{catTitle}</h2>
          </div>
          <span className="text-micro">{filtered.length} videos</span>
        </div>
        {activeVideo ? (
          <div className="grid lg:grid-cols-[1fr_340px] gap-5">
            <div>
              <VideoPlayer video={activeVideo} />
              <div className="mt-5">
                <h3 className="text-title mb-1">{activeVideo.title}</h3>
                <p className="text-body">{activeVideo.subtitle}</p>
                <div className="flex items-center gap-4 mt-3 text-[12px]" style={{ color: "var(--jumbo)" }}>
                  <span className="flex items-center gap-1.5"><Eye size={13} strokeWidth={1.5} /> views</span>
                  {activeVideo.duration_sec && <span className="flex items-center gap-1.5"><Clock size={13} strokeWidth={1.5} /> {Math.floor(activeVideo.duration_sec / 60)}:{(activeVideo.duration_sec % 60).toString().padStart(2, "0")}</span>}
                  {categoryLabel && <span className="liquid-glass px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-[#968766]" style={{ backdropFilter: "blur(20px)", background: "rgba(150,135,102,0.06)" }}>{categoryLabel}</span>}
                </div>
              </div>
            </div>
            <div className="liquid-glass p-4 lg:p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[13px] font-medium" style={{ color: "var(--fg)" }}>Playlist</span>
                <span className="text-[11px]" style={{ color: "var(--cloudy)" }}>{filtered.length}</span>
              </div>
              <VideoList videos={filtered} activeId={activeVideo.id} onSelect={setActiveVideo} />
            </div>
          </div>
        ) : <div className="text-center py-20" style={{ color: "var(--cloudy)" }}>No videos available</div>}
      </div>
    </section>
  );
}
