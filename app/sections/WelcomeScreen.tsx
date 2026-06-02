'use client';

import { motion } from 'framer-motion';
import { LogoMonogram } from '@/app/components/Logo';

interface WelcomeScreenProps {
  onStart: () => void;
}

export function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  return (
    <motion.div
      key="welcome"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex flex-col items-center gap-8"
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
          {/* <p className="text-body text-white/70 max-w-md">
            Ответьте на несколько вопросов, и мы подберём для вас идеальное видео
          </p> */}
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
