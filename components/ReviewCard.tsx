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
      month: 'short', 
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
    const starPath = "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.448a1 1 0 00-.364 1.118l1.287 3.955c.3.921-.755 1.688-1.54 1.118l-3.368-2.448a1 1 0 00-1.175 0l-3.368 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.955a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z";
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-3 h-3 ${i < rating ? 'text-amber-400' : 'text-slate-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d={starPath} />
      </svg>
    ));
  };

  return (
    <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200 h-full flex flex-col max-w-[400px] mx-auto min-h-[320px]">
      {/* Header */}
      <div className="mb-3">
        <div className="flex items-start space-x-3">
          {/* Avatar */}
          <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-slate-900 rounded-full flex items-center justify-center text-white font-semibold text-xs flex-shrink-0">
            {getInitials(review.userName)}
          </div>
          
          {/* User Info - 2 Row Layout */}
          <div className="flex-grow min-w-0">
            {/* Row 1: Name and Verified */}
            <div className="flex items-center space-x-2 mb-1">
              <h4 className="font-medium text-slate-900 text-xs truncate">{review.userName}</h4>
              {review.verified && (
                <div className="flex items-center flex-shrink-0">
                  <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs text-green-600 font-medium ml-0.5">Verified</span>
                </div>
              )}
            </div>
            
            {/* Row 2: Location and Experience */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3 text-xs text-slate-500 flex-1 min-w-0">
                <span className="truncate">{review.userLocation}</span>
                {review.tradingExperience && (
                  <span className="whitespace-nowrap">{review.tradingExperience} experience</span>
                )}
              </div>
              
              {/* Rating and Date - Right aligned with more padding */}
              <div className="text-right ml-3 min-w-[90px] max-w-[110px] flex-shrink-0">
                <div className="flex items-center justify-end space-x-0.5 mb-0.5">
                  {renderStars(review.rating)}
                </div>
                <span className="text-[9px] text-slate-500 leading-tight block text-right pr-3">{formatDate(review.date)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Review Content */}
      <div className="flex-grow mb-3">
        <h5 className="font-semibold text-slate-900 mb-2 text-sm">{review.title}</h5>
        <p className="text-slate-600 leading-relaxed line-clamp-3 text-sm italic">{review.content}</p>
      </div>

      {/* Trading Details */}
      {(review.accountSize || review.profitMade || review.payoutReceived !== undefined) && (
        <div className="bg-slate-50 rounded-md p-2 mb-2">
          <h6 className="font-medium text-slate-900 mb-1 text-xs">Trading Details</h6>
          <div className="grid grid-cols-1 gap-1 text-xs">
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
      <div className="flex items-center justify-end pt-2 border-t border-slate-100">
        <button className="flex items-center space-x-1 text-slate-500 hover:text-slate-700 transition-colors duration-200">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
          </svg>
          <span className="text-xs font-medium">{review.helpful}</span>
        </button>
      </div>
    </div>
  );
};

export default ReviewCard;
