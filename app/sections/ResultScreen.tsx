'use client';

import { motion } from 'framer-motion';
import { QuizResult, QuizNode } from '@/app/types';
import { ResultPlayer } from '@/app/components/ResultPlayer';

interface ResultScreenProps {
  result: QuizResult;
  path: QuizNode[];
  onReset: () => void;
}

export function ResultScreen({ result, path, onReset }: ResultScreenProps) {
  return (
    <motion.div
      key="result"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6"
    >
      <div className="w-full max-w-4xl">
        {result.title && (
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="text-headline text-center text-white mb-2"
          >
            {result.title}
          </motion.h1>
        )}

        {result.description && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="text-body text-center text-white/70 mb-6"
          >
            {result.description}
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <ResultPlayer
            videoUrl={result.video_url}
            posterUrl={result.poster_url}
            title={result.path_title}
          />
        </motion.div>

        {path.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="mt-6 text-center"
          >
            <p className="text-caption text-white/50 mb-4">
              Ваш путь: {path.map((n) => n.label).join(' → ')}
            </p>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.4 }}
          className="flex justify-center mt-4"
        >
          <button
            onClick={onReset}
            className="btn-liquid-filled px-6 py-3 rounded-full text-sm font-medium"
          >
            Пройти заново
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}
