import React from 'react';

interface PayoutInfoProps {
  frequency: string;
  processingTime: string;
  methods: string[];
  minPayout?: string;
}

const PayoutInfo: React.FC<PayoutInfoProps> = ({
  frequency,
  processingTime,
  methods,
  minPayout
}) => {
  return (
    <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm">
      <div className="flex items-center space-x-2 mb-4">
        <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        <h3 className="text-base font-semibold text-slate-900">Payout Information</h3>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-start">
          <div className="flex-shrink-0 w-32">
            <span className="text-xs font-medium text-slate-600">Frequency</span>
          </div>
          <div className="flex-1">
            <span className="text-sm text-slate-900 font-medium">{frequency}</span>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 w-32">
            <span className="text-xs font-medium text-slate-600">Processing Time</span>
          </div>
          <div className="flex-1">
            <span className="text-sm text-slate-900">{processingTime}</span>
          </div>
        </div>
        
        {minPayout && (
          <div className="flex items-start">
            <div className="flex-shrink-0 w-32">
              <span className="text-xs font-medium text-slate-600">Minimum Payout</span>
            </div>
            <div className="flex-1">
              <span className="text-sm text-slate-900">{minPayout}</span>
            </div>
          </div>
        )}
        
        <div className="flex items-start">
          <div className="flex-shrink-0 w-32">
            <span className="text-xs font-medium text-slate-600">Methods</span>
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap gap-2">
              {methods.map((method, index) => (
                <span 
                  key={index}
                  className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-slate-100 text-slate-700"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-slate-200">
        <p className="text-xs text-slate-500 italic">
          Check firm's official website for the most current payout details.
        </p>
      </div>
    </div>
  );
};

export default PayoutInfo;

