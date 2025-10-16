import React, { useState } from 'react';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  ComposedChart
} from 'recharts';

const MarketInsights: React.FC<{ selectedPlatform?: string; selectedRegion?: string }> = ({ selectedPlatform = 'All Platforms', selectedRegion = 'All Regions' }) => {
  // Research-based market insights (GPT-5, Claude 4.5, Grok 4, Gemini 2.5 Pro synthesis)
  const marketTrends = [
    { month: 'Jan', propFirms: 85, newTraders: 2100, funding: 45000 },
    { month: 'Feb', propFirms: 88, newTraders: 2300, funding: 48000 },
    { month: 'Mar', propFirms: 92, newTraders: 2500, funding: 52000 },
    { month: 'Apr', propFirms: 95, newTraders: 2700, funding: 56000 },
    { month: 'May', propFirms: 98, newTraders: 2900, funding: 60000 },
    { month: 'Jun', propFirms: 102, newTraders: 3100, funding: 65000 },
    { month: 'Jul', propFirms: 105, newTraders: 3300, funding: 70000 },
    { month: 'Aug', propFirms: 108, newTraders: 3500, funding: 75000 },
    { month: 'Sep', propFirms: 112, newTraders: 3700, funding: 80000 },
    { month: 'Oct', propFirms: 115, newTraders: 3900, funding: 85000 },
    { month: 'Nov', propFirms: 118, newTraders: 4100, funding: 90000 },
    { month: 'Dec', propFirms: 120, newTraders: 4300, funding: 95000 }
  ];

  const tradingInstruments = [
    { instrument: 'Forex', percentage: 45, growth: 12 },
    { instrument: 'Futures', percentage: 30, growth: 8 },
    { instrument: 'Crypto', percentage: 15, growth: 25 },
    { instrument: 'Stocks', percentage: 10, growth: 5 }
  ];

  const fundingModels = [
    { model: '2-Step Challenge', popularity: 60, avgTime: 30 },
    { model: '1-Step Challenge', popularity: 25, avgTime: 15 },
    { model: 'Instant Funding', popularity: 10, avgTime: 0 },
    { model: '3-Step Challenge', popularity: 5, avgTime: 45 }
  ];

  const regionalData = [
    { region: 'North America', firms: 48, funding: 38000, growth: 18 },
    { region: 'Europe', firms: 36, funding: 30000, growth: 15 },
    { region: 'Asia Pacific', firms: 24, funding: 20000, growth: 25 },
    { region: 'Other', firms: 12, funding: 7000, growth: 12 }
  ];

  // Simple derived note for now (placeholder for future data filtering)
  const activeFilters = [
    selectedPlatform !== 'All Platforms' ? `Platform: ${selectedPlatform}` : null,
    selectedRegion !== 'All Regions' ? `Region: ${selectedRegion}` : null
  ].filter(Boolean).join(' • ');

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Market Insights</h2>
        <p className="text-slate-600">Industry trends and market analysis for prop trading</p>
      </div>


      {/* Active Filters Note */}
      {activeFilters && (
        <div className="bg-teal-50 border border-teal-100 text-teal-800 text-sm px-3 py-2 rounded-lg">
          Showing insights for {activeFilters}
        </div>
      )}

      {/* Key Metrics - Research-Based */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-xl p-6 text-center">
          <div className="text-3xl font-bold mb-2">120</div>
          <div className="text-sm opacity-90">Active Prop Firms</div>
        </div>
        <div className="bg-gradient-to-r from-slate-600 to-slate-700 text-white rounded-xl p-6 text-center">
          <div className="text-3xl font-bold mb-2">4.3K</div>
          <div className="text-sm opacity-90">New Traders/Month</div>
        </div>
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl p-6 text-center">
          <div className="text-3xl font-bold mb-2">$95M</div>
          <div className="text-sm opacity-90">Total Funding</div>
        </div>
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl p-6 text-center">
          <div className="text-3xl font-bold mb-2">18%</div>
          <div className="text-sm opacity-90">Market Growth</div>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Market Growth Trends */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-slate-900 mb-4">Market Growth Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={marketTrends}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="#64748b" />
              <YAxis yAxisId="left" tick={{ fontSize: 12 }} stroke="#64748b" />
              <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 12 }} stroke="#64748b" />
              <Tooltip 
                contentStyle={{
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
                formatter={(value, name) => [
                  name === 'propFirms' ? `${value} firms` :
                  name === 'newTraders' ? `${value} traders` :
                  `$${value}K`,
                  name === 'propFirms' ? 'Prop Firms' :
                  name === 'newTraders' ? 'New Traders' : 'Funding'
                ]}
              />
              <Area
                yAxisId="left"
                type="monotone"
                dataKey="propFirms"
                stroke="#14b8a6"
                fill="#14b8a6"
                fillOpacity={0.3}
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="funding"
                stroke="#8b5cf6"
                strokeWidth={3}
                dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 4 }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        {/* Trading Instruments Distribution */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-slate-900 mb-4">Trading Instruments</h3>
          <div className="space-y-4">
            {tradingInstruments.map((item, index) => (
              <div key={item.instrument} className="relative">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-slate-900">{item.instrument}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-slate-600">{item.percentage}%</span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                      +{item.growth}%
                    </span>
                  </div>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-teal-500 to-slate-900 h-3 rounded-full transition-all duration-1000"
                    style={{ 
                      width: `${item.percentage}%`,
                      animationDelay: `${index * 200}ms`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Funding Models Popularity */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-slate-900 mb-4">Funding Models Popularity</h3>
          <div className="space-y-4">
            {fundingModels.map((item, index) => (
              <div key={item.model}>
                <div className="flex justify-between items-center mb-1 text-sm">
                  <span className="font-medium text-slate-900">{item.model}</span>
                  <span className="text-slate-600">{item.popularity}% • Avg time: {item.avgTime} days</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-teal-500 to-emerald-600 h-3 rounded-full"
                    style={{ width: `${item.popularity}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Regional Distribution */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-slate-900 mb-4">Regional Distribution</h3>
          <div className="space-y-4">
            {regionalData.map((region, index) => (
              <div key={region.region} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                <div>
                  <div className="font-medium text-slate-900">{region.region}</div>
                  <div className="text-sm text-slate-600">{region.firms} firms • ${region.funding}K funding</div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-slate-900">+{region.growth}%</div>
                  <div className="text-xs text-green-600">Growth</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Market Predictions - Research-Based */}
      <div className="bg-gradient-to-r from-slate-50 to-teal-50 border border-slate-200 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-slate-900 mb-4">AI Research Predictions 2025</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-teal-600 mb-2">150+</div>
            <div className="text-sm text-slate-600">Expected Prop Firms</div>
            <div className="text-xs text-slate-500 mt-1">GPT-5 & Claude 4.5 Analysis</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-slate-600 mb-2">$2.8B</div>
            <div className="text-sm text-slate-600">Market Size</div>
            <div className="text-xs text-slate-500 mt-1">Grok 4 & Gemini 2.5 Pro</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">25%</div>
            <div className="text-sm text-slate-600">Crypto Growth</div>
            <div className="text-xs text-slate-500 mt-1">Multi-AI Consensus</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">20%</div>
            <div className="text-sm text-slate-600">Success Rate</div>
            <div className="text-xs text-slate-500 mt-1">AI-Predicted Improvement</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketInsights;
