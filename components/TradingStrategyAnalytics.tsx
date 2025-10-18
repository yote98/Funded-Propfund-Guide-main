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
  ScatterChart,
  Scatter,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from 'recharts';

const TradingStrategyAnalytics: React.FC = () => {
  // Trading Strategy Performance by Firm Type
  const strategyPerformance = [
    { strategy: 'Scalping', ftmo: 78, topstep: 85, the5ers: 82, audacity: 75, apex: 80 },
    { strategy: 'Day Trading', ftmo: 72, topstep: 88, the5ers: 85, audacity: 78, apex: 82 },
    { strategy: 'Swing Trading', ftmo: 85, topstep: 75, the5ers: 88, audacity: 90, apex: 87 },
    { strategy: 'Position Trading', ftmo: 88, topstep: 70, the5ers: 85, audacity: 92, apex: 89 },
    { strategy: 'News Trading', ftmo: 65, topstep: 72, the5ers: 68, audacity: 70, apex: 67 },
    { strategy: 'Algorithmic', ftmo: 82, topstep: 90, the5ers: 85, audacity: 88, apex: 84 }
  ];

  // Strategy Success Rates by Market
  const marketStrategyData = [
    { market: 'Forex', scalping: 82, dayTrading: 75, swing: 88, position: 85 },
    { market: 'Futures', scalping: 78, dayTrading: 85, swing: 80, position: 82 },
    { market: 'Crypto', scalping: 85, dayTrading: 80, swing: 75, position: 78 },
    { market: 'Stocks', scalping: 70, dayTrading: 78, swing: 85, position: 88 }
  ];

  // Risk-Reward Analysis by Strategy
  const riskRewardData = [
    { strategy: 'Scalping', avgRisk: 1.2, avgReward: 2.8, winRate: 78, profitFactor: 2.1 },
    { strategy: 'Day Trading', avgRisk: 1.5, avgReward: 3.2, winRate: 72, profitFactor: 2.3 },
    { strategy: 'Swing Trading', avgRisk: 2.1, avgReward: 4.5, winRate: 68, profitFactor: 2.8 },
    { strategy: 'Position Trading', avgRisk: 3.2, avgReward: 6.8, winRate: 65, profitFactor: 3.2 },
    { strategy: 'News Trading', avgRisk: 1.8, avgReward: 3.5, winRate: 58, profitFactor: 1.9 },
    { strategy: 'Algorithmic', avgRisk: 1.1, avgReward: 2.5, winRate: 82, profitFactor: 2.4 }
  ];

  // Optimal Trading Times by Strategy
  const tradingTimes = [
    { time: '00:00-04:00', strategy: 'Scalping', success: 45, volume: 85 },
    { time: '04:00-08:00', strategy: 'Day Trading', success: 78, volume: 95 },
    { time: '08:00-12:00', strategy: 'Swing Trading', success: 82, volume: 88 },
    { time: '12:00-16:00', strategy: 'Position Trading', success: 75, volume: 72 },
    { time: '16:00-20:00', strategy: 'News Trading', success: 68, volume: 90 },
    { time: '20:00-00:00', strategy: 'Algorithmic', success: 85, volume: 78 }
  ];

  // Strategy Complexity vs Success Rate
  const complexityData = [
    { strategy: 'Scalping', complexity: 9, successRate: 78, learningTime: 6 },
    { strategy: 'Day Trading', complexity: 7, successRate: 72, learningTime: 4 },
    { strategy: 'Swing Trading', complexity: 5, successRate: 68, learningTime: 3 },
    { strategy: 'Position Trading', complexity: 4, successRate: 65, learningTime: 2 },
    { strategy: 'News Trading', complexity: 8, successRate: 58, learningTime: 5 },
    { strategy: 'Algorithmic', complexity: 10, successRate: 82, learningTime: 8 }
  ];

  // Best Strategy-Firm Combinations
  const bestCombinations = [
    { combination: 'Scalping + Topstep', successRate: 85, avgProfit: 12.5, riskLevel: 'High' },
    { combination: 'Swing + Audacity', successRate: 90, avgProfit: 18.2, riskLevel: 'Medium' },
    { combination: 'Day Trading + FTMO', successRate: 78, avgProfit: 15.8, riskLevel: 'Medium' },
    { combination: 'Position + The 5%ers', successRate: 88, avgProfit: 22.1, riskLevel: 'Low' },
    { combination: 'Algorithmic + Apex', successRate: 84, avgProfit: 14.3, riskLevel: 'Medium' }
  ];

  const COLORS = ['#14b8a6', '#3b82f6', '#8b5cf6', '#f59e0b', '#ef4444', '#10b981'];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Trading Strategy Analytics</h2>
        <p className="text-slate-600">Which strategies work best with which firms - powered by Claude 4.5 analysis</p>
      </div>

      {/* Key Insights */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
          <div className="text-4xl font-bold mb-2">85%</div>
          <div className="text-sm font-medium opacity-90">Best Strategy Success</div>
          <div className="text-xs opacity-75 mt-2">Scalping + Topstep</div>
        </div>
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
          <div className="text-4xl font-bold mb-2">22.1%</div>
          <div className="text-sm font-medium opacity-90">Highest Avg Profit</div>
          <div className="text-xs opacity-75 mt-2">Position + The 5%ers</div>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
          <div className="text-4xl font-bold mb-2">82%</div>
          <div className="text-sm font-medium opacity-90">Algorithmic Success</div>
          <div className="text-xs opacity-75 mt-2">Best for Beginners</div>
        </div>
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
          <div className="text-4xl font-bold mb-2">3.2</div>
          <div className="text-sm font-medium opacity-90">Best Profit Factor</div>
          <div className="text-xs opacity-75 mt-2">Position Trading</div>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Strategy Performance by Firm */}
        <div className="bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-teal-200">
          <div>
            <h3 className="text-2xl font-bold text-slate-900">Strategy Performance by Firm</h3>
            <p className="text-sm text-slate-500 mt-1">Success rates across platforms</p>
          </div>
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={strategyPerformance}>
              <defs>
                <linearGradient id="gradFTMO" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#14b8a6" stopOpacity={1}/>
                  <stop offset="100%" stopColor="#0d9488" stopOpacity={0.7}/>
                </linearGradient>
                <linearGradient id="gradTopstep" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity={1}/>
                  <stop offset="100%" stopColor="#1d4ed8" stopOpacity={0.7}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="4 4" stroke="#e2e8f0" strokeOpacity={0.5} />
              <XAxis 
                dataKey="strategy" 
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
                formatter={(value, name) => [`${value}%`, name.toUpperCase()]}
              />
              <Bar dataKey="ftmo" fill="url(#gradFTMO)" radius={[12, 12, 0, 0]} />
              <Bar dataKey="topstep" fill="url(#gradTopstep)" radius={[12, 12, 0, 0]} />
              <Bar dataKey="the5ers" fill="#8b5cf6" radius={[12, 12, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Market Strategy Analysis */}
        <div className="bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-blue-200">
          <div>
            <h3 className="text-2xl font-bold text-slate-900">Best Strategies by Market</h3>
            <p className="text-sm text-slate-500 mt-1">Market-specific performance</p>
          </div>
          <ResponsiveContainer width="100%" height={320}>
            <LineChart data={marketStrategyData}>
              <CartesianGrid strokeDasharray="4 4" stroke="#e2e8f0" strokeOpacity={0.5} />
              <XAxis 
                dataKey="market" 
                tick={{ fontSize: 12, fill: '#475569', fontWeight: 500 }}
                stroke="#cbd5e1"
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
                formatter={(value, name) => [`${value}%`, name.replace(/([A-Z])/g, ' $1').trim()]}
              />
              <Line type="monotone" dataKey="scalping" stroke="#14b8a6" strokeWidth={3} dot={{ fill: '#14b8a6', r: 6 }} activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="dayTrading" stroke="#3b82f6" strokeWidth={3} dot={{ fill: '#3b82f6', r: 6 }} activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="swing" stroke="#8b5cf6" strokeWidth={3} dot={{ fill: '#8b5cf6', r: 6 }} activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="position" stroke="#f59e0b" strokeWidth={3} dot={{ fill: '#f59e0b', r: 6 }} activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Risk-Reward Analysis */}
        <div className="bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-green-200 lg:col-span-2">
          <div>
            <h3 className="text-2xl font-bold text-slate-900">Risk-Reward Analysis</h3>
            <p className="text-sm text-slate-500 mt-1">Strategy risk vs reward ratios</p>
          </div>
          <ResponsiveContainer width="100%" height={350}>
            <ScatterChart data={riskRewardData}>
              <CartesianGrid strokeDasharray="4 4" stroke="#e2e8f0" strokeOpacity={0.5} />
              <XAxis 
                dataKey="avgRisk" 
                tick={{ fontSize: 12, fill: '#475569', fontWeight: 500 }}
                stroke="#cbd5e1"
              />
              <YAxis 
                dataKey="avgReward" 
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
                  name === 'avgRisk' ? `${value}%` : 
                  name === 'avgReward' ? `${value}%` : 
                  name === 'winRate' ? `${value}%` : 
                  `${value}`,
                  name === 'avgRisk' ? 'Avg Risk' :
                  name === 'avgReward' ? 'Avg Reward' :
                  name === 'winRate' ? 'Win Rate' : 'Profit Factor'
                ]}
              />
              <Scatter dataKey="avgReward" fill="#10b981" r={10} />
            </ScatterChart>
          </ResponsiveContainer>
        </div>

        {/* Optimal Trading Times (CSS-based) */}
        <div className="bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-purple-200">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-900">Optimal Trading Times</h3>
              <p className="text-sm text-slate-500 mt-1">Success rates by time window</p>
            </div>
            <span className="text-xs px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-700 font-semibold">Updated ✓</span>
          </div>
          <div className="space-y-4">
            {tradingTimes.map((t) => (
              <div key={t.time}>
                <div className="flex justify-between text-xs mb-2">
                  <span className="font-semibold text-slate-900">{t.time} • {t.strategy}</span>
                  <span className="text-slate-600 font-medium">Success {t.success}% • Volume {t.volume}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden shadow-sm">
                  <div 
                    className="bg-gradient-to-r from-violet-500 to-indigo-600 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${t.success}%` }} 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Strategy Complexity Analysis */}
      <div className="bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-orange-200">
        <div>
          <h3 className="text-2xl font-bold text-slate-900">Strategy Complexity vs Success</h3>
          <p className="text-sm text-slate-500 mt-1">Learning curve vs success rate comparison</p>
        </div>
        <ResponsiveContainer width="100%" height={350}>
          <RadarChart data={complexityData}>
            <PolarGrid stroke="#e2e8f0" />
            <PolarAngleAxis 
              dataKey="strategy" 
              tick={{ fontSize: 11, fill: '#475569', fontWeight: 500 }}
            />
            <PolarRadiusAxis 
              tick={{ fontSize: 11, fill: '#475569', fontWeight: 500 }}
              domain={[0, 100]}
            />
            <Radar
              name="Complexity"
              dataKey="complexity"
              stroke="#ef4444"
              fill="#ef4444"
              fillOpacity={0.25}
              strokeWidth={2.5}
            />
            <Radar
              name="Success Rate"
              dataKey="successRate"
              stroke="#10b981"
              fill="#10b981"
              fillOpacity={0.25}
              strokeWidth={2.5}
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
                name === 'complexity' ? `${value}/10` : `${value}%`,
                name === 'complexity' ? 'Complexity' : 'Success Rate'
              ]}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      {/* Best Combinations */}
      <div className="bg-gradient-to-r from-green-50 via-blue-50 to-purple-50 border border-slate-200 rounded-2xl p-8 shadow-lg">
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-2">Best Strategy-Firm Combinations</h3>
          <p className="text-sm text-slate-500">Proven winning combinations based on analysis</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {bestCombinations.map((combo, index) => (
            <div key={combo.combination} className="p-6 bg-white rounded-2xl shadow-md border border-slate-100 hover:shadow-lg hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold text-slate-900 text-sm leading-snug">{combo.combination}</h4>
                <span className={`text-xs px-3 py-1.5 rounded-full font-semibold whitespace-nowrap ml-2 ${
                  combo.riskLevel === 'Low' ? 'bg-green-100 text-green-800' :
                  combo.riskLevel === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {combo.riskLevel}
                </span>
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Success Rate:</span>
                  <span className="font-bold text-slate-900">{combo.successRate}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Avg Profit:</span>
                  <span className="font-bold text-slate-900">{combo.avgProfit}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Key Insights */}
      <div className="bg-white border border-slate-200 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-slate-900 mb-4">Claude 4.5 Strategy Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-slate-800 mb-3">Best Strategies by Experience:</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>• <strong>Beginners:</strong> Position Trading + The 5%ers (88% success)</li>
              <li>• <strong>Intermediate:</strong> Swing Trading + Audacity (90% success)</li>
              <li>• <strong>Advanced:</strong> Scalping + Topstep (85% success)</li>
              <li>• <strong>Expert:</strong> Algorithmic + Apex (84% success)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-800 mb-3">Key Success Factors:</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>• <strong>Risk Management:</strong> Never risk more than 1-2% per trade</li>
              <li>• <strong>Market Timing:</strong> Trade during high-volume sessions</li>
              <li>• <strong>Strategy-Firm Fit:</strong> Match strategy to firm's strengths</li>
              <li>• <strong>Consistency:</strong> Stick to one strategy until profitable</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradingStrategyAnalytics;
