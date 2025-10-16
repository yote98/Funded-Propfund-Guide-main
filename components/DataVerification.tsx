import React from 'react';

const DataVerification: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-4 mb-6">
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <svg className="h-6 w-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-semibold text-green-800 mb-2">
            ✅ Verified Data Sources & Credibility Scores
          </h3>
              <div className="text-xs text-green-700 space-y-2 leading-relaxed">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    <strong>TradingPilot.net:</strong> Blockchain API (Arbiscan)
                  </div>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">9/10</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                    <strong>Payout Junction:</strong> Blockchain transparency
                  </div>
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-semibold">7/10</span>
                </div>
              </div>
          <div className="mt-3 text-xs text-green-600 bg-green-100 p-2 rounded leading-relaxed">
            <strong>Verification Methods:</strong> TradingPilot (blockchain verification), 
            Payout Junction (blockchain transparency). 
            We cross-reference all sources with official firm data and community verification.
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataVerification;
