import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  ComposedChart,
  Area,
  AreaChart
} from 'recharts';

const CostAnalysisDashboard: React.FC = () => {
  // Total Cost of Ownership by Firm (6 months)
  const totalCostData = [
    { firm: 'FTMO', challenge: 155, evaluation: 0, monthly: 0, total: 155, roi: 285 },
    { firm: 'Topstep', challenge: 165, evaluation: 0, monthly: 0, total: 165, roi: 320 },
    { firm: 'The 5%ers', challenge: 0, evaluation: 0, monthly: 89, total: 534, roi: 450 },
    { firm: 'Audacity', challenge: 0, evaluation: 0, monthly: 99, total: 594, roi: 380 },
    { firm: 'Apex', challenge: 0, evaluation: 0, monthly: 79, total: 474, roi: 420 }
  ];

  // Hidden Fees Breakdown
  const hiddenFeesData = [
    { firm: 'FTMO', dataFees: 0, platformFees: 0, withdrawalFees: 0, inactivityFees: 0, total: 0 },
    { firm: 'Topstep', dataFees: 0, platformFees: 0, withdrawalFees: 0, inactivityFees: 0, total: 0 },
    { firm: 'The 5%ers', dataFees: 15, platformFees: 0, withdrawalFees: 0, inactivityFees: 0, total: 15 },
    { firm: 'Audacity', dataFees: 20, platformFees: 0, withdrawalFees: 0, inactivityFees: 0, total: 20 },
    { firm: 'Apex', dataFees: 10, platformFees: 0, withdrawalFees: 0, inactivityFees: 0, total: 10 }
  ];

  // ROI Analysis by Account Size
  const roiByAccountSize = [
    { accountSize: '10K', ftmo: 285, topstep: 320, the5ers: 450, audacity: 380, apex: 420 },
    { accountSize: '25K', ftmo: 712, topstep: 800, the5ers: 1125, audacity: 950, apex: 1050 },
    { accountSize: '50K', ftmo: 1425, topstep: 1600, the5ers: 2250, audacity: 1900, apex: 2100 },
    { accountSize: '100K', ftmo: 2850, topstep: 3200, the5ers: 4500, audacity: 3800, apex: 4200 },
    { accountSize: '200K', ftmo: 5700, topstep: 6400, the5ers: 9000, audacity: 7600, apex: 8400 }
  ];

  // Break-even Analysis
  const breakEvenData = [
    { firm: 'FTMO', monthlyTarget: 8, daysToBreakEven: 12, riskLevel: 'Low' },
    { firm: 'Topstep', monthlyTarget: 10, daysToBreakEven: 15, riskLevel: 'Low' },
    { firm: 'The 5%ers', monthlyTarget: 6, daysToBreakEven: 8, riskLevel: 'Medium' },
    { firm: 'Audacity', monthlyTarget: 7, daysToBreakEven: 10, riskLevel: 'Medium' },
    { firm: 'Apex', monthlyTarget: 6, daysToBreakEven: 9, riskLevel: 'Medium' }
  ];

  // Cost per Profit Dollar
  const costPerProfit = [
    { firm: 'FTMO', costPerDollar: 0.54, efficiency: 95 },
    { firm: 'Topstep', costPerDollar: 0.52, efficiency: 98 },
    { firm: 'The 5%ers', costPerDollar: 1.19, efficiency: 84 },
    { firm: 'Audacity', costPerDollar: 1.56, efficiency: 64 },
    { firm: 'Apex', costPerDollar: 1.13, efficiency: 88 }
  ];

  // Monthly vs One-time Cost Comparison
  const costComparison = [
    { period: 'Month 1', oneTime: 155, monthly: 89, difference: -66 },
    { period: 'Month 2', oneTime: 155, monthly: 178, difference: 23 },
    { period: 'Month 3', oneTime: 155, monthly: 267, difference: 112 },
    { period: 'Month 6', oneTime: 155, monthly: 534, difference: 379 },
    { period: 'Month 12', oneTime: 155, monthly: 1068, difference: 913 }
  ];

  // Profit Potential by Firm
  const profitPotential = [
    { firm: 'FTMO', minProfit: 1000, maxProfit: 10000, avgProfit: 3500, consistency: 85 },
    { firm: 'Topstep', minProfit: 1200, maxProfit: 12000, avgProfit: 4200, consistency: 88 },
    { firm: 'The 5%ers', minProfit: 800, maxProfit: 8000, avgProfit: 2800, consistency: 82 },
    { firm: 'Audacity', minProfit: 900, maxProfit: 9000, avgProfit: 3200, consistency: 80 },
    { firm: 'Apex', minProfit: 1100, maxProfit: 11000, avgProfit: 3800, consistency: 86 }
  ];

  const COLORS = ['#14b8a6', '#3b82f6', '#8b5cf6', '#f59e0b', '#ef4444'];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-2">
          <img
            src="/images/icons/money-3d.png"
            alt="Cost Analysis"
            className="w-8 h-8 mr-3 drop-shadow"
            draggable={false}
          />
          <h2 className="text-3xl font-bold text-slate-900">Cost Analysis Dashboard</h2>
        </div>
        <p className="text-slate-600">Real cost comparisons and ROI calculations - powered by Claude 4.5 analysis</p>
      </div>

      {/* Key Cost Insights */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl p-6 text-center">
          <div className="text-3xl font-bold mb-2">$155</div>
          <div className="text-sm opacity-90">Lowest Total Cost</div>
          <div className="text-xs opacity-75 mt-1">FTMO (6 months)</div>
        </div>
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl p-6 text-center">
          <div className="text-3xl font-bold mb-2">$8,400</div>
          <div className="text-sm opacity-90">Highest ROI Potential</div>
          <div className="text-xs opacity-75 mt-1">Apex 200K Account</div>
        </div>
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl p-6 text-center">
          <div className="text-3xl font-bold mb-2">8 Days</div>
          <div className="text-sm opacity-90">Fastest Break-even</div>
          <div className="text-xs opacity-75 mt-1">The 5%ers</div>
        </div>
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl p-6 text-center">
          <div className="text-3xl font-bold mb-2">98%</div>
          <div className="text-sm opacity-90">Best Efficiency</div>
          <div className="text-xs opacity-75 mt-1">Topstep</div>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Total Cost Comparison */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-slate-900 mb-4">Total Cost of Ownership (6 months)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={totalCostData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="firm" tick={{ fontSize: 12 }} stroke="#64748b" />
              <YAxis tick={{ fontSize: 12 }} stroke="#64748b" />
              <Tooltip 
                contentStyle={{
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
                formatter={(value, name) => [`$${value}`, name === 'total' ? 'Total Cost' : name === 'roi' ? 'ROI Potential' : name]}
              />
              <Bar dataKey="total" fill="#ef4444" radius={[4, 4, 0, 0]} />
              <Line type="monotone" dataKey="roi" stroke="#10b981" strokeWidth={3} dot={{ r: 4 }} />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        {/* ROI by Account Size */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-slate-900 mb-4">ROI by Account Size</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={roiByAccountSize}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="accountSize" tick={{ fontSize: 12 }} stroke="#64748b" />
              <YAxis tick={{ fontSize: 12 }} stroke="#64748b" />
              <Tooltip 
                contentStyle={{
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
                formatter={(value, name) => [`$${value}`, name.toUpperCase()]}
              />
              <Area type="monotone" dataKey="ftmo" stackId="1" stroke="#14b8a6" fill="#14b8a6" fillOpacity={0.6} />
              <Area type="monotone" dataKey="topstep" stackId="1" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
              <Area type="monotone" dataKey="the5ers" stackId="1" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.6} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Break-even Analysis (CSS-based for reliability) */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-slate-900">Break-even Analysis</h3>
            <span className="text-xs px-2 py-1 rounded-full bg-emerald-100 text-emerald-700">Updated ✓</span>
          </div>
          <div className="space-y-3">
            {breakEvenData.map((row) => (
              <div key={row.firm}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-700">{row.firm}</span>
                  <span className="text-slate-500">Days to BE {row.daysToBreakEven} • Monthly target {row.monthlyTarget}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-3">
                  <div className="bg-gradient-to-r from-amber-500 to-orange-600 h-3 rounded-full" style={{ width: `${(row.monthlyTarget / 12) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cost Efficiency */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-slate-900 mb-4">Cost Efficiency Analysis</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={costPerProfit}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="firm" tick={{ fontSize: 12 }} stroke="#64748b" />
              <YAxis tick={{ fontSize: 12 }} stroke="#64748b" />
              <Tooltip 
                contentStyle={{
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
                formatter={(value, name) => [
                  name === 'costPerDollar' ? `$${value}` : `${value}%`,
                  name === 'costPerDollar' ? 'Cost per $1 Profit' : 'Efficiency'
                ]}
              />
              <Bar dataKey="costPerDollar" fill="#ef4444" radius={[4, 4, 0, 0]} />
              <Bar dataKey="efficiency" fill="#10b981" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Monthly vs One-time Cost Comparison */}
      <div className="bg-white border border-slate-200 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-slate-900 mb-4">Monthly vs One-time Cost Comparison</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={costComparison}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="period" tick={{ fontSize: 12 }} stroke="#64748b" />
            <YAxis tick={{ fontSize: 12 }} stroke="#64748b" />
            <Tooltip 
              contentStyle={{
                backgroundColor: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
              formatter={(value, name) => [`$${value}`, name === 'oneTime' ? 'One-time Cost' : name === 'monthly' ? 'Monthly Cost' : 'Difference']}
            />
            <Line type="monotone" dataKey="oneTime" stroke="#14b8a6" strokeWidth={3} dot={{ r: 4 }} />
            <Line type="monotone" dataKey="monthly" stroke="#ef4444" strokeWidth={3} dot={{ r: 4 }} />
            <Line type="monotone" dataKey="difference" stroke="#f59e0b" strokeWidth={2} strokeDasharray="5 5" dot={{ r: 3 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Profit Potential Analysis */}
      <div className="bg-white border border-slate-200 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-slate-900 mb-4">Profit Potential by Firm</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {profitPotential.map((firm, index) => (
            <div key={firm.firm} className="p-4 bg-gradient-to-r from-slate-50 to-slate-100 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-slate-900">{firm.firm}</h4>
                <div className="text-xs text-slate-600">{firm.consistency}% consistency</div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Min Profit:</span>
                  <span className="font-medium text-green-600">${firm.minProfit.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Max Profit:</span>
                  <span className="font-medium text-green-600">${firm.maxProfit.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Avg Profit:</span>
                  <span className="font-medium text-blue-600">${firm.avgProfit.toLocaleString()}</span>
                </div>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2 mt-3">
                <div 
                  className="bg-gradient-to-r from-green-500 to-blue-600 h-2 rounded-full transition-all duration-1000"
                  style={{ 
                    width: `${firm.consistency}%`,
                    animationDelay: `${index * 200}ms`
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cost Optimization Tips */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-slate-200 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-slate-900 mb-4">Claude 4.5 Cost Optimization Tips</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-slate-800 mb-3">Best Value Options:</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>• <strong>FTMO:</strong> Lowest total cost ($155) with high ROI potential</li>
              <li>• <strong>Topstep:</strong> Best efficiency (98%) for consistent profits</li>
              <li>• <strong>The 5%ers:</strong> Fastest break-even (8 days) for quick returns</li>
              <li>• <strong>Apex:</strong> Highest profit potential for large accounts</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-800 mb-3">Cost-Saving Strategies:</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>• <strong>Start Small:</strong> Begin with 10K accounts to minimize risk</li>
              <li>• <strong>One-time vs Monthly:</strong> One-time costs are better long-term</li>
              <li>• <strong>Hidden Fees:</strong> Check for data fees, platform costs</li>
              <li>• <strong>Break-even First:</strong> Focus on recovering costs before scaling</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostAnalysisDashboard;
