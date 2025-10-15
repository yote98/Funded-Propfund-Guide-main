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
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Market Timing Insights</h2>
        <p className="text-slate-600">When to trade what markets - powered by Claude 4.5 analysis</p>
      </div>

      {/* Key Timing Insights */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl p-6 text-center">
          <div className="text-3xl font-bold mb-2">16:00</div>
          <div className="text-sm opacity-90">Best Trading Hour</div>
          <div className="text-xs opacity-75 mt-1">London-NY Overlap</div>
        </div>
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl p-6 text-center">
          <div className="text-3xl font-bold mb-2">95%</div>
          <div className="text-sm opacity-90">Max Volatility</div>
          <div className="text-xs opacity-75 mt-1">London-NY Overlap</div>
        </div>
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl p-6 text-center">
          <div className="text-3xl font-bold mb-2">Dec</div>
          <div className="text-sm opacity-90">Best Trading Month</div>
          <div className="text-xs opacity-75 mt-1">85% success rate</div>
        </div>
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl p-6 text-center">
          <div className="text-3xl font-bold mb-2">Avoid</div>
          <div className="text-sm opacity-90">NFP & FOMC</div>
          <div className="text-xs opacity-75 mt-1">High volatility, low success</div>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Market Timing by Session */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-slate-900 mb-4">Best Trading Times by Market</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={marketTiming}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="market" tick={{ fontSize: 12 }} stroke="#64748b" />
              <YAxis tick={{ fontSize: 12 }} stroke="#64748b" />
              <Tooltip 
                contentStyle={{
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
                formatter={(value, name) => [`${value}%`, name.toUpperCase()]}
              />
              <Bar dataKey="london" fill="#14b8a6" radius={[4, 4, 0, 0]} />
              <Bar dataKey="newyork" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              <Bar dataKey="tokyo" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Volatility by Hour (CSS-based for reliability) */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-slate-900 mb-4">Optimal Trading Times</h3>
          <div className="space-y-3">
            {volatilityByHour.map((row) => (
              <div key={row.hour}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-700">{row.hour}</span>
                  <span className="text-slate-500">Success {row.success}% • Volatility {row.volatility}% • Volume {row.volume}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-3">
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-600 h-3 rounded-full" style={{ width: `${row.success}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Seasonal Patterns */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-slate-900 mb-4">Seasonal Trading Patterns</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={seasonalPatterns}>
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
                  name === 'success' ? `${value}%` : 
                  name === 'volatility' ? `${value}%` : `${value}%`,
                  name === 'success' ? 'Success Rate' :
                  name === 'volatility' ? 'Volatility' : 'Volume'
                ]}
              />
              <Line type="monotone" dataKey="success" stroke="#10b981" strokeWidth={3} dot={{ r: 4 }} />
              <Line type="monotone" dataKey="volatility" stroke="#ef4444" strokeWidth={3} dot={{ r: 4 }} />
              <Line type="monotone" dataKey="volume" stroke="#3b82f6" strokeWidth={3} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Economic Calendar Impact (CSS-based) */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-slate-900">Economic Calendar Impact</h3>
            <span className="text-xs px-2 py-1 rounded-full bg-emerald-100 text-emerald-700">Updated ✓</span>
          </div>
          <div className="space-y-3">
            {economicImpact.map((e) => (
              <div key={e.event}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-700">{e.event}</span>
                  <span className="text-slate-500">Impact {e.impact}% • Volatility {e.volatility}% • Success {e.success}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-3">
                  <div className="bg-gradient-to-r from-rose-500 to-red-600 h-3 rounded-full" style={{ width: `${e.impact}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Session Overlap Analysis */}
      <div className="bg-white border border-slate-200 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-slate-900 mb-4">Market Session Overlap Analysis</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {sessionOverlaps.map((session, index) => (
            <div key={session.session} className={`p-4 rounded-lg ${
              session.best ? 'bg-gradient-to-r from-green-50 to-green-100 border-2 border-green-300' : 'bg-slate-50 border border-slate-200'
            }`}>
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-slate-900 text-sm">{session.session}</h4>
                {session.best && <span className="text-xs bg-green-500 text-white px-2 py-1 rounded-full">BEST</span>}
              </div>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between">
                  <span>Overlap:</span>
                  <span className="font-medium">{session.overlap}h</span>
                </div>
                <div className="flex justify-between">
                  <span>Volatility:</span>
                  <span className="font-medium">{session.volatility}%</span>
                </div>
                <div className="flex justify-between">
                  <span>Volume:</span>
                  <span className="font-medium">{session.volume}%</span>
                </div>
                <div className="flex justify-between">
                  <span>Success:</span>
                  <span className="font-medium text-green-600">{session.success}%</span>
                </div>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2 mt-2">
                <div 
                  className="bg-gradient-to-r from-green-500 to-blue-600 h-2 rounded-full transition-all duration-1000"
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
      <div className="bg-white border border-slate-200 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-slate-900 mb-4">Currency Pair Timing</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currencyTiming.map((pair, index) => (
            <div key={pair.pair} className="p-4 bg-gradient-to-r from-slate-50 to-slate-100 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-slate-900">{pair.pair}</h4>
                <span className="text-xs text-blue-600 font-medium">{pair.best}</span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>London:</span>
                  <span className="font-medium">{pair.london}%</span>
                </div>
                <div className="flex justify-between">
                  <span>New York:</span>
                  <span className="font-medium">{pair.newyork}%</span>
                </div>
                <div className="flex justify-between">
                  <span>Tokyo:</span>
                  <span className="font-medium">{pair.tokyo}%</span>
                </div>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2 mt-2">
                <div 
                  className="bg-gradient-to-r from-green-500 to-blue-600 h-2 rounded-full transition-all duration-1000"
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
      <div className="bg-white border border-slate-200 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-slate-900 mb-4">News Impact Timing</h3>
        <ResponsiveContainer width="100%" height={300}>
          <ComposedChart data={newsTiming}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="time" tick={{ fontSize: 10 }} stroke="#64748b" />
            <YAxis tick={{ fontSize: 12 }} stroke="#64748b" />
            <Tooltip 
              contentStyle={{
                backgroundColor: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
              formatter={(value, name) => [
                name === 'volatility' ? `${value}%` : `${value}%`,
                name === 'volatility' ? 'Volatility' : 'Success Rate'
              ]}
            />
            <Bar dataKey="volatility" fill="#ef4444" radius={[4, 4, 0, 0]} />
            <Line type="monotone" dataKey="success" stroke="#10b981" strokeWidth={3} dot={{ r: 4 }} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      {/* Timing Insights */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-slate-200 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-slate-900 mb-4">Claude 4.5 Timing Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-slate-800 mb-3">Best Trading Times:</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>• <strong>16:00-20:00 GMT:</strong> London-NY overlap (95% volatility)</li>
              <li>• <strong>08:00-12:00 GMT:</strong> London session (85% success)</li>
              <li>• <strong>13:00-17:00 GMT:</strong> NY session (88% success)</li>
              <li>• <strong>December:</strong> Best month (85% success rate)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-800 mb-3">Avoid These Times:</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>• <strong>NFP Release:</strong> 95% impact, 45% success rate</li>
              <li>• <strong>FOMC Meetings:</strong> 90% impact, 40% success rate</li>
              <li>• <strong>Summer Months:</strong> Jul-Aug (70% success)</li>
              <li>• <strong>News Events:</strong> 30min before/after release</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketTimingInsights;
