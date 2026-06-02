'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { QuizNode } from '@/app/types';
import { getIconUrl } from '@/app/lib/api';

interface QuizOptionCardProps {
  node: QuizNode;
  index: number;
  onSelect: () => void;
}

function resolveIconUrl(icon: string | null): string | null {
  if (!icon) return null;
  if (icon.startsWith('http')) return icon;
  return getIconUrl(icon);
}

export function QuizOptionCard({ node, index, onSelect }: QuizOptionCardProps) {
  const [iconError, setIconError] = useState(false);
  const iconUrl = resolveIconUrl(node.icon);

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
      {iconUrl && !iconError && (
        <div className="icon-glass w-8 h-8 rounded-full flex items-center justify-center">
          <img
            src={iconUrl}
            alt={node.label}
            className="w-5 h-5 object-contain"
            onError={() => setIconError(true)}
          />
        </div>
      )}
      {iconError && node.icon && (
        <span className="text-5xl">{node.icon}</span>
      )}
      <span className="text-title text-center text-white">{node.label}</span>
      {node.description && (
        <span className="text-caption text-center text-white/60">{node.description}</span>
      )}
    </motion.button>
  );
}
