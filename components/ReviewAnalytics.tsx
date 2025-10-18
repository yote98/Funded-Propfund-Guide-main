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
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from 'recharts';
import type { UserReview } from '../types';

interface ReviewAnalyticsProps {
  reviews: UserReview[];
}

const ReviewAnalytics: React.FC<ReviewAnalyticsProps> = ({ reviews }) => {
  // Prepare data for different chart types
  const ratingDistribution = {
    5: reviews.filter(r => r.rating === 5).length,
    4: reviews.filter(r => r.rating === 4).length,
    3: reviews.filter(r => r.rating === 3).length,
    2: reviews.filter(r => r.rating === 2).length,
    1: reviews.filter(r => r.rating === 1).length
  };

  const ratingData = Object.entries(ratingDistribution).map(([rating, count]) => ({
    rating: `${rating} Star${rating !== '1' ? 's' : ''}`,
    count,
    percentage: Math.round((count / reviews.length) * 100)
  }));

  const locationData = reviews.reduce((acc, review) => {
    const country = review.userLocation?.split(', ')[1] || 'Unknown';
    const existing = acc.find(item => item.country === country);
    if (existing) {
      existing.count += 1;
    } else {
      acc.push({ country, count: 1 });
    }
    return acc;
  }, [] as { country: string; count: number }[]).sort((a, b) => b.count - a.count).slice(0, 8);

  const experienceData = reviews.reduce((acc, review) => {
    const exp = review.tradingExperience || 'Unknown';
    const existing = acc.find(item => item.experience === exp);
    if (existing) {
      existing.count += 1;
    } else {
      acc.push({ experience: exp, count: 1 });
    }
    return acc;
  }, [] as { experience: string; count: number }[]);

  const monthlyReviews = reviews.reduce((acc, review) => {
    const month = new Date(review.date).toLocaleDateString('en-US', { month: 'short', year: '2-digit' });
    const existing = acc.find(item => item.month === month);
    if (existing) {
      existing.count += 1;
    } else {
      acc.push({ month, count: 1 });
    }
    return acc;
  }, [] as { month: string; count: number }[]).sort((a, b) => new Date(a.month).getTime() - new Date(b.month).getTime());

  const profitData = reviews
    .filter(r => r.profitMade && r.profitMade > 0)
    .map(r => ({
      name: r.userName.split(' ')[0],
      profit: r.profitMade! / 1000, // Convert to thousands
      rating: r.rating
    }))
    .sort((a, b) => b.profit - a.profit)
    .slice(0, 10);

  const COLORS = ['#14b8a6', '#0f172a', '#64748b', '#06b6d4', '#8b5cf6', '#f59e0b', '#ef4444', '#10b981'];

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  const totalReviews = reviews.length;
  const verifiedReviews = reviews.filter(r => r.verified).length;
  const positiveReviews = reviews.filter(r => r.rating >= 4).length;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Review Analytics</h2>
        <p className="text-slate-600">Comprehensive analysis of user reviews and feedback</p>
      </div>


      {/* Summary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-teal-50 to-white border border-teal-200 rounded-2xl p-6 text-center shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
          <div className="inline-block p-3 bg-teal-100 rounded-lg mb-3">
            <div className="text-3xl font-bold text-teal-600">{totalReviews}</div>
          </div>
          <div className="text-sm font-semibold text-slate-900">Total Reviews</div>
          <div className="text-xs text-slate-500 mt-1">From traders worldwide</div>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-2xl p-6 text-center shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
          <div className="inline-block p-3 bg-blue-100 rounded-lg mb-3">
            <div className="text-3xl font-bold text-blue-600">{averageRating.toFixed(1)}</div>
          </div>
          <div className="text-sm font-semibold text-slate-900">Average Rating</div>
          <div className="text-xs text-slate-500 mt-1">Out of 5 stars</div>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-white border border-green-200 rounded-2xl p-6 text-center shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
          <div className="inline-block p-3 bg-green-100 rounded-lg mb-3">
            <div className="text-3xl font-bold text-green-600">{verifiedReviews}</div>
          </div>
          <div className="text-sm font-semibold text-slate-900">Verified Reviews</div>
          <div className="text-xs text-slate-500 mt-1">Authentic feedback</div>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-white border border-purple-200 rounded-2xl p-6 text-center shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
          <div className="inline-block p-3 bg-purple-100 rounded-lg mb-3">
            <div className="text-3xl font-bold text-purple-600">{Math.round((positiveReviews / totalReviews) * 100)}%</div>
          </div>
          <div className="text-sm font-semibold text-slate-900">Positive Reviews</div>
          <div className="text-xs text-slate-500 mt-1">4-5 star ratings</div>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Rating Distribution (CSS-based for reliability) */}
        <div className="bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-teal-200">
          <div>
            <h3 className="text-2xl font-bold text-slate-900">Rating Distribution</h3>
            <p className="text-sm text-slate-500 mt-1">Breakdown of trader ratings</p>
          </div>
          <div className="space-y-4 mt-6">
            {ratingData.map((row) => (
              <div key={row.rating}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-semibold text-slate-900">{row.rating}</span>
                  <span className="text-slate-600 font-medium">{row.count} reviews • {row.percentage}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden shadow-sm">
                  <div
                    className="bg-gradient-to-r from-teal-500 to-emerald-600 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${row.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Geographic Distribution */}
        <div className="bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-purple-200">
          <div>
            <h3 className="text-2xl font-bold text-slate-900">Reviews by Country</h3>
            <p className="text-sm text-slate-500 mt-1">Geographic trader distribution</p>
          </div>
          <ResponsiveContainer width="100%" height={320}>
            <PieChart>
              <Pie
                data={locationData}
                cx="50%"
                cy="50%"
                nameKey="country"
                labelLine={true}
                label={({ payload, percent }) => `${payload.country} ${Math.round((percent || 0) * 100)}%`}
                outerRadius={100}
                innerRadius={50}
                fill="#8884d8"
                dataKey="count"
              >
                {locationData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
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
                formatter={(value, name) => [`${value} reviews`, 'Count']}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Monthly Review Trends */}
        <div className="bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-purple-200 lg:col-span-2">
          <div>
            <h3 className="text-2xl font-bold text-slate-900">Review Trends Over Time</h3>
            <p className="text-sm text-slate-500 mt-1">Monthly review submission patterns</p>
          </div>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={monthlyReviews}>
              <defs>
                <linearGradient id="colorReviews" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#8b5cf6" stopOpacity={0.9}/>
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity={0.1}/>
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
                formatter={(value) => [`${value} reviews`, 'Count']}
              />
              <Line 
                type="monotone" 
                dataKey="count" 
                stroke="#8b5cf6" 
                strokeWidth={3}
                dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 6, filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
                activeDot={{ r: 8, stroke: '#ffffff', strokeWidth: 3, fill: '#ec4899' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Top Performers */}
        <div className="bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-green-200 lg:col-span-2">
          <div>
            <h3 className="text-2xl font-bold text-slate-900">Top Profit Makers</h3>
            <p className="text-sm text-slate-500 mt-1">Highest earnings reported (in $K)</p>
          </div>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={profitData}>
              <defs>
                <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#10b981" stopOpacity={1}/>
                  <stop offset="100%" stopColor="#059669" stopOpacity={0.7}/>
                </linearGradient>
                <filter id="shadowProfit">
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
              <Tooltip 
                contentStyle={{
                  backgroundColor: '#ffffff',
                  border: '2px solid #e2e8f0',
                  borderRadius: '12px',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                  padding: '8px'
                }}
                formatter={(value, name) => [
                  name === 'profit' ? `$${value}K` : `${value} stars`,
                  name === 'profit' ? 'Profit Made' : 'Rating'
                ]}
              />
              <Bar dataKey="profit" fill="url(#colorProfit)" radius={[12, 12, 0, 0]} filter="url(#shadowProfit)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Experience Level Analysis */}
      <div className="bg-gradient-to-r from-teal-50 via-blue-50 to-purple-50 border border-slate-200 rounded-2xl p-8 shadow-lg">
        <div>
          <h3 className="text-2xl font-bold text-slate-900">Trading Experience Distribution</h3>
          <p className="text-sm text-slate-500 mt-1">Trader skill level breakdown</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
          {experienceData.map((item, index) => (
            <div key={item.experience} className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="inline-block p-3 bg-slate-100 rounded-lg mb-3">
                  <div className="text-3xl font-bold text-slate-900">{item.count}</div>
                </div>
                <div className="text-sm font-semibold text-slate-900 mb-1">{item.experience}</div>
                <div className="text-xs text-slate-500 mb-4">
                  {Math.round((item.count / reviews.length) * 100)}% of traders
                </div>
                <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden shadow-sm">
                  <div 
                    className="bg-gradient-to-r from-teal-500 to-blue-600 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${(item.count / Math.max(...experienceData.map(e => e.count))) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewAnalytics;
