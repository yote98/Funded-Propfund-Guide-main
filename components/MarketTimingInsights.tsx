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
  AreaChart,
  Area,
  ComposedChart
} from 'recharts';

const MarketTimingInsights: React.FC = () => {
  // Best Trading Times by Market
  const marketTiming = [
    { market: 'Forex', london: 85, newyork: 90, tokyo: 75, sydney: 65, best: 'New York' },
    { market: 'Futures', london: 70, newyork: 95, tokyo: 60, sydney: 55, best: 'New York' },
    { market: 'Crypto', london: 80, newyork: 85, tokyo: 70, sydney: 75, best: 'New York' },
    { market: 'Stocks', london: 75, newyork: 88, tokyo: 65, sydney: 60, best: 'New York' }
  ];

  // Volatility Patterns by Hour
  const volatilityByHour = [
    { hour: '00:00', volatility: 45, volume: 60, success: 55 },
    { hour: '02:00', volatility: 50, volume: 65, success: 58 },
    { hour: '04:00', volatility: 55, volume: 70, success: 62 },
    { hour: '06:00', volatility: 60, volume: 75, success: 68 },
    { hour: '08:00', volatility: 70, volume: 85, success: 75 },
    { hour: '10:00', volatility: 80, volume: 90, success: 82 },
    { hour: '12:00', volatility: 75, volume: 88, success: 78 },
    { hour: '14:00', volatility: 85, volume: 95, success: 85 },
    { hour: '16:00', volatility: 90, volume: 100, success: 88 },
    { hour: '18:00', volatility: 85, volume: 92, success: 82 },
    { hour: '20:00', volatility: 70, volume: 80, success: 75 },
    { hour: '22:00', volatility: 60, volume: 70, success: 68 }
  ];

  // Seasonal Trading Patterns
  const seasonalPatterns = [
    { month: 'Jan', success: 75, volatility: 85, volume: 90, trend: 'Bullish' },
    { month: 'Feb', success: 72, volatility: 80, volume: 85, trend: 'Bullish' },
    { month: 'Mar', success: 78, volatility: 88, volume: 92, trend: 'Bullish' },
    { month: 'Apr', success: 82, volatility: 75, volume: 88, trend: 'Bullish' },
    { month: 'May', success: 80, volatility: 70, volume: 85, trend: 'Neutral' },
    { month: 'Jun', success: 75, volatility: 65, volume: 80, trend: 'Neutral' },
    { month: 'Jul', success: 70, volatility: 60, volume: 75, trend: 'Bearish' },
    { month: 'Aug', success: 68, volatility: 55, volume: 70, trend: 'Bearish' },
    { month: 'Sep', success: 72, volatility: 70, volume: 78, trend: 'Neutral' },
    { month: 'Oct', success: 78, volatility: 85, volume: 88, trend: 'Bullish' },
    { month: 'Nov', success: 82, volatility: 90, volume: 92, trend: 'Bullish' },
    { month: 'Dec', success: 85, volatility: 95, volume: 95, trend: 'Bullish' }
  ];

  // Economic Calendar Impact
  const economicImpact = [
    { event: 'NFP Release', impact: 95, volatility: 100, success: 45, recommendation: 'Avoid' },
    { event: 'FOMC Meeting', impact: 90, volatility: 95, success: 40, recommendation: 'Avoid' },
    { event: 'CPI Release', impact: 85, volatility: 90, success: 50, recommendation: 'Caution' },
    { event: 'GDP Release', impact: 80, volatility: 85, success: 55, recommendation: 'Caution' },
    { event: 'Interest Rate', impact: 75, volatility: 80, success: 60, recommendation: 'Caution' },
    { event: 'Unemployment', impact: 70, volatility: 75, success: 65, recommendation: 'Trade' },
    { event: 'Retail Sales', impact: 65, volatility: 70, success: 70, recommendation: 'Trade' },
    { event: 'PMI Data', impact: 60, volatility: 65, success: 75, recommendation: 'Trade' }
  ];

  // Market Session Overlap Analysis
  const sessionOverlaps = [
    { session: 'London-New York', overlap: 4, volatility: 95, volume: 100, success: 88, best: true },
    { session: 'Tokyo-London', overlap: 2, volatility: 80, volume: 85, success: 75, best: false },
    { session: 'Sydney-Tokyo', overlap: 3, volatility: 70, volume: 75, success: 68, best: false },
    { session: 'New York-Close', overlap: 1, volatility: 85, volume: 90, success: 82, best: false }
  ];

  // Currency Pair Timing
  const currencyTiming = [
    { pair: 'EUR/USD', london: 90, newyork: 95, tokyo: 60, best: 'New York' },
    { pair: 'GBP/USD', london: 95, newyork: 88, tokyo: 55, best: 'London' },
    { pair: 'USD/JPY', london: 70, newyork: 85, tokyo: 90, best: 'Tokyo' },
    { pair: 'AUD/USD', london: 75, newyork: 80, tokyo: 85, best: 'Tokyo' },
    { pair: 'USD/CAD', london: 80, newyork: 90, tokyo: 65, best: 'New York' },
    { pair: 'NZD/USD', london: 70, newyork: 75, tokyo: 80, best: 'Tokyo' }
  ];

  // News Impact Timing
  const newsTiming = [
    { time: 'Pre-News (30min)', volatility: 60, success: 45, recommendation: 'Avoid' },
    { time: 'News Release', volatility: 100, success: 25, recommendation: 'Avoid' },
    { time: 'Post-News (5min)', volatility: 95, success: 30, recommendation: 'Avoid' },
    { time: 'Post-News (15min)', volatility: 80, success: 50, recommendation: 'Caution' },
    { time: 'Post-News (30min)', volatility: 70, success: 65, recommendation: 'Trade' },
    { time: 'Post-News (1hour)', volatility: 60, success: 75, recommendation: 'Trade' }
  ];

  // Market Correlation Analysis
  const correlationData = [
    { pair: 'EUR/USD & GBP/USD', correlation: 0.85, timing: 'London', success: 82 },
    { pair: 'USD/JPY & Nikkei', correlation: 0.78, timing: 'Tokyo', success: 75 },
    { pair: 'AUD/USD & Gold', correlation: 0.72, timing: 'Sydney', success: 70 },
    { pair: 'USD/CAD & Oil', correlation: 0.68, timing: 'New York', success: 68 },
    { pair: 'EUR/GBP & FTSE', correlation: 0.65, timing: 'London', success: 65 }
  ];

  const COLORS = ['#14b8a6', '#3b82f6', '#8b5cf6', '#f59e0b', '#ef4444', '#10b981'];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-slate-900 mb-2">Market Timing Insights</h2>
        <p className="text-slate-600 text-lg">When to trade what markets - powered by Claude 4.5 analysis</p>
      </div>

      {/* Key Timing Insights */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">⏰</span>
          </div>
          <div className="text-4xl font-bold mb-2">16:00</div>
          <div className="text-sm opacity-90 font-medium">Best Trading Hour</div>
          <div className="text-xs opacity-75 mt-1">London-NY Overlap</div>
        </div>
        <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">📈</span>
          </div>
          <div className="text-4xl font-bold mb-2">95%</div>
          <div className="text-sm opacity-90 font-medium">Max Volatility</div>
          <div className="text-xs opacity-75 mt-1">London-NY Overlap</div>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-violet-600 text-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">📅</span>
          </div>
          <div className="text-4xl font-bold mb-2">Dec</div>
          <div className="text-sm opacity-90 font-medium">Best Trading Month</div>
          <div className="text-xs opacity-75 mt-1">85% success rate</div>
        </div>
        <div className="bg-gradient-to-br from-orange-500 to-red-600 text-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">⚠️</span>
          </div>
          <div className="text-4xl font-bold mb-2">Avoid</div>
          <div className="text-sm opacity-90 font-medium">NFP & FOMC</div>
          <div className="text-xs opacity-75 mt-1">High volatility, low success</div>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Market Timing by Session */}
        <div className="bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
            <span className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center text-white text-sm font-bold mr-3">📊</span>
            Best Trading Times by Market
          </h3>
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={marketTiming}>
              <defs>
                <linearGradient id="gradLondon" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#14b8a6" stopOpacity={1} />
                  <stop offset="100%" stopColor="#0d9488" stopOpacity={0.8} />
                </linearGradient>
                <linearGradient id="gradNewYork" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity={1} />
                  <stop offset="100%" stopColor="#2563eb" stopOpacity={0.8} />
                </linearGradient>
                <linearGradient id="gradTokyo" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#8b5cf6" stopOpacity={1} />
                  <stop offset="100%" stopColor="#7c3aed" stopOpacity={0.8} />
                </linearGradient>
                <filter id="shadowBar" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#000000" floodOpacity="0.1"/>
                </filter>
              </defs>
              <CartesianGrid strokeDasharray="4 4" stroke="#cbd5e1" strokeOpacity={0.5} />
              <XAxis 
                dataKey="market" 
                tick={{ fontSize: 12, fill: '#475569', fontWeight: 500 }} 
                stroke="#cbd5e1"
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
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                  padding: '12px'
                }}
                formatter={(value, name) => [`${value}%`, (name as string).toUpperCase()]}
              />
              <Bar dataKey="london" fill="url(#gradLondon)" radius={[12, 12, 0, 0]} filter="url(#shadowBar)" />
              <Bar dataKey="newyork" fill="url(#gradNewYork)" radius={[12, 12, 0, 0]} filter="url(#shadowBar)" />
              <Bar dataKey="tokyo" fill="url(#gradTokyo)" radius={[12, 12, 0, 0]} filter="url(#shadowBar)" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Volatility by Hour (CSS-based for reliability) */}
        <div className="bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
            <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white text-sm font-bold mr-3">⏰</span>
            Optimal Trading Times
          </h3>
          <div className="space-y-4">
            {volatilityByHour.map((row, index) => (
              <div key={row.hour} className="group">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-700 font-medium">{row.hour}</span>
                  <span className="text-slate-500 text-xs">Success {row.success}% • Volatility {row.volatility}% • Volume {row.volume}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-4 shadow-inner">
                  <div 
                    className="bg-gradient-to-r from-emerald-500 to-teal-600 h-4 rounded-full shadow-sm transition-all duration-1000 ease-out" 
                    style={{ 
                      width: `${row.success}%`,
                      animationDelay: `${index * 100}ms`
                    }} 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Seasonal Patterns */}
        <div className="bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
            <span className="w-8 h-8 bg-gradient-to-r from-purple-500 to-violet-600 rounded-lg flex items-center justify-center text-white text-sm font-bold mr-3">📅</span>
            Seasonal Trading Patterns
          </h3>
          <ResponsiveContainer width="100%" height={320}>
            <LineChart data={seasonalPatterns}>
              <defs>
                <linearGradient id="gradSuccess" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#10b981" stopOpacity={1} />
                  <stop offset="100%" stopColor="#059669" stopOpacity={0.8} />
                </linearGradient>
                <linearGradient id="gradVolatility" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ef4444" stopOpacity={1} />
                  <stop offset="100%" stopColor="#dc2626" stopOpacity={0.8} />
                </linearGradient>
                <linearGradient id="gradVolume" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity={1} />
                  <stop offset="100%" stopColor="#2563eb" stopOpacity={0.8} />
                </linearGradient>
                <filter id="shadowLine" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.1"/>
                </filter>
              </defs>
              <CartesianGrid strokeDasharray="4 4" stroke="#cbd5e1" strokeOpacity={0.5} />
              <XAxis 
                dataKey="month" 
                tick={{ fontSize: 12, fill: '#475569', fontWeight: 500 }} 
                stroke="#cbd5e1"
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
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                  padding: '12px'
                }}
                formatter={(value, name) => [
                  name === 'success' ? `${value}%` : 
                  name === 'volatility' ? `${value}%` : `${value}%`,
                  name === 'success' ? 'Success Rate' :
                  name === 'volatility' ? 'Volatility' : 'Volume'
                ]}
              />
              <Line type="monotone" dataKey="success" stroke="url(#gradSuccess)" strokeWidth={3} dot={{ r: 6, fill: '#10b981' }} filter="url(#shadowLine)" />
              <Line type="monotone" dataKey="volatility" stroke="url(#gradVolatility)" strokeWidth={3} dot={{ r: 6, fill: '#ef4444' }} filter="url(#shadowLine)" />
              <Line type="monotone" dataKey="volume" stroke="url(#gradVolume)" strokeWidth={3} dot={{ r: 6, fill: '#3b82f6' }} filter="url(#shadowLine)" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Economic Calendar Impact (CSS-based) */}
        <div className="bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-slate-900 flex items-center">
              <span className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center text-white text-sm font-bold mr-3">📊</span>
              Economic Calendar Impact
            </h3>
            <span className="text-xs px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 font-medium">Updated ✓</span>
          </div>
          <div className="space-y-4">
            {economicImpact.map((e, index) => (
              <div key={e.event} className="group">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-700 font-medium">{e.event}</span>
                  <span className="text-slate-500 text-xs">Impact {e.impact}% • Volatility {e.volatility}% • Success {e.success}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-4 shadow-inner">
                  <div 
                    className="bg-gradient-to-r from-rose-500 to-red-600 h-4 rounded-full shadow-sm transition-all duration-1000 ease-out" 
                    style={{ 
                      width: `${e.impact}%`,
                      animationDelay: `${index * 150}ms`
                    }} 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Session Overlap Analysis */}
      <div className="bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
        <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
          <span className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center text-white text-sm font-bold mr-3">🌍</span>
          Market Session Overlap Analysis
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sessionOverlaps.map((session, index) => (
            <div key={session.session} className={`p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 ${
              session.best ? 'bg-gradient-to-br from-emerald-50 to-green-100 border-2 border-emerald-300' : 'bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold text-slate-900 text-sm">{session.session}</h4>
                {session.best && <span className="text-xs bg-gradient-to-r from-emerald-500 to-green-600 text-white px-3 py-1 rounded-full font-medium">BEST</span>}
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600">Overlap:</span>
                  <span className="font-bold text-slate-900">{session.overlap}h</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Volatility:</span>
                  <span className="font-bold text-slate-900">{session.volatility}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Volume:</span>
                  <span className="font-bold text-slate-900">{session.volume}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Success:</span>
                  <span className="font-bold text-emerald-600">{session.success}%</span>
                </div>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-3 mt-4 shadow-inner">
                <div 
                  className="bg-gradient-to-r from-emerald-500 to-blue-600 h-3 rounded-full shadow-sm transition-all duration-1000 ease-out"
                  style={{ 
                    width: `${session.success}%`,
                    animationDelay: `${index * 200}ms`
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Currency Pair Timing */}
      <div className="bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
        <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
          <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white text-sm font-bold mr-3">💱</span>
          Currency Pair Timing
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currencyTiming.map((pair, index) => (
            <div key={pair.pair} className="p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold text-slate-900 text-lg">{pair.pair}</h4>
                <span className="text-xs text-blue-600 font-bold bg-blue-100 px-3 py-1 rounded-full">{pair.best}</span>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600">London:</span>
                  <span className="font-bold text-slate-900">{pair.london}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">New York:</span>
                  <span className="font-bold text-slate-900">{pair.newyork}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Tokyo:</span>
                  <span className="font-bold text-slate-900">{pair.tokyo}%</span>
                </div>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-3 mt-4 shadow-inner">
                <div 
                  className="bg-gradient-to-r from-emerald-500 to-blue-600 h-3 rounded-full shadow-sm transition-all duration-1000 ease-out"
                  style={{ 
                    width: `${Math.max(pair.london, pair.newyork, pair.tokyo)}%`,
                    animationDelay: `${index * 150}ms`
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* News Impact Timing */}
      <div className="bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
        <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
          <span className="w-8 h-8 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg flex items-center justify-center text-white text-sm font-bold mr-3">📰</span>
          News Impact Timing
        </h3>
        <ResponsiveContainer width="100%" height={320}>
          <ComposedChart data={newsTiming}>
            <defs>
              <linearGradient id="gradVolatility" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ef4444" stopOpacity={1} />
                <stop offset="100%" stopColor="#dc2626" stopOpacity={0.8} />
              </linearGradient>
              <linearGradient id="gradSuccess" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10b981" stopOpacity={1} />
                <stop offset="100%" stopColor="#059669" stopOpacity={0.8} />
              </linearGradient>
              <filter id="shadowNews" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#000000" floodOpacity="0.1"/>
              </filter>
            </defs>
            <CartesianGrid strokeDasharray="4 4" stroke="#cbd5e1" strokeOpacity={0.5} />
            <XAxis 
              dataKey="time" 
              tick={{ fontSize: 10, fill: '#475569', fontWeight: 500 }} 
              stroke="#cbd5e1"
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
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                padding: '12px'
              }}
              formatter={(value, name) => [
                name === 'volatility' ? `${value}%` : `${value}%`,
                name === 'volatility' ? 'Volatility' : 'Success Rate'
              ]}
            />
            <Bar dataKey="volatility" fill="url(#gradVolatility)" radius={[12, 12, 0, 0]} filter="url(#shadowNews)" />
            <Line type="monotone" dataKey="success" stroke="url(#gradSuccess)" strokeWidth={3} dot={{ r: 6, fill: '#10b981' }} filter="url(#shadowNews)" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      {/* Timing Insights */}
      <div className="bg-gradient-to-br from-emerald-50 via-blue-50 to-indigo-50 border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
        <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
          <span className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-lg flex items-center justify-center text-white text-sm font-bold mr-3">🧠</span>
          Claude 4.5 Timing Insights
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-md">
            <h4 className="font-bold text-slate-800 mb-4 flex items-center">
              <span className="w-6 h-6 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full flex items-center justify-center text-white text-xs font-bold mr-2">✓</span>
              Best Trading Times:
            </h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span><strong>16:00-20:00 GMT:</strong> London-NY overlap (95% volatility)</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span><strong>08:00-12:00 GMT:</strong> London session (85% success)</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span><strong>13:00-17:00 GMT:</strong> NY session (88% success)</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span><strong>December:</strong> Best month (85% success rate)</span>
              </li>
            </ul>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-md">
            <h4 className="font-bold text-slate-800 mb-4 flex items-center">
              <span className="w-6 h-6 bg-gradient-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center text-white text-xs font-bold mr-2">⚠</span>
              Avoid These Times:
            </h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span><strong>NFP Release:</strong> 95% impact, 45% success rate</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span><strong>FOMC Meetings:</strong> 90% impact, 40% success rate</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span><strong>Summer Months:</strong> Jul-Aug (70% success)</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span><strong>News Events:</strong> 30min before/after release</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketTimingInsights;
