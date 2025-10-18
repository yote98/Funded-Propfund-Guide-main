import React, { useState } from 'react';
import type { UserReview } from '../types';

interface ReviewCardProps {
  review: UserReview;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  const [helpfulCount, setHelpfulCount] = useState(review.helpful);
  const [hasVoted, setHasVoted] = useState(false);

  const handleHelpfulClick = () => {
    if (!hasVoted) {
      setHelpfulCount(prev => prev + 1);
      setHasVoted(true);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-200 h-full grid grid-rows-[auto,1fr,auto] max-w-[520px] mx-auto">
      {/* Header */}
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center space-x-3">
          {/* Avatar */}
          <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-slate-900 rounded-full flex items-center justify-center text-white font-semibold text-xs">
            {getInitials(review.userName)}
          </div>
          
          {/* User Info */}
          <div>
            <div className="flex items-center space-x-2">
              <h4 className="font-semibold text-slate-900 text-sm">{review.userName}</h4>
              {review.verified && (
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs text-green-600 font-medium ml-1">Verified</span>
                </div>
              )}
            </div>
            <div className="flex items-center space-x-4 text-xs text-slate-500">
              <span>{review.userLocation}</span>
              {review.tradingExperience && (
                <span>{review.tradingExperience} experience</span>
              )}
            </div>
          </div>
        </div>

        {/* Rating and Date */}
        <div className="text-right">
          <div className="flex items-center space-x-1 mb-0.5">
            {renderStars(review.rating)}
          </div>
          <span className="text-xs text-slate-500 whitespace-nowrap leading-tight">{formatDate(review.date)}</span>
        </div>
      </div>

      {/* Review Content */}
      <div className="mb-3">
        <h5 className="font-semibold text-slate-900 mb-2 text-sm">{review.title}</h5>
        <p className="text-slate-700 leading-relaxed line-clamp-4 text-sm italic">{review.content}</p>
      </div>

      {/* Trading Details */}
      {(review.accountSize || review.profitMade || review.payoutReceived !== undefined) && (
        <div className="bg-slate-50 rounded-lg p-3 mb-2">
          <h6 className="font-medium text-slate-900 mb-2 text-sm">Trading Details</h6>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            {review.accountSize && (
              <div>
                <span className="text-slate-500">Account Size:</span>
                <span className="font-medium text-slate-900 ml-1">{review.accountSize}</span>
              </div>
            )}
            {review.profitMade && (
              <div>
                <span className="text-slate-500">Profit Made:</span>
                <span className="font-medium text-green-600 ml-1">{formatCurrency(review.profitMade)}</span>
              </div>
            )}
            {review.payoutReceived !== undefined && (
              <div>
                <span className="text-slate-500">Payout:</span>
                <span className={`font-medium ml-1 ${review.payoutReceived ? 'text-green-600' : 'text-red-600'}`}>
                  {review.payoutReceived ? 'Received' : 'Not Received'}
                </span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-slate-100">
        <span className="text-xs text-slate-500">Was this review helpful?</span>
        <button 
          onClick={handleHelpfulClick}
          disabled={hasVoted}
          className={`group flex items-center gap-1.5 px-3 py-1.5 rounded-md border transition-all duration-200 ${
            hasVoted 
              ? 'bg-teal-50 border-teal-300 cursor-default' 
              : 'bg-slate-50 hover:bg-teal-50 border-slate-200 hover:border-teal-300 cursor-pointer'
          }`}
          title={hasVoted ? "Thank you for your feedback!" : "Mark as helpful"}
        >
          <svg 
            className={`w-4 h-4 transition-colors duration-200 ${
              hasVoted 
                ? 'text-teal-600' 
                : 'text-slate-500 group-hover:text-teal-600'
            }`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" 
            />
          </svg>
          <span className={`text-xs font-semibold transition-colors duration-200 ${
            hasVoted 
              ? 'text-teal-700' 
              : 'text-slate-600 group-hover:text-teal-700'
          }`}>
            {helpfulCount}
          </span>
        </button>
      </div>
    </div>
  );
};

export default ReviewCard;
