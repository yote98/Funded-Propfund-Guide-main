import React from 'react';
import type { UserReview } from '../types';

interface ReviewCardProps {
  review: UserReview;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
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
        <p className="text-slate-700 leading-relaxed line-clamp-4 text-sm">{review.content}</p>
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
      <div className="flex items-center justify-end pt-3 border-t border-slate-100">
        <button className="flex items-center space-x-2 text-slate-500 hover:text-slate-700 transition-colors duration-200">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
          </svg>
          <span className="text-xs font-medium">{review.helpful}</span>
        </button>
      </div>
    </div>
  );
};

export default ReviewCard;
