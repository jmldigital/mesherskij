'use client';

interface QuizProgressProps {
  currentStep: number;
  totalSteps: number;
}

export function QuizProgress({ currentStep, totalSteps }: QuizProgressProps) {
  return (
    <div className="flex gap-2 mb-8">
      {Array.from({ length: Math.max(1, totalSteps) }).map((_, i) => {
        const isActive = i === currentStep - 1;
        const isCompleted = i < currentStep - 1;
        return (
          <div
            key={i}
            className={`h-2 rounded-full transition-all duration-300 ${
              isActive
                ? 'bg-white w-6'
                : isCompleted
                ? 'bg-white/60 w-2'
                : 'bg-white/20 w-2'
            }`}
          />
        );
      })}
    </div>
  );
}
