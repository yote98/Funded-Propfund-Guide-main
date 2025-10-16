import React, { useState, useEffect } from 'react';

interface AnalyticsData {
  pageViews: number;
  affiliateClicks: number;
  tradingToolClicks: number;
  propFirmClicks: number;
  searchQueries: number;
  filterUsage: number;
}

const AnalyticsDashboard: React.FC = () => {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData>({
    pageViews: 0,
    affiliateClicks: 0,
    tradingToolClicks: 0,
    propFirmClicks: 0,
    searchQueries: 0,
    filterUsage: 0,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Listen for analytics events (this would be connected to your analytics service)
    const handleAnalyticsEvent = (event: CustomEvent) => {
      const { action, category } = event.detail;
      
      setAnalyticsData(prev => {
        switch (action) {
          case 'affiliate_click':
            return { ...prev, affiliateClicks: prev.affiliateClicks + 1 };
          case 'trading_tool_click':
            return { ...prev, tradingToolClicks: prev.tradingToolClicks + 1 };
          case 'prop_firm_click':
            return { ...prev, propFirmClicks: prev.propFirmClicks + 1 };
          case 'search':
            return { ...prev, searchQueries: prev.searchQueries + 1 };
          case 'filter_used':
            return { ...prev, filterUsage: prev.filterUsage + 1 };
          default:
            return prev;
        }
      });
    };

    window.addEventListener('analytics-event', handleAnalyticsEvent as EventListener);
    
    return () => {
      window.removeEventListener('analytics-event', handleAnalyticsEvent as EventListener);
    };
  }, []);

  // Toggle visibility with Ctrl+Shift+A
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.shiftKey && event.key === 'A') {
        setIsVisible(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-white border border-slate-200 rounded-lg shadow-lg p-4 z-50 max-w-sm">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-slate-900">Analytics Dashboard</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-slate-400 hover:text-slate-600"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-2 text-xs">
        <div className="flex justify-between">
          <span className="text-slate-600">Affiliate Clicks:</span>
          <span className="font-medium text-slate-900">{analyticsData.affiliateClicks}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-600">Trading Tool Clicks:</span>
          <span className="font-medium text-slate-900">{analyticsData.tradingToolClicks}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-600">Prop Firm Clicks:</span>
          <span className="font-medium text-slate-900">{analyticsData.propFirmClicks}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-600">Search Queries:</span>
          <span className="font-medium text-slate-900">{analyticsData.searchQueries}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-600">Filter Usage:</span>
          <span className="font-medium text-slate-900">{analyticsData.filterUsage}</span>
        </div>
      </div>
      
      <div className="mt-3 pt-2 border-t border-slate-200">
        <p className="text-xs text-slate-500">
          Press <kbd className="px-1 py-0.5 bg-slate-100 rounded text-xs">Ctrl+Shift+A</kbd> to toggle
        </p>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
