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
  AreaChart,
  Area,
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

  // Process location data, separating known countries from unknown
  const allLocationData = reviews.reduce((acc, review) => {
    const country = review.userLocation?.split(', ')[1] || 'Unknown';
    const existing = acc.find(item => item.country === country);
    if (existing) {
      existing.count += 1;
    } else {
      acc.push({ country, count: 1 });
    }
    return acc;
  }, [] as { country: string; count: number }[]).sort((a, b) => b.count - a.count);

  // Separate known countries from unknown
  const knownCountries = allLocationData.filter(item => item.country !== 'Unknown');
  const unknownCount = allLocationData.find(item => item.country === 'Unknown')?.count || 0;
  
  // Create pie chart data with top 6 known countries + "Others" for remaining
  const topCountries = knownCountries.slice(0, 6);
  const remainingCount = knownCountries.slice(6).reduce((sum, item) => sum + item.count, 0) + unknownCount;
  
  const locationData = [
    ...topCountries,
    ...(remainingCount > 0 ? [{ country: 'Others', count: remainingCount }] : [])
  ];

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

  // Verified vs Unverified over time (monthly)
  const monthlyVerified = reviews.reduce((acc, review) => {
    const month = new Date(review.date).toLocaleDateString('en-US', { month: 'short', year: '2-digit' });
    const existing = acc.find(item => item.month === month);
    if (existing) {
      existing.verified += review.verified ? 1 : 0;
      existing.unverified += review.verified ? 0 : 1;
    } else {
      acc.push({ month, verified: review.verified ? 1 : 0, unverified: review.verified ? 0 : 1 });
    }
    return acc;
  }, [] as { month: string; verified: number; unverified: number }[]).sort((a, b) => new Date(a.month).getTime() - new Date(b.month).getTime());

  // Region grouping from country
  const countryToRegion = (country: string): string => {
    const c = country.toLowerCase();
    if (['united states', 'usa', 'canada', 'mexico'].some(x => c.includes(x))) return 'North America';
    if (['united kingdom', 'uk', 'germany', 'france', 'spain', 'italy', 'netherlands', 'sweden', 'switzerland', 'poland', 'czech'].some(x => c.includes(x))) return 'Europe';
    if (['singapore', 'india', 'malaysia', 'indonesia', 'vietnam', 'thailand', 'japan', 'south korea', 'korea', 'china', 'hong kong', 'philippines'].some(x => c.includes(x))) return 'Asia';
    if (['australia', 'new zealand'].some(x => c.includes(x))) return 'Oceania';
    if (['brazil', 'argentina', 'chile', 'colombia', 'peru'].some(x => c.includes(x))) return 'South America';
    if (['uae', 'united arab emirates', 'saudi', 'qatar', 'kuwait', 'turkey', 'israel'].some(x => c.includes(x))) return 'Middle East';
    if (['south africa', 'nigeria', 'kenya', 'egypt', 'morocco'].some(x => c.includes(x))) return 'Africa';
    return 'Others';
  };

  const regionData = reviews.reduce((acc, review) => {
    const country = review.userLocation?.split(', ')[1] || 'Unknown';
    const region = country === 'Unknown' ? 'Others' : countryToRegion(country);
    const existing = acc.find(item => item.region === region);
    if (existing) {
      existing.count += 1;
    } else {
      acc.push({ region, count: 1 });
    }
    return acc;
  }, [] as { region: string; count: number }[]).sort((a, b) => b.count - a.count);

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
        <div className="flex items-center justify-center gap-3 mb-2">
          <img src="/images/icons/pie-3d.png" alt="Analytics" className="w-10 h-10 drop-shadow" draggable={false} />
          <h2 className="text-3xl font-bold text-slate-900">Review Analytics</h2>
        </div>
        <p className="text-slate-600">Comprehensive analysis of user reviews and feedback</p>
      </div>


      {/* Summary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white border border-slate-200 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-teal-600">{totalReviews}</div>
          <div className="text-sm text-slate-600">Total Reviews</div>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-slate-600">{averageRating.toFixed(1)}</div>
          <div className="text-sm text-slate-600">Average Rating</div>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-green-600">{verifiedReviews}</div>
          <div className="text-sm text-slate-600">Verified Reviews</div>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-blue-600">{Math.round((positiveReviews / totalReviews) * 100)}%</div>
          <div className="text-sm text-slate-600">Positive Reviews</div>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Rating Distribution (CSS-based for reliability) */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-slate-900 mb-4">Rating Distribution</h3>
          <div className="space-y-3">
            {ratingData.map((row) => (
              <div key={row.rating}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-700">{row.rating}</span>
                  <span className="text-slate-500">{row.count} reviews • {row.percentage}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-teal-500 to-emerald-600 h-3 rounded-full"
                    style={{ width: `${row.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Geographic Distribution */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-slate-900 mb-4">Reviews by Country</h3>
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <div className="flex-1">
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={locationData}
                    cx="50%"
                    cy="50%"
                    nameKey="country"
                    labelLine={false}
                    label={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="count"
                  >
                    {locationData.map((entry, index) => (
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
                formatter={(value, name, props) => [
                  `${value} reviews (${Math.round((value / reviews.length) * 100)}%)`,
                  (props.payload as any).country
                ]}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            
            {/* Legend */}
            <div className="flex-1">
              <div className="space-y-3">
                <h4 className="font-medium text-slate-900 mb-3">Country Breakdown</h4>
                {locationData.map((entry, index) => (
                  <div key={entry.country} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: COLORS[index % COLORS.length] }}
                      />
                      <span className="text-sm text-slate-700">{entry.country}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-slate-900">{entry.count}</div>
                      <div className="text-xs text-slate-500">
                        {Math.round((entry.count / reviews.length) * 100)}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Monthly Review Trends */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-slate-900 mb-4">Review Trends Over Time</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={monthlyVerified}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="#64748b" />
              <YAxis tick={{ fontSize: 12 }} stroke="#64748b" />
              <Tooltip 
                contentStyle={{
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
                formatter={(value, name) => [
                  `${value} reviews`,
                  name === 'verified' ? 'Verified' : 'Unverified'
                ]}
              />
              <Area type="monotone" dataKey="verified" stackId="1" stroke="#10b981" fill="#10b981" fillOpacity={0.35} />
              <Area type="monotone" dataKey="unverified" stackId="1" stroke="#94a3b8" fill="#94a3b8" fillOpacity={0.35} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Top Performers */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-slate-900 mb-4">Top Profit Makers (in $K)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={profitData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} stroke="#64748b" />
              <YAxis tick={{ fontSize: 12 }} stroke="#64748b" />
              <Tooltip 
                contentStyle={{
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
                formatter={(value, name) => [
                  name === 'profit' ? `$${value}K` : `${value} stars`,
                  name === 'profit' ? 'Profit Made' : 'Rating'
                ]}
              />
              <Bar dataKey="profit" fill="#10b981" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Region Breakdown */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-slate-900 mb-4">Reviews by Region</h3>
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={regionData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="region" tick={{ fontSize: 12 }} stroke="#64748b" />
            <YAxis tick={{ fontSize: 12 }} stroke="#64748b" />
            <Tooltip 
              contentStyle={{
                backgroundColor: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
              formatter={(value) => [`${value} reviews`, 'Count']}
            />
            <Bar dataKey="count" fill="#14b8a6" radius={[4,4,0,0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Experience Level Analysis */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-slate-900 mb-4">Trading Experience Distribution</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {experienceData.map((item, index) => (
            <div key={item.experience} className="text-center">
              <div className="text-3xl font-bold text-slate-900 mb-2">{item.count}</div>
              <div className="text-sm text-slate-600">{item.experience}</div>
              <div className="w-full bg-slate-200 rounded-full h-2 mt-2">
                <div 
                  className="bg-gradient-to-r from-teal-500 to-slate-900 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${(item.count / Math.max(...experienceData.map(e => e.count))) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewAnalytics;
