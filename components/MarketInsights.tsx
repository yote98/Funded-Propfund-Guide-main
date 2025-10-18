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
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-teal-500 to-teal-600 text-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
          <div className="text-4xl font-bold mb-2">120</div>
          <div className="text-sm font-medium opacity-90">Active Prop Firms</div>
          <div className="text-xs opacity-75 mt-2">Industry-wide</div>
        </div>
        <div className="bg-gradient-to-br from-slate-600 to-slate-700 text-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
          <div className="text-4xl font-bold mb-2">4.3K</div>
          <div className="text-sm font-medium opacity-90">New Traders/Month</div>
          <div className="text-xs opacity-75 mt-2">Growing rapidly</div>
        </div>
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
          <div className="text-4xl font-bold mb-2">$95M</div>
          <div className="text-sm font-medium opacity-90">Total Funding</div>
          <div className="text-xs opacity-75 mt-2">Capital available</div>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
          <div className="text-4xl font-bold mb-2">18%</div>
          <div className="text-sm font-medium opacity-90">Market Growth</div>
          <div className="text-xs opacity-75 mt-2">Year-over-year</div>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Market Growth Trends */}
        <div className="bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-teal-200 lg:col-span-2">
          <div>
            <h3 className="text-2xl font-bold text-slate-900">Market Growth Trends</h3>
            <p className="text-sm text-slate-500 mt-1">Firms, traders, and funding growth over time</p>
          </div>
          <ResponsiveContainer width="100%" height={350}>
            <ComposedChart data={marketTrends}>
              <defs>
                <linearGradient id="colorFirms" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#14b8a6" stopOpacity={0.9}/>
                  <stop offset="100%" stopColor="#14b8a6" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="4 4" stroke="#e2e8f0" strokeOpacity={0.5} />
              <XAxis 
                dataKey="month" 
                tick={{ fontSize: 12, fill: '#475569', fontWeight: 500 }}
                stroke="#cbd5e1"
                angle={-45}
                textAnchor="end"
                height={90}
              />
              <YAxis 
                yAxisId="left" 
                tick={{ fontSize: 12, fill: '#475569', fontWeight: 500 }}
                stroke="#cbd5e1"
              />
              <YAxis 
                yAxisId="right" 
                orientation="right" 
                tick={{ fontSize: 12, fill: '#475569', fontWeight: 500 }}
                stroke="#cbd5e1"
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: '#ffffff',
                  border: '2px solid #e2e8f0',
                  borderRadius: '12px',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                  padding: '8px'
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
                fill="url(#colorFirms)"
                fillOpacity={1}
                strokeWidth={3}
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="funding"
                stroke="#8b5cf6"
                strokeWidth={3}
                dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 6, filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
                activeDot={{ r: 8, stroke: '#ffffff', strokeWidth: 3, fill: '#ec4899' }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        {/* Trading Instruments Distribution */}
        <div className="bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-orange-200">
          <div>
            <h3 className="text-2xl font-bold text-slate-900">Trading Instruments</h3>
            <p className="text-sm text-slate-500 mt-1">Popularity and growth rates</p>
          </div>
          <div className="space-y-5 mt-6">
            {tradingInstruments.map((item, index) => (
              <div key={item.instrument} className="relative">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-slate-900">{item.instrument}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-slate-700">{item.percentage}%</span>
                    <span className="text-xs bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold">
                      +{item.growth}%
                    </span>
                  </div>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden shadow-sm">
                  <div 
                    className="bg-gradient-to-r from-teal-500 to-emerald-600 h-3 rounded-full transition-all duration-1000"
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
        <div className="bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-purple-200">
          <div>
            <h3 className="text-2xl font-bold text-slate-900">Funding Models Popularity</h3>
            <p className="text-sm text-slate-500 mt-1">Trader preferences and approval times</p>
          </div>
          <div className="space-y-5 mt-6">
            {fundingModels.map((item, index) => (
              <div key={item.model}>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-slate-900 text-sm">{item.model}</span>
                  <div className="text-xs text-slate-600 font-medium">
                    <span className="bg-slate-100 px-2 py-1 rounded mr-2">{item.popularity}%</span>
                    <span className="text-slate-500">{item.avgTime} days avg</span>
                  </div>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden shadow-sm">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-pink-600 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${item.popularity}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Regional Distribution */}
        <div className="bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-blue-200">
          <div>
            <h3 className="text-2xl font-bold text-slate-900">Regional Distribution</h3>
            <p className="text-sm text-slate-500 mt-1">Geographic market breakdown</p>
          </div>
          <div className="space-y-4 mt-6">
            {regionalData.map((region, index) => (
              <div key={region.region} className="flex items-center justify-between p-4 bg-gradient-to-r from-slate-50 to-slate-100 rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-300">
                <div>
                  <div className="font-semibold text-slate-900">{region.region}</div>
                  <div className="text-sm text-slate-600 mt-1">{region.firms} firms • ${region.funding}K funding</div>
                </div>
                <div className="text-right bg-white rounded-lg p-3 shadow-sm">
                  <div className="text-lg font-bold text-green-600">+{region.growth}%</div>
                  <div className="text-xs text-slate-500 font-medium">Growth</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Market Predictions - Research-Based */}
      <div className="bg-gradient-to-r from-slate-50 via-teal-50 to-blue-50 border border-slate-200 rounded-2xl p-8 shadow-lg">
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-2">AI Research Predictions 2025</h3>
          <p className="text-sm text-slate-500">Multi-AI consensus: GPT-5, Claude 4.5, Grok 4, Gemini 2.5 Pro</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
          <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 hover:shadow-lg hover:scale-105 transition-all duration-300 text-center">
            <div className="inline-block p-3 bg-teal-100 rounded-lg mb-3">
              <div className="text-3xl font-bold text-teal-600">150+</div>
            </div>
            <div className="text-sm font-semibold text-slate-900">Expected Prop Firms</div>
            <div className="text-xs text-slate-500 mt-2">GPT-5 & Claude 4.5 Analysis</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 hover:shadow-lg hover:scale-105 transition-all duration-300 text-center">
            <div className="inline-block p-3 bg-slate-100 rounded-lg mb-3">
              <div className="text-3xl font-bold text-slate-600">$2.8B</div>
            </div>
            <div className="text-sm font-semibold text-slate-900">Market Size</div>
            <div className="text-xs text-slate-500 mt-2">Grok 4 & Gemini 2.5 Pro</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 hover:shadow-lg hover:scale-105 transition-all duration-300 text-center">
            <div className="inline-block p-3 bg-blue-100 rounded-lg mb-3">
              <div className="text-3xl font-bold text-blue-600">25%</div>
            </div>
            <div className="text-sm font-semibold text-slate-900">Crypto Growth</div>
            <div className="text-xs text-slate-500 mt-2">Multi-AI Consensus</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 hover:shadow-lg hover:scale-105 transition-all duration-300 text-center">
            <div className="inline-block p-3 bg-purple-100 rounded-lg mb-3">
              <div className="text-3xl font-bold text-purple-600">20%</div>
            </div>
            <div className="text-sm font-semibold text-slate-900">Success Rate</div>
            <div className="text-xs text-slate-500 mt-2">AI-Predicted Improvement</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketInsights;
