import React, { useEffect } from 'react';
import type { TradingTool } from '../types.ts';
import Logo from '../components/Logo';
import { trackAffiliateClick, trackTradingToolClick, trackTimeOnPage } from '../utils/analytics';

interface TradingToolsPageProps {
  tools: TradingTool[];
}

const TradingToolsPage: React.FC<TradingToolsPageProps> = ({ tools }) => {
  // Track page view and time spent
  useEffect(() => {
    const startTime = Date.now();
    
    // Track page view
    trackTradingToolClick('trading-tools-page');
    
    // Track time spent when component unmounts
    return () => {
      const timeSpent = (Date.now() - startTime) / 1000; // Convert to seconds
      trackTimeOnPage('trading-tools', timeSpent);
    };
  }, []);

  // Handle affiliate link clicks
  const handleAffiliateClick = (tool: TradingTool) => {
    trackAffiliateClick(tool.name);
    trackTradingToolClick(tool.name);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Trading Tools</h1>
        <p className="text-lg text-slate-600">Professional trading tools and platforms for serious traders</p>
      </div>

      {/* Tools Table */}
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Tool</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Description</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-200">
              {tools.map(tool => (
                <tr key={tool.id} className="hover:bg-slate-50">
                  {/* Tool Name & Logo */}
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-3 shadow-md hover:shadow-lg border-2 border-slate-200 hover:border-teal-300 mr-4 flex-shrink-0 transition-all duration-300 hover:scale-105">
                        <Logo firmName={tool.name} logoUrl={tool.logoUrl} className="w-full h-full object-contain drop-shadow-sm" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-base font-bold text-slate-900 truncate">{tool.name}</div>
                        <div className="text-xs text-slate-600 truncate mt-0.5">{tool.tagline}</div>
                      </div>
                    </div>
                  </td>

                  {/* Description */}
                  <td className="px-6 py-4">
                    <div className="text-sm text-slate-600 max-w-md">
                      <p className="line-clamp-3">{tool.shortDescription}</p>
                    </div>
                  </td>

                  {/* Action */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <a
                      href={tool.affiliateUrl || tool.officialWebsite}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => handleAffiliateClick(tool)}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-teal-500 to-slate-900 hover:from-teal-600 hover:to-slate-800 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
                    >
                      <img 
                        src="/images/icons/rocket-3d.png" 
                        alt="Visit" 
                        className="h-4 w-4 mr-2"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                      Visit Website
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Cards View */}
      <div className="mt-8 md:hidden">
        <div className="space-y-4">
          {tools.map(tool => (
            <div key={tool.id} className="bg-white rounded-lg shadow-sm border border-slate-200 p-4">
              <div className="flex items-start space-x-4">
                <div className="w-20 h-20 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-3 shadow-md border-2 border-slate-200 flex-shrink-0">
                  <Logo firmName={tool.name} logoUrl={tool.logoUrl} className="w-full h-full object-contain drop-shadow-sm" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-bold text-slate-900">{tool.name}</h3>
                  <p className="text-xs text-slate-600 mb-2">{tool.tagline}</p>
                  <p className="text-sm text-slate-600 mb-3">{tool.shortDescription}</p>
                  <div className="flex justify-end">
                    <a
                      href={tool.affiliateUrl || tool.officialWebsite}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => handleAffiliateClick(tool)}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-teal-500 to-slate-900 hover:from-teal-600 hover:to-slate-800 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
                    >
                      <img 
                        src="/images/icons/rocket-3d.png" 
                        alt="Visit" 
                        className="h-4 w-4 mr-2"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TradingToolsPage;