import { useRef, useEffect } from 'react';

interface UseSwipeOptions {
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
  threshold?: number;
  enabled?: boolean;
}

export function useSwipe({
  onSwipeLeft,
  onSwipeRight,
  threshold = 50,
  enabled = true,
}: UseSwipeOptions) {
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  useEffect(() => {
    if (!enabled) return;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: TouchEvent) => {
      touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
      if (touchStartX.current === null || touchEndX.current === null) return;

      const distance = touchStartX.current - touchEndX.current;

      if (Math.abs(distance) > threshold) {
        if (distance > 0) {
          onSwipeLeft();
        } else {
          onSwipeRight();
        }
      }

      touchStartX.current = null;
      touchEndX.current = null;
    };

    // Mouse events for desktop testing
    const handleMouseDown = (e: MouseEvent) => {
      touchStartX.current = e.clientX;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (touchStartX.current !== null) {
        touchEndX.current = e.clientX;
      }
    };

    const handleMouseUp = () => {
      if (touchStartX.current === null || touchEndX.current === null) return;

      const distance = touchStartX.current - touchEndX.current;

      if (Math.abs(distance) > threshold) {
        if (distance > 0) {
          onSwipeLeft();
        } else {
          onSwipeRight();
        }
      }

      touchStartX.current = null;
      touchEndX.current = null;
    };

    const element = document.body;
    element.addEventListener('touchstart', handleTouchStart);
    element.addEventListener('touchmove', handleTouchMove);
    element.addEventListener('touchend', handleTouchEnd);
    element.addEventListener('mousedown', handleMouseDown);
    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseup', handleMouseUp);

    return () => {
      element.removeEventListener('touchstart', handleTouchStart);
      element.removeEventListener('touchmove', handleTouchMove);
      element.removeEventListener('touchend', handleTouchEnd);
      element.removeEventListener('mousedown', handleMouseDown);
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseup', handleMouseUp);
    };
  }, [onSwipeLeft, onSwipeRight, threshold, enabled]);
}

