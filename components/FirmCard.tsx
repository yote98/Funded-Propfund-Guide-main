
import React from 'react';
import type { PropFirm, FirmId } from '../types.ts';
import StarRating from './StarRating';
import Logo from './Logo';

interface FirmCardProps {
  firm: PropFirm;
  viewFirm: (firmId: FirmId) => void;
}

const formatCurrency = (num: number): string => {
  if (num >= 1000000) {
    const value = num / 1000000;
    return `$${value % 1 === 0 ? value.toFixed(0) : value.toFixed(1)}M`;
  }
  if (num >= 1000) {
    return `$${Math.round(num / 1000)}k`;
  }
  return `$${num}`;
};

const Stat: React.FC<{ label: string; value: string | number; unit?: string }> = ({ label, value, unit }) => (
  <div className="text-center">
    <p className="text-xs text-slate-500 uppercase tracking-wider">{label}</p>
    <p className="text-lg font-semibold text-slate-900">
      {value}<span className="text-sm font-normal text-slate-600">{unit}</span>
    </p>
  </div>
);

const FirmCard: React.FC<FirmCardProps> = ({ firm, viewFirm }) => {
  const { name, shortDescription, rating, reviewCount, details, affiliateUrl, minStartingCost, fundingModels, categories } = firm;

  return (
    <div 
      className="bg-white border border-slate-200 rounded-xl shadow-md hover:shadow-lg hover:shadow-cyan-500/10 hover:border-cyan-400 transition-all duration-300 flex flex-col focus-within:ring-2 focus-within:ring-teal-500 focus-within:ring-offset-2"
      role="article"
      aria-labelledby={`firm-${firm.id}-title`}
    >
      <div className="p-6 flex-grow">
        <div className="flex items-start mb-4">
            <div className="flex items-start">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-4 p-1 border border-slate-200 flex-shrink-0">
                    <Logo firmName={name} logoUrl={firm.logoUrl} className="object-contain max-h-full max-w-full" />
                </div>
              <div>
                <h3 id={`firm-${firm.id}-title`} className="text-xl font-bold text-slate-900">{name}</h3>
                <div className="flex items-center mt-1" aria-label={`Rating: ${rating} out of 5 stars`}>
                  <StarRating rating={rating} />
                  <span className="text-xs text-slate-500 ml-2">({reviewCount} reviews)</span>
                </div>
              </div>
            </div>
        </div>
        <p className="text-slate-600 text-sm mb-4 min-h-[40px]">{shortDescription}</p>
        
        <div className="mb-6 space-y-1 text-xs">
          <div className="flex items-start text-slate-600">
            <span className="font-semibold text-slate-500 w-16 flex-shrink-0">Models:</span>
            <span>{fundingModels.join(', ')}</span>
          </div>
          <div className="flex items-start text-slate-600">
            <span className="font-semibold text-slate-500 w-16 flex-shrink-0">Category:</span>
            <span>{categories.join(', ')}</span>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-2 bg-slate-50 rounded-lg p-3">
            <Stat label="Max Funding" value={formatCurrency(details.maxFunding)} />
            <Stat label="Profit Split" value={details.profitSplit} unit="%" />
            <Stat label="Starts From" value={`$${minStartingCost}`} />
        </div>
      </div>
      <div className="px-6 pb-6 mt-auto pt-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <a 
            href={affiliateUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex-1 text-center bg-gradient-to-r from-teal-500 to-slate-900 text-white font-semibold py-2 px-4 rounded-lg hover:from-teal-600 hover:to-slate-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            aria-label={`Visit ${name} official website`}
          >
            Visit Site
          </a>
          <button 
            onClick={() => viewFirm(firm.id)} 
            className="flex-1 text-center bg-slate-200 text-slate-800 font-semibold py-2 px-4 rounded-lg hover:bg-slate-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            aria-label={`Read detailed review of ${name}`}
          >
            Read Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirmCard;