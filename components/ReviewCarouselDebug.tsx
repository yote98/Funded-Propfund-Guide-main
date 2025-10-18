import React, { useState, useEffect } from 'react';
import ReviewCard from './ReviewCard';
import type { UserReview } from '../types';

interface ReviewCarouselDebugProps {
  reviews: UserReview[];
  showCount?: number;
  autoSlide?: boolean;
  slideInterval?: number;
}

const ReviewCarouselDebug: React.FC<ReviewCarouselDebugProps> = ({ 
  reviews, 
  showCount = 3, 
  autoSlide = true, 
  slideInterval = 4000 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [debugInfo, setDebugInfo] = useState({
    totalReviews: reviews.length,
    filteredReviews: reviews.filter(review => review.rating >= 4).length,
    currentIndex: 0,
    autoSlideEnabled: autoSlide,
    isHovered: false,
    slideInterval: slideInterval
  });

  // Auto-slide functionality
  useEffect(() => {
    if (!autoSlide || isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = prevIndex + showCount >= reviews.length ? 0 : prevIndex + 1;
        setDebugInfo(prev => ({ ...prev, currentIndex: newIndex }));
        return newIndex;
      });
    }, slideInterval);

    return () => clearInterval(interval);
  }, [autoSlide, isHovered, slideInterval, showCount, reviews.length]);

  const maxStart = Math.max(0, reviews.length - showCount);
  const clampedIndex = Math.min(currentIndex, maxStart);
  const visibleReviews = reviews.slice(clampedIndex, clampedIndex + showCount);
  const totalSlides = Math.ceil(reviews.length / showCount);

  return (
    <div className="relative">
      {/* Debug Information */}
      <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4 mb-4">
        <h3 className="font-bold text-yellow-800 mb-2">Review Carousel Debug Info:</h3>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div>Total Reviews: {debugInfo.totalReviews}</div>
          <div>Filtered Reviews (≥4 stars): {debugInfo.filteredReviews}</div>
          <div>Current Index: {debugInfo.currentIndex}</div>
          <div>Auto Slide: {debugInfo.autoSlideEnabled ? 'ON' : 'OFF'}</div>
          <div>Hovered: {debugInfo.isHovered ? 'YES' : 'NO'}</div>
          <div>Slide Interval: {debugInfo.slideInterval}ms</div>
          <div>Total Slides: {totalSlides}</div>
          <div>Visible Reviews: {visibleReviews.length}</div>
        </div>
      </div>
      
      <div 
        className="relative overflow-hidden"
        style={{ minHeight: '380px' }}
        onMouseEnter={() => {
          setIsHovered(true);
          setDebugInfo(prev => ({ ...prev, isHovered: true }));
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          setDebugInfo(prev => ({ ...prev, isHovered: false }));
        }}
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

      {/* Auto-play indicator */}
      {autoSlide && (
        <div className="flex justify-center mt-2">
          <div className="flex items-center space-x-2 text-sm text-slate-500">
            <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
            <span>Auto-playing reviews (every {slideInterval/1000}s)</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewCarouselDebug;
