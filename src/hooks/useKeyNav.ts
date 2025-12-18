import { useEffect } from 'react';

interface UseKeyNavOptions {
  onNext: () => void;
  onPrev: () => void;
  enabled?: boolean;
}

export function useKeyNav({ onNext, onPrev, enabled = true }: UseKeyNavOptions) {
  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        onNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        onPrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onNext, onPrev, enabled]);
}

