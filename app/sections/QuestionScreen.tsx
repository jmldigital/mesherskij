'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { QuizNode } from '@/app/types';
import { QuizOptionCard } from '@/app/components/QuizOptionCard';
import { QuizProgress } from '@/app/components/QuizProgress';
import { QuizNavigation } from '@/app/components/QuizNavigation';

interface QuestionScreenProps {
  node: QuizNode;
  options: QuizNode[];
  path: QuizNode[];
  onSelect: (nodeId: string) => void;
  onBack: () => void;
  onReset: () => void;
}

export function QuestionScreen({
  node,
  options,
  path,
  onSelect,
  onBack,
  onReset,
}: QuestionScreenProps) {
  return (
    <motion.div
      key={node.id}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6"
    >
      <QuizProgress currentStep={path.length} totalSteps={path.length + 1} />

      <h1 className="text-display text-center mb-2 text-white">
        {node.label}
      </h1>
      {node.description && (
        <p className="text-body text-center mb-8 text-white/70">
          {node.description}
        </p>
      )}

      <div
        className={`grid gap-4 max-w-5xl w-full ${
          options.length <= 2
            ? 'grid-cols-1 md:grid-cols-2'
            : options.length === 3
            ? 'grid-cols-1 md:grid-cols-3'
            : options.length === 4
            ? 'grid-cols-2 md:grid-cols-4'
            : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-5'
        }`}
      >
        <AnimatePresence mode="popLayout">
          {options.map((option, i) => (
            <QuizOptionCard
              key={option.id}
              node={option}
              index={i}
              onSelect={() => onSelect(option.id)}
            />
          ))}
        </AnimatePresence>
      </div>

      <QuizNavigation
        canGoBack={path.length > 1}
        onBack={onBack}
        onReset={onReset}
      />
    </motion.div>
  );
}
