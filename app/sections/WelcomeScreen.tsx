'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LogoMonogram } from '@/app/components/Logo';

interface WelcomeScreenProps {
  onStart: () => void;
}

export function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const targetX = useRef(0);
  const targetY = useRef(0);
  const currentX = useRef(0);
  const currentY = useRef(0);
  const rafId = useRef<number>(0);

  useEffect(() => {
    // Инициализируем центром экрана
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    targetX.current = cx;
    targetY.current = cy;
    currentX.current = cx;
    currentY.current = cy;

    const animate = () => {
      currentX.current += (targetX.current - currentX.current) * 0.08;
      currentY.current += (targetY.current - currentY.current) * 0.08;

      if (overlayRef.current) {
        overlayRef.current.style.background =
          `radial-gradient(circle 280px at ${currentX.current}px ${currentY.current}px, transparent 0%, rgba(40,40,45,0.15) 18%, rgba(40,40,45,0.55) 38%, #28282D 62%)`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId.current);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    targetX.current = e.clientX - rect.left;
    targetY.current = e.clientY - rect.top;
  };

  return (
    <motion.div
      key="welcome"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background image layer — шишка на сосне */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/img-006.jpg)' }}
      />

      {/* Flashlight overlay — Anthracite с прозрачной дыркой у курсора */}
      <div
        ref={overlayRef}
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            'radial-gradient(circle 280px at 50% 50%, transparent 0%, rgba(40,40,45,0.15) 18%, rgba(40,40,45,0.55) 38%, #28282D 62%)',
        }}
      />

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="relative z-10 flex flex-col items-center gap-8"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="logo-pulse">
            <LogoMonogram size={64} />
          </div>
        </motion.div>

        <div className="text-center">
          <img src="/logo-text.svg" alt="Logo" className="w-96 h-auto mx-auto" />
          <h1 className="text-display text-white mb-4"></h1>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onStart}
          className="btn-liquid-filled px-8 py-4 rounded-full text-lg font-medium mt-4"
        >
          Начать
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
