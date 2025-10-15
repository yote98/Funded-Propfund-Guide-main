import React from 'react';

interface PayoutTimelineProps {
  frequency: string;
  averageTime: string;
  reliability: 'Excellent' | 'Good' | 'Fair' | 'Poor';
  totalPayouts: number;
}

const PayoutTimeline: React.FC<PayoutTimelineProps> = ({ 
  frequency, 
  averageTime, 
  reliability, 
  totalPayouts 
}) => {
  const getReliabilityColor = () => {
    switch (reliability) {
      case 'Excellent':
        return 'text-green-600 bg-green-100';
      case 'Good':
        return 'text-blue-600 bg-blue-100';
      case 'Fair':
        return 'text-yellow-600 bg-yellow-100';
      case 'Poor':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getReliabilityIcon = () => {
    switch (reliability) {
      case 'Excellent':
        return '🚀';
      case 'Good':
        return '✅';
      case 'Fair':
        return '⚠️';
      case 'Poor':
        return '❌';
      default:
        return '❓';
    }
  };

  return (
    <div className="bg-white border border-slate-200 rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-slate-900">Payout Information</h3>
      <div className="flex items-center space-x-1">
        <span className="text-xs text-slate-500">Sources:</span>
        <a href="https://www.tradingpilot.net/prop-firm-payouts" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:text-blue-800 underline">
          TP
        </a>
        <span className="text-xs text-slate-400">•</span>
        <a href="https://financemagnates.com" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:text-blue-800 underline">
          FM
        </a>
      </div>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-slate-600">Frequency:</span>
          <span className="font-semibold text-slate-900">{frequency}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-slate-600">Average Time:</span>
          <span className="font-semibold text-slate-900">{averageTime}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-slate-600">Reliability:</span>
          <span className={`px-2 py-1 rounded-full text-sm font-medium ${getReliabilityColor()}`}>
            <span className="mr-1">{getReliabilityIcon()}</span>
            {reliability}
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-slate-600">Total Payouts:</span>
          <span className="font-semibold text-slate-900">
            ${totalPayouts.toLocaleString()}M+
          </span>
        </div>
      </div>
    </div>
  );
};

export default PayoutTimeline;
