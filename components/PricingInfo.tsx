import React from 'react';
import type { PropFirm } from '../types.ts';
import TagIcon from './icons/TagIcon';

interface PricingInfoProps {
  firm: PropFirm;
}

const PricingInfo: React.FC<PricingInfoProps> = ({ firm }) => {
  if (!firm.originalPrice && !firm.discountedPrice && !firm.discountPercentage) {
    return null;
  }

  return (
    <div className="bg-white border border-slate-200 rounded-lg p-4">
      <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
        <TagIcon className="w-5 h-5 mr-2 text-green-600" />
        Pricing & Discounts
      </h3>
      <div className="space-y-3">
        {firm.isDiscounted && firm.discountedPrice && firm.originalPrice && (
          <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
            <div>
              <span className="text-sm text-green-600 block">Discounted Price</span>
              <span className="text-2xl font-bold text-green-800">${firm.discountedPrice}</span>
            </div>
            <div className="text-right">
              <span className="text-sm text-slate-500 line-through">${firm.originalPrice}</span>
              {firm.discountPercentage && (
                <div className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs font-bold mt-1">
                  {firm.discountPercentage}% OFF
                </div>
              )}
            </div>
          </div>
        )}
        
        {!firm.isDiscounted && firm.originalPrice && (
          <div className="flex items-center p-3 bg-slate-50 rounded-lg">
            <div>
              <span className="text-sm text-slate-600 block">Challenge Price</span>
              <span className="text-xl font-bold text-slate-800">${firm.originalPrice}</span>
            </div>
          </div>
        )}
        
        {firm.discountCode && (
          <div className="flex items-center p-3 bg-blue-50 rounded-lg">
            <div className="flex items-center">
              <TagIcon className="w-4 h-4 text-blue-500 mr-2" />
              <div>
                <span className="text-sm text-blue-600 block">Discount Code</span>
                <span className="font-mono font-bold text-blue-800">{firm.discountCode}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PricingInfo;
