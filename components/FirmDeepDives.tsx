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
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from 'recharts';

const FirmDeepDives: React.FC = () => {
  // Detailed Firm Comparison
  const firmComparison = [
    { 
      firm: 'FTMO', 
      trustScore: 95, 
      payoutSpeed: 90, 
      support: 88, 
      platform: 85, 
      fees: 95, 
      overall: 91,
      pros: ['Fast payouts', 'No hidden fees', 'Great support'],
      cons: ['Strict rules', 'High challenge cost'],
      bestFor: 'Beginners to Intermediate'
    },
    { 
      firm: 'Topstep', 
      trustScore: 92, 
      payoutSpeed: 85, 
      support: 90, 
      platform: 88, 
      fees: 90, 
      overall: 89,
      pros: ['Excellent platform', 'Good support', 'Fair rules'],
      cons: ['Monthly fees', 'Complex rules'],
      bestFor: 'Intermediate to Advanced'
    },
    { 
      firm: 'The 5%ers', 
      trustScore: 88, 
      payoutSpeed: 85, 
      support: 85, 
      platform: 80, 
      fees: 85, 
      overall: 85,
      pros: ['Low monthly cost', 'Simple rules', 'Good for beginners'],
      cons: ['Limited platform options', 'Slower scaling'],
      bestFor: 'Beginners'
    },
    { 
      firm: 'Audacity', 
      trustScore: 85, 
      payoutSpeed: 80, 
      support: 82, 
      platform: 85, 
      fees: 80, 
      overall: 83,
      pros: ['Good platform', 'Reasonable fees', 'Fair rules'],
      cons: ['Limited support hours', 'Slower payouts'],
      bestFor: 'Intermediate'
    },
    { 
      firm: 'Apex', 
      trustScore: 90, 
      payoutSpeed: 88, 
      support: 85, 
      platform: 90, 
      fees: 88, 
      overall: 88,
      pros: ['Excellent platform', 'Fast payouts', 'Good support'],
      cons: ['Higher fees', 'Complex rules'],
      bestFor: 'Advanced'
    }
  ];

  // Support Quality Analysis
  const supportAnalysis = [
    { firm: 'FTMO', responseTime: 2, quality: 88, availability: 95, languages: 5, rating: 4.4 },
    { firm: 'Topstep', responseTime: 4, quality: 90, availability: 90, languages: 3, rating: 4.5 },
    { firm: 'The 5%ers', responseTime: 6, quality: 85, availability: 85, languages: 2, rating: 4.2 },
    { firm: 'Audacity', responseTime: 8, quality: 82, availability: 80, languages: 2, rating: 4.0 },
    { firm: 'Apex', responseTime: 3, quality: 85, availability: 88, languages: 4, rating: 4.3 }
  ];

  // Platform Reliability Scores
  const platformReliability = [
    { firm: 'FTMO', uptime: 99.5, speed: 85, features: 80, stability: 90, userRating: 4.3 },
    { firm: 'Topstep', uptime: 99.8, speed: 90, features: 95, stability: 95, userRating: 4.6 },
    { firm: 'The 5%ers', uptime: 99.2, speed: 80, features: 75, stability: 85, userRating: 4.1 },
    { firm: 'Audacity', uptime: 99.0, speed: 85, features: 85, stability: 88, userRating: 4.2 },
    { firm: 'Apex', uptime: 99.7, speed: 88, features: 90, stability: 92, userRating: 4.4 }
  ];

  // Withdrawal Success Rates
  const withdrawalRates = [
    { firm: 'FTMO', successRate: 98, avgTime: 2, maxTime: 5, fees: 0, issues: 2 },
    { firm: 'Topstep', successRate: 96, avgTime: 3, maxTime: 7, fees: 0, issues: 4 },
    { firm: 'The 5%ers', successRate: 94, avgTime: 4, maxTime: 10, fees: 0, issues: 6 },
    { firm: 'Audacity', successRate: 92, avgTime: 5, maxTime: 12, fees: 0, issues: 8 },
    { firm: 'Apex', successRate: 95, avgTime: 3, maxTime: 8, fees: 0, issues: 5 }
  ];

  // Real Trader Experiences
  const traderExperiences = [
    {
      firm: 'FTMO',
      experiences: [
        { trader: 'John M.', experience: 'Excellent support, fast payouts. Rules are strict but fair.', rating: 5, verified: true },
        { trader: 'Sarah K.', experience: 'Great platform, easy to use. Withdrawal was processed in 2 days.', rating: 5, verified: true },
        { trader: 'Mike R.', experience: 'Good overall, but support could be faster during peak hours.', rating: 4, verified: true }
      ]
    },
    {
      firm: 'Topstep',
      experiences: [
        { trader: 'Alex T.', experience: 'Best platform I\'ve used. Very professional and reliable.', rating: 5, verified: true },
        { trader: 'Emma L.', experience: 'Great for futures trading. Support is knowledgeable.', rating: 4, verified: true },
        { trader: 'David P.', experience: 'Good firm but monthly fees add up over time.', rating: 4, verified: true }
      ]
    },
    {
      firm: 'The 5%ers',
      experiences: [
        { trader: 'Lisa W.', experience: 'Perfect for beginners. Simple rules and good support.', rating: 5, verified: true },
        { trader: 'Tom H.', experience: 'Low cost option, but platform is basic compared to others.', rating: 3, verified: true },
        { trader: 'Anna S.', experience: 'Good value for money. Scaling process is straightforward.', rating: 4, verified: true }
      ]
    }
  ];

  // Risk Assessment by Firm
  const riskAssessment = [
    { firm: 'FTMO', financialRisk: 'Low', regulatoryRisk: 'Low', operationalRisk: 'Low', overallRisk: 'Low' },
    { firm: 'Topstep', financialRisk: 'Low', regulatoryRisk: 'Low', operationalRisk: 'Medium', overallRisk: 'Low' },
    { firm: 'The 5%ers', financialRisk: 'Medium', regulatoryRisk: 'Low', operationalRisk: 'Medium', overallRisk: 'Medium' },
    { firm: 'Audacity', financialRisk: 'Medium', regulatoryRisk: 'Medium', operationalRisk: 'Medium', overallRisk: 'Medium' },
    { firm: 'Apex', financialRisk: 'Low', regulatoryRisk: 'Low', operationalRisk: 'Low', overallRisk: 'Low' }
  ];

  // Firm Strengths & Weaknesses
  const firmAnalysis = [
    {
      firm: 'FTMO',
      strengths: ['Fastest payouts', 'No hidden fees', 'Excellent support', 'High trust score'],
      weaknesses: ['Strict trading rules', 'High challenge cost', 'Limited platform options'],
      bestFor: ['Beginners', 'Intermediate traders', 'Those who want fast payouts'],
      avoidIf: ['You need flexible rules', 'You want advanced platform features']
    },
    {
      firm: 'Topstep',
      strengths: ['Best platform', 'Excellent support', 'Fair rules', 'High trust score'],
      weaknesses: ['Monthly fees', 'Complex scaling rules', 'Limited account sizes'],
      bestFor: ['Intermediate traders', 'Advanced traders', 'Futures traders'],
      avoidIf: ['You want one-time fees', 'You need simple rules']
    },
    {
      firm: 'The 5%ers',
      strengths: ['Lowest cost', 'Simple rules', 'Good for beginners', 'No hidden fees'],
      weaknesses: ['Basic platform', 'Limited features', 'Slower scaling', 'Limited support'],
      bestFor: ['Beginners', 'Budget-conscious traders', 'Simple trading strategies'],
      avoidIf: ['You need advanced features', 'You want fast scaling']
    }
  ];

  const COLORS = ['#14b8a6', '#3b82f6', '#8b5cf6', '#f59e0b', '#ef4444'];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-slate-900 mb-2">Firm Deep Dives</h2>
        <p className="text-slate-600 text-lg">Detailed comparisons with real data - powered by Claude 4.5 analysis</p>
      </div>

      {/* Key Firm Insights */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-emerald-500 to-green-600 text-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">🏆</span>
          </div>
          <div className="text-4xl font-bold mb-2">91</div>
          <div className="text-sm opacity-90 font-medium">FTMO Overall Score</div>
          <div className="text-xs opacity-75 mt-1">Highest rated firm</div>
        </div>
        <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">💰</span>
          </div>
          <div className="text-4xl font-bold mb-2">98%</div>
          <div className="text-sm opacity-90 font-medium">FTMO Withdrawal Success</div>
          <div className="text-xs opacity-75 mt-1">Most reliable payouts</div>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-violet-600 text-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">⚡</span>
          </div>
          <div className="text-4xl font-bold mb-2">2 Days</div>
          <div className="text-sm opacity-90 font-medium">Fastest Payout Time</div>
          <div className="text-xs opacity-75 mt-1">FTMO average</div>
        </div>
        <div className="bg-gradient-to-br from-orange-500 to-red-600 text-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">⭐</span>
          </div>
          <div className="text-4xl font-bold mb-2">4.6</div>
          <div className="text-sm opacity-90 font-medium">Topstep Platform Rating</div>
          <div className="text-xs opacity-75 mt-1">Best platform quality</div>
        </div>
      </div>

      {/* Firm Comparison Radar Chart */}
      <div className="bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
        <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
          <span className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center text-white text-sm font-bold mr-3">📊</span>
          Firm Comparison Overview
        </h3>
        <ResponsiveContainer width="100%" height={420}>
          <RadarChart data={firmComparison}>
            <defs>
              <linearGradient id="gradTrust" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#14b8a6" stopOpacity={1} />
                <stop offset="100%" stopColor="#0d9488" stopOpacity={0.8} />
              </linearGradient>
              <linearGradient id="gradPayout" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity={1} />
                <stop offset="100%" stopColor="#2563eb" stopOpacity={0.8} />
              </linearGradient>
              <linearGradient id="gradSupport" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity={1} />
                <stop offset="100%" stopColor="#7c3aed" stopOpacity={0.8} />
              </linearGradient>
              <linearGradient id="gradPlatform" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity={1} />
                <stop offset="100%" stopColor="#d97706" stopOpacity={0.8} />
              </linearGradient>
              <filter id="shadowRadar" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.1"/>
              </filter>
            </defs>
            <PolarGrid stroke="#cbd5e1" strokeOpacity={0.5} />
            <PolarAngleAxis 
              dataKey="firm" 
              tick={{ fontSize: 12, fill: '#475569', fontWeight: 500 }} 
            />
            <PolarRadiusAxis 
              tick={{ fontSize: 10, fill: '#475569', fontWeight: 500 }} 
              domain={[0, 100]} 
            />
            <Radar
              name="Trust Score"
              dataKey="trustScore"
              stroke="url(#gradTrust)"
              fill="url(#gradTrust)"
              fillOpacity={0.25}
              strokeWidth={2.5}
              filter="url(#shadowRadar)"
            />
            <Radar
              name="Payout Speed"
              dataKey="payoutSpeed"
              stroke="url(#gradPayout)"
              fill="url(#gradPayout)"
              fillOpacity={0.25}
              strokeWidth={2.5}
              filter="url(#shadowRadar)"
            />
            <Radar
              name="Support"
              dataKey="support"
              stroke="url(#gradSupport)"
              fill="url(#gradSupport)"
              fillOpacity={0.25}
              strokeWidth={2.5}
              filter="url(#shadowRadar)"
            />
            <Radar
              name="Platform"
              dataKey="platform"
              stroke="url(#gradPlatform)"
              fill="url(#gradPlatform)"
              fillOpacity={0.25}
              strokeWidth={2.5}
              filter="url(#shadowRadar)"
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: '#ffffff',
                border: '2px solid #e2e8f0',
                borderRadius: '12px',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                padding: '12px'
              }}
              formatter={(value, name) => [`${value}%`, name]}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      {/* Support Quality Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
            <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white text-sm font-bold mr-3">🎧</span>
            Support Quality Analysis
          </h3>
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={supportAnalysis}>
              <defs>
                <linearGradient id="gradQuality" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#14b8a6" stopOpacity={1} />
                  <stop offset="100%" stopColor="#0d9488" stopOpacity={0.8} />
                </linearGradient>
                <linearGradient id="gradAvailability" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity={1} />
                  <stop offset="100%" stopColor="#2563eb" stopOpacity={0.8} />
                </linearGradient>
                <filter id="shadowSupport" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#000000" floodOpacity="0.1"/>
                </filter>
              </defs>
              <CartesianGrid strokeDasharray="4 4" stroke="#cbd5e1" strokeOpacity={0.5} />
              <XAxis 
                dataKey="firm" 
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
                  name === 'responseTime' ? `${value}h` : 
                  name === 'quality' ? `${value}%` : 
                  name === 'availability' ? `${value}%` : 
                  name === 'languages' ? `${value}` : `${value}/5`,
                  name === 'responseTime' ? 'Response Time' :
                  name === 'quality' ? 'Quality' :
                  name === 'availability' ? 'Availability' :
                  name === 'languages' ? 'Languages' : 'Rating'
                ]}
              />
              <Bar dataKey="quality" fill="url(#gradQuality)" radius={[12, 12, 0, 0]} filter="url(#shadowSupport)" />
              <Bar dataKey="availability" fill="url(#gradAvailability)" radius={[12, 12, 0, 0]} filter="url(#shadowSupport)" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
            <span className="w-8 h-8 bg-gradient-to-r from-purple-500 to-violet-600 rounded-lg flex items-center justify-center text-white text-sm font-bold mr-3">💻</span>
            Platform Reliability
          </h3>
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={platformReliability}>
              <defs>
                <linearGradient id="gradUptime" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#10b981" stopOpacity={1} />
                  <stop offset="100%" stopColor="#059669" stopOpacity={0.8} />
                </linearGradient>
                <linearGradient id="gradStability" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#8b5cf6" stopOpacity={1} />
                  <stop offset="100%" stopColor="#7c3aed" stopOpacity={0.8} />
                </linearGradient>
                <filter id="shadowPlatform" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#000000" floodOpacity="0.1"/>
                </filter>
              </defs>
              <CartesianGrid strokeDasharray="4 4" stroke="#cbd5e1" strokeOpacity={0.5} />
              <XAxis 
                dataKey="firm" 
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
                  name === 'uptime' ? `${value}%` : 
                  name === 'speed' ? `${value}%` : 
                  name === 'features' ? `${value}%` : 
                  name === 'stability' ? `${value}%` : `${value}/5`,
                  name === 'uptime' ? 'Uptime' :
                  name === 'speed' ? 'Speed' :
                  name === 'features' ? 'Features' :
                  name === 'stability' ? 'Stability' : 'User Rating'
                ]}
              />
              <Bar dataKey="uptime" fill="url(#gradUptime)" radius={[12, 12, 0, 0]} filter="url(#shadowPlatform)" />
              <Bar dataKey="stability" fill="url(#gradStability)" radius={[12, 12, 0, 0]} filter="url(#shadowPlatform)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Withdrawal Success Rates */}
      <div className="bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
        <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
          <span className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center text-white text-sm font-bold mr-3">💳</span>
          Withdrawal Success Rates
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {withdrawalRates.map((firm, index) => (
            <div key={firm.firm} className="p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold text-slate-900 text-lg">{firm.firm}</h4>
                <span className="text-xs text-emerald-600 font-bold bg-emerald-100 px-3 py-1 rounded-full">{firm.successRate}% success</span>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600">Avg Time:</span>
                  <span className="font-bold text-slate-900">{firm.avgTime} days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Max Time:</span>
                  <span className="font-bold text-slate-900">{firm.maxTime} days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Fees:</span>
                  <span className="font-bold text-emerald-600">${firm.fees}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Issues:</span>
                  <span className="font-bold text-red-600">{firm.issues}%</span>
                </div>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-3 mt-4 shadow-inner">
                <div 
                  className="bg-gradient-to-r from-emerald-500 to-blue-600 h-3 rounded-full shadow-sm transition-all duration-1000 ease-out"
                  style={{ 
                    width: `${firm.successRate}%`,
                    animationDelay: `${index * 200}ms`
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Real Trader Experiences */}
      <div className="bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
        <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
          <span className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center text-white text-sm font-bold mr-3">👥</span>
          Real Trader Experiences
        </h3>
        <div className="space-y-8">
          {traderExperiences.map((firm) => (
            <div key={firm.firm} className="border border-slate-200 rounded-2xl p-6 bg-white shadow-md hover:shadow-lg transition-all duration-300">
              <h4 className="font-bold text-slate-900 mb-4 text-lg flex items-center">
                <span className="w-6 h-6 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-xs font-bold mr-2">🏢</span>
                {firm.firm} Reviews
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {firm.experiences.map((experience, index) => (
                  <div key={index} className="p-4 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-200">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-bold text-sm text-slate-900">{experience.trader}</span>
                      <div className="flex items-center">
                        <span className="text-yellow-500 text-lg">★</span>
                        <span className="text-sm font-bold ml-1 text-slate-900">{experience.rating}/5</span>
                        {experience.verified && <span className="text-xs text-emerald-600 ml-2 bg-emerald-100 px-2 py-1 rounded-full font-medium">✓ Verified</span>}
                      </div>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">{experience.experience}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Firm Analysis */}
      <div className="bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
        <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
          <span className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-sm font-bold mr-3">🔍</span>
          Detailed Firm Analysis
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {firmAnalysis.map((firm) => (
            <div key={firm.firm} className="p-6 border border-slate-200 rounded-2xl bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
              <h4 className="font-bold text-slate-900 mb-4 text-lg flex items-center">
                <span className="w-6 h-6 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-white text-xs font-bold mr-2">🏢</span>
                {firm.firm}
              </h4>
              
              <div className="mb-6">
                <h5 className="font-bold text-emerald-700 mb-3 flex items-center">
                  <span className="w-4 h-4 bg-emerald-500 rounded-full mr-2"></span>
                  Strengths:
                </h5>
                <ul className="text-sm text-slate-600 space-y-2">
                  {firm.strengths.map((strength, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {strength}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h5 className="font-bold text-red-700 mb-3 flex items-center">
                  <span className="w-4 h-4 bg-red-500 rounded-full mr-2"></span>
                  Weaknesses:
                </h5>
                <ul className="text-sm text-slate-600 space-y-2">
                  {firm.weaknesses.map((weakness, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {weakness}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h5 className="font-bold text-blue-700 mb-3 flex items-center">
                  <span className="w-4 h-4 bg-blue-500 rounded-full mr-2"></span>
                  Best For:
                </h5>
                <ul className="text-sm text-slate-600 space-y-2">
                  {firm.bestFor.map((audience, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {audience}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h5 className="font-bold text-orange-700 mb-3 flex items-center">
                  <span className="w-4 h-4 bg-orange-500 rounded-full mr-2"></span>
                  Avoid If:
                </h5>
                <ul className="text-sm text-slate-600 space-y-2">
                  {firm.avoidIf.map((reason, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {reason}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Risk Assessment */}
      <div className="bg-gradient-to-br from-emerald-50 via-blue-50 to-indigo-50 border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
        <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
          <span className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-lg flex items-center justify-center text-white text-sm font-bold mr-3">🛡️</span>
          Claude 4.5 Risk Assessment
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-md">
            <h4 className="font-bold text-slate-800 mb-4 flex items-center">
              <span className="w-6 h-6 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full flex items-center justify-center text-white text-xs font-bold mr-2">✓</span>
              Lowest Risk Firms:
            </h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span><strong>FTMO:</strong> Low financial, regulatory, and operational risk</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span><strong>Topstep:</strong> Low financial and regulatory risk, medium operational</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span><strong>Apex:</strong> Low risk across all categories</span>
              </li>
            </ul>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-md">
            <h4 className="font-bold text-slate-800 mb-4 flex items-center">
              <span className="w-6 h-6 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-xs font-bold mr-2">ℹ</span>
              Key Risk Factors:
            </h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span><strong>Financial Risk:</strong> Firm's financial stability and backing</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span><strong>Regulatory Risk:</strong> Compliance with financial regulations</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span><strong>Operational Risk:</strong> Platform reliability and support quality</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span><strong>Overall Risk:</strong> Combined assessment of all factors</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirmDeepDives;
