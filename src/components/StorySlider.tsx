import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Slide } from '../data/wrappedData';
import StorySlide from './StorySlide';
import Progress from './Progress';
import Modal from './Modal';
import { useKeyNav } from '../hooks/useKeyNav';
import { useSwipe } from '../hooks/useSwipe';

interface StorySliderProps {
  slides: Slide[];
  ctaLink?: string;
  onCTAClick?: () => void;
}

export default function StorySlider({ slides, onCTAClick }: StorySliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalSlide, setModalSlide] = useState<Slide | null>(null);

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useKeyNav({
    onNext: goNext,
    onPrev: goPrev,
    enabled: modalSlide === null,
  });

  useSwipe({
    onSwipeLeft: goNext,
    onSwipeRight: goPrev,
    enabled: modalSlide === null,
  });

  const handleViewDetails = (slide: Slide) => {
    setModalSlide(slide);
  };

  const closeModal = () => {
    setModalSlide(null);
  };

  const currentSlide = slides[currentIndex];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <StorySlide
            slide={currentSlide}
            index={currentIndex}
            onViewDetails={
              currentSlide.details && currentSlide.details.length > 0
                ? () => handleViewDetails(currentSlide)
                : undefined
            }
            showCTA={currentSlide.id === 'whats-next' && !!onCTAClick}
            onCTAClick={onCTAClick}
          />
        </motion.div>
      </AnimatePresence>

      <Progress current={currentIndex} total={slides.length} variant="dots" />

      {/* Navigation buttons */}
      {currentIndex > 0 && (
        <button
          onClick={goPrev}
          className="absolute left-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 md:w-16 md:h-16 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all hover:scale-110"
          aria-label="Previous slide"
        >
          <svg
            className="w-6 h-6 md:w-8 md:h-8"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
      )}

      {currentIndex < slides.length - 1 && (
        <button
          onClick={goNext}
          className="absolute right-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 md:w-16 md:h-16 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all hover:scale-110"
          aria-label="Next slide"
        >
          <svg
            className="w-6 h-6 md:w-8 md:h-8"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      )}

      {modalSlide && (
        <Modal
          isOpen={true}
          onClose={closeModal}
          title={modalSlide.title}
          details={modalSlide.details || []}
        />
      )}
    </div>
  );
}

