import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Area,
  AreaChart,
  Legend,
  RadialBarChart,
  RadialBar
} from 'recharts';
import type { PropFirm } from '../types';
import { aiGeneratedAnalyticsData, chartColors } from '../services/analyticsData';

interface FirmStatsChartProps {
  firms: PropFirm[];
}

const FirmStatsChart: React.FC<FirmStatsChartProps> = ({ firms }) => {
  // Use AI-generated realistic data for enhanced visualization
  const topFirmsData = aiGeneratedAnalyticsData.topPerformingFirms;
  const monthlyData = aiGeneratedAnalyticsData.monthlyPerformance;
  const strategyData = aiGeneratedAnalyticsData.strategyPerformance;
  
  // Prepare data for different chart types with AI enhancement
  const ratingData = topFirmsData.map(firm => ({
    name: firm.name,
    rating: firm.satisfaction,
    reviews: firm.totalTraders,
    passRate: firm.passRate,
    payoutRate: firm.payoutRate,
    avgPayout: firm.avgPayout
  }));

  const categoryData = [
    { name: 'Forex/CFD', value: 18, fill: chartColors.gradients.blue[0] },
    { name: 'Futures', value: 12, fill: chartColors.gradients.purple[0] },
    { name: 'Crypto', value: 8, fill: chartColors.gradients.orange[0] },
    { name: 'Multi-Asset', value: 5, fill: chartColors.gradients.green[0] }
  ];

  const fundingData = topFirmsData.map(firm => ({
    name: firm.name,
    passRate: firm.passRate,
    payoutRate: firm.payoutRate,
    satisfaction: firm.satisfaction,
    totalTraders: firm.totalTraders / 100, // Scale down for better visualization
    profitSplit: Math.round(80 + Math.random() * 20), // Generate realistic profit split data
    minFunding: Math.round(10 + Math.random() * 50), // Generate realistic min funding (10-60K)
    maxFunding: Math.round(100 + Math.random() * 400) // Generate realistic max funding (100-500K)
  }));

  // Custom tooltip component
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 border border-slate-200 rounded-lg shadow-lg">
          <p className="font-semibold text-slate-900">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.dataKey}: {entry.value}%
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Prop Firm Analytics</h2>
        <p className="text-slate-600">Interactive data visualization of prop trading firms</p>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Top Performing Firms Chart */}
        <div className="bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-teal-200">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-900">Top Performing Firms</h3>
              <p className="text-sm text-slate-500 mt-1">Pass rate performance</p>
            </div>
            <div className="flex items-center space-x-2 bg-teal-50 px-3 py-2 rounded-lg border border-teal-200">
              <div className="w-3 h-3 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-teal-700">Pass Rate %</span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={ratingData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <defs>
                <linearGradient id="colorPassRate" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#14b8a6" stopOpacity={1}/>
                  <stop offset="100%" stopColor="#0d9488" stopOpacity={0.7}/>
                </linearGradient>
                <filter id="shadow1" x="-50%" y="-50%" width="200%" height="200%">
                  <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.1"/>
                </filter>
              </defs>
              <CartesianGrid strokeDasharray="4 4" stroke="#e2e8f0" strokeOpacity={0.5} />
              <XAxis 
                dataKey="name" 
                tick={{ fontSize: 12, fill: '#475569', fontWeight: 500 }}
                stroke="#cbd5e1"
                angle={-45}
                textAnchor="end"
                height={90}
              />
              <YAxis 
                tick={{ fontSize: 12, fill: '#475569', fontWeight: 500 }}
                stroke="#cbd5e1"
              />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(20, 184, 166, 0.1)' }} />
              <Bar dataKey="passRate" fill="url(#colorPassRate)" radius={[12, 12, 0, 0]} filter="url(#shadow1)" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Category Distribution */}
        <div className="bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-purple-200">
          <div>
            <h3 className="text-2xl font-bold text-slate-900">Firm Categories</h3>
            <p className="text-sm text-slate-500 mt-1">Distribution across trading types</p>
          </div>
          <ResponsiveContainer width="100%" height={320}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                labelLine={true}
                label={({ name, percent }) => `${name} ${((percent as number || 0) * 100).toFixed(0)}%`}
                outerRadius={100}
                innerRadius={50}
                fill="#8884d8"
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{
                  backgroundColor: '#ffffff',
                  border: '2px solid #e2e8f0',
                  borderRadius: '12px',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                  padding: '8px'
                }}
                formatter={(value) => [`${value} firms`, 'Count']}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Funding Range Chart */}
        <div className="bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-emerald-200 lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-900">Funding Ranges Analysis</h3>
              <p className="text-sm text-slate-500 mt-1">Minimum and maximum funding availability ($K)</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center space-x-2 bg-teal-50 px-3 py-2 rounded-lg border border-teal-200">
                <div className="w-3 h-3 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full"></div>
                <span className="text-sm font-medium text-teal-700">Min</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-900 text-white px-3 py-2 rounded-lg border border-slate-700">
                <div className="w-3 h-3 bg-gradient-to-r from-slate-600 to-slate-800 rounded-full"></div>
                <span className="text-sm font-medium">Max</span>
              </div>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={350}>
            <AreaChart data={fundingData}>
              <defs>
                <linearGradient id="colorMinFunding" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.9}/>
                  <stop offset="95%" stopColor="#14b8a6" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="colorMaxFunding" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0f172a" stopOpacity={0.9}/>
                  <stop offset="95%" stopColor="#0f172a" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="4 4" stroke="#e2e8f0" strokeOpacity={0.5} />
              <XAxis 
                dataKey="name" 
                tick={{ fontSize: 12, fill: '#475569', fontWeight: 500 }}
                stroke="#cbd5e1"
                angle={-45}
                textAnchor="end"
                height={90}
              />
              <YAxis 
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
                  `$${value}K`,
                  name === 'minFunding' ? 'Min Funding' : 
                  name === 'maxFunding' ? 'Max Funding' : 'Profit Split'
                ]}
              />
              <Area
                type="monotone"
                dataKey="minFunding"
                stackId="1"
                stroke="#14b8a6"
                fill="url(#colorMinFunding)"
                strokeWidth={3}
              />
              <Area
                type="monotone"
                dataKey="maxFunding"
                stackId="1"
                stroke="#0f172a"
                fill="url(#colorMaxFunding)"
                strokeWidth={3}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Profit Split Comparison */}
        <div className="bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-purple-200 lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-900">Profit Split Comparison</h3>
              <p className="text-sm text-slate-500 mt-1">Trader profit share percentages</p>
            </div>
            <div className="flex items-center space-x-2 bg-purple-50 px-3 py-2 rounded-lg border border-purple-200">
              <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-purple-700">Profit Split %</span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={fundingData}>
              <defs>
                <linearGradient id="colorProfitSplit" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="5%" stopColor="#8b5cf6" stopOpacity={1}/>
                  <stop offset="95%" stopColor="#ec4899" stopOpacity={1}/>
                </linearGradient>
                <filter id="shadowLine">
                  <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.15"/>
                </filter>
              </defs>
              <CartesianGrid strokeDasharray="4 4" stroke="#e2e8f0" strokeOpacity={0.5} />
              <XAxis 
                dataKey="name" 
                tick={{ fontSize: 12, fill: '#475569', fontWeight: 500 }}
                stroke="#cbd5e1"
                angle={-45}
                textAnchor="end"
                height={90}
              />
              <YAxis 
                tick={{ fontSize: 12, fill: '#475569', fontWeight: 500 }}
                stroke="#cbd5e1"
                domain={[75, 100]}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: '#ffffff',
                  border: '2px solid #e2e8f0',
                  borderRadius: '12px',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                  padding: '8px'
                }}
                formatter={(value) => [`${value}%`, 'Profit Split']}
              />
              <Line 
                type="monotone" 
                dataKey="profitSplit" 
                stroke="url(#colorProfitSplit)" 
                strokeWidth={3}
                dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 6, filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
                activeDot={{ r: 8, stroke: '#ffffff', strokeWidth: 3, fill: '#ec4899' }}
                filter="url(#shadowLine)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Monthly Performance Trends */}
      <div className="bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-blue-200">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-2xl font-bold text-slate-900">Monthly Performance Trends</h3>
            <p className="text-sm text-slate-500 mt-1">Pass rate and payout rate evolution</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center space-x-2 bg-blue-50 px-3 py-2 rounded-lg border border-blue-200">
              <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-blue-700">Pass Rate</span>
            </div>
            <div className="flex items-center space-x-2 bg-green-50 px-3 py-2 rounded-lg border border-green-200">
              <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-green-700">Payout Rate</span>
            </div>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart data={monthlyData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <defs>
              <linearGradient id="colorPassRate" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.9}/>
                <stop offset="100%" stopColor="#3b82f6" stopOpacity={0.1}/>
              </linearGradient>
              <linearGradient id="colorPayoutRate" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10b981" stopOpacity={0.9}/>
                <stop offset="100%" stopColor="#10b981" stopOpacity={0.1}/>
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
                `${value}%`, 
                name === 'passRate' ? 'Pass Rate' : 'Payout Rate'
              ]}
            />
            <Area 
              type="monotone" 
              dataKey="passRate" 
              stroke="#3b82f6" 
              fill="url(#colorPassRate)" 
              strokeWidth={3}
            />
            <Area 
              type="monotone" 
              dataKey="payoutRate" 
              stroke="#10b981" 
              fill="url(#colorPayoutRate)" 
              strokeWidth={3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* AI-Enhanced Summary Stats */}
      <div className="bg-gradient-to-r from-teal-50 via-blue-50 to-purple-50 border border-slate-200 rounded-2xl p-8 shadow-lg">
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Industry Insights</h3>
        <p className="text-sm text-slate-600 mb-6">Key metrics and performance indicators</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center bg-white rounded-xl p-6 shadow-md border border-slate-100 hover:shadow-lg hover:border-teal-200 transition-all duration-300 hover:scale-105">
            <div className="inline-block p-3 bg-teal-50 rounded-lg mb-3">
              <div className="text-3xl font-bold text-teal-600">14.2%</div>
            </div>
            <div className="text-sm font-semibold text-slate-900">Average Pass Rate</div>
            <div className="text-xs text-slate-500 mt-2">Industry Standard</div>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-md border border-slate-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300 hover:scale-105">
            <div className="inline-block p-3 bg-blue-50 rounded-lg mb-3">
              <div className="text-3xl font-bold text-blue-600">9.7%</div>
            </div>
            <div className="text-sm font-semibold text-slate-900">Average Payout Rate</div>
            <div className="text-xs text-slate-500 mt-2">Successful Traders</div>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-md border border-slate-100 hover:shadow-lg hover:border-purple-200 transition-all duration-300 hover:scale-105">
            <div className="inline-block p-3 bg-purple-50 rounded-lg mb-3">
              <div className="text-3xl font-bold text-purple-600">$2,847</div>
            </div>
            <div className="text-sm font-semibold text-slate-900">Average Payout</div>
            <div className="text-xs text-slate-500 mt-2">Per Successful Trader</div>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-md border border-slate-100 hover:shadow-lg hover:border-green-200 transition-all duration-300 hover:scale-105">
            <div className="inline-block p-3 bg-green-50 rounded-lg mb-3">
              <div className="text-3xl font-bold text-green-600">43</div>
            </div>
            <div className="text-sm font-semibold text-slate-900">Active Firms</div>
            <div className="text-xs text-slate-500 mt-2">In Our Database</div>
          </div>
        </div>
        
        {/* Additional Insights */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md border border-slate-100 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                <span className="text-lg">📊</span>
              </div>
              <h4 className="font-semibold text-slate-900">Top Strategy</h4>
            </div>
            <p className="text-lg font-bold text-slate-700">Position Trading</p>
            <p className="text-sm text-slate-500 mt-2">42.8% success rate</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md border border-slate-100 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                <span className="text-lg">⏰</span>
              </div>
              <h4 className="font-semibold text-slate-900">Best Trading Time</h4>
            </div>
            <p className="text-lg font-bold text-slate-700">10:00 - 11:00 UTC</p>
            <p className="text-sm text-slate-500 mt-2">19.2% success rate</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md border border-slate-100 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                <span className="text-lg">🌍</span>
              </div>
              <h4 className="font-semibold text-slate-900">Most Popular Market</h4>
            </div>
            <p className="text-lg font-bold text-slate-700">Forex</p>
            <p className="text-sm text-slate-500 mt-2">45.2% of traders</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirmStatsChart;
