import React, { useState } from 'react';

interface SuccessProbabilityProps {
  evaluationPassRate: number;
  averageTimeToPass: string;
  traderRetentionRate: number;
  scalingSuccessRate: number;
}

const SuccessProbability: React.FC<SuccessProbabilityProps> = ({
  evaluationPassRate,
  averageTimeToPass,
  traderRetentionRate,
  scalingSuccessRate
}) => {
  const [tradingExperience, setTradingExperience] = useState<'Beginner' | 'Intermediate' | 'Advanced'>('Intermediate');
  const [riskManagement, setRiskManagement] = useState<'Poor' | 'Average' | 'Good' | 'Excellent'>('Average');
  const [strategyType, setStrategyType] = useState<'Scalping' | 'Day Trading' | 'Swing Trading' | 'Position Trading'>('Day Trading');
  const [psychology, setPsychology] = useState<'Poor' | 'Average' | 'Good' | 'Excellent'>('Average');

  const calculateSuccessProbability = () => {
    let baseProbability = 0;
    
    // Base probability from firm data (if available)
    if (evaluationPassRate > 0) {
      baseProbability = evaluationPassRate;
    } else {
      // Industry average if no data
      baseProbability = 25;
    }
    
    // Experience factor
    const experienceMultiplier = {
      'Beginner': 0.6,
      'Intermediate': 1.0,
      'Advanced': 1.4
    };
    
    // Risk management factor
    const riskMultiplier = {
      'Poor': 0.5,
      'Average': 0.8,
      'Good': 1.2,
      'Excellent': 1.5
    };
    
    // Strategy type factor
    const strategyMultiplier = {
      'Scalping': 0.7,
      'Day Trading': 1.0,
      'Swing Trading': 1.2,
      'Position Trading': 1.1
    };
    
    // Psychology factor
    const psychologyMultiplier = {
      'Poor': 0.4,
      'Average': 0.8,
      'Good': 1.3,
      'Excellent': 1.6
    };
    
    const adjustedProbability = baseProbability * 
      experienceMultiplier[tradingExperience] * 
      riskMultiplier[riskManagement] * 
      strategyMultiplier[strategyType] * 
      psychologyMultiplier[psychology];
    
    return Math.min(Math.max(adjustedProbability, 5), 95); // Cap between 5% and 95%
  };

  const getProbabilityColor = (probability: number) => {
    if (probability >= 70) return 'text-green-600 bg-green-100';
    if (probability >= 50) return 'text-blue-600 bg-blue-100';
    if (probability >= 30) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const getProbabilityIcon = (probability: number) => {
    if (probability >= 70) return '🚀';
    if (probability >= 50) return '📈';
    if (probability >= 30) return '⚠️';
    return '🔴';
  };

  const getSuccessRecommendations = (probability: number) => {
    const recommendations = [];
    
    if (probability < 30) {
      recommendations.push('📚 Focus on education and paper trading first');
      recommendations.push('🎯 Improve risk management skills');
      recommendations.push('🧠 Work on trading psychology');
      recommendations.push('💰 Start with smaller account sizes');
    } else if (probability < 50) {
      recommendations.push('⚖️ Moderate success probability - continue learning');
      recommendations.push('📊 Practice with demo accounts');
      recommendations.push('🎯 Develop a solid trading plan');
    } else if (probability < 70) {
      recommendations.push('✅ Good success probability - you\'re on the right track');
      recommendations.push('🚀 Consider taking the evaluation');
      recommendations.push('📈 Focus on consistency');
    } else {
      recommendations.push('🎉 Excellent success probability - you\'re ready!');
      recommendations.push('🚀 High chance of passing evaluation');
      recommendations.push('📈 Consider scaling up after success');
    }
    
    return recommendations;
  };

  const successProbability = calculateSuccessProbability();
  const recommendations = getSuccessRecommendations(successProbability);

  return (
    <div className="bg-white border border-slate-200 rounded-lg p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-slate-900">Success Probability</h3>
        <div className="flex items-center space-x-1">
          <span className="text-xs text-slate-500">Sources:</span>
          <a href="https://payoutjunction.com" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:text-blue-800 underline">
            PJ
          </a>
          <span className="text-xs text-slate-400">•</span>
          <a href="https://financemagnates.com" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:text-blue-800 underline">
            FM
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-4">
        {/* Success Probability Row */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-slate-700">Success Probability:</span>
          <div className="flex items-center space-x-3">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getProbabilityColor(successProbability)}`}>
              <span className="mr-1">{getProbabilityIcon(successProbability)}</span>
              {successProbability.toFixed(1)}%
            </span>
            <div className="w-24 bg-slate-200 rounded-full h-2">
              <div 
                className={`h-2 rounded-full ${
                  successProbability >= 70 ? 'bg-green-500' : 
                  successProbability >= 50 ? 'bg-blue-500' : 
                  successProbability >= 30 ? 'bg-yellow-500' : 'bg-red-500'
                }`}
                style={{ width: `${successProbability}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Your Profile - Clean Grid */}
        <div>
          <h4 className="text-sm font-semibold text-slate-900 mb-3">Your Profile</h4>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="bg-blue-50 p-3 rounded-lg border border-blue-200 text-center">
              <div className="text-xs text-blue-600 font-medium mb-1">Experience</div>
              <div className="text-sm font-semibold text-blue-700">{tradingExperience}</div>
            </div>
            
            <div className="bg-green-50 p-3 rounded-lg border border-green-200 text-center">
              <div className="text-xs text-green-600 font-medium mb-1">Risk Mgmt</div>
              <div className="text-sm font-semibold text-green-700">{riskManagement}</div>
            </div>
            
            <div className="bg-purple-50 p-3 rounded-lg border border-purple-200 text-center">
              <div className="text-xs text-purple-600 font-medium mb-1">Strategy</div>
              <div className="text-sm font-semibold text-purple-700">{strategyType}</div>
            </div>
            
            <div className="bg-orange-50 p-3 rounded-lg border border-orange-200 text-center">
              <div className="text-xs text-orange-600 font-medium mb-1">Psychology</div>
              <div className="text-sm font-semibold text-orange-700">{psychology}</div>
            </div>
          </div>
        </div>
        
        {/* Firm Stats - Clean Grid */}
        <div>
          <h4 className="text-sm font-semibold text-slate-900 mb-3">Firm Statistics</h4>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-center">
              <div className="text-xs text-slate-600 font-medium mb-1">Pass Rate</div>
              <div className="text-sm font-semibold text-slate-900">
                {evaluationPassRate > 0 ? `${evaluationPassRate}%` : 'Avg'}
              </div>
            </div>
            
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-center">
              <div className="text-xs text-slate-600 font-medium mb-1">Avg Time</div>
              <div className="text-sm font-semibold text-slate-900">{averageTimeToPass}</div>
            </div>
            
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-center">
              <div className="text-xs text-slate-600 font-medium mb-1">Retention</div>
              <div className="text-sm font-semibold text-slate-900">
                {traderRetentionRate > 0 ? `${traderRetentionRate}%` : 'N/A'}
              </div>
            </div>
            
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-center">
              <div className="text-xs text-slate-600 font-medium mb-1">Scaling</div>
              <div className="text-sm font-semibold text-slate-900">
                {scalingSuccessRate > 0 ? `${scalingSuccessRate}%` : 'N/A'}
              </div>
            </div>
          </div>
        </div>

        {/* Success Recommendations - Clean List */}
        <div className="bg-slate-50 rounded-lg p-3">
          <h4 className="text-sm font-semibold text-slate-900 mb-2">Success Recommendations</h4>
          <div className="space-y-2">
            {recommendations.slice(0, 3).map((rec, index) => (
              <div key={index} className="flex items-start text-sm text-slate-700">
                <span className="mr-2 text-lg">{rec.split(' ')[0]}</span>
                <span className="leading-relaxed">{rec.split(' ').slice(1).join(' ')}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Disclaimer */}
      <div className="mt-4 pt-3 border-t border-slate-200">
        <p className="text-xs text-slate-500">
          <strong>Disclaimer:</strong> Educational purposes only. Success depends on many factors.
        </p>
      </div>
    </div>
  );
};

export default SuccessProbability;
