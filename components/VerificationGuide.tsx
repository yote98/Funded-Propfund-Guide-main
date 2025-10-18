import React from 'react';

const VerificationGuide: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-4 mb-6">
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <img 
            src="/images/icons/3dicons-key-dynamic-color.png" 
            alt="Verification Guide" 
            className="h-8 w-8"
            onError={(e) => {
              // Fallback to SVG if 3D icon fails to load
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling.style.display = 'block';
            }}
          />
          <svg className="h-6 w-6 text-blue-500 hidden" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-semibold text-blue-800 mb-2">
            🔍 How to Verify Prop Firm Payouts (2025 Guide)
          </h3>
          <div className="text-sm text-blue-700 space-y-2">
            <div>
              <div className="flex items-center">
                <img 
                  src="/images/icons/shield-check-3d.png" 
                  alt="Green Flags" 
                  className="h-5 w-5 mr-1"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling.style.display = 'inline';
                  }}
                />
                <span className="hidden">✅</span>
                <strong>Green Flags to Look For:</strong>
              </div>
              <ul className="ml-4 mt-1 space-y-1 text-xs">
                <li>• Public audits (TradingPilot, Payout Junction)</li>
                <li>• Fast processing (1-2 days)</li>
                <li>• Multiple payment options (crypto/fiat)</li>
                <li>• Third-party verification</li>
              </ul>
            </div>
            <div>
              <div className="flex items-center">
                <img 
                  src="/images/icons/flame-3d.png" 
                  alt="Red Flags" 
                  className="h-5 w-5 mr-1"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling.style.display = 'inline';
                  }}
                />
                <span className="hidden">🚨</span>
                <strong>Red Flags to Avoid:</strong>
              </div>
              <ul className="ml-4 mt-1 space-y-1 text-xs">
                <li>• No third-party verification</li>
                <li>• Sudden rule changes post-payout request</li>
                <li>• Reliance on influencer endorsements without proofs</li>
                <li>• High denial rates</li>
              </ul>
            </div>
            <div className="mt-2 text-xs text-blue-600 bg-blue-100 p-2 rounded flex items-start">
              <img 
                src="/images/icons/chart-3d.png" 
                alt="Chart" 
                className="h-4 w-4 mr-1 mt-0.5 flex-shrink-0"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div>
                <strong>Key Stat:</strong> Only ~7% of traders receive payouts (2025 data). 
                Start small with low-stakes challenges and request small payouts early to gauge reliability.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationGuide;
