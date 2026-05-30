"use client";

import { Play } from "lucide-react";
import { Video } from "../types";
import { getThumbnailUrl } from "../lib/api";

export function VideoList({ videos, activeId, onSelect }: { videos: Video[]; activeId: string; onSelect: (v: Video) => void }) {
  return (
    <div className="space-y-1 max-h-[440px] overflow-y-auto pr-1">
      {videos.map((v) => {
        const thumb = v.thumbnail_path ? getThumbnailUrl(v.thumbnail_path) : null;
        return (
          <button key={v.id} onClick={() => onSelect(v)}
            className="w-full text-left flex items-center gap-3.5 p-2.5 rounded-[0.625rem] transition-all duration-200"
            style={{ background: activeId === v.id ? "rgba(150,135,102,0.08)" : "transparent" }}
            onMouseEnter={(e) => { if (activeId !== v.id) e.currentTarget.style.background = "rgba(255,255,255,0.05)"; }}
            onMouseLeave={(e) => { if (activeId !== v.id) e.currentTarget.style.background = "transparent"; }}>
            <div className="relative w-20 h-12 rounded-[0.625rem] overflow-hidden flex-shrink-0">
              {thumb ? <img src={thumb} alt="" className="w-full h-full object-cover" /> : <div className="w-full h-full bg-[var(--cloudy)]/20" />}
              <div className="absolute inset-0 flex items-center justify-center bg-black/25">
                {activeId === v.id ? (
                  <div className="w-4 h-4 rounded-full bg-[#968766] flex items-center justify-center"><div className="w-1 h-1 bg-white rounded-sm" /></div>
                ) : <Play size={10} fill="white" className="text-white ml-0.5" />}
              </div>
              {v.duration_sec && (
                <div className="absolute bottom-0.5 right-0.5 px-1 py-px rounded bg-black/60 text-[9px] text-white/90 font-mono">
                  {Math.floor(v.duration_sec / 60)}:{(v.duration_sec % 60).toString().padStart(2, "0")}
                </div>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-[12px] font-medium leading-tight mb-0.5 truncate" style={{ color: activeId === v.id ? "var(--granite)" : "var(--fg)" }}>{v.title}</h4>
              <p className="text-[11px] truncate" style={{ color: "var(--cloudy)" }}>{v.subtitle}</p>
            </div>
          </button>
        );
      })}
      {videos.length === 0 && <div className="text-center py-10 text-[13px]" style={{ color: "var(--cloudy)" }}>No videos found</div>}
    </div>
  );
}
