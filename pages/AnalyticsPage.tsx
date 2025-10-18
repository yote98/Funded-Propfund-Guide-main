import React, { useEffect, useState } from 'react';
import FirmStatsChart from '../components/FirmStatsChart';
import ReviewAnalytics from '../components/ReviewAnalytics';
import MarketInsights from '../components/MarketInsights';
import TradingStrategyAnalytics from '../components/TradingStrategyAnalytics';
import CostAnalysisDashboard from '../components/CostAnalysisDashboard';
import SuccessMetrics from '../components/SuccessMetrics';
import MarketTimingInsights from '../components/MarketTimingInsights';
import FirmDeepDives from '../components/FirmDeepDives';
import ErrorBoundary from '../components/ErrorBoundary';
import type { PropFirm, UserReview } from '../types';

interface AnalyticsPageProps {
  firms: PropFirm[];
  reviews: UserReview[];
}

const AnalyticsPage: React.FC<AnalyticsPageProps> = ({ firms, reviews }) => {
  const [activeTab, setActiveTab] = useState<'firms' | 'reviews' | 'market' | 'strategies' | 'costs' | 'success' | 'timing' | 'deep-dives'>('firms');
  const [platform, setPlatform] = useState<string>(() => localStorage.getItem('analytics_platform') || 'All Platforms');
  const [region, setRegion] = useState<string>(() => localStorage.getItem('analytics_region') || 'All Regions');

  useEffect(() => {
    localStorage.setItem('analytics_platform', platform);
  }, [platform]);
  useEffect(() => {
    localStorage.setItem('analytics_region', region);
  }, [region]);

  const tabs = [
    { id: 'firms', label: 'Firm Analytics', icon: '📊' },
    { id: 'reviews', label: 'Review Analytics', icon: '⭐' },
    { id: 'market', label: 'Market Insights', icon: '📈' },
    { id: 'strategies', label: 'Trading Strategies', icon: '🎯' },
    { id: 'costs', label: 'Cost Analysis', icon: '💰' },
    { id: 'success', label: 'Success Metrics', icon: '🏆' },
    { id: 'timing', label: 'Market Timing', icon: '⏰' },
    { id: 'deep-dives', label: 'Firm Deep Dives', icon: '🔍' }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Data Analytics Dashboard</h1>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Comprehensive data visualization and analytics for prop trading firms, user reviews, and market trends.
        </p>
      </div>

      {/* Global Filters */}
      <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div className="flex items-center gap-2">
          <label className="text-sm text-slate-600">Platform</label>
          <select
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
            className="border border-slate-300 rounded-lg px-3 py-2 text-sm"
          >
            <option>All Platforms</option>
            <option>Tradovate</option>
            <option>Rithmic</option>
            <option>DXTrade</option>
            <option>NinjaTrader</option>
            <option>ProjectX</option>
            <option>cTrader</option>
            <option>MetaTrader</option>
          </select>
          <label className="text-sm text-slate-600 ml-4">Region</label>
          <select
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className="border border-slate-300 rounded-lg px-3 py-2 text-sm"
          >
            <option>All Regions</option>
            <option>North America</option>
            <option>Europe</option>
            <option>Asia Pacific</option>
            <option>Other</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          {platform !== 'All Platforms' && (
            <span className="text-xs bg-slate-100 border border-slate-200 text-slate-700 px-2 py-1 rounded-full">Platform: {platform}</span>
          )}
          {region !== 'All Regions' && (
            <span className="text-xs bg-slate-100 border border-slate-200 text-slate-700 px-2 py-1 rounded-full">Region: {region}</span>
          )}
          {(platform !== 'All Platforms' || region !== 'All Regions') && (
            <button
              className="text-xs text-teal-700 hover:underline ml-1"
              onClick={() => { setPlatform('All Platforms'); setRegion('All Regions'); }}
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-8">
        <div className="bg-slate-100 rounded-xl p-2 inline-flex">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="min-h-[600px]">
        
        {activeTab === 'firms' && <FirmStatsChart firms={firms} />}
        {activeTab === 'reviews' && <ReviewAnalytics reviews={reviews} />}
        {activeTab === 'market' && <MarketInsights selectedPlatform={platform} selectedRegion={region} />}
        {activeTab === 'strategies' && <TradingStrategyAnalytics />}
        {activeTab === 'costs' && <CostAnalysisDashboard />}
        {activeTab === 'success' && (
          <ErrorBoundary 
            fallback={
              <div className="p-4 border border-yellow-300 bg-yellow-50 rounded">
                <div className="font-medium text-yellow-900 mb-1">Loading Success Metrics…</div>
                <div className="text-sm text-yellow-800">If this persists, try a hard refresh (Ctrl+F5).</div>
              </div>
            }
          >
            <SuccessMetrics 
              evaluationPassRate={0.15}
              averageTimeToPass={45}
              traderRetentionRate={0.68}
              scalingSuccessRate={0.42}
            />
          </ErrorBoundary>
        )}
        {activeTab === 'timing' && <MarketTimingInsights />}
        {activeTab === 'deep-dives' && <FirmDeepDives />}
      </div>

      {/* Quick Stats Footer */}
      <div className="mt-12 bg-gradient-to-r from-teal-50 to-slate-50 border border-slate-200 rounded-xl p-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-2xl font-bold text-teal-600">{firms.length}</div>
            <div className="text-sm text-slate-600">Prop Firms</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-slate-600">{reviews.length}</div>
            <div className="text-sm text-slate-600">User Reviews</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-600">
              {Math.round(reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length * 10) / 10}
            </div>
            <div className="text-sm text-slate-600">Avg Rating</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-600">
              ${Math.max(...firms.map(f => f.details.maxFunding)) / 1000}K
            </div>
            <div className="text-sm text-slate-600">Max Funding</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
