import { Play, PlayCircle, Heart, TreePine } from "lucide-react";
import { LogoMonogram } from "../components/Logo";
import { getVideoUrl } from "../lib/api";

const HERO_VIDEO_PATH = "forest.mp4";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10 px-4">
      <div className="absolute inset-0">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover" preload="auto">
          <source src={getVideoUrl(HERO_VIDEO_PATH)} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg)]/40 via-transparent to-[var(--bg)]" />
      </div>
      <div className="relative w-full max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[120px] md:auto-rows-[140px]">

          <div className="col-span-2 row-span-2 liquid-glass-strong liquid-glass-strong-hover flex flex-col justify-between p-6 md:p-8 cursor-default">
            <div>
              <div className="flex items-center gap-2 mb-4"><div className="w-5 h-px bg-[#968766]" /><span className="text-caption">Videoguide</span></div>
              <h1 className="text-display mb-2">Meshchersky<span className="text-[#968766]"> 1</span></h1>
              <p className="text-body text-sm max-w-xs">A home among pines with hotel service. Nature at arm&apos;s length.</p>
            </div>
            <div className="flex items-center gap-3 mt-4">
              <a href="#player" className="btn-liquid btn-liquid-filled text-xs"><PlayCircle size={16} />Watch</a>
              <a href="#categories" className="btn-liquid text-xs">Scenarios</a>
            </div>
          </div>

          <a href="#player" className="col-span-1 row-span-2 liquid-glass liquid-glass-hover relative overflow-hidden cursor-pointer group block">
            <img src="/cat-family.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/60 to-transparent" />
            <div className="relative h-full flex flex-col justify-end p-4">
              <div className="w-10 h-10 rounded-full liquid-glass-strong flex items-center justify-center mb-3"><Play size={16} fill="white" className="text-white ml-0.5" /></div>
              <p className="text-[11px] font-medium text-white/90 tracking-wide">Complex Overview</p>
              <p className="text-[10px] text-white/50 mt-0.5">Forest footage</p>
            </div>
          </a>

          <div className="col-span-1 row-span-1 liquid-glass flex flex-col justify-center items-center p-4 cursor-default">
            <p className="text-2xl md:text-3xl font-light tracking-tight" style={{ color: "var(--fg)" }}>6</p>
            <p className="text-micro mt-1">videos</p>
          </div>
          <div className="col-span-1 row-span-1 liquid-glass flex flex-col justify-center items-center p-4 cursor-default">
            <p className="text-2xl md:text-3xl font-light tracking-tight" style={{ color: "var(--fg)" }}>46K</p>
            <p className="text-micro mt-1">views</p>
          </div>

          <a href="#player" className="col-span-1 row-span-1 liquid-glass liquid-glass-hover flex flex-col justify-center p-4 cursor-pointer">
            <div className="icon-glass w-7 h-7 mb-2 text-[#968766]"><Heart size={13} strokeWidth={1.5} /></div>
            <p className="text-[11px] font-medium" style={{ color: "var(--fg)" }}>SPA &amp; Wellness</p>
          </a>
          <a href="#player" className="col-span-1 row-span-1 liquid-glass liquid-glass-hover flex flex-col justify-center p-4 cursor-pointer">
            <div className="icon-glass w-7 h-7 mb-2 text-[#968766]"><TreePine size={13} strokeWidth={1.5} /></div>
            <p className="text-[11px] font-medium" style={{ color: "var(--fg)" }}>Architecture</p>
          </a>

          <div className="col-span-2 md:col-span-1 row-span-1 liquid-glass flex items-center gap-3 p-4 cursor-default">
            <LogoMonogram size={28} />
            <div>
              <p className="text-[11px] font-medium" style={{ color: "var(--fg)" }}>Meshchersky Park</p>
              <p className="text-[10px]" style={{ color: "var(--jumbo)" }}>Aesthetics of silence</p>
            </div>
          </div>

          <a href="#player" className="col-span-1 row-span-1 liquid-glass liquid-glass-hover relative overflow-hidden cursor-pointer block">
            <img src="/cat-architecture.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-40 hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/50 to-transparent" />
            <div className="relative h-full flex items-end p-3"><p className="text-[11px] font-medium text-white/90">Family</p></div>
          </a>
        </div>
      </div>
    </section>
  );
}
