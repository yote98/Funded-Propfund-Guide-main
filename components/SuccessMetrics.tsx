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

const SuccessMetrics: React.FC = () => {
  // Mock data for success metrics
  const successData = [
    { name: 'FTMO', passRate: 85, retention: 78, scaling: 65, avgTime: '45 days' },
    { name: 'Apex', passRate: 72, retention: 82, scaling: 70, avgTime: '38 days' },
    { name: 'TopStep', passRate: 68, retention: 75, scaling: 60, avgTime: '52 days' },
    { name: 'FundedNext', passRate: 78, retention: 80, scaling: 68, avgTime: '41 days' },
    { name: 'The5%ers', passRate: 74, retention: 77, scaling: 72, avgTime: '43 days' }
  ];

  const overallStats = {
    evaluationPassRate: 75,
    averageTimeToPass: '44 days',
    traderRetentionRate: 78,
    scalingSuccessRate: 67
  };
  const getRateColor = (rate: number) => {
    if (rate >= 80) return 'text-green-600';
    if (rate >= 60) return 'text-blue-600';
    if (rate >= 40) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getRateBarColor = (rate: number) => {
    if (rate >= 80) return 'bg-green-500';
    if (rate >= 60) return 'bg-blue-500';
    if (rate >= 40) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-2">
          <img
            src="/images/icons/shield-check-3d.png"
            alt="Verified"
            className="w-10 h-10 drop-shadow"
            draggable={false}
          />
          <h2 className="text-3xl font-bold text-slate-900">Success Metrics Dashboard</h2>
        </div>
        <p className="text-slate-600">Comprehensive analysis of trader success rates and performance metrics</p>
      </div>

      {/* Overall Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <div className="text-center">
            <div className="text-3xl font-bold text-teal-600 mb-2">{overallStats.evaluationPassRate}%</div>
            <div className="text-sm text-slate-600">Evaluation Pass Rate</div>
          </div>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">{overallStats.traderRetentionRate}%</div>
            <div className="text-sm text-slate-600">Trader Retention</div>
          </div>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <img
                src="/images/icons/rocket-3d.png"
                alt="Scaling Success"
                className="w-8 h-8 mr-2 drop-shadow"
                draggable={false}
              />
              <div className="text-3xl font-bold text-purple-600">{overallStats.scalingSuccessRate}%</div>
            </div>
            <div className="text-sm text-slate-600">Scaling Success</div>
          </div>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">{overallStats.averageTimeToPass}</div>
            <div className="text-sm text-slate-600">Avg. Time to Pass</div>
          </div>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Success Rates Comparison */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <img
              src="/images/icons/chart-3d.png"
              alt="Success Rates"
              className="w-6 h-6 drop-shadow"
              draggable={false}
            />
            <h3 className="text-xl font-semibold text-slate-900">Firm Success Rates</h3>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={successData}>
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
                formatter={(value, name) => [`${value}%`, name === 'passRate' ? 'Pass Rate' : name === 'retention' ? 'Retention' : 'Scaling']}
              />
              <Bar dataKey="passRate" fill="#14b8a6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Retention vs Scaling */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <img
              src="/images/icons/chart-3d.png"
              alt="Retention vs Scaling"
              className="w-6 h-6 drop-shadow"
              draggable={false}
            />
            <h3 className="text-xl font-semibold text-slate-900">Retention vs Scaling Success</h3>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={successData}>
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
                formatter={(value, name) => [`${value}%`, name === 'retention' ? 'Retention' : 'Scaling']}
              />
              <Line 
                type="monotone" 
                dataKey="retention" 
                stroke="#3b82f6" 
                strokeWidth={3}
                dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
              />
              <Line 
                type="monotone" 
                dataKey="scaling" 
                stroke="#8b5cf6" 
                strokeWidth={3}
                dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Top Performers Section */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <img
            src="/images/icons/trophy-3d.png"
            alt="Top Performers"
            className="w-8 h-8 drop-shadow"
            draggable={false}
          />
          <img
            src="/images/icons/flame-3d.png"
            alt="Hot Performers"
            className="w-6 h-6 drop-shadow"
            draggable={false}
          />
          <h3 className="text-xl font-semibold text-slate-900">Top Performers</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="text-center p-4 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
            <div className="flex items-center justify-center mb-2">
              <div className="text-2xl font-bold text-orange-600">FTMO</div>
            </div>
            <div className="text-sm text-orange-700">85% Pass Rate</div>
            <div className="text-xs text-orange-600">Top Performer</div>
          </div>
          <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
            <div className="flex items-center justify-center mb-2">
              <div className="text-2xl font-bold text-blue-600">Apex</div>
            </div>
            <div className="text-sm text-blue-700">82% Retention</div>
            <div className="text-xs text-blue-600">Best Retention</div>
          </div>
          <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg border border-purple-200">
            <div className="flex items-center justify-center mb-2">
              <div className="text-2xl font-bold text-purple-600">The5%ers</div>
            </div>
            <div className="text-sm text-purple-700">72% Scaling</div>
            <div className="text-xs text-purple-600">Best Scaling</div>
          </div>
        </div>
      </div>

      {/* Detailed Metrics */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-slate-900 mb-6">Detailed Success Metrics</h3>
        <div className="space-y-4">
          {successData.map((firm, index) => (
            <div key={firm.name} className="border border-slate-200 rounded-lg p-4">
              <div className="flex justify-between items-center mb-3">
                <h4 className="font-semibold text-slate-900">{firm.name}</h4>
                <span className="text-sm text-slate-500">Avg. Time: {firm.avgTime}</span>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-600 text-sm">Pass Rate</span>
                    <span className={`font-semibold ${getRateColor(firm.passRate)}`}>
                      {firm.passRate}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${getRateBarColor(firm.passRate)}`}
                      style={{ width: `${firm.passRate}%` }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-600 text-sm">Retention</span>
                    <span className={`font-semibold ${getRateColor(firm.retention)}`}>
                      {firm.retention}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${getRateBarColor(firm.retention)}`}
                      style={{ width: `${firm.retention}%` }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-600 text-sm">Scaling</span>
                    <span className={`font-semibold ${getRateColor(firm.scaling)}`}>
                      {firm.scaling}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${getRateBarColor(firm.scaling)}`}
                      style={{ width: `${firm.scaling}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessMetrics;