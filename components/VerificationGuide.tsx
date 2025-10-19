import React from 'react';

const VerificationGuide: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-4 mb-6">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-bold text-blue-800 mb-2">
              How to Verify Prop Firm Payouts (2025 Guide)
            </h3>
            <div className="text-xs text-blue-700 space-y-2">
              <div>
                <div className="flex items-center mb-1">
                  <svg className="h-4 w-4 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs font-bold text-green-800">Green Flags to Look For:</span>
                </div>
                <ul className="ml-4 space-y-1 text-xs text-blue-700">
                  <li>• Public audits (TradingPilot, Payout Junction)</li>
                  <li>• Fast processing (1-2 days)</li>
                  <li>• Multiple payment options (crypto/fiat)</li>
                  <li>• Third-party verification</li>
                </ul>
              </div>
              <div>
                <div className="flex items-center mb-1">
                  <svg className="h-4 w-4 text-red-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs font-bold text-red-800">Red Flags to Avoid:</span>
                </div>
                <ul className="ml-4 space-y-1 text-xs text-blue-700">
                  <li>• No third-party verification</li>
                  <li>• Sudden rule changes post-payout request</li>
                  <li>• Reliance on influencer endorsements without proofs</li>
                  <li>• High denial rates</li>
                </ul>
              </div>
              <div className="mt-2 text-xs text-blue-600 bg-blue-100 p-2 rounded flex items-start">
                <svg className="h-3 w-3 text-blue-500 mr-1 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
                <div>
                  <span className="text-xs font-bold text-blue-800">Key Stat:</span>
                  <span className="text-xs text-blue-700 ml-1">
                    Only ~7% of traders receive payouts (2025 data). 
                    Start small with low-stakes challenges and request small payouts early to gauge reliability.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default VerificationGuide;
