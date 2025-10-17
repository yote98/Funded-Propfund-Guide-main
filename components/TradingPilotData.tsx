import React from 'react';

interface TradingPilotDataProps {
  firmName: string;
  totalPayouts?: string;
  numberOfPayouts?: number;
  averagePayout?: string;
  largestPayout?: string;
  last24Hours?: string;
  last7Days?: string;
  last30Days?: string;
}

const TradingPilotData: React.FC<TradingPilotDataProps> = ({
  firmName,
  totalPayouts,
  numberOfPayouts,
  averagePayout,
  largestPayout,
  last24Hours,
  last7Days,
  last30Days
}) => {
  return (
    <div className="bg-white border-2 border-green-200 rounded-xl p-6 mb-4 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <h3 className="text-lg font-bold text-slate-900">Verified Payout Data</h3>
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
            Blockchain Verified
          </span>
        </div>
        <a 
          href="https://www.tradingpilot.net/prop-firm-payouts" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-sm text-blue-600 hover:text-blue-800 font-medium underline flex items-center"
        >
          TradingPilot.net
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {totalPayouts && (
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-lg p-4 text-center">
            <div className="text-green-700 font-bold text-xl">${totalPayouts}</div>
            <div className="text-slate-600 text-xs mt-1 font-medium">Total Payouts</div>
          </div>
        )}
        
        {numberOfPayouts && (
          <div className="bg-gradient-to-br from-blue-50 to-sky-50 border border-blue-200 rounded-lg p-4 text-center">
            <div className="text-blue-700 font-bold text-xl">{numberOfPayouts.toLocaleString()}</div>
            <div className="text-slate-600 text-xs mt-1 font-medium">Payouts Made</div>
          </div>
        )}
        
        {averagePayout && (
          <div className="bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-200 rounded-lg p-4 text-center">
            <div className="text-purple-700 font-bold text-xl">${averagePayout}</div>
            <div className="text-slate-600 text-xs mt-1 font-medium">Avg Payout</div>
          </div>
        )}
        
        {largestPayout && (
          <div className="bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-200 rounded-lg p-4 text-center">
            <div className="text-amber-700 font-bold text-xl">${largestPayout}</div>
            <div className="text-slate-600 text-xs mt-1 font-medium">Largest Payout</div>
          </div>
        )}
      </div>
      
      {(last24Hours || last7Days || last30Days) && (
        <div className="pt-4 border-t border-slate-200">
          <div className="text-sm text-slate-700 font-semibold mb-3 flex items-center">
            <svg className="w-4 h-4 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            Recent Activity
          </div>
          <div className="grid grid-cols-3 gap-3">
            {last24Hours && (
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-center">
                <div className="text-teal-600 font-bold text-lg">${last24Hours}</div>
                <div className="text-slate-600 text-xs mt-1 font-medium">24 Hours</div>
              </div>
            )}
            {last7Days && (
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-center">
                <div className="text-teal-600 font-bold text-lg">${last7Days}</div>
                <div className="text-slate-600 text-xs mt-1 font-medium">7 Days</div>
              </div>
            )}
            {last30Days && (
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-center">
                <div className="text-teal-600 font-bold text-lg">${last30Days}</div>
                <div className="text-slate-600 text-xs mt-1 font-medium">30 Days</div>
              </div>
            )}
          </div>
        </div>
      )}
      
      <div className="mt-4 pt-4 border-t border-slate-200 text-xs text-slate-600 flex items-center justify-between">
        <div className="flex items-center">
          <svg className="w-4 h-4 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span>Verified via Arbiscan Blockchain API</span>
        </div>
        <span className="text-slate-500">Updated every 6 hours</span>
      </div>
    </div>
  );
};

export default TradingPilotData;