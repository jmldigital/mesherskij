'use client';

import { motion } from 'framer-motion';

interface QuizNavigationProps {
  canGoBack: boolean;
  onBack: () => void;
  onReset: () => void;
}

export function QuizNavigation({ canGoBack, onBack, onReset }: QuizNavigationProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.3 }}
      className="flex items-center gap-4 mt-8"
    >
      {canGoBack && (
        <button
          onClick={onBack}
          className="btn-liquid px-5 py-2.5 rounded-full text-sm font-medium"
        >
          Назад
        </button>
      )}
      <button
        onClick={onReset}
        className="text-white/50 hover:text-white text-sm transition-colors"
      >
        В начало
      </button>
    </motion.div>
  );
}
