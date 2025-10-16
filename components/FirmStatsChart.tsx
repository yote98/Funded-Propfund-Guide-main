import React, { useState } from 'react';
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
  ScatterChart,
  Scatter,
  ZAxis,
  ComposedChart,
  ReferenceLine
} from 'recharts';
import type { PropFirm } from '../types';

interface FirmStatsChartProps {
  firms: PropFirm[];
}

const FirmStatsChart: React.FC<FirmStatsChartProps> = ({ firms }) => {
  const [hoveredBar, setHoveredBar] = useState<string | null>(null);
  const [activeChart, setActiveChart] = useState<'2d' | '3d'>('2d');

  // Prepare data for different chart types
  const ratingData = firms.map(firm => ({
    name: firm.shortName,
    rating: firm.rating,
    reviews: firm.reviewCount,
    maxFunding: firm.details.maxFunding / 1000, // Convert to thousands
    profitSplit: firm.details.profitSplit,
    drawdown: firm.details.maxDrawdown,
    minFunding: firm.details.minFunding / 1000
  }));

  const categoryData = firms.reduce((acc, firm) => {
    firm.categories.forEach(category => {
      const existing = acc.find(item => item.name === category);
      if (existing) {
        existing.value += 1;
      } else {
        acc.push({ name: category, value: 1 });
      }
    });
    return acc;
  }, [] as { name: string; value: number }[]);

  const fundingData = firms.map(firm => ({
    name: firm.shortName,
    minFunding: firm.details.minFunding / 1000,
    maxFunding: firm.details.maxFunding / 1000,
    profitSplit: firm.details.profitSplit
  }));

  // 3D Scatter plot data
  const scatterData = firms.map(firm => ({
    x: firm.rating,
    y: firm.details.maxFunding / 1000,
    z: firm.details.profitSplit,
    name: firm.shortName,
    reviews: firm.reviewCount,
    drawdown: firm.details.maxDrawdown
  }));

  const COLORS = ['#14b8a6', '#0f172a', '#64748b', '#06b6d4', '#8b5cf6', '#f59e0b'];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Prop Firm Analytics</h2>
        <p className="text-slate-600 mb-4">Interactive data visualization of prop trading firms</p>
        
        {/* 3D Toggle */}
        <div className="flex items-center justify-center gap-4">
          <span className="text-sm text-slate-600">View Mode:</span>
          <div className="bg-slate-100 rounded-lg p-1 inline-flex">
            <button
              onClick={() => setActiveChart('2d')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                activeChart === '2d' 
                  ? 'bg-white text-slate-900 shadow-sm' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              2D Charts
            </button>
            <button
              onClick={() => setActiveChart('3d')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                activeChart === '3d' 
                  ? 'bg-white text-slate-900 shadow-sm' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              3D Visualization
            </button>
          </div>
        </div>
      </div>

      {/* Charts Grid */}
      {activeChart === '2d' ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Enhanced Firm Ratings Chart */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/images/icons/chart-3d.png"
                alt="Firm Ratings"
                className="w-6 h-6 drop-shadow"
                draggable={false}
              />
              <h3 className="text-xl font-semibold text-slate-900">Firm Ratings & Reviews</h3>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart data={ratingData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis 
                  dataKey="name" 
                  tick={{ fontSize: 12 }}
                  stroke="#64748b"
                />
                <YAxis 
                  tick={{ fontSize: 12 }}
                  stroke="#64748b"
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                  formatter={(value, name) => [
                    name === 'rating' ? `${value}/5.0` : 
                    name === 'reviews' ? `${value} reviews` : 
                    name === 'maxFunding' ? `$${value}K` : 
                    `${value}%`,
                    name === 'rating' ? 'Rating' :
                    name === 'reviews' ? 'Reviews' :
                    name === 'maxFunding' ? 'Max Funding' : 'Profit Split'
                  ]}
                />
                <Bar 
                  dataKey="rating" 
                  fill="#14b8a6" 
                  radius={[4, 4, 0, 0]}
                  onMouseEnter={(data) => setHoveredBar(data.name)}
                  onMouseLeave={() => setHoveredBar(null)}
                  style={{
                    filter: hoveredBar ? 'brightness(1.1)' : 'none',
                    transition: 'all 0.3s ease'
                  } as React.CSSProperties}
                />
                <Line 
                  type="monotone" 
                  dataKey="reviews" 
                  stroke="#8b5cf6" 
                  strokeWidth={2}
                  dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 4 }}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>

        {/* Category Distribution */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <img src="/images/icons/pie-3d.png" alt="Categories" className="w-6 h-6 drop-shadow" draggable={false} />
            <h3 className="text-xl font-semibold text-slate-900">Firm Categories</h3>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
                formatter={(value) => [`${value} firms`, 'Count']}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Funding Range Chart */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/images/icons/chart-3d.png"
                alt="Funding Ranges"
                className="w-6 h-6 drop-shadow"
                draggable={false}
              />
              <h3 className="text-xl font-semibold text-slate-900">Funding Ranges (in $K)</h3>
            </div>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={fundingData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis 
                dataKey="name" 
                tick={{ fontSize: 12 }}
                stroke="#64748b"
              />
              <YAxis 
                tick={{ fontSize: 12 }}
                stroke="#64748b"
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
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
                fill="#14b8a6"
                fillOpacity={0.3}
              />
              <Area
                type="monotone"
                dataKey="maxFunding"
                stackId="1"
                stroke="#0f172a"
                fill="#0f172a"
                fillOpacity={0.3}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Profit Split Comparison */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/images/icons/chart-3d.png"
                alt="Profit Split"
                className="w-6 h-6 drop-shadow"
                draggable={false}
              />
              <h3 className="text-xl font-semibold text-slate-900">Profit Split Comparison</h3>
            </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={ratingData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis 
                dataKey="name" 
                tick={{ fontSize: 12 }}
                stroke="#64748b"
              />
              <YAxis 
                tick={{ fontSize: 12 }}
                stroke="#64748b"
                domain={[0, 100]}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
                formatter={(value) => [`${value}%`, 'Profit Split']}
              />
              <Line 
                type="monotone" 
                dataKey="profitSplit" 
                stroke="#8b5cf6" 
                strokeWidth={3}
                dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: '#8b5cf6', strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        </div>
      ) : (
        /* 3D Visualization */
        <div className="space-y-8">
          {/* 3D Scatter Plot */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">3D Firm Analysis</h3>
            <p className="text-sm text-slate-600 mb-4">
              Interactive 3D scatter plot showing rating (X), max funding (Y), and profit split (Z)
            </p>
            <ResponsiveContainer width="100%" height={400}>
              <ScatterChart data={scatterData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis 
                  type="number" 
                  dataKey="x" 
                  name="Rating"
                  domain={[0, 5]}
                  tick={{ fontSize: 12 }}
                  stroke="#64748b"
                />
                <YAxis 
                  type="number" 
                  dataKey="y" 
                  name="Max Funding ($K)"
                  tick={{ fontSize: 12 }}
                  stroke="#64748b"
                />
                <ZAxis 
                  type="number" 
                  dataKey="z" 
                  name="Profit Split (%)"
                  range={[50, 400]}
                />
                <Tooltip 
                  cursor={{ strokeDasharray: '3 3' }}
                  contentStyle={{
                    backgroundColor: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                  formatter={(value, name, props) => {
                    if (name === 'x') return [`${value}/5.0`, 'Rating'];
                    if (name === 'y') return [`$${value}K`, 'Max Funding'];
                    if (name === 'z') return [`${value}%`, 'Profit Split'];
                    return [value, name];
                  }}
                />
                <Scatter 
                  dataKey="z" 
                  fill="#14b8a6"
                  fillOpacity={0.7}
                  stroke="#0f172a"
                  strokeWidth={1}
                />
              </ScatterChart>
            </ResponsiveContainer>
          </div>

          {/* 3D Surface-like Visualization */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Multi-Dimensional Analysis</h3>
            <p className="text-sm text-slate-600 mb-4">
              Combined metrics showing the relationship between multiple firm attributes
            </p>
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart data={ratingData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis 
                  dataKey="name" 
                  tick={{ fontSize: 12 }}
                  stroke="#64748b"
                />
                <YAxis 
                  tick={{ fontSize: 12 }}
                  stroke="#64748b"
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="maxFunding"
                  stackId="1"
                  stroke="#14b8a6"
                  fill="#14b8a6"
                  fillOpacity={0.3}
                />
                <Area
                  type="monotone"
                  dataKey="minFunding"
                  stackId="1"
                  stroke="#0f172a"
                  fill="#0f172a"
                  fillOpacity={0.3}
                />
                <Line 
                  type="monotone" 
                  dataKey="profitSplit" 
                  stroke="#8b5cf6" 
                  strokeWidth={3}
                  dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 5 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="rating" 
                  stroke="#f59e0b" 
                  strokeWidth={2}
                  dot={{ fill: '#f59e0b', strokeWidth: 2, r: 4 }}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {/* Summary Stats */}
      <div className="bg-gradient-to-r from-teal-50 to-slate-50 border border-slate-200 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-slate-900 mb-4">Key Statistics</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-teal-600">{firms.length}</div>
            <div className="text-sm text-slate-600">Total Firms</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-slate-600">
              {(firms.reduce((sum, firm) => sum + firm.rating, 0) / firms.length).toFixed(1)}
            </div>
            <div className="text-sm text-slate-600">Avg Rating</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-slate-600">
              ${Math.max(...firms.map(f => f.details.maxFunding)) / 1000}K
            </div>
            <div className="text-sm text-slate-600">Max Funding</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-slate-600">
              {Math.max(...firms.map(f => f.details.profitSplit))}%
            </div>
            <div className="text-sm text-slate-600">Best Profit Split</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirmStatsChart;
