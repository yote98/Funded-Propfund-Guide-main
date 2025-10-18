import React, { useEffect, useState } from 'react';
import FirmStatsChart from '../components/FirmStatsChart';
import ReviewAnalytics from '../components/ReviewAnalytics';
import MarketInsights from '../components/MarketInsights';
import TradingStrategyAnalytics from '../components/TradingStrategyAnalytics';
import MarketTimingInsights from '../components/MarketTimingInsights';
import FirmDeepDives from '../components/FirmDeepDives';
import ErrorBoundary from '../components/ErrorBoundary';
import type { PropFirm, UserReview } from '../types';

interface AnalyticsPageProps {
  firms: PropFirm[];
  reviews: UserReview[];
}

interface Tooltip {
  [key: string]: string;
}

const AnalyticsPage: React.FC<AnalyticsPageProps> = ({ firms, reviews }) => {
  const [activeTab, setActiveTab] = useState<'firms' | 'reviews' | 'market' | 'strategies' | 'timing' | 'deep-dives'>('firms');
  const [isTabLoading, setIsTabLoading] = useState(false);
  const [hoveredTooltip, setHoveredTooltip] = useState<string | null>(null);

  // Tab tooltips with helpful descriptions
  const tabTooltips: Tooltip = {
    firms: 'View performance metrics, pass rates, and funding details across all prop firms',
    reviews: 'Analyze user reviews, ratings, and trader feedback by location and experience',
    market: 'Explore market trends, trading volumes, and platform insights',
    strategies: 'Compare success rates of different trading strategies across markets',
    timing: 'Discover optimal trading times and market volatility patterns',
    'deep-dives': 'Deep analysis of individual prop firms and their unique offerings'
  };

  // Metric tooltips
  const metricTooltips: Tooltip = {
    passRate: 'The percentage of traders who successfully pass the evaluation phase and get funded',
    payout: 'The average amount paid to traders per successful trade or payout cycle',
    firms: 'Total number of prop trading firms tracked in our database',
    strategy: 'The most popular trading strategy among successful traders on our platform',
    reviews: 'Total number of verified reviews from real traders using these platforms',
    rating: 'Average rating across all reviews (scale: 1-5 stars)',
    funding: 'The maximum account funding available from the top-tier firms',
    region: 'Geographic region with the highest concentration of active traders'
  };

  const tabs = [
    { id: 'firms', label: 'Firm Analytics', icon: '📊' },
    { id: 'reviews', label: 'Review Analytics', icon: '⭐' },
    { id: 'market', label: 'Market Insights', icon: '📈' },
    { id: 'strategies', label: 'Trading Strategies', icon: '🎯' },
    { id: 'timing', label: 'Market Timing', icon: '⏰' },
    { id: 'deep-dives', label: 'Firm Deep Dives', icon: '🔍' }
  ];

  // Handle tab change with animation
  const handleTabChange = (tabId: string) => {
    setIsTabLoading(true);
    setActiveTab(tabId as any);
    setTimeout(() => setIsTabLoading(false), 150);
  };

  // Tooltip component
  const Tooltip: React.FC<{ text: string; children: React.ReactNode }> = ({ text, children }) => (
    <div className="relative group cursor-help inline-block">
      {children}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block z-50">
        <div className="bg-slate-900 text-white text-xs rounded-lg py-2 px-3 whitespace-nowrap shadow-lg">
          {text}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-slate-900"></div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Data Analytics Dashboard</h1>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Comprehensive data visualization and analytics for prop trading firms, user reviews, and market trends.
        </p>
      </div>

      {/* Tab Navigation - Two Row Layout for Better Mobile Responsiveness */}
      <div className="flex justify-center mb-8">
        <div className="w-full max-w-6xl">
          {/* First Row */}
          <div className="bg-slate-100 rounded-t-xl p-2 flex flex-wrap justify-center gap-1 mb-0">
            {tabs.slice(0, 3).map((tab) => (
              <Tooltip key={tab.id} text={tabTooltips[tab.id]}>
                <button
                  onClick={() => handleTabChange(tab.id)}
                  className={`px-3 py-2 sm:px-4 sm:py-3 rounded-lg font-medium transition-all duration-200 text-xs sm:text-sm whitespace-nowrap relative group ${
                    activeTab === tab.id
                      ? 'bg-white text-slate-900 shadow-md scale-105'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                  }`}
                >
                  <span className="mr-1">{tab.icon}</span>
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden font-semibold">{tab.label.split(' ')[0]}</span>
                </button>
              </Tooltip>
            ))}
          </div>
          
          {/* Second Row */}
          <div className="bg-slate-100 rounded-b-xl p-2 flex flex-wrap justify-center gap-1">
            {tabs.slice(3, 6).map((tab) => (
              <Tooltip key={tab.id} text={tabTooltips[tab.id]}>
                <button
                  onClick={() => handleTabChange(tab.id)}
                  className={`px-3 py-2 sm:px-4 sm:py-3 rounded-lg font-medium transition-all duration-200 text-xs sm:text-sm whitespace-nowrap relative group ${
                    activeTab === tab.id
                      ? 'bg-white text-slate-900 shadow-md scale-105'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                  }`}
                >
                  <span className="mr-1">{tab.icon}</span>
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden font-semibold">{tab.label.split(' ')[0]}</span>
                </button>
              </Tooltip>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content with Fade-In Animation */}
      <div className={`min-h-[600px] transition-opacity duration-300 ${isTabLoading ? 'opacity-50' : 'opacity-100'}`}>
        
        {activeTab === 'firms' && <FirmStatsChart firms={firms} />}
        {activeTab === 'reviews' && <ReviewAnalytics reviews={reviews} />}
        {activeTab === 'market' && <MarketInsights />}
        {activeTab === 'strategies' && <TradingStrategyAnalytics />}
        {activeTab === 'timing' && <MarketTimingInsights />}
        {activeTab === 'deep-dives' && <FirmDeepDives />}
      </div>

      {/* Enhanced Quick Stats Footer with Trends and Tooltips */}
      <div className="mt-12 bg-gradient-to-r from-teal-50 to-slate-50 border border-slate-200 rounded-xl p-6">
        <h3 className="text-lg font-bold text-slate-900 mb-6 text-center">Key Industry Metrics</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {/* Metric 1: Average Pass Rate */}
          <Tooltip text={metricTooltips.passRate}>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-100 hover:shadow-md transition-shadow cursor-help">
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="text-3xl font-bold text-teal-600">14.2%</div>
                <div className="flex items-center gap-1 text-green-600 font-semibold">
                  <span>↑</span>
                  <span className="text-sm">2.1%</span>
                </div>
              </div>
              <div className="text-sm text-slate-600">Average Pass Rate</div>
              <div className="text-xs text-slate-500 mt-1">vs last month</div>
              <div className="mt-2 text-xs text-blue-600 flex items-center justify-center">
                <span className="text-lg mr-1">ℹ️</span> Hover for info
              </div>
            </div>
          </Tooltip>

          {/* Metric 2: Average Payout */}
          <Tooltip text={metricTooltips.payout}>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-100 hover:shadow-md transition-shadow cursor-help">
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="text-3xl font-bold text-blue-600">$2,847</div>
                <div className="flex items-center gap-1 text-green-600 font-semibold">
                  <span>↑</span>
                  <span className="text-sm">8%</span>
                </div>
              </div>
              <div className="text-sm text-slate-600">Average Payout</div>
              <div className="text-xs text-slate-500 mt-1">per trader</div>
              <div className="mt-2 text-xs text-blue-600 flex items-center justify-center">
                <span className="text-lg mr-1">ℹ️</span> Hover for info
              </div>
            </div>
          </Tooltip>

          {/* Metric 3: Total Firms */}
          <Tooltip text={metricTooltips.firms}>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-100 hover:shadow-md transition-shadow cursor-help">
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="text-3xl font-bold text-purple-600">{firms.length}</div>
              </div>
              <div className="text-sm text-slate-600">Active Firms</div>
              <div className="text-xs text-slate-500 mt-1">tracked</div>
              <div className="mt-2 text-xs text-blue-600 flex items-center justify-center">
                <span className="text-lg mr-1">ℹ️</span> Hover for info
              </div>
            </div>
          </Tooltip>

          {/* Metric 4: Top Strategy */}
          <Tooltip text={metricTooltips.strategy}>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-100 hover:shadow-md transition-shadow cursor-help">
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="text-3xl font-bold text-orange-600">31%</div>
              </div>
              <div className="text-sm text-slate-600">Swing Trading</div>
              <div className="text-xs text-slate-500 mt-1">most popular</div>
              <div className="mt-2 text-xs text-blue-600 flex items-center justify-center">
                <span className="text-lg mr-1">ℹ️</span> Hover for info
              </div>
            </div>
          </Tooltip>
        </div>

        {/* Additional Insights Row */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Tooltip text={metricTooltips.reviews}>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-100 hover:shadow-md transition-shadow cursor-help">
              <h4 className="font-semibold text-slate-900 mb-1 flex items-center">
                <span className="text-lg mr-2">📊</span>
                Total Reviews
              </h4>
              <p className="text-2xl font-bold text-slate-700">{reviews.length}</p>
              <p className="text-xs text-slate-500 mt-1">Average rating: {Math.round(reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length * 10) / 10}/5.0</p>
              <div className="mt-2 text-xs text-blue-600 flex items-center">
                <span className="text-lg mr-1">ℹ️</span> Hover for info
              </div>
            </div>
          </Tooltip>
          
          <Tooltip text={metricTooltips.funding}>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-100 hover:shadow-md transition-shadow cursor-help">
              <h4 className="font-semibold text-slate-900 mb-1 flex items-center">
                <span className="text-lg mr-2">💰</span>
                Max Funding
              </h4>
              <p className="text-2xl font-bold text-slate-700">${Math.max(...firms.map(f => f.details.maxFunding)) / 1000}K</p>
              <p className="text-xs text-slate-500 mt-1">Highest available</p>
              <div className="mt-2 text-xs text-blue-600 flex items-center">
                <span className="text-lg mr-1">ℹ️</span> Hover for info
              </div>
            </div>
          </Tooltip>

          <Tooltip text={metricTooltips.region}>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-100 hover:shadow-md transition-shadow cursor-help">
              <h4 className="font-semibold text-slate-900 mb-1 flex items-center">
                <span className="text-lg mr-2">🌍</span>
                Top Region
              </h4>
              <p className="text-2xl font-bold text-slate-700">North America</p>
              <p className="text-xs text-slate-500 mt-1">45% of traders</p>
              <div className="mt-2 text-xs text-blue-600 flex items-center">
                <span className="text-lg mr-1">ℹ️</span> Hover for info
              </div>
            </div>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
