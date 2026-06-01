'use client';

import { motion } from 'framer-motion';
import { QuizNode } from '@/app/types';

interface QuizOptionCardProps {
  node: QuizNode;
  index: number;
  onSelect: () => void;
}

export function QuizOptionCard({ node, index, onSelect }: QuizOptionCardProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onSelect}
      className="liquid-glass rounded-2xl p-6 flex flex-col items-center justify-center gap-4 cursor-pointer min-h-[180px] transition-shadow hover:shadow-lg"
    >
      {node.icon && (
        <span className="text-5xl">{node.icon}</span>
      )}
      <span className="text-title text-center text-white">{node.label}</span>
      {node.description && (
        <span className="text-caption text-center text-white/60">{node.description}</span>
      )}
    </motion.button>
  );
}
