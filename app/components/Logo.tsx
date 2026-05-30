"use client";

export function LogoMonogram({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none" className="flex-shrink-0">
      <circle cx="18" cy="18" r="17.5" stroke="#968766" strokeWidth="0.5" fill="none" opacity="0.4" />
      <circle cx="18" cy="18" r="14" fill="#968766" opacity="0.9" />
      <text x="18" y="22" textAnchor="middle" fontFamily="Inter, Helvetica Neue, Arial" fontWeight="300" fontSize="14" letterSpacing="1" fill="white">M</text>
    </svg>
  );
}

export function LogoText({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <svg viewBox="0 0 200 28" className="h-5 md:h-6" fill="none">
        <text x="0" y="22" fontFamily="Inter, Helvetica Neue, Arial" fontWeight="300" fontSize="22" letterSpacing="6" fill="currentColor">M</text>
      </svg>
      <div className="flex items-center gap-2 mt-1">
        <div className="w-8 h-px bg-current opacity-30" />
        <span className="text-[9px] font-medium tracking-[0.25em] uppercase opacity-60" style={{ fontFamily: "var(--font-brand)" }}>1</span>
        <div className="w-8 h-px bg-current opacity-30" />
      </div>
    </div>
  );
}
