import React from 'react';

interface ReviewSummaryProps {
  totalReviews: number;
  averageRating: number;
  ratingDistribution: {
    5: number;
    4: number;
    3: number;
    2: number;
    1: number;
  };
}

const ReviewSummary: React.FC<ReviewSummaryProps> = ({ 
  totalReviews, 
  averageRating, 
  ratingDistribution 
}) => {
  const renderStars = (rating: number, size: 'sm' | 'md' | 'lg' = 'md') => {
    const sizeClasses = {
      sm: 'w-3 h-3',
      md: 'w-4 h-4',
      lg: 'w-5 h-5'
    };

    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`${sizeClasses[size]} ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  const getRatingPercentage = (count: number) => {
    return totalReviews > 0 ? Math.round((count / totalReviews) * 100) : 0;
  };

  const getRatingColor = (rating: number) => {
    if (rating >= 4.5) return 'text-green-600';
    if (rating >= 3.5) return 'text-yellow-600';
    if (rating >= 2.5) return 'text-orange-600';
    return 'text-red-600';
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
      <h3 className="text-xl font-bold text-slate-900 mb-6">Customer Reviews</h3>
      
      {/* Overall Rating */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <div className="text-center">
            <div className="text-4xl font-bold text-slate-900">{averageRating}</div>
            <div className="flex items-center space-x-1">
              {renderStars(averageRating, 'lg')}
            </div>
            <div className="text-sm text-slate-500 mt-1">
              Based on {totalReviews} review{totalReviews !== 1 ? 's' : ''}
            </div>
          </div>
        </div>
        
        <div className="text-right">
          <div className={`text-2xl font-bold ${getRatingColor(averageRating)}`}>
            {averageRating}/5.0
          </div>
          <div className="text-sm text-slate-500">
            {averageRating >= 4.5 ? 'Excellent' : 
             averageRating >= 3.5 ? 'Good' : 
             averageRating >= 2.5 ? 'Average' : 'Poor'}
          </div>
        </div>
      </div>

      {/* Rating Breakdown */}
      <div className="space-y-3">
        {[5, 4, 3, 2, 1].map(rating => {
          const count = ratingDistribution[rating as keyof typeof ratingDistribution];
          const percentage = getRatingPercentage(count);
          
          return (
            <div key={rating} className="flex items-center space-x-3">
              <div className="flex items-center space-x-1 w-8">
                <span className="text-sm font-medium text-slate-700">{rating}</span>
                <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              
              <div className="flex-1 bg-slate-100 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-teal-500 to-slate-900 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${percentage}%` }}
                />
              </div>
              
              <div className="text-sm text-slate-600 w-12 text-right">
                {count}
              </div>
            </div>
          );
        })}
      </div>

      {/* Summary Stats */}
      <div className="mt-6 pt-6 border-t border-slate-100">
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-slate-900">{totalReviews}</div>
            <div className="text-sm text-slate-500">Total Reviews</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-slate-900">
              {totalReviews > 0 ? Math.round((ratingDistribution[5] + ratingDistribution[4]) / totalReviews * 100) : 0}%
            </div>
            <div className="text-sm text-slate-500">Positive Reviews</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSummary;
