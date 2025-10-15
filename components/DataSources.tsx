import React from 'react';

const DataSources: React.FC = () => {
  const sources = [
    {
      name: 'TradingPilot.net',
      url: 'https://www.tradingpilot.net/prop-firm-payouts',
      description: 'Real-time blockchain verification via Arbiscan API',
      icon: '🚀'
    },
    {
      name: 'The Trusted Prop',
      url: 'https://thetrustedprop.com',
      description: '400+ firms manually audited and tested',
      icon: '✅'
    },
    {
      name: 'Finance Magnates',
      url: 'https://financemagnates.com',
      description: 'Industry-leading financial publication',
      icon: '📰'
    },
    {
      name: 'Payout Junction',
      url: 'https://payoutjunction.com',
      description: 'Blockchain transparency for every transaction',
      icon: '💰'
    }
  ];

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
      <h4 className="text-sm font-semibold text-slate-900 mb-3">Data Sources & Verification</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {sources.map((source, index) => (
          <a
            key={index}
            href={source.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 p-2 rounded-md hover:bg-white hover:shadow-sm transition-all duration-200"
          >
            <span className="text-lg">{source.icon}</span>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-blue-600 hover:text-blue-800">
                {source.name}
              </div>
              <div className="text-xs text-slate-500 truncate">
                {source.description}
              </div>
            </div>
            <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        ))}
      </div>
      <div className="mt-3 pt-3 border-t border-slate-200">
        <p className="text-xs text-slate-600">
          <strong>Our Commitment:</strong> We only display data verified through these trusted sources. 
          When data cannot be independently verified, we remove it to protect traders from misleading information.
        </p>
      </div>
    </div>
  );
};

export default DataSources;