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
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-6 mb-4 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-blue-900">Live Payout Data</h3>
        <div className="flex items-center">
          <span className="text-sm text-blue-700 mr-1">Source:</span>
          <a 
            href="https://www.tradingpilot.net/prop-firm-payouts" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sm text-blue-700 hover:text-blue-900 font-medium"
          >
            TradingPilot.net
          </a>
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {totalPayouts && (
          <div className="text-center">
            <div className="text-blue-700 font-bold text-lg">${totalPayouts}</div>
            <div className="text-blue-600 text-sm mt-1">Total Payouts</div>
          </div>
        )}
        
        {numberOfPayouts && (
          <div className="text-center">
            <div className="text-blue-700 font-bold text-lg">{numberOfPayouts.toLocaleString()}</div>
            <div className="text-blue-600 text-sm mt-1">Payouts Made</div>
          </div>
        )}
        
        {averagePayout && (
          <div className="text-center">
            <div className="text-blue-700 font-bold text-lg">${averagePayout}</div>
            <div className="text-blue-600 text-sm mt-1">Avg Payout</div>
          </div>
        )}
        
        {largestPayout && (
          <div className="text-center">
            <div className="text-blue-700 font-bold text-lg">${largestPayout}</div>
            <div className="text-blue-600 text-sm mt-1">Largest Payout</div>
          </div>
        )}
      </div>
      
      {(last24Hours || last7Days || last30Days) && (
        <div className="mt-6 pt-4 border-t border-blue-200">
          <div className="text-sm text-blue-700 font-semibold mb-3">Recent Activity:</div>
          <div className="grid grid-cols-3 gap-6">
            {last24Hours && (
              <div className="text-center">
                <div className="text-blue-700 font-bold text-lg">${last24Hours}</div>
                <div className="text-blue-600 text-sm mt-1">24 Hours</div>
              </div>
            )}
            {last7Days && (
              <div className="text-center">
                <div className="text-blue-700 font-bold text-lg">${last7Days}</div>
                <div className="text-blue-600 text-sm mt-1">7 Days</div>
              </div>
            )}
            {last30Days && (
              <div className="text-center">
                <div className="text-blue-700 font-bold text-lg">${last30Days}</div>
                <div className="text-blue-600 text-sm mt-1">30 Days</div>
              </div>
            )}
          </div>
        </div>
      )}
      
      <div className="mt-4 text-sm text-blue-600 flex items-center">
        <svg className="w-4 h-4 mr-1 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        <span>Updated every 6 hours via Arbiscan API</span>
      </div>
    </div>
  );
};

export default TradingPilotData;