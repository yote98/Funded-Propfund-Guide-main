import React from 'react';

const DataSources: React.FC = () => {
  return (
    <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 text-2xl">🚀</div>
          <div className="flex-1">
            <a 
              href="https://www.tradingpilot.net/prop-firm-payouts"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
            >
              TradingPilot.net
              <svg className="w-4 h-4 ml-1 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <p className="text-slate-600 mt-1">Real-time blockchain verification via Arbiscan API</p>
          </div>
        </div>
        
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 text-2xl">💰</div>
          <div className="flex-1">
            <a 
              href="https://payoutjunction.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
            >
              Payout Junction
              <svg className="w-4 h-4 ml-1 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <p className="text-slate-600 mt-1">Blockchain transparency for every transaction</p>
          </div>
        </div>
      </div>
      
      <div className="mt-6 pt-4 border-t border-slate-200">
        <p className="text-slate-700">
          <strong className="text-slate-800">Our Commitment:</strong> We only display data verified through these trusted sources. When data cannot be independently verified, we remove it to protect traders from misleading information.
        </p>
      </div>
    </div>
  );
};

export default DataSources;