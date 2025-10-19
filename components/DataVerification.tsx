import React from 'react';

const DataVerification: React.FC = () => {
  return (
    <div className="space-y-4">
      {/* Credibility Scores - Green Box */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-5">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3 flex-1">
            <h3 className="text-sm font-bold text-green-800 mb-2">
              Verified Data Sources & Credibility Scores
            </h3>
            <div className="text-xs text-green-700 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  <span className="text-xs font-bold text-green-800">TradingPilot.net:</span>
                  <span className="text-xs text-green-700 ml-1">Blockchain API (Arbiscan)</span>
                </div>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-bold">9/10</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                  <span className="text-xs font-bold text-yellow-800">Payout Junction:</span>
                  <span className="text-xs text-green-700 ml-1">Blockchain transparency</span>
                </div>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-bold">7/10</span>
              </div>
            </div>
            <div className="mt-2 text-xs text-green-600 bg-green-100 p-2 rounded">
              <span className="text-xs font-bold text-green-800">Verification Methods:</span>
              <span className="text-xs text-green-700 ml-1">
                TradingPilot (blockchain verification), Payout Junction (blockchain transparency). We cross-reference all sources with official firm data and community verification.
              </span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default DataVerification;
