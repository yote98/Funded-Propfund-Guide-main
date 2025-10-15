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
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-4 mb-4">
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-sm font-semibold text-blue-900">Live Payout Data</h4>
        <div className="flex items-center space-x-1">
          <span className="text-xs text-blue-600">Source:</span>
          <a 
            href="https://www.tradingpilot.net/prop-firm-payouts" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-xs text-blue-600 hover:text-blue-800 underline font-medium"
          >
            TradingPilot.net
          </a>
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
        {totalPayouts && (
          <div className="text-center">
            <div className="text-blue-600 font-semibold">${totalPayouts}</div>
            <div className="text-blue-500">Total Payouts</div>
          </div>
        )}
        
        {numberOfPayouts && (
          <div className="text-center">
            <div className="text-blue-600 font-semibold">{numberOfPayouts.toLocaleString()}</div>
            <div className="text-blue-500">Payouts Made</div>
          </div>
        )}
        
        {averagePayout && (
          <div className="text-center">
            <div className="text-blue-600 font-semibold">${averagePayout}</div>
            <div className="text-blue-500">Avg Payout</div>
          </div>
        )}
        
        {largestPayout && (
          <div className="text-center">
            <div className="text-blue-600 font-semibold">${largestPayout}</div>
            <div className="text-blue-500">Largest Payout</div>
          </div>
        )}
      </div>
      
      {(last24Hours || last7Days || last30Days) && (
        <div className="mt-3 pt-3 border-t border-blue-200">
          <div className="text-xs text-blue-600 font-medium mb-2">Recent Activity:</div>
          <div className="grid grid-cols-3 gap-2 text-xs">
            {last24Hours && (
              <div className="text-center">
                <div className="text-blue-600 font-semibold">${last24Hours}</div>
                <div className="text-blue-500">24 Hours</div>
              </div>
            )}
            {last7Days && (
              <div className="text-center">
                <div className="text-blue-600 font-semibold">${last7Days}</div>
                <div className="text-blue-500">7 Days</div>
              </div>
            )}
            {last30Days && (
              <div className="text-center">
                <div className="text-blue-600 font-semibold">${last30Days}</div>
                <div className="text-blue-500">30 Days</div>
              </div>
            )}
          </div>
        </div>
      )}
      
      <div className="mt-3 text-xs text-blue-600">
        <span className="inline-flex items-center">
          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Updated every 6 hours via Arbiscan API
        </span>
      </div>
    </div>
  );
};

export default TradingPilotData;
