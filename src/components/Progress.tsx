import { motion } from 'framer-motion';

interface ProgressProps {
  current: number;
  total: number;
  variant?: 'dots' | 'bar';
}

export default function Progress({ current, total, variant = 'dots' }: ProgressProps) {
  if (variant === 'bar') {
    const percentage = ((current + 1) / total) * 100;

    return (
      <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-64 md:w-96">
        <div className="h-1 bg-white/20 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-white rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex gap-2">
      {Array.from({ length: total }).map((_, index) => (
        <motion.div
          key={index}
          className={`h-2 rounded-full transition-all ${
            index === current
              ? 'w-8 bg-white'
              : 'w-2 bg-white/40'
          }`}
          initial={{ scale: 0.8, opacity: 0.5 }}
          animate={{
            scale: index === current ? 1 : 0.8,
            opacity: index === current ? 1 : 0.4,
          }}
          transition={{ duration: 0.2 }}
        />
      ))}
    </div>
  );
}

