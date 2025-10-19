import React, { useState, useMemo } from 'react';
import ClipboardIcon from './icons/ClipboardIcon';
import Logo from './Logo';
import type { PropFirm } from '../types';
import { getActiveDeals, GLOBAL_PROMO_CODE, isDealValid } from '../services/dealsData';

interface TopDealsProps {
  firms: PropFirm[];
}

const TopDeals: React.FC<TopDealsProps> = ({ firms }) => {
  const [copied, setCopied] = useState(false);

  const PROMO_CODE = GLOBAL_PROMO_CODE;

  const topDeals = useMemo(() => {
    const activeDeals = getActiveDeals();
    return activeDeals
      .filter(deal => isDealValid(deal))
      .map(deal => {
        const firm = firms.find(f => f.id === deal.firmId);
        return firm ? { ...firm, dealInfo: deal } : null;
      })
      .filter(Boolean)
      .slice(0, 5);
  }, [firms]);

  const handleCopy = () => {
    navigator.clipboard.writeText(PROMO_CODE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-md p-6 max-w-2xl mx-auto">
      <div className="space-y-3">
        {topDeals.length > 0 ? (
          topDeals.map(firm => (
            <div key={firm.id} className="flex items-center justify-between p-3 border border-slate-200 rounded-lg bg-gray-50/50">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center p-1 border-2 border-slate-200 flex-shrink-0">
                  <Logo firmName={firm.name} logoUrl={firm.logoUrl} className="object-contain max-h-full max-w-full" />
                </div>
                <div>
                  <p className="font-bold text-slate-800 text-sm">{firm.name}</p>
                  <p className="text-xs text-slate-600">
                    {firm.dealInfo?.description || firm.deal?.description}
                  </p>
                  {firm.dealInfo?.discount && (
                    <p className="text-xs text-teal-600 font-semibold">{firm.dealInfo.discount}</p>
                  )}
                </div>
              </div>
              <a 
                href={firm.officialWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 flex-shrink-0 text-center text-white text-sm font-semibold py-2 px-4 rounded-md bg-gradient-to-r from-teal-500 to-slate-900 hover:from-teal-600 hover:to-slate-800 transition-all duration-300 shadow-sm"
              >
                Buy {firm.shortName}
              </a>
            </div>
          ))
        ) : (
          <p className="text-center text-slate-500 py-4">No deals found.</p>
        )}
      </div>

      <div className="mt-4 flex items-center justify-center text-center p-3 bg-teal-500/10 border border-teal-500/20 rounded-lg text-sm">
        <span className="text-slate-700">Use code</span>
        <div className="relative flex items-center mx-2">
          <span className="font-mono font-bold bg-teal-500/20 text-teal-800 px-2 py-1 rounded-md">
            {PROMO_CODE}
          </span>
          <button
            onClick={handleCopy}
            className="ml-2 text-slate-500 hover:text-teal-600 transition-colors"
            aria-label="Copy code"
          >
            <ClipboardIcon className="w-5 h-5" />
          </button>
          {copied && (
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded-md">
              Copied!
            </div>
          )}
        </div>
        <span className="text-slate-700">for the best available discount</span>
      </div>
    </div>
  );
};

export default TopDeals;