'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2 } from 'lucide-react';

function fmt(s: number) {
  if (!isFinite(s)) return '0:00';
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, '0')}`;
}

interface ResultPlayerProps {
  videoUrl: string;
  posterUrl?: string | null;
  title?: string | null;
}

export function ResultPlayer({ videoUrl, posterUrl, title }: ResultPlayerProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [muted, setMuted] = useState(false);
  const [show, setShow] = useState(true);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const [buf, setBuf] = useState(0);

  const reset = useCallback(() => {
    setShow(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      if (playing) setShow(false);
    }, 4000);
  }, [playing]);

  useEffect(() => {
    reset();
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [playing, reset]);

  useEffect(() => {
    if (ref.current) {
      ref.current.currentTime = 0;
      setProgress(0);
      setPlaying(false);
    }
  }, [videoUrl]);

  // Автостарт после готовности плеера
  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const handleCanPlay = () => {
      video.play().then(() => setPlaying(true)).catch(() => {});
    };
    video.addEventListener('canplay', handleCanPlay);
    return () => video.removeEventListener('canplay', handleCanPlay);
  }, [videoUrl]);

  const toggle = () => {
    if (!ref.current) return;
    playing ? ref.current.pause() : ref.current.play();
    setPlaying(!playing);
    reset();
  };

  return (
    <div
      className="relative w-full aspect-video rounded-[1rem] overflow-hidden bg-black/80 group"
      onMouseMove={reset}
      onMouseLeave={() => playing && setShow(false)}
    >
      <video
        ref={ref}
        src={videoUrl}
        poster={posterUrl || undefined}
        className="w-full h-full object-cover"
        onTimeUpdate={() => {
          if (!ref.current) return;
          setProgress(ref.current.currentTime);
          if (ref.current.buffered.length)
            setBuf(ref.current.buffered.end(0));
        }}
        onLoadedMetadata={() => setDuration(ref.current?.duration || 0)}
        onClick={toggle}
        playsInline
        preload="metadata"
      />

      {!playing && (
        <button onClick={toggle} className="absolute inset-0 flex items-center justify-center z-10">
          <div className="liquid-glass-strong w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300">
            <Play size={28} fill="white" className="text-white ml-1" />
          </div>
        </button>
      )}

      {playing && progress === 0 && (
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <div className="w-8 h-8 border-2 border-white/20 border-t-[#968766] rounded-full animate-spin" />
        </div>
      )}

      <div
        className={`absolute inset-x-0 bottom-0 transition-all duration-500 ${
          show ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="liquid-glass-dark mx-3 mb-3 px-5 pt-4 pb-3 rounded-[1rem]">
          <div
            className="mb-4 relative progress-glass-track"
            onClick={(e) => {
              const r = e.currentTarget.getBoundingClientRect();
              const p = (e.clientX - r.left) / r.width;
              const t = p * duration;
              if (ref.current) {
                ref.current.currentTime = t;
                setProgress(t);
              }
              reset();
            }}
          >
            <div
              className="absolute inset-y-0 left-0 rounded-full bg-white/10"
              style={{ width: `${(buf / (duration || 1)) * 100}%` }}
            />
            <div
              className="progress-glass-fill"
              style={{ width: `${(progress / (duration || 1)) * 100}%` }}
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                onClick={toggle}
                className="w-8 h-8 flex items-center justify-center text-white/90 hover:text-white transition-colors"
              >
                {playing ? (
                  <Pause size={18} fill="white" />
                ) : (
                  <Play size={18} fill="white" className="ml-0.5" />
                )}
              </button>
              <span className="text-white/50 text-xs font-mono ml-2 tracking-wide">
                {fmt(progress)}
                <span className="text-white/25"> / {fmt(duration)}</span>
              </span>
            </div>
            <div className="flex items-center gap-1">
              <div className="flex items-center gap-1 group/vol">
                <button
                  onClick={() => {
                    if (!ref.current) return;
                    ref.current.muted = !muted;
                    setMuted(!muted);
                    reset();
                  }}
                  className="w-8 h-8 flex items-center justify-center text-white/50 hover:text-white transition-colors"
                >
                  {muted ? <VolumeX size={15} /> : <Volume2 size={15} />}
                </button>
                <div className="w-0 group-hover/vol:w-16 overflow-hidden transition-all duration-300">
                  <div
                    className="w-14 mx-1 h-1 rounded-full bg-white/10 relative cursor-pointer"
                    onClick={(e) => {
                      const r = e.currentTarget.getBoundingClientRect();
                      const v = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
                      setVolume(v);
                      if (ref.current) {
                        ref.current.volume = v;
                        ref.current.muted = false;
                      }
                      setMuted(false);
                    }}
                  >
                    <div
                      className="absolute inset-y-0 left-0 rounded-full bg-[#968766]"
                      style={{ width: `${(muted ? 0 : volume) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
              <button
                onClick={() => ref.current?.parentElement?.requestFullscreen()}
                className="w-8 h-8 flex items-center justify-center text-white/40 hover:text-white/80 transition-colors"
              >
                <Maximize2 size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {title && (
        <div className="absolute top-4 left-4 z-10">
          <div className="liquid-glass px-3 py-1.5 rounded-full flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#968766]" />
            <span className="text-[11px] font-medium tracking-wide text-white">{title}</span>
          </div>
        </div>
      )}
    </div>
  );
}
