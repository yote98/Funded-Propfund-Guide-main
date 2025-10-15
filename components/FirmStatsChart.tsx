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
  AreaChart
} from 'recharts';
import type { PropFirm } from '../types';

interface FirmStatsChartProps {
  firms: PropFirm[];
}

const FirmStatsChart: React.FC<FirmStatsChartProps> = ({ firms }) => {
  // Prepare data for different chart types
  const ratingData = firms.map(firm => ({
    name: firm.shortName,
    rating: firm.rating,
    reviews: firm.reviewCount,
    maxFunding: firm.details.maxFunding / 1000, // Convert to thousands
    profitSplit: firm.details.profitSplit
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

  const COLORS = ['#14b8a6', '#0f172a', '#64748b', '#06b6d4', '#8b5cf6', '#f59e0b'];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Prop Firm Analytics</h2>
        <p className="text-slate-600">Interactive data visualization of prop trading firms</p>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Firm Ratings Chart */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-slate-900 mb-4">Firm Ratings & Reviews</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={ratingData}>
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
              <Bar dataKey="rating" fill="#14b8a6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Category Distribution */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-slate-900 mb-4">Firm Categories</h3>
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
          <h3 className="text-xl font-semibold text-slate-900 mb-4">Funding Ranges (in $K)</h3>
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
          <h3 className="text-xl font-semibold text-slate-900 mb-4">Profit Split Comparison</h3>
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
