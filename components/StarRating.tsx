
import React from 'react';

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
  const starPath = "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.448a1 1 0 00-.364 1.118l1.287 3.955c.3.921-.755 1.688-1.54 1.118l-3.368-2.448a1 1 0 00-1.175 0l-3.368 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.955a1 1 0 00-.364-1.118L2.05 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z";

  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, i) => (
        <svg key={`full-${i}`} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
          <path d={starPath} />
        </svg>
      ))}
      {halfStar && (
        <div className="relative">
          <svg className="w-4 h-4 text-slate-300" fill="currentColor" viewBox="0 0 20 20">
            <path d={starPath} />
          </svg>
          <div className="absolute top-0 left-0 h-full w-1/2 overflow-hidden">
            <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
              <path d={starPath} />
            </svg>
          </div>
        </div>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <svg key={`empty-${i}`} className="w-4 h-4 text-slate-300" fill="currentColor" viewBox="0 0 20 20">
          <path d={starPath} />
        </svg>
      ))}
    </div>
  );
};

export default StarRating;
