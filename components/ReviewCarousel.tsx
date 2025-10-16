import React, { useState, useEffect } from 'react';
import ReviewCard from './ReviewCard';
import type { UserReview } from '../types';

interface ReviewCarouselProps {
  reviews: UserReview[];
  showCount?: number;
  autoSlide?: boolean;
  slideInterval?: number;
}

const ReviewCarousel: React.FC<ReviewCarouselProps> = ({ 
  reviews, 
  showCount = 3, 
  autoSlide = true, 
  slideInterval = 5000 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-slide functionality
  useEffect(() => {
    if (!autoSlide || isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex + showCount >= reviews.length ? 0 : prevIndex + 1
      );
    }, slideInterval);

    return () => clearInterval(interval);
  }, [autoSlide, isHovered, slideInterval, showCount, reviews.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + showCount >= reviews.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.max(0, reviews.length - showCount) : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const maxStart = Math.max(0, reviews.length - showCount);
  const clampedIndex = Math.min(currentIndex, maxStart);
  const visibleReviews = reviews.slice(clampedIndex, clampedIndex + showCount);
  const totalSlides = Math.ceil(reviews.length / showCount);

  return (
    <div className="relative">
      {/* Carousel Container */}
      <div 
        className="relative overflow-hidden"
        style={{ minHeight: '380px' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div 
          className="flex items-stretch"
          style={{ width: '100%' }}
        >
          {visibleReviews.map((review) => (
            <div 
              key={review.id} 
              className="flex-shrink-0 px-2 h-full"
              style={{ width: `${100 / showCount}%` }}
            >
              <div className="h-full flex flex-col min-h-[320px]">
                <ReviewCard review={review} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white border border-slate-200 rounded-full shadow-lg flex items-center justify-center hover:bg-slate-50 transition-colors duration-200 z-10"
        aria-label="Previous reviews"
      >
        <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white border border-slate-200 rounded-full shadow-lg flex items-center justify-center hover:bg-slate-50 transition-colors duration-200 z-10"
        aria-label="Next reviews"
      >
        <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: totalSlides }, (_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              index === Math.floor(currentIndex / showCount)
                ? 'bg-teal-500'
                : 'bg-slate-300 hover:bg-slate-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Auto-play indicator */}
      {autoSlide && (
        <div className="flex justify-center mt-2">
          <div className="flex items-center space-x-2 text-sm text-slate-500">
            <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
            <span>Auto-playing reviews</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewCarousel;
