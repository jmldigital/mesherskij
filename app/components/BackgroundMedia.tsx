'use client';

import { motion, AnimatePresence } from 'framer-motion';

interface BackgroundMediaProps {
  videoUrl?: string | null;
  imageUrl?: string | null;
  isTransitioning?: boolean;
}

export function BackgroundMedia({ videoUrl, imageUrl, isTransitioning }: BackgroundMediaProps) {
  const hasMedia = Boolean(videoUrl || imageUrl);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden" style={{ backgroundColor: '#28282D' }}>
      {/* Fallback when no media */}
      {!hasMedia && (
        <div className="absolute inset-0" style={{ backgroundColor: '#28282D' }} />
      )}

      <AnimatePresence mode="wait">
        {videoUrl && (
          <motion.video
            key={videoUrl}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={videoUrl} type="video/mp4" />
          </motion.video>
        )}

        {!videoUrl && imageUrl && (
          <motion.div
            key={imageUrl}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
        )}
      </AnimatePresence>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(40, 40, 45, 0.5)' }} />

      {/* Transition overlay */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 z-10"
            style={{ backgroundColor: 'rgba(40, 40, 45, 0.7)' }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
