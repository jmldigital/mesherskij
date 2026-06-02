'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useQuizState } from '@/app/hooks/useQuizState';
import { WelcomeScreen } from '@/app/sections/WelcomeScreen';
import { QuestionScreen } from '@/app/sections/QuestionScreen';
import { ResultScreen } from '@/app/sections/ResultScreen';
import { BackgroundMedia } from '@/app/components/BackgroundMedia';

export default function Home() {
  const {
    currentNode,
    options,
    path,
    isComplete,
    result,
    isLoading,
    startQuiz,
    selectOption,
    goBack,
    reset,
  } = useQuizState();

  // Определяем текущий экран (3 типа, не фиксированное количество)
  const screenType = !currentNode
    ? 'welcome'
    : isComplete
    ? 'result'
    : 'question';

  return (
    <main className="relative min-h-screen overflow-hidden" style={{ backgroundColor: 'var(--bg)' }}>
      {/* Фоновое видео/изображение — меняется при смене узла */}
      <BackgroundMedia
        videoUrl={currentNode?.video_url}
        imageUrl={currentNode?.image_url}
        isTransitioning={isLoading}
      />

      {/* Контент с анимацией переходов */}
      <AnimatePresence mode="wait">
        {screenType === 'welcome' && (
          <motion.div
            key="welcome"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <WelcomeScreen onStart={startQuiz} />
          </motion.div>
        )}

        {screenType === 'question' && currentNode && (
          <QuestionScreen
            key={currentNode.id}
            node={currentNode}
            options={options}
            path={path}
            onSelect={selectOption}
            onBack={goBack}
            onReset={reset}
          />
        )}

        {screenType === 'result' && result && (
          <motion.div
            key="result"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <ResultScreen
              result={result}
              path={path}
              onReset={reset}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
