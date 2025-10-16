import React from 'react';

const DataDisclaimer: React.FC = () => {
  return (
    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-yellow-800">
            Data Verification Notice
          </h3>
          <div className="mt-2 text-sm text-yellow-700">
            <p>
              <strong>Important:</strong> Some payout and success metrics data has been removed as it could not be independently verified. 
              We prioritize accuracy over impressive numbers to protect traders from misleading information.
            </p>
            <p className="mt-2">
              <strong>Our Commitment:</strong> We only display data we can verify through reliable sources like 
              TradingPilot.net, Payout Junction, and direct firm verification. When in doubt, we err on the side of caution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataDisclaimer;
