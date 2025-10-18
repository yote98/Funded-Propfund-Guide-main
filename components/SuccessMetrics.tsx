import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

interface SuccessMetricsProps {
  evaluationPassRate: number;
  averageTimeToPass: string;
  traderRetentionRate: number;
  scalingSuccessRate: number;
}

const SuccessMetrics: React.FC<SuccessMetricsProps> = ({
  evaluationPassRate,
  averageTimeToPass,
  traderRetentionRate,
  scalingSuccessRate
}) => {
  // Data for comparison bar chart
  const comparisonData = [
    { metric: 'Pass Rate', rate: evaluationPassRate },
    { metric: 'Retention', rate: traderRetentionRate },
    { metric: 'Scaling', rate: scalingSuccessRate }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Industry Success Metrics</h2>
        <p className="text-slate-600">Key performance indicators for trader success</p>
      </div>

      {/* Key Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-slate-600">Evaluation Pass Rate</h3>
            <span className="text-2xl">📊</span>
          </div>
          <div className="text-3xl font-bold text-green-600 mb-2">{evaluationPassRate}%</div>
          <div className="w-full bg-slate-200 rounded-full h-2">
            <div className="h-2 rounded-full bg-green-500" style={{ width: `${evaluationPassRate}%` }}></div>
          </div>
          <p className="text-xs text-slate-500 mt-2">Traders passing evaluation</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-slate-600">Trader Retention</h3>
            <span className="text-2xl">👥</span>
          </div>
          <div className="text-3xl font-bold text-blue-600 mb-2">{traderRetentionRate}%</div>
          <div className="w-full bg-slate-200 rounded-full h-2">
            <div className="h-2 rounded-full bg-blue-500" style={{ width: `${traderRetentionRate}%` }}></div>
          </div>
          <p className="text-xs text-slate-500 mt-2">Traders staying active</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-slate-600">Scaling Success</h3>
            <span className="text-2xl">📈</span>
          </div>
          <div className="text-3xl font-bold text-purple-600 mb-2">{scalingSuccessRate}%</div>
          <div className="w-full bg-slate-200 rounded-full h-2">
            <div className="h-2 rounded-full bg-purple-500" style={{ width: `${scalingSuccessRate}%` }}></div>
          </div>
          <p className="text-xs text-slate-500 mt-2">Traders scaling accounts</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-slate-600">Avg. Time to Pass</h3>
            <span className="text-2xl">⏱️</span>
          </div>
          <div className="text-3xl font-bold text-slate-900 mb-2">{averageTimeToPass}</div>
          <p className="text-xs text-slate-500 mt-6">Days to complete evaluation</p>
        </div>
      </div>

      {/* Simple Bar Chart - Metrics Comparison */}
      <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
        <h3 className="text-lg font-bold text-slate-900 mb-4">Success Rate Comparison</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={comparisonData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <defs>
              <linearGradient id="colorPass" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#059669" stopOpacity={0.8}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="metric" stroke="#64748b" />
            <YAxis stroke="#64748b" domain={[0, 100]} />
            <Tooltip 
              formatter={(value) => [`${value}%`, 'Rate']}
              contentStyle={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '8px'
              }}
            />
            <Bar dataKey="rate" fill="url(#colorPass)" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Source Information */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start">
          <span className="text-lg mr-3">ℹ️</span>
          <div>
            <h4 className="font-semibold text-blue-900 mb-1">Data Sources</h4>
            <p className="text-sm text-blue-800">
              Metrics compiled from <a href="https://payoutjunction.com" target="_blank" rel="noopener noreferrer" className="underline font-semibold hover:text-blue-600">Payout Junction</a> and verified trader feedback.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessMetrics;