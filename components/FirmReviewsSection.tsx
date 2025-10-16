import React, { useState, useMemo } from 'react';
import type { UserReview, FirmId } from '../types';
import { userReviews } from '../services/reviewData';
import ReviewCard from './ReviewCard';
import ReviewSummary from './ReviewSummary';

interface FirmReviewsSectionProps {
  firmId: FirmId;
  firmName: string;
}

const FirmReviewsSection: React.FC<FirmReviewsSectionProps> = ({ firmId, firmName }) => {
  const [showAllReviews, setShowAllReviews] = useState(false);
  
  // Get reviews for this specific firm
  const firmReviews = useMemo(() => {
    console.log('Available firm IDs in reviews:', [...new Set(userReviews.map(r => r.firmId))]);
    console.log(`Looking for reviews with firmId: "${firmId}"`);
    const reviews = userReviews.filter(review => review.firmId === firmId);
    console.log(`Found ${reviews.length} reviews for ${firmId}:`, reviews);
    return reviews;
  }, [firmId]);

  // Calculate review statistics
  const reviewStats = useMemo(() => {
    if (firmReviews.length === 0) {
      return {
        totalReviews: 0,
        averageRating: 0,
        ratingDistribution: { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 },
        positivePercentage: 0
      };
    }

    const totalReviews = firmReviews.length;
    const averageRating = firmReviews.reduce((sum, review) => sum + review.rating, 0) / totalReviews;
    
    const ratingDistribution = firmReviews.reduce((dist, review) => {
      dist[review.rating as keyof typeof dist]++;
      return dist;
    }, { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 });

    const positiveReviews = firmReviews.filter(review => review.rating >= 4).length;
    const positivePercentage = Math.round((positiveReviews / totalReviews) * 100);

    return {
      totalReviews,
      averageRating: Math.round(averageRating * 10) / 10,
      ratingDistribution,
      positivePercentage
    };
  }, [firmReviews]);

  const displayedReviews = showAllReviews ? firmReviews : firmReviews.slice(0, 3);

  if (firmReviews.length === 0) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Customer Reviews</h3>
        <div className="text-xs text-gray-500 mb-2">Debug: Firm ID: {firmId} | Reviews found: {firmReviews.length}</div>
        <div className="text-center py-8">
          <div className="text-4xl font-bold text-gray-300 mb-2">0</div>
          <div className="text-red-500 font-medium mb-1">0/5.0 Poor</div>
          <div className="flex justify-center mb-4">
            {Array.from({ length: 5 }, (_, i) => (
              <svg key={i} className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-gray-500 mb-4">Based on 0 reviews</p>
          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map(rating => (
              <div key={rating} className="flex items-center">
                <span className="text-sm text-gray-600 w-8">{rating} ★</span>
                <div className="flex-1 mx-2">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gray-300 h-2 rounded-full" style={{ width: '0%' }}></div>
                  </div>
                </div>
                <span className="text-sm text-gray-500 w-8">0</span>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4 text-sm text-gray-600">
            <span>0 Total Reviews</span>
            <span>0% Positive Reviews</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="text-xs text-gray-500 mb-2">Debug: Firm ID: {firmId} | Reviews found: {firmReviews.length}</div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Customer Reviews</h3>
        <button
          onClick={() => setShowAllReviews(!showAllReviews)}
          className="text-blue-600 hover:text-blue-800 text-sm font-medium"
        >
          {showAllReviews ? 'Show Less' : 'View All'}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Review Summary */}
        <div>
          <div className="flex items-center mb-4">
            <div className="text-3xl font-bold text-gray-900 mr-3">
              {reviewStats.averageRating}
            </div>
            <div>
              <div className="flex items-center">
                <span className="text-red-500 font-medium mr-2">
                  {reviewStats.averageRating}/5.0
                </span>
                <span className={`font-medium ${
                  reviewStats.averageRating >= 4.5 ? 'text-green-600' :
                  reviewStats.averageRating >= 4 ? 'text-blue-600' :
                  reviewStats.averageRating >= 3 ? 'text-yellow-600' :
                  'text-red-500'
                }`}>
                  {reviewStats.averageRating >= 4.5 ? 'Excellent' :
                   reviewStats.averageRating >= 4 ? 'Good' :
                   reviewStats.averageRating >= 3 ? 'Average' :
                   'Poor'}
                </span>
              </div>
              <div className="flex items-center mt-1">
                {Array.from({ length: 5 }, (_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(reviewStats.averageRating) ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-500 text-sm mt-1">
                Based on {reviewStats.totalReviews} review{reviewStats.totalReviews !== 1 ? 's' : ''}
              </p>
            </div>
          </div>

          {/* Rating Distribution */}
          <div className="space-y-2 mb-4">
            {[5, 4, 3, 2, 1].map(rating => {
              const count = reviewStats.ratingDistribution[rating as keyof typeof reviewStats.ratingDistribution];
              const percentage = reviewStats.totalReviews > 0 ? (count / reviewStats.totalReviews) * 100 : 0;
              
              return (
                <div key={rating} className="flex items-center">
                  <span className="text-sm text-gray-600 w-8">{rating} ★</span>
                  <div className="flex-1 mx-2">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-500 h-2 rounded-full transition-all duration-300" 
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500 w-8">{count}</span>
                </div>
              );
            })}
          </div>

          {/* Overall Statistics */}
          <div className="flex justify-between text-sm text-gray-600 pt-2 border-t">
            <span>{reviewStats.totalReviews} Total Reviews</span>
            <span>{reviewStats.positivePercentage}% Positive Reviews</span>
          </div>
        </div>

        {/* Recent Reviews */}
        <div>
          <h4 className="text-md font-medium text-gray-900 mb-4">Recent Reviews</h4>
          <div className="space-y-4">
            {displayedReviews.map((review) => (
              <div key={review.id} className="border border-gray-100 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                      {review.userName.split(' ').map(n => n[0]).join('').toUpperCase()}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2">
                      <p className="text-sm font-medium text-gray-900">{review.userName}</p>
                      {review.verified && (
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                          Verified Trader
                        </span>
                      )}
                    </div>
                    <div className="flex items-center mt-1">
                      {Array.from({ length: 5 }, (_, i) => (
                        <svg
                          key={i}
                          className={`w-3 h-3 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                      {review.content.length > 100 ? `${review.content.substring(0, 100)}...` : review.content}
                    </p>
                    <p className="text-xs text-gray-500 mt-2">
                      {new Date(review.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirmReviewsSection;
