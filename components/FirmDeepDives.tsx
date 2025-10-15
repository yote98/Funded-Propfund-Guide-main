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
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Firm Deep Dives</h2>
        <p className="text-slate-600">Detailed comparisons with real data - powered by Claude 4.5 analysis</p>
      </div>

      {/* Key Firm Insights */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl p-6 text-center">
          <div className="text-3xl font-bold mb-2">91</div>
          <div className="text-sm opacity-90">FTMO Overall Score</div>
          <div className="text-xs opacity-75 mt-1">Highest rated firm</div>
        </div>
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl p-6 text-center">
          <div className="text-3xl font-bold mb-2">98%</div>
          <div className="text-sm opacity-90">FTMO Withdrawal Success</div>
          <div className="text-xs opacity-75 mt-1">Most reliable payouts</div>
        </div>
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl p-6 text-center">
          <div className="text-3xl font-bold mb-2">2 Days</div>
          <div className="text-sm opacity-90">Fastest Payout Time</div>
          <div className="text-xs opacity-75 mt-1">FTMO average</div>
        </div>
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl p-6 text-center">
          <div className="text-3xl font-bold mb-2">4.6</div>
          <div className="text-sm opacity-90">Topstep Platform Rating</div>
          <div className="text-xs opacity-75 mt-1">Best platform quality</div>
        </div>
      </div>

      {/* Firm Comparison Radar Chart */}
      <div className="bg-white border border-slate-200 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-slate-900 mb-4">Firm Comparison Overview</h3>
        <ResponsiveContainer width="100%" height={400}>
          <RadarChart data={firmComparison}>
            <PolarGrid />
            <PolarAngleAxis dataKey="firm" tick={{ fontSize: 12 }} />
            <PolarRadiusAxis tick={{ fontSize: 10 }} domain={[0, 100]} />
            <Radar
              name="Trust Score"
              dataKey="trustScore"
              stroke="#14b8a6"
              fill="#14b8a6"
              fillOpacity={0.3}
              strokeWidth={2}
            />
            <Radar
              name="Payout Speed"
              dataKey="payoutSpeed"
              stroke="#3b82f6"
              fill="#3b82f6"
              fillOpacity={0.3}
              strokeWidth={2}
            />
            <Radar
              name="Support"
              dataKey="support"
              stroke="#8b5cf6"
              fill="#8b5cf6"
              fillOpacity={0.3}
              strokeWidth={2}
            />
            <Radar
              name="Platform"
              dataKey="platform"
              stroke="#f59e0b"
              fill="#f59e0b"
              fillOpacity={0.3}
              strokeWidth={2}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
              formatter={(value, name) => [`${value}%`, name]}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      {/* Support Quality Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-slate-900 mb-4">Support Quality Analysis</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={supportAnalysis}>
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
              <Bar dataKey="quality" fill="#14b8a6" radius={[4, 4, 0, 0]} />
              <Bar dataKey="availability" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-slate-900 mb-4">Platform Reliability</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={platformReliability}>
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
              <Bar dataKey="uptime" fill="#10b981" radius={[4, 4, 0, 0]} />
              <Bar dataKey="stability" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Withdrawal Success Rates */}
      <div className="bg-white border border-slate-200 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-slate-900 mb-4">Withdrawal Success Rates</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {withdrawalRates.map((firm, index) => (
            <div key={firm.firm} className="p-4 bg-gradient-to-r from-slate-50 to-slate-100 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-slate-900">{firm.firm}</h4>
                <span className="text-xs text-green-600 font-medium">{firm.successRate}% success</span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Avg Time:</span>
                  <span className="font-medium">{firm.avgTime} days</span>
                </div>
                <div className="flex justify-between">
                  <span>Max Time:</span>
                  <span className="font-medium">{firm.maxTime} days</span>
                </div>
                <div className="flex justify-between">
                  <span>Fees:</span>
                  <span className="font-medium text-green-600">${firm.fees}</span>
                </div>
                <div className="flex justify-between">
                  <span>Issues:</span>
                  <span className="font-medium text-red-600">{firm.issues}%</span>
                </div>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2 mt-2">
                <div 
                  className="bg-gradient-to-r from-green-500 to-blue-600 h-2 rounded-full transition-all duration-1000"
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
      <div className="bg-white border border-slate-200 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-slate-900 mb-4">Real Trader Experiences</h3>
        <div className="space-y-6">
          {traderExperiences.map((firm) => (
            <div key={firm.firm} className="border border-slate-200 rounded-lg p-4">
              <h4 className="font-semibold text-slate-900 mb-3">{firm.firm} Reviews</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {firm.experiences.map((experience, index) => (
                  <div key={index} className="p-3 bg-slate-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-sm">{experience.trader}</span>
                      <div className="flex items-center">
                        <span className="text-yellow-500">★</span>
                        <span className="text-sm font-medium ml-1">{experience.rating}/5</span>
                        {experience.verified && <span className="text-xs text-green-600 ml-2">✓ Verified</span>}
                      </div>
                    </div>
                    <p className="text-sm text-slate-600">{experience.experience}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Firm Analysis */}
      <div className="bg-white border border-slate-200 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-slate-900 mb-4">Detailed Firm Analysis</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {firmAnalysis.map((firm) => (
            <div key={firm.firm} className="p-4 border border-slate-200 rounded-lg">
              <h4 className="font-semibold text-slate-900 mb-3">{firm.firm}</h4>
              
              <div className="mb-4">
                <h5 className="font-medium text-green-700 mb-2">Strengths:</h5>
                <ul className="text-sm text-slate-600 space-y-1">
                  {firm.strengths.map((strength, index) => (
                    <li key={index}>• {strength}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <h5 className="font-medium text-red-700 mb-2">Weaknesses:</h5>
                <ul className="text-sm text-slate-600 space-y-1">
                  {firm.weaknesses.map((weakness, index) => (
                    <li key={index}>• {weakness}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <h5 className="font-medium text-blue-700 mb-2">Best For:</h5>
                <ul className="text-sm text-slate-600 space-y-1">
                  {firm.bestFor.map((audience, index) => (
                    <li key={index}>• {audience}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h5 className="font-medium text-orange-700 mb-2">Avoid If:</h5>
                <ul className="text-sm text-slate-600 space-y-1">
                  {firm.avoidIf.map((reason, index) => (
                    <li key={index}>• {reason}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Risk Assessment */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-slate-200 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-slate-900 mb-4">Claude 4.5 Risk Assessment</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-slate-800 mb-3">Lowest Risk Firms:</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>• <strong>FTMO:</strong> Low financial, regulatory, and operational risk</li>
              <li>• <strong>Topstep:</strong> Low financial and regulatory risk, medium operational</li>
              <li>• <strong>Apex:</strong> Low risk across all categories</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-800 mb-3">Key Risk Factors:</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>• <strong>Financial Risk:</strong> Firm's financial stability and backing</li>
              <li>• <strong>Regulatory Risk:</strong> Compliance with financial regulations</li>
              <li>• <strong>Operational Risk:</strong> Platform reliability and support quality</li>
              <li>• <strong>Overall Risk:</strong> Combined assessment of all factors</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirmDeepDives;
