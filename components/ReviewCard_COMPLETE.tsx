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
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          {/* Avatar */}
          <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-slate-900 rounded-full flex items-center justify-center text-white font-semibold text-sm">
            {getInitials(review.userName)}
          </div>
          
          {/* User Info */}
          <div>
            <div className="flex items-center space-x-2">
              <h4 className="font-semibold text-slate-900">{review.userName}</h4>
              {review.verified && (
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs text-green-600 font-medium ml-1">Verified</span>
                </div>
              )}
            </div>
            <div className="flex items-center space-x-4 text-sm text-slate-500">
              <span>{review.userLocation}</span>
              {review.tradingExperience && (
                <span>{review.tradingExperience} experience</span>
              )}
            </div>
          </div>
        </div>

        {/* Rating and Date */}
        <div className="text-right">
          <div className="flex items-center space-x-1 mb-1">
            {renderStars(review.rating)}
          </div>
          <span className="text-sm text-slate-500">{formatDate(review.date)}</span>
        </div>
      </div>

      {/* Review Content */}
      <div className="mb-4">
        <h5 className="font-semibold text-slate-900 mb-2">{review.title}</h5>
        <p className="text-slate-700 leading-relaxed">{review.content}</p>
      </div>

      {/* Trading Details */}
      {(review.accountSize || review.profitMade || review.payoutReceived !== undefined) && (
        <div className="bg-slate-50 rounded-lg p-4 mb-4">
          <h6 className="font-medium text-slate-900 mb-2">Trading Details</h6>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
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
      <div className="flex items-center justify-between pt-4 border-t border-slate-100">
        <div className="flex items-center space-x-4 text-sm text-slate-500">
          <span>Was this helpful?</span>
          <button className="flex items-center space-x-1 text-slate-600 hover:text-slate-900 transition-colors duration-200">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5-7A2 2 0 0015.264 4H14v6z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 4H10v10z" />
            </svg>
            <span>{review.helpful}</span>
          </button>
        </div>
        
        <div className="text-sm text-slate-500">
          {review.helpful} people found this helpful
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
