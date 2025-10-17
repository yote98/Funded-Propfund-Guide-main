import React from 'react';

const DataVerification: React.FC = () => {
  return (
    <div className="space-y-4">
      {/* Credibility Scores - Green Box */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-5">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <svg className="h-6 w-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3 flex-1">
            <h3 className="text-sm font-semibold text-green-800 mb-3">
              ✅ Verified Data Sources & Credibility Scores
            </h3>
            <div className="text-sm text-green-700 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  <strong>TradingPilot.net:</strong><span className="ml-1">Blockchain API (Arbiscan)</span>
                </div>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">9/10</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                  <strong>Payout Junction:</strong><span className="ml-1">Blockchain transparency</span>
                </div>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-semibold">7/10</span>
              </div>
            </div>
            <div className="mt-3 text-xs text-green-600 bg-green-100 p-2 rounded">
              <strong>Verification Methods:</strong> TradingPilot (blockchain verification), Payout Junction (blockchain transparency). We cross-reference all sources with official firm data and community verification.
            </div>
          </div>
        </div>
      </div>

      {/* Data Notice - Yellow Box */}
      <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-5">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-semibold text-yellow-800 mb-2">
              Data Verification Notice
            </h3>
            <p className="text-sm text-yellow-700">
              <strong>Important:</strong> Some payout and success metrics data has been removed as it could not be independently verified. We prioritize accuracy over impressive numbers to protect traders from misleading information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataVerification;
